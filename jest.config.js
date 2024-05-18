// jest.config.js
module.exports = {
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.jsx?$': 'babel-jest', // Use babel-jest to transpile JavaScript and JSX files
      '^.+\\.(css|svg|png|jpg|jpeg|gif)$': 'jest-transform-stub', // Use jest-transform-stub for static files
    },
    moduleNameMapper: {
      '\\.(css|less)$': 'identity-obj-proxy', // Optional: Mock CSS modules if you're using them
    },
  };