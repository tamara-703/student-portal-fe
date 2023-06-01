import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEditAPI, getUpdateAPI } from "../services/getAPI";

export default function EditTemplate() {
  const { id } = useParams();
  const [response, setResponse] = useState(null);
  const nav = useNavigate();

  const getAPI = () => {
    try {
      getEditAPI(id).then((resp) => {
        setResponse(resp.data);
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAPI();
  }, []);

  function handleEdit(e) {
    e.preventDefault();
    const editedData = {
      name: e.target.name.value,
      major: e.target.major.value,
      program: e.target.program.value,
      graduationYear: e.target.graduationYr.value,
      yearCompleted: e.target.yearsCompleted.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
    };

    getUpdateAPI(response._id, editedData).then(nav("/"));
  }

  return response ? (
    <div className="edit">
      <h1>Editing profile for {response.name}</h1>

      <form onSubmit={(e) => handleEdit(e)}>
        <table className="profile-table">
          <caption className="caption-bottom" style={{ color: "white" }}>
            Table 3.1: showing profile page for {response.name}
          </caption>
          <thead>
            <tr>
              <th className="border border-slate-300">Name</th>
              <th className="border border-slate-300">Major</th>
              <th className="border border-slate-300">Program</th>
              <th className="border border-slate-300">Graduation Year</th>
              <th className="border border-slate-300">Years Completed</th>
              <th className="border border-slate-300">Phone</th>
              <th className="border border-slate-300">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300">
                <input
                  type="text"
                  name="name"
                  defaultValue={response.name}
                  style={{color: "black"}}
                ></input>
              </td>
              <td className="border border-slate-300">
                <input
                  type="text"
                  name="major"
                  defaultValue={response.major}
                  style={{color: "black"}}
                ></input>
              </td>
              <td className="border border-slate-300">
                <select name="program" defaultValue={response.program} style={{color: "black"}}>
                  <option>Undergraduate</option>
                  <option>Graduate</option>
                  <option>Certificate</option>
                </select>
              </td>
              <td className="border border-slate-300">
                <input
                  type="number"
                  name="graduationYr"
                  defaultValue={response.graduationYr}
                  style={{color: "black"}}
                ></input>
              </td>
              <td className="border border-slate-300">
                <input
                  type="number"
                  name="yearsCompleted"
                  defaultValue={response.yearsCompleted}
                  style={{color: "black"}}
                ></input>
              </td>
              <td className="border border-slate-300">
                <input
                  type="text"
                  name="phone"
                  max={10}
                  min={3}
                  placeholder="123-456-6789"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  defaultValue={response.phone}
                  style={{color: "black"}}
                ></input>
              </td>
              <td className="border border-slate-300">
                <input
                  type="text"
                  name="email"
                  defaultValue={response.email}
                  style={{color: "black"}}
                ></input>
              </td>
            </tr>
          </tbody>
        </table>
        <input type="submit" value="SUBMIT CHANGES" className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 font-mono"></input>
      </form>
      <br />
      <br />
    </div>
  ) : (
    <div>
      <h1>Page not found</h1>{" "}<br />
      <button
        onClick={() => nav("/")}
        className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 font-mono"
      >
        Go back to main page
      </button>
    </div>
  );
}
