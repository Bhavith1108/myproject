import "./index.css"
import {Link} from "react-router-dom"

const Login=()=>{
  
    return(
    <div className="bg-image">
    <form className="formele">
        <div className="divele">
            <label  for="Name">UserName</label>
            <input id="Name" placeholder="Enter Your Username"/>
        </div>
        
        <div>
            <label for="Password">Password</label>
            <input id="password" placeholder="Enter your password"/>
        </div>

        <button className="button"><Link to="/homepage">Login</Link></button>
        
          <p className="create-account">Create an Account</p>
        
        
    </form>
    </div>
  )
}

export default Login