const Footer = () => {
	return (
		<footer className="absolute bottom-0 left-0 p-3 w-full md:text-left text-center">
			<span className="font-base text-theme-black font-thin italic text-xs">
				Designed and developed by{" "}
				<a
					href="https://github.com/will-santosx"
					target="blank"
					className="underline">
					Willians Santos
				</a>{" "}
				- &copy;2023
			</span>
		</footer>
	);
};

export default Footer;
