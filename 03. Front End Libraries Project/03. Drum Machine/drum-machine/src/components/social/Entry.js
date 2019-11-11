import React from 'react';
import './Entry.css';

class Entry extends React.Component {

    render() {
        return(
            <div className='entry'>
                <div className='rank'>1</div>
                <div className='vote'>
                    <span>▲</span>
                    <span>VOTES</span>
                    <span>▼</span>
                </div>
                <div className='content'>
                    <span class="feature"></span>
                    <span class='title'>Title of this awesome soundboard</span>
                    <span class='tagline'>Submitted 2 hours ago by {this.props.test_data.author}</span>
                    <span class='comments'>Comments</span> 
                </div>
            </div>
        )
    };
}

export default Entry;