### `README.md`

```md
# RN Foundations by Shoug

[![React Native](https://img.shields.io/badge/React%20Native-2025-blue.svg?logo=react)](https://reactnative.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue.svg?logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#license)
[![Status](https://img.shields.io/badge/status-active-brightgreen)](#)

> A foundational React Native learning app focused on mastering components, props, state, functional programming, UI behavior, and clean architecture.  
> Built by [@shougalharbi](https://github.com/shougalharbi) to reinforce React Native best practices.

---

## Table of Contents

- [Features](#-features)
- [Folder Structure](#-folder-structure)
- [Tech Stack](#️-tech-stack)
- [Getting Started](#-getting-started)
- [Development Notes](#-development-notes)
- [Learning Screens](#-learning-screens)
- [Feedback](#-feedback)
- [License](#-license)

---

## Features

- Modular and reusable components
- Interactive screens for JSX, props, state, hooks, functional programming
- Explanations of concepts like `useMemo`, state isolation, controlled inputs
- Theming and consistent layout system
- ESLint + Prettier + Husky Git hooks
- Code blocks, notes, and inline documentation patterns

---

## Folder Structure
```

src/
├── components/ # Reusable UI components
│ ├── CodeBlock/
│ ├── Link/
│ ├── List/
│ ├── Note/
│ ├── ScreenLayout/
│ └── Section/
├── navigation/ # Navigation configuration (if added)
├── screens/ # Learning modules as screens
│ ├── eslint-setup.tsx
│ ├── event-handler.tsx
│ ├── functional-prog.tsx
│ ├── generics.tsx
│ ├── home.tsx
│ ├── husky-setup.tsx
│ ├── prettier-setup.tsx
│ ├── project-setup.tsx
│ ├── react-basics.tsx
│ ├── state-isolation.tsx
│ ├── state-memory.tsx
│ ├── state-snapshot.tsx
│ ├── uit.tsx
│ ├── use-effect.tsx
│ └── use-memo.tsx
├── styles/ # Theme, colors, spacing
├── App.tsx
└── README.md

````

---

## 🛠️ Tech Stack

- React Native (CLI)
- TypeScript
- ESLint + Prettier
- Husky (pre-commit hooks)
- Custom components and themes

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/shougalharbi/rn-foundations-by-shoug.git
cd rn-foundations-by-shoug
````

### 2. Install dependencies

```bash
npm install
```

### 3. iOS Setup

```bash
npx pod-install
npx react-native run-ios
```

### 4. Android Setup

```bash
npx react-native run-android
```

---

## Development Notes

- Use `npm run lint` to check code style.
- Fonts and assets are linked in `react-native.config.js`.
- Avoid mutation — use immutable updates and functional patterns.
- Screens are built with educational layout components: `Section`, `Note`, `CodeBlock`, and `List`.
- `ScreenLayout` wraps all screens in a consistent styled container.

---

## Learning Screens

Each screen is designed to teach a key concept:

| Screen                | Description                                |
| --------------------- | ------------------------------------------ |
| `home.tsx`            | Landing screen linking to all chapters     |
| `react-basics.tsx`    | JSX, props, children, spread/rest          |
| `state-isolation.tsx` | State behavior and isolation               |
| `state-memory.tsx`    | How state persists in memory               |
| `state-snapshot.tsx`  | Snapshots and stale values                 |
| `event-handler.tsx`   | Stopping propagation, synthetic events     |
| `use-effect.tsx`      | Side effects and cleanup                   |
| `use-memo.tsx`        | Memoization, caching, re-rendering         |
| `functional-prog.tsx` | Immutability, pure functions, side effects |
| `uit.tsx`             | Virtual DOM, render trees, bundling        |
| `generics.tsx`        | Intro to TypeScript generics               |
| `eslint-setup.tsx`    | How ESLint is used in the project          |
| `prettier-setup.tsx`  | Format rules and setup guide               |
| `husky-setup.tsx`     | Pre-commit Git hooks using Husky           |
| `project-setup.tsx`   | RN CLI vs Expo, config notes               |

---

## Feedback

Open an issue or submit a pull request for improvements, ideas, or corrections.
This is a personal learning project — feedback is welcome!

---

## License

MIT License © 2025 [Shoug Alharbi](https://github.com/shougalharbi)
