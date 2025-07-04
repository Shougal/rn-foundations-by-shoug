import React from "react";
import { Linking } from "react-native";
import { Section } from "../components/Section";
import { Note } from "../components/Note";
import { CodeBlock } from "../components/CodeBlock";
import { List } from "../components/List";
import { Link } from "../components/Link";
import { ChapterScreenLayout } from "../components/ScreenLayout";

export const ESLintScreen = () => {
  return (
    <ChapterScreenLayout>
      {/* Section 1: What is ESLint */}
      <Section title="Chapter 2: ESLint">
        <Note
          variant="info"
          content="ESLint is a tool that statically analyzes your code to find problems, enforce consistent style, and catch bugs early."
        />
        {/* TODO add hr block */}
        <Note
          variant="info"
          content="It’s essential for large-scale apps, team collaboration, and clean codebases."
        />
      </Section>

      {/* Section 2: Installing ESLint */}
      <Section title="2.1 Installing ESLint">
        <Note
          variant="info"
          content="Use npm to install ESLint and initialize it."
        />
        <CodeBlock code={`npm install --save-dev eslint\nnpx eslint --init`} />
        <Note
          variant="warning"
          content="When asked for config format, choose JavaScript (.eslintrc.js)."
        />
      </Section>

      {/* Section 3: ESLint Config Format */}
      <Section title="2.2 Configuring .eslintrc.js">
        <Note
          variant="info"
          content="Since your project compiles using CommonJS (default for Metro bundler), your ESLint config should also follow CommonJS format:"
        />
        <CodeBlock
          code={`module.exports = {\n  root: true,\n  env: {\n    es6: true,\n    node: true,\n  },\n  parser: '@typescript-eslint/parser',\n  parserOptions: {\n    ecmaVersion: 'latest',\n    sourceType: 'module',\n    ecmaFeatures: {\n      jsx: true,\n    },\n  },\n  plugins: [\n    'react',\n    'react-hooks',\n    'import',\n    'unused-imports',\n    '@typescript-eslint',\n    'filenames',\n  ],\n  extends: [\n    'eslint:recommended',\n    'plugin:react/recommended',\n    'plugin:@typescript-eslint/recommended',\n    'prettier',\n  ],\n  rules: {\n    // Add your custom rules here\n  },\n  settings: {\n    react: {\n      version: 'detect',\n    },\n  },\n};`}
        />

        <Link
          onPress={() => {
            Linking.openURL("https://eslint.org/docs/latest/use/configure/");
          }}
          linkLabel="Official ESLint Configuration Guide"
        />
      </Section>

      {/* Section 4: Recommended Plugins & Rules */}
      <Section title="2.3 Recommended Plugins & Rules">
        <List
          variant="unordered"
          items={[
            "plugin:react/recommended – for JSX & React-specific rules",
            "plugin:@typescript-eslint/recommended – for TS type checks",
            "prettier – disables conflicting formatting rules",
          ]}
        />
        <Note
          variant="success"
          content="Always include Prettier last in the extends array to override conflicting rules safely."
        />
      </Section>

      {/* Section 5: Common Issues (e.g. filename) */}
      <Section title="2.4 Common Issues: Filename Convention">
        <Note
          variant="warning"
          content="If you get an error like: 'Filename does not match the naming convention', it’s likely due to a rule like `filenames/match-regex`."
        />
        <Note
          variant="info"
          content="You can disable or modify this rule under `rules` in `.eslintrc.js`:"
        />
        <CodeBlock
          code={`rules: {\n  'filenames/match-regex': [0], // disable it\n}`}
        />
      </Section>

      {/* Section 6: Integration with Prettier */}
      <Section title="2.5 Integrating with Prettier">
        <List
          variant="ordered"
          items={[
            "Install dependencies: `npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier`",
            "Add `'prettier'` to the end of your `extends` array",
            "Add Prettier plugin to `plugins`: `['prettier']`",
            "Optionally, add a `.prettierrc` file for formatting preferences",
          ]}
        />
        <CodeBlock
          code={`extends: [\n  ...,\n  'prettier'\n],\nplugins: [\n  ...,\n  'prettier'\n]`}
        />
      </Section>
    </ChapterScreenLayout>
  );
};
