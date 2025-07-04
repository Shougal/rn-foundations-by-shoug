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
          <Section title="Project Setup">
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
