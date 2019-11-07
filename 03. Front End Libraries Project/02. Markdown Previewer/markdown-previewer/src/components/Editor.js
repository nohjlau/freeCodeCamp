import React from 'react';
import marked from 'marked';

class Editor extends React.Component {

    updatePreview = (e) => {
        document.getElementById("preview").innerHTML = marked(document.getElementById("editor").value);
        console.log(marked(document.getElementById("editor").value));
    }

    render() {
        window.onload = function() {
            onloadPreview();
            function onloadPreview() {
                return document.getElementById("preview").innerHTML = marked(defaultValue);
            }
        };

        return(
            <div>
                <textarea defaultValue={defaultValue} style={styleTextArea} id="editor" onChange={this.updatePreview}></textarea>
                <div style={stylePreviewArea} id="preview"></div>
            </div>
        )
    };
}

const defaultValue = '# Big Title \n ## Smaller Title \n [google](https://google.com) \n `inline code` \n ```code block \n asdf \n ``` \n * list item \n\n\n > test \n > test \n\n ![FCC Logo](https://www.freecodecamp.org/icons/icon-48x48.png) \n \n **bold**';

const styleTextArea = {
    paddingLeft: '30px',
    paddingTop: '1rem',
    width: '40%',
    height: '400px',
    margin: '20px',
    float: 'left'
}

const stylePreviewArea = {
    lineHeight: '1rem',
    paddingLeft: '30px',
    paddingBottom: '1rem',
    width: '40%',
    height: '400px',
    border: '1px solid black',
    margin: '20px',
    float: 'right'
}
export default Editor;