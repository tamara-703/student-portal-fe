import { useLocation, useNavigate, useParams } from "react-router-dom"
import { getDeleteAPI, getEditAPI } from '../services/getAPI';
import { useEffect, useState } from "react";
import EditTemplate from "./EditTemplate";



export default function Profile(props) {

    const location = useLocation();
    const [student, setStudent] = useState(null);
    const [_response, setResponse] = useState(null);
    const nav = useNavigate();

    const studentData = location.state;

    useEffect(() => {
        setStudent(studentData);

        console.log('student data: ' + student);
    },[])

    function handleDelete (e, studentId) {
        e.preventDefault();

        console.log("student id " + studentId);

        getDeleteAPI(studentId);

        setStudent(null);

    }

    function handleEdit(e,studentId) {
        e.preventDefault();

        getEditAPI(studentId).then((response) => {
            setResponse(response);
            console.log("response " + _response);
        })

    }

    return (
        <div>Profile page

            {
                student ?
                        <div>
                            <table>
                                <tr>
                                    <th>name</th>
                                    <th>major</th>
                                    <th>program</th>
                                    <th>graduation year</th>
                                    <th>phone</th>
                                    <th>email</th>
                                </tr>
                                <tr>
                                <td>{student.name}</td>
                                <td>{student.major}</td>
                                <td>{student.program}</td>
                                <td>{student.graduationYear}</td>
                                <td>{student.phone}</td>
                                <td>{student.email}</td>
                                </tr>

                                <tr>
                                    <td>
                                        <form onSubmit={(e) => handleDelete(e,student._id)}>
                                            <input type="submit" value='DELETE STUDENT'></input>
                                        </form>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <button onClick={() => nav(`/student/${student._id}/edit`)}>EDIT STUDENT</button>
                                        {/* {_response ? <EditTemplate response={_response} /> : <div></div>} */}
                                    </td>
                                </tr>
                            </table>

                        </div>
            : <div>no information found</div>}



        </div>
    )
}
