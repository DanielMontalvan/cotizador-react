import React, { Component } from 'react';
import Header from './header';
import Formulario from './Formulario';
import Resumen from './Resumen';
import Resultado from './Resultado';
import  {obtenerDiferenciaAnio} from './helper';
import  {calcularMarca} from './helper';
import  {obtenerPlan} from './helper';

class App extends Component {
state={
  resultado:'',
  datos:{},
}
cotizarSeguro=(datos)=>{
 const {marca,plan, year}=datos;
 let resultado=2000
const diferencia=obtenerDiferenciaAnio(year);
resultado-=((diferencia*3)*resultado)/100
resultado=resultado*calcularMarca(marca);
resultado=parseFloat(resultado*obtenerPlan(plan)).toFixed(2);

const datosAuto={
marca:marca,
plan:plan,
year:year
}
this.setState({
resultado:resultado,
datos:datosAuto
})
}
  render() {
  return (
    <div className="Contenedor">
      <Header
       titulo="Cotizador de seguro de auto" />
            <div className='contenedor-formulario'>
            
                <Formulario  cotizarSeguro={this.cotizarSeguro}
                />
                
<Resumen datos={this.state.datos}/>
<Resultado resultado={this.state.resultado}/> 
            </div>

    </div>
    );
  }
}
export default App;
