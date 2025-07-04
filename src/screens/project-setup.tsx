import { ScrollView, Linking, SafeAreaView, View } from "react-native";
import { Section } from "../components/Section";
import { Note } from "../components/Note";
import { CodeBlock } from "../components/CodeBlock";
import { List } from "../components/List";
import { Link } from "../components/Link";
import { pageStyle } from "../styles/theme";

export const ProjectSetup = () => {
  return (
    <SafeAreaView style={pageStyle.pageContainer}>
      <ScrollView style={pageStyle.scrollContent}>
        <View style={pageStyle.sectionStack}>
          {/* Section 1: Page header and brief description */}
          <Section title="Project Setup & Best Practices">
            <Note
              variant="info"
              content="This chapter covers the essential initial steps to configure a scalable, maintainable React Native project using best practices."
            ></Note>
          </Section>

          {/* TODO : add horizontal break component */}

          {/* Section 2: Initializing the project */}
          <Section title="1.1 Initialize the Project">
            <Note
              variant="info"
              content="Start a new React Native app with TypeScript:"
            />
            <CodeBlock
              code={`npx @react-native-community/cli init ProjectName`}
            ></CodeBlock>
            <Note variant="info" content="Then proceed with:" />
            <List
              variant="unordered"
              items={[
                "Installing CocoaPods",
                "Structuring components and screens",
                "Configuring tools like ESLint, Prettier, Husky",
              ]}
            />
          </Section>

          {/* Section 3: Installing CocoaPods */}
          <Section title="1.2 Installing CocoaPods (iOS only)">
            <Note
              variant="info"
              content="CocoaPods is required to install native iOS dependencies like fonts, camera access, and gesture handlers."
            />
            <Note
              variant="warning"
              content="Only needed if you're on macOS and targeting iOS."
            />
            <CodeBlock
              code={`cd ios\nsudo gem install cocoapods\npod install`}
            />
            <Note
              variant="success"
              content="After installing pods, return to the root folder and continue development."
            />
            <Link
              onPress={() => {
                Linking.openURL(
                  "https://guides.cocoapods.org/using/getting-started.html"
                );
              }}
              linkLabel="Official CocoaPods Installation Guide"
            />
          </Section>

          {/* Section 4: emulators setup */}
          <Section title="1.3 iOS and Android Emulator Setup">
            <Note
              variant="info"
              content="To run and test your app, you’ll need platform-specific emulators or simulators."
            />
            {/* TODO: add hr break */}

            <List
              title="iOS Setup (macOS only)"
              variant="ordered"
              items={[
                "Install Xcode from the Mac App Store",
                "Go to Xcode → Settings → Locations → Select latest Command Line Tools",
                "Run `npx react-native run-ios` to launch the simulator",
              ]}
            />
            {/* TODO: add hr break */}
            <List
              title="Android Setup (All platforms)"
              variant="ordered"
              items={[
                "Install Android Studio",
                "Create an emulator using the AVD Manager",
                "Set up environment variables: ANDROID_HOME, add platform-tools to PATH",
                "Run `npx react-native run-android`",
              ]}
            />
            <Link
              onPress={() => {
                Linking.openURL(
                  "https://reactnative.dev/docs/set-up-your-environment?platform=android"
                );
              }}
              linkLabel="React Native Official Environment Setup"
            />
            <Link
              onPress={() => {
                Linking.openURL(
                  "https://developer.android.com/studio/run/emulator"
                );
              }}
              linkLabel="Android Emulator Guide"
            />
          </Section>

          {/* Section 5: File structure and jsModules */}
          <Section title="1.4 File & Folder Structure">
            <Note
              variant="info"
              content="Follow a modular structure with index-based exports for better maintainability."
            />
            <List
              variant="unordered"
              items={[
                "Each component has its own folder with `index.tsx`, `style.ts`, `type.ts`.",
                "Use barrel export (`index.tsx`) to allow clean imports.",
              ]}
            />
            <CodeBlock
              code={`// Example: src/components/MyButton/index.tsx

export default MyButton;

// Usage
import MyButton from './components/MyButton';`}
            />
          </Section>

          {/* Section 6:  Default vs named exports */}
          <Section title="1.5 Default vs Named Exports">
            <Note
              variant="info"
              content="Use default export for components, and named exports for utility functions or types."
            />
            <CodeBlock
              code={`// Default export
const MyComponent = () => { ... };
export default MyComponent;

// Named export
export const formatDate = (date: string) => { ... };`}
            />
          </Section>

          {/* Section 7: Common JS vs ESM */}
          <Section title="1.6 CommonJS vs ESM">
            <Note
              variant="info"
              content="React Native uses CommonJS under the hood (via Metro), but you always write your code using modern ESM syntax in typescript."
            />
            <List
              variant="unordered"
              items={[
                "CommonJS: `require`, `module.exports` (legacy Node.js)",
                "ESM: `import`, `export` (modern, used in RN + TS)",
              ]}
            />
            <CodeBlock
              code={`// CommonJS
const express = require('express');

// ESM
import express from 'express';`}
            />
          </Section>

          {/* Section 8: Linking fonts: */}
          <Section title="1.7 Linking Fonts">
            <Note
              variant="info"
              content="To use custom fonts, add them to assets and configure linking."
            />
            <List
              variant="ordered"
              items={[
                "Place fonts under `assets/fonts/`",
                "Add to `react-native.config.js`",
                "Run `npx react-native link`",
              ]}
            />
            <CodeBlock
              code={`// react-native.config.js
module.exports = {
  assets: ['./assets/fonts'],
};`}
            />
            <Note
              variant="warning"
              content="Android doesn't handle font file names with dashes, spaces, or special characters well. Rename your font files to remove dashes (e.g., use `PoppinsBold.ttf` instead of `Poppins-Bold.ttf`) or ensure you reference the internal font name exactly in your styles."
            />
            <CodeBlock
              code={`// Example usage in style
text: {
  fontFamily: 'Poppins-Bold',
},`}
            />
            <Note
              variant="success"
              content="After linking and reloading, your custom fonts should be usable across the app. Always test on both iOS and Android."
            />
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
