import React from "react";
import { Note } from "../components/Note";
import { Section } from "../components/Section";
import { List } from "../components/List";
import { ChapterScreenLayout } from "../components/ScreenLayout";

export const HomeScreen = () => {
  return (
    <ChapterScreenLayout>
      <Section title="Welcome to RN Foundations" color="#3AB79B">
        <Note
          variant="info"
          content="This app is your hands-on companion for learning React Native fundamentals in a structured, visual, and practical way."
        />
      </Section>
      <Section title="Chapter Covered:">
        {/* Chapter 1: */}
        <List
          title="Chapter 1: Project Setup:"
          variant="unordered"
          items={["Setting up your RN project like a pro"]}
        />

        {/* Chapter 2: */}
        <List
          title="Chapter 2: ESLINT"
          variant="unordered"
          items={["Linting your code for consistency and avoiding bugs."]}
        />

        {/* Chapter 3: */}
        <List
          title="Chapter 3: Prettier"
          variant="unordered"
          items={["Auto-formatting your code for clarity and style."]}
        />

        {/* Chapter 4:  */}
        <List
          title="Chapter 4: Husky"
          variant="unordered"
          items={["Automating checks before commits with Git hooks."]}
        />

        {/* Chapter 5:  */}
        <List
          title="Chapter 5: React and JSX Basics"
          variant="unordered"
          items={["Understanding JSX, props, components, and state."]}
        />

        {/* Chapter 6:  */}
        <List
          title="Chapter 6: Functional Programming"
          variant="unordered"
          items={[
            "Learn about immutability, pure functions, and side effects.",
          ]}
        />

        {/* Chapter 7:  */}
        <List
          title="Chapter 7: UI Tree"
          variant="unordered"
          items={[
            "Understand how React renders and optimizes your app structure.",
          ]}
        />

        <Note
          variant="success"
          content="Ready to dive in? Use the bottom tabs to start learning."
        />
      </Section>
    </ChapterScreenLayout>
  );
};
