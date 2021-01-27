import React from 'react';
import './Quote.css'


const Quote = ({quotation}) => {
    return (
        <blockquote class='disp spacing'>
            <i>&#8220;</i>
            <p class="quote spacing">{quotation}</p>
            {/* <footer class="blockquote-footer text-right">
            Someone famous in <cite title="Source Title">Source Title</cite>
            </footer> */}
         </blockquote>
    )
}

export default Quote;