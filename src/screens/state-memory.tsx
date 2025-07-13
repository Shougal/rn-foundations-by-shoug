// screens/StateAndMemoryScreen.tsx
import React from "react";
import { Section } from "../components/Section";
import { Note } from "../components/Note";
import { CodeBlock } from "../components/CodeBlock";
import { List } from "../components/List";
import { ChapterScreenLayout } from "../components/ScreenLayout";

export const StateAndMemoryScreen = () => {
  return (
    <ChapterScreenLayout>
      {/* Section 1: Local Variables vs useState */}
      <Section title="Chapter 9: State and Memory in React" color="#3AB79B">
        <Note
          variant="info"
          content="In React, local variables are re-initialized on every render. State persists across renders using useState."
        />
        <CodeBlock
          code={`// Local variable (resets on each render)
let count = 0;

// useState (persists across renders)
const [count, setCount] = useState(0);`}
        />
      </Section>

      {/* Section 2: What Triggers Re-renders */}
      <Section title="9.1 What Triggers Re-renders">
        <List
          variant="unordered"
          items={[
            "Calling `setState()` triggers a re-render.",
            "During re-render, the component function re-executes from top to bottom.",
            "Local variables reset, but state remains.",
          ]}
        />
        <CodeBlock
          code={`function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Text>{count}</Text>
      <Button title="Add" onPress={() => setCount(count + 1)} />
    </>
  );
} `}
        />
      </Section>

      {/* Section 3: Re-render vs Runtime vs Refresh */}
      <Section title="9.2 Re-render vs Runtime vs Refresh" color="#3AB79B">
        <List
          variant="unordered"
          items={[
            "`Runtime`: While the app is running in memory.",
            "`Re-render`: React executes component again when state/props change.",
            "`Refresh`: Reloading the app (hot reload or full refresh) resets all state.",
          ]}
        />
        <Note
          variant="warning"
          content="To persist values beyond refreshes or app restarts, use storage solutions like AsyncStorage or localStorage."
        />
      </Section>

      {/* Section 4: Avoiding Mutation */}
      <Section title="9.3 Avoiding Direct Mutation">
        <Note
          variant="warning"
          content="Mutating a state object directly won't trigger a re-render because the reference hasn't changed."
        />
        <CodeBlock
          code={`// Direct mutation (will NOT re-render)
user.age = 30;
setUser(user); // same reference

// Immutable update (triggers re-render)
setUser({ ...user, age: 30 });`}
        />
      </Section>

      {/* Section 5: Why React Needs Immutability */}
      <Section title="9.4 Why React Needs Immutability" color="#3AB79B">
        <Note
          variant="info"
          content="React does a shallow comparison to detect changes. If you keep the same object reference, it assumes nothing changed."
        />
        <CodeBlock
          code={`// If both objects have same reference:
prevState === nextState // true ➜ no re-render`}
        />
      </Section>

      {/* Section 6: Summary and Pitfalls */}
      <Section title="9.5 Summary and Pitfalls">
        <List
          variant="unordered"
          items={[
            "useState is the only way to persist values across re-renders.",
            "Local variables reset every time a component re-executes.",
            "Avoid direct mutations — always return new objects or arrays.",
            "To retain data across refreshes or sessions, use persistent storage.",
          ]}
        />
      </Section>
    </ChapterScreenLayout>
  );
};
