import { HeadsetIcon, PlaneTakeoff, ShoppingCart, Smile } from 'lucide-react'
import React from 'react'

function WorkProcess() {
    return (
        <div className='grid sm:grid-cols-4 gap-4'>
            <div className='flex items-center gap-7'>
                <div>
                    <ShoppingCart size={60} className='text-red-600' />
                </div>
                <div>
                    <h3 className='text-xl font-semibold text-gray-700'>Secure Checkout</h3>
                    <p className='text-sm font-medium text-gray-500 mt-1'>Your order is just a few steps away!</p>
                </div>
            </div>
            <div className='flex items-center gap-7'>
                <div>
                    <HeadsetIcon size={60} className='text-red-600' />
                </div>
                <div>
                    <h3 className='text-xl font-semibold text-gray-700'>Customer Support</h3>
                    <p className='text-sm font-medium text-gray-500 mt-1'>We are here to help you!</p>
                </div>
            </div>
            <div className='flex items-center gap-7'>
                <div>
                    <Smile size={60} className='text-red-600' />
                </div>
                <div>
                    <h3 className='text-xl font-semibold text-gray-700'>Satisfaction</h3>
                    <p className='text-sm font-medium text-gray-500 mt-1'>We guarantee your 100% satisfaction</p>
                </div>
            </div>
            <div className='flex items-center gap-7'>
                <div>
                    <PlaneTakeoff size={60} className='text-red-600' />
                </div>
                <div>
                    <h3 className='text-xl font-semibold text-gray-700'>International Shipment</h3>
                    <p className='text-sm font-medium text-gray-500 mt-1'>Orders are shiped seamlessly between countries.</p>
                </div>
            </div>
        </div>
    )
}

export default WorkProcess