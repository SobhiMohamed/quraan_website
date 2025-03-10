import { Button, ButtonGroup } from "@material-tailwind/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Reciter = () => {
    const reciter = useParams().id;
    const [reciterData, setReciterData] = useState({});
    const [surahs, setSurahs] = useState([]);
    const [surahNumber,setSurahNumber]=useState(0);
    const getSurahs = () => {
        axios({
            method: "GET",
            url: "https://api.alquran.cloud/v1/surah",
        }).then((info) => {
            if (reciterData.surah_list !== undefined) {
                let surahs = info.data.data.filter((surah) => {
                    return reciterData.surah_list
                        .split(",")
                        .includes(surah.number.toString());
                });
                surahs=surahs.map((surah)=>{
                    return {name:surah.name,number:surah.number.toString().padStart(3,'0')};
                    
                })
                
                setSurahs(surahs);
            }
        });
    };
    const dataForReciter = async () => {
        await axios({
            method: "GET",
            url: `${import.meta.env.VITE_SERVER}/reciters/${reciter}`,
        }).then((info) => {

            setReciterData(info.data.moshaf[0]);
        });
    };
    useEffect(() => {
        dataForReciter();
    }, [reciter]);
    useEffect(() => {
        getSurahs();
    }, [reciterData]);
    return (
        <div>

            <div className="flex-row-reverse flex justify-center gap-3 items-center flex-wrap w-[75%] overflow-y-scroll h-[75vh] ">
                {reciterData && reciterData.server ? (
                    surahs.map((surah, i) => (
                        <Button
                            key={i}
                            onClick={()=>setSurahNumber(surah.number)}
                            className="flex justify-center flex-wrap  w-[100%] md:w-[48%] lg:w-[32%] text-[24px] bg-[#012f61]"
                        >
                            {surah.name}
                        </Button>
                    ))
                ) : (
                    <div>No audio available.</div>
                )}
            </div>
            <div className="w-[100%]">
                <audio controls src={`${reciterData.server}${surahNumber}.mp3`} className="w-[100%] text-[#d00]"></audio>
            </div>
        </div>
    );
};

export default Reciter;
