import React from "react";
import img from "../assets/notFound-Photoroom.png";
const NotFound = () => {
    return (
        <div className="flex justify-center items-center h-[90vh]">
            <div className=" w-[50vw]">
                <img src={img} alt="not found" />
            </div>
        </div>
    );
};

export default NotFound;
