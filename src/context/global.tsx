import { createContext, useContext, useState } from 'react';

// @ts-ignore 
export const AppContext = createContext();

export function AppWrapper({ children }: any) {
  const [emailkonfirmasi, setEmailkonfirmasi] = useState(false)
  const [islogin, setisLogin] = useState(false)
  return (
    <AppContext.Provider value={
        {islogin, setisLogin, 
          emailkonfirmasi, setEmailkonfirmasi}
        }>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}