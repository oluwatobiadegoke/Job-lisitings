import React from 'react';
import Filter from './Filter'
import Person from './Person'
import { useGlobalContext } from './context'

const App = () => {

  const { filters } = useGlobalContext();

  return (
    <div className="App">
      {filters.length > 0 && <Filter />}
      <Person />
    </div>
  );
}

export default App;