import React, { createContext, useState } from 'react'
import Loading from '../components/loading/Loading';

export const AppContext=createContext()
function AppProvider({children}) {
  const [playLoading, setPlayLoading] = useState(false);

  return (
    <AppContext.Provider value={{
        loading: {
            play: () => setPlayLoading(true),
            pause: () => setPlayLoading(false),
        },
    }}>
                {playLoading && <Loading />}
                {children}
    </AppContext.Provider>
  )
}

export default AppProvider