const nextJest = require('next/jest')
const createJestConfig = nextJest({ dir: './' })
const customJestConfig = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectries: ['node_modules', '<rootDir>/src'],
  testEnvironment: 'jsdom',
}
module.export = createJestConfig(customJestConfig)
