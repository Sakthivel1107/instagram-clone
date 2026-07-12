import Storys from "./Storys"
import Posts from "./Posts"
function Feed(){
    return(
        <div className="d-flex flex-column">
            <Storys/>
            <Posts/>
        </div>
    )
}
export default Feed