// // jest.config.js
// export default {
//     transform: {
//       '^.+\\.jsx?$': 'babel-jest',
//     },
//     testEnvironment: 'node',
//     extensionsToTreatAsEsm: ['.jsx'],
//     globals: {
//       'ts-jest': {
//         useESM: true,
//       },
//     },
//   };
export default {
    preset: 'react-app',
    testEnvironment: 'jsdom',
    transformIgnorePatterns: ['node_modules/(?!(babel-jest|@babel/preset-env)/)'],
  };
  