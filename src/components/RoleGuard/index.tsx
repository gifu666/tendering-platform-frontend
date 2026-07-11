import {Navigate} from 'react-router-dom';
import {ReactNode} from 'react';
import {Role} from '../../types';
import {useAuthStore} from '../../app/store/authStore';
export function RoleGuard({roles,children}:{roles:Role[];children:ReactNode}){const user=useAuthStore(s=>s.user);if(!user)return <Navigate to="/login" replace/>;return roles.includes(user.role)?children:<Navigate to="/403" replace/>}
