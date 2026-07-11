import {Role} from '../types';
export const P={PROJECT_VIEW:'project:view',PROJECT_EDIT:'project:edit',PROJECT_CREATE:'project:create',SUPPLIER_BROWSE:'supplier:browse',EVALUATION_ENTER:'evaluation:enter',USER_MANAGE:'user:manage'} as const;
export const rolePermissions:Record<Role,string[]>={
 [Role.TENDERER]:[P.PROJECT_VIEW,P.PROJECT_EDIT,P.PROJECT_CREATE],[Role.AGENT]:[P.PROJECT_VIEW,P.PROJECT_EDIT],[Role.SUPPLIER]:[P.SUPPLIER_BROWSE],[Role.EXPERT]:[P.EVALUATION_ENTER],[Role.SUPERVISOR]:[],[Role.ADMIN]:[P.USER_MANAGE]
};
