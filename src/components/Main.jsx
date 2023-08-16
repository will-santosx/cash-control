import React, { useState } from "react";
import { AiOutlinePlusSquare } from "react-icons/ai";
import Card from "./Card";
import ListItem from "./ListItem";

const Main = () => {
	const [newEntryPage, setNewEntryPage] = useState(false);

	return (
		<main className="flex flex-col justify-between items-start font-base font-light text-theme-white-primary relative w-full h-[85%] md:h-[90%]">
			{newEntryPage ? null : (
				<>
					<div className="w-full flex items-center">
						<div className="bg-theme-white-secondary p-5 ml-8 mr-12 w-[70%] h-[28rem] rounded-md shadow-md">
							<h3 className="text-theme-black-secondary uppercase font-medium">
								Suas Atividades
							</h3>

							<ul className="overflow-auto px-3 w-full h-[80%] mb-4">
								{/* List Items */}
								<ListItem type={"expense"} />
								<ListItem type={"profit"} />
							</ul>
							<button
								onClick={() => setNewEntryPage(!newEntryPage)}
								className="mx-auto transition-all hover:shadow-md hover:scale-110 hover:bg-theme-200 w-[12rem] md:w-[13rem] h-[2.4rem] p-1 bg-theme-100 gap-2 flex items-center justify-center rounded-lg">
								<AiOutlinePlusSquare size={26} />
								Nova Transação.
							</button>
						</div>
						<div className="flex flex-col gap-5">
							<Card type={"profit"} />
							<Card type={"expense"} />
							<Card />
						</div>
					</div>
				</>
			)}
		</main>
	);
};

const AddEntry = () => {
	return;
};

export default Main;
