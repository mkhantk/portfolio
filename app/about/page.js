import Image from "next/image";
import html from "../../public/html5-color.svg";
import css from "../../public/css3-color.svg";
import js from "../../public/javascript-color.svg";
import react from "../../public/react-color.svg";
import tailwind from "../../public/tailwindcss-color.svg";
// import bg from "../public/blob-scene-haikei.svg";
import next from "../../public/nextdotjs-color.svg";

export default function About() {
	return (
		<div id="about" className="h-screen ">
			<section className="flex flex-col justify-center items-center gap-8 h-full">
				<h1 className="text-5xl font-bold text-center sm:p-10">who am i</h1>
				<p className="text-start lg:w-1/2 md:w-4/6 text-xl">
					Greetings, my name is
					<span className="text-cyan-500"> Min Khant Kyaw</span>. I&apos;m a
					self-taught web developer from Myanmar, passionate about building
					modern, responsive websites and web applications. I learned
					programming through open-source platforms like The Odin Project and
					freeCodeCamp, and have developed strong skills in
					<span className="text-cyan-500"> HTML</span>,
					<span className="text-cyan-500"> CSS</span>,
					<span className="text-cyan-500"> JavaScript</span>,
					<span className="text-cyan-500"> React</span>,
					<span className="text-cyan-500"> Tailwind CSS</span>, and
					<span className="text-cyan-500"> Next.js</span>.
				</p>
				<p className="text-start lg:w-1/2 md:w-4/6 text-xl">
					I&apos;m a graduate from Pathein University with Bachelors Degree in
					English. Since then, I&apos;ve shifted my focus toward web development
					full-time, continuously improving my skills. I&apos;m also proficient
					in
					<span className="text-cyan-500"> Git</span>,
					<span className="text-cyan-500"> GitHub</span>, and
					<span className="text-cyan-500"> Linux</span>, and love contributing
					to open-source communities. My journey in tech is driven by curiosity
					and the desire to create impactful user experiences.
				</p>
				<div className="flex justify-center items-center gap-5 text-xl">
					<span className="">My go-to techs are</span>
					<Image src={html} alt=""></Image>
					<Image src={css} alt=""></Image>
					<Image src={js} alt=""></Image>
					<Image src={react} alt=""></Image>
					<Image src={tailwind} alt=""></Image>
				</div>
			</section>
		</div>
	);
}
