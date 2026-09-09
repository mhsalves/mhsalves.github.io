/**
 * This config is NOT what compiles the site. Next builds `src/` with SWC, and
 * removing this file leaves the bundles byte for byte identical.
 *
 * It exists for the two tools that do read it:
 *   - Jest, which transforms the specs through babel-jest. Without this file
 *     every suite fails with "Cannot use import statement outside a module".
 *   - The ESLint step of `next build`, which parses JSX with babel.
 *
 * Keeping `next/babel` here is what makes the test transform behave like the
 * real build. It also means the compiled specs require @babel/runtime, which
 * is why that package is a devDependency.
 */
module.exports = {
  presets: ['next/babel'],
}
