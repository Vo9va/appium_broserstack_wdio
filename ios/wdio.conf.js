exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'vpvpvp_ugz2ix',
  key: process.env.BROWSERSTACK_ACCESS_KEY || '8SXBNgFzAm452uomFZWi',

  updateJob: false,
  specs: [
    './ios/specs/*.spec.js'
  ],
  exclude: [],

  capabilities: [{
    project: "First Webdriverio iOS Project",
    build: 'Webdriverio iOS',
    name: 'single_test',
    device: 'iPhone 11 Pro',
    os_version: "13",
    app: process.env.BROWSERSTACK_APP_ID || 'bs://ccaf91834815a39e365c5f1e00aa65fe136da0ce',
    'browserstack.debug': true
  }],

  logLevel: 'info',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 20000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 4,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 80000
  }
};
