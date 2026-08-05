# Battle Forge Technical Defense Guide

This document explains the project in more technical detail. It is written as study material for defending the app: what the app does, why the architecture was chosen, how data moves through the app, and how the main files work together.

## 1. Project Goal

Battle Forge is a mobile application for managing Warhammer 40K army compositions. A user can create an account, log in, create personal army lists, select an army faction, add units, and track whether the list stays within a 2000 point limit.

The app also contains an information section with profile settings, game rules, and army rules. The project demonstrates mobile app structure, navigation, state management, Firebase integration, form validation, typed data models, reusable components, and consistent styling.

## 2. High-Level Architecture

The app is built in layers:

```text
App.tsx
  Providers
    Redux Provider
    Redux PersistGate
    SafeAreaProvider
    AuthProvider
    ThemeProvider
  Navigation
    AuthStack OR BattleForgeInformationDrawerStack

Screens
  Use hooks for logic
  Use components for UI pieces
  Use stylesheets for styling

Hooks
  Connect screens to Redux, Firebase, navigation, and local state

Services
  Contain Firebase Authentication and Firestore calls

Store
  Contains global Redux state and reducers

Types
  Define the shape of armies, units, and compositions
```

The most important idea is separation of responsibility:

- Screens decide what should be shown.
- Components render reusable UI parts.
- Hooks contain reusable screen logic.
- Services communicate with Firebase.
- Redux stores app-wide army composition state.
- Contexts store app-wide auth and theme state.
- Stylesheets keep layout and design separate from logic.

## 3. App Startup Flow

The app starts in `App.tsx`.

Important steps:

1. `Provider` makes the Redux store available everywhere.
2. `PersistGate` waits until saved Redux state is loaded from the device.
3. `SafeAreaProvider` helps screens avoid notches and system UI areas.
4. `AuthProvider` listens to Firebase Authentication.
5. `ThemeProvider` loads and stores the selected theme.
6. `AppContent` waits for authentication, fonts, and the splash delay.
7. If there is no logged-in user, the app shows `AuthStack`.
8. If there is a logged-in user, the app shows the main drawer navigation.

This means the user does not manually choose whether they are logged in. Firebase tells the app the current authentication state, and the app switches navigation automatically.

## 4. Authentication

Authentication is handled through Firebase Authentication.

### Important Files

- `src/config/firebase.ts`
- `src/contexts/AuthContext.tsx`
- `src/services/authService.ts`
- `src/hooks/useAuth.ts`
- `src/navigation/AuthStack.tsx`
- `src/screens/LoginScreen.tsx`
- `src/screens/RegisterScreen.tsx`

### AuthContext

`AuthContext.tsx` wraps the app and stores:

- `currentUser`: the Firebase user object or `null`
- `loading`: whether Firebase is still checking login state

It uses `onAuthStateChanged`. This Firebase listener runs when:

- the app starts
- a user logs in
- a user registers
- a user logs out

The reason for using context here is that many screens need to know whether a user exists. Without context, the user would have to be passed manually through many components.

### authService

`authService.ts` keeps Firebase auth calls in one place:

- `register`
- `login`
- `logout`
- `updateUserEmail`
- `updateUserPassword`

Email and password updates require reauthentication because Firebase treats them as sensitive actions. The user must prove they know the current password before changing account details.

## 5. Navigation

The app uses React Navigation with stacks and a drawer.

### AuthStack

`AuthStack` contains:

- Login screen
- Register screen

Headers are hidden in this stack because the login/register screens have their own layout.

### Main Drawer

`BattleForgeInformationDrawerStack` is the main navigation after login.

It contains two drawer sections:

- `BattleForgeStack`
- `InformationStack`

The drawer separates the main army-building workflow from informational/profile screens.

### BattleForgeStack

`BattleForgeStack` contains:

- `Home`
- `CreateArmyComposition`
- `ArmyComposition`

The `ArmyComposition` screen receives the selected composition as a route parameter:

```ts
ArmyComposition: {
  armyComposition: ArmyComposition;
}
```

This is typed with TypeScript so navigation mistakes are caught during development.

### InformationStack

`InformationStack` contains:

- Information home
- Profile
- Game rules
- Army rules

These screens are grouped under the Information drawer tab.

## 6. Data Model

The app has typed models in `src/types`.

### Army

An army contains:

- `id`
- `name`
- `armyRule`
- `imageKey`
- `units`

The `imageKey` links Firestore data to a local image in `src/utils/armyImages.ts`.

### Unit

A unit contains information such as:

