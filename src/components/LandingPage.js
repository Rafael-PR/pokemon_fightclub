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
            <p align="justify">Ich will der allerbeste sein,
Wie keiner vor mir war.
Ganz allein fang ich sie mir,
Ich kenne die Gefahr.

Ich streife durch das ganze Land,
Ich suche weit und breit,
Das Pokemon um zu verstehen,
Was ihm diese Macht verleiht.

Pokemon
Komm' schnapp' sie dir.
(Nur ich und du)
In allem was ich auch tu
Pokemon
Oh mein bester Freund
Komm retten wir die Welt
Pokemon
Dein Herz ist gut
Wir vertrauen auf unseren Mut
Ich lern von dir und du von mir
Pokemon

Egal wie schwer mein weg auch ist
Ich nehme es in kauf
Ich will den Platz der mir gehört
Ich gebe niemals auf

Komm zeigen wir der ganzen Welt
Das wir Freunde sind
Gemeinsam zieh'n wir in den Kampf
Das besste Team gewinnt.

Pokemon
Komm' schnapp' sie dir.
(Nur ich und du)
In allem was ich auch tu
Pokemon
Oh mein bester Freund
Komm retten wir die Welt
Pokemon
Dein Herz ist gut
Wir vertrauen auf unseren Mut
Ich lern von dir und du von mir
Pokemon

Komm schnapp sie dir, komm und schnapp sie dir.
Komm und schnapp sie dir.
Komm und schnapp sie dir!

Pokemon
Komm' schnapp' sie dir.
(Nur ich und du)
In allem was ich auch tu
Pokemon
Oh mein bester Freund
Komm retten wir die Welt
Pokemon
Dein Herz ist gut
Wir vertrauen auf unseren Mut
Ich lern von dir und du von mir
Pokemon

Komm schnapp sie dir, komm und schnapp sie dir.
Pokemon</p>
</MDBContainer>
       
    <div  >

    <MDBContainer className="text-center" >

    <iframe src="https://player.vimeo.com/video/315431464?autoplay=1&loop=1&color=5cd7d4&byline=0&portrait=0" width="1200" height="800" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
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