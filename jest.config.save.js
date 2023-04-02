module.exports = {
	roots: [
		"<rootDir>/",
		'<rootDir>/__tests__'
	],
	modulePaths: [
		"<rootDir>/"
	],
	testMatch: [
		"**/?(*.)+(spec|test)\.ts"
	],
	coverageReporters: [
		"json",
		"lcov",
		"text",
		"clover",
		"text-summary",
		"cobertura",
		"json-summary"
	],
	coveragePathIgnorePatterns: [
		"/node_modules/",
		"__tests__"
	],
	collectCoverageFrom: [
		"**/*.ts",
	],
	coverageThreshold: {
		global: {
			statements: 0,
			branches: 0,
			functions: 0,
			lines: 0
		}
	}
};
