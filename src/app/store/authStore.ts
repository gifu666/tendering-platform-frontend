import {create} from 'zustand';
import {Role,User} from '../../types';
import {demoUsers} from '../../config/roles';
import {rolePermissions} from '../../config/permissions';
const makeUser=(role:Role):User=>({id:`demo-${role}`,account:'demo',role,name:demoUsers[role].name,organization:demoUsers[role].organization,status:'ACTIVE',permissions:rolePermissions[role]});
interface AuthState{user:User|null;login:(role?:Role)=>void;logout:()=>void;switchDemoRole:(role:Role)=>void}
export const useAuthStore=create<AuthState>((set)=>({user:null,login:(role=Role.TENDERER)=>set({user:makeUser(role)}),logout:()=>set({user:null}),switchDemoRole:(role)=>set({user:makeUser(role)})}));
