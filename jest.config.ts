import type { Config } from 'jest';

export default async (): Promise<Config> => ({
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
});
