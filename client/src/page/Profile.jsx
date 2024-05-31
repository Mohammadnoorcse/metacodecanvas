import { useState } from "react"
import profile from "../assets/profile.webp"
const blogItem = [
    {  
        _id:1,
        header:"Can not working my code",
        description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
         typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
         containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
    },
    {  
        _id:2,
        header:"Can not working my code",
        description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
         typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
         containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
    },
    {  
        _id:3,
        header:"Can not working my code",
        description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
         typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
         containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
    },
]
const Profile = () => {
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [blog,setBlog] = useState(false);
    const [comment,setComment] = useState(false);
    const [commentIndex,setCommentIndex] = useState();
    const CommentHandler = (index) =>{
        setComment(!comment)
        setCommentIndex(index);
    }

  return (
    <div className="w-full min-h-screen flex justify-center bg-color mt-14">
        <div className="container-content flex flex-col gap-3 text-gray-400 md:items-center md:pt-5">
            <div className="flex justify-between pt-2 md:w-[42rem]">
                <div className="flex gap-3">
                   <img src={profile} alt="profile" className="w-12 h-12 rounded-full"/>
                    <span>Mohammad Noor</span>
                </div>
                <div>
                    <button className="p-0.5 border border-indigo-600 rounded-md cursor-pointer hover:text-white" onClick={()=>setBlog(!blog)}>Post Blog</button>
                </div>
            </div>
             <div className={blog?" w-full flex flex-col gap-2 bg-current p-2 shadow-md rounded-md md:w-[42rem]":"hidden"}>
                <form action="" className="flex flex-col gap-2 p-1 md:w-[40rem]">
                    <div className="w-full">
                    <input
                        type="text"
                        placeholder="Enter the Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full h-10 outline-none bg-gray-800 rounded-xl text-gray-400 hover:text-white py-1 px-2"
                    />
                    </div>
                    <div className="w-full">
                      <textarea
                        type="text"
                        placeholder="Enter the Sub Title Description"
                        value={description}
                        name="description"
                        rows={7}
                        onChange={(e) =>
                          setDescription(e.target.value)
                        }
                        className="w-full outline-none bg-gray-800 rounded-xl text-gray-400 hover:text-white py-1 px-2 max-h-15 overflow-y-auto"
                      />
                    </div>
                    <button className="text-gray-800 hover:text-white cursor-pointer">Submit</button>

                </form>
             </div>
             {/* Blog Post item */}

              {blogItem.map((value,index) => (
                 <div key ={value._id} className="w-full  p-[1rem] flex flex-col gap-3 overflow-hidden bg-gray-900 rounded-md">
                 <h3 className="text-xl text-white font-bold">{value.header}</h3>
                 <span className="h-[5rem] pb-[1rem] overflow-hidden">{value.description}</span>
                 
                 <div className="flex gap-5">
                     <button className="hover:text-white" onClick={()=>CommentHandler(index)}>Comment</button>
                     <button className="hover:text-white">Update</button>
                     <button className="hover:text-red-600">Delete</button>
                 </div>
                 {/* comment */}
                 <div className={comment && commentIndex===index?"w-full h-[5rem] bg-current overflow-y-auto scrollbar-hide flex flex-col gap-2 py-4 px-4":"hidden"}>
                      {/* comment-item */}
                     <div className=" flex gap-3 items-center border py-2 px-3 rounded-md">
                         <img src={profile} alt=" CommentUserImage" className="w-8 h-8 rounded-full"/>
                         <span className="text-gray-800">You can not install the node modules</span>
                     </div>
 
                     <div className=" flex gap-3 items-center border py-2 px-3 rounded-md">
                         <img src={profile} alt=" CommentUserImage" className="w-8 h-8 rounded-full"/>
                         <span className="text-gray-800">You can not install the node modules</span>
                     </div>
 
                 </div>
                 
              </div>
              ))}
            
             
        

        </div>

    </div>
  )
}

export default Profile