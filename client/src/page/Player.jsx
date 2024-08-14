import React , { useState, useEffect } from 'react';
import '../assets/course.css';
import { GetVideo } from '../ApiRequest/ApiRequest';
import { useParams } from 'react-router-dom';



const Player = () => {

  const { videoCategory } = useParams();

  console.log(videoCategory);

    const [videos, setVideos] = useState([]);
    const [currentVideo, setCurrentVideo] = useState(null);
  

    useEffect(()=>{
      GetData();
    },[])
  
    const GetData=()=>{
      GetVideo(videoCategory).then((data)=>{
        setVideos(data);
        setCurrentVideo(data[0]);
  
        })
    }

  
    const handleVideoClick = (video) => {
      console.log(video);
      setCurrentVideo(video);
    };
  
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <div className=" video-player mediaPlayer img-thumbnail rounded img-fluid">
                {currentVideo && (
                  <>
                    <video
                      controls
                      width="987" height="450"
                      key={currentVideo._id}
                    >
                      <source src={currentVideo.videoUrl} type="video/mp4" />
                      <source src={currentVideo.videoUrl} type="video/ogg" />
                      <source src={currentVideo.videoUrl} type="video/webm" />
                      <track default kind="captions" srcLang="en" src={currentVideo.captionsUrl} />
                      <track kind="subtitles" srcLang="en" src={currentVideo.subtitlesUrl} />
                      <track kind="descriptions" srcLang="en" src={currentVideo.descriptionsUrl} />
                      <track kind="chapters" srcLang="en" src={currentVideo.chaptersUrl} />
                      <p>
                        Sorry, your browser doesn't support embedded videos.
                      </p>
                    </video>
                  </>
                )}
              </div>
              <h1 className='mt-3 mb-3' style={{ color: 'white' }}>{currentVideo && currentVideo.title}</h1>
            </div>
            {/* <div className='col-sm-1'></div> */}
  
            <div className="col-sm-4">
              <div className="containsList">
              <table className="table table-striped table-dark table-hover">
                <tbody>
                {videos.length > 0 ? (
                  videos.map((video, index) => (
                          <tr key={video._id} onClick={() => handleVideoClick(video)}>
                              <td>{index + 1}. {video.title}</td>
                          </tr>
                      ))
                  ) : (
                      <tr>
                          <td className='text-center hvr-push'>No video found in this category</td>
                      </tr>
                  )}

                </tbody>
               </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Player;
  