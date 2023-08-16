const ListItem = ({ type }) => {
	const listItemClass =
		type === "profit"
			? "bg-theme-white-tertiary border-[3px] border-[#7CAE7A] h-12 rounded-md m-2 transition-all hover:scale-105 hover:shadow-md"
			: "bg-theme-white-tertiary border-[3px] border-[#BF4342] h-12 rounded-md m-2 transition-all hover:scale-105 hover:shadow-md";

	return <li className={listItemClass}></li>;
};
export default ListItem;
