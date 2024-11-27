import AboutPic from "../assets/xswads2.png";
import { ABOUT_TEXT, ABOUT_TEXT2 } from "../constants";
import { motion } from "framer-motion";

const About = () => {
	return (
		<section id="About" className="pt-5">
			<div className="border-b border-neutral-900 pb-4">
				<h1 className="my-20 text-center text-4xl">
					About
					<span className="text-neutral-500"> Me</span>
				</h1>
				{/* <div className="flex flex-wrap">
				<div className="w-full">
					<div className="flex flex-col items-center lg:mt-16 lg:items-start justify-center lg:justify-start h-full">
						<p className="mt-2 py-10">{ABOUT_TEXT}</p>
						<p className="">{ABOUT_TEXT2}</p>
					</div>
				</div>
			</div> */}
				<div className="flex flex-wrap">
					<motion.div
						whileInView={{ opacity: 1, x: 0 }}
						initial={{ opacity: 0, x: -100 }}
						transition={{ duration: 0.5 }}
						className="w-full lg:w-1/2 lg:p-8"
					>
						<div className="flex items-center justify-center">
							<img className="rounded-lg" src={AboutPic} alt="About Me" />
						</div>
					</motion.div>
					<div className="w-full lg:w-1/2">
						<div className="flex flex-col items-center lg:mt-16 lg:items-start justify-center lg:justify-start h-full">
							<p className="mt-2 max-w-xl py-10">{ABOUT_TEXT}</p>
							<p className="max-w-xl ">{ABOUT_TEXT2}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
