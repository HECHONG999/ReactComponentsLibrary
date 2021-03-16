import React from 'react'
import "./index.css"
export default function Modal(props) {
    let defalutProps = {
        bg:"rgba(0,0,0,.5)"
    }
    let datas = Object.assign(defalutProps, props);
    return (
        <div onClick={(e) => {
            if(e.target.className == "modal") {
                datas.onClose()
            }
        }} className="modal" style={{background: datas.bg}} >
            <div className="modal-center">{datas.children}</div>
        </div>
    )
}
