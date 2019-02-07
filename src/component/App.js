import React from "react";
import SearchBar from "./SearchBar";
import YouTube from "../api/YouTube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
class App extends React.Component{
    state={
        videos:[],
        seletedVideo:null           
    };
    componentDidMount(){
        this.onTermSubmit('buildings');
    }
    onTermSubmit= async(term)=>{
       const reponse = await YouTube.get('/search',{
         params:{
             q:term
         }
      });
        this.setState({ 
            videos: reponse.data.items,
            seletedVideo:reponse.data.items[0]
         });
    };
    onVideoSelect=(video)=>{
        this.setState({seletedVideo:video});
    }
    
    render(){
        return(
           <div className="ui container">
               <SearchBar onFormSubmit={this.onTermSubmit}/>
               <div className="grid">
                    <div className="player">
                        <VideoDetail video={this.state.seletedVideo}/>
                    </div>
                    <div className="video-list">
                        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                    </div>
                </div>
           </div>
        );
    }
}
export default App;