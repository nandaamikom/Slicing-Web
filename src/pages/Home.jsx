import SidebarComponent from "../components/Sidebar";   
import NavbarComponent from "../components/Navbar";
import CarouselComponent from "../components/Carousel";
import CardComponent from "../components/Card"; 
import TableComponent from "../components/Table";
import { Datepicker } from "flowbite-react";
import { HiArchiveBox, HiArrowDownTray, HiArrowUpTray } from "react-icons/hi2";
import { HiAdjustments, HiClipboard, HiClipboardList, HiClock, HiCube, HiExclamation, HiExclamationCircle, HiInbox } from "react-icons/hi";

export default function Home() {
    return (
        <div className="min-h-screen w-full flex flex-col">
            {/* Navbar at the top */}
            <NavbarComponent />
            
            {/* Main content area with sidebar and content */}
            <div className="flex flex-1">
                {/* Sidebar on the left */}
                <div className="min-h-screen">
                    <SidebarComponent />
                </div>
                
                {/* Main content area */}
                <div className="flex flex-col w-full bg-gray-100 p-6 space-y-2">
                    {/* Welcome message */}
                    <div className="bg-white rounded-lg shadow-sm p-6 flex items-center space-x-4">
                        <img 
                          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" 
                          className="w-12 h-12 rounded-full"
                          alt="User Avatar"
                        />
                        <div>
                          <h1 className="text-2xl font-bold text-gray-800 mb-1">Selamat Datang!</h1>
                          <p className="text-gray-600">Selamat datang di sistem manajemen inventaris Anda.</p>
                        </div>
                    </div>
                    
                    {/* Cards section - 2 cards per row, horizontally centered */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <div className="flex flex-col mb-4">
                          <h2 className="text-2xl font-bold text-gray-800 mb-4">Dashboard Overview</h2>
                          <Datepicker className="w-38 mt-4" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
                            <div className="w-full max-w-sm rounded-lg shadow-2xl transform transition duration-200 hover:scale-105 hover:shadow-lg">
                                <CardComponent showImage={false} title="Total Barang" logo={<HiCube className="w-5 h-5 text-blue-500" />} />
                            </div>
                            <div className="w-full max-w-sm rounded-lg shadow-2xl transform transition duration-200 hover:scale-105 hover:shadow-lg">
                                <CardComponent showImage={false} title="Jumlah Stok" logo={<HiClipboardList className="w-5 h-5 text-green-500" />} />
                            </div>
                            <div className="w-full max-w-sm rounded-lg shadow-2xl transform transition duration-200 hover:scale-105 hover:shadow-lg">
                                <CardComponent showImage={false} title="Barang Masuk" logo={<HiArrowDownTray className="w-5 h-5 text-yellow-500" />} />
                            </div>
                            <div className="w-full max-w-sm rounded-lg shadow-2xl transform transition duration-200 hover:scale-105 hover:shadow-lg">
                                <CardComponent showImage={false} title="Barang Keluar" logo={<HiArrowUpTray className="w-5 h-5 text-red-500" />} />
                            </div>
                            <div className="w-full max-w-sm rounded-lg shadow-2xl transform transition duration-200 hover:scale-105 hover:shadow-lg">
                                <CardComponent showImage={false} title="Stok sedikit" logo={<HiExclamationCircle className="w-5 h-5 text-orange-500" />} />
                            </div>
                            <div className="w-full max-w-sm rounded-lg shadow-2xl transform transition duration-200 hover:scale-105 hover:shadow-lg">
                                <CardComponent showImage={false} title="Kadaluarsa" logo={<HiClock className="w-5 h-5 text-purple-500 " />} />
                            </div>
                        </div>
                    </div>
                    
                    {/* Table section - positioned directly below cards */}
                    {/* <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Total Barang</h2>
                        <TableComponent />
                    </div>
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Jumlah Stok Keseluruhan</h2>
                        <TableComponent />
                    </div>
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Barang Masuk Hari Ini</h2>
                        <TableComponent />
                    </div> */}
                </div>
            </div>
        </div>
    );
}
