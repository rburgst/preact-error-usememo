/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  testEnvironment: 'jsdom',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  preset: "ts-jest",
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
};