import React from 'react';
import './Author.css'

const Author = ({writer}) => {
    return (
        <blockquote class='blockquote w-100 spacing'>
            <footer class="author blockquote-footer">
                {writer} 
                {/*in <cite title="Source Title">Source Title</cite> */}
            </footer>
        </blockquote>
    )
}

export default Author;