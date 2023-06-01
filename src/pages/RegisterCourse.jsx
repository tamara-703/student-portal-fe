import { useState } from "react";
import { getCreateAPI } from "../services/getAPI";
import { useNavigate } from "react-router-dom";

export default function RegisterCourse() {
  const [createdStudent, setCreatedStudent] = useState(null);
  const nav = useNavigate();

  function handleRegister(e) {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      major: e.target.major.value,
      program: e.target.program.value,
      graduationYear: e.target.graduationYr.value,
      yearCompleted: e.target.yearsCompleted.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
    };

    getCreateAPI(data).then((resp) => {
      setCreatedStudent(resp);
    });
  }

  return (
    <div className="register">
      <form onSubmit={(e) => handleRegister(e)}>
        <table className="register-table">
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
                  style={{ color: "black" }}
                ></input>
              </td>
              <td className="border border-slate-300">
                <input
                  type="text"
                  name="major"
                  style={{ color: "black" }}
                ></input>
              </td>
              <td>
                <select
                  name="program"
                  className="border border-slate-300"
                  style={{ color: "black" }}
                >
                  <option>Undergraduate</option>
                  <option>Graduate</option>
                  <option>Certificate</option>
                </select>
              </td>
              <td className="border border-slate-300">
                <input
                  type="number"
                  name="graduationYr"
                  style={{ color: "black" }}
                ></input>
              </td>
              <td className="border border-slate-300">
                <input
                  type="number"
                  name="yearsCompleted"
                  style={{ color: "black" }}
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
                  style={{ color: "black" }}
                ></input>
              </td>
              <td className="border border-slate-300">
                <input
                  type="email"
                  name="email"
                  placedholder="jsmith@uni.edu"
                  style={{ color: "black" }}
                ></input>
              </td>
            </tr>
          </tbody>
        </table>
        <input
          type="submit"
          value="SUBMIT"
          className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 font-mono"
        ></input>
      </form>
      {createdStudent ? (
        <div>
            <h2 style={{color: "white"}}>Successfully created. Redirecting back to homepage</h2><br />
            {setTimeout(() => {
                nav('/')
            }, 3000)}

        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

{
  /* <form onSubmit={(e) => handleRegister(e)}>
                <label>Name</label>
                <input type='text' name='name'></input>
                <label>Major</label>
                <input type="text" name='major'></input>
                <label>Program</label>
                <select name='program'>
                    <option>Undergraduate</option>
                    <option>Graduate</option>
                    <option>Certificate</option>
                    </select>
                <label>Graduation Year</label>
                <input type='number' name="graduationYr"></input>
                <label>Years Completed</label>
                <input type="number" name='yearsCompleted'></input>
                <label>Phone</label>
                <input type="text" name='phone' max={10} min={3} placeholder="123-456-6789"
  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"></input>
                <label>Email</label>
                <input type="email" name='email' placedholder='jsmith@uni.edu'></input>
                <input type="submit" value='SUBMIT' className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 font-mono"></input>
            </form> */
}
