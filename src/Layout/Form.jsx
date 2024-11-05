import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const [users, SetUser] = useState([]);
  const [EditIndex,SetIndex] = useState(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  useEffect(() => {
    const userData = localStorage.getItem("userData");
    console.log(userData);

    if (userData) {
      SetUser(JSON.parse(userData));
    }
  }, []);

  function handleRegister(data) {
    SetUser([...users, data]);
    // alert("data entered Successfully");
    if(EditIndex != null){
        const UpdateUser = [...users]
        UpdateUser[EditIndex]=data
        SetUser(UpdateUser)
        SetIndex(null)
        reset()
    }
    reset();
  }
  console.log(users);

  useEffect(() => {
    if (users.length > 0) {
      localStorage.setItem("userData", JSON.stringify(users));
    }
  }, [users]);

  function trash(id) {
    if (confirm("Do you want to delete this user")) {
      const filterdata = users.filter((user, index) => {
        return index !== id;
      });
      SetUser(filterdata);
      if( id==0){
        localStorage.removeItem("userData")
      }
    }
    console.log("ffff", filterdata);
  }


  function Update(id){
    SetIndex(id)
    reset(users[id])

  }

  return (
    <>
      <div className="container">
        <form
          action=""
          method="post"
          onSubmit={handleSubmit(handleRegister)}
          className="col-6 mx-auto p-5 shadow my-5"
        >
          <h3>Form</h3>

          <div className="mt-4">
            <input
              type="text"
              placeholder="Enter Username"
              className="form-control"
              {...register("username", {
                required: {
                  value: true,
                  message: "Enter username",
                },
                // minLength: {
                //   value: 3,
                //   message: "Enter min 3 character",
                // },
                // maxLength: {
                //   value: 15,
                //   message: "Enter max 10 character",
                // },
                // pattern: {
                //   value: /[A-Za-z]/,
                //   message: "Enter only characters",
                // },
              })}
            />
            <p className="text-danger">{errors?.username?.message}</p>
          </div>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Enter Email"
              className="form-control"
              {...register("email", {
                required: {
                  value: true,
                  message: "Enter email",
                },
                // minLength: {
                //   value: 10,
                //   message: "Enter min 10 character",
                // },
                // maxLength: {
                //   value: 25,
                //   message: "Enter max 25 character",
                // },
                // pattern: {
                //   value: /[A-Za-z]/,
                //   message: "Enter only characters",
                // },
              })}
            />
            <p className="text-danger">{errors?.email?.message}</p>
          </div>
          <div className="mt-4">
            <input
              type="number"
              placeholder="Enter Mobile"
              className="form-control"
              {...register("mobile", {
                required: {
                  value: true,
                  message: "Enter mobile",
                },
                // minLength: {
                //   value: 10,
                //   message: "Enter min 10 character",
                // },
                // maxLength: {
                //   value: 10,
                //   message: "Enter max 10 character",
                // },
                // pattern: {
                //   value: /[0-9]/,
                // },
              })}
            />
            <p className="text-danger">{errors?.mobile?.message}</p>
          </div>

          <div className="mt-4">
            {
                EditIndex==null?(
                    <button className="btn btn-success my-4">Submit</button>
                ):(
                    
                    <button className="btn btn-warning my-4">Upadate</button>
                )
            }

          </div>
        </form>
      </div>
      <div className="container">
        <table className="table table-striped table-hover table-primary">
          <thead className="table-dark">
            <tr>
              <td>S.no</td>
              <td>Username</td>
              <td>Email</td>
              <td>Mobile</td>
              <td>Action</td>
            </tr>
          </thead>

          <tbody>
            {users.map((item, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.mobile}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => trash(index)}
                    >
                      delete
                    </button>
                    <button
                      className="btn btn-warning ms-3"
                      onClick={()=>Update(index)}
                    >
                      update
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Form;
