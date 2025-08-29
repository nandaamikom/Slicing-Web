import SidebarComponent from "../components/Sidebar";   
import NavbarComponent from "../components/navbar";
import CarouselComponent from "../components/Carousel";
import CardComponent from "../components/Card"; 
import TableComponent from "../components/Table";

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
                <div className="flex flex-col w-full bg-gray-100 p-6 space-y-6">
                    {/* Carousel section */}
                    {/* <div className="bg-white rounded-lg shadow-sm p-6">
                        <h1 className="text-2xl font-bold text-gray-800 mb-6">Welcome to Our Website</h1>
                        <CarouselComponent />
                    </div>
                     */}
                    {/* Cards section - side by side */}
                    <div className="justify-center flex flex-col-1 space-x-12 bg-white p-6">
                        <div className="shadow-2xl">
                            <CardComponent />
                        </div>
                        <div className="shadow-2xl">
                            <CardComponent />
                        </div>
                    </div>
                    
                    {/* Table section - positioned directly below cards */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Product Inventory</h2>
                        <TableComponent />
                    </div>
                </div>
            </div>
        </div>
    );
}
