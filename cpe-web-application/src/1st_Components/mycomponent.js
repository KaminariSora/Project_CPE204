import React, { useState, useEffect } from 'react';

const MyComponent = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // This code will run after the component has rendered
        console.log('Component has rendered');

        // You can perform side effects here
        document.title = `Count: ${count}`;

        // Return a cleanup function to perform cleanup (optional)
        return () => {
            console.log('Component is unmounting or count is changing');
        };
    }, [count]); // Specify count as a dependency

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default MyComponent;
