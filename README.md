# Oforge Vue conventions and best practices
This project should be used as a code convention guideline and for future projects.

When working on large scale projects. it is always a good idea to have conventions,
style and code guidelines for the developer team. This makes it easier to understand,
maintain and extend the code from others.

## Conventions
- We do not specify which IDE to use. But we recommend to work with either **PHP-/WebStorm**
or **VS Code**. Both IDE's have a very good Vue and TypeScript support.
- We create projects based on the vue-cli.
- We use the following cli configuration:
  - Babel, TypeScript, Router, Vuex, CSS Pre-processors, Linter
  - Class style component [ ]
  - Use Babel along TypeScript [x]
  - Use history mode for Router [x]
  - SCSS with dart-sass [x]
  - ESLint with Prettier [x]
  - Lint on save [x]
  - Save config in dedicated config files [x]  
- We use **single file components** as .vue files.
- For Template, Script and Style we will use **2 spaces** as the default indentation.
- For Script, Style, and Vue based syntax inside Templates we will use **single
quotes** as default quotes.
- For Vue 2 projects we use **`Vue.extend()`** for components. For Vue 3 projects we will use
**`defineComponent()`**. As long as there will be no real class style component support for Vue 3,
we will stick to that.
- The base folder structure is the one that is pre defined by **vue-cli**, except:
  - We have a **`./src/helper`** folder. This one is used for helper classes or helper functions.
  As an example, we have a helper function **`loadComponents()`** that gets all components from an
  exported module and loads them with **`Vue.component()`**.
  - We have a **`./src/style`** folder. All global styling, that is not direcly part of any component,
  should be outsourced to this place. E.g. grid layout classes, spacing utility classes, css-reset
  and so on.
