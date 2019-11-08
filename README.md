# Monorepo + GraphQL + TypeScript
 
### Monorepo Repository

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)



<img src="https://i.ibb.co/48XxW2w/1280px-Type-Script-Logo-Blue-svg.png" height="35" ></img>

<img src="https://i.ibb.co/j532qfb/Screen-Shot-2019-10-29-at-23-12-29.png" height="65" ></img>


***

## Technologies in use

- NodeJS - Server
- [Apollo GraphQL Server](https://www.apollographql.com/)
- [Apollo Graph Manager](https://engine.apollographql.com/)
- Jest - Unit Testing
- TypeScript - Dev Language
- Lerna - Monorepo management
- Yarn - Npm runner


## Getting Started

1. Clone this repository using SSH:

   `git clone git@github.com:otomer/monorepo-graphql-typescript.git`

2. Install [Lerna](https://github.com/lerna/lerna), [Typescript](https://www.npmjs.com/package/typescript) and [Yarn](https://www.npmjs.com/package/yarn) globally

   `yarn global add lerna typescript yarn`
   
3. Bootstrap all packages in the monorepo [(?)](https://github.com/lerna/lerna/tree/master/commands/bootstrap)

    `lerna bootstrap`


That's it, you are all set!

## Running 'My Service' Package

1. Run: `lerna bootstrap` (Run this only if you pull some cruical package changes)
2. Run: `lerna run compile` (Compiles all packages)
3. Navigate to: `/packages/services/myservice`
4. Start the application `yarn start`

<img src="https://i.ibb.co/89KBhtF/Screen-Shot-2019-11-08-at-12-30-15.png" alt="GraphQL Server"></img>

5 Navigate to `http://localhost:4000/graphql`
6. Execute one of the examples given in `/packages/services/myservice/examples.md`

<img src="https://i.ibb.co/7RwxYzW/Screen-Shot-2019-11-08-at-12-23-43.png" alt="Graphql Example"></img>

## Project Structure

Breaking down the basic structure and the configurations

```
packages/
  libs
    agify                 // Agify 3rd party lib integration, for example
      dist/
      src/
        index.ts
      package.json        // package-specific deps and scripts
      tsconfig.json       // config used to build for publishing
  services
    myservice/            // service package, just for example
      dist/
      src/
        server.ts
      package.json        // package-specific deps and scripts
      README.md           // shown in npmjs.com. included in npm artifact
      tsconfig.json       // config used to build for publishing

.babelrc                  // project-wide babel configuration
.editorconfig             // config for consistent coding styles between editors/IDEs
.eslintignore             // eslint (linter) ignored directories/files
.eslintrc                 // eslint (linter) configuration
.gitignore                // github's default node gitignore with customizations
.prettierignore           // prettier ignored directories/files
.prettierrc               // prettier configuration
jest.config.js            // jest configuration
lerna.json                // lerna configuration
package.json              // common dev deps and workspace-wide scripts
README.md                 // workspace-wide information. shown in github
tsconfig.json             // common typescript configuration
yarn.lock                 // the only lock file in the repo. all packages combined
```

## Testing

Test runner is [jest](https://github.com/facebook/jest).
To run all eligible tests across all packages in the monorepo:

  `
  yarn test
  `

## Linting, Formatters and Ethics

Tools being used:
- [Prettier](https://github.com/prettier/prettier) - Opinionated Code Formatter.
- [ESlint](https://github.com/eslint/eslint) - Static code analysis tool for identifying
and reporting problematic patterns found in JavaScript code.
  
All tools are configured in project level and takes part during development,
commit, open Pull Requests and in our CI/CD flow.

1. Run Lint: `yarn lint`
2. Run Prettier: `yarn prettier`

    To run prettier on auto-save in WebStorm go to `.idea.watcherTasks.xml` file and enable it.  [eslint](https://github.com/eslint/eslint) - Static code analysis tool for identifying and reporting problematic patterns found in JavaScript code.

*** 

[![ForTheBadge built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)](https://github.com/otomer/monorepo-graphql-typescript)

Tomer Ovadia @ [github](https://github.com/otomer)
