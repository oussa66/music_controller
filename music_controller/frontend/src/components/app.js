import React , {Component} from "react";
import {render} from "react-dom";
import HomePage from "./HomePage";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from "react-router-dom";
export default class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return <Router>
            <Switch>
                <Route path="/join" component={RoomJoinPage}/>
                <Route exact path="/create" component={CreateRoomPage}/>
                <Route exact path="/" component={HomePage}/>
            </Switch>
        </Router>
    }
}
const appDiv=document.getElementById("app");
render(<App/>,appDiv);