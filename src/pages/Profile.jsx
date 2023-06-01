import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getDeleteAPI, getEditAPI } from "../services/getAPI";
import { useEffect, useState } from "react";

export default function Profile(props) {
  const location = useLocation();
  const [student, setStudent] = useState(null);
  const [_response, setResponse] = useState(null);
  const nav = useNavigate();

  const studentData = location.state;

  useEffect(() => {
    setStudent(studentData);

    console.log("student data: " + student);
  }, []);

  function handleDelete(e, studentId) {
    e.preventDefault();

    alert('Are you sure you want to delete this student?');

    console.log("student id " + studentId);

    getDeleteAPI(studentId);

    setStudent(null);
  }

  return (
    <div className="profile">
      {student ? (
        <div>
          <h1>{student.name}'s Profile page</h1>
          <table className="profile-table">
            <caption className="caption-bottom" style={{ color: "white" }}>
              Table 3.1: showing profile page for {student.name}
            </caption>
            <thead>
              <tr>
                <th className="border border-slate-300">name</th>
                <th className="border border-slate-300">major</th>
                <th className="border border-slate-300">program</th>
                <th className="border border-slate-300">graduation year</th>
                <th className="border border-slate-300">phone</th>
                <th className="border border-slate-300">email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300">{student.name}</td>
                <td className="border border-slate-300">{student.major}</td>
                <td className="border border-slate-300">{student.program}</td>
                <td className="border border-slate-300">
                  {student.graduationYear}
                </td>
                <td className="border border-slate-300">{student.phone}</td>
                <td className="border border-slate-300">{student.email}</td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          <div className="profile-listeners flex sm:justify-center space-x-4">
            <form onSubmit={(e) => handleDelete(e, student._id)}>
              <input
                type="submit"
                value="DELETE STUDENT"
                className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 font-mono"
              ></input>
            </form>

            <button
              onClick={() => nav(`/student/${student._id}/edit`)}
              className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 font-mono"
            >
              EDIT STUDENT
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h3 style={{color: "white"}}>Student Deleted</h3>{" "}<br />
          <button
            onClick={() => nav("/")}
            className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 font-mono"
          >
            Go back to main page
          </button>
        </div>
      )}
    </div>
  );
}
