import { useEffect, useState } from 'react'
import './styles.css'




export default function TicTacToe() {

    function Square({ value, onClick }) {
        return <button onClick={onClick} className="square">{value}</button>
    }


    function handleClick(getCurrentSquare) {
        let cpySquares = [...squares];
        if (GetWinner(cpySquares) || cpySquares[getCurrentSquare]) return;
        cpySquares[getCurrentSquare] = isXTurn ? 'X' : 'O';
        setIsXTuren(!isXTurn);
        setSquares(cpySquares);

    }


    function handleRestart(){
        setIsXTuren(true);
        setSquares(Array(9).fill(''))
    }

    /*  0 1 2
        3 4 5
        6 7 8 */

    function GetWinner(squares) {
        const winningPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < winningPatterns.length; i++) {
            const [x, y, z] = winningPatterns[i]
            if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
                return squares[x]
            }
        }
        return null
    }

    const [squares, setSquares] = useState(Array(9).fill(''));
    const [isXTurn, setIsXTuren] = useState(true);
    const [status, setStatus] = useState('');



    useEffect(() => {
        if (!GetWinner(squares) && squares.every(item => item !== '')) {
            setStatus('This is a draw! Please restart the game.')
        } else if (GetWinner(squares)) {
            setStatus(`Winner is ${GetWinner(squares)}. Please restart the game.`)
        } else {
            setStatus(`Next players is ${isXTurn ? 'X' : 'O'}`)
        }
    }, [squares, isXTurn])

    return (<div className="tic-tac-toe container">
        <div className="row">
            <Square value={squares[0]} onClick={() => handleClick(0)} />
            <Square value={squares[1]} onClick={() => handleClick(1)} />
            <Square value={squares[2]} onClick={() => handleClick(2)} />
        </div>
        <div className="row">
            <Square value={squares[3]} onClick={() => handleClick(3)} />
            <Square value={squares[4]} onClick={() => handleClick(4)} />
            <Square value={squares[5]} onClick={() => handleClick(5)} />
        </div>
        <div className="row">
            <Square value={squares[6]} onClick={() => handleClick(6)} />
            <Square value={squares[7]} onClick={() => handleClick(7)} />
            <Square value={squares[8]} onClick={() => handleClick(8)} />
        </div>
        <h1>{status}</h1>
        <button onClick={handleRestart}>Restart</button>
    </div>)
}