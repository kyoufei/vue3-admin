module.exports = {
  tabWidth: 2,
  // 使用单引号代替双引号
  singleQuote: true,
  // 对象的 key 仅在必要时用引号
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  jsxBracketSameLine: true,
  // 一行最多 120 字符
  printWidth: 120,
  singleQuote: true,
  semi: true,
  // 末尾使用逗号
  trailingComma: 'es5',
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200,
      },
    },
  ],
  arrowParens: 'always',
};
