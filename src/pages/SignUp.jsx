import { Button, Input, Option, Select } from "@material-tailwind/react";
import React, { useState, } from "react";
import img from "../assets/5.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignUp = ({users}) => {
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
    const validate = () => {
        const check = {
            username: /^[a-zA-Z0-9]{3,30}$/,
            password: /^[a-zA-Z0-9]{6,30}$/,
            email: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/,
        };
        if (!check.username.test(user.username)) {
            setError("username");
        } else if (!check.password.test(user.password)) {
            setError("password");
        } else if (user.password != user.confirm_password) {
            setError("confirm_password");
        } else if (!check.email.test(user.email)) {
            setError("email");
        } else if (!user.gender) {
            setError("gender");
        } else {
            setError("");
            users.map(({email})=>{
                if(email===user.email){
                    setError("email");
                }
            })


        }
    };
    const test = (t) => {
        t.preventDefault();
        validate();
        if (error==="") {
            delete user.confirm_password;
            axios({
                method: "post",
                url: "http://localhost:3000/users",
                data: user,
            }).then((res) => {
                navigate("/login");
            });
        }
        
    };
    return (
        <div className="w-[100%] h-[100vh] flex justify-center items-center">
            <form
                method="post"
                className="flex flex-wrap gap-2  p-5 justify-center  w-[60%] border-[2px] border-[#012f61] rounded-2xl shadow-2xl"
                onSubmit={test}
            >
                <div className="lg:w-[48%] flex gap-10 flex-wrap">
                    <div className="w-[100%] ">
                        {" "}
                        <Input
                            label="UserName"
                            error={error === "username" ? true : false}
                            onChange={(e) =>
                                setUser({ ...user, username: e.target.value })
                            }
                        ></Input>
                    </div>
                    <div className="w-[100%]">
                        {" "}
                        <Input
                            label="Password"
                            error={error === "password" ? true : false}
                            onChange={(e) =>
                                setUser({ ...user, password: e.target.value })
                            }
                        />
                    </div>
                    <div className="w-[100%]">
                        {" "}
                        <Input
                            label="Confirm Password"
                            error={error === "confirm_password" ? true : false}
                            onChange={(e) =>
                                setUser({
                                    ...user,
                                    confirm_password: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="w-[100%]">
                        {" "}
                        <Input
                            label="Email"
                            error={error === "email" ? true : false}
                            onChange={(e) =>
                                setUser({ ...user, email: e.target.value })
                            }
                        />
                    </div>
                    <div className="w-[48%]">
                        {" "}
                        <Select
                            name="gender"
                            label="Gender"
                            error={error === "gender" ? true : false}
                            onChange={(e) => setUser({ ...user, gender: e })}
                        >
                            <Option value="male">Male</Option>
                            <Option value="female">Female</Option>
                        </Select>
                    </div>
                    <div className="w-[40%]">
                        {" "}
                        <input
                            type="date"
                            className="border-[2px] rounded-3xl p-2"
                            onChange={(e) =>
                                setUser({ ...user, birthday: e.target.value })
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
                <Button type="submit" className="w-[50%] cursor-pointer bg-[#012f61]">
                    Sign Up
                </Button>
            </form>
        </div>
    );
};

export default SignUp;
