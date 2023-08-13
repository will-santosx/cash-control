import { BiCoinStack } from "react-icons/bi";

const Header = () => {
	return (
		<header className="md:p-1 pt-2">
			<div className="text-theme-300 flex flex-col md:flex-row items-center gap-2">
				<BiCoinStack size={30} className="max-sm:scale-125" />
				<h1 className="uppercase font-logo-title md:text-2xl text-xl">
					CashControl
				</h1>
			</div>
		</header>
	);
};

export default Header;
