import React, { Fragment } from 'react';
import { FaComments } from "react-icons/fa";
import Modal from 'react-bootstrap/Modal';


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
      <h2 class="mb-2">Problem :</h2>
        <i>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </i><br/>
        <br/>
        <form>
          <div class="form-group">
            {/* <label for="message-text" class="col-form-label">Reply To Problem</label> */}
            <textarea class="form-control" id="message-text" placeholder='Reply'></textarea>
            <button class="form-control btn btn-info mt-2">Reply</button>
          </div>
        </form>

        <h2 class="mt-4 mb-2">User Feedback :</h2>

        <div className="bg-gray-800 p-4 rounded-lg">
            <p class="text-white">Reply</p>
        </div>

      </Modal.Body>
    </Modal>
  );
}



const Blog = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Fragment>
        <div className="bg-gray-900 text-white mt-5">
      <div className="container mx-auto p-4">
          <h1 className="text-4xl text-center mb-6"></h1>
          <div className="flex justify-end mb-6">
              <input type="text" placeholder="Search" className="w-48 p-2 text-black rounded-l-md"/>
              <button className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-r-md">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm6-8a6 6 0 11-12 0 6 6 0 0112 0z" clip-rule="evenodd"></path>
                      <path fill-rule="evenodd" d="M12.293 12.293a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
              </button>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg mb-2">
              <h2 className="text-2xl mb-2">Problem Heading</h2>
              <p className='mb-3'><i>Problem Description</i></p>
              <p className="text-3xl cursor-pointer"  onClick={() => setModalShow(true)}><FaComments /></p>

          </div>
          {/* <div className="bg-gray-800 p-4 rounded-lg">
              <p>Comment</p>
          </div> */}
      </div>
    </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

    </Fragment>
  )
}

export default Blog