import React from 'react';
import "./Pager.css"
/**
 * 分页组件
 * 属性：
 * 1. current：初始页码
 * 2. total：总数据量
 * 3. limit：页容量，每页显示的数据量
 * 4. panelNumber：数字页码最多显示多少个
 * 5. onPageChange：当页码改变的事件
 */
export default function Pager(props) {
    let pageNumber = getTotalPage(props);
    let min = getMin(props.current, props);
    let max = getMax(min, pageNumber, props)
    let spanArr = []
    for(let i = min; i < max ; i ++) {
        spanArr.push(<span onClick={() => {toPage(i, pageNumber, props)}} className={ i === props.current ? "active item" : "item" } key={i}>{i}</span>)
    }
    return (
        <>
            <span className={ props.current === 1 ? "item disable" : "item "} onClick={() => { toPage(1, pageNumber, props)} }>首页</span>
            <span className={ props.current === 1 ? "item disable" : "item "} onClick={ () => {toPage(props.current - 1, pageNumber, props)} }>上一页</span>
            {/* 数字页码 */}
            {spanArr}
            <span className={ props.current === pageNumber ? "item disable" : "item "} onClick={ () => {toPage(props.current + 1, pageNumber, props)} }>下一页</span>
            <span className={ props.current === pageNumber ? "item disable" : "item "} onClick={ () => {toPage(pageNumber, pageNumber, props)} }>尾页</span>
        </>
    )
}

function getMin(current, props) {
    let min = current - Math.floor( props.panolNumber - 1 ) / 2;
    if( min < 1 ) {
        min = 1
    }
    return min
}

function getMax(min, pageNumber, props) {
    let max  =  min + props.panolNumber ;
    if(max >= pageNumber) {
        max = pageNumber
    }
    return max
}

/**
 * 跳转到指定页面
 * @param {*} target 
 * @param {*} props 
 */
function toPage(target, pageNumber, props) {
   
    // if(target <= 0) {
    //     return 
    // }
    // if (target >= pageNumber ) {
    //     return
    // }
    if( target == props.current) { return}
   props.onPageChange && props.onPageChange(target)
}

/**
 * 计算出总页数
 * @param {*} props 
 */
function getTotalPage(props) {
    return Math.ceil( props.total / props.limit )
}

