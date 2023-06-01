import { useEffect, useState } from "react";
import { getIndexAPI } from "../services/getAPI";
import { Link } from "react-router-dom";

export default function Main(props) {
  console.log("in main");
  const [studentData, setStudentData] = useState([]);

  const fetchData = () => {
    getIndexAPI()
      .then((resp) => {
        setStudentData(resp.data);
        console.log("found data: " + resp.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  //the main page will display student courses, major, graduation year and years completed
  return (
    <div className="main-table">
      <table class="table-fixed">
        <thead className="border border-slate-300">
          <tr className="border border-slate-300">
            <th className="border border-slate-300">Student name</th>
            <th className="border border-slate-300">Graduation year</th>
            <th className="border border-slate-300">Profile link</th>
          </tr>
        </thead>
        <tbody className="border border-slate-300">
          {studentData ? (
            studentData.map((student, i) => {
              return (
                <tr className="border border-slate-300">
                  <td className="border border-slate-300">{student.name}</td>
                  <td className="border border-slate-300">{student.graduationYear}</td>
                  <td className="border border-slate-300">
                    <Link
                      to="/student/profile"
                      className="font-mono"
                      state={student}
                      id="link-in-main"
                    >
                      Student profile
                    </Link>
                  </td>
                </tr>
              );
            })
          ) : (
            <div>no information found</div>
          )}
        </tbody>
      </table>
    </div>
  );
}
