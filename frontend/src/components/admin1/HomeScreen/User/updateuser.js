import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
// import MetaData from "../layout/MetaData";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PersonIcon from "@material-ui/icons/Person";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
// import SideBar from "./Sidebar";
import { UPDATE_USER_RESET } from "../../../../Redux/Constants/UserContants";
import {
  getUserDetail,
  updateUser,
  clearErrors,
} from "../../../../Redux/Actions/userActions";
import { Link, useHistory } from "react-router-dom";
import Loading from "../../../LoadingError/Loading";
import Sidebar from "../Sidebar";
import Header from "../Header";
import Message from "../../../LoadingError/Error";
const updateuser = ({ history, match }) => {
  const dispatch = useDispatch();

  const { loading, error, user } = useSelector((state) => state.userDetails);

  const {
    loading: updateLoading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.UserEdit);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const userId = match.params.id;

  useEffect(() => {
    if (user && user._id !== userId) {
      dispatch(getUserDetail(userId));
    } else {
      setName(user.name);
      setEmail(user.email);
      setRole(user.role);
    }
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    if (updateError) {
      alert(updateError);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert("User Updated Successfully");
      history.push("/adminusers");
      dispatch({ type: UPDATE_USER_RESET });
    }
  }, [dispatch, alert, error, history, isUpdated, updateError, user, userId]);

  const updateUserSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("role", role);

    dispatch(updateUser(userId, myForm));
  };

  return (
    <Fragment>
<Sidebar/>
      <main className="main-wrap">
<Header/>  

<br></br>
<br></br>
<br></br>
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form onSubmit={updateUserSubmitHandler}>
          <div className="content-header">
            
          <h2 className="content-title">Update Users</h2>

            
         
          </div>

          <div className="row mb-12">
            <div className="col-xl-12 col-lg-12">
              <div className="card mb-4 shadow-sm">
              <div className="card-body">
                  {updateError && (
                    <Message variant="alert-danger">{updateError}</Message>
                  )}
                  {loading ? (
                    <Loading />
                  ) : error ? (
                    <Message variant="alert-danger">{error}</Message>
                  ) : (
                    <>
                      
                      
                      
                      <div>
                <PersonIcon />
                <input
                  type="text"
                  placeholder="Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
                      <div>
                <MailOutlineIcon />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
                     
                      <div>
                <VerifiedUserIcon />
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="">Choose Role</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div>
              <br></br>
              <div>
              <button type="submit" className="btn1 btn-primary">
                Update
              </button>
            </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
      </main>
    </Fragment>
  );
};

export default updateuser;
