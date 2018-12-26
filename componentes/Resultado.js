import React,{Component} from 'react';
import {TransitionGroup,CSSTransition} from 'react-transition-group';

class Resultado extends Component{
render(){
    const resultado= this.props.resultado;
    const mensaje=(!resultado)?'Elige marca año o tipo de seguro.':resultado;
return (
    <div className='gran-total'>
<TransitionGroup component='span' className='resultado'>
<CSSTransition classNames='resultado' key={resultado} timeout={{enter:500,exit:500}}>
<span>{mensaje}</span>
</CSSTransition>
</TransitionGroup>
</div>
)
  }
 }
export default Resultado;