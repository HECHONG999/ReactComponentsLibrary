import React, {useState, useEffect} from 'react'
import {getStudentByPage} from "../../service"
import StudentList from "../studentList";
import Pager from "../page/Pager"
export default function StudentContainer() {
    const [students, setStudent] = useState([])
    const [page, setPage] = useState(1);    // 当前页面
    const [limit, setLimit] = useState(10); // 每次请求数据的条数
    const [total, setTotal] = useState(0);  // 数据的总条数
    const [panolNumber, setPanolNumber] = useState(5);  // 设置显示的页面数量

    useEffect( () => {
        ( async function () {
            const resp = await getStudentByPage(page, limit);
            setStudent(resp.findByPage)
            setTotal(resp.cont);
        })()
    }, [page,limit])
    return (
        <div>
            <StudentList stus={students} />
            <Pager 
                current={page}
                limit={limit}
                total={total}
                panolNumber={panolNumber}
                onPageChange={ (newPage) => {
                    setPage(newPage);
                }}
            />
        </div>
    )
}
