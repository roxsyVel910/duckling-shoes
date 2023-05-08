import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppinCartContext } from '../../Context'


import './style.css'
const ProductDetail = () => {

    const context = useContext(ShoppinCartContext)
    console.log('product to show', context.productToShow)

    return (
    <aside 
     className={`${context.isProductDetailOpen ? 'flex' : 'hidden'}product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`} >
    <div className='flex justify-between items-center'>
        <h2 className='font-medium text-xl'> Detail </h2>
        <div>
        <XMarkIcon className="h-6 w-6 text-black-500" />
    </div>
    </div>

    </aside>
    )

}

export default ProductDetail