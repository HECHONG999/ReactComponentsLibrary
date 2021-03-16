import React from 'react';
/**
 * 分页组件
 * 1.current：当前页码
 * 2.totle：数据总量
 * 3.limit: 页容量
 * 4.panelNumber： 数字页码最多显示几个
 * 5.onPageChange  当前页码改变的事件
 * @param {*} props 
 * @returns 
 */
export default function Pager(props) {
    let pageNumber = getPageNumber(props);
    let min = getMinNumber(props);
    let max = getMaxNumber(min, pageNumber, props);
    let numbers = []
    for( let i = min; i < max + 1; i ++) {
        numbers.push(<span onClick={() => {toPage(i, props)}} className={props.current == i ? "item active" : "item"}>{i}</span>)
    }
    return (
        <>
            <span onClick={() => {toPage(1,props)}}
                className={props.current == 1 ? "item disabled" : "item"}>首页</span>
            <span onClick={() => {toPage(props.current - 1,props)}}
                className={props.current == 1 ? "item disabled" : "item"}
            >上一页</span>
            {numbers}
            <span onClick={() => {toPage(props.current + 1,props)}}
                className={props.current == pageNumber ? "item disabled" : "item"}
            >下一页</span>
            <span onClick={() => {toPage(pageNumber,props)}}
                className={props.current == pageNumber ? "item disabled" : "item"}
             >尾页</span>
             <span>{props.current}</span>/<span>{props.panelNumber}</span>
        </>
    )
}

function getMaxNumber(min, pageNumber,props) {
    let max = min + props.panelNumber  - 1;
    if(max >= pageNumber) {
        max = pageNumber;
    }
    return max
}
/**
 * 得到最小页码
 * @param {*} props 
 * @returns 
 */
function getMinNumber(props) {
   let min =  props.current - Math.floor(props.panelNumber / 2)
   if(min <= 1) {
       min = 1
   } 
   return min;
}
/**
 * 计算页码总数
 * @param {*} props 
 * @returns 
 */
function getPageNumber(props) {
    return Math.ceil( props.total / props.limit);
}

function toPage(target, props) {
    if(props.current == target) {
        return;
    }
    props.onPageChange && props.onPageChange(target)
}