- `id`
- `name`
- `points`
- unit stats/rules

### SelectedUnit

A selected unit is a unit that was added to a specific army composition.

It receives an extra `armyCompositionUnitId`. This matters because a user can add the same unit type more than once. If the app only used the normal unit id, removing one copy could remove every copy of that unit. The extra id makes each selected copy unique.

### ArmyComposition

An army composition contains:

- `id`
- `name`
- `army`
- `units`
- `totalPoints`

It represents one saved army list for one user.

## 7. Firestore Structure

Firestore stores two kinds of data.

### Shared Army Data

```text
armies/{armyId}
```

This is global data. Every user can read the same armies and units.

### User Army Compositions

```text
users/{userId}/armyCompositions/{armyCompositionId}
```

This data belongs to one logged-in user. Storing army compositions under the user id prevents users from mixing their saved lists.

## 8. Firestore Service Layer

Firebase calls are placed in `src/services/firestoreService.ts`.

Main functions:

- `subscribeToArmyCompositions`
- `saveArmyComposition`
- `updateArmyCompositionUnits`
- `deleteArmyComposition`
- `seedArmies`
- `getArmies`

The service layer is useful because screens do not need to know exact Firestore collection paths. If a Firestore path changes later, the change can be made in one service file instead of many screens.

### Real-Time Subscription

`subscribeToArmyCompositions` uses `onSnapshot`.

This means Firestore keeps a live listener open. When the database changes, Firestore sends the latest documents to the app. The app then updates Redux with the new list.

This is better than manually refreshing because the app stays synchronized automatically.

### Merge Update

`updateArmyCompositionUnits` uses `setDoc` with `{ merge: true }`.

That updates only:

- `units`
- `totalPoints`

It does not overwrite the composition name or selected army.

## 9. Redux State

Redux is used for army compositions because they are shared between multiple screens.

Important files:

- `src/store/index.ts`
- `src/store/hooks.ts`
- `src/features/armyCompositions/armyCompositionSlice.ts`

### Why Redux Is Used

The home screen needs all army compositions.

The detail screen changes units and total points.

When the detail screen changes something, the home screen should also show the updated point total. Redux gives both screens access to the same shared state.

### Redux Persist

Redux Persist stores Redux state in `AsyncStorage`.

This means local Redux data can survive app restarts. Firestore is still the main remote database, but persistence improves the local user experience.

### Slice Actions

The army composition slice supports:

- loading all compositions from Firestore
- clearing compositions on logout
- adding a new composition
- updating units and total points
- deleting a composition

Redux Toolkit uses Immer internally, so reducers can look like they directly change state while still keeping Redux state immutable.

## 10. Hooks

Hooks keep screen files cleaner by moving logic out of the JSX.

### useLoadArmyCompositions

This hook subscribes to Firestore when a user is logged in.

Flow:

1. Check if there is a current user.
2. Subscribe to that user's Firestore army compositions.
3. Convert Firestore documents into app objects.
4. Dispatch the loaded compositions into Redux.
5. Unsubscribe when the component unmounts or the user changes.

This hook is called in `App.tsx`, so loading starts globally after login.

### useArmyCompositions

This hook gives screens access to:

- `armyCompositions`
- `deleteComposition`

It reads compositions from Redux and deletes from both Redux and Firestore.

### useArmies

This hook loads the shared army list from Firestore.

It is used by the create screen so the user can choose a faction.

### useCreateArmyComposition

This hook owns the create-composition workflow.

Flow:

1. User selects an army.
2. User enters a composition name.
3. Formik validates the name.
4. The hook checks that an army was selected.
5. The hook checks that the user is logged in.
6. A new id is generated with `uuid`.
7. The composition is added to Redux.
8. The composition is saved to Firestore.
9. The app navigates to the detail screen.

### useArmyCompositionUnits

This hook owns unit management in the detail screen.

It handles:

- selected units
- total points
- over-2000-point warning
- adding units
- removing units
- saving updates to Redux
- saving updates to Firestore

The hook updates local state first so the screen responds immediately, then updates Redux and Firestore.

## 11. Forms And Validation

The app uses Formik for form state and Yup for validation.

Important validation files:

- `loginValidationSchema.ts`
- `registerValidationSchema.ts`
- `createArmyCompositionValidationSchema.ts`
- `changeEmailValidationSchema.ts`
- `changePasswordValidationSchema.ts`

Formik tracks:

- input values
- touched fields
- validation errors
- submit handling

Yup defines the rules. For example, a form can require an email format or a minimum password length.

