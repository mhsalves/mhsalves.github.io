/**
 * See more details in https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  rootDir: '../',
  collectCoverage: true,
  // Mirrors "baseUrl": "src" in jsconfig.json, so specs and app code can use
  // the same absolute imports.
  moduleDirectories: ['node_modules', '<rootDir>/src'],
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
