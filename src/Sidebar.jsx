import { useNavigate } from "react-router-dom"

function Sidebar(){
    const navigate = useNavigate();
    return(
        <div className="m-3 mt-0 side-bar">
            <div className="position-fixed d-flex flex-column gap-2">
                <div className="letter mt-0 Intext">Instagram</div>
                <div className="letter bi-house-door hov"> Home</div>
                <div className="letter bi-search hov"> Search</div>
                <div className="letter bi-compass hov"> Explore</div>
                <div className="letter bi-play-btn hov"> Reels</div>
                <div className="letter bi-chat-dots hov"> Messages</div>
                <div className="letter bi-heart hov"> Notifications</div>
                <div className="letter bi-plus-square hov"> Create</div>
                <div className="letter bi-person-circle hov" onClick={() =>navigate('/Profile')}> Profile</div>
            </div>
            <div className="position-fixed bottom-0 d-flex flex-column gap-2 mb-2">
                <div className="letter bi-threads hov"> Threads</div>
                <div className="letter bi-list hov"> More</div>
            </div>
        </div>
    )
}
export default Sidebar