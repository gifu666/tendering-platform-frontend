import {Navigate,createBrowserRouter} from 'react-router-dom';
import {AppLayout} from '../../layouts/AppLayout';import {LoginPage} from '../../pages/auth/LoginPage';import {DashboardPage} from '../../pages/dashboard/DashboardPage';import {ForbiddenPage} from '../../pages/common/ForbiddenPage';import {PlaceholderPage} from '../../pages/common/PlaceholderPage';import {ProjectListPage} from '../../pages/projects/ProjectListPage';import {ProjectDetailPage} from '../../pages/projects/ProjectDetailPage';import {AvailableProjectsPage} from '../../pages/supplier/AvailableProjectsPage';import {MyProjectsPage} from '../../pages/supplier/MyProjectsPage';import {PendingEvaluationPage} from '../../pages/expert/PendingEvaluationPage';import {UserPermissionPage} from '../../pages/system/UserPermissionPage';import {RoleGuard} from '../../components/RoleGuard';import {Role} from '../../types';import {useAuthStore} from '../store/authStore';import {menusByRole} from '../../config/menus';import {useLocation} from 'react-router-dom';
function AuthenticatedLayout(){const user=useAuthStore(s=>s.user);return user?<AppLayout/>:<Navigate to="/login" replace/>}
function ConfiguredRoute(){const user=useAuthStore(s=>s.user);const {pathname}=useLocation();if(!user)return <Navigate to="/login" replace/>;return menusByRole[user.role].some(m=>m.path===pathname)?<PlaceholderPage/>:<Navigate to="/403" replace/>}
const guarded=(roles:Role[],node:React.ReactNode)=><RoleGuard roles={roles}>{node}</RoleGuard>;
export const router=createBrowserRouter([
 {path:'/login',element:<LoginPage/>},{path:'/403',element:<ForbiddenPage/>},{path:'/',element:<AuthenticatedLayout/>,children:[
  {index:true,element:<Navigate to="/dashboard" replace/>},{path:'dashboard',element:<DashboardPage/>},
  {path:'projects',element:guarded([Role.TENDERER],<ProjectListPage/>)},{path:'projects/:id',element:guarded([Role.TENDERER],<ProjectDetailPage/>)},
  {path:'supplier/available-projects',element:guarded([Role.SUPPLIER],<AvailableProjectsPage/>)},{path:'supplier/my-projects',element:guarded([Role.SUPPLIER],<MyProjectsPage/>)},
  {path:'expert/pending',element:guarded([Role.EXPERT],<PendingEvaluationPage/>)},{path:'system/users',element:guarded([Role.ADMIN],<UserPermissionPage/>)},
  {path:'*',element:<ConfiguredRoute/>}
 ]},{path:'*',element:<Navigate to="/login" replace/>}
]);
