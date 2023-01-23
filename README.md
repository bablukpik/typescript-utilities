# Utility Types

Let’s boost our code quality with TypeScript’s utility types.

## How to run `.ts` File in the Terminal

Here is an example of how you can run your `.ts` file in the terminal `ts-node utilities/extract.ts`

## Naming Convention

* Use PascalCase for type names.
* Do not use `I` as a prefix for interface names.
* Use PascalCase for `enum` values.
* Use camelCase for `function` names.
* Use camelCase for `property` names and `local` variables.
* Use `_` as a prefix for `private` properties.
* Use whole words in names when possible. Only use abbreviations where their use is common and obvious.
* We use `Id`, `3d`, `2d` rather than capital `D`.
* Always capitalize the `M` in `iModel` instead of `IModel`.
* TypeScript file names should be `PascalCase`.
* Do not export types/functions unless you need to share it across multiple components.
* Do not introduce new types/values to the global namespace.
* Within a file, type definitions should come first.
