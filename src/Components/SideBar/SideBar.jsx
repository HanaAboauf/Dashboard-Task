


export default function SideBar() {
return (
    <div className="">
      <div className="container">
      <h1 className=" text-2xl font-semibold mb-5 ms-10 absolute top-6">
          <span className="text-blue-700">Dash</span>Stack
      </h1>
      <div className="flex flex-col gap-5">
      <div className='ms-10'> <i className="fa-solid fa-gauge-high"></i> Dashboard </div>
      <div className='ms-10' > <i className="fa-solid fa-border-all"></i> Products </div>
      <div className='ms-10'> <i className="fa-regular fa-heart"></i> Favourites </div>
      <div className='ms-10'> <i className="fa-regular fa-message"></i> Inbox </div>
      <div className='ms-10'> <i className="fa-solid fa-list-check"></i> Order Lists </div>
      <div className='ms-10'> <i className="fa-solid fa-list"></i> Product Stock </div>
      <div className="h-[2px] bg-gray-200"></div>  
      <h3 className='text-myGrayThree ms-10 font-medium text-sm'>PAGES</h3>
      <div className='ms-10'> <i className="fa-solid fa-gift"></i> Pricing </div>
      <div className='ms-10'> <i className="fa-solid fa-calendar-days"></i> Calender </div>
      <div className='ms-10'> <i className="fa-solid fa-clipboard-list"></i> To Do List </div>
      <div className='ms-10'> <i className="fa-solid fa-user-group"></i>Team </div>
      <div className='ms-10'> <i className="fa-solid fa-money-bill"></i> Invoice </div>
      <div className='ms-10'> <i className="fa-solid fa-chart-simple"></i> UI Elements </div>
      <div className='ms-10'> <i className="fa-regular fa-user"></i> Product Stock </div>
        <div className="ms-10 bg-blue-500 text-white rounded-lg p-3 w-75% relative">
          <span className="rounded-lg rounded-t rounded-b w-1 h-12 bg-blue-500 -left-[40px] top-0 absolute"></span>
           <i className="fa-solid fa-table-cells"></i> Tables 
           </div>
           <div className="h-[2px] bg-gray-200"></div> 
      <div className='ms-10'> <i className="fa-solid fa-gear"></i> Settings</div>
      <div className='ms-10'> <i className="fa-solid fa-power-off"></i> Logout </div>
      </div>


      </div>


    </div>

  );
}
