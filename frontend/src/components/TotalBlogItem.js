import React , {useRef} from "react";
import BlogContext from "../context/BlogContext";

// yaha props me blog.js se aaya hua data use ho raha hai
const TotalItem = (props) => {
  
  const { blog } = props;
  const ref = useRef(null)
  const refClose = useRef(null)

  return (
  
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">
              {blog.title}</h5>
          </div>
          <p className="card-text">{blog.content}</p>
          <i class="fa-regular fa-comment"></i>
          <button class="fas fa-thumbs-up" ></button>
          
        </div>
      </div>

     {/* <!-- Button trigger modal --> */}
     <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      {/* <!-- Modal --> */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit your Blog</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">title</label>
                  <input type="text" className="form-control" id="editedtitle" name="editedtitle" aria-describedby="emailHelp"
                    value={blog.editedtitle} onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="content" className="form-label">
                    Content
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="editedcontent"
                    name="editedcontent"
                    value={blog.editedcontent}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="editedtag"
                    name="editedtag"
                    value={blog.editedtag}
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button disabled={blog.editedtitle.length < 3 || blog.editedcontent.length < 5} onClick={handleClick} type="button" className="btn btn-primary">Update Blog</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalItem;
