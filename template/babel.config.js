const plugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      root: ['./src/'],
      extensions: ['.js', '.jsx', '.es', '.es6', '.mjs', '.ts', '.tsx'],
      alias: {
        '@assets': './src/assets',
        '@components': './src/components',
        '@constants': './src/constants',
        '@hooks': './src/hooks',
        '@interfaces': './src/interfaces',
        '@routers': './src/routers',
        '@screens': './src/screens',
        '@services': './src/services',
        '@styles': './src/styles',
        '@utils': './src/utils'
      }
    }
  ],
  'react-native-reanimated/plugin'
];

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins
};
