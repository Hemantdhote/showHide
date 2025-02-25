import React from 'react'

const App = () => {
  const [toggle, settoggle] = useState(false);


  const visibilityHandler=()=>{
    settoggle(!toggle);

  };
  


  return (
    <div>
      <div className=' w-full flex flex-col items-center p-10 gap-3'>
        <button className='px-3 py-2 bg-green-600 rounded-md text-white'>Show Text</button>
        <p className='text-md font-semibold capitalize'>this is the text and you can toggele this</p>
      </div>

      
    </div>
  )
}

export default App
