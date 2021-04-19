import axios from 'axios'
export const GetTopic = async (data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.get("http://localhost:3020/topic");
        console.log(data);
        resolve(response.data);        
      } catch (err) {
        reject(err);
      }
    });
  };