import React from "react";
import { Linking } from "react-native";
import { Section } from "../components/Section";
import { Note } from "../components/Note";
import { CodeBlock } from "../components/CodeBlock";
import { List } from "../components/List";
import { Link } from "../components/Link";
import { ChapterScreenLayout } from "../components/ScreenLayout";

export const HuskyScreen = () => {
  return (
    <ChapterScreenLayout>
      {/* Section 1: What is Husky */}
      <Section title="Chapter 4: Husky">
        <Note
          variant="info"
          content="Husky is a tool that lets you run scripts at specific Git lifecycle events, such as before a commit or push."
        />
        {/* TODO add hr block */}
        <Note
          variant="info"
          content="It's commonly used to enforce code formatting and linting before code is committed."
        />
      </Section>

      {/* Section 2: Setting up Husky */}
      <Section title="4.1 Installing Husky">
        <List
          variant="ordered"
          items={[
            "Install Husky: `npm install --save-dev husky`",
            "Enable Git hooks: `npx husky install`",
            "Add install script to `package.json`:",
          ]}
        />
        <CodeBlock code={`"scripts": {\n  "prepare": "husky install"\n}`} />
        <Note
          variant="success"
          content="Now Git will trigger Husky hooks if set up correctly!"
        />
      </Section>

      {/* Section 3: lint-staged */}
      <Section title="4.2 Using lint-staged with Husky">
        <Note
          variant="info"
          content="lint-staged runs linters or formatters only on files staged for commit — keeping your commits clean and fast."
        />
        <List
          variant="ordered"
          items={[
            "Install: `npm install --save-dev lint-staged`",
            'Create Husky hook: `npx husky add .husky/pre-commit "npx lint-staged"`',
          ]}
        />
        <Note
          variant="info"
          content="Then configure lint-staged in your `package.json` like this:"
        />
        <CodeBlock
          code={`"lint-staged": {\n  "*.{ts,tsx}": "eslint --fix",\n  "*.{ts,tsx,js,jsx,json,css,md}": "prettier --write"\n}`}
        />
      </Section>

      {/* Section 4: Benefits */}
      <Section title="4.3 Benefits for Teams">
        <List
          variant="unordered"
          items={[
            "Catches formatting/linting issues early",
            "Keeps commit history clean and consistent",
            "Reduces manual error checking",
            "Ensures everyone on the team follows the same coding standards",
          ]}
        />
        <Note
          variant="success"
          content="Husky helps automate quality control without relying on developers to remember to run linting manually."
        />
      </Section>

      {/* Docs Link */}
      <Section title="4.4 Documentation">
        <Link
          onPress={() => {
            Linking.openURL("https://typicode.github.io/husky/#/");
          }}
          linkLabel="Official Husky Documentation"
        />
      </Section>
    </ChapterScreenLayout>
  );
};
