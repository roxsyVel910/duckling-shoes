import { createContext, useState } from 'react';

export const ShoppinCartContext = createContext()

export const ShoppinCartProvider = ({children}) => {
    const [count, setCount] = useState(0)
    // Porduct Detail, Open/close
    const [isProducDetailOPen, setIsProducDetailOPen] = useState(false)
   // console.log('counte',count )
    const openProductDetail = () => setIsProducDetailOPen(true)
    const closeProductDetail = () => setIsProducDetailOPen(false)
    
    //Product Detail, Show product
    const [productToShow, setProductToShow] = useState({})

    
    return (
        <ShoppinCartContext.Provider value = {{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProducDetailOPen,
            productToShow,
            setProductToShow
        }}>
            {children}
        </ShoppinCartContext.Provider>
        
    )

}