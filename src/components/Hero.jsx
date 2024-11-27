import { HERO_CONTENT } from "./../constants/index";
import Profile from "../assets/xswads2.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

import { motion } from "framer-motion";

const container = (delay) => ({
	hidden: { x: -100, opacity: 0 },
	visible: {
		x: 0,
		opacity: 1,
		transition: { duration: 0.5, delay: delay },
	},
});

const IconAnimation = (delay) => ({
	hidden: { y: -100, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: { duration: 0.5, delay: delay },
	},
});

const Hero = () => {
	return (
		<section id="hero">
			<div className="border-b border-neutral-900 pb-[100px] lg:pt-10 lg:pb-[200px] lg:mb-10">
				<div className="flex flex-wrap">
					<div className="w-full lg:w-1/2">
						<div className="flex flex-col items-center lg:items-start">
							<motion.h1
								variants={container(0.2)}
								initial="hidden"
								animate="visible"
								className="pb-16 text-4xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
							>
								Helmi Jamil Ibrahim
							</motion.h1>
							<motion.span
								variants={container(0.4)}
								initial="hidden"
								animate="visible"
								className="bg-gradient-to-r from-blue-400 via-cyan-300 to-gray-300 bg-clip-text text-3xl tracking-tight text-transparent"
							>
								Junior Frontend Developer
							</motion.span>
							<motion.p
								variants={container(0.6)}
								initial="hidden"
								animate="visible"
								className="my-2 max-w-xl py-6 font-light tracking-tighter"
							>
								{HERO_CONTENT}
							</motion.p>
							<div className="m-8 flex items-center justify-center gap-4 text-2xl">
								<motion.a
									whileHover={{ scale: 1.2 }}
									variants={IconAnimation(0.5)}
									initial="hidden"
									animate="visible"
									href="https://www.linkedin.com/in/helmijamilibrahim/"
								>
									<FaLinkedin />
								</motion.a>
								<motion.a
									whileHover={{ scale: 1.2 }}
									variants={IconAnimation(0.4)}
									initial="hidden"
									animate="visible"
									href="https://github.com/JamsterVoz"
								>
									<FaGithub />
								</motion.a>
								<motion.a
									whileHover={{ scale: 1.2 }}
									variants={IconAnimation(0.3)}
									initial="hidden"
									animate="visible"
									href="https://www.instagram.com/helhm_jamil/"
								>
									<FaInstagram />
								</motion.a>
							</div>
						</div>
					</div>
					<div className="w-full lg:w-1/2 lg:p-8">
						<div className="flex justify-center">
							<motion.img
								initial={{ x: 1000, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 1, delay: 0 }}
								src={Profile}
								alt="Helmi Jamil"
								className="rounded-lg"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
