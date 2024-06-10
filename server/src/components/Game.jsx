import React, { useState } from 'react';

const Game = () => {
    const [dice, setDice] = useState(null);
    const [bet, setBet] = useState('');
    const [stake, setStake] = useState(0);
    const [result, setResult] = useState(null);

    const rollDice = () => {
        const roll = Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1;
        setDice(roll);
        calculateWinnings(roll);
    };

    const calculateWinnings = (roll) => {
        let winnings = 0;
        if (roll < 7 && bet === 'below') {
            winnings = stake * 2;
        } else if (roll > 7 && bet === 'above') {
            winnings = stake * 2;
        } else if (roll === 7 && bet === 'seven') {
            winnings = stake * 5;
        }
        setResult(winnings);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Dice Betting Game</h1>
            <div>
                <label>
                    Bet:
                    <select value={bet} onChange={(e) => setBet(e.target.value)}>
                        <option value="">Select</option>
                        <option value="below">Below 7</option>
                        <option value="seven">7</option>
                        <option value="above">Above 7</option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Stake:
                    <input
                        type="number"
                        value={stake}
                        onChange={(e) => setStake(Number(e.target.value))}
                    />
                </label>
            </div>
            <button onClick={rollDice}>Roll Dice</button>
            {dice && (
                <div>
                    <h2>Dice Roll: {dice}</h2>
                    <h2>Result: {result !== null ? `You won ${result}` : 'No winnings'}</h2>
                </div>
            )}
        </div>
    );
};

export default Game;
