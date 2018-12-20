import React, { Component } from 'react';
import Header from './header';
import Formulario from './Formulario';
class App extends Component {

  render() {
  return (
    <div className="Contenedor">
      <Header 
       titulo="Cotizador de seguro de auto" />
            <div className='contenedor-formulario'>
                <Formulario />
            </div>
    </div>
    );
  }
}
export default App;
