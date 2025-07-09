import React from "react";
import { ChapterScreenLayout } from "../components/ScreenLayout";
import { Section } from "../components/Section";
import { Note } from "../components/Note";
import { List } from "../components/List";
import { CodeBlock } from "../components/CodeBlock";
import { Link } from "../components/Link";
import { Linking } from "react-native";

export const GenericsScreen = () => {
  return (
    <ChapterScreenLayout>
      {/* Section 1: What are Generics */}
      <Section title="Chapter 13: TypeScript Generics">
        <Note
          variant="info"
          content="Generics let you write flexible, reusable functions, components, and types that still preserve type safety."
        />
        <Note
          variant="info"
          content="Think of generics as type variables — you can use them like function parameters, but for types."
        />
      </Section>

      {/* Section 2: Generic Functions */}
      <Section title="6.1 Defining a Generic Function">
        <CodeBlock
          code={`function identity<T>(value: T): T {
  return value;
}

// usage
const a = identity<string>("hello"); // T is string
const b = identity(42); // T is inferred as number`}
        />
        <Note
          variant="success"
          content="TypeScript will often infer the generic type from the argument passed, so you don’t always need to specify it explicitly."
        />
      </Section>

      {/* Section 3: Why Not Use 'any'? */}
      <Section title="6.2 Why Generics Are Better than 'any'">
        <List
          variant="unordered"
          items={[
            "`any` disables type safety — TypeScript won’t catch type errors.",
            "Generic `T` keeps the relationship between input and output types.",
            "You get IntelliSense support and compiler warnings with generics.",
          ]}
        />
        <CodeBlock
          code={`function logAny(value: any): any {
  return value;
}

const a = logAny("text"); // TypeScript doesn’t know it's a string

function logGeneric<T>(value: T): T {
  return value;
}

const b = logGeneric("text"); // T is string, TypeScript knows this`}
        />
      </Section>

      {/* Section 4: Constraining Generics */}
      <Section title="6.3 Constraining Generics with 'extends'">
        <Note
          variant="info"
          content="You can restrict what types a generic can be by using extends."
        />
        <CodeBlock
          code={`function getProperty<T extends object, K extends keyof T>(
  obj: T,
  key: K
) {
  return obj[key];
}

const user = { name: "Shoug", age: 22 };
getProperty(user, "name"); // 'name' is a key of 'user'
getProperty(user, "email"); // Error: 'email' is not a key`}
        />
        <Note
          variant="warning"
          content="Using `extends` ensures T has the shape or properties you expect — helpful for working with objects, arrays, etc."
        />
      </Section>

      {/* Section 5: Generic Arrow Functions & Default Types */}
      <Section title="6.4 Arrow Functions & Default Type Parameters">
        <CodeBlock
          code={`const wrapInArray = <T>(value: T): T[] => [value];

// You can also provide a default
function greet<T = string>(name?: T): T {
  return (name ?? "Guest") as T;
}`}
        />
        <Note
          variant="info"
          content="Setting a default type (`T = string`) is useful when you want a fallback but still allow override."
        />
      </Section>

      {/* Section 6: Summary of When to Use Generics */}
      <Section title="6.5 When to Use Generics">
        <List
          variant="unordered"
          items={[
            "When the function/component works with different types.",
            "When you want to preserve the type relationship between input and output.",
            "When writing utilities or data structures like `List<T>`, `Map<K, V>`.",
            "When using reusable components (e.g., `<Select<OptionType> />`).",
          ]}
        />
        <Note
          variant="success"
          content="Generics make your code reusable, safe, and smart without losing type information."
        />
        <Link
          linkLabel="Official TypeScript Generics Docs"
          onPress={() =>
            Linking.openURL(
              "https://www.typescriptlang.org/docs/handbook/2/generics.html"
            )
          }
        />
      </Section>
    </ChapterScreenLayout>
  );
};
