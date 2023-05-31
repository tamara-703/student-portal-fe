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

  return (
    <div>
      this is the edit page
      {response ? (
        <form onSubmit={(e) => handleEdit(e)}>
          <label>Name</label>
          <input type="text" name="name" defaultValue={response.name}></input>
          <label>Major</label>
          <input type="text" name="major" defaultValue={response.major}></input>
          <label>Program</label>
          <select name='program' defaultValue={response.program}>
                    <option>Undergraduate</option>
                    <option>Graduate</option>
                    <option>Certificate</option>
                    </select>
          <label>Graduation Year</label>
          <input
            type="number"
            name="graduationYr"
            defaultValue={response.graduationYr}
          ></input>
          <label>Years Completed</label>
          <input
            type="number"
            name="yearsCompleted"
            defaultValue={response.yearsCompleted}
          ></input>
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            max={10}
            min={3}
            placeholder="123-456-6789"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            defaultValue={response.phone}
          ></input>
          <label>Email</label>
          <input type="text" name="email" defaultValue={response.email}></input>
          <input type="submit" value="SUBMIT CHANGES"></input>
        </form>
      ) : (
        <div></div>
      )}
    </div>
  );
}
