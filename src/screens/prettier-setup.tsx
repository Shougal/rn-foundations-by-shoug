import React from "react";
import { SafeAreaView, ScrollView, View, Linking } from "react-native";
import { Section } from "../components/Section";
import { Note } from "../components/Note";
import { CodeBlock } from "../components/CodeBlock";
import { List } from "../components/List";
import { Link } from "../components/Link";
import { pageStyle } from "../styles/theme";

export const PrettierScreen = () => {
  return (
    <SafeAreaView style={pageStyle.pageContainer}>
      <ScrollView style={pageStyle.scrollContent}>
        <View style={pageStyle.sectionStack}>
          {/* Section 1: What is Prettier */}
          <Section title="Chapter 3: Prettier">
            <Note
              variant="info"
              content="Prettier is an opinionated code formatter that ensures consistent code style across your project by automatically formatting your code."
            />
          </Section>

          {/* Section 2: Prettier vs ESLint */}
          <Section title="3.1 Prettier vs ESLint">
            <Note
              variant="info"
              content="ESLint focuses on catching bugs and enforcing coding rules. Prettier is purely for formatting (spacing, indentation, line breaks)."
            />
            <Note
              variant="success"
              content="They work best together! Use Prettier for formatting and ESLint for logic/style rules."
            />
          </Section>

          {/* Section 3: Prettier Configuration */}
          <Section title="3.2 .prettierrc Configuration">
            <Note
              variant="info"
              content="You can create a `.prettierrc` file to customize formatting options."
            />
            <CodeBlock
              code={`{\n  "singleQuote": true,\n  "semi": true,\n  "tabWidth": 2,\n  "trailingComma": "es5"\n}`}
            />
            <Note
              variant="info"
              content="Prettier can also use other config formats like `.prettierrc.js` or `prettier.config.js`."
            />
          </Section>

          {/* Section 4: Running Prettier */}
          <Section title="3.3 Running Prettier">
            <List
              variant="ordered"
              items={[
                "Install Prettier: `npm install --save-dev prettier`",
                "Check formatting: `npx prettier --check .`",
                "Fix formatting: `npx prettier --write .`",
                "You can also define Prettier scripts in your package.json:",
              ]}
            />
            <Note
              variant="info"
              content="Add the following inside the `scripts` section of your package.json:"
            />
            <CodeBlock
              code={`"scripts": {\n  "format": "prettier --write .",\n  "format:check": "prettier --check ."\n}`}
            />
          </Section>

          {/* Section 5: Prettier Docs Link */}
          <Section title="3.4 Documentation">
            <Link
              onPress={() => {
                Linking.openURL("https://prettier.io/docs/en/index.html");
              }}
              linkLabel="Official Prettier Documentation"
            />
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
