module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    "HttpClientTest.ts",
    "JsonBinIoApiTest.ts"
  ]
};
