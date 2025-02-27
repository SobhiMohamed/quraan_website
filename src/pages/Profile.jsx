import React from "react";
import img from "../assets/1.jpg";
const Profile = () => {
    return (
        <div className="w-[100%] h-[100vh]">
            <div className="flex justify-between items-center w-[60%] m-auto border-2 rounded-3xl shadow-2xl mt-10 p-5">
                <div className="w-[48%] rounded-3xl lg:block hidden"><img src={img} alt="profile"  className="w-[100%] h-[100%] object-cover rounded-3xl"/></div>
                <div className="w-[100%] lg:w-[48%]  text-2xl items-center gap-12 flex justify-start flex-wrap">
                    <span className="w-[100%]">Your Name : Sobhi Mohamed</span>
                    <span className="w-[100%]">Your Email : sobhi@gmail.com</span>
                    <span className="w-[100%]">Your birthday : 2025-9-5</span>
                </div>
            </div>
        </div>
    );
};

export default Profile;
