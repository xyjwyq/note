import {useState, useEffect} from 'react'
import {getAllStudents} from './student'

export default function useGetAllStudents() {
    const [students, setStudents] = useState([])
    useEffect(() => {
        getAllStudents().then(res => {
            setStudents(res);
        });
    }, []);
    return students;
}
