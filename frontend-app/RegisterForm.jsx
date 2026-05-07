
import { Component } from "react";
class RegisterForm extends Component {
    render(){
     return(
        <form action="">
            <fieldset>
                <h1>RegisterForm</h1>
                <p>
                <label htmlFor="">Name :</label>
                <input type="text" placeholder="Enter Name" id="" /> < br /><br />
                <label htmlFor="">Password :</label>
                <input type="password" placeholder="Enter Password" /> <br /><br />
                <label htmlFor="">Email</label>
                <input type="email" placeholder="Enter Email" /> <br /><br />
                <label htmlFor="">Phone No: </label>
                <input type="tel" pattern="[6-9]{1}[0-9]{9]" placeholder="Enter Phone No" /> <br /><br />
                <button type="submit">Register</button>
                <button type="reset">Reset</button>

              </p>
            </fieldset>
        </form>

     );
  };  
}
export default RegisterForm;