import {projects} from '../mocks/data';
import {PaginationResult,Project} from '../types';
const delay=(ms=180)=>new Promise((resolve)=>setTimeout(resolve,ms));
export async function listProjects():Promise<PaginationResult<Project>>{await delay();return{list:projects,page:1,pageSize:10,total:projects.length}}
export async function getProject(id:string):Promise<Project|undefined>{await delay();return projects.find((item)=>item.id===id)}
