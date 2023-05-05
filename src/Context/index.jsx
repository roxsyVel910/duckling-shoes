import { createContext, useState } from 'react';

export const ShoppinCartContext = createContext()

export const ShoppinCartProvider = ({children}) => {
    const [count, setCount] = useState(0)
    console.log('counte',count )

    return (
        <ShoppinCartContext.Provider value = {{
            count,
            setCount
        }}>
            {children}
        </ShoppinCartContext.Provider>
        
    )

}