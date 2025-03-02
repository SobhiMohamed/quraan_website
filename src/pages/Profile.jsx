import React, { useEffect, useState } from "react";
import img from "../assets/1.jpg";
import { Button, Input, Option, Select } from "@material-tailwind/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
const Profile = ({ user,users }) => {
    const [newUser, setNewUser] = useState({});
    const [test, setTest] = useState("password");
    const [error, setError] = useState("");
    useEffect(() => {
        setNewUser({...user});
    }, [user]);
    const handleData = () => {
        const check={username:/^[a-zA-Z0-9 \w]{3,30}$/
        ,email:/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/
        ,password:/^[a-zA-Z0-9]{3,30}$/
        }
        if (!check.username.test(newUser.username)) {
            setError("username");
        } else if (!check.password.test(newUser.password)) {
            setError("password");
        } else if (!check.email.test(newUser.email)) {
            
            setError("email");
        } else {
            setError("notFound");
            
            users.map(({email})=>{
                if(email===newUser.email&&email!=user.email){
                    setError("email");                    
                }
            })
        }
    }
    const updateData = () => {
        handleData();
        
        if (error === "notFound") {            
            axios({
                method: "put",
                url: `http://localhost:3000/users/${user.id}`,
                data: newUser,
            });
        }
    }
    return (
        <div className="w-[100%] h-[100vh]">
            <div className="flex justify-between items-center w-[60%] m-auto border-2 rounded-3xl shadow-2xl mt-10 p-5">
                <div className="w-[48%] rounded-3xl lg:block hidden">
                    <img
                        src={img}
                        alt="profile"
                        className="w-[100%] h-[100%] object-cover rounded-3xl"
                    />
                </div>
                <div className="w-[100%] lg:w-[48%] flex flex-wrap gap-4 ">
                    <div className="w-[100%]">
                        <Input
                        error={error === "username" ? true : false}
                            value={newUser.username ? newUser.username : ""}
                            label="Your Name :"
                            onChange={(e) =>
                                setNewUser({
                                    ...newUser,
                                    username: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="w-[100%]">
                        <Input
                        error={error === "email" ? true : false}
                            value={newUser.email ? newUser.email : ""}
                            label="Email :"
                            onChange={(e) =>
                             {
                                setNewUser({
                                    ...newUser,
                                    email: e.target.value,
                                })}
                            }
                        />
                    </div>
                    <div className="relative w-[100%]">
                        <button
                            className=" absolute z-1 right-2 top-3 cursor-pointer "
                            onClick={() => {
                                if (test === "password") {
                                    setTest("text");
                                } else {
                                    setTest("password");
                                }
                            }}
                        >
                            {test === "password" ? <FaEyeSlash /> : <FaEye />}
                        </button>
                        <Input
                            error={error === "password" ? true : false}
                            value={newUser.password ? newUser.password : ""}
                            type={test}
                            label="Password :"
                            onChange={(e) => {
                                setNewUser({
                                    ...newUser,
                                    password: e.target.value,
                                });
                            }}
                            
                        />
                    </div>
                    <div className="w-[48%]">
                        <input
                            type="date"
                            className="border-2 rounded-2xl p-2 "
                            value={newUser.birthday ? newUser.birthday : ""}
                            onChange={(e) =>
                                setNewUser({
                                    ...newUser,
                                    birthday: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="w-[48%]">
                        <Select
                            value={newUser.gender ? user.gender : ""}
                            label="Gender :"
                            
                            onChange={(e) =>
                                setNewUser({ ...newUser, gender: e })
                            }
                        >
                            <Option value="male">Male</Option>
                            <Option value="female">Female</Option>
                        </Select>
                    </div>
                    <div className="w-[100%]">
                        <Button className="w-[100%] bg-[#045b9e]" onClick={()=>{updateData()}}>Save</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
