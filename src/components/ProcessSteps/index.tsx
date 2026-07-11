import {Steps} from 'antd';
const steps=['采购需求','项目创建','招标文件','发标','投标','开标','评标','定标','合同归档'];
export function ProcessSteps({current=0}:{current?:number}){return <div className="detail-card"><Steps current={current} size="small" items={steps.map(title=>({title}))}/></div>}
