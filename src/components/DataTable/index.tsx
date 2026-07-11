import {Table,TableProps} from 'antd';
export function DataTable<T extends object>(props:TableProps<T>){return <div className="data-card"><Table rowKey={(row)=>String((row as {id?:string}).id)} pagination={{pageSize:8,showTotal:(total)=>`共 ${total} 条`,showSizeChanger:false}} {...props}/></div>}
