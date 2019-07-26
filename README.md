# fms-client
fms的前端代码库

> react全家桶

## 项目定位

- 完整,优雅地实现必要的功能
- 前后端项目都必须遵守高内聚低耦合的原则,写美观的代码
- 巩固,深入掌握React+Redux+Router全家桶的使用
- 多用用高阶组件和函数式组件等，hooks看情况，暂时不想学
- 使用 async/await 而不是原生Promise
- 点几个新的技能树:日志,RBAC权限管理,单元测试...

## 一些想法
- react-refetch库

## 一些问题
- user menu 下拉框位置不对,要往下一点
- 表格暂时没做分页
- 如果为了追求扁平化而扁平,用户获取和操作数据的效率会大大降低

## 进度

| 日期    | 安排         | 其他 |
| ------- | ------------ | ---- |
| 7月19日 | 前端项目搭建 |      |
| 7月20日 | 主页面结构   |      |
| 7月21日 | 设计项目结构,画了顶栏和侧栏             | 强迫症,感觉又在摸鱼    |
| 7月26日 | 设计了文件档案管理的界面,抽取了一个可复用表单组件             |    |



```sh
src/
  components/      # 🔴 项目通用的‘展示组件’
    Button/
      index.tsx    # 组件的入口, 导出组件
      Groups.tsx   # 子组件
      loading.svg  # 静态资源
      style.css    # 组件样式
    ...
    index.ts       # 到处所有组件
  pagess/      # 🔴 包含'容器组件'和'页面组件'
    LoginPage/     # 页面组件, 例如登录
      components/  # 页面级别展示组件，这些组件不能复用与其他页面组件。
        Button.tsx # 组件未必是一个目录形式，对于一个简单组件可以是一个单文件形式. 但还是推荐使用目录，方便扩展
        Panel.tsx
      reducer.ts   # redux reduces
      useLogin.ts  # (可选)放置'逻辑', 按照👆分离逻辑和视图的原则，将逻辑、状态处理抽取到hook文件
      types.ts     # typescript 类型声明
      style.css
      logo.png
      message.ts
      constants.ts
      index.tsx
    HomePage/
    ...
    index.tsx      # 🔴应用根组件
  hooks/           # 🔴可复用的hook
    useList.ts
    usePromise.ts
  ...
  index.tsx        # 应用入口, 在这里使用ReactDOM对跟组件进行渲染
  stores.ts        # redux stores
  contants.ts      # 全局常量
```



## 资料

[如何做好网页后台的表单和表格设计](https://www.uisdc.com/form-and-table-design)
