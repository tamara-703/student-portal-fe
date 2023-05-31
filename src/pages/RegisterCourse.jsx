import { useState } from 'react';
import {getCreateAPI} from '../services/getAPI'

export default function RegisterCourse() {

    const [createdStudent, setCreatedStudent] = useState(null);

    function handleRegister(e)
    {
        e.preventDefault();


        const data = {
            name: e.target.name.value,
            major: e.target.major.value,
            program: e.target.program.value,
            graduationYear: e.target.graduationYr.value,
            yearCompleted: e.target.yearsCompleted.value,
            phone: e.target.phone.value,
            email: e.target.email.value
        }

        getCreateAPI(data).then((resp) => {
            console.log("returned response " + resp)
            setCreatedStudent(resp);
        })

    }

    return (
        <div>Register course

            <form onSubmit={(e) => handleRegister(e)}>
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
                <input type="submit" value='SUBMIT'></input>
            </form>


            {createdStudent ?
                    <div>Successfully created {createdStudent.name}</div>
             : <div></div>}
        </div>

    )
}
