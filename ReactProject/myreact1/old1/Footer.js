import React from 'react';

function Footer(props){
    return (
        <footer>
            <p>Made by: {props.author} &copy; {props.year}</p>
        </footer>
    );
}

export default Footer;