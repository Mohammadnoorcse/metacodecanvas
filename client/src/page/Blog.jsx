import React, { Fragment, useEffect, useState } from 'react';
import { FaComments } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { BlogSearchRequest } from '../ApiRequest/ApiRequest';
import ReactPaginate from 'react-paginate';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const resultsPerPage = 10;
  const pagesVisited = pageNumber * resultsPerPage;

  useEffect(() => {
    fetchSearchResults(searchTerm);
  }, [searchTerm]);

  const fetchSearchResults = async (term) => {
    try {
      const data = await BlogSearchRequest(term);
      setSearchResults(data);
      setPageNumber(0);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    fetchSearchResults(searchTerm);
  };

  const displayProduct = searchResults.slice(pagesVisited, pagesVisited + resultsPerPage);

  const pageCount = Math.ceil(searchResults.length / resultsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Fragment>
      <div className="bg-gray-900 text-white mt-5">
        <div className="container mx-auto p-4">
          <div className="flex justify-end mb-6">
            <input
              onChange={handleInputChange}
              value={searchTerm}
              type="text"
              placeholder="Search by title"
              className="w-48 p-2 text-black rounded-l-md"
            />
            <button
              onClick={handleSearchClick}
              className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-r-md"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm6-8a6 6 0 11-12 0 6 6 0 0112 0z"
                  clipRule="evenodd"
                ></path>
                <path
                  fillRule="evenodd"
                  d="M12.293 12.293a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          {displayProduct.map((value, key) => (
            <Link to={`/blogDetails/${value._id}`} key={key}>
              <div className="bg-gray-800 p-4 rounded-lg mb-2">
                <h2 className="text-2xl mb-2">{value.Title}</h2> {/* Ensure the field name matches your data */}
                <p className='mb-3'><i>{value.Description}</i></p> {/* Ensure the field name matches your data */}
                <p className="text-3xl cursor-pointer"><FaComments /></p>
              </div>
            </Link>
          ))}

<div className='mt-3'>
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
        </div>
      </div>
    </Fragment>
  );
}

export default Blog;
