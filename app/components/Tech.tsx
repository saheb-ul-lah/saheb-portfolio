"use client";
import { technologies } from "@/app/constants";
import { SectionWrapper } from "./HigherOrderComponents";
import { BallCanvas } from "./canvas";

const Tech = () => {
	return (
		<div className="flex flex-row flex-wrap justify-center gap-10">
			{technologies.map((technology) => (
				<div className="w-20 h-20" key={technology.name}>
					<BallCanvas icon={technology.icon} />
				</div>
			))}
		</div>
	);
};

export default SectionWrapper(Tech, "tech");
