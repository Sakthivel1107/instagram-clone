import { useNavigate } from "react-router-dom";
import useFetch from "./useFetch"
import { useEffect, useState } from "react";

function Storys(){
    const [storys,err] = useFetch('https://db-rdpb.onrender.com/Storys');
    const navigate = useNavigate();
    let tot = 0;
    if(storys.length>0)
        tot = storys.length;
    return(
        <div className="storys d-flex my-2">
            {
            storys.length>0 ?
             storys.map( story =>
            <div className="mx-1" key={story.id} onClick={()=>navigate(`/Story/${story.id}/${tot}`)}>
                <div className="gradientlayer">
                <img src={story.user.profile_picture} alt="dp" className="storydp rounded-circle" />
                </div>
                <p className="text-truncate" style={{width:"40px"}}>{story.user.username}</p>
            </div>
            ):
            <div>Loading</div>}
        </div>
    )
}
export default Storys