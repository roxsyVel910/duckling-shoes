import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppinCartContext } from "../../Context";

import "./style.css";
const ProductDetail = () => {
  const context = useContext(ShoppinCartContext);
  console.log("product to show", context.productToShow);

  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      }product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl"> Detail </h2>
        <div>
          <XMarkIcon className="h-6 w-6 text-black-500" />
        </div>
        <figure className="px-6">
            <img className="w-full h-full rounded-lg"
            src={context.productToShow.images} 
            alt={context.productToShow.title} />
        </figure>
        <p className='flex flex-col p-6'>
            <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
            <span className='font-medium text-md'>${context.productToShow.title}</span>
            <span className='font-light text-sm'>${context.productToShow.description}</span>
        </p>
      </div>
    </aside>
  );
};

export default ProductDetail;
