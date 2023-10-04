// jest.config.js
export default {
    // Other Jest configurations...
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
  