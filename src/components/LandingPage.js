import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import {
    Player,
    ControlBar,
    ReplayControl,
    ForwardControl,
    CurrentTimeDisplay,
    TimeDivider,
    PlaybackRateMenuButton,
    VolumeMenuButton,
    BigPlayButton 
  } from 'video-react';
import { MDBFreeBird, MDBInput, MDBCol, MDBRow, MDBCardBody, MDBCardTitle, MDBBtn, MDBContainer, MDBEdgeHeader } from
"mdbreact";

export default () => {
  return (
    <>
    <div className="text-center p-5" d-flex >
    <MDBContainer size="md">
    <Player poster={process.env.PUBLIC_URL + '/img/pokefight.jpg'}>
                <source src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4" />
                <source src="http://mirrorblender.top-ix.org/movies/sintel-1024-surround.mp4" />
                <BigPlayButton position="center" />

                <ControlBar>
                    <ReplayControl seconds={10} order={1.1} />
                    <ForwardControl seconds={30} order={1.2} />
                    <CurrentTimeDisplay order={4.1} />
                    <TimeDivider order={4.2} />
                    <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
                    <VolumeMenuButton disabled />
                    
                </ControlBar>
            </Player>
</MDBContainer>
            
         <Link to="/arena" >
            <MDBBtn rounded outline color="info"> <img src={process.env.PUBLIC_URL + '/img/Pokéball.png'} className="pokeball" alt="logo" style={{
                width:40}}/>ENTER ARENA</MDBBtn>
        </Link>
    </div>
    </>
  );
};