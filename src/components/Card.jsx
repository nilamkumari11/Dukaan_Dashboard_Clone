export const Card = ({
    title,
    orderCount, 
    amount
}) => { 
    return <div className="bg-white rounded-md shadow-sm p-4 w-80 h-30">
        <div className="text-gray-700 flex items-center mb-2">
            {title} 
            <div className="ml-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
            </div>
        </div>
        <div className='flex justify-between p-2 items-center '>
               <div className="font-semibold text-3xl">
                  ₹ {amount}
               </div>
               {orderCount ? <div className="flex cursor-pointer underline decoration-blue-500 font-medium flex flex-col">
                    <div className='flex  items-center'>
                        <div className="text-blue-800 text-md">
                            {orderCount} orders(s) 
                        </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="blue" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                    </div>
                </div> : null }
                
        </div>
    </div>
}