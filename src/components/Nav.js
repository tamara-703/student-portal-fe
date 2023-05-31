import {Link} from 'react-router-dom';

export default function Nav() {


    //navigation links
    return (

        <div>
            <Link to='/'>Main page</Link>
            <Link to='/student/register'>Register new course</Link>
        </div>
    )
}
