import React from 'react';
import Filter from './Filter'
import Person from './Person'
import { useGlobalContext } from './context'

const App = () => {

  const { filters } = useGlobalContext();

  return (
    <div className="App">
      <div className="uptop"></div>
      <div className="cont">
        {filters.length > 0 && <Filter />}
        <Person />
    </div>
    </div>
    
  );
}

export default App;