import React, { Component } from 'react'
import "./index.css"


export default class ThreeLayout extends Component {
    // 类组件的默认值赋值方法
    static defaultProps = {
        leftWidth: 200,
        rightWidht:200,
        minWidth: 800,
        minHeight:300,
        gap:10
    }
    
    constructor(props) {
        super(props);
       console.log(props)
    }

    render() {
        console.log(this.props.leftWidth)
        return (
            <div className="three-layout">
                <div className="main" style={{
                    height: this.props.minHeight
                }}></div>
                <div className="left-side" style={{
                    width: this.props.leftWidth,
                    height: this.props.minHeight,
                    background: "red",
                    marginRight: this.props.gap
                }}>左边</div>
                <div className="right-side" style={{
                    width: this.props.rightWidht,
                    height: this.props.minHeight,
                    marginLeft: this.props.gap,
                    background: "red"
                }}>右边</div>
            </div>
        )
    }
}
