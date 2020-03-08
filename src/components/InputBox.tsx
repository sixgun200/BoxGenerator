import React from 'react';

interface InputBoxProps {
    colors: string[];
    setColors: Function;
}

const InputBox: React.FC<InputBoxProps> = ({ colors, setColors }) => {
    const [newColor, setNewColor] = React.useState<string>("");
    const handleClick = () => {
        if (newColor.length) {
            setColors([...colors, newColor]);
            setNewColor("");
        }
    }
    return (
    <div>
        <span>Color</span>
        <input
            value={newColor}
            onChange={e => setNewColor(e.target.value)}
            type="text"
            style={{
                margin: 10,
                height: 30,
                borderRadius: 20,
                border: "1px solid grey"
            }}
        />
        <button
            onClick={handleClick}
            style={{
                padding: 5,
                borderRadius: 2,
                border: "1px solid grey"
            }}>
            Add
        </button>
    </div>
)};

export default InputBox;

// function test(){}

// function onClick(callback){
//     return callback(this)
// }
// onClick(test)c