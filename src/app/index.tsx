// Components
import AppProvider from "./context/AppProvider";
import Login from "./views/Login/Login";

const App = () => {
	return (
		<AppProvider>
			<Login />
		</AppProvider>
	);
};

export default App;