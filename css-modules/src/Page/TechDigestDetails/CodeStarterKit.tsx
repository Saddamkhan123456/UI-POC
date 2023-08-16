import React from "react";
import SidebarHeader from "../../Components/Molecules/Sidebar/SidebarHeader";
import SidebarBody from "../../Components/Molecules/Sidebar/SidebarBody";

const CodeStarterKit = () => {
  return (
    <>
      <SidebarHeader title="Code starter kit" variant="h1" />
      <SidebarBody>
        <h5> Type Annotations and Signatures:</h5>
        Always provide explicit type annotations for your functions and values. This helps catch type errors early and
        improves code readability. Additionally, use type signatures for your module exports to make your API more
        understandable. Avoid Partial Functions: Strive to write total functions that are defined for all possible
        inputs. Avoid partial functions like head or tail which can lead to runtime errors. Pattern Matching: Use
        pattern matching extensively to destructure data types. This makes your code more expressive and helps avoid
        nested if statements or complex conditional logic. Use Type Constructors and Records: Utilize algebraic data
        types (sum types) and records (product types) to model your data effectively. This enhances type safety and
        readability. Keep Functions Small and Composable: Write small, focused functions that do one thing well. Compose
        these functions to build complex functionality. This improves maintainability and testability. Type-Driven
        Development: Follow a type-driven development approach where you first design your types and then write
        functions to match those types. This often leads to better design decisions and more robust code. Type Classes
        and Type Constraints: Use type classes for writing polymorphic code that works across different data types. This
        promotes code reusability and abstracts common behavior. Monad Transformers: When dealing with multiple monadic
        effects (e.g., handling asynchronous and stateful computations), consider using monad transformers to compose
        them in a clean and modular way. Leverage the Type System: Take advantage of the powerful type system to catch
        errors at compile time. Use phantom types, newtypes, and type-level programming when appropriate. Testing: Write
        property-based tests using libraries like QuickCheck to validate the behavior of your functions with a wide
        range of inputs. This helps ensure correctness and reliability. Documentation and Comments: Write clear and
        concise documentation for your code, including types and usage examples. This helps other developers (and future
        you) understand your codebase.
      </SidebarBody>
    </>
  );
};

export default CodeStarterKit;
