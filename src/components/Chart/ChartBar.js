import React from "react";
import './ChartBar.css'

const ChartBar = props => {
    let barFillHeight = '0%';

    if (props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }
    return <div className="chat-bar">
        <div className="chart-bar__inner">
            <div className="chart-bar__fill" style={{ height: barFillHeight }}></div>
            {/* 리액트에서 동적으로 style을 적용할 때에는 js 객체를 넣는다. 이중괄호 중 안쪽{}는 js의 객체형태로 보면 됨.  */}
            {/* 동적 style 객체는 css의 attribute를 key값으로 갖는다. 만약 key를 카멜이 아닌 '-'형태로 추가하려면 key값을 string으로 설정해야 한다. ex{background-color='red} (X), {'background-color': 'red'} (O) */}
        </div>

        <div className="chart-bar__label">{props.label}</div>
    </div>
}

export default ChartBar;

