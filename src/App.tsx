import './App.css';

import MultiSelect from './components/multiSelect/MultiSelect';

function App() {
  return (
    <>
      <div className="mb-5 flex flex-col header">
        <p className="text-2xl mt-3">Multi-select Component</p>
      </div>
      <MultiSelect />
    </>
  );
}

export default App;
