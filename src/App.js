import React, { useState, useEffect } from "react";
import Stew from "./img/stew.jpg";
import Noodles from "./img/noodles.jpg";
import Curry from "./img/curry.jpg";
import { HomeSvg, AboutSvg, ContactSvg, ClockSvg, BurgerSvg } from "./Svg";

function App() {
	return (
		// body
		<div className="text-gray-500 font-mono">
			<div className="grid md:grid-cols-3">
				<div className="md:col-span-1 md:flex md:justify-end">
					<nav className="text-right">
						<div className="flex justify-between items-center">
							<h1 className="font-bold uppercase p-4 border-b border-red-100">
								<a
									href="/"
									className="sm:text-red-500 md:text-blue-400 hover:text-gray-600"
								>
									Food Ninja
								</a>
							</h1>
							<div className="px-4 cursor-pointer lg:hidden">
								<BurgerSvg />
							</div>
						</div>

						<ul className="text-sm mt-6 hidden md:block">
							<li className="text-gray-700 uppercase py-1 mr-5">
								<a href="#">
									<span>
										<HomeSvg />
										Home
									</span>
								</a>
							</li>

							<li className="text-gray-700 uppercase py-1 mr-5">
								<a href="#">
									<AboutSvg />
									<span>About</span>
								</a>
							</li>

							<li className="text-gray-700 uppercase py-1 mr-5">
								<a href="#">
									<ContactSvg />
									<span>Contact</span>
								</a>
							</li>
						</ul>
					</nav>
				</div>

				<main className="px-16 py-6  md:col-span-2">
					<div className="flex justify-center md:justify-end ">
						<a
							href="#"
							className="text-blue-500 button border-blue-500 md:border-2 hover:bg-blue-400 hover:text-white transition ease-out duration-500"
						>
							Log in
						</a>
						<a
							href="#"
							className="text-red-500 ml-2 button border-red-500 md:border-2 hover:bg-red-400 hover:text-white transition ease-out duration-500"
						>
							Sign up
						</a>
					</div>

					<header>
						<h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
						<h3 className="text-2xl font-semibold">For Ninjas</h3>
					</header>

					<div>
						<h4 className="font-bold mt-12 pb-2 border-b-2 border-red-200">
							Latest Recipes
						</h4>

						<div className="mt-8 grid lg:grid-cols-3 gap-10 ">
							{/* Card goes here */}
							<div className="card hover:shadow-lg">
								<img
									src={Stew}
									alt="stew"
									className="w-full h-32 sm:h-48 object-cover "
								/>
								<div className="m-4">
									<span className="font-bold">5 Beans Chili Stew </span>
									<span className="block text-gray-500 text-sm">
										Recipe by OG
									</span>
								</div>
								<div className="badge">
									<ClockSvg />
									<span>25 mins</span>
								</div>
							</div>

							<div className="card hover:shadow-lg">
								<img
									src={Noodles}
									alt="stew"
									className="w-full h-32 sm:h-48 object-cover "
								/>
								<div className="m-4">
									<span className="font-bold">Veg Noodles</span>
									<span className="block text-gray-500 text-sm">
										Recipe by OG
									</span>
								</div>
								<div className="badge">
									<ClockSvg />
									<span>25 mins</span>
								</div>
							</div>

							<div className="card hover:shadow-lg">
								<img
									src={Curry}
									alt="stew"
									className="w-full h-32 sm:h-48 object-cover "
								/>
								<div className="m-4">
									<span className="font-bold">Tofu Curry</span>
									<span className="block text-gray-500 text-sm">
										Recipe by OG
									</span>
								</div>
								<div className="badge">
									<ClockSvg />
									<span>25 mins</span>
								</div>
							</div>
						</div>

						<h4 className="font-bold mt-12 pb-2 border-b border-red-200">
							Most Popular
						</h4>

						{/* Card goes here */}
						<div className="mt-8"></div>
					</div>

					<div className="flex justify-center">
						<div className="bg-red-100 button hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">
							Load more...
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}

export default App;
