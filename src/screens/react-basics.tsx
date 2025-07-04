import React from "react";
import { Section } from "../components/Section";
import { Note } from "../components/Note";
import { CodeBlock } from "../components/CodeBlock";
import { List } from "../components/List";
import { ChapterScreenLayout } from "../components/ScreenLayout";

export const ReactBasicsScreen = () => {
  return (
    <ChapterScreenLayout>
      {/* Section 1: JSX syntax rules */}
      <Section title="Chapter 5: React & JSX Basics">
        <Note
          variant="info"
          content="JSX allows you to write HTML-like syntax directly inside JavaScript. React compiles this into `React.createElement()` calls."
        />
        <List
          variant="unordered"
          items={[
            "Use parentheses after `return` if JSX spans multiple lines.",
            "Use `className` instead of `class`.",
            "Use camelCase for props (e.g., `onPress`, `tabIndex`).",
          ]}
        />
        <CodeBlock
          code={`return (\n  <View>\n    <Text>Hello, world!</Text>\n  </View>\n);`}
        />
      </Section>

      {/* Section 2: Capitalized components */}
      <Section title="5.1 Capitalized Components">
        <Note
          variant="info"
          content="React treats lowercase tags as native HTML/React Native components. Custom components must be capitalized."
        />
        <CodeBlock
          code={`<section> // built-in\n<Profile /> // custom component`}
        />
      </Section>

      {/* Section 3: Rendering components and using props */}
      <Section title="5.2 Rendering Components with Props">
        <Note
          variant="info"
          content="Props are arguments passed into components. Think of them like function parameters."
        />
        <CodeBlock
          code={`function Avatar(props) {\n  return <Image source={{ uri: props.imageUrl }} />;\n}`}
        />
      </Section>

      {/* Section 4: Destructuring props */}
      <Section title="5.3 Destructuring Props">
        <Note
          variant="info"
          content="You can destructure props directly in the function signature to simplify access."
        />
        <CodeBlock
          code={`function Avatar({ imageUrl }) {\n  return <Image source={{ uri: imageUrl }} />;\n}`}
        />
      </Section>

      {/* Section 5: Spread props */}
      <Section title="5.4 Spread Props (`...props`)">
        <Note
          variant="info"
          content="Use the spread operator when passing multiple props from a parent to a child without manually listing them all."
        />
        <CodeBlock
          code={`function Profile(props) {\n  return <Avatar {...props} />;\n}`}
        />
      </Section>

      {/* Section 6: children prop usage */}
      <Section title="5.5 Using the `children` Prop">
        <Note
          variant="info"
          content="JSX inside a component’s opening and closing tags is passed as `props.children`."
        />
        <CodeBlock
          code={`function Card({ children }) {\n  return <View>{children}</View>;\n}\n\n<Card>\n  <Text>Hello</Text>\n</Card>`}
        />
      </Section>

      {/* Section 7: State vs Props vs Context */}
      <Section title="5.6 State vs Props vs Context">
        <Note
          variant="info"
          content="React components read data from three primary sources: props, state, and context."
        />

        <List
          title="What's the difference?"
          variant="unordered"
          items={[
            "Props: Data passed from a parent to a child component. Immutable (read-only).",
            "State: Data managed inside a component. It changes over time using hooks like `useState()`.",
            "Context: Global/shared data accessible across the component tree (like theme, locale, auth).",
          ]}
        />

        <Note
          variant="info"
          content="Props are like function parameters — passed down, not owned. State is like internal memory — owned and updated by the component."
        />

        <Section title="When to use state">
          <List
            variant="unordered"
            items={[
              "To track user interactions (e.g., form input, toggle state).",
              "To store async responses (e.g., API data).",
              "To re-render when internal data changes (like counters or switches).",
            ]}
          />
          <CodeBlock
            code={`const [count, setCount] = useState(0);\n\n<Button title="Add" onPress={() => setCount(count + 1)} />`}
          />
        </Section>

        <Section title="Why not use global variables or mutate state directly?">
          <List
            variant="unordered"
            items={[
              "Global variables can cause unpredictable behavior in React — multiple components reading or writing at different times.",
              "Mutating objects or arrays directly (e.g., `array.push()`) won’t trigger re-renders — React compares state using reference.",
              "Instead, use `setState()` or spread new values (e.g., `setArray([...array, newItem])`).",
              "Keep state changes predictable, isolated, and side-effect free during render.",
            ]}
          />
          <CodeBlock
            code={`//Mutation\nperson.age = 25;\n\n//Immutability\nconst updated = { ...person, age: 25 };`}
          />
        </Section>

        <Note
          variant="success"
          content="React enforces a 'pure function' mindset — same inputs must always give the same output. Global vars and mutations break this."
        />

        <Note
          variant="warning"
          content="Avoid changing values directly during render. Use `useEffect` or event handlers to perform side effects after render instead."
        />
      </Section>
    </ChapterScreenLayout>
  );
};
