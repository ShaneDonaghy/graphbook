const { browser } = require ('@wdio/globals');
const { config } = require('../wdio.conf.js');

module.exports = class Page {
    openPath (path) {
        return browser.url(`${config.baseUrl}/${path}`);
    }
    open () {
        return browser.url(`${config.baseUrl}`);
    }
}
