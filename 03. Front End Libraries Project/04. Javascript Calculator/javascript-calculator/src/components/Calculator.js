import React from 'react';
import './Calculator.css';
class Calculator extends React.Component {
    render() {
        return (
        <div id='calculator'>
            
            <div id="display">display</div>
            
            <div className='btn left' id="seven">7</div>
            <div className='btn' id="eight">8</div>
            <div className='btn' id="nine">9</div>
            <div className='btn right' id="divide">/</div>

            <div className='btn left' id="four">4</div>
            <div className='btn' id="five">5</div>
            <div className='btn' id="six">6</div>
            <div className='btn right' id="multiply">*</div>

            <div className='btn left' id="one">1</div>
            <div className='btn' id="two">2</div>
            <div className='btn' id="three">3</div>
            <div className='btn right' id="subtract">-</div>
            
            <div className='btn zero left' id="zero">0</div>
            <div className='btn' id="decimal">.</div>
            <div className='btn right' id="add">+</div>
            <div className='btn clear left' id="clear">C</div>
            <div className='btn equals' id="equals">=</div>
            
        </div>
        )
    };
}

export default Calculator;