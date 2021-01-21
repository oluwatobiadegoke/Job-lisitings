import React from 'react';
import Filter from './Filter'
import Person from './Person'
import { useGlobalContext } from './context'

const App = () => {

  const { filterOpen } = useGlobalContext();

  return (
    <div className="App">
      {filterOpen && <Filter />}
      <Person />
    </div>
  );
}

export default App;