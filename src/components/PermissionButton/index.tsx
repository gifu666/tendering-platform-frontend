import {Button,ButtonProps,Tooltip} from 'antd';
import {useAuthStore} from '../../app/store/authStore';
export function PermissionButton({permission,...props}:ButtonProps&{permission:string}){const allowed=useAuthStore(s=>s.user?.permissions.includes(permission));return allowed?<Button {...props}/>:<Tooltip title="当前角色无此操作权限"><span><Button {...props} disabled/></span></Tooltip>}
