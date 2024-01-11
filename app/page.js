'use client';
import { useState } from 'react';

export default function Page() {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState(0);

  const factorial = (number) => {
    if (number === 1) {
      return 1;
    }
    return number * factorial(number - 1);
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    if (
      isNaN(+input) ||
      input.trim() === '' ||
      input < 0 ||
      input.includes('.')
    ) {
      setError('! Invalid Number');
      setResult(0);
    } else {
      setError('');
      const result = factorial(input);
      setResult(result);
    }
  };
  return (
    <div>
      <div className="font-semibold text-2xl p-3">Expected Result</div>
      <div className="flex gap-5">
        <form
          onSubmit={handleCalculate}
          className="flex flex-col items-start max-w-[300px] px-3"
        >
          <label className="text-gray-400 text-sm">Number</label>
          <input
            className="block w-full text-black text-xl py-2 border-b border-gray-400 outline-none placeholder:text-gray-500"
            placeholder="Enter Number"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <div className="flex justify-between w-full py-2">
            <div></div>
            <button className="bg-[#11C15B] hover:bg-[#1AEB72] transition-all px-3 py-2 text-white">
              Calculate
            </button>
          </div>
        </form>
        <div className="space-y-2">
          <div className="text-gray-700">:: Result ::</div>
          {error ? (
            <div className="text-red-600 text-lg">{error}</div>
          ) : (
            <div className="text-3xl font-bold">{result}</div>
          )}
        </div>
      </div>
    </div>
  );
}
