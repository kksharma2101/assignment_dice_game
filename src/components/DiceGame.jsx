import React, { useState } from 'react'

const DiceGame = () => {
    const [stack, setStack] = useState(5000);
    const [bet, setBet] = useState(null);
    return (
        <div className='w-full flex items-center justify-center flex-col'>
            <h1 className='text-center font-extrabold py-4 bg-slate-700 w-full text-white tracking-wider'>Dice Betting Game</h1>

            <div className="w-full p-4">
                <h3 className="font-bold">Stack Amount : {stack}</h3>
                <div className='flex items-center gap-2'>
                    <h3 className="">Select Bet Amount</h3>
                    <label>
                        <select value={bet} onChange={(e) => setBet(e.target.value)}>
                            <option value="">Select</option>
                            <option value={100}>100</option>
                            <option value={200}>200</option>
                            <option value={500}>500</option>
                        </select>
                    </label>
                </div>
            </div>

            <div className="py-6">
                <h3 className="text-center font-extrabold tracking-wide">Select Bet</h3>

                <div className="flex items-center justify-center gap-3">
                    <button
                        className='border bg-black text-white rounded-md py-2'>Below - 7</button>
                    <button
                        className='border bg-black text-white rounded-md py-2'>7</button>
                    <button
                        className='border bg-black text-white rounded-md py-2'>Above - 7</button>
                </div>
            </div>

            <div className="py-5"></div>

            <div className="">
                <button className="bg-slate-600 text-white font-semibold hover:bg-slate-500 rounded-md">Roll Dice</button>
            </div>

        </div>
    )
}

export default DiceGame