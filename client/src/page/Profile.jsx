import { useEffect, useRef, useState } from "react";
import profile from "../assets/profile.webp";
import { useNavigate } from "react-router-dom";
import { ErrorToast, IsEmpty } from "../Helper/FormHelper";
import Swal from "sweetalert2";
import { BlogPostRequest, FilterBlogByEmail } from "../ApiRequest/ApiRequest";
import { getUserDetails } from "../Helper/SessionHelperUser";

const Profile = () => {
  const navigate = useNavigate();
  const userDetails = getUserDetails();

  useEffect(() => {
    if (!userDetails) {
      navigate('/login');
    }
  }, [userDetails, navigate]);

  if (!userDetails) {
    return null;
  }

  const UserEmail = userDetails.Email;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [blog, setBlog] = useState(false);
  const [comment, setComment] = useState(false);
  const [commentIndex, setCommentIndex] = useState(null);
  const [BlogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);

  const TitleRef = useRef();
  const DescriptionRef = useRef();

  const OnPost = (event) => {
    event.preventDefault();

    const Title = TitleRef.current.value;
    const Description = DescriptionRef.current.value;

    if (IsEmpty(Title)) {
      ErrorToast("Title Required");
    } else if (IsEmpty(Description)) {
      ErrorToast("Description Required");
    } else {
      BlogPostRequest(UserEmail, Title, Description).then((result) => {
        if (result === true) {
          TitleRef.current.value = "";
          DescriptionRef.current.value = "";
          setTitle("");
          setDescription("");
          success();
          ReadBlog();
        } else {
          ErrorToast('Something Went Wrong');
        }
      });
    }
  };

  const success = () => {
    Swal.fire({
      title: "Done!",
      text: "Your Post Saved!",
      icon: "success"
    });
  };

  const CommentHandler = (index) => {
    setCommentIndex(commentIndex === index ? null : index);
  };

  const ReadBlog = () => {
    FilterBlogByEmail(UserEmail).then((response) => {
      if (response) {
        setBlogData(response.data);
      }
      setLoading(false);
    });
  };

  useEffect(() => {
    ReadBlog();
  }, [UserEmail]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full min-h-screen flex justify-center bg-color mt-14">
      <div className="container-content flex flex-col gap-3 text-gray-400 md:items-center md:pt-5">
        <div className="flex justify-between pt-2 md:w-[42rem]">
          <div className="flex gap-3">
            <img src={userDetails.imageUrl} alt="profile" className="w-12 h-12 rounded-full" />
            <span>{userDetails.Name}</span>
          </div>
          <div>
            <button className="p-0.5 border border-indigo-600 rounded-md cursor-pointer hover:text-white" onClick={() => setBlog(!blog)}>Post Blog</button>
          </div>
        </div>
        <div className={blog ? "w-full flex flex-col gap-2 bg-current p-2 shadow-md rounded-md md:w-[42rem]" : "hidden"}>
          <form onSubmit={OnPost} className="flex flex-col gap-2 p-1 md:w-[40rem]">
            <div className="w-full">
              <input
                ref={TitleRef}
                type="text"
                placeholder="Enter the Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full h-10 outline-none bg-gray-800 rounded-xl text-gray-400 hover:text-white py-1 px-2"
              />
            </div>
            <div className="w-full">
              <textarea
                ref={DescriptionRef}
                placeholder="Enter the Sub Title Description"
                value={description}
                name="description"
                rows={7}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full outline-none bg-gray-800 rounded-xl text-gray-400 hover:text-white py-1 px-2 max-h-15 overflow-y-auto"
              />
            </div>
            <button type="submit" className="text-gray-800 hover:text-white cursor-pointer">Submit</button>
          </form>
        </div>
        {BlogData.map((value, index) =>
          <div key={value._id} className="w-full p-[1rem] flex flex-col gap-3 overflow-hidden bg-gray-900 rounded-md">
            <h3 className="text-xl text-white font-bold">{value.Title}</h3>
            <span className="h-[5rem] pb-[1rem] overflow-hidden">{value.Description}</span>
            <div className="flex gap-5">
              <button className="hover:text-white" onClick={() => CommentHandler(index)}>Comment</button>
              <button className="hover:text-white">Update</button>
              <button className="hover:text-red-600">Delete</button>
            </div>
            <div className={commentIndex === index ? "w-full h-[5rem] bg-current overflow-y-auto scrollbar-hide flex flex-col gap-2 py-4 px-4" : "hidden"}>
              <div className="flex gap-3 items-center border py-2 px-3 rounded-md">
                <img src={profile} alt="CommentUserImage" className="w-8 h-8 rounded-full" />
                <span className="text-gray-800">You can not install the node modules</span>
              </div>
              <div className="flex gap-3 items-center border py-2 px-3 rounded-md">
                <img src={profile} alt="CommentUserImage" className="w-8 h-8 rounded-full" />
                <span className="text-gray-800">You can not install the node modules</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
