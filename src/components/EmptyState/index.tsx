import {Empty,Button} from 'antd';
export function EmptyState({description='暂无数据',action}:{description?:string;action?:()=>void}){return <Empty description={description}>{action&&<Button type="primary" onClick={action}>立即创建</Button>}</Empty>}
