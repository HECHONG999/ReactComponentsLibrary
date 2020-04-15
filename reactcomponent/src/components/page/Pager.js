import React from 'react';
import "./Pager.css"

export default function Pager(props) {
    let pageNumber = getTotalPage(props);
    let min = getMin(props.current, pageNumber, props);
    let max = getMax(min, pageNumber, props)
    let spanArr = []
    console.log(min, max)
    for(let i = min; i < max ; i ++) {
        spanArr.push(<span onClick={() => {toPage(i, pageNumber, props)}} className={ i === props.current ? "active item" : "item" } key={i}>{i}</span>)
    }
    console.log(spanArr)
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

function getMin(current, pageNumber, props) {
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
   props.onChange && props.onChange(target)
}

/**
 * 计算出总页数
 * @param {*} props 
 */
function getTotalPage(props) {
    return Math.ceil( props.total / props.limit )
}

