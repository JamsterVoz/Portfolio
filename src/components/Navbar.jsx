import { useState } from "react";
import Logo from "../assets/sanskrukpng.png";
import { motion } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const IconAnimation = (delay) => ({
	hidden: { x: 100, opacity: 0 },
	visible: {
		x: 0,
		opacity: 1,
		transition: { duration: 0.5, delay: delay },
	},
});

const HAnimation = (delay) => ({
	hidden: { y: -30, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: { duration: 0.2, delay: delay },
	},
});

const Navbar = () => {
	// State to toggle the mobile menu
	const [isOpen, setIsOpen] = useState(false);

	// Toggle the menu state
	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<nav className="mb-20 flex items-center justify-between py-6 lg:pr-[4xrem]">
			<div className="hidden md:flex flex-shrink-0 items-center">
				<img className="mx-2 w-10" src={Logo} alt="Logo" />
			</div>
			<div className="hidden md:flex m-8 items-center justify-center gap-14">
				<motion.a
					whileHover={{ scale: 1.2 }}
					variants={IconAnimation(0.2)}
					initial="hidden"
					animate="visible"
					href="#About"
				>
					<h2 className="text-[17px]">About</h2>
				</motion.a>
				<motion.a
					whileHover={{ scale: 1.2 }}
					variants={IconAnimation(0.3)}
					initial="hidden"
					animate="visible"
					href="#Experiences"
				>
					<h2 className="text-[17px]">Experience</h2>
				</motion.a>
				{/* <motion.a
					whileHover={{ scale: 1.2 }}
					variants={IconAnimation(0.4)}
					initial="hidden"
					animate="visible"
					href="#Projects"
				>
					<h2 className="text-[17px]">Projects</h2>
				</motion.a> */}
				<motion.a
					whileHover={{ scale: 1.2 }}
					variants={IconAnimation(0.5)}
					initial="hidden"
					animate="visible"
					href="#Contact"
				>
					<h2 className="text-[17px]">Contact</h2>
				</motion.a>
			</div>

			{/* Mobile menu and button combined */}
			<div className="md:hidden w-full">
				{/* Combined container with shared background */}
				<motion.div
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					className={`absolute top-0 left-0 right-0 flex flex-col items-center p-4 ${
						isOpen ? "bg-gray-900/80" : "bg-transparent"
					}`}
				>
					{/* Hamburger menu button */}
					<button onClick={toggleMenu} className="w-full flex justify-end">
						{isOpen ? (
							<HiOutlineX className="w-8 h-8" />
						) : (
							<HiOutlineMenu className="w-8 h-8" />
						)}
					</button>

					{/* Mobile menu content */}
					{isOpen && (
						<motion.div
							animate={{ opacity: 1, y: 0 }}
							className="absolute bg-gradient-to-b from-gray-900/90 to-gray-950 top-16 left-0 right-0 flex flex-col items-center shadow-lg p-10 rounded-b-xl"
						>
							<motion.a
								whileHover={{ scale: 1.2 }}
								variants={HAnimation(0.1)}
								initial="hidden"
								animate="visible"
								className="w-full text-center p-4 rounded-lg mb-4"
								href="#"
								onClick={toggleMenu} // Close menu on click
							>
								<h2 className="text-[17px] text-white">About</h2>
							</motion.a>
							<motion.a
								whileHover={{ scale: 1.2 }}
								variants={HAnimation(0.2)}
								initial="hidden"
								animate="visible"
								className="w-full text-center p-4 rounded-lg mb-4"
								onClick={toggleMenu}
							>
								<h2 className="text-[17px] text-white">Experience</h2>
							</motion.a>
							<motion.a
								whileHover={{ scale: 1.2 }}
								variants={HAnimation(0.3)}
								initial="hidden"
								animate="visible"
								className="w-full text-center p-4 rounded-lg mb-4"
								onClick={toggleMenu}
							>
								<h2 className="text-[17px] text-white">Projects</h2>
							</motion.a>
							<motion.a
								whileHover={{ scale: 1.2 }}
								variants={HAnimation(0.4)}
								initial="hidden"
								animate="visible"
								className="w-full text-center p-4 rounded-lg"
								onClick={toggleMenu}
							>
								<h2 className="text-[17px] text-white">Contact</h2>
							</motion.a>
						</motion.div>
					)}
				</motion.div>
			</div>
		</nav>
	);
};

export default Navbar;
