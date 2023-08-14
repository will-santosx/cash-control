import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<div className="w-screen h-screen bg-gradient-to-tr from-sky-400 to-blue-500 flex items-center justify-center">
				<main className="bg-theme-white-primary w-[90%] h-[90%] rounded-md border-2 border-black border-opacity-40 shadow-md p-5 overflow-hidden relative">
					<Header />
					<Main />
					<Footer />
				</main>
			</div>
		</>
	);
}

export default App;
