import React, { Component } from 'react';
import Pager from "./Pager"

export default class PagerTest extends Component {
    state = {
        current: 4,
        total: 100,
        limit: 10,
        panolNumber: 5
    }
    /**
     * 1. target 跳转到当前展示的页面
     * 2. props 组件的属性
     */
    toPage = (newPage) => {
        console.log(newPage)
        this.setState({
            current: newPage
        })
    }

    render() {
        return (
           <Pager {...this.state} onChange={this.toPage} />
        )
    }
}
