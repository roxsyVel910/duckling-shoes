import { XMarkIcon } from "@heroicons/react/24/solid";

const OrdersCard = (props) => {
  const { totalPrice, totalProducts} = props;





  return (
    <div className="flex justify-between item-center mb-3 boder border-black">
     <p>
        <span>01.02.23</span>
        <span>{totalPrice}</span>
        <span>{totalProducts}</span>
     </p>
    
    </div>
  );
};
export default OrdersCard;
