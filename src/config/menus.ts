import {Role,MenuItem} from '../types';
const d=(label:string,path:string):MenuItem=>({key:path,label,path});
export const menusByRole:Record<Role,MenuItem[]>={
 [Role.TENDERER]:[d('工作台','/dashboard'),d('需求管理','/demands'),d('项目管理','/projects'),d('标段管理','/lots'),d('招标文件','/tender-docs'),d('发标管理','/publishing'),d('报名审核','/registration-audit'),d('开标管理','/opening'),d('评标结果','/evaluation-results'),d('定标管理','/award'),d('合同归档','/contracts'),d('审批待办','/approvals')],
 [Role.AGENT]:[d('工作台','/dashboard'),d('委托项目','/commissioned-projects'),d('招标文件','/tender-docs'),d('评标办法','/evaluation-methods'),d('发标管理','/publishing'),d('参与企业','/participants'),d('开标准备','/opening-preparation'),d('评标组织','/evaluation-organize'),d('中标公示','/award-publicity'),d('中标通知书','/award-notices'),d('合同归档','/contracts')],
 [Role.SUPPLIER]:[d('工作台','/dashboard'),d('可参与项目','/supplier/available-projects'),d('我参与的项目','/supplier/my-projects'),d('招标文件下载','/supplier/downloads'),d('费用与保证金','/supplier/payments'),d('投标文件','/supplier/bid-files'),d('在线报价','/supplier/quotes'),d('开标大厅','/supplier/opening'),d('质疑与异议','/supplier/objections'),d('发票申请','/supplier/invoices'),d('中标通知','/supplier/awards')],
 [Role.EXPERT]:[d('专家工作台','/dashboard'),d('待评项目','/expert/pending'),d('评标任务','/expert/tasks'),d('已完成评标','/expert/completed'),d('个人信息','/profile')],
 [Role.SUPERVISOR]:[d('监督工作台','/dashboard'),d('待监督开标','/supervision/opening'),d('待监督评标','/supervision/evaluation'),d('监督记录','/supervision/records'),d('异常记录','/supervision/exceptions')],
 [Role.ADMIN]:[d('管理工作台','/dashboard'),d('用户管理','/system/users'),d('角色权限','/system/permissions'),d('组织机构','/system/organizations'),d('供应商管理','/system/suppliers'),d('专家库管理','/system/experts'),d('门户内容管理','/system/portal'),d('参数字典','/system/dictionaries'),d('模板配置','/system/templates'),d('审批流程','/system/approvals'),d('系统日志','/system/logs'),d('系统设置','/system/settings')]
};
