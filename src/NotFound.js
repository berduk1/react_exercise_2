import { Link } from "react-router-dom";

const NotFound = () =>{
    return(
        <div className="not-found">
            <h2>Sorry, that page can not be found</h2>
            <Link to="/">Back to homepage...</Link>
        </div>
    )
}
export default NotFound