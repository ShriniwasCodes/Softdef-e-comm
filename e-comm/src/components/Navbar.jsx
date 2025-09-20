export default function Navbar() {
	return (
		<nav className="w-full h-16 bg-white shadow flex items-center px-4 md:px-8 justify-between">
			<div className="flex items-center gap-2">
				<span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
					<span className="text-blue-600 font-bold">&#9679;</span>
				</span>
				<span className="font-bold text-xl">E-Comm</span>
			</div>
			<div className="hidden md:flex gap-8 text-sm font-medium">
				<a 
					href="#" 
					className="text-blue-600 border-b-2 border-blue-600 pb-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
					aria-current="page"
				>
					HOME
				</a>
				<a href="#" className="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">BAG</a>
				<a href="#" className="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">SNEAKERS</a>
				<a href="#" className="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">BELT</a>
				<a href="#" className="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">CONTACT</a>
			</div>
			<div className="flex items-center gap-6">
				<span className="text-gray-500 text-sm hidden md:inline">Items <b>0</b> $0.00</span>
				<button 
					className="relative focus:outline-none focus:ring-2 focus:ring-blue-500 p-1 rounded"
					aria-label="Shopping cart"
				>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.5l.375 2.25M6 16.5A2.25 2.25 0 008.25 18.75h7.5A2.25 2.25 0 0018 16.5V6.75A2.25 2.25 0 0015.75 4.5h-7.5A2.25 2.25 0 006 6.75v9.75z" />
					</svg>
					<span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
				</button>
			</div>
		</nav>
	);
}