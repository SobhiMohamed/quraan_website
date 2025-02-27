import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input, Option, Select } from "@material-tailwind/react";
import img from "../assets/1.jpg";

const LogIn = ({users,setIsLoged}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: "",
        password: "",
        confirm_password: "",
        email: "",
        birthday: "",
        gender: "",
        role: "user",
    });
    const [error, setError] = useState(null);

    const test = (t) => {
        t.preventDefault();
        users.map(({ email,password }) => {
          if (email === user.email&&password===user.password) {
              setError("notFound");
          }
      });
        if(error===null){
          setIsLoged(true);
          navigate("/");
        }
    };
    return (
        <div className="w-[100%] h-[100vh] flex justify-center items-center">
            <form
                method="post"
                className="flex flex-wrap  p-5 justify-center items-center w-[60%] border-[2px] border-[#012f61] rounded-2xl shadow-2xl"
                onSubmit={test}
            >
                <div className="lg:w-[48%] flex gap-10 flex-wrap">
                    <div className="w-[100%]">
                        <Input
                            label="Email"
                            error={error === "email" ? true : false}
                            onChange={(e) =>
                                setUser({ ...user, email: e.target.value })
                            }
                        />
                    </div>
                    <div className="w-[100%]">
                        <Input
                            label="Password"
                            error={error === "password" ? true : false}
                            onChange={(e) =>
                                setUser({ ...user, password: e.target.value })
                            }
                        />
                    </div>
                </div>
                <div className="w-[48%] lg:block hidden">
                    <img
                        src={img}
                        alt="sign up"
                        className="w-[100%] ml-4 h-[100%] object-cover rounded-3xl"
                    />
                </div>
                <Button
                    type="submit"
                    className="w-[50%] cursor-pointer bg-[#012f61]"
                >
                    Sign Up
                </Button>
            </form>
        </div>
    );
};

export default LogIn;
