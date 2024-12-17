import React from 'react'

const Faq = () => {
  return (
    <>
      <div className="container mx-auto  md:flex justify-between py-10 px2">
        <div className=" md:w-[48%] py-5 px-2">
            <h2 className='font-bold font-josefin text-2xl text-orgain '>Generel Information</h2>
            <h4 className='font-bold mt-10 '>Eu dictumst cum at sed euismood condimentum?</h4>
            <p className='mt-3 text-[13px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed <br /> tristique mollis vitae, consequat gravida sagittis.</p>

            <h4 className='font-bold mt-8 '>Magna bibendum est fermentum eros.</h4>
            <p className='mt-3 text-[13px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed <br /> tristique mollis vitae, consequat gravida sagittis.</p>

            <h4 className='font-bold mt-8'>Odio muskana hak eris conseekin sceleton?</h4>
            <p className='mt-3 text-[13px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed <br /> tristique mollis vitae, consequat gravida sagittis.</p>

            <h4 className='font-bold mt-8'>Elit id blandit sabara boi velit gua mara?</h4>
            <p className='mt-3 text-[13px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed <br /> tristique mollis vitae, consequat gravida sagittis.</p>

        </div>

        <div className=" md:w-[48%] py-5 px-2">
            <h2 className='font-bold text-xl font-josefin mt-10 text-orgain'>Ask a Question</h2>

            <input className='w-full border-2 rounded-md outline-none py-1 mt-20 px-2' type="text" placeholder='Your Name*' />
            <input className='w-full border-2 rounded-md outline-none py-1 px-2 mt-10' type="text" placeholder='Subject*' />
            <textarea className='w-full border-2 rounded-md outline-none px-2 mt-10' name="message" id="message" placeholder='Type Your Message'></textarea>

            <button className='border bg-biguni py-2 px-8 rounded-sm mt-10 text-white '>Send Mail</button>
        </div>

      </div>
    </>
  )
}

export default Faq
