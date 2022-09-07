import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers , clearErrors, deleteUser } from "../../../../Redux/Actions/userActions";
import Loading from "../../../LoadingError/Loading";
import Message from "../../../LoadingError/Error";
import "../Admin1.css"
import userpic from"../favicon.png";
import { DELETE_USER_RESET } from "../../../../Redux/Constants/UserContants";
import EditIcon from "@material-ui/icons/Edit";


const UserComponent = () => {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;
  const {
    error: deleteError,
    isDeleted,
    message,
  } = useSelector((state) => state.UserDelete);
  const history = useHistory();

  const deleteUserHandler = (id) => {
    dispatch(deleteUser(id));
  };
  useEffect(() => {
   
  
      if (error) {
        alert.error(error);
        dispatch(clearErrors());
      }
  
      if (deleteError) {
        alert.error(deleteError);
        dispatch(clearErrors());
      }
  
      if (isDeleted) {
        alert(message);
        history.push("/adminusers");
        dispatch({ type: DELETE_USER_RESET });
      }

    dispatch(getAllUsers());
  }, [dispatch, alert, error, deleteError, history, isDeleted, message]);
  return (
    <>
    <br></br>
    <br></br>
    <br></br>
    
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Customers</h2>
       
      </div>

      <div className="card mb-4">
      

        {/* Card */}
        <div className="card-body">
          {loading ? (
            <Loading />
          ) : error ? (
            <Message variant="alert-danger">{error}</Message>
          ) : (
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
                
                
              {users.map((user) => (
                <div className="col" key={user._id}>
                 <div
                   onClick={() =>
                    deleteUserHandler((user._id))}
                    // (params.getValue(params.id, "id"))
                  className="remove-button d-flex justify-content-center align-items-center"
                >

                  <i className="fas fa-times"> </i>
                </div>
                  <div className="card card-user shadow-sm">
                    <div className="card-header">
                                        <img
                        className="img-md img-avatar"
                        src={userpic}
                        alt="User pic"
                      />
                    </div>
                    <div className="card-body">
                         <Link to={`/UserUpdate/${(user._id)}`}  className=" mt-5 edit-button d-flex justify-content-center align-items-center"
>
              <EditIcon />
            </Link> 
                      <h5 className="card-title mt-5">{user.name}</h5>
                   
                      <div className="card-text text-muted">
                        {user.role === "admin" ? (
                          <p className="m-0">Admin</p>
                        ) : (
                          <p className="m-0">Costomer</p>
                        )}

                        <p>
                          <a href={`mailto:${user.email}`}>{user.email}</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* nav */}
          <nav className="float-end mt-4" aria-label="Page navigation">
            <ul className="pagination">
              <li className="page-item disabled">
                <Link className="page-link" to="#">
                  Previous
                </Link>
              </li>
              <li className="page-item active">
                <Link className="page-link" to="#">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  Next
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
    </>
  );
};

export default UserComponent;
