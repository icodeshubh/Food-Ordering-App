import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../data/FoodData'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

function FoodItems() {
  const search= useSelector((state)=> state.search.search)
  const category= useSelector((state)=>state.category.category)
  const handleToast =(name)=> toast.success(`Added ${name} to cart`);

  return (
    <>
    <Toaster position='top-center' reverseOrder={false} />
    <div className='flex flex-wrap gap-8 my-10 justify-evenly'>
    {
      FoodData.filter((food)=>{
        if (category==="All"){
          return food.name.toLowerCase().includes(search.toLowerCase());

        } else{
          return (category === food.category && food.name.toLowerCase().includes(search.toLowerCase()))
        }
      }).map((food)=>(
        <FoodCard 
                key={food.id}
                id={food.id}
                name={food.name}
                img={food.img}
                price={food.price}
                rating={food.rating}
                desc={food.desc}
                handleToast={handleToast}


                
              />

      ))
      
    }
       
        {/* //     return (
        //         <FoodCard 
        //         key={food.id}
        //         id={food.id}
        //         name={food.name}
        //         img={food.img}
        //         price={food.price}
        //         rating={food.rating}
        //         desc={food.desc}
        //         handleToast={handleToast}


                
        //         />
        //     )
        // }) */}
    
    </div>
    </>
  )
}

export default FoodItems