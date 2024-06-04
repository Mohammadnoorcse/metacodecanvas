import Axios from 'axios';
import { ErrorToast, SuccessToast } from '../Helper/FormHelper';
// import { getToken, setEmail, setOTP, setRenterDetails, setToken } from '../Helper/SessionHelperPublisher';
import { setUserDetails } from '../Helper/SessionHelperUser';
// const AxiosHeader={headers:{"token":getToken()}}
const BaseUrl="http://localhost:8000/api/v1"



//Registration Request
export function RegistrationRequest(data){

    let URL=BaseUrl+"/register"


    return Axios.post(URL,data).then((res)=>{
        
        if(res.status===200){
            return true;
        }else{
            return false;
        }
    }).catch((err)=>{
        
        console.log(err);
        return false;
    })
}


// Login
export function LoginRequest(Email, Password) {
    const URL = `${BaseUrl}/login`;

    const PostBody = {
        Email: Email,
        Password: Password
    };

    return Axios.post(URL, PostBody)
        .then((res) => {
            if (res.status === 200) {
                // setToken(res.data.token);
                setUserDetails(res.data.data);
                SuccessToast("Login Success");
                return true;
            } else {
                ErrorToast("Invalid Email or Password");
                return false;
            }
        })
        .catch((err) => {
            console.error("Something went wrong", err);
            ErrorToast("An error occurred. Please try again.");
            return false;
        });
}