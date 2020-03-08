import React, { useState } from 'react';
import './App.css';
import Box from './components/Box';
import InputBox from './components/InputBox';

function App() {
  const [colors, setColors] = useState<string[]>(["red", "orange", "yellow"]);

  return (
    <div className="App">
      <InputBox setColors={setColors} colors={colors}/>
      {colors.map((color, indexNum) => (
        <Box key={indexNum} color={color} height={100} width={100} />
      ))}
    </div>
  );
}

export default App;
