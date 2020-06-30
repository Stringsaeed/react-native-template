module.exports = {
  root: true,
  extends: '@callstack',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'react', 'react-native'],
  settings: {
    'import/resolver': {
      typescript: {}
    }
  },
  rules: {
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react/display-name': 0,
    'react-native/no-raw-text': [
      2,
      {
        skip: ['Button']
      }
    ],
    'react-native/no-single-element-style-arrays': 2,
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react',
            importNames: ['useMemo', 'useCallback'],
            message:
              '`useMemo` and `useCallback` are subject to cache busting. Please use `useMemoOne`'
          }
        ]
      }
    ],
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'object'
        ]
      }
    ],
    'import/newline-after-import': ['error', { count: 1 }]
  }
};
