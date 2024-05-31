import React, { Fragment } from 'react';
import ReactPaginate from 'react-paginate';

const BlogDetails = () => {
    // const [pageNumber,setPageNumber]=useState(0);


//   const usersPerPage=10;
//   const pagesVisited=pageNumber * usersPerPage;
//   const displayProperties=rooms.slice(pagesVisited,pagesVisited+usersPerPage);
//   const pageCount=Math.ceil(rooms.length / usersPerPage);
//   const changePage=({selected})=>{
//     setPageNumber(selected);
//   };

  return (
    <Fragment>
      <div className="bg-gray-900 text-white mt-5">
        <div className="p-4 max-w-3xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg mb-4">
            <h1 className="text-3xl font-bold mb-2">Problem Heading</h1>
            <p className="text-lg mb-4">
              This is the problem description. It provides detailed information
              about the problem that needs to be addressed.
            </p>
            <div className="flex justify-between items-center text-gray-400 text-sm">
              <div>Posted by Roki</div>
              <div>3 hours ago</div>
            </div>
          </div>

          {/* Comments Section */}
          <div className="space-y-4">
            {/* Single Comment Card */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="mb-2 flex justify-between items-center">
                <span className="font-semibold">User2</span>
                <span className="text-sm text-gray-400">2 hours ago</span>
              </div>
              <p className="mb-2">This is a comment from User2.</p>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Reply to this comment..."
                  className="flex-grow p-2 bg-gray-700 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <button className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-r-md">
                  Reply
                </button>
              </div>
              {/* Replies */}
              <div className="ml-6 space-y-2 mt-2">
                <div className="bg-gray-700 p-2 rounded-lg">
                  <div className="mb-1 flex justify-between items-center">
                    <span className="font-semibold">User3</span>
                    <span className="text-sm text-gray-400">1 hour ago</span>
                  </div>
                  <p className="text-sm mb-1">This is a reply from User3.</p>
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="Reply to this reply..."
                      className="flex-grow p-2 bg-gray-600 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-r-md">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="mb-2 flex justify-between items-center">
                <span className="font-semibold">User4</span>
                <span className="text-sm text-gray-400">1 hour ago</span>
              </div>
              <p className="mb-2">This is another comment from User4.</p>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Reply to this comment..."
                  className="flex-grow p-2 bg-gray-700 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <button className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-r-md">
                  Reply
                </button>
              </div>
              {/* Replies */}
              <div className="ml-6 space-y-2 mt-2">
                <div className="bg-gray-700 p-2 rounded-lg">
                  <div className="mb-1 flex justify-between items-center">
                    <span className="font-semibold">User5</span>
                    <span className="text-sm text-gray-400">45 minutes ago</span>
                  </div>
                  <p className="text-sm mb-1">This is a reply from User5.</p>
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="Reply to this reply..."
                      className="flex-grow p-2 bg-gray-600 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-r-md">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Comments */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="mb-2 flex justify-between items-center">
                <span className="font-semibold">User6</span>
                <span className="text-sm text-gray-400">30 minutes ago</span>
              </div>
              <p className="mb-2">This is yet another comment from User6.</p>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Reply to this comment..."
                  className="flex-grow p-2 bg-gray-700 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <button className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-r-md">
                  Reply
                </button>
              </div>
            </div>
          </div>

          <section className='mt-3'>
        <div className=''>
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            // pageCount={pageCount}
            // onPageChange={changePage}
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
}

export default BlogDetails;
