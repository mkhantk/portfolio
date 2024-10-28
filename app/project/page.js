import Image from "next/image";
import ecom from "../../public/E-commerce.png";
import mw from "../../public/Movie-Wizard.png";
import markdown from "../../public/markdown.png";
import rc from "../../public/react-calculator.png";
import react from "../../public/react-color.svg";
import tailwind from "../../public/tailwindcss-color.svg";
import github from "../../public/github.svg";
import external from "../../public/link-external-svgrepo-com.svg";
import loopstudio from "../../public/loopstudios-landing-page.png";
import productList from "../../public/product-list-with-cart.png";

export default function Project() {
    return (
        <div id="project" className="py-10">
            <div className="flex flex-col justify-center items-center gap-8">
                <h1 className="text-5xl font-bold text-center p-10">
                    My Projects
                </h1>
                <section className="grid md:grid-cols-2 gap-12 md:w-5/6 lg:w-4/6">
                    <div
                        id="loop"
                        className="bg-gray-800 p-0 rounded-xl relative"
                    >
                        <div className="blur-content">
                            <Image
                                src={loopstudio}
                                // width={350}
                                placeholder="blur"
                                alt=""
                                className="w-full rounded-t-xl"
                            ></Image>
                            <div className="px-3 m-3">
                                <h2 className="text-xl font-bold mb-3">
                                    Loopstudios Landing Page
                                </h2>
                                <p className="">
                                    A modern landing page focusing on
                                    responsiveness and mobile-friendly approach.
                                </p>
                                <div className="flex justify-normal items-center gap-3 mt-3">
                                    <p>Technologies:</p>
                                    <span>
                                        <Image src={react} alt=""></Image>
                                    </span>
                                    <span>
                                        <Image src={tailwind} alt=""></Image>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="absolute w-full h-full top-0 right-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in flex justify-around items-center">
                            <a
                                href="https://github.com/mkhantk/loopstudios-landing-page"
                                target="blank"
                            >
                                <Image src={github} width={40} alt=""></Image>
                            </a>
                            <a
                                href="https://mkhantk.github.io/loopstudios-landing-page"
                                target="blank"
                            >
                                <Image src={external} width={40} alt=""></Image>
                            </a>
                        </div>
                    </div>
                    <div
                        id="prodList"
                        className="bg-gray-800 p-0 rounded-xl relative"
                    >
                        <div className="blur-content">
                            <Image
                                src={productList}
                                // width={350}
                                placeholder="blur"
                                alt="e-commerce product catalog review"
                                className="w-full rounded-t-xl"
                            ></Image>
                            <div className="px-3 m-3">
                                <h2 className="text-xl font-bold mb-3">
                                    Product List with Cart
                                </h2>
                                <p className="">
                                    A dynamic e-commerce product list with a
                                    fully functional cart. Users can browse
                                    through products, add items to their cart,
                                    and adjust quantities seamlessly.
                                </p>
                                <div className="flex justify-normal items-center gap-3 mt-3">
                                    <p>Technologies:</p>
                                    <span>
                                        <Image src={react} alt=""></Image>
                                    </span>
                                    <span>
                                        <Image src={tailwind} alt=""></Image>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="absolute w-full h-full top-0 right-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in flex justify-around items-center">
                            <a
                                href="https://github.com/mkhantk/product-list-with-cart"
                                target="blank"
                            >
                                <Image src={github} width={40} alt=""></Image>
                            </a>
                            <a
                                href="https://mkhantk.github.io/product-list-with-cart"
                                target="blank"
                            >
                                <Image src={external} width={40} alt=""></Image>
                            </a>
                        </div>
                    </div>
                    <div
                        id="ecom"
                        className="bg-gray-800 p-0 rounded-xl relative"
                    >
                        <div className="blur-content">
                            <Image
                                src={ecom}
                                // width={350}
                                placeholder="blur"
                                alt="e-commerce product catalog review"
                                className="w-full rounded-t-xl"
                            ></Image>
                            <div className="px-3 m-3">
                                <h2 className="text-xl font-bold mb-3">
                                    E-commerce product Catalog
                                </h2>
                                <p className="">
                                    A responsive product page featuring
                                    functions like filtering, search, wishlist,
                                    and add-to-cart.
                                </p>
                                <div className="flex justify-normal items-center gap-3 mt-3">
                                    <p>Technologies:</p>
                                    <span>
                                        <Image src={react} alt=""></Image>
                                    </span>
                                    <span>
                                        <Image src={tailwind} alt=""></Image>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="absolute w-full h-full top-0 right-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in flex justify-around items-center">
                            <a
                                href="https://github.com/mkhantk/ecom"
                                target="blank"
                            >
                                <Image src={github} width={40} alt=""></Image>
                            </a>
                            <a
                                href="https://mkhantk.github.io/ecom"
                                target="blank"
                            >
                                <Image src={external} width={40} alt=""></Image>
                            </a>
                        </div>
                    </div>
                    <div
                        id="mw"
                        className="bg-gray-800 p-0 rounded-xl relative"
                    >
                        <div className="blur-content">
                            <Image
                                src={mw}
                                // width={350}
                                placeholder="blur"
                                alt="movie wizard review"
                                className="w-full rounded-t-xl"
                            ></Image>
                            <div className="px-3 m-3">
                                <h2 className="text-xl font-bold mb-3">
                                    Movie Wizard
                                </h2>
                                <p>
                                    A movie recommendation website that
                                    leverages an external movie API.
                                </p>
                                <div className="flex justify-normal items-center gap-3 mt-3">
                                    <p>Technologies:</p>
                                    <span>
                                        <Image src={react} alt=""></Image>
                                    </span>
                                    <span>
                                        <Image src={tailwind} alt=""></Image>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="absolute w-full h-full top-0 right-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in flex justify-around items-center ">
                            <a
                                href="https://github.com/mkhantk/movie-wizard"
                                target="blank"
                            >
                                <Image src={github} width={40} alt=""></Image>
                            </a>
                            <a
                                href="https://mkhantk.github.io/movie-wizard"
                                target="blank"
                            >
                                <Image src={external} width={40} alt=""></Image>
                            </a>
                        </div>
                    </div>
                    <div
                        id="markdown"
                        className="bg-gray-800 p-0 rounded-xl relative"
                    >
                        <div className="blur-content">
                            <Image
                                src={markdown}
                                // width={350}
                                placeholder="blur"
                                alt="makrdown previewer review"
                                className="w-full rounded-t-xl"
                            ></Image>
                            <div className="px-3 m-3">
                                <h2 className="text-xl font-bold mb-3">
                                    Markdown Previewer
                                </h2>
                                <p>
                                    A simple Markdown Language Previewer, built
                                    for a freeCodeCamp challenge.
                                </p>
                                <div className="flex justify-normal items-center gap-3 mt-3">
                                    <p>Technologies:</p>
                                    <span>
                                        <Image src={react} alt=""></Image>
                                    </span>
                                    <span>
                                        <Image src={tailwind} alt=""></Image>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="absolute w-full h-full top-0 right-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in flex justify-around items-center ">
                            <a
                                href="https://github.com/mkhantk/markdown-previewer"
                                target="blank"
                            >
                                <Image src={github} width={40} alt=""></Image>
                            </a>
                            <a
                                href="https://mkhantk.github.io/markdown-previewer"
                                target="blank"
                            >
                                <Image src={external} width={40} alt=""></Image>
                            </a>
                        </div>
                    </div>
                    <div
                        id="rc"
                        className="bg-gray-800 p-0 rounded-xl relative"
                    >
                        <div className="blur-content">
                            <Image
                                src={rc}
                                // width={350}
                                placeholder="blur"
                                alt="calculator review"
                                className="w-full rounded-t-xl"
                            ></Image>
                            <div className="px-3 m-3">
                                <h2 className="text-xl font-bold mb-3">
                                    Calculator
                                </h2>
                                <p>Simple calculator built using react.</p>
                                <div className="flex justify-normal items-center gap-3 mt-3">
                                    <p>Technologies:</p>
                                    <span>
                                        <Image src={react} alt=""></Image>
                                    </span>
                                    <span>
                                        <Image src={tailwind} alt=""></Image>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="absolute w-full h-full top-0 right-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in flex justify-around items-center">
                            <a
                                href="https://github.com/mkhantk/react-calculator"
                                target="blank"
                            >
                                <Image src={github} width={40} alt=""></Image>
                            </a>
                            <a
                                href="https://mkhantk.github.io/react-calculator/"
                                target="blank"
                            >
                                <Image src={external} width={40} alt=""></Image>
                            </a>
                        </div>
                    </div>
                </section>
                <button className="px-6 py-2 bg-cyan-500 text-black rounded-full hover:bg-pink-200 text-lg my-2">
                    <a href="https://github.com/mkhantk/" target="blank">
                        More on Github
                    </a>
                </button>
            </div>
        </div>
    );
}
