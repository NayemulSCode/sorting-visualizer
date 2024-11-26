import { useState } from "react";
import { demoData } from "./data";
import { bubbleSort, insertionSort } from "./sortingAlgorithoms";
import Confetti from "react-confetti";
import { keyframes, css } from "@emotion/react"; 
import styled from "@emotion/styled";

const App: React.FC = () => {
  const [data, setData] = useState<number[]>(demoData);
  const [animations, setAnimations] = useState<number[][]>([]);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [sorting, setSorting] = useState(false);

  const handleSort = (algorithm: (arr: number[]) => number[][]) => {
    const steps = algorithm(data);
    setAnimations(steps);
    setCurrentStep(0);
    setSorting(true);
  };

  const nextStep = () => {
    if (currentStep < animations.length - 1) {
      setCurrentStep((prev) => prev + 1);
      setData(animations[currentStep + 1]);
    } else {
      setSorting(false);
    }
  };

  const barAnimation = keyframes`
  0% { transform: scaleY(0.8); background-color: #3b82f6; }
  50% { transform: scaleY(1.2); background-color: #60a5fa; }
  100% { transform: scaleY(0.8); background-color: #3b82f6; }
`;
const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #60a5fa;
  }
`;
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {sorting && <Confetti />}
      <div className="flex space-x-4">
        <Button
          // className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => handleSort(bubbleSort)}
        >
          Bubble Sort
        </Button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => handleSort(insertionSort)}
        >
          Insertion Sort
        </button>
      </div>
      <div className="flex space-x-2 mt-8">
        {data.map((num, idx) => (
          <div
            key={idx}
            css={css`
              width: 2rem;
              height: ${num * 4}px;
              background: #3b82f6;
              text-align: center;
              color: white;
              animation: ${barAnimation} 1s ease-in-out;
            `}
          >
            {num}
          </div>
        ))}
      </div>
      {sorting && (
        <button
          className="mt-4 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          onClick={nextStep}
        >
          Next Step
        </button>
      )}
    </div>
  );
};

export default App;
