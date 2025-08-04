export const Data = ({
    OrderId,
    Status,
    TransactionId,
    RefundDate,
    OrderAmount
}) => {
    return (
        <div className="flex items-center text-sm  text-gray-800 p-2">
            <div className="text-cardBg mr-35">{OrderId}</div>
            <div className="flex items-center gap-1 mr-28">
                {Status === "Successful" ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#66FF66" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#66FF66" className="size-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#B0B0B0" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#B0B0B0" className="size-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    )}
                <div className="text-gray-800">{Status}</div>
            </div>
            <div className="mr-40">{TransactionId}</div>
            <div>{RefundDate}</div>
            <div className="ml-auto">{OrderAmount}</div>
        </div>
    )
}