### 说明
继承自安法师的 vitesse-lite[https://github.com/antfu/vitesse-lite]
做了一些自定义，作为自己的项目模板

### 项目结构
starter-vue3
├── LICENSE
├── README.md
├── auto-imports.d.ts
├── components.d.ts
├── index.html
├── netlify.toml
├── package.json
├── pnpm-lock.yaml
├── public
│   └── favicon.ico
├── shims.d.ts
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── images
│   │   │   └── icon-title-bg.png
│   │   └── videos
│   ├── common
│   │   ├── constants.ts
│   │   └── utils.ts
│   ├── components
│   │   ├── Navbar.vue
│   │   └── README.md
│   ├── composables
│   │   ├── dark.ts
│   │   └── lodash.ts
│   ├── config
│   ├── logic
│   ├── main.ts
│   ├── modules
│   │   ├── README.md
│   │   ├── index.ts
│   │   └── pinia.ts
│   ├── pages
│   │   ├── README.md
│   │   ├── [...all].vue
│   │   └── index.vue
│   ├── store
│   │   ├── layer.ts
│   │   ├── map.ts
│   │   └── user.ts
│   ├── styles
│   │   └── main.css
│   └── types
│       ├── UserModule.ts
│       └── index.ts
├── static
│   ├── data
│   └── images
├── test
│   ├── __snapshots__
│   │   └── component.test.ts.snap
│   ├── basic.test.ts
│   └── component.test.ts
├── tsconfig.json
├── unocss.config.ts
└── vite.config.ts

### vite-plugin-pages (文件路由系统 vite插件）
文档[https://github.com/hannoeru/vite-plugin-pages]

### unplugin-auto-import（自动导入 vite插件）
文档[https://github.com/antfu/unplugin-auto-import]


### unplugin-vue-components （自动注册、导入组件 vite插件）
文档[https://github.com/antfu/unplugin-vue-components]

### css工具  unocss
工具文档\配置规则[https://github.com/unocss/unocss]
类名规则同tailwindcss[https://tailwindcss.com/docs/width]
