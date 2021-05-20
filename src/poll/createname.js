import React,{useState} from 'react';
import axios from 'axios';
import {
  useHistory
} from "react-router-dom";
import { Input } from 'antd';


const CreateUsername = (props)=>{
    const history = useHistory();

    const [username, setUsername] = useState('')

    const handleChange = event => {
        setUsername(event.target.value)
      }
    
     const handleSubmit = async event => {
        event.preventDefault();
        const topicId = props.location.state
        const user = {
            topicId: topicId, 
            username: username
        };
        if(user.username){
            try {
                const response = await axios.post("http://localhost:3020/poll/username", user);
                const statusCode = (response.data.status);
                console.log(statusCode);
                if(statusCode === 201){
                  history.push({pathname: "/poll", state: topicId});
                }
                if(statusCode === 400){
                  console.log(response.data.response);
                  // console.log(response);

                    // history.push("/create-topic")
                }
            } catch (err) {
            console.log(err);
            }
        }
        else{
            alert('input')
        }
    
        
      }

    return(
        <div className='topic'>
          <b>Step 3/3</b>
          <h3>What your name?</h3>
          <form onSubmit={handleSubmit}>
            {/* <label>
              Person Name:
              <input type="text" name="content" onChange={handleChange} />
            </label> */}
            <Input placeholder="Enter your name" type="text" name="username" onChange={handleChange}/>
            <button className = 'btn-topic' type="submit" >Continue</button>
          </form>
      </div>
    )
}

export default CreateUsername