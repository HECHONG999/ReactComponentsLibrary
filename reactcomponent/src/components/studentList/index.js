import React from 'react'
import PropTypes from "prop-types"
export default function StudentList(props) {
    const list = props.stus.map( it => {
        return <li key={it.id}>姓名: {it.name} 地址: {it.address}</li>
    })
    return (
        <>
           {list} 
        </>
    )
}
StudentList.defaultProps = {
    stus: []
}

StudentList.propTypes = {
    stus: PropTypes.array.isRequired
}