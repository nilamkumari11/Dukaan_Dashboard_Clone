import { Data } from "./Data"

export const Orders = () => {
    return (
        <div className="bg-white w-251 shadow-md m-7 p-4">
           <div className="flex">
                <div className="flex items-center pl-4 w-75 border-1 border-gray-300 rounded mr-135"> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="size-4.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Order ID or Transactions ID"
                        className="p-2 w-70 outline-none focus:ring-0 text-md"
                    ></input>
                </div>
                <div className="flex items-center border-1 border-gray-300 w-19 rounded text-gray-600 p-2 mr-4">
                    <h2 className="mr-2">Sort</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                    </svg>
                </div>
                <div className="border-1 border-gray-300 w-10 rounded p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                </div>
           </div>
           <div className="flex text-md bg-gray-200 p-2 justify-between text-gray-600 mt-4">
                <h2>Order ID</h2>
                <h2>Status</h2>
                <h2>Transaction ID</h2>
                <h2>Refund Date</h2>
                <h2>Order Amount</h2>
           </div>
            <Data OrderId={"#281209"} Status={"Successful"} TransactionId={"TRX123456"} RefundDate={"Today, 8:45 PM"} OrderAmount={"₹1125.00"}></Data>
            <Data OrderId={"#281210"} Status={"Processing"} TransactionId={"TRX123456"} RefundDate={"Tomorrow, 10:00 AM"} OrderAmount={"₹950.50"}></Data>
            <Data OrderId={"#281211"} Status={"Successful"} TransactionId={"TRX123456"} RefundDate={"Yesterday, 3:30 PM"} OrderAmount={"₹750.00"}></Data>
            <Data OrderId={"#281212"} Status={"Successful"} TransactionId={"TRX123456"} RefundDate={"Today, 11:20 AM"} OrderAmount={"₹2000.00"}></Data>
            <Data OrderId={"#281213"} Status={"Processing"} TransactionId={"TRX123456"} RefundDate={"Tomorrow, 9:00 AM"} OrderAmount={"₹1800.00"}></Data>
            <Data OrderId={"#281214"} Status={"Processing"} TransactionId={"TRX123456"} RefundDate={"Yesterday, 2:00 PM"} OrderAmount={"₹500.00"}></Data>
            <Data OrderId={"#281215"} Status={"Successful"} TransactionId={"TRX123456"} RefundDate={"Today, 10:30 AM"} OrderAmount={"₹3000.00"}></Data>
            <Data OrderId={"#281216"} Status={"Processing"} TransactionId={"TRX123456"} RefundDate={"TTomorrow, 11:30 AM"} OrderAmount={"₹1200.00"}></Data>
            <Data OrderId={"#281217"} Status={"Successful"} TransactionId={"TRX123456"} RefundDate={"Yesterday, 4:00 PM"} OrderAmount={"₹900.00"}></Data>
            <Data OrderId={"#281218"} Status={"Successful"} TransactionId={"TRX123456"} RefundDate={"Today, 9:45 AM"} OrderAmount={"₹1500.00"}></Data>        
        </div>
    )
}