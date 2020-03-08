const {defaults} = require('jest-config');

module.exports = {
    verbose: true,
    roots: ["./src"],
    setupFiles: ["./setupTests.ts"],
    testPathIgnorePatterns: ["node_modules/"],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    // testMatch: ["**/__tests__/*.test.(ts|tsx)"],
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    snapshotSerializers: ["enzyme-to-json/serializer"]
};
