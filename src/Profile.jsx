import axios from "axios";
import { useState,useEffect } from "react";
function Profile(){
    const [profile,setProfile] = useState(null);
    const [Followings,setFollowings] = useState([]);
    const [UnFollowed,setUnFollowed] = useState(0);
    useEffect(() => {
        axios.get('https://db-rdpb.onrender.com/profile')
        .then(data => setProfile(data.data))

        axios.get('https://db-rdpb.onrender.com/Followings')
        .then(data => setFollowings(data.data))
    },[UnFollowed]);

    function handleOnChange(e){
        setProfile(prev => ({...prev,
            [e.target.name] : [e.target.value]
        }))
    }
    const handleUpdate = async () => {
        axios.put('https://db-rdpb.onrender.com/profile',profile)
        .then(alert('Updated'))
        .catch(err => console.log(err))
    }
    const handleDelete = async (id) => {
        axios.delete(`https://db-rdpb.onrender.com/Followings/${id}`) 
        .then(alert('Unfollowed'))
        .then(setUnFollowed(!UnFollowed))
        .catch(err => console.log(err))
    }
    return(
        <div>
            {
                profile ? 
                <div className='m-3'>
                    <img src={profile.profile_picture} alt="dp" className='profilepic rounded-circle'/>
                    <h5>{profile.username}</h5>
                    <input type="text" value={profile.username} name='username' className='form-control my-3'onChange={handleOnChange}/>
                    <input type="text" value={profile.profile_picture} name='profile_picture' className='form-control' onChange={handleOnChange}/>
                    <button className="btn btn-primary mt-3" onClick={handleUpdate}>Update</button>
                </div>
                :<div>Loading Profile</div>
            }            
            {
                Followings.length > 0 ? 
                <div>
                    {
                        Followings.map((Following) =>
                        <div className="mx-4 my-4 d-flex" key={Following}> 
                            <img src={Following.profile_picture} alt="dp" height={40} width={40} className="rounded-circle flex-shrink-0" />
                            <span className="pt-2 ms-4">{Following.username}</span>
                            <button className="btn btn-primary ms-auto" onClick={()=>handleDelete(Following.id)}>Unfollow</button>
                        </div>
                        )
                    }
                </div>:
                <div>Loading Followers</div>
            }
        </div>
    )
}
export default Profile