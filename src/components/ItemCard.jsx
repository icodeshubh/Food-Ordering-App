import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { decremenetQty, incremenetQty, removeFromCart } from '../redux/slices/CartSlice';
import toast from 'react-hot-toast';
// import toast, { Toaster } from 'react-hot-toast';

function ItemCard({id,name,price,img,qty}) {
  const dispatch = useDispatch();
  return (
    <>
    <div className=' flex gap-2 shadow-md rounded-lg p-2 mb-3'>
    <MdDelete 
    onClick={()=> {
      dispatch(removeFromCart({id,name,price,img,qty}))
      toast(` ${name} Removed!`,{
        icon: '👋',
      })
  }}

    className='absolute right-7 cursor-pointer
    text-gray-600 hover:text-red-600'
    />


        <img src={img} alt=""  
        
        className='w-[50px] h-[50px]'
        />
        <div className='leading-5'> 
            <h2 className='font-bold text-gray-800'>{name}</h2>
            <div className='flex justify-between'>
                <span className='text-red-500 font-bold'>₹{price}</span>
                <div className='flex justify-center items-center gap-2 absolute right-7'>
                <AiOutlineMinus 
                onClick={()=>
                  qty > 1 ? dispatch(decremenetQty({ id })) : (qty = 0) 
                }
                className="border-2 border-gray-600 text-gray-600 hover:text-black hover:bg-amber-200 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
                />
                <span>{qty}</span>
                <AiOutlinePlus 
                 onClick={()=>
                  qty >= 1 ? dispatch(incremenetQty({ id })) : (qty = 0) 
                }
                className="border-2 border-gray-600 text-gray-600 hover:text-black hover:bg-amber-200 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
                />



                </div>
            </div>

        </div>

    </div>


    
    </>
  )
}

export default ItemCard