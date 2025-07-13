import React from "react";
import { Section } from "../components/Section";
import { Note } from "../components/Note";
import { CodeBlock } from "../components/CodeBlock";
import { List } from "../components/List";
import { ChapterScreenLayout } from "../components/ScreenLayout";

export const UITreeScreen = () => {
  return (
    <ChapterScreenLayout>
      {/* Section 1: UI as a Tree */}
      <Section title="Chapter 7: UI Tree & Bundling" color="#3AB79B">
        <Note
          variant="info"
          content="React models your entire app as a tree of components. This helps React manage rendering, updates, and optimizations efficiently."
        />
        <List
          variant="unordered"
          items={[
            "Each component is a node in the UI tree.",
            "The tree structure helps React know what changed and what needs to update.",
            "React Native also builds a virtual representation of your UI to optimize re-renders.",
          ]}
        />
      </Section>

      {/* Section 2: Render Tree */}
      <Section title="7.1 Render Tree">
        <Note
          variant="info"
          content="The render tree (or virtual DOM) is a lightweight copy of the UI structure. React uses it to detect differences between renders and update only what's changed."
        />
        <CodeBlock
          code={`<App>\n  <Header />\n  <Main>\n    <Card />\n  </Main>\n  <Footer />\n</App>`}
        />
        <Note
          variant="success"
          content="Think of it like a snapshot of your UI before React decides what to update."
        />
      </Section>

      {/* Section 3: Module Dependency Tree */}
      <Section title="7.2 Module Dependency Tree" color="#3AB79B">
        <Note
          variant="info"
          content="Every time you `import` a file, you create a relationship between modules — this forms a dependency tree."
        />
        <List
          variant="unordered"
          items={[
            "Bundlers like Metro (React Native), Webpack, or Vite use this tree to bundle your app.",
            "Each file becomes a node, and imports are the edges.",
            "Unused modules may still get bundled if tree-shaking isn't working properly.",
          ]}
        />
        <CodeBlock
          code={`// File A\nimport B from './B';\nimport C from './C';\n\n// File B\nimport D from './D';`}
        />
      </Section>

      {/* Section 4: Bundlers and Final Build */}
      <Section title="7.3 How Bundlers Work">
        <Note
          variant="info"
          content="Bundlers like Metro (React Native) analyze your dependency tree and generate a single JavaScript bundle for the app."
        />
        <List
          variant="unordered"
          items={[
            "Tree-shaking: removes unused exports if supported.",
            "Minification: shortens variable names to reduce size.",
            "Dead-code elimination: removes code inside unused conditionals.",
          ]}
        />
      </Section>

      {/* Section 5: Bundle Size Tips */}
      <Section title="7.4 Bundle Size Optimization Tips" color="#3AB79B">
        <List
          variant="unordered"
          items={[
            "Avoid large utility libraries for small features (e.g., use native `Date` instead of Moment.js).",
            "Import only what you need (e.g., `import { isEmpty } from 'lodash'` instead of full `lodash`).",
            "Code-split if possible (React Native uses Metro, which supports RAM bundles).",
            "Use async imports for rarely used screens.",
          ]}
        />
        <Note
          variant="success"
          content="Smaller bundles mean faster app startup and better performance on lower-end devices."
        />
      </Section>
    </ChapterScreenLayout>
  );
};
