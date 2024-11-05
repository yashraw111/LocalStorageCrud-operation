import React, { useEffect, useState } from "react";
import { get, useForm } from "react-hook-form";

const PracticeLocalStorage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [users, SetUser] = useState([]);

  useEffect(() => {
    const getData = localStorage.getItem("userData");
    if (getData) {
      SetUser(JSON.parse(getData));
    }
  }, []);

  function handleRegister(data) {
    SetUser([...users, data]);
  }



function trash(id){
    if(confirm("do you want to delete?")){
        const filterData = users.filter((item)=>{
            return index !== id
        })
        SetUser(filterData)
        if(id == 0){
            localStorage.removeItem("userData")
        }
    }
}

  useEffect(() => {
    if (users.length > 0) {
      localStorage.setItem("userData", JSON.stringify(users));
    }
  }, [users]);

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
            <button className="btn btn-success my-4">Submit</button>

            {/* {
                EditIndex==null?(
                    <button className="btn btn-success my-4">Submit</button>
                ):(
                    
                    <button className="btn btn-warning my-4">Upadate</button>
                )
            } */}
          </div>
        </form>

        <table className="table table-striped table-hover table-primary">
            <thead className="table-dark">
                <tr>
                <td>S.no</td>
                <td>UserName</td>
                <td>Email</td>
                <td>mobile</td>
                <td>Action</td>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((item,index)=>{
                        return(
                            <tr>
                                <td>{index+1}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.mobile}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={()=>trash(id)}>Delete</button>
                                </td>

                            </tr>
                        )
                    })
                }
            </tbody>

        </table>
      </div>
    </>
  );
};

export default PracticeLocalStorage;
