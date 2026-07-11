import axios from "axios";
import useFetch from "./useFetch";
function Suggestions(){
    const [profile,error] = useFetch('https://db-rdpb.onrender.com/profile');
    const [suggestions,err] = useFetch('https://db-rdpb.onrender.com/suggestions');
    const handleInsert = async (id,username,profile_picture) => {
        axios.post('https://db-rdpb.onrender.com/Followings',{
            "id":id,
            "username":username,
            "profile_picture":profile_picture
        })
        .then(alert('Followed'))
        .catch(err => console.log(err))     
        }
    return(
        <div className="mx-3 mt-2 mb-1 w-100">
            {profile ?
            <div className="d-flex align-items-center">
                <img src={profile.profile_picture} alt="dp" className="dp rounded-circle flex-shrink-0" />
                <h6 className = "puname ms-1">{profile.username}</h6>
                <small className="switch text-primary ms-auto">Switch</small>
            </div>:
            <div>Loading</div>
            }
            <div className="d-flex w-100 my-2">
                <p className="sfy">Suggested for you</p>
                <b className="sall ms-auto">See all</b>
            </div>
            {
                suggestions.length > 0 ? 

                <div className="d-flex flex-column gap-2">
                    {suggestions.map( suggestion =>
                    <div className="d-flex align-items-center" key={suggestion.id} style={{width:"100%"}}>
                    <img src={suggestion.profile_picture} alt="dp" className="dp rounded-circle flex-shrink-0" />
                    <h6 className = "puname ms-1">{suggestion.username}</h6>
                    <small className="switch text-primary mb-2 ms-auto" onClick={()=>handleInsert(suggestion.id,suggestion.username,suggestion.profile_picture)}>Follow</small>
                    </div>
                    )}
                </div>
                :
                <div>Loading</div>
            }
        </div>
    )
}
export default Suggestions;