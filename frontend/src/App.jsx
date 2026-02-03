import React from 'react';
import Screen from './Main_screen/Screen';
import SearchBar from './input/SearchBar';
const App = () => {
  return(
    <div className="flex flex-col min-h-screen bg-gray-100 w-full items-center py-10">
      <div className="w-full max-w-2xl mb-6">
        <SearchBar />
      </div>
      <div className="border rounded-xl shadow-xl bg-white p-6 w-[90%] max-w-4xl">
        <Screen />
      </div>
    </div>
  )
}
export default App;