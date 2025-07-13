import React from "react";
import { Linking } from "react-native";
import { Section } from "../components/Section";
import { Note } from "../components/Note";
import { CodeBlock } from "../components/CodeBlock";
import { List } from "../components/List";
import { Link } from "../components/Link";
import { ChapterScreenLayout } from "../components/ScreenLayout";

export const UseEffectScreen = () => {
  return (
    <ChapterScreenLayout>
      {/* Section 1: What is useEffect */}
      <Section title="Chapter 12: useEffect and Cleanup" color="#3AB79B">
        <Note
          variant="info"
          content="useEffect is a React hook used to run side effects in function components, like data fetching, event listeners, or timers."
        />
        <Note
          variant="info"
          content="It replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount."
        />
      </Section>

      {/* Section 2: Mount, Update, and Unmount */}
      <Section title="12.1 Component Lifecycle in useEffect">
        <List
          variant="unordered"
          items={[
            "Mount: When the component is first added to the screen.",
            "Update: When the component re-renders due to prop or state changes.",
            "Unmount: When the component is removed from the screen.",
          ]}
        />
        <Note
          variant="warning"
          content="React does not automatically clean up global listeners or timers when a component unmounts."
        />
      </Section>

      {/* Section 3: Global Side Effects and Cleanup */}

      <Section
        title="12.2 Global Side Effects (e.g., window, setInterval)"
        color="#3AB79B"
      >
        <Note
          variant="info"
          content="When you attach global listeners (like window resize) or create intervals, you must remove them manually to prevent memory leaks and unexpected behavior."
        />
        <CodeBlock
          code={`useEffect(() => {
  const handler = () => console.log("resize");
  window.addEventListener("resize", handler);

  return () => {
    window.removeEventListener("resize", handler); // Cleanup on unmount
  };
}, []);`}
        />
        <Note
          variant="warning"
          content="If you forget to remove the listener, it will keep running even after the component is removed from the screen."
        />
      </Section>

      {/* Section 4: Memory and Garbage Collection */}
      <Section title="12.3 Memory and Garbage Collection">
        <Note
          variant="info"
          content="JavaScript automatically frees memory for objects no longer in use, but only if there are no active references to them."
        />
        <Note
          variant="warning"
          content="Global objects like window keep a reference to event listeners unless you explicitly remove them, preventing garbage collection."
        />
        <CodeBlock
          code={`// This will NOT be garbage collected if not removed
window.addEventListener("scroll", someHandler);`}
        />
      </Section>

      {/* Section 5: Performance Risks */}
      <Section title="12.4 Performance and Bug Risks" color="#3AB79B">
        <List
          variant="unordered"
          items={[
            "Multiple components mounting without cleanup = duplicated listeners.",
            "Stale closures might refer to outdated props or state.",
            "Unnecessary memory retention = app slows down over time.",
          ]}
        />
        <Note
          variant="warning"
          content="Always define cleanup inside useEffect to avoid leaks: return () => {/* ... */}."
        />
      </Section>

      {/* Section 6: Best Practices */}
      <Section title="12.5 Best Practices for useEffect Cleanup">
        <List
          variant="ordered"
          items={[
            "Always remove event listeners, intervals, and subscriptions in the cleanup function.",
            "Avoid anonymous functions in add/remove calls — use named functions.",
            "Keep effects tight and scoped to the component’s lifecycle needs.",
          ]}
        />
        <CodeBlock
          code={`useEffect(() => {
  const onScroll = () => console.log("scrolling");
  window.addEventListener("scroll", onScroll);

  return () => {
    window.removeEventListener("scroll", onScroll); // cleanup
  };
}, []);`}
        />
        <Link
          linkLabel="React Official useEffect Docs"
          onPress={() =>
            Linking.openURL("https://react.dev/reference/react/useEffect")
          }
        />
      </Section>
    </ChapterScreenLayout>
  );
};
