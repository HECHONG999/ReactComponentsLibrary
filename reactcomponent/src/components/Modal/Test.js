import React, { Component } from 'react'
import Modal from "./index.js"
export default class Test extends Component {
    state = {
        showModal: true
    }
    hideModal = () => {
        this.setState({
            showModal: false
        })
    }
    showModal = () => {
        this.setState({
            showModal: true
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.showModal ? <Modal onClose={this.hideModal}>苏苏小宝贝</Modal>: null
                }
               
            </div>
        )
    }
}
