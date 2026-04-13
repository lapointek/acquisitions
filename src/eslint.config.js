import js from '@eslint/js'

export default [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion:2022,
            sourceType: 'module',
            globals: {
              console: 'readonly',
              process: 'readonly',
              Buffer: 'readonly',
              __dirname:  'readonly',
              URL: 'readonly',
              setTimeout: 'readonly',
              clearTimeout: 'readonly',
              setInterval: 'readonly',
              clearInterval: 'readonly'
            },
        },
      rules: {
        indent: ['error', 2, {
          SwitchCase: 1
        }],
        'linebreak-style: ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-unised-vars': ['error', {argeIgnorePattern: '^_'}],
        'no-console': 'off',
        'prefer-const': 'error',
        'no-var': 'error',
        'object-shorthand': 'error',
        'prefer-arrow-callback': 'error',
      }


    }
]
