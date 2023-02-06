# Point Of Vue

Point Of Vue is a web 3 social sharing network for the programmable web. POV integrates with second-party APIs (second party are APIs you have access to as a user)

## Point Of Vue Globe

This project is the "globe", or "globally known", of components that are used all across the point of vue ecosystem. Vue components added to this project can be displayed on any point-of-vue page.

## What is this and who is it for?

This project can be used as a standalone component library and used on any web page. However, most of these components will have some form of data query that accompanies the code which are configured to use the point-of-vue globe of data. If you intend to use these components outside of the point-of-vue ecosystem you may experience issues.

This project has a license for the code that encompasses each vue component, but the vue components themselves are individually licensed by the person/people who created in and might be licensed differently. Please pay attention to the license associated with each component before including the code in your project. If a component does not have a license in the folder it is encompassed within, then it's license is AGPL-3.0-or-later. (this is done to save space)

# Development

## Commands

All commands can be run directly from the project root like:

```bash
yarn start
```

We use pnpm to run commands in individual workspaces as needed.

### Build
```
pnpm build
```

Build everything: library packages, docs and playground app

### Dev
```
pnpm dev
```

starts the `Vite` dev server for the playground app, landing page app, and docs for testing and playing around with your libraries. Hot Module Reloading is enabled and all files are watched and respective applications reloaded when necessary. 

During `dev`, no bundling has to be done as all of the library package's code is compiled JIT in the playground app. Changes to the components in the component library will auto-compile the library.

### Lint

```
pnpm lint
```

Run eslint on all packages

### Test
```
pnpm test
```

Run `vitest` unit tests on all packages. Tests will start in watch mode by default. To ru tests once, you can run `test-ci` instead.
