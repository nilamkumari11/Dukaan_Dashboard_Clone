export const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="bg-white shadow-sm h-18 flex justify-between items-center px-6 fixed right-0 top-0 z-10 left-0 lg:left-55 ">
      <button className="lg:hidden text-gray-700 mr-4" onClick={toggleSidebar}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <div className="flex items-center">
            <div className="text-2xl font-semibold pl-2 pr-3">Payouts</div>
        <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
        </div>
        <div className="text-gray-700 text-sm ml-1 hidden md:block">How it works</div>
      </div>

        <div className="flex items-center bg-gray-100 pl-2 "> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input
                type="text"
                placeholder="Search features, tutorials,etc."
                className="p-3 bg-gray-100 w-20 sm:w-70 outline-none focus:ring-0"
            ></input>
        </div>
        <div className="flex items-center">
            <div className="bg-gray-200 p-2 rounded-full m-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#555555" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg>
            </div>
            <div className="bg-gray-200 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#555555" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>

        </div>
    
    </div>
  );
};

export default Navbar;
