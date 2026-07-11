import {Button,Form,Space} from 'antd';
import {ReactNode} from 'react';
export function SearchForm({children,onSearch}:{children:ReactNode;onSearch?:()=>void}){return <div className="search-panel"><Form layout="inline"><Space wrap>{children}<Button type="primary" onClick={onSearch}>查询</Button><Button htmlType="reset">重置</Button></Space></Form></div>}
