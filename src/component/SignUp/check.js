
// import "../../css/signUpStyle.module.css"
import * as ReactDOM from 'react-dom';
import SignUp from "./SignUp";


export const authSuccess = (content) => {

    if (content.status == "ok")
        localStorage.setItem('USER_KEY', content.data);


}
