import React from 'react';
import { useLocation } from 'react-router-dom';

/*
const Opi = () => {
    const location = useLocation();
    const uut = new URLSearchParams(location.search).get('uut');

    return '';
}
*/


function Parent(props) {
    const uut = 'acq21212'
    let children = props.children

    const children2 = props.children.map(child => {
        // Create a new element with modified props
        return React.cloneElement(child, { uut: uut });
    });



    return (
        <div>
            <h2>Parent Component</h2>
            <ul>
                {children2}
            </ul>
        </div>
    );
}
export default Parent;

