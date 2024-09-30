"use client";
import emailjs from "emailjs-com";
import { useState, useRef } from "react";
// import plugin from "tailwindcss";

export default function Contact() {
	const form = useRef();
	const [state, setState] = useState("");
	const service_id = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
	const template_id = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
	const public_key = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm(service_id, template_id, form.current, public_key).then(
			() => {
				// console.log("SUCCESS!");
				setState("Message sent successfully!");
				form.current.reset();
				setTimeout(() => {
					setState(""); // Clear the message after 1 second
				}, 1000);
			},
			(error) => {
				setState("Failed to send message. Please try again.");
				setTimeout(() => {
					setState(""); // Clear the message after 1 second
				}, 1000);
				// console.log("FAILED...", error.text);
				// console.log(public_key);
			}
		);
	};
	return (
		<div id="contact" className="p-5">
			<div className="sm:w-2/3 md:w-4/6 lg:w-1/3 m-auto">
				<header className="text-center text-5xl font-bold p-10">
					Get In Touch
				</header>
				{/* <p>Feel free to talk to me</p> */}
				<form
					ref={form}
					method="POST"
					className="grid grid-cols-2 gap-8 my-5"
					onSubmit={sendEmail}
				>
					<div className="col-span-2 sm:col-span-1">
						<label htmlFor="first">First Name</label>
						<div className="mt-2.5">
							<input
								type="text"
								name="first_name"
								id="first_name"
								placeholder="first_name"
								className="w-full rounded-md h-8 px-3 py-2 border-0 text-gray-900 shadow-sm ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600"
								required
							/>
						</div>
					</div>

					<div className="col-span-2 sm:col-span-1">
						<label htmlFor="last">Last Name</label>
						<div className="mt-2.5">
							<input
								type="text"
								name="last_name"
								id="last_name"
								placeholder="last_name"
								className="w-full rounded-md h-8 px-3 py-2 border-0 text-gray-900 shadow-sm ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 required"
								required
							/>
						</div>
					</div>

					<div className="col-span-2">
						<label htmlFor="email">Email Address</label>
						<div className="mt-2.5">
							<input
								type="email"
								name="email"
								id="email"
								placeholder="email"
								className="w-full rounded-md h-8 px-3 py-2 border-0 text-gray-900 shadow-sm ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 required"
								required
							/>
						</div>
					</div>

					<div className="col-span-2">
						<label htmlFor="subject">Subject</label>
						<div className="mt-2.5">
							<input
								type="subject"
								name="subject"
								id="subject"
								placeholder="subject"
								className="w-full rounded-md h-8 px-3 py-2 border-0 text-gray-900 shadow-sm ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 required"
								required
							/>
						</div>
					</div>

					<div className="col-span-2">
						<label htmlFor="message">Message</label>
						<div className="mt-2.5">
							<textarea
								name="message"
								id="message"
								placeholder="message"
								rows={4}
								className="w-full rounded-md px-3 py-2 border-0 text-gray-900 shadow-sm ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 required"
								required
							></textarea>
						</div>
					</div>
					<div className="col-span-2 m-auto">
						<button
							type="submit"
							className="px-6 py-2 bg-cyan-500 rounded-full text-neutral-900 hover:bg-pink-200 text-xl"
						>
							Send
						</button>
					</div>
				</form>
				{state && <p className="text-cyan-500 text-center my-2">{state}</p>}
			</div>
		</div>
	);
}
