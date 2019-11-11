/* eslint no-eval: 0 */
import React from 'react';
import './Calculator.css';
class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "his": [],
            "ops_temp": []
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
                this.setState((state) => {
                    return {"ops_temp": ""}
                })
            } else if (btn === "b") {
                // Delete last input char
                if(display.length > 0 && display[0] !== "0") {
                    document.getElementById("display").innerHTML = display.substring(0, display.length-1);
                }
            } else if (btn === "=") {
                while(display[display.length-1].match(/\D/)) {
                    display = display.substring(0,display.length-1);
                }

                // Calculate input
                let entry = {"input": display, "answer": Math.round(eval(display)*10000)/10000};
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
            } else if (display.length === 1 && display[0] === "0" && btn !== ".") {
                // Replace 0 unless decimal
                document.getElementById("display").innerHTML = btn;
            } else {
                document.getElementById("display").innerHTML = display + btn;
            }

            // After it's valid input, check if it's an operation so we can begin the sanitization process
            display = document.getElementById("display").innerHTML;
            if(OPERATIONS.filter(d => d === display[display.length-1]).length > 0) {
                let ops = this.state.ops_temp + btn;
                console.log(ops);
                this.setState((state) => { return {"ops_temp": ops}})

            } else if ( btn.match(/\d/)) {
                this.setState((state) => { return {"ops_temp": ""}});
            }
            if(this.state.ops_temp.length > 1 && btn.match(/\d/)) {
                // if it's not - then substring(0, str.length-ops_temp.length) + this.state.ops_temp.reverse()[0] 
                // else if reverse is - then add the [0] and [1]
                let temp = this.state.ops_temp.split("").reverse().join("");
                if(temp[0] !== "-") {
                    document.getElementById("display").innerHTML = display.substring(0, display.length-1 - temp.length) + temp[0] + btn;
                    console.log("true");
                } else {
                    if(temp[0] === "-" && temp[1] === "-") {
                        document.getElementById("display").innerHTML = display.substring(0, display.length-1 - temp.length) + "+" + btn;
                        console.log("true2");
                    } else {
                        document.getElementById("display").innerHTML = display.substring(0, display.length-1 - temp.length) + temp[1] + temp[0] + btn;
                        console.log("true3");
                    }
                }
                this.setState((state) => { return {"ops_temp": ""}});
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