import { useState } from "react";
import Content from "./components/Content";

const App = () => {
  const [mostrar, setMostrar] = useState(false);

  return (
    <div>
      {!mostrar ? (
        <div className="bg-gray-800 flex items-center justify-center min-h-screen">
          <button
            onClick={() => setMostrar(!mostrar)}
            className="text-2xl text-blue-300 border border-blue-300 px-6 py-3 rounded-2xl cursor-pointer transition-all hover:scale-[1.1]"
          >
            🤍 Clique aqui
          </button>
        </div>
      ) : (
        <Content isOpen={mostrar} />
      )}
    </div>
  );
};

export default App;
