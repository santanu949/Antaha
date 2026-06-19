const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const scopePluginIndex = webpackConfig.resolve.plugins.findIndex(
        ({ constructor }) => constructor && constructor.name === 'ModuleScopePlugin'
      );
      if (scopePluginIndex > -1) {
        webpackConfig.resolve.plugins.splice(scopePluginIndex, 1);
      }
      
      const oneOfRule = webpackConfig.module.rules.find((rule) => rule.oneOf);
      if (oneOfRule) {
        const babelLoader = oneOfRule.oneOf.find(
          (rule) => rule.loader && rule.loader.includes('babel-loader') && rule.options && rule.options.presets
        );
        if (babelLoader) {
          if (!Array.isArray(babelLoader.include)) {
            babelLoader.include = babelLoader.include ? [babelLoader.include] : [];
          }
          babelLoader.include.push(path.resolve(__dirname, '../about/src'));
        }
      }

      webpackConfig.resolve.alias = {
        ...webpackConfig.resolve.alias,
        react: path.resolve(__dirname, 'node_modules/react'),
        'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
        'framer-motion': path.resolve(__dirname, 'node_modules/framer-motion'),
        'lucide-react': path.resolve(__dirname, 'node_modules/lucide-react'),
      };

      return webpackConfig;
    }
  }
};