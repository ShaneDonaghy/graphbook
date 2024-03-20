const path = require('path');

module.exports = {
    components: 'src/client/components/**/*.js',
    require: [
        path.join(__dirname, 'assets/styles.css')
    ],
    webpackConfig: require('./webpack.client.conf')
}
