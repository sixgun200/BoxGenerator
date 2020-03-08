import React from 'react';

interface BoxProps {
    color: string;
    height: number;
    width: number;
}

const Box: React.FC<BoxProps> = ({color, height, width}) => {
    
    return (
        <div style={{
            backgroundColor: color,
            height,
            width,
            display: "inline-block",
            margin: 10}}>
        </div>
    )};

export default Box;
