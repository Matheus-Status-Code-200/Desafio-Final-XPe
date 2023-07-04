        import { useState } from 'react';

        export default function Quadrado() {
          const [sideA, setSideA] = useState('');
          const [sideB, setSideB] = useState('');
          const [area, setArea] = useState('');
          const [perimeter, setPerimeter] = useState('');
        
          const calculateAreaAndPerimeter = () => {
            const parsedSideA = parseFloat(sideA);
            const parsedSideB = parseFloat(sideB);
        
            if (!isNaN(parsedSideA) && !isNaN(parsedSideB)) {
              const calculatedArea = parsedSideA * parsedSideB;
              const calculatedPerimeter = 2 * (parsedSideA + parsedSideB);
        
              setArea(calculatedArea.toFixed(2));
              setPerimeter(calculatedPerimeter.toFixed(2));
            } else {
              setArea('');
              setPerimeter('');
            }
          };
        
          const resetValues = () => {
            setSideA('');
            setSideB('');
            setArea('');
            setPerimeter('');
          };
        
          return (
            <div className="flex justify-center items-center">
              <div className="bg-white p-4 shadow-lg rounded-lg">
                <h1 className="text-2xl mb-4">Área e Perímetro do Retângulo</h1>
                <div className="flex items-center mb-4 ml-12">
                  <label htmlFor="sideA" className="mr-2">
                    Lado A:
                  </label>
                  <input
                    type="number"
                    id="sideA"
                    className="border w-12 mr-2"
                    value={sideA}
                    onChange={(e) => setSideA(e.target.value)}
                  />
                  <label htmlFor="sideB" className="mr-2">
                    Lado B:
                  </label>
                  <input
                    type="number"
                    id="sideB"
                    className="border w-12 mr-2"
                    value={sideB}
                    onChange={(e) => setSideB(e.target.value)}
                  />
                </div>
                <div className="flex justify-center items-center ml-20 h-40 w-40 bg-cyan-500"></div>

                <button
                  className="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={calculateAreaAndPerimeter}
                >
                  Calcular
                </button>
                {area && (
                  <div className="mt-2">
                    <span className="font-bold">Área:</span> {area}
                  </div>
                )}
                {perimeter && (
                  <div className="mt-2">
                    <span className="font-bold">Perímetro:</span> {perimeter}
                  </div>
                )}
                {area && perimeter && (
                  <button
                    className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    onClick={resetValues}
                  >
                    Limpar
                  </button>
                )}
              </div>
            </div>
          );
        }
         
