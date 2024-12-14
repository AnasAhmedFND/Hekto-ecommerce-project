import React from 'react'
import C1 from '../img/a-clint-1.png'
import C2 from '../img/a-clint-2.png'
import C3 from '../img/a-clint-3.png'

const About_client = () => {
  return (
    <>
      <div className="container mx-auto py-10">
        <h2 className='text-center text-2xl font-bold text-orgain font-josefin '>Our Client Say!</h2>
        <div className="flex justify-center gap-4 mt-10">
            <img src={C1} alt="" />
            <img className='relative bottom-4' src={C2} alt="" />
            <img src={C3} alt="" />
        </div>

        <h3 className='font-bold text-xl text-center mt-5'>Selina Gomez</h3>
        <p className='text-center text-[10px] '>Ceo At Webecy Digital</p>
        <p className='mt-5  w-[70%] flex mx-auto text-center pb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor  aliquam lacus volutpat praesent.</p>

      </div>
    </>
  )
}

export default About_client
