import {Descriptions,DescriptionsProps} from 'antd';
export function DetailDescriptions({items}:{items:DescriptionsProps['items']}){return <div className="detail-card"><Descriptions column={3} items={items}/></div>}
