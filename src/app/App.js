import { icons, moon } from "../config/AddElements";
import HomePage from "../pages/HomePage";

function App() {
  return (
    <div className="flex w-screen h-screen justify-between">
        <HomePage />
      <div className="flex flex-col w-28 justify-between items-center">
        <div>
          <button className="bg-gray-200 p-4 rounded-full mt-5">
            {moon.theme}
          </button>
        </div>
        <ul className="flex flex-col flex-grow justify-center gap-5 pb-20">
          {Object.values(icons).map((value, key) => 
            <li key={key}>
              <button className="bg-gray-200 p-4 rounded-full">
                {value} 
              </button>
            </li>  
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
