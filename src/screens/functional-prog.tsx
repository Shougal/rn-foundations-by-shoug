import React from "react";
import { Section } from "../components/Section";
import { Note } from "../components/Note";
import { CodeBlock } from "../components/CodeBlock";
import { List } from "../components/List";
import { ChapterScreenLayout } from "../components/ScreenLayout";

export const FunctionalProgrammingScreen = () => {
  return (
    <ChapterScreenLayout>
      {/* Section 1: Pure Functions */}
      <Section
        title="Chapter 6: Functional Programming in React"
        color="#3AB79B"
      >
        <Note
          variant="info"
          content="React components are expected to behave like pure functions — same inputs should always produce the same outputs."
        />
        <CodeBlock
          code={`// Pure\nfunction double(x) {\n  return x * 2;\n}\n\n// Impure\nlet count = 0;\nfunction increment() {\n  return ++count;\n}`}
        />
      </Section>

      {/* Section 2: Immutability vs Mutation */}
      <Section title="6.1 Immutability vs Mutation">
        <Note
          variant="warning"
          content="Mutating data directly can lead to bugs and unpredictable UI behavior."
        />
        <List
          variant="unordered"
          items={[
            "Immutable: copy data using spread or helpers like `concat()` or `filter()`.",
            "Mutating original objects or arrays (like `push`, `person.age = 25`) breaks React reactivity.",
          ]}
        />
        <CodeBlock
          code={`// Bad (mutation)\narray.push(5);\nperson.age = 30;\n\n// Good (immutable)\nconst newArray = [...array, 5];\nconst updated = { ...person, age: 30 };`}
        />
      </Section>

      {/* Section 3: Side Effects and useEffect */}
      <Section title="6.2 Side Effects & useEffect" color="#3AB79B">
        <Note
          variant="info"
          content="React renders should be pure. Side effects (e.g., logging, API calls, event listeners) must not happen during render."
        />
        <List
          variant="unordered"
          items={[
            "Use event handlers for interactive changes (e.g., button press).",
            "Use `useEffect()` for things that run after render (e.g., fetch, timers).",
            "Don't update variables or state during render directly.",
          ]}
        />
        <CodeBlock
          code={`useEffect(() => {\n  const listener = () => console.log('clicked');\n  window.addEventListener('click', listener);\n\n  return () => window.removeEventListener('click', listener);\n}, []);`}
        />
      </Section>

      {/* Section 4: Strict Mode */}
      <Section title="6.3 React Strict Mode">
        <Note
          variant="info"
          content="StrictMode intentionally renders components twice (in dev) to detect unsafe patterns like impure functions or unclean side effects."
        />
        <CodeBlock
          code={`<React.StrictMode>\n  <App />\n</React.StrictMode>`}
        />
        <Note
          variant="warning"
          content="StrictMode does not affect production. It only helps during development to surface hidden issues."
        />
      </Section>

      {/* Section 5: Memory vs Risk Tradeoffs */}
      <Section title="6.4 Memory vs Risk Tradeoffs" color="#3AB79B">
        <Note
          variant="info"
          content="Sometimes, immutability means copying data — which uses more memory but avoids bugs."
        />
        <List
          variant="unordered"
          items={[
            "Immutable updates avoid accidental shared references.",
            "Safer and more predictable for reactivity and debugging.",
            "Mutation saves memory but introduces hard-to-track bugs and side effects.",
          ]}
        />
        <CodeBlock
          code={`// Risky\nconst person2 = person1; // shared reference\nperson2.age = 50;\n\n// Safe\nconst person2 = { ...person1, age: 50 };`}
        />
      </Section>
    </ChapterScreenLayout>
  );
};
