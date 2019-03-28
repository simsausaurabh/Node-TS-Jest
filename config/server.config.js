const { defaults } = require('jest-config');

module.exports = {
    bail: 1,
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    testMatch: ["<rootDir>/../src/greet.test.ts"],
    testEnvironment: "node",
    verbose: true,
    // To extract coverage while tests are executed, we can make it false to not to extract coverage while running tests
    collectCoverage: true,
    collectCoverageFrom: [
        "**/src/**",
        "!**/node_modules/**"
    ],
    coverageReporters: ["json", "lcov", "text", "clover"],
    moduleFileExtensions: [ ...defaults.moduleFileExtensions, "ts", "tsx", "js", "jsx", "json", "node"],
    moduleDirectories: ["node_modules", "src"],
    roots: ["<rootDir>/../src"],
    globals: {
      "ts-jest": {
        tsConfig: "<rootDir>/../tsconfig.json",
        isolatedModules: true
      }
    }
  };
