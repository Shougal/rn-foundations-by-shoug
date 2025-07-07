// screens/StateAsSnapshotScreen.tsx
import React from "react";
import { Section } from "../components/Section";
import { Note } from "../components/Note";
import { CodeBlock } from "../components/CodeBlock";
import { List } from "../components/List";
import { ChapterScreenLayout } from "../components/ScreenLayout";

export const StateAsSnapshotScreen = () => {
  return (
    <ChapterScreenLayout>
      {/* Section 1: State as a Snapshot */}
      <Section title="Chapter 11: State as a Snapshot">
        <Note
          variant="info"
          content="React state variables are snapshots — they hold the value as it was during that render. Updating them does not mutate the current state directly."
        />
      </Section>

      {/* Section 2: Snapshot Explained */}
      <Section title="8.1 How Snapshot Works">
        <CodeBlock
          code={`const [count, setCount] = useState(0);

function handleClick() {
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
}`}
        />
        <Note
          variant="warning"
          content="This will only increment `count` once — all three calls use the same snapshot value of `count`."
        />
      </Section>

      {/* Section 3: Functional Updates */}
      <Section title="8.2 Fix with Functional Updates">
        <Note
          variant="success"
          content="To update based on the latest value, use the functional form of `setState`."
        />
        <CodeBlock
          code={`function handleClick() {
  setCount(c => c + 1);
  setCount(c => c + 1);
  setCount(c => c + 1);
}

// This correctly increases by 3`}
        />
        <Note
          variant="info"
          content="Each call receives the latest value from the queue, not from the render snapshot."
        />
      </Section>

      {/* Section 4: Snapshot Analogy */}
      <Section title="8.3 Analogy">
        <List
          variant="unordered"
          items={[
            "Imagine each render freezes variables at that moment — that's your snapshot.",
            "Calling `setCount(count + 1)` is like adding +1 to a frozen number.",
            "To work with the latest, use `setCount(c => c + 1)` which is not frozen — it will queue and apply in order.",
          ]}
        />
      </Section>

      {/* Section 5: Summary */}
      <Section title="8.4 Summary">
        <List
          variant="unordered"
          items={[
            "State variables are fixed snapshots during a render.",
            "`setState(value)` uses the snapshot — may be outdated in async or multi-calls.",
            "Use `setState(prev => next)` to ensure you work with the latest value in the queue.",
            "This avoids stale state bugs and ensures updates are predictable.",
          ]}
        />
      </Section>
    </ChapterScreenLayout>
  );
};
