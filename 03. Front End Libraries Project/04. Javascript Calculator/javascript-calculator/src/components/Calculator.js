/* eslint no-eval: 0 */
import React from 'react';
import './Calculator.css';
class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "his": []
        }
    }
    clickBtn = (e) => {
        if(document.getElementById("display") != null) {
            const OPERATIONS = ["+", "-", "*", "/"];
            let seperators = ["\\+", "-", "\\*", "/"];
            let display = document.getElementById("display").innerHTML;
            let btn = e.currentTarget.getAttribute("btn");
            let split = display.split(new RegExp(seperators.join('|'), 'g'));
            const HISTORY_MAX = 3;

            if(btn === "c") { 
                // Clear our display
                document.getElementById("display").innerHTML = "0";
            } else if (btn === "b") {
                // Delete last input char
                if(display.length > 0 && display[0] !== "0") {
                    document.getElementById("display").innerHTML = display.substring(0, display.length-1);
                }
            } else if (btn === "=") {
                // Calculate input
                if(OPERATIONS.filter(d => d === display[display.length-1]).length > 0) {
                    // Sanitize if we end with an operation
                    display = display.substring(0, display.length-1);
                    if(OPERATIONS.filter(d => d === display[display.length-1]).length > 0) {
                        //Check we don't have two operators w/ the "-" case
                        display = display.substring(0, display.length-1);
                    }
                }

                let entry = {"input": display, "answer": eval(display)};
                let his = [...this.state.his, entry];
                this.setState((state) => { return {"his": his}});
                console.log(his);
                document.getElementById("history").innerHTML = his.reverse().slice(0, HISTORY_MAX).reverse().map(d => "<div class='output'><div class='input'>" + d.input + "</div><div class='answer'>" + d.answer + "</div></div>").join("");
                document.getElementById("display").innerHTML = entry.answer;
            } else if (display[0] === "0" && btn === "0") {
                // No multiple leading zeros
            } else if (split[split.length-1].split("").filter( d => d === '.').length > 0 && btn === '.') {
                // Only one decimal between operations
            } else if (display[0] === "0" && OPERATIONS.filter(d => d === btn).length > 0) { 
                // No operations before numbers
            } else if (OPERATIONS.filter(d => d === btn).length > 0 && OPERATIONS.filter(d => d === display[display.length-1]).length > 0) { 
                // Handle multiple operators
                if(btn !== "-") {
                    if(display[display.length-1] === "-") {
                        document.getElementById("display").innerHTML = display.substring(0, display.length-2) + btn + "-";
                    } else {
                        document.getElementById("display").innerHTML = display.substring(0, display.length-1) + btn;
                    }
                } else if (display[display.length-1] !== "-") {
                    document.getElementById("display").innerHTML = display + btn;
                }
            } else if (display.length === 1 && display[0] === "0" && btn !== ".") {
                // Replace 0 unless decimal
                document.getElementById("display").innerHTML = btn;
            } else {
                document.getElementById("display").innerHTML = display + btn;
            }
        }
    }
    render() {
        
        return (
        <div id='calculator'>
            <div id="output">
                <div id="history"></div>
                <div id="display">0</div>
            </div>

            <div className='btn clear left' btn="c" onClick={this.clickBtn} id="clear">C</div>
            <div className="btn back" btn="b" onClick={this.clickBtn} id="back">←</div>
            <div className='btn right opsym' btn="/" onClick={this.clickBtn} id="divide">/</div>

            <div className='btn left' btn="7" onClick={this.clickBtn} id="seven">7</div>
            <div className='btn' btn="8" onClick={this.clickBtn} id="eight">8</div>
            <div className='btn' btn="9" onClick={this.clickBtn} id="nine">9</div>
            <div className='btn right opsym' btn="*" onClick={this.clickBtn} id="multiply">*</div>

            <div className='btn left' btn="4" onClick={this.clickBtn} id="four">4</div>
            <div className='btn' btn="5" onClick={this.clickBtn} id="five">5</div>
            <div className='btn' btn="6" onClick={this.clickBtn} id="six">6</div>
            <div className='btn right opsym' btn="-" onClick={this.clickBtn} id="subtract">-</div>

            <div className='btn left' btn="1" onClick={this.clickBtn} id="one">1</div>
            <div className='btn' btn="2" onClick={this.clickBtn} id="two">2</div>
            <div className='btn' btn="3" onClick={this.clickBtn} id="three">3</div>
            <div className='btn right opsym' btn="+" onClick={this.clickBtn} id="add">+</div>

            <div className='btn zero left bottom' btn="0" onClick={this.clickBtn} id="zero">0</div>
            <div className='btn bottom' btn="." onClick={this.clickBtn} id="decimal">.</div>
            
            <div className='btn equals right bottom' btn="=" onClick={this.clickBtn} id="equals">=</div>
            
        </div>
        )
    };
}

export default Calculator;