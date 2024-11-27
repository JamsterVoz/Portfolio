import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const itemVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: { opacity: 1, y: 0 },
};

const Experiences = () => {
	return (
		<section id="Experiences" className="pt-5">
			<div className="border-b border-neutral-900 pb-4">
				<h2 className="my-20 text-center text-4xl">Experience</h2>
				<div>
					{EXPERIENCES.map((experience, index) => (
						<div key={index} className="mb-8 flex flex-wrap lg:justify-center">
							<div className="w-full lg:w-1/4">
								<p className="mb-2 text-sm text-neutral-400">
									{experience.year}
								</p>
							</div>
							<div className="w-full max-w-xl lg:w-3/4">
								<h6 className="mb-2 font-semibold">
									{experience.role} -{" "}
									<span className="text-sm text-purple-100">
										{experience.company}
									</span>
								</h6>
								<p className="mb-4 text-neutral-400">
									{experience.description}
								</p>
								{experience.technologies.map((tech, index) => (
									<motion.span
										key={index}
										variants={itemVariants}
										initial="hidden"
										whileInView="visible"
										transition={{
											delay: index * 0.1, // Delay based on array index
											duration: 0.5, // Animation duration
										}}
										whileHover="hover" // Trigger the hover state
										className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
									>
										{tech}
									</motion.span>

									//adding HREF
								// 	{EXPERIENCES.map((items, index) => (
								// 	<motion.a
								// 		key={index}
								// 		variants={itemVariants}
								// 		initial="hidden"
								// 		whileInView="visible"
								// 		transition={{
								// 			delay: index * 0.2, // Delay based on array index
								// 			duration: 0.5, // Animation duration
								// 		}}
								// 		whileHover="hover" // Trigger the hover state
								// 		className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
								// 		href={items.hrefs}
								// 	>
								// 		{items.technologies}
								// 	</motion.a>
								// ))}
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Experiences;
