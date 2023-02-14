const CracoAlias = require('@craco/craco');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'jsconfig',
        jsConfigPath: 'jsconfig.paths.json',
      },
    },
  ],
  typescript: {
    enableTypeChecking: true /* (default value) */,
  },
  devServer: {
    port: 8000,
  },
};
