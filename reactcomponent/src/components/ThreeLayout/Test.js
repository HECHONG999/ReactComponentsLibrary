import React, { Component } from 'react';
import ThreeLayout from "./index"

export default class Test extends Component {
    state = {
        leftWidth: 100,
        rightWidht:200,
        minWidth: 800,
        minHeight:300,
        gap:10
    }
    render() {
        return (
            <div>
                <ThreeLayout {...this.state}/>
            </div>
        )
    }
}
