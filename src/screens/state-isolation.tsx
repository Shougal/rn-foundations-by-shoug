// screens/StateIsolationScreen.tsx
import React from "react";
import { Section } from "../components/Section";
import { Note } from "../components/Note";
import { CodeBlock } from "../components/CodeBlock";
import { List } from "../components/List";
import { ChapterScreenLayout } from "../components/ScreenLayout";

export const StateIsolationScreen = () => {
  return (
    <ChapterScreenLayout>
      {/* Section 1: What is State Isolation */}
      <Section title="Chapter 10: State Isolation in React">
        <Note
          variant="info"
          content="State isolation means each component has its own private state that doesn’t interfere with others. This avoids bugs caused by shared references."
        />
      </Section>

      {/* Section 2: Shallow Array Copy (Only Top-Level) */}
      <Section title="10.1 Shallow Copy via Array Spread">
        <Note
          variant="warning"
          content="Spreading an array creates a new array (different reference), but its objects still point to the same memory locations."
        />
        <CodeBlock
          code={`const originalList = [
  { id: 1, seen: false }
];

const copyList = [...originalList];

copyList[0].seen = true;

console.log(originalList[0].seen); // true (mutation happened)`}
        />
        <Note
          variant="info"
          content="This is why array spread does not give you full isolation—it only copies the outer array, not the nested objects inside."
        />
      </Section>

      {/* Section 3: Deep Object Copy via map + spread */}
      <Section title="10.2 Full Object Isolation via .map and {...}">
        <Note
          variant="success"
          content="Use .map + object spread to shallow copy each object inside the array—this creates separate references for each object."
        />
        <CodeBlock
          code={`const safeCopy = originalList.map(item => ({ ...item }));
safeCopy[0].seen = true;

console.log(originalList[0].seen); // false (isolated update)`}
        />
      </Section>

      {/* Section 4: Shared State Bug in React */}
      <Section title="10.3 Shared State Bug in React Components">
        <Note
          variant="warning"
          content="If two components use the same initial array (e.g., same object reference), changing one will affect the other unless you isolate them."
        />
        <CodeBlock
          code={`const [myList, setMyList] = useState(initialList);
const [yourList, setYourList] = useState(initialList);

// Both point to same object references inside!`}
        />
      </Section>

      {/* Section 5: Fix with map for Full Isolation */}
      <Section title="10.4 Fix: Fully Isolate Initial State with .map">
        <List
          variant="ordered"
          items={[
            "Use `map` to copy each object separately.",
            "Spread each object to avoid sharing references.",
          ]}
        />
        <CodeBlock
          code={`const [myList, setMyList] = useState(
  initialList.map(item => ({ ...item }))
);`}
        />
      </Section>

      {/* Section 6: Immutable State Updates */}
      <Section title="10.5 Immutable Updates in State">
        <Note
          variant="info"
          content="When updating arrays in React state, never mutate objects directly. Use map to return new objects."
        />
        <CodeBlock
          code={`setMyList(myList.map(item =>
  item.id === 1 ? { ...item, seen: true } : item
));`}
        />
      </Section>

      {/* Section 6.1: Pitfalls with Nested Objects */}
      <Section title="10.5.1 Nested Object Pitfalls">
        <Note
          variant="warning"
          content="Spreading an object with nested properties only copies the outer level. Nested objects still reference the original memory."
        />
        <CodeBlock
          code={`const user = {
  name: "John",
  address: { city: "Riyadh", geo: { lat: 10 } }
};

const userCopy = { ...user };

// Still references same address object!
userCopy.address.city = "Jeddah";

console.log(user.address.city); // "Jeddah" (unexpected!)`}
        />
        <Note
          variant="info"
          content="To deeply isolate nested structures, you must copy them recursively:"
        />
        <CodeBlock
          code={`const deepCopy = {
  ...user,
  address: {
    ...user.address,
    geo: { ...user.address.geo }
  }
};`}
        />
      </Section>

      {/* Section 7: Summary */}
      <Section title="10.6 Summary">
        <List
          variant="unordered"
          items={[
            "Array spread (`[...arr]`) creates a new array, but not new objects inside.",
            ".map + `{ ...obj }` creates new object references (isolated).",
            "Nested objects require manual deep copying to fully isolate them.",
            "Avoid reusing the same array object across multiple components.",
            "Use immutable updates to avoid bugs in shared state.",
          ]}
        />
      </Section>
    </ChapterScreenLayout>
  );
};
