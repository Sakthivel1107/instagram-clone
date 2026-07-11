import { useNavigate } from "react-router-dom"

function Sidebar(){
    const navigate = useNavigate();
    return(
        <div className="m-3 mt-0 side-bar">
            <div className="position-fixed d-flex flex-column gap-2">
                <div className="letter mt-0 Intext">Instagram</div>
                <div className="letter bi-house-door"> Home</div>
                <div className="letter bi-search"> Search</div>
                <div className="letter bi-compass"> Explore</div>
                <div className="letter bi-play-btn"> Reels</div>
                <div className="letter bi-chat-dots"> Messages</div>
                <div className="letter bi-heart"> Notifications</div>
                <div className="letter bi-plus-square"> Create</div>
                <div className="letter bi-person-circle" onClick={() =>navigate('/Profile')}> Profile</div>
            </div>
            <div className="position-fixed bottom-0 d-flex flex-column gap-2 mb-2">
                <div className="letter bi-threads"> Threads</div>
                <div className="letter bi-list"> More</div>
            </div>
        </div>
    )
}
export default Sidebar