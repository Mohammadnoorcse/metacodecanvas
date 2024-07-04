import React, { Fragment, useEffect, useRef, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { CommentPostRequest, FilterBlogById, FilterCommentById } from '../ApiRequest/ApiRequest';
import { useParams } from 'react-router-dom';
import { ErrorToast, IsEmpty, SuccessToast } from '../Helper/FormHelper';
import { getUserDetails } from '../Helper/SessionHelperUser';

const BlogDetails = () => {
  const { id } = useParams();
  const [BlogData, setBlogData] = useState({});
  const [CommentData, setCommentData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const CommentRef = useRef();

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  const displayComments = CommentData.slice(pagesVisited, pagesVisited + usersPerPage);
  const pageCount = Math.ceil(CommentData.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const OnPost = (event) => {
    event.preventDefault();
    const Comment = CommentRef.current.value;

    const UserDetails = getUserDetails();
    let UserName = UserDetails ? UserDetails['Name'] : null;

    const BlogId = BlogData._id;

    if (!UserName) {
      ErrorToast("You Need To Login First");
    } else if (IsEmpty(Comment)) {
      ErrorToast("Please Write a Comment");
    } else {
      CommentPostRequest(UserName, BlogId, Comment).then((result) => {
        if (result === true) {
          CommentRef.current.value = "";
          SuccessToast("Comment Successfully Added!");
          ReadCommentByBlogId();
        } else {
          ErrorToast('Something Went Wrong');
        }
      });
    }
  };

  const ReadCommentByBlogId = () => {
    const BlogId = BlogData._id;
    if (BlogId) {
      FilterCommentById(BlogId).then((response) => {
        if (response) {
          setCommentData(response.data);
        }
      });
    }
  };

  useEffect(() => {
    FilterBlogById(id).then((data) => {
      setBlogData(data[0]);
    });
  }, [id]);

  useEffect(() => {
    if (BlogData._id) {
      ReadCommentByBlogId();
    }
  }, [BlogData._id]);

  const OnReply = () => {
    ErrorToast("Reply Functionality Is Not Working Right Now");
  };

  return (
    <Fragment>
      <div className="bg-gray-900 text-white mt-5">
        <div className="p-4 max-w-3xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg mb-4">
            <h1 className="text-3xl font-bold mb-2">{BlogData.Title}</h1>
            <p className="text-lg mb-4">{BlogData.Description}</p>
            <div className="flex justify-between items-center text-gray-400 text-sm">
              <div>Posted by, {BlogData.UserEmail}</div>
              <div>3 hours ago</div>
              <form onSubmit={OnPost}>
                <div className="flex">
                  <textarea
                    ref={CommentRef}
                    type="text"
                    placeholder="Write Your Comment"
                    className="flex-grow p-2 bg-gray-700 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                  ></textarea>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-r-md">
                    Comment
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="space-y-4">
            {displayComments.map((value, index) => (
              <div className="bg-gray-800 p-4 rounded-lg" key={index}>
                <div className="mb-2 flex justify-between items-center">
                  <span className="font-semibold">{value.UserName}</span>
                  <span className="text-sm text-gray-400">2 hours ago</span>
                </div>
                <p className="mb-2">{value.Comment}</p>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Reply to this comment..."
                    className="flex-grow p-2 bg-gray-700 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                  <button onClick={OnReply} className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-r-md">
                    Reply
                  </button>
                </div>
                <div className="ml-6 space-y-2 mt-2">
                  {/* Future functionality for replies can be implemented here */}
                </div>
              </div>
            ))}
          </div>

          <section className="mt-3">
            <div>
              <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
              />
            </div>
          </section>
        </div>
      </div>
    </Fragment>
  );
};

export default BlogDetails;
