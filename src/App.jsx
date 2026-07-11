import Sidebar from "./Sidebar"
import Feed from "./Feed"
import Suggestions from "./Suggestions"
function App(){
    return(
        <div className="d-flex mt-2 vh-100">
            <div className="w-20"><Sidebar/></div>
            <div className="w-50"><Feed/></div>
            <div className="ms-5 w-30"><Suggestions/></div>
        </div>
        //npx json-server --watch data/new.json --port 3000 --static ./data
    )
}
export default App

  