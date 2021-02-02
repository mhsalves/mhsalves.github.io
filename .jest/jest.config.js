/**
 * See more details in https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  rootDir: '../',
  collectCoverage: true,
  setupFiles: ['<rootDir>/.jest/jest.setup.js'],
  setupFilesAfterEnv: ['<rootDir>/.jest/jest.framework.js'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  coverageReporters: [
    'text',
    'lcov',
  ],
};
