import { createContext } from 'react';

const ShoppinCartContext = createContext()

export const ShoppinCartProvider = ({children}) => {
    return (
        <ShoppinCartContext.Provider>
            {children}
        </ShoppinCartContext.Provider>
        
    )

}