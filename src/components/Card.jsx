import React from "react";
import { HiArrowCircleUp, HiArrowCircleDown, HiCash } from "react-icons/hi";

const Card = ({ type, value }) => {
	const formatedValue = value?.toLocaleString("pt-br", {
		minimumFractionDigits: 2,
	});

	switch (type) {
		case "expense":
			return (
				<div
					className={`bg-[#BF4342] w-[14rem] flex flex-col justify-between h-[7.5rem] shadow-md rounded-lg p-3 text-theme-white-primary border-b-[3px] border-b-[#e3211e]`}>
					<div>
						<h1 className="text-2xl">
							R${" "}
							<b>
								<span>{formatedValue || "00,00"}</span>
							</b>
						</h1>
					</div>
					<div className="text-theme-white-secondary flex items-center gap-3">
						<HiArrowCircleDown size={24} />
						<h2>Despesas</h2>
					</div>
				</div>
			);
			break;
		case "profit":
			return (
				<div
					className={`bg-[#7CAE7A] w-[14rem] flex flex-col justify-between h-[7.5rem] shadow-md rounded-lg p-3 text-theme-white-primary border-b-[3px] border-b-[#6fbc6c]`}>
					<div>
						<h1 className="text-2xl">
							R${" "}
							<b>
								<span>{formatedValue || "00,00"}</span>
							</b>
						</h1>
					</div>
					<div className="text-theme-white-secondary flex items-center gap-3">
						<HiArrowCircleUp size={24} />
						<h2>Lucros</h2>
					</div>
				</div>
			);
			break;
		default:
			return (
				<div
					className={`bg-[#53599A] w-[14rem] flex flex-col justify-between h-[7.5rem] shadow-md rounded-lg p-3 text-theme-white-primary border-b-[3px] border-b-[#3f49ae]`}>
					<div>
						<h1 className="text-2xl">
							R${" "}
							<b>
								<span>{formatedValue || "00,00"}</span>
							</b>
						</h1>
					</div>
					<div className="text-theme-white-secondary flex items-center gap-3">
						<HiCash size={24} />
						<h2>Total</h2>
					</div>
				</div>
			);
			break;
	}
};

export default Card;
