import React from 'react';
import Entry from './Entry';

class Viewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test_data: 
                [{
                    upvotes: 1,
                    downvotes: 2,
                    feature: ["R", "M"],
                    title: "Test Case 1",
                    date: "10-10-10", //Date object?
                    author: "Jimbo",
                    comments: 123
                },
                {
                    upvotes: 3,
                    downvotes: 5,
                    feature: ["M", "S"],
                    title: "Test Case 2",
                    date: "10-10-10", //Date object?
                    author: "Jane",
                    comments: 5
                }]
        };
    }
    render() {
        return(
            <div>
                <Entry test_data={this.state.test_data[0]}/>
            </div>
        )
    }
}
export default Viewer;