import {PurchaseMode} from '../types';
export const purchaseModeLabels:Record<PurchaseMode,string>={[PurchaseMode.OPEN_TENDER]:'公开招标',[PurchaseMode.INVITED_TENDER]:'邀请招标',[PurchaseMode.OPEN_INQUIRY]:'公开询比价',[PurchaseMode.INVITED_INQUIRY]:'邀请询比价'};
export const money=(value:number)=>`¥ ${value.toLocaleString('zh-CN')}`;
