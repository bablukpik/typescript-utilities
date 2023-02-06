# Utility Types

Let’s boost our code quality with TypeScript’s utility types.

## How to run `.ts` File in the Terminal

* First clone this project and then install the necessary dependencies by running `npm install` command
* Simply, you can run your `.ts` files in the terminal like `npx ts-node utilities/extract.ts utilities/omit.ts` or if you have `ts-node` installed globally then just simply run `ts-node utilities/extract.ts utilities/omit.ts` command.

## Naming Convention

* Use `PascalCase` for type names.
* Do not use `I` as a prefix for interface names.
* Use `PascalCase` for `enum` values.
* Use `camelCase` for `function` names.
* Use `camelCase` for `property` names and `local` variables.
* Use `_` as a prefix for `private` properties.
* Use whole words in names when possible. Only use abbreviations where their use is common and obvious.
* Use `Id`, `3d`, `2d` rather than capital `D`.
* TypeScript file names should be `camelCase` or `kebab-case`.
* Do not export types/functions unless you need to share it across multiple components.
* Do not introduce new types/values to the global namespace.
* Within a file, type definitions should come first.
