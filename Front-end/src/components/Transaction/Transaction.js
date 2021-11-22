import React, { useState } from 'react';
import List from './TransList';
import TransDetail from './TransDetail';
export default function Transaction() {
    const [state, setState] = useState('list');
    const [order,setOrder] = useState();

    function toDetail(o) {
       setState('detail');
       setOrder(o);
    }
    function toList() {
        setState('list');
    }

    return (
        <div>
            {
                state === 'list' && (
                    <List Detail={toDetail} />
                )}
            {
                state === 'detail' &&(
                    <TransDetail 
                    List={toList}
                    order={order}
                    />
                )
            }
        </div>
    );
}