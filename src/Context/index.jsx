import { createContext, useState } from 'react';

export const ShoppinCartContext = createContext()

export const ShoppinCartProvider = ({children}) => {
    const [count, setCount] = useState(0)
    const [isProducDetailOPen, setIsProducDetailOPen] = useState(false)
    console.log('counte',count )
    const openProductDetail = () => setIsProducDetailOPen(true)
    const closeProductDetail = () => setIsProducDetailOPen(false)
    return (
        <ShoppinCartContext.Provider value = {{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProducDetailOPen
        }}>
            {children}
        </ShoppinCartContext.Provider>
        
    )

}