This keeps form logic consistent and avoids writing manual validation logic inside every screen.

## 12. Styling And Theme

Styling is kept in `src/styles`.

Each screen or reusable component has its own stylesheet. This keeps JSX easier to read and makes styling easier to find.

The theme system uses:

- `src/contexts/ThemeContext.tsx`
- `src/hooks/useTheme.ts`
- `src/styles/themeColors.ts`

The current theme is stored in `AsyncStorage`, so the app remembers the theme after restart.

Important design decision:

- Card text uses theme colors.
- Some titles and header text stay readable over background images.
- Header icons and text stay white because the header background image is dark and detailed.

## 13. Images And Assets

Images are stored in:

```text
src/assets/images
```

The app uses:

- screen background image
- header background image
- splash background image
- army faction images
- header icon

Army faction images are mapped in:

```text
src/utils/armyImages.ts
```

Firestore stores an `imageKey`, not the image file itself. The app uses that key to select the correct local image. This is useful because React Native image `require` calls work best with known local assets.

## 14. Screen Responsibilities

### HomeScreen

Shows the user's saved army compositions.

Responsibilities:

- read compositions through `useArmyCompositions`
- render a `FlatList`
- open an army composition when a card is pressed
- delete a composition when the trash icon is pressed
- navigate to the create screen

### CreateArmyCompositionScreen

Creates a new army composition.

Responsibilities:

- load armies with `useArmies`
- allow the user to select an army
- render `CreateArmyCompositionForm`
- call `createArmyComposition`
- keep temporary seed code available for Firestore reseeding

### ArmyCompositionScreen

Shows and edits one composition.

Responsibilities:

- receive the selected composition from navigation params
- show army summary and total points
- show selected units
- open `SelectUnitModal`
- add and remove units through `useArmyCompositionUnits`

### ProfileScreen

Shows account and settings.

Responsibilities:

- show logged-in email
- show current theme
- toggle theme
- update email
- update password
- log out
- clear Redux army data on logout

### Information Screens

These screens show app information, game rules, and army rules. They are kept in their own stack so the drawer navigation remains organized.

## 15. Important User Workflows

### Login Workflow

```text
User submits login form
  authService.login
    Firebase Authentication checks credentials
      AuthContext listener receives currentUser
        App.tsx switches from AuthStack to DrawerStack
```

### Create Army Composition Workflow

```text
User opens create screen
  useArmies loads factions from Firestore
    User enters name and selects faction
      Formik validates name
        useCreateArmyComposition creates object
          Redux receives new composition
          Firestore saves new composition
          Navigation opens ArmyComposition screen
```

### Add Unit Workflow

```text
User opens composition
  User presses add unit
    SelectUnitModal opens
      User selects unit
        useArmyCompositionUnits creates selected unit copy
          totalPoints recalculates
          local state updates
          Redux updates
          Firestore updates units and totalPoints
```

### Logout Workflow

```text
User presses logout
  Redux compositions are cleared
    Firebase signs out
      AuthContext receives currentUser = null
        App.tsx switches back to AuthStack
```

## 16. TypeScript Benefits

TypeScript is used to make the app safer and easier to defend.

Examples:

- Navigation params are typed.
- Army, unit, and composition data are typed.
- Redux state is typed.
- Custom Redux hooks use `AppDispatch` and `RootState`.
- Components define their props.

This helps catch mistakes before the app runs. For example, if a screen tries to navigate with the wrong parameter shape, TypeScript can warn during development.

## 17. Why FlatList Is Used

The app uses `FlatList` for lists such as:

- army compositions
- available armies
- selected units
- modal unit list

`FlatList` is better than manually mapping inside a `ScrollView` for larger lists because React Native can render list items more efficiently.

## 18. Why SafeAreaView Is Used

Mobile devices have notches, rounded corners, status bars, and navigation bars. `SafeAreaView` helps content avoid those areas.

The app often uses:

```ts
edges={["left", "right", "bottom"]}
```

The top edge is handled by the custom header, so screen content does not need to add extra top safe area spacing.

## 19. Why KeyboardAvoidingView Is Used

Login, register, profile, and create screens contain text inputs.

`KeyboardAvoidingView` helps prevent the keyboard from covering inputs when the user types.

The behavior changes by platform:

```ts
behavior={Platform.OS === "ios" ? "padding" : "height"}
```

This handles iOS and Android keyboard behavior more appropriately.

## 20. Seeding Firestore

The project keeps commented seed code in `CreateArmyCompositionScreen.tsx`.

