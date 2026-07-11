export enum Role {TENDERER='TENDERER',AGENT='AGENT',SUPPLIER='SUPPLIER',EXPERT='EXPERT',SUPERVISOR='SUPERVISOR',ADMIN='ADMIN'}
export type Permission=string;
export interface User{id:string;name:string;account:string;role:Role;organization:string;status:'ACTIVE'|'DISABLED';permissions:Permission[]}
export interface MenuItem{key:string;label:string;path?:string;icon?:string;children?:MenuItem[];permissions?:Permission[]}
export enum ProjectStatus{DRAFT='DRAFT',PENDING='PENDING',BIDDING='BIDDING',OPENING='OPENING',EVALUATING='EVALUATING',PUBLICITY='PUBLICITY',COMPLETED='COMPLETED',ARCHIVED='ARCHIVED',REJECTED='REJECTED',ABNORMAL='ABNORMAL'}
export enum PurchaseMode{OPEN_TENDER='OPEN_TENDER',INVITED_TENDER='INVITED_TENDER',OPEN_INQUIRY='OPEN_INQUIRY',INVITED_INQUIRY='INVITED_INQUIRY'}
export type PaymentStatus='UNPAID'|'PENDING'|'PAID'|'REFUNDED';
export type BidFileStatus='NOT_UPLOADED'|'DRAFT'|'SUBMITTED'|'ENCRYPTED'|'FAILED';
export interface Lot{id:string;code:string;name:string;budget:number;status:ProjectStatus}
export interface Project{id:string;code:string;name:string;type:'工程'|'货物'|'服务';purchaseMode:PurchaseMode;organizationForm:'自行招标'|'委托代理';budget:number;status:ProjectStatus;currentNode:string;owner:string;agent?:string;registerDeadline:string;bidDeadline:string;openingTime:string;lots:Lot[];attachments:string[]}
export interface Supplier{id:string;name:string;creditCode:string;admission:'APPROVED'|'PENDING'|'REJECTED'}
export interface BidApplication{id:string;projectId:string;projectName:string;lotName:string;registrationStatus:'PENDING'|'APPROVED'|'REJECTED';feeStatus:PaymentStatus;depositStatus:PaymentStatus;bidFileStatus:BidFileStatus;openingTime:string;currentNode:string;nextAction:string}
export interface EvaluationTask{id:string;projectName:string;lotName:string;evaluationTime:string;signInStatus:'PENDING'|'SIGNED';scoreStatus:'NOT_STARTED'|'SCORING'|'SUBMITTED'}
export interface PaginationResult<T>{list:T[];page:number;pageSize:number;total:number}
