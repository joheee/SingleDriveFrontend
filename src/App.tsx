import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { FileContainer } from './components/FileContainer';
import { Navigation } from './components/Navigation';
import { RefreshContext } from './context/RefreshContext';

const queryClient = new QueryClient()

function App() {
  const [upload, setUpload] = useState(false)
  const [filter, setFilter] = useState('`')

  useEffect(()=> {
    if(filter.length === 0 || !filter.match(/^.*[a-zA-Z0-9][^a-zA-Z0-9]*$/)) setFilter('`')
  },[filter])

  return (
    <QueryClientProvider client={queryClient}>
      <RefreshContext.Provider value={{upload, setUpload, filter, setFilter}}>
        <div className="">
          <Navigation/>

          <FileContainer/>

        </div>
      </RefreshContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
