# Vite 2.x + Vue 3.x + TypeScript Starter

## 技术栈

- 编程语言：[TypeScript 4.x](https://www.typescriptlang.org/zh/) + [JavaScript](https://www.javascript.com/)
- 前端框架：[Vue 3.x](https://v3.cn.vuejs.org/)
- 路由工具：[Vue Router 4.x](https://next.router.vuejs.org/zh/index.html)
- 状态管理：[Vuex 4.x](https://next.vuex.vuejs.org/)
- UI 框架：[Element Plus](https://element-plus.org/#/zh-CN)
- CSS 预编译：[Stylus](https://stylus-lang.com/) / [Sass](https://sass.bootcss.com/documentation) / [Less](http://lesscss.cn/)
- HTTP 工具：[Axios](https://axios-http.com/)
- Git Hook 工具：[husky](https://typicode.github.io/husky/#/) + [lint-staged](https://github.com/okonet/lint-staged)
- 代码规范：[EditorConfig](http://editorconfig.org) + [Prettier](https://prettier.io/) + [ESLint](https://eslint.org/)
- 提交规范：[Commitizen](http://commitizen.github.io/cz-cli/) + [Commitlint](https://commitlint.js.org/#/)
- 单元测试：[vue-test-utils](https://next.vue-test-utils.vuejs.org/) + [jest](https://jestjs.io/) + [vue-jest](https://github.com/vuejs/vue-jest) + [ts-jest](https://kulshekhar.github.io/ts-jest/)

## 在线预览

https://altmaniss.github.io/vite-vue3-template/#/

## 快速开始

### 获取项目

#### 使用 Git

```sh
git clone git@github.com:AltmanIss/vue3-ts-cli.git
```

### 安装依赖

```sh
npm install
# or
yarn add
```

### 启动项目

```sh
npm run dev
```

### 项目打包

```sh
npm run build
```

## Q&A

1. Q: `git cz` 不生效

   A: 请全局安装 commitizen，命令：`npm install commitizen -g`

2. Q: husky 报错

   A: 请检查你的项目下是否有 Git 仓库，没有则先 `git init` 初始化一个
