import { createContext } from "react";

interface ContextProps {
	toggleTheme: () => void;
}

const AppContext = createContext({} as ContextProps);

export default AppContext;
