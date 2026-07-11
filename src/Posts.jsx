import { useEffect, useState } from "react";

function Posts(){
    const [posts,setPosts] = useState([])
    useEffect( ()=>{
        fetch('https://db-rdpb.onrender.com/posts')
        .then((data)=>data.json())
        .then((dataitems)=> setPosts(dataitems))
        .catch((err)=>console.log(err))
    },[])

    return(
        <div className="d-flex justify-content-center" style={{overflowY:"auto"}}>
            {posts.length>0?(
                <div>
                    {
                        posts.map((post)=>(
                            <div className="my-3 d-flex flex-column gap-2" key={post.id}>
                               <div className="d-flex align-items-center gap-2">
                                <img className="dp rounded-circle" src={post.user.profile_picture} alt="dp" />
                                <h6 className="uname">{post.user.username}</h6>
                               </div>
                               <div>
                                <img className="image" src={post.image} alt="" />
                               </div>
                               <div>
                                <i className="bi bi-heart mx-1"></i>
                                <i className="bi bi-chat mx-1"></i>
                                <i className="bi bi-send mx-1"></i>
                               </div>
                               <div>
                                <b>{post.likes} Likes</b>
                                <p>{post.caption}</p>
                               </div>
                            </div>
                        ))
                    }
                </div>
            ):
            (
                <div>Loading</div>
            )}
        </div>
    )
}
export default Posts