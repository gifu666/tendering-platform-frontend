import {Button,Result} from 'antd';import {useNavigate} from 'react-router-dom';
export function ForbiddenPage(){const nav=useNavigate();return <Result status="403" title="无权访问" subTitle="当前演示角色没有该页面的数据或操作权限。" extra={<Button type="primary" onClick={()=>nav('/dashboard')}>返回工作台</Button>}/>}
