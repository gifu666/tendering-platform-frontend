# 前端架构说明

## 1. 技术栈

React 19、TypeScript、Vite、Ant Design、React Router、Zustand、Axios。当前以桌面端1440px办公场景为主。

## 2. 目录结构

- `src/app`：路由、Provider、全局状态
- `src/layouts`：登录后通用布局
- `src/components`：可复用业务组件
- `src/config`：角色、菜单、权限配置
- `src/pages`：按业务域组织的页面
- `src/services`：接口层与统一request
- `src/mocks`：第一阶段Mock数据
- `src/types`：领域类型和状态枚举
- `src/styles`：主题外的全局样式

## 3. 角色与权限

六种角色统一使用 `Role` 枚举。角色默认权限维护在 `config/permissions.ts`。页面操作使用 `PermissionButton`，路由访问使用 `RoleGuard`；隐藏菜单不能代替路由鉴权。

## 4. 菜单配置

`config/menus.ts` 按角色维护菜单。新增菜单时同步注册路由；业务页面中不直接拼装角色菜单。

## 5. 路由配置

`app/router/index.tsx` 集中声明路由。已实现页面使用角色守卫；未完成但已纳入菜单的页面使用受菜单权限控制的建设中页面。

## 6. 通用组件

已实现 `PageHeader`、`SearchForm`、`DataTable`、`StatusTag`、`ProcessSteps`、`EmptyState`、`DetailDescriptions`、`ConfirmDialog`、`RoleGuard`、`PermissionButton`。状态颜色由 `StatusTag` 单点维护。

## 7. Mock数据

`mocks/data.ts` 提供项目、供应商参与项目、评标任务和用户数据。`services/projectService.ts` 展示异步服务封装形式，页面后续应逐步只依赖服务层。

## 8. 接入真实API

1. 在 `.env` 配置API地址；
2. 在 `services/request.ts` 注入真实Token和错误处理；
3. 用真实服务函数替换Mock返回，保持页面使用的TypeScript类型不变；
4. 登录接口返回真实角色与权限后，删除演示角色切换器；
5. 开标、评标大厅后续根据确认方案接入WebSocket。

## 9. 当前完成功能

登录、后台框架、六角色工作台、项目列表与详情、供应商可参与/已参与项目、专家待评项目、管理员用户权限示范页。

## 10. 合理假设与TODO

- 当前以项目下可包含标段展示，但是否强制按标段开展报名/投标仍待确认。
- CA、手机号验证码、支付均为入口或Mock，不代表真实第三方已经接入。
- 项目状态和下一步操作为演示数据，最终以业务状态机为准。
- 邀请招标的“未被邀请”状态仅作交互示范。

## 11. 下一阶段

优先确认状态机、权限矩阵和采购方式差异，再实现需求管理、招标文件与评标办法、报名审核、费用保证金、投标文件上传，随后进入开标和评标实时大厅。
