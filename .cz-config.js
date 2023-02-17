module.exports = {
  types: [
    { value: 'Add', name: 'Add: 向代码仓库中添加新的内容（feature, test等）' },
    { value: 'Fix', name: 'Fix: 修复代码仓库中存在的问题（bug，typo，misstatement等）' },
    {
      value: 'Drop',
      name: 'Drop: 移除代码仓库中的内容'
    },
    {
      value: 'Make',
      name: 'Make: 修改编译流程相关文件，工具等（例如Makefile，代码生成器等）'
    },
    {
      value: 'Optimize',
      name: 'Optimize: 修改只与性能优化相关'
    },
    { value: 'Document', name: 'Document: 修改只与文档/注释相关' },
    {
      value: 'Refactor',
      name: 'Refactor: 修改只能包含代码重构（不能新增/删除/修改任何API）'
    },
    {
      value: 'Reformat',
      name: 'Reformat: 修改只能包含代码格式的变化（使用格式化工具格式化代码等）'
    }
  ],

  scopes: [],

  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'TICKET-',
  ticketNumberRegExp: '\\d{1,5}',

  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
    type: '选择一种你的提交类型:',
    scope: '选择一个scope (可选):',
    // used if allowCustomScopes is true
    customScope: 'Denote the SCOPE of this change:',
    subject: '短说明:\n',
    body: '长说明，使用"|"换行(可选)：\n',
    breaking: '非兼容性说明 (可选):\n',
    footer: '关联关闭的issue，例如：#31, #34(可选):\n',
    confirmCommit: '确定提交说明?'
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  skipQuestions: ['body', 'footer'],

  // limit subject length
  subjectLimit: 100
};
