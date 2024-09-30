import Image from "next/image";
import Link from "next/link";
import github from "../public/github.svg";
import linkedin from "../public/linkedin-color.svg";
import telegram from "../public/telegram-color.svg";
import x from "../public/x.svg";

export default function Home() {
	return (
		<div id="home" className="h-screen py-20 ">
			<main className="flex flex-col justify-center items-center gap-5 h-full">
				<section className="">
					<p className="text-7xl font-bold sm:text-center py-5 sm:p-10 flex flex-col lg:flex-row gap-5">
						Hi, I'm
						<span className="text-cyan-500"> Min Khant Kyaw.</span>
					</p>
					<p className="text-2xl font-semibold sm:text-center mt-2">
						A <i>Frontend Developer</i> with passion to create awesome webpages.
					</p>
				</section>
				<div className="flex gap-10 p-10">
					<Link href="https://github.com/mkhantk/" target="blank">
						<Image src={github}></Image>
					</Link>
					<Link
						href="https://www.linkedin.com/in/min-khant-kyaw-4648432b2"
						target="blank"
					>
						<Image src={linkedin}></Image>
					</Link>
					<Link href="https://t.me/mkhantk" target="blank">
						<Image src={telegram}></Image>
					</Link>
					<Link href="https://x.com/mkhantk_" target="blank">
						<Image src={x}></Image>
					</Link>
				</div>
			</main>
		</div>
	);
}
