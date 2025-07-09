// src/screens/EventHandlersScreen.tsx
import React from "react";
import { ChapterScreenLayout } from "../components/ScreenLayout";
import { Section } from "../components/Section";
import { Note } from "../components/Note";
import { CodeBlock } from "../components/CodeBlock";
import { List } from "../components/List";

export const EventHandlersScreen = () => {
  return (
    <ChapterScreenLayout>
      {/* Section 1: Naming Handlers */}
      <Section title="Chapter 8: Event Handlers">
        <Note
          variant="info"
          content="Event handlers in React are functions that respond to user interactions like clicks, form submissions, or typing."
        />
        <Note
          variant="info"
          content="Naming convention: use handleEventName, e.g., handleClick, handleChange."
        />
      </Section>

      {/* Section 2: Passing vs Calling */}
      <Section title="8.1 Passing vs Calling">
        <Note
          variant="warning"
          content="Don't call the handler directly—pass a reference to the function instead."
        />
        <CodeBlock
          code={`// Correct\n<button onClick={handleClick} />\n\n// Incorrect: this calls it immediately\n<button onClick={handleClick()} />`}
        />
      </Section>

      {/* Section 3: Inline Arrow Functions */}
      <Section title="8.2 Inline Arrow Functions">
        <Note
          variant="info"
          content="Inline arrow functions are useful when you need to pass arguments or call multiple functions. Avoid excessive inline functions in large lists."
        />
        <CodeBlock
          code={`<button onClick={() => alert('Clicked!')}>\n  Click\n</button>`}
        />
      </Section>

      {/* Section 4: The Event Object */}
      <Section title="8.3 The Event Object">
        <Note
          variant="info"
          content="React provides a synthetic event object as an argument to event handlers."
        />
        <List
          variant="unordered"
          items={[
            "`event.preventDefault()` – Prevents default browser behavior",
            "`event.stopPropagation()` – Prevents bubbling up to parent elements",
          ]}
        />
        <CodeBlock
          code={`function handleClick(event) {\n  event.preventDefault();\n  event.stopPropagation();\n}`}
        />
      </Section>

      {/* Section 5: Common Gotchas */}
      <Section title="8.4 Common Gotchas">
        <List
          variant="unordered"
          items={[
            "Calling the function instead of passing it as a reference",
            "Mutating variables instead of using setState",
            "Relying on variables that don’t persist across renders",
          ]}
        />
      </Section>
    </ChapterScreenLayout>
  );
};
