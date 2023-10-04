// jest.config.js
export default {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    testEnvironment: 'node',
    extensionsToTreatAsEsm: ['.jsx'],
    globals: {
      'ts-jest': {
        useESM: true,
      },
    },
  };
  