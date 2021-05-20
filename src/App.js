
import { Button } from 'antd';
import {
  Route,
  useHistory
} from "react-router-dom";
import CreateTopic from './topic/create';
import CreateOption from './option/create';
import CreateUsername from './poll/createname';
import CreatePoll from './poll/create'
import Test from './poll/test';

function App() {
  const history = useHistory();

  const createTopic = () =>{
    history.push("/create-topic")
  }

  // const vote = () =>{
  //   history.push({pathname: "/poll", state: topicId})
  // }


  return (
    <div className='home-page'>
      <h3>Welcome to Poll</h3>
      <div className='btn-home-page'>
      <Route exact path="/test" component={Test}/>
        <Route exact path="/poll" component={CreatePoll}/>
        <Route exact path="/create-name" component={CreateUsername}/>
        <Route exact path="/create-option" component={CreateOption}/>
        <Route exact path="/create-topic" component={CreateTopic}/>
        <Route exact path='/' >
          <Button className='create-topic' type="primary" onClick ={()=>createTopic()}>Create topic</Button>
          {/* <Button type="primary"  onClick ={()=>vote()}>Get Vote</Button> */}
        </Route>
      </div>
    </div>
  );

}

export default App;
