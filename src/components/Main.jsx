import React, { useState } from "react";
import Card from "./Card";
import { AiOutlinePlusSquare } from "react-icons/ai";

const Main = () => {
	const [newEntryPage, setNewEntryPage] = useState(false);

	return (
		<main className="flex flex-col justify-between items-start font-base font-light text-theme-white-primary relative w-full h-[85%] md:h-[90%]">
			{newEntryPage ? null : (
				<>
					<div className="w-full flex">
						<div className="bg-theme-white-secondary p-5 ml-8 w-[70%] h-[28rem] rounded-md">
							<h3 className="text-theme-black-secondary uppercase font-medium">
								Suas Atividades
							</h3>

							<ul className="overflow-auto px-3 w-full h-[calc(100%-20px)]">
								{/* List Items */}

								{/* Profit item */}
								{/*<li className="bg-theme-white-tertiary border-[3px] border-[#7CAE7A] h-12 rounded-md m-2 transition-all hover:scale-105 hover:shadow-md"></li>*/}

								{/* Expenses item */}
								{/*<li className="bg-theme-white-tertiary border-[3px] border-[#BF4342] h-12 rounded-md m-2 transition-all hover:scale-105 hover:shadow-md"></li>*/}
							</ul>
						</div>
						<div className="flex flex-col">
							<Card />
							<Card />
							<Card />
						</div>
					</div>
					<button
						onClick={() => setNewEntryPage(!newEntryPage)}
						className="md:right-0 transition-all hover:shadow-md hover:scale-110 hover:bg-theme-200 md:bottom-10 md:mx-2 md:absolute w-[12rem] md:w-[13rem] h-[2.4rem] p-1 bg-theme-100 gap-2 flex items-center justify-center rounded-lg">
						<AiOutlinePlusSquare size={26} />
						Nova Transação.
					</button>
				</>
			)}
		</main>
	);
};

const AddEntry = () => {
	return;
};

export default Main;
