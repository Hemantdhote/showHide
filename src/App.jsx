import React, { useState } from 'react';

const App = () => {
  const [toggle, setToggle] = useState(false);

  const visibilityHandler = () => {
    setToggle(!toggle);
  };

  return (
    <div className="w-full flex flex-col items-center p-10 gap-3">
      <button onClick={visibilityHandler} className="px-3 py-2 bg-green-600 rounded-md text-white">
        {toggle ? 'Hide Text' : 'Show Text'}
      </button>
      {toggle && <p className="text-md font-semibold capitalize">This is the text and you can toggle this</p>}
    </div>
  );
};

export default App;