Purpose:

- If Firestore army data is deleted or broken, the developer can temporarily uncomment the seed imports and seed button.
- Pressing the seed button writes `src/data/mockArmies.ts` into the Firestore `armies` collection.

This code is commented because normal users should not see a database seed button.

## 21. Testing And Checks

Current project checks:

```bash
npm run lint
npx tsc --noEmit
```

`npm run lint` checks code style and common React/TypeScript issues.

`npx tsc --noEmit` checks TypeScript without creating build output.

These checks are useful before a demo because they confirm the project has no obvious lint or type errors.

## 22. Defense Talking Points

Good points to mention during defense:

- The app separates UI, logic, Firebase calls, and state management.
- Firebase Auth controls whether the user sees auth screens or the main app.
- Firestore stores shared army data separately from user-specific compositions.
- Redux keeps army compositions synchronized between screens.
- Redux Persist improves user experience by saving local state.
- Hooks make screen components cleaner and easier to understand.
- TypeScript makes navigation, props, and data models safer.
- Formik and Yup provide structured validation.
- ThemeContext provides global light/dark theme state.
- The custom header and shared styles keep the app visually consistent.
- The seed helper is intentionally commented for developer-only database recovery.

## 23. Common Questions And Suggested Answers

### Why use Firebase?

Firebase provides both authentication and a cloud database. This makes it possible to log in users and store their army compositions without building a custom backend.

### Why use Redux if Firestore already stores the data?

Firestore is the remote database. Redux is the local app state. Redux lets multiple screens immediately share the same data while Firestore keeps it saved remotely.

### Why use custom hooks?

Custom hooks move logic out of screens. This keeps screens focused on rendering UI and makes logic easier to reuse and explain.

### Why store compositions under `users/{userId}`?

Because compositions belong to a specific user. This structure keeps each user's army lists separate.

### Why does a selected unit need a unique id?

Because the same unit can be added more than once. A unique selected-unit id allows the app to remove one copy without removing all copies.

### Why is the theme stored in AsyncStorage?

So the app remembers the user's light/dark theme choice after closing and reopening.

### Why are some imports from `src/assets/images` instead of the root `assets` folder?

The project keeps app image imports centralized in `src/assets/images` to avoid duplicate assets and make image paths consistent.

### Why are comments added?

The comments explain the code for readers who are not frontend developers. They focus on what the code does and why it exists, which is useful for maintainability and project defense.

## 24. Runtime Dependencies

The app depends on Expo and React Native for the mobile runtime, Firebase for backend services, Redux for shared client state, and React Navigation for app navigation.

Important runtime packages:

- `expo`: development runtime and platform tooling
- `react-native`: native mobile UI framework
- `@react-navigation/native`, `@react-navigation/stack`, `@react-navigation/drawer`: navigation
- `firebase`: Authentication and Firestore SDK
- `@reduxjs/toolkit`, `react-redux`, `redux-persist`: global state and persistence
- `@react-native-async-storage/async-storage`: local persistence for Redux Persist and theme preference
- `formik`, `yup`: form state and validation
- `react-native-uuid`: unique ids for compositions and selected unit copies
- `expo-font`: loading the custom font

Development packages:

- `typescript`: static type checking
- `eslint`, `eslint-config-expo`: linting
- `prettier`, `eslint-plugin-prettier`, `eslint-config-prettier`: formatting support

## 25. Fresh Clone Setup

From a fresh clone, the expected setup is:

```bash
npm install
npm start
```

Then choose a target from the Expo terminal:

- Android emulator
- iOS simulator
- Expo Go on a physical device
- Web browser

The project also exposes direct scripts:

```bash
npm run android
npm run ios
npm run web
```

Before presenting or submitting the project, run:

```bash
npm run lint
npx tsc --noEmit
```

## 26. Firebase Configuration Details

Firebase is initialized in:

```text
src/config/firebase.ts
```

The file exports:

- `auth`: used by the authentication service and auth context
- `database`: used by the Firestore service and data-loading hooks

The app expects these Firebase products:

- Authentication with email/password provider enabled
- Firestore database enabled

The app reads from and writes to two main Firestore areas:

```text
armies/{armyId}
users/{userId}/armyCompositions/{armyCompositionId}
```

The `armies` collection is shared data. Every logged-in user sees the same armies.

The `users/{userId}/armyCompositions` subcollection is private user data from the app's perspective. Every composition is stored beneath the authenticated Firebase user's uid.

## 27. Firestore Document Examples

