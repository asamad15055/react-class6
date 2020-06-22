import React from 'react';
import './App.css';
import Child from './Child' ;
import {TransactionProvider} from './transcontext' ;

function App() {
  return (
    <TransactionProvider>
    <Child>

    </Child>
    </TransactionProvider>
  );
}

export default App;
