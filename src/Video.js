import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { hot } from 'react-hot-loader'


import './App.css'


import ReactPlayer from 'react-player'
import Duration from './Duration'

class App extends Component {
  state = {
    url: null,
    playing: true,
    controls: false,
    played: 0,
    loaded: 0,
    duration: 0,

  }

  load = url => {
    
    this.setState({
      url,
      played: 0,
      loaded: 0,
    })
  }

  handlePlayPause = () => {
    this.setState({ playing: !this.state.playing })
  }

  handleStop = () => {
    this.setState({ url: null, playing: false })
  }

  handleProgress = state => {
    console.log('onProgress', state)
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state)
    }
  }


  handleDuration = (duration) => {
    console.log('onDuration', duration)
    this.setState({ duration })
  }

  

  renderLoadButton = (url, label) => {


    return (
      <button onClick={() => this.load(url)}>
        {label}
      </button>
    )
  }

  ref = player => {
    this.player = player
  }

  render () {
    const { url, playing, controls, played, duration } = this.state
  

    return (
      <div className="container">
      <div className="row">
        <section className='section'>
          <div >
            <ReactPlayer
              ref={this.ref}
              //className='react-player'
              width='100%'
              height='100%'
              url={url}
              playing={playing}
              controls={controls}
              onReady={() => console.log('onReady')}
              onStart={() => console.log('onStart')}
              onPlay={this.handlePlay}
              onPause={this.handlePause}
              onProgress={this.handleProgress}
              onDuration={this.handleDuration}
            />
          </div>
          

        </section>
        <section className='col'>
           <div className="tiempo">
           <h1 style={{fontSize: '100px'}}><Duration seconds={duration * (1 - played)} /></h1>
           </div>
                
 
        </section>
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
      </div>
    )
  }
}

export default hot(module)(App)