Example army document:

```json
{
  "id": "2",
  "name": "Ultramarines",
  "armyRule": "Oath of Moment",
  "imageKey": "ultramarines",
  "units": [
    {
      "id": "4",
      "name": "Intercessor Squad",
      "movement": 6,
      "toughness": 4,
      "save": 3,
      "wounds": 2,
      "leadership": 6,
      "objectControl": 2,
      "ability": "Objective Secured",
      "points": 80
    }
  ]
}
```

Example army composition document:

```json
{
  "id": "generated-uuid",
  "name": "Demo List",
  "army": {
    "id": "2",
    "name": "Ultramarines",
    "armyRule": "Oath of Moment",
    "imageKey": "ultramarines",
    "units": []
  },
  "units": [],
  "totalPoints": 0
}
```

When units are added, they are stored as selected units. A selected unit has the normal unit fields plus:

```text
armyCompositionUnitId
```

That id is generated on selection and identifies one specific copy inside the composition.

## 28. Image Key Mapping

Firestore stores simple image keys instead of image paths.

Example:

```text
imageKey: "ultramarines"
```

The app converts that key to a local image through:

```text
src/utils/armyImages.ts
```

This approach is important in React Native because local images are usually loaded with static `require` calls. Firestore can store small stable strings, while the app remains responsible for bundling and loading actual image files.

When adding a new army, update all of these places:

- Add the army document in Firestore or `src/data/mockArmies.ts`
- Add the local image file in `src/assets/images`
- Add the new key to `src/utils/armyImages.ts`
- Make sure the Firestore `imageKey` matches the TypeScript key

## 29. Error Handling Behavior

The app keeps error handling simple and user-facing.

Authentication screens show login/register errors through local screen state. Profile update actions show a short success or failure message. The create composition workflow shows validation messages when the composition name or army selection is missing.

Firestore write functions are awaited by hooks. If a Firestore write fails, the current implementation does not yet have a rollback system for optimistic Redux updates. That is acceptable for the current project scope, but it is a good improvement point to mention honestly during a defense.

## 30. Known Limitations

The current version is intentionally scoped for a coursework/demo app.

Known limitations:

- No automated test suite is included yet.
- Army data is sample project data, not a complete official Warhammer 40K data source.
- There is no offline conflict-resolution strategy beyond Redux Persist's local cache.
- Firestore security rules are not stored in this repository.
- There is no admin UI for managing armies and units.
- Unit selection does not currently enforce a hard 2000 point limit; it warns when the total is above the limit.
- The same unit can be added multiple times, which is supported by design.

## 31. Suggested Future Improvements

Possible future improvements:

- Add unit tests for hooks and reducers.
- Add integration tests for login, create composition, and add unit workflows.
- Add a Firestore rules file to the repository.
- Move Firebase config values to environment-specific config if the app grows beyond the demo stage.
- Add loading and error states around Firestore writes.
- Add an admin-only army data management screen.
- Add sorting or filtering for unit selection.
- Add more armies, units, and rule details.
- Add hard validation rules for matched-play army limits.

## 32. Troubleshooting

### The app starts but no armies appear

Check that the Firestore `armies` collection exists and contains documents with the expected fields. If the collection is empty, temporarily use the seed helper with `src/data/mockArmies.ts`.

### Login or registration fails

Check that Firebase Authentication is enabled and that the email/password provider is turned on in the Firebase console.

### Email update says verification email sent but the app still shows the old email

This is expected. The app uses Firebase `verifyBeforeUpdateEmail`, so Firebase waits until the user verifies the new email address.

### A local image does not appear

Check that the army's Firestore `imageKey` matches one of the keys in `src/utils/armyImages.ts`, and that the referenced image exists under `src/assets/images`.

### Navigation types fail during TypeScript checking

Check the relevant stack param list:

- `src/navigation/BattleForgeStack.tsx`
- `src/navigation/InformationStack.tsx`
- `src/navigation/BattleForgeInformationDrawerStack.tsx`

Route parameters must match these TypeScript definitions.

## 33. Submission Checklist

Before submitting or demoing:

- Run `npm install` after pulling the latest code.
- Run `npm run lint`.
- Run `npx tsc --noEmit`.
- Confirm Firebase Authentication works with a test account.
- Confirm the Firestore `armies` collection is populated.
- Create a new composition.
- Add and remove at least one unit.
- Confirm total points update correctly.
- Confirm the over-2000 warning appears.
- Confirm logout returns to the login screen.
- Confirm theme switching persists after restarting the app.
