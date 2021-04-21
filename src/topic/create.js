import React,{useState} from 'react';
import axios from 'axios';
import {
  useHistory
} from "react-router-dom";
import { Input } from 'antd';

const { Search } = Input;

const CreateTopic = ()=>{
    const history = useHistory();

    const [content, setContent] = useState('')

    // const handleCreateOption = () =>{
    //     history.push("/create-option")
    // }

    const handleChange = event => {
        setContent(event.target.value)
      }
    
     const handleSubmit = async event => {
        event.preventDefault();
    
        const user = {
            content: content
        };
        console.log(user);
        if(user.content){
            try {
                const response = await axios.post("http://localhost:3020/topic", user);
                if(response){
                  const id = (response.data[0].id);
                  (history.push({pathname: "/create-option", state: id}));
                }
                else{
                    history.push("/create-topic")
                }
            } catch (err) {
            console.log(err);
            }
        }
        else{
            alert('input')
        }
    
        
      }

      const onSearch = value => console.log(value);
    return(
        <div className='topic'>
          <b>Step 1/3</b>
          <h3>For which occasion ?</h3>
          <form onSubmit={handleSubmit}>
            {/* <label>
              Person Name:
              <input type="text" name="content" onChange={handleChange} />
            </label> */}
            <Input placeholder="Enter the title" type="text" name="content" onChange={handleChange}/>
            <button className = 'btn-topic' type="submit" >Continue</button>
          </form>
      </div>
    )
}

export default CreateTopic