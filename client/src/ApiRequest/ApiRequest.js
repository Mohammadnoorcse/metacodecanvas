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

//blog post request...
export function BlogPostRequest(UserEmail,Title,Description){
    let URL=BaseUrl+"/blogpost";
    let PostBody={UserEmail:UserEmail,Title:Title,Description:Description}

    return Axios.post(URL,PostBody).then((res)=>{
        if(res.status===200){
            return true;
        }else{
            return false;
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong")
        return false;
    })
}


//Read user blog..
export function FilterBlogByEmail(Email) {
    const URL = `${BaseUrl}/ReadUserBlog/${Email}`;
    return Axios.get(URL)
      .then((res) => {
        if (res.status === 200) {
          return { data: res.data['data'], count: res.data['count'] };
        } else {
          return false;
        }
      })
      .catch((err) => {
        return false;
      });
  }

  //filter blog by id
  export function FilterBlogById(id){
    const URL = `${BaseUrl}/ReadBlogById/${id}`;
    return Axios.get(URL).then((res)=>{

        if(res.status===200){
            return res.data['data'];
        }else{
            return false
        }

    }).catch((err)=>{
        return false
    })
}

  // search Blog
  export const BlogSearchRequest = (searchTerm) => {
    const URL = `${BaseUrl}/blogSearch?searchTerm=${searchTerm}`;
    return Axios.get(URL).then((res) => {
      if (res.status === 200) {
        return Array.isArray(res.data['data']) ? res.data['data'] : [];
      } else {
        return [];
      }
    }).catch((err) => {
      console.error(err);
      return [];
    });
  };
  
  export function FilterCommentById(id) {
    const URL = `${BaseUrl}/ReadCommentById/${id}`;
    return Axios.get(URL)
      .then((res) => {
        if (res.status === 200) {
          return { data: res.data['data'], count: res.data['count'] };
        } else {
          return false;
        }
      })
      .catch((err) => {
        return false;
      });
  }


  //blog post request...
export function CommentPostRequest(UserName,BlogId,Comment){
  let URL=BaseUrl+"/comment";
  let PostBody={UserName,BlogId,Comment}

  return Axios.post(URL,PostBody).then((res)=>{
      if(res.status===200){
          return true;
      }else{
          return false;
      }
  }).catch((err)=>{
      ErrorToast("Something Went Wrong")
      return false;
  })
}

export function GetVideo(videoCategory){
  const URL = `${BaseUrl}/getVideo?videoCategory=${videoCategory}`;
  return Axios.get(URL).then((res)=>{
    if(res.status === 200){
      return res.data['data'];
    } else {
      return false;
    }
  }).catch((err)=>{
    return false;
  });
}

//video upload
export function PostRequest(data){
  // let URL="http://localhost:5000/api/v1/postVideo"
  let URL=BaseUrl+"/CourseVideo";

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


