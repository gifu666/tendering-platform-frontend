# 招投标采购平台前端

全流程电子化招投标采购平台的第一阶段前端示范工程，面向招标人、招标代理、供应商、评标专家、监督人员和平台管理员提供角色化的工作台与业务入口。

## 技术栈

- React 19 + TypeScript
- Vite
- Ant Design
- React Router
- Zustand
- Axios

## 安装与启动

```bash
npm install
npm run dev
```

开发服务器默认访问地址为 `http://localhost:5173`。

## 构建

```bash
npm run build
npm run preview
```

## 演示角色切换

登录页提供预填的 Mock 账号，可直接进入系统。登录后通过右上角的“演示角色”切换器查看六种角色的菜单与工作台：招标人、招标代理、供应商、评标专家、监督人员、平台管理员。

该切换器仅用于开发和验收演示；接入真实登录、角色与权限接口后应删除。

## 已完成功能

- Mock 登录，以及手机号、CA 登录入口占位
- 通用后台框架：侧栏、顶部栏、面包屑、通知、退出和菜单折叠
- 六角色配置化菜单、工作台与路由访问拦截
- 招标人项目管理和项目详情页
- 供应商可参与项目、我参与的项目页
- 专家待评项目页
- 管理员用户与角色权限示范页
- 通用表格、搜索、状态、流程、详情、空状态和权限组件

## Mock 数据与后续接口

当前项目使用 `src/mocks/data.ts` 中的演示数据；`src/services/request.ts` 和 `src/services/projectService.ts` 已预留统一请求与异步服务层。接入真实后端时，在 `.env` 中配置实际 API 地址，并以真实服务函数替换 Mock 实现，同时保留既有 TypeScript 类型和页面调用边界。

`.env` 不会被提交。请从 `.env.example` 复制生成本地配置文件，且不要在其中存放或提交任何真实密钥。

## 文档

架构、角色权限、菜单路由、Mock 数据与下一阶段建议详见 [docs/FRONTEND_ARCHITECTURE.md](docs/FRONTEND_ARCHITECTURE.md)。
