import React from "react";
import { Linking } from "react-native";
import { ChapterScreenLayout } from "../components/ScreenLayout";
import { Section } from "../components/Section";
import { Note } from "../components/Note";
import { List } from "../components/List";
import { CodeBlock } from "../components/CodeBlock";
import { Link } from "../components/Link";

export const UseMemoScreen = () => {
  return (
    <ChapterScreenLayout>
      {/* Section 1: What is useMemo */}
      <Section title="Chapter 14: useMemo" color="#3AB79B">
        <Note
          variant="info"
          content="useMemo is a React hook that memoizes the result of a computation — it re-runs the function only when its dependencies change."
        />
        <Note
          variant="info"
          content="It helps avoid redoing expensive calculations on every render."
        />
      </Section>

      {/* Section 2: Basic Syntax */}
      <Section title="14.1 Syntax and Usage">
        <CodeBlock
          code={`const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`}
        />
        <List
          variant="unordered"
          items={[
            "`computeExpensiveValue` runs only if `a` or `b` changes.",
            "Otherwise, React reuses the previously cached result.",
          ]}
        />
        <Note
          variant="success"
          content="useMemo is especially useful for avoiding unnecessary recalculations and re-renders of child components."
        />
      </Section>

      {/* Section 3: Real Example */}
      <Section title="14.2 Real Example: Filtering a Big List" color="#3AB79B">
        <CodeBlock
          code={`const filteredItems = useMemo(() => {
  return items.filter(item => item.active);
}, [items]);`}
        />
        <Note
          variant="info"
          content="Filtering a large list can be expensive. useMemo ensures this only happens when `items` actually change."
        />
      </Section>

      {/* Section 4: When You Should Use useMemo */}
      <Section title="14.3 When to Use useMemo">
        <List
          variant="ordered"
          items={[
            "The computation is expensive (e.g., filtering, sorting, math-heavy logic).",
            "It runs on every render but doesn't always need to.",
            "You need to preserve referential equality (e.g., arrays/objects passed to child components).",
            "You're optimizing renders in combination with `React.memo`.",
          ]}
        />
        <Note
          variant="success"
          content="Great for derived data that is slow to compute or causes child re-renders when identity changes."
        />
      </Section>

      {/* Section 5: When You Should NOT Use useMemo */}
      <Section
        title="14.4 When to Avoid useMemo (Overuse Warning)"
        color="#3AB79B"
      >
        <List
          variant="unordered"
          items={[
            "The computation is trivial (like `value * 2`).",
            "You're adding `useMemo` 'just in case' without measuring performance.",
            "You're using it everywhere — this adds memory and CPU overhead.",
          ]}
        />
        <CodeBlock
          code={`//Over-optimization
const doubled = useMemo(() => value * 2, [value]); // Not worth it`}
        />
        <Note
          variant="warning"
          content="useMemo adds memory overhead and dependency tracking — if you're caching cheap operations, it may hurt performance instead of helping."
        />
      </Section>

      {/* Section 6: How It Works Under the Hood */}
      <Section title="14.5 What Happens Internally">
        <List
          variant="unordered"
          items={[
            "React stores the memoized result in memory tied to the component instance.",
            "On each render, it checks dependencies (`[a, b]`).",
            "If they changed → it re-runs the function.",
            "If not → it returns the cached result directly.",
          ]}
        />
        <Note
          variant="info"
          content="This caching and comparison mechanism itself costs a bit of memory and processing — so don't use it unless the savings are worth it."
        />
      </Section>

      {/* Section 7: Performance Measurement Tips */}
      <Section title="14.6 How to Know if useMemo Is Worth It" color="#3AB79B">
        <List
          variant="ordered"
          items={[
            "Use React DevTools Profiler to measure render time.",
            "Log calculation time with `performance.now()`.",
            "Look for unnecessary child re-renders caused by changing object/array references.",
            "Profile first, optimize second — React is already fast in most cases.",
          ]}
        />
        <CodeBlock
          code={`const start = performance.now();
const result = computeHeavyThing();
const end = performance.now();
console.log(\`Calculation took \${end - start}ms\`);`}
        />
        <Link
          linkLabel="React Profiler Setup"
          onPress={() =>
            Linking.openURL(
              "https://react.dev/reference/react/useMemo#measuring-performance"
            )
          }
        />
      </Section>

      {/* Section 8: Final Thoughts */}
      <Section title="14.7 Summary & Best Practices">
        <List
          variant="unordered"
          items={[
            "Use `useMemo` for expensive computations or stable references.",
            "Avoid it for simple operations — it adds cost.",
            "Always pair with profiling or a known performance bottleneck.",
            "Think of `useMemo` as a caching tool, not a speed booster by default.",
          ]}
        />
        <Note
          variant="success"
          content="useMemo is powerful in the right situations — but overusing it can make your app slower and more complex. Use it thoughtfully."
        />
      </Section>
    </ChapterScreenLayout>
  );
};
