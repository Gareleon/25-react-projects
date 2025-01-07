import React, { useState } from 'react';
import data from './data'; // Make sure data is defined or imported
import './styles.css';

export default function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    const handleSingleSelection = (getCurrentId) => {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    const handleMultiSelection = (getCurrentId) => {
        let copyMultiple = [...multiple];
        const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);
        console.log(findIndexOfCurrentId);

        if (findIndexOfCurrentId === -1) {
            copyMultiple.push(getCurrentId);
        } else {
            copyMultiple.splice(findIndexOfCurrentId, 1);
        }

        setMultiple(copyMultiple); // Corrected this line
    }

    console.log(selected, multiple);
    return (
        <div className="wrapper">
            <button onClick={() => {
                setEnableMultiSelection(!enableMultiSelection);
                // Correct approach to collapse all open elements
                if (enableMultiSelection) {
                    setMultiple([]); // Create a new array to clear multiple selections
                } else {
                    setSelected(null); // Set selected to null to collapse any open item
                }
            }}>Enable Multi Selection</button>
            <div className="Accordian">
                {data && data.length > 0 ? (
                    data.map((dataItem, index) => (
                        <div key={index} className="item">
                            <div
                                className="title"
                                onClick={enableMultiSelection
                                    ? () => handleMultiSelection(dataItem.id) // Corrected the function call
                                    : () => handleSingleSelection(dataItem.id)}
                            >
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                selected === dataItem.id ||
                                    multiple.indexOf(dataItem.id) !== -1 ?
                                    <div className='content'>{dataItem.answer}</div>
                                    : null
                            }
                        </div>
                    ))
                ) : (
                    <div>No data present</div>
                )}
            </div>
        </div>
    );
}
