export default function Footer() {
	return (
		<footer className="w-full bg-blue-50 text-gray-700 py-8 mt-8 border-t">
			<div className="max-w-[1440px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
				<div>
					<div className="font-bold text-lg mb-2">E-Comm</div>
					<p className="text-xs mb-4">This is a Softdef e-commerce website created by Shriniwas Tawate</p>
				</div>
				<div>
					<div className="font-semibold mb-2">Information</div>
					<ul className="text-xs space-y-1">
						<li>About Us</li>
						<li>Information</li>
						<li>Privacy Policy</li>
						<li>Terms & Conditions</li>
					</ul>
				</div>
				<div>
					<div className="font-semibold mb-2">Service</div>
					<ul className="text-xs space-y-1">
						<li>About Us</li>
						<li>Information</li>
						<li>Privacy Policy</li>
						<li>Terms & Conditions</li>
					</ul>
				</div>
				<div>
					<div className="font-semibold mb-2">My Account</div>
					<ul className="text-xs space-y-1">
						<li>About Us</li>
						<li>Information</li>
						<li>Privacy Policy</li>
						<li>Terms & Conditions</li>
					</ul>
				</div>
			</div>
			<div className="max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center mt-8 border-t pt-4 text-xs">
				<div>Shriniwas Tawate © All Rights Reserved 2025.</div>
				<div className="flex gap-2 mt-2 md:mt-0">
					<img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-4" />
					<img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" className="h-4" />
					<img src="https://www.citypng.com/public/uploads/preview/transparent-hd-paypal-logo-701751694777788ilpzr3lary.png" alt="PayPal" className="h-6" />
				</div>
			</div>
		</footer>
	);
}