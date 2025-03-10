import React, { useEffect, useState } from "react";
import Navbar from "./components/Nav";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import Reciter from "./pages/Reciter";
import axios from "axios";
import Profile from "./pages/Profile";
const App = () => {
    const [users, setUsers] = useState([]);
        const navigate = useNavigate();

    const [user, setUser] = useState({});
    const [reciters, setReciters] = useState([]);
    const [isLoged, setIsLoged] = useState(
        localStorage.getItem("uid") ? true : false
    );
    useEffect(() => {

        axios({
            method: "get",
            url: `${import.meta.env.VITE_SERVER}/users`,
        }).then((res) => {            
            setUsers(res.data);
        });
        if (localStorage.getItem("uid")) {
            axios({
                method: "get",
                url: `${import.meta.env.VITE_SERVER}/users/${localStorage.getItem(
                    "uid"
                )}`,
            }).then((res) => {
                setUser(res.data);
            });
        }
    }, [isLoged]);
    useEffect(()=>{
        axios({
            method: "get",
            url: `${import.meta.env.VITE_SERVER}/reciters`,
        }).then((res) => {            
            setReciters(
                res.data.sort((p1, p2) =>
                    p1.name > p2.name ? 1 : p1.name< p2.name? -1 : 0
                )
            );
        }).catch((error)=>{
            console.log(error+"wow");
        });
    },[])
;

    return (
        <div>
            <Navbar isLoged={isLoged} />
            <Routes>
                <Route path="/" element={<Home reciters={reciters} navigate={navigate} />} />
                <Route path="/*" element={<NotFound />} />
                <Route
                    path="/login"
                    element={<LogIn users={users} setIsLoged={setIsLoged} navigate={navigate} />}
                />
                <Route path="/signup" element={<SignUp users={users}  navigate={navigate}/>} />
                <Route
                    path="/profile"
                    element={<Profile user={user} users={users} />}
                />
                <Route
                    path="/reciter/:id"
                    element={<Reciter user={user} users={users} />}
                />
            </Routes>
        </div>
    );
};

export default App;
