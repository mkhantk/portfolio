import Image from "next/image";
import github from "../../public/github.svg";
import linkedin from "../../public/linkedin-color.svg";
import telegram from "../../public/telegram-color.svg";
import x from "../../public/x.svg";
import Link from "next/link";

export default function Footer() {
	return (
		<div className="px-10 py-5 border-t-2 border-pink-500 flex flex-col justify-center items-center">
			<div className="flex gap-10 p-8">
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
			<p>
				&copy; {new Date().getFullYear()} Made with &#10084;&#65039; by Min
				Khant Kyaw
			</p>
		</div>
	);
}
