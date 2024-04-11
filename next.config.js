const path = require("path");

module.exports = {
  webpack(config) {
    // config.module.rules.push({
    //   test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
    //   use: {
    //     loader: 'url-loader',
    //     options: {
    //       limit: 100000,
    //     },
    //   },
    // });
    // config.resolve.alias['routes'] = path.join(__dirname, 'routes');
    // config.resolve.alias['components'] = path.join(__dirname, 'components');
    // config.resolve.alias['common'] = path.join(__dirname, 'common');
    // config.resolve.alias['@redux'] = path.join(__dirname, '@redux');
    // config.resolve.alias['utils'] = path.join(__dirname, 'utils');
    // // if (!dev) {
    // //   config.plugins.push(new CompressionPlugin());
    // // }
    // config.plugins.push(new AntdMomentWebpackPlugin());

    return config;
  },
};
