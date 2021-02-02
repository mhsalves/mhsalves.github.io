/**
 * See more details in https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  rootDir: '../',
  collectCoverage: true,
  setupFiles: ['<rootDir>/.jest/setup.js'],
  setupFilesAfterEnv: ['<rootDir>/.jest/framework.js'],
  testMatch: [
    '<rootDir>/src/**/__tests__/*.spec.(js|jsx)',
  ],
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
