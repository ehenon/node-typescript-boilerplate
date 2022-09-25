/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: [
    './src/**/*.(t|j)s',
  ],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    './.+/node_modules',
    './.+/build',
  ],
  coverageReporters: [
    'text',
    'lcov',
  ],
  testPathIgnorePatterns: [
    './.+/node_modules',
    './.+/build',
  ],
  testRegex: '.*\\.spec\\.ts$',
};
