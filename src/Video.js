import React, { Component, useEffect } from 'react'
import { hot } from 'react-hot-loader'
import 'bootstrap/dist/css/bootstrap.css'



import './App.css'


import ReactPlayer from 'react-player'
import Timer2 from './Timer2'

class Video extends Component {

  timer=false;

  state = {
    url: null,
    playing: true,
    duration: 0,
    loaded: 0,
    played: 0,

  }

  load = url => {
    this.setState({
      url,
      played: 0,
      loaded: 0,
  
     })
     this.timer=true;
     
  }

  handlePlayPause = () => {
    //this.load(this.props.link)
    this.setState({ playing: !this.state.playing })
  }

  handlePlay = () => {
    console.log('onPlay')
    //this.load(this.props.link)
    this.setState({ playing: true })
  }

  handlePause = () => {
    console.log('onPause')
    this.setState({ playing: false })
  }
  handleDuration = (duration) => {
    console.log('onDuration', duration)
    this.setState({ duration })
  }

  ref = player => {
    this.player = player
  }
  

  render () {

    const time = new Date();
    time.setSeconds(time.getSeconds() + 40); // 40 second timer
    

    const { url, playing, played, duration} = this.state


    return (
      <div>
      <div class="container">
        <div class="row">

          <div class="col">
         
              <section className="video">
              
                <div className='player-wrapper'>
                  <ReactPlayer
                    ref={this.ref}
                    className='react-player'
                    width='100%'
                    height='100%'
                    url={url}
                    playing={playing}
                    onPlay={this.handlePlay}
                    onPause={this.handlePause}
                    onProgress={this.handleProgress}
                    onDuration={this.handleDuration}
                  />
                </div>
              </section>

          
          </div>
          <div class="col">
            <div className="tiempo">            {
              playing ? <Timer2/>:''
              
            }
          </div>

          
          </div>


        </div>
        </div>
        <div class="container ">
          <div className="margin-top ">
          <div className="centrar">
          <button onClick={()=>this.props.funcion()} class="btn btn-info mt-4 tamano posicion-bajar">Categoria</button>
          <button onClick={() => this.load(this.props.link)} class="btn btn-info mt-4 tamano posicion-bajar">Iniciar</button>
          <button onClick={() => this.load(this.props.link)} onClick={this.handlePlayPause}  class="btn btn-info  mt-4 tamano">{playing ? 'Pausa' : 'Reanudar'} </button>
          {
            this.props.esUltimo? <button onClick={()=>this.props.funcion3()} class="btn btn-info mt-4 tamano posicion-bajar">Ir a Niveles</button>
            :<button onClick={()=>this.props.funcion2()} class="btn btn-info mt-4 tamano posicion-bajar">Siguiente Ejercicio</button>

          }
          </div>
          </div>
        </div>
     
      </div>
    )
  }
}

export default hot(module)(Video)
//{this.renderLoadButton('https://firebasestorage.googleapis.com/v0/b/saludyejercicio-8966d.appspot.com/o/fitnes.mp4?alt=media&token=83e7c600-5031-48f4-9687-5444a8d00a5f', 'Test A')}
//   <Timer2 date='06/20/2021'/> <Timer expiryTimestamp={time}/> 