
import { Button } from 'antd';
import {
  BrowserRouter as Router,
  Route,
  useHistory
} from "react-router-dom";
import CreateTopic from './topic/create';
import {GetTopic} from './topic/topic';
import EditableContext from './option/create'
import CreateOption from './option/create';


function App() {
  const history = useHistory();

  const handleClick = () =>{
    history.push("/create-topic")
  }


  return (
    <div>

      <Route exact path="/poll" component={CreateTopic}/>
      <Route exact path="/create-option" component={CreateOption}/>
      <Route exact path="/create-topic" component={CreateTopic}/>
      <Route exact path='/'>
        <Button className='create-topic' type="primary" onClick ={()=>handleClick()}>create topic</Button>
      </Route>
    </div>
  );

}

export default App;
