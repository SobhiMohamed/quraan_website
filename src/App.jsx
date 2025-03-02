import React, { useEffect, useState } from "react";
import Navbar from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import axios from "axios";
import Profile from "./pages/Profile";
const App = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});
    const [isLoged, setIsLoged] = useState(localStorage.getItem("uid") ? true : false);
    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:3000/users",
        }).then((res) => {
            setUsers(res.data);
        });
        if(localStorage.getItem("uid")){
            axios({
                method: "get",
                url: `http://localhost:3000/users/${localStorage.getItem("uid")}`,
            }).then((res) => {
                setUser(res.data);
            });  
        }
    }, [isLoged]);


    return (
        <div>
            <Navbar isLoged={isLoged} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/*" element={<NotFound />} />
                <Route path="/login" element={<LogIn users={users}  setIsLoged={setIsLoged}/>} />
                <Route path="/signup" element={<SignUp users={users} />} />
                <Route path="/profile" element={<Profile user={user} users={users} />} />
            </Routes>
        </div>
    );
};

export default App;
