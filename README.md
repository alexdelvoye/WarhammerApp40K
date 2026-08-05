# Battle Forge

Battle Forge is a React Native Expo app for creating and managing Warhammer 40K army compositions. Users can register or log in, create personal army lists, choose a faction, add and remove units, track total points, read rule information, manage account details, and switch between light and dark themes.

The app was built as a mobile programming project and is structured to demonstrate React Native navigation, reusable components, typed models, Firebase integration, Redux state management, validation, and persistent local preferences.

## Features

- Email/password registration and login with Firebase Authentication
- Personal army compositions stored per Firebase user
- Shared army and unit data loaded from Firestore
- Create and delete army compositions
- Add and remove units from a composition
- Automatic total point calculation
- Warning state when a composition goes above 2000 points
- Drawer navigation between Battle Forge and Information sections
- Information screens for game rules and army rules
- Profile screen with theme, email, password, and logout actions
- Light/dark theme support saved in AsyncStorage
- Redux Persist support so local state survives app restarts
- Shared custom header, background imagery, army artwork, and medieval-style font

## Tech Stack

- React Native
- Expo
- TypeScript
- React Navigation
- Redux Toolkit
- Redux Persist
- Firebase Authentication
- Firebase Firestore
- AsyncStorage
- Formik
- Yup

## Project Structure

```text
src/
  assets/          Images and fonts used by the app
  components/      Reusable buttons, cards, forms, and modals
  config/          Firebase setup
  contexts/        Global auth and theme providers
  data/            Local seed data for Firestore
  features/        Redux slices
  hooks/           Reusable app logic
  navigation/      Drawer and stack navigation
  screens/         Full app screens
  services/        Firebase service functions
  store/           Redux store setup and typed hooks
  styles/          Stylesheets per screen/component
  types/           TypeScript data models
  utils/           Helper mappings such as army images
  validation/      Yup validation schemas
docs/
  *.html           Study notes exported as HTML
  *.pdf            Study notes exported as PDFs
```

## Requirements

- Node.js
- npm
- Expo CLI through `npx expo`
- Android Studio or the Expo Go app for Android testing
- Xcode or the Expo Go app for iOS testing
- A Firebase project with Authentication and Firestore enabled

## Installation

Install dependencies:

```bash
npm install
```

Start the Expo development server:

```bash
npm start
```

Run directly on Android:

```bash
npm run android
```

Run directly on iOS:

```bash
npm run ios
```

Run in the browser:

```bash
npm run web
```

## Available Scripts

```bash
npm start        # Start Expo
npm run android  # Start Expo and open Android target
npm run ios      # Start Expo and open iOS target
npm run web      # Start Expo for web
npm run lint     # Run Expo linting
```

TypeScript can be checked with:

```bash
npx tsc --noEmit
```

## Firebase Setup

The Firebase configuration lives in:

```text
src/config/firebase.ts
```

The current app expects:

- Firebase Authentication with email/password sign-in enabled
- Cloud Firestore enabled
- A top-level `armies` collection for shared faction and unit data
- User-specific army compositions under each user's document

Shared army data:

```text
armies/{armyId}
```

User army compositions:

```text
users/{userId}/armyCompositions/{armyCompositionId}
```

Each `Army` document stores:

```text
id
name
armyRule
imageKey
units
```

Each `Unit` stores:

```text
id
name
movement
toughness
save
wounds
leadership
objectControl
ability
points
```

There is development seed data in:

```text
src/data/mockArmies.ts
```

The Firestore service includes a `seedArmies` helper. The create screen keeps seed code commented out so the global `armies` collection can be rebuilt during development or a demo without exposing a seed button to normal users.

## Usage

1. Start the app with Expo.
2. Register a new account or log in with an existing account.
3. Use the Battle Forge home screen to view saved army compositions.
4. Press the add button to create a new composition.
5. Enter a composition name and select a faction.
6. Open a composition and press the add-unit button.
7. Select units from the modal.
8. Remove units from the composition when needed.
9. Watch the total points update automatically.
10. Use the drawer menu to switch between Battle Forge and Information.
11. Use Profile to change theme, update account details, or log out.

## Important Files

- `App.tsx`: Root app setup, providers, splash screen, and login routing
- `src/navigation/BattleForgeInformationDrawerStack.tsx`: Main drawer navigation
- `src/navigation/BattleForgeStack.tsx`: Army-building stack navigation
- `src/navigation/InformationStack.tsx`: Information/profile stack navigation
- `src/contexts/AuthContext.tsx`: Firebase auth state provider
- `src/contexts/ThemeContext.tsx`: Light/dark theme provider
- `src/store/index.ts`: Redux and Redux Persist setup
- `src/features/armyCompositions/armyCompositionSlice.ts`: Army composition Redux state
- `src/services/firestoreService.ts`: Firestore read/write functions
- `src/services/authService.ts`: Firebase Authentication functions
- `src/hooks/useLoadArmyCompositions.ts`: Keeps Redux synchronized with Firestore
- `src/hooks/useCreateArmyComposition.ts`: Creates new compositions
- `src/hooks/useArmyCompositionUnits.ts`: Adds/removes units and recalculates points
- `src/utils/armyImages.ts`: Maps Firestore `imageKey` values to local images

## Notes And Limitations

- Army and unit data is intentionally small and stored as demo data.
- Warhammer 40K rules and points can change, so the included data should be treated as project sample data rather than an official rules reference.
- Email updates use Firebase `verifyBeforeUpdateEmail`, so the new address must be verified before Firebase applies it.
- The app currently has linting and TypeScript checks, but no automated unit or end-to-end test suite.

## Technical Documentation

See `README_TECHNICAL.md` for a detailed architecture and usage guide.
