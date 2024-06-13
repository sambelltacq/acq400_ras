import React from 'react';

function Child(props) {
    console.log('child loaded')
    console.log(props)
    return (
    <div>
        <h3>Child Component</h3>
        <h6>UUT= {props.uut}</h6>
    </div>
    );
}

export default Child;