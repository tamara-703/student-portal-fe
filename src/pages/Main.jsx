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
    <div>
      Main page
      {studentData ? (
        studentData.map((student, i) => {
          return (
            <div>
              <div key={i}>{student.name}</div>
              <Link to="/student/profile" state={student}>Student Profile</Link>
            </div>
          );
        })
      ) : (
        <div>no information found</div>
      )}
    </div>
  );
}
