import React, { Component } from 'react';
import PropTypes from 'prop-types';

class QuoteBox extends Component {

    newQuote = (e) => {
        let rand = Math.floor(Math.random() * this.props.quote.length);
        document.getElementById('text').textContent=this.props.quote[rand].text;
        document.getElementById('author').textContent=this.props.quote[rand].author;
    };

    newTweet = (id) => {
        let url = "https://twitter.com/intent/tweet?text=";
        url = url + encodeURI(this.props.quote[id].text + " - " + this.props.quote[id].author) ;
        return url;
    }
    render() {
        var rand = Math.floor(Math.random() * this.props.quote.length);
        console.log(this.props.quote[rand].text);
        return (
            <div id="quote-box" style={styleQuotebox}>
                <div id="text" style={styleText}>{this.props.quote[rand].text}</div>
                <div id="author" style={styleAuthor}>- {this.props.quote[rand].author}</div>
                
                <div className="btn" style={styleTweetButton} ><a id="tweet-quote" href={this.newTweet(rand)}>Tweet this!</a></div>
                <div id="new-quote" className="btn" onClick={this.newQuote}>New Quote</div>
            </div>

        );
    }

}

const styleText = {
    fontSize: "2rem",
    padding: "15px",
    textAlign: 'center'
}

const styleAuthor = {
    padding: "10px",
    fontSize: "1.5rem",
    textAlign: 'right'
}

const styleQuotebox = {
    width: '60%',
    margin: 'auto',
    padding: '20px',
    background: 'white',
    border: '5px solid teal',
    borderRadius: '15px'
}

const styleQuoteButton = {
    float: 'left'
}

const styleTweetButton = {
    float: 'right'
}

QuoteBox.propTypes = {
    quote: PropTypes.array.isRequired
}
export default QuoteBox;