# Battle Forge

Battle Forge is a React Native Expo app for creating and managing Warhammer 40K army compositions. Users can register or log in, create army lists, choose an army faction, add units, track total points, read rule information, and switch between light and dark themes.

## Main Features

- Firebase login and registration
- Personal army compositions per user
- Army and unit data loaded from Firestore
- Add and remove units from an army composition
- Point total tracking with a warning above 2000 points
- Drawer navigation between Battle Forge and Information sections
- Light and dark theme support
- Local Redux persistence so saved state can survive app restarts
- Shared background/header styling across the app

## Tech Stack

- React Native
- Expo
- TypeScript
- React Navigation
- Redux Toolkit
- Redux Persist
- Firebase Authentication
- Firebase Firestore
- Formik and Yup

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
```

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

## Usage

1. Start the app with Expo.
2. Register a new account or log in with an existing account.
3. On the home screen, press the plus button to create a new army composition.
4. Enter an army name and select an army faction.
5. Open the created army composition.
6. Press the plus button to add units.
7. Watch the points total update automatically.
8. Use the drawer menu to switch between the Battle Forge and Information sections.
9. Use the Profile screen to change theme, update account details, or log out.

## Firebase Data

The app uses Firebase Authentication for users and Firestore for data.

User army compositions are stored under:

```text
users/{userId}/armyCompositions/{armyCompositionId}
```

Shared army data is stored under:

```text
armies/{armyId}
```

There is commented seed code in `CreateArmyCompositionScreen.tsx`. It can be temporarily uncommented when the Firestore army collection needs to be rebuilt from `src/data/mockArmies.ts`.

## Checks

Run linting:

```bash
npm run lint
```

Run TypeScript checking:

```bash
npx tsc --noEmit
```

## Important Files

- `App.tsx`: Root app setup, providers, splash screen, and login routing
- `src/navigation/BattleForgeInformationDrawerStack.tsx`: Main drawer navigation
- `src/navigation/BattleForgeStack.tsx`: Army-building stack navigation
- `src/navigation/InformationStack.tsx`: Information/profile stack navigation
- `src/store/index.ts`: Redux and Redux Persist setup
- `src/services/firestoreService.ts`: Firestore read/write functions
- `src/services/authService.ts`: Firebase Authentication functions
- `src/hooks/useLoadArmyCompositions.ts`: Keeps Redux synchronized with Firestore
- `src/hooks/useCreateArmyComposition.ts`: Creates new compositions
- `src/hooks/useArmyCompositionUnits.ts`: Adds/removes units and recalculates points
