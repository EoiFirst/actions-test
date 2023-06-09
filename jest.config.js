/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageThreshold: {
	global: {
		statements: 0,
		branches: 100,
		functions: 0,
		lines: 0
	}
  }
};