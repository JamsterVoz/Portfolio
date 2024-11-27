import { FaLaravel, FaPhp } from "react-icons/fa6";
import {
	RiBootstrapLine,
	RiCss3Line,
	RiHtml5Line,
	RiNextjsLine,
	RiReactjsLine,
	RiTailwindCssFill,
} from "react-icons/ri";

const Skills = () => {
	return (
		<div className="border-b border-neutral-800 pb-24">
			<h2 className="my-20 text-center text-4xl">Skills</h2>
			<div className="flex flex-wrap items-center justify-center gap-4">
				<div className="rounded-2xl border-4 border-neutral-800 p-4">
					<RiHtml5Line className="text-7xl text-orange-500" />
				</div>
				<div className="rounded-2xl border-4 border-neutral-800 p-4">
					<RiCss3Line className="text-7xl text-blue-600" />
				</div>
				<div className="rounded-2xl border-4 border-neutral-800 p-4">
					<RiBootstrapLine className="text-7xl text-purple-600" />
				</div>
				<div className="rounded-2xl border-4 border-neutral-800 p-4">
					<RiTailwindCssFill className="text-7xl text-cyan-400" />
				</div>
				<div className="rounded-2xl border-4 border-neutral-800 p-4">
					<FaPhp className="text-7xl text-blue-300" />
				</div>
				<div className="rounded-2xl border-4 border-neutral-800 p-4">
					<FaLaravel className="text-7xl text-red-600" />
				</div>
				<div className="rounded-2xl border-4 border-neutral-800 p-4">
					<RiReactjsLine className="text-7xl text-cyan-400" />
				</div>
				<div className="rounded-2xl border-4 border-neutral-800 p-4">
					<RiNextjsLine className="text-7xl text-slate-600" />
				</div>
			</div>
		</div>
	);
};

export default Skills;
