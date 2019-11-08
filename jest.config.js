module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['packages/**/src/*.{ts}', '!**/node_modules/**'],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  roots: ['packages/'],
  testPathIgnorePatterns: ['<rootDir>/(?:.+?)/dist/'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
};
