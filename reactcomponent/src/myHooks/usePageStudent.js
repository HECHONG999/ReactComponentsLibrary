import { useEffect , useState} from 'react';
import {getStudentByPage} from "../service"

export default function usePageStudent(page=1, limit = 10) {
    const [resp, setResp] = useState([])
    useEffect( () => {
        ( async () => {
            const result = await getStudentByPage(page, limit);
            setResp(result)
        })()
    }, [])
    return  resp;
}
