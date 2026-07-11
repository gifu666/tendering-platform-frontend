import {Role} from '../types';
export const roleLabels:Record<Role,string>={[Role.TENDERER]:'招标人',[Role.AGENT]:'招标代理',[Role.SUPPLIER]:'供应商',[Role.EXPERT]:'评标专家',[Role.SUPERVISOR]:'监督人员',[Role.ADMIN]:'平台管理员'};
export const demoUsers:Record<Role,{name:string;organization:string}>={
 [Role.TENDERER]:{name:'许经办',organization:'华南采购有限公司'},[Role.AGENT]:{name:'张代理',organization:'鹏辉招标代理有限公司'},[Role.SUPPLIER]:{name:'李供应',organization:'智联设备有限公司'},[Role.EXPERT]:{name:'王专家',organization:'专家库'},[Role.SUPERVISOR]:{name:'陈监督',organization:'采购监督办公室'},[Role.ADMIN]:{name:'平台管理员',organization:'平台运营中心'}
};
