import { createContext, useState } from 'react';

export const ShoppinCartContext = createContext()

export const ShoppinCartProvider = ({children}) => {
    const [count, setCount] = useState(0)

    // Porduct Detail, Open/close
    const [isProductDetailOPen, setIsProductDetailOPen] = useState(false)
   // console.log('counte',count )
    const openProductDetail = () => setIsProductDetailOPen(true)
    const closeProductDetail = () => setIsProductDetailOPen(false)
    
    //Product Detail, Show product
    const [productToShow, setProductToShow] = useState({})

    
    return (
        <ShoppinCartContext.Provider value = {{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOPen,
            productToShow,
            setProductToShow
        }}>
            {children}
        </ShoppinCartContext.Provider>
        
    )

}