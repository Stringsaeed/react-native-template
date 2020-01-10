module.exports = {
  presets: ['module:metro-react-native-babel-preset', '@babel/preset-flow'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@views': './src/views',
          '@constants': './src/constants',
          '@utils': './src/utils',
          '@services': './src/services',
          '@state_container': './src/state_container',
          '@styles': './src/styles',
          '@i18n': './src/i18n',
          '@containers': './src/containers',
        },
      },
    ],
  ],
};
