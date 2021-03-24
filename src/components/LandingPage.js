import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import { MDBFreeBird, MDBInput, MDBCol, MDBRow, MDBCardBody, MDBCardTitle, MDBBtn, MDBContainer, MDBEdgeHeader } from
"mdbreact";

export default () => {
  return (
    <>

     <main>
          <MDBContainer className="text-center my-5" >
            <p align="justify">
Like no one ever was
To catch them is my real test
To train them is my cause

Pokémon (Gotta catch 'em all), a heart so true
Our courage will pull us through
You teach me, and I'll teach you
Po-ké-mon
(Gotta catch 'em all!)
Gotta catch 'em all!
Pokémon!
</p>
</MDBContainer>
       
    <div  >

    <MDBContainer className="text-center" >

    <iframe src="https://player.vimeo.com/video/315431464?autoplay=1&loop=1&color=5cd7d4&byline=0&portrait=0" width="1000" height="600" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
     {/* <Player poster={process.env.PUBLIC_URL + '/img/pokefight.jpg'}>
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

            </Player>  */}
</MDBContainer>
    </div>
    <MDBContainer className="text-center">
         <Link to="/choosePlayer" >
            <MDBBtn rounded outline color="info" > 
            <img src={process.env.PUBLIC_URL + '/img/Pokéball.png'} className="pokeball" alt="logo" style={{
                width:40}}/>SELECT POKEMON</MDBBtn>
        
        </Link>
        </MDBContainer>
    </main>
    </>
  );
};