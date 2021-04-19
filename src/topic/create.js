import React,{useState} from 'react';
import axios from 'axios';
import {
  useHistory
} from "react-router-dom";

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
        if(user.content){
            try {
                const response = await axios.post("http://localhost:3020/topic", user);
                if(response){
                    history.push("/create-option")
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
    return(
        <div>
        <form onSubmit={handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="content" onChange={handleChange} />
          </label>
          <button type="submit" >Add</button>
        </form>
      </div>
    )
}

export default CreateTopic