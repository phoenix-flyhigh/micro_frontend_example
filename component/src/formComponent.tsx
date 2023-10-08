import React from 'react';

const FormComponent = ({ a, b }: {a: number, b: number}) => {
    return (
        <div>
            {`Sum is ${a + b}`}
        </div>
    );
};

export default FormComponent;
