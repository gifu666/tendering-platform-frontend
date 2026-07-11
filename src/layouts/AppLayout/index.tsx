import {BellOutlined,MenuFoldOutlined,MenuUnfoldOutlined,LogoutOutlined,SwapOutlined} from '@ant-design/icons';
import {Avatar,Badge,Breadcrumb,Button,Dropdown,Layout,Menu,Select,Space,Typography} from 'antd';
import {useMemo,useState} from 'react';
import {Outlet,useLocation,useNavigate} from 'react-router-dom';
import {useAuthStore} from '../../app/store/authStore';
import {menusByRole} from '../../config/menus';
import {roleLabels} from '../../config/roles';
import {Role} from '../../types';
const {Header,Sider,Content}=Layout;
export function AppLayout(){
 const [collapsed,setCollapsed]=useState(false);const user=useAuthStore(s=>s.user)!;const logout=useAuthStore(s=>s.logout);const switchRole=useAuthStore(s=>s.switchDemoRole);const nav=useNavigate();const location=useLocation();
 const menus=menusByRole[user.role];const current=menus.find(m=>m.path===location.pathname);const crumbs=useMemo(()=>[{title:'首页'},{title:current?.label??'工作台'}],[current]);
 return <Layout className="app-shell"><Sider width={236} collapsedWidth={72} collapsed={collapsed} theme="dark"><div className="brand"><div className="brand-mark">招</div>{!collapsed&&<div><strong>招投标采购平台</strong><span>电子交易管理系统</span></div>}</div><Menu theme="dark" mode="inline" selectedKeys={[location.pathname]} items={menus.map(m=>({key:m.path!,label:m.label}))} onClick={({key})=>nav(key)}/></Sider><Layout><Header className="topbar"><Button type="text" icon={collapsed?<MenuUnfoldOutlined/>:<MenuFoldOutlined/>} onClick={()=>setCollapsed(!collapsed)}/><div className="topbar-actions"><Badge count={3} size="small"><Button type="text" icon={<BellOutlined/>}/></Badge><div className="demo-switch"><SwapOutlined/><span>演示角色</span><Select size="small" value={user.role} onChange={(r)=>{switchRole(r);nav('/dashboard')}} options={Object.values(Role).map(r=>({value:r,label:roleLabels[r]}))}/></div><Dropdown menu={{items:[{key:'logout',label:'退出登录',icon:<LogoutOutlined/>,onClick:()=>{logout();nav('/login')}}]}}><Space className="user-chip"><Avatar>{user.name.slice(0,1)}</Avatar><span><Typography.Text strong>{user.name}</Typography.Text><small>{roleLabels[user.role]} · {user.organization}</small></span></Space></Dropdown></div></Header><Content className="content"><Breadcrumb items={crumbs}/><Outlet/></Content></Layout></Layout>
}
