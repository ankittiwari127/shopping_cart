import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { remove } from "../redux/Slices/cartSlice";
const CartItem = ({item,itemIndex}) => {
  const dispatch=useDispatch();
  const removefromcart=()=>{
    dispatch(remove(item.id));
    toast.error("Item removed");
  }
   
  return <div>
    <div className="flex flex-col  items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 outline">
      <div className="h-[140px]">
        <img src={item.image} className="h-full w-full"/>
        </div>   
        <div className="flex flex-col">
        <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-10 mt-1">{item.title}</h1>
        <h1 className="w-40 text-gray-400 font-normal text-[10px] text-left">{item.description.split(" ").slice(0,10).join(" ")+"..."}</h1>
        <div className="flex flex-row justify-between">
         <p className="text-green-600 font-semibold">${item.price}</p>
         <button>
         <div onClick={removefromcart}>
        <MdDelete/>
         </div>
         </button>
         
        </div>
      </div>
    </div>
  </div>;
};

export default CartItem;
