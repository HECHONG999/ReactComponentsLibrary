import React, { Component } from 'react'
import Pager from "./Pager"
export default class PagerTest extends Component {
    state = {
        current: 2,
        limit: 10,
        total: 100,
        panelNumber: 5
    }
    handlePageChange = (newPage) => {
        this.setState({
            current: newPage
        })
    }
    render() {
        return (
            <>
              <Pager {...this.state} onPageChange={this.handlePageChange}></Pager>  
            </>
        )
    }
}
