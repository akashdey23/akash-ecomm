import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler = ()=>{
        event.preventDefault();
    }

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now and get 20% off.</p>
        <p className='text-gray-400 mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, laboriosam?</p>
        <form className='w-full sm:w-1/2 flex items-center mx-auto my-6 border pl-3'>
            <input type='text' placeholder='Enter your Email' className='w-full sm:flex-1 outline-none' required />
            <button type='submit' className='bg-black text-cs text-white px-10 py-4 rounded-lg sm:rounded-xl w-full sm:w-auto ' onClick={onSubmitHandler}>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsletterBox