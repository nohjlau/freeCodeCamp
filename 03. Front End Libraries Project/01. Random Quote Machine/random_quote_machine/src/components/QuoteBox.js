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
                <div id="author" style={styleAuthor}>{this.props.quote[rand].author}</div>
                <div id="new-quote" className="btn" onClick={this.newQuote}>New Quote</div>
                <div id="tweet-quote" className="btn"><a href={this.newTweet(rand)}>Tweet this!</a></div>
            </div>

        );
    }

}

const styleAuthor = {
    textAlign: 'right'
}

const styleText = {
    textAlign: 'center'
}
const styleQuotebox = {
    width: '50%',
    margin: 'auto',
    padding: '20px',
    background: 'pink',
    borderRadius: '15px'
}
QuoteBox.propTypes = {
    quote: PropTypes.array.isRequired
}
export default QuoteBox;