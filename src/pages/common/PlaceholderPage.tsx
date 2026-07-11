import {Card,Result} from 'antd';
import {PageHeader} from '../../components/PageHeader';
export function PlaceholderPage(){return <><PageHeader title="模块建设中" description="该页面已纳入下一阶段开发计划"/><Card><Result status="info" title="功能边界待业务评审确认" subTitle="当前路由和角色权限已经配置，确认业务规则后将在独立模块中实现。"/></Card></>}
