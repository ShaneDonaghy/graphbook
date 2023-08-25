exports.config= {
    runner: 'local',
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            project: './tsconfig.json',
            transpileOnly: true
        }
    },
    specs: [
        './features/**/*.feature'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities: [{
        browserName: 'chrome'
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost:3000',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    reporters: ['spec','junit',['allure', {outputDir: 'allure-results'}]],
    cucumberOpts: {
        // <string[]> (file/dir) require files before executing features
        require: ['./step-definitions/steps.js'],
        // <boolean> show full backtrace for errors
        backtrace: false,
        // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        requireModule: [],
        // <boolean> invoke formatters without executing steps
        dryRun: false,
        // <boolean> abort the run on first failure
        failFast: false,
        // <boolean> hide step definition snippets for pending steps
        snippets: true,
        // <boolean> hide source uris
        source: true,
        // <boolean> fail if there are any undefined or pending steps
        strict: false,
        // <string> (expression) only execute the features or scenarios with tags matching the expression
        tagExpression: '',
        // <number> timeout for step definitions
        timeout: 60000,
        // <boolean> Enable this config to treat undefined definitions as warnings.
        ignoreUndefinedDefinitions: false
    },
    // =====
    // Hooks
    // =====
    // onPrepare: function (config, capabilities) {
    // },
    // onWorkerStart: function (cid, caps, specs, args, execArgv) {
    // },
    // onWorkerEnd: function (cid, exitCode, specs, retries) {
    // },
    // beforeSession: function (config, capabilities, specs, cid) {
    // },
    // before: function (capabilities, specs) {
    // },
    // beforeCommand: function (commandName, args) {
    // },
    // ==============
    // Cucumber Hooks
    // ==============
    // beforeFeature: function (uri, feature) {
    // },
    // beforeScenario: function (world, context) {
    // },
    // beforeStep: function (step, scenario, context) {
    // },
    // afterStep: function (step, scenario, result, context) {
    // },
    // afterScenario: function (world, result, context) {
    // },
    // afterFeature: function (uri, feature) {
    // },
    // afterCommand: function (commandName, args, result, error) {
    // },
    // after: function (result, capabilities, specs) {
    // },
    // afterSession: function (config, capabilities, specs) {
    // },
    // onComplete: function(exitCode, config, capabilities, results) {
    // },
    // onReload: function(oldSessionId, newSessionId) {
    // }
}
