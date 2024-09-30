"use client";
import Image from "next/image";
import Link from "next/link";
import bars from "../../../public/bars.svg";
import cross from "../../../public/cross.svg";
import { useState } from "react";

export default function NavBar() {
	const [isOpen, setIsOpen] = useState(false);

	function handleClick(e) {
		console.log(e.target);
		setIsOpen((prev) => !prev);
	}
	return (
		<div className="m-auto flex gap-5 justify-between p-6 sticky top-0 z-50 bg-neutral-900 border-b-2 border-pink-500 ">
			<Link
				href="/"
				className="text-lg font-semibold mr-auto hover:text-pink-500"
			>
				minkhantkyaw
			</Link>
			<div
				id="linkWrap"
				className={`absolute flex flex-col-reverse sm:flex-row justify-end items-start gap-10 sm:gap-5 right-0 top-0 px-5 py-7 w-2/3 h-screen transition-all duration-300 sm:bg-transparent ${
					isOpen ? "bg-neutral-800 " : "bg-transparent pointer-events-none"
				}`}
			>
				<div
					id="links"
					className={`flex flex-col gap-10 pointer-events-auto sm:flex sm:flex-row sm:gap-5 ${
						isOpen ? "flex" : "hidden "
					}`}
				>
					<Link href="#home" className="text-lg hover:text-pink-500 ">
						HOME
					</Link>
					<Link href="#about" className="text-lg hover:text-pink-500  ">
						ABOUT
					</Link>
					<Link href="#project" className="text-lg hover:text-pink-500  ">
						PROJECTS
					</Link>
					<Link href="#contact" className="text-lg hover:text-pink-500 ">
						CONTACT
					</Link>
				</div>
				<div className="sm:hidden ml-auto">
					<button onClick={handleClick} className="pointer-events-auto">
						<Image src={isOpen ? cross : bars} alt=""></Image>
					</button>
				</div>
			</div>
		</div>
	);
}
