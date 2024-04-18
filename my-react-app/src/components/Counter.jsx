import React, { useState } from 'react';

const Counter = (props) => {
    const heading = props?.heading;

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(prev => prev + 1);
    };

    return (
        <section>
            <h2>{heading}</h2>
            <button onClick={handleClick}>
                Clicked {count} times!
            </button>
        </section>
    );
};

export default Counter;
