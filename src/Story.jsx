import { useEffect, useState } from "react";
import { useParams,Link, useNavigate } from "react-router-dom";
function Story(){
    const {id,tot} = useParams();
    const [story,setStory] = useState(null);
    const [err,setErr] = useState(null);
    useEffect(()=>{
        fetch(`http://localhost:3000/Storys/${id}`)
        .then(value => value.json())
        .then(data => setStory(data))
        .catch(err => setErr(err))
    },[id]);
    const navigate = useNavigate();
    if(id>tot || id<=0){
        navigate('/');
    }
    return(
    <div>
        {story ?
            <div className="d-flex justify-content-center align-items-center">
                <Link to={`http://localhost:5173/Story/${Number(id)-1}/${tot}`}><i className="bi bi-arrow-left-circle-fill fs-2 me-2"></i></Link>
                <img src={story.image} className="vh-100 storyimg" alt="Story" />
                <Link to={`http://localhost:5173/Story/${Number(id)+1}/${tot}`}><i className="bi bi-arrow-right-circle-fill fs-2 ms-2"></i></Link>
            </div>  :
            <div>Loading</div>    
        }
    </div>
)
}
export default Story;