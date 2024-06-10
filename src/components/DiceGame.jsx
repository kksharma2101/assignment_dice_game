import React, { useState } from 'react'
import { Link, json } from 'react-router-dom';

const DiceGame = () => {
    const [stackScore, setStackScore] = useState(5000);
    const [currentDiceValue, setCurrentDiceValue] = useState(null);
    const [betAmount, setBetAmount] = useState("");
    const [selectBet, setSelectBet] = useState("")
    const [error, setError] = useState("");


    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    const gamePlay = () => {
        let randomNumber = generateRandomNumber(1, 15);

        if (betAmount === "" || selectBet === "") {
            return setError("Please add your bet amount and bet")
        } else setCurrentDiceValue(randomNumber)

        // 

        if (randomNumber === 7) {
            setStackScore(stackScore + (betAmount * 5))
        } else setStackScore(stackScore - betAmount)

        if (randomNumber >= 8 && randomNumber !== 7) {
            setStackScore(stackScore + (betAmount * 2))
        } else setStackScore(stackScore - betAmount)

        if (randomNumber <= 6 && randomNumber !== 7) {
            setStackScore(stackScore + (betAmount * 2))
        } else setStackScore(stackScore - betAmount);

        setSelectBet("")

    }
    return (
        <div className='w-full flex items-center justify-center flex-col'>
            <h1
                className='text-center font-extrabold py-4 bg-slate-700 w-full text-white tracking-wider'>
                Dice Betting Game
            </h1>

            <div className="w-full p-4">
                <h3 className="font-bold">Stack Amount : {stackScore}</h3>

                <div className='flex items-center gap-2'>
                    <h3 className="">Select Bet Amount</h3>
                    <label>
                        <select value={betAmount} onChange={(e) => setBetAmount(e.target.value)} >
                            <option value={""}>Select</option>
                            <option value={100}>100</option>
                            <option value={200}>200</option>
                            <option value={500}>500</option>
                        </select>
                    </label>
                </div>
            </div>

            <div className="py-6">
                <h5 className="text-red-700 text-center">{betAmount !== "" && selectBet !== "" ? "" : error}</h5>
                <h3 className="text-center font-extrabold tracking-wide">Select Bet</h3>

                <div className="flex items-center justify-center gap-3">
                    <label>
                        <select value={selectBet} onChange={(e) => setSelectBet(e.target.value)} >
                            <option value={""}>Select</option>
                            <option value={6}>Below 7</option>
                            <option value={7}>7</option>
                            <option value={8}>Above 7</option>
                        </select>
                    </label>

                    {/* <button
                        onClick={() => setBelowSeven(6)}
                        className='border bg-black text-white rounded-md py-2'>
                        Below - 7
                    </button>
                    <button
                        onClick={() => setSeven(7)}
                        className='border bg-black text-white rounded-md py-2'>
                        7
                    </button>
                    <button
                        onClick={() => setAboveSeven(8)}
                        className='border bg-black text-white rounded-md py-2'>
                        Above - 7
                    </button> */}

                </div>
            </div>

            <div className="py-5">
                {currentDiceValue}
            </div>

            <div className="">
                <button
                    onClick={gamePlay}
                    className="bg-slate-600 text-white font-semibold hover:bg-slate-500 rounded-md">
                    Roll Dice
                </button>
            </div>

        </div >
    )
}

export default DiceGame