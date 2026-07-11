import {BidApplication,EvaluationTask,Project,ProjectStatus,PurchaseMode,Role,User} from '../types';
export const projects:Project[]=[
 {id:'p1',code:'ZB2026-001',name:'智慧园区网络设备采购项目',type:'货物',purchaseMode:PurchaseMode.OPEN_TENDER,organizationForm:'委托代理',budget:2680000,status:ProjectStatus.BIDDING,currentNode:'供应商投标',owner:'许经办',agent:'鹏辉招标代理',registerDeadline:'2026-07-18 17:00',bidDeadline:'2026-07-25 09:00',openingTime:'2026-07-25 09:30',lots:[{id:'l1',code:'01',name:'核心网络设备',budget:1680000,status:ProjectStatus.BIDDING},{id:'l2',code:'02',name:'安全与运维设备',budget:1000000,status:ProjectStatus.BIDDING}],attachments:['采购需求确认书.pdf','招标代理委托书.pdf']},
 {id:'p2',code:'ZB2026-002',name:'办公空间升级改造工程',type:'工程',purchaseMode:PurchaseMode.INVITED_TENDER,organizationForm:'自行招标',budget:4200000,status:ProjectStatus.PENDING,currentNode:'招标文件审批',owner:'林经办',registerDeadline:'2026-07-20 17:00',bidDeadline:'2026-07-30 09:00',openingTime:'2026-07-30 09:30',lots:[{id:'l3',code:'01',name:'装修工程',budget:4200000,status:ProjectStatus.PENDING}],attachments:['立项批复.pdf']},
 {id:'p3',code:'XB2026-008',name:'年度法律顾问服务采购',type:'服务',purchaseMode:PurchaseMode.OPEN_INQUIRY,organizationForm:'自行招标',budget:360000,status:ProjectStatus.DRAFT,currentNode:'项目编制',owner:'周经办',registerDeadline:'2026-07-22 17:00',bidDeadline:'2026-07-28 14:00',openingTime:'2026-07-28 14:30',lots:[],attachments:[]}
];
export const availableProjects=[...projects,{...projects[0],id:'p4',code:'ZB2026-006',name:'数据中心运维服务项目',purchaseMode:PurchaseMode.INVITED_TENDER,status:ProjectStatus.BIDDING,currentNode:'报名中'}];
export const applications:BidApplication[]=[
 {id:'a1',projectId:'p1',projectName:'智慧园区网络设备采购项目',lotName:'核心网络设备',registrationStatus:'APPROVED',feeStatus:'PAID',depositStatus:'PENDING',bidFileStatus:'DRAFT',openingTime:'2026-07-25 09:30',currentNode:'投标中',nextAction:'缴纳保证金'},
 {id:'a2',projectId:'p3',projectName:'年度法律顾问服务采购',lotName:'第一包',registrationStatus:'PENDING',feeStatus:'UNPAID',depositStatus:'UNPAID',bidFileStatus:'NOT_UPLOADED',openingTime:'2026-07-28 14:30',currentNode:'报名审核',nextAction:'等待审核'}
];
export const evaluationTasks:EvaluationTask[]=[{id:'e1',projectName:'智慧园区网络设备采购项目',lotName:'核心网络设备',evaluationTime:'2026-07-25 14:00',signInStatus:'PENDING',scoreStatus:'NOT_STARTED'},{id:'e2',projectName:'园区物业服务采购',lotName:'物业服务包',evaluationTime:'2026-07-26 09:30',signInStatus:'SIGNED',scoreStatus:'SCORING'}];
export const users:User[]=[
 {id:'u1',name:'许经办',account:'xujingban',role:Role.TENDERER,organization:'华南采购有限公司',status:'ACTIVE',permissions:['project:view','project:create']},
 {id:'u2',name:'张代理',account:'zhangdaili',role:Role.AGENT,organization:'鹏辉招标代理有限公司',status:'ACTIVE',permissions:['project:view','project:edit']},
 {id:'u3',name:'李供应',account:'ligongying',role:Role.SUPPLIER,organization:'智联设备有限公司',status:'ACTIVE',permissions:['supplier:browse']},
 {id:'u4',name:'王专家',account:'wangzhuanjia',role:Role.EXPERT,organization:'专家库',status:'DISABLED',permissions:['evaluation:enter']}
];
