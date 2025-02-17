import React, { useState } from 'react';



export default function ColorGenerator() {

    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');


    const randomIndex = (length) => {
        return Math.floor(Math.random() * length)
    }

    const handleCreateRandomHexColor = () => {
        const hexDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#';

        for (let i = 0; i < 6; i++) {
            hexColor += hexDigits[randomIndex(hexDigits.length)];
        }

        setColor(hexColor);

        console.log(hexColor);
    };

    const handleCreateRandomRgbColor = () => {
        const r = randomIndex(256);
        const g = randomIndex(256);
        const b = randomIndex(256);

        setColor(`rgb(${r},${g},${b})`);
    };

    return <div style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: color
    }}>
        <button onClick={() => setTypeOfColor('hex')}>HEX Color</button>
        <button onClick={() => setTypeOfColor('rgb')}>RGB Color</button>
        <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate Random Color</button>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            color: 'white',
            fontSize: 60,
            marginTop: 50,
        }}>
            <h3>{typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h3>
            <h2>{color}</h2>
        </div>
    </div>
}