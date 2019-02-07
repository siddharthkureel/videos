import axios from "axios";
const KEY ="AIzaSyD6zsCYjPUYkuU-pYLZWqMRxKTf7V27UaA";
export default axios.create({
     baseURL: 'https://www.googleapis.com/youtube/v3',
     params:{
         part:'snippet',
         maxResults:5,
         key:KEY,
         
     }
});