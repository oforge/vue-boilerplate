# Oforge Vue conventions and best practices
This project should be used as a code convention guideline and style/coding guide for
future projects.

When working on large scale projects. it is always a good idea to have conventions,
style and code guidelines for the developer team. This makes it easier to understand,
maintain and extend the code from others.

## Conventions
- We do not specify which IDE to use. But we recommend to work with either **PHP-/WebStorm**
or **VS Code**. Both IDE's have a very good Vue and TypeScript support.
- We create projects based on the vue-cli.
- We use the following cli configuration:
  - Babel[x], TypeScript[x], Router[x], Vuex[x], CSS Pre-processors[x], Linter[x]
  - Class style component [x]
  - Use Babel along TypeScript [x]
  - Use history mode for Router [x]
  - SCSS with dart-sass [x]
  - ESLint with Prettier [x]
  - Lint on save [x]
  - Save config in dedicated config files [x]
- We use the following special configurations:
  - In **`./src/.prettierrc.js`** we define a configuration to check and change quotes to single
  quotes:
    ```js
    module.exports = {
      singleQuote: true,
      printWidth: 120
    };
    ```
- We use **single file components** as .vue files.
- For Template, Script and Style we will use **2 spaces** as the default indentation.
- For Script, Style, and Vue based syntax inside Templates we will use **single
quotes** as default quotes.
- We put a semicolon at the end of a JavaScript / TypeScript statement.
- ~~For Vue 2 projects we use **`Vue.extend()`** for components.~~ For Vue 3 projects we will use
**`defineComponent()`**. As long as there will be no real class component support for Vue 3,
we will stick to that.
- The base folder structure is the one that is pre defined by **vue-cli**, except:
  - We have a **`./src/helper`** folder. This one is used for helper classes or helper functions.
  As an example, we have a helper function **`loadComponents()`** that gets all components from an
  exported module and loads them with **`Vue.component()`**.
  - We have a **`./src/styles`** folder. All global styling, that is not direcly part of any component,
  should be outsourced to this place. E.g. grid layout classes, spacing utility classes, css-reset
  and so on.
  - We have an **`./src/interfaces`** folder. Here we will have our typescript interfaces.


## Coding guides
- The interfaces must follow this style:
  - File name is `name.interface.ts`
  - Class name is `NameInterface`
- Keep templates simple. Instead of `<div v-if="foo == 1 && !foo.id < 3 && foo.name == 'hans'">` use a custom property or a method.
That makes templates more readable.
- Id Variables should be written `variableId` and not `variableID`
