import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  skipFormatting,
  {
    // Add custom rules here
    rules: {
      quotes: ['error', 'single', { allowTemplateLiterals: true }],
      'no-multiple-empty-lines': [
        'warn',
        {
          // Limit empty lines
          max: 2, // General maximum
          maxEOF: 1, // Maximum at end of file
          maxBOF: 0, // Maximum at beginning of file
        },
      ],
      eqeqeq: ['error', 'always'], // Require === and !==,
      'prefer-const': 'error',
      'no-undef': 'warn', // No undefined variables,
      'no-console': 'warn',
      'no-unused-vars': 'warn', // No unused variables
      'no-duplicate-imports': 'error', // No multiple imports from same module
    },
  },
]
