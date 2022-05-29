import { createContext } from "react";

interface ContextProps {
	toggleTheme: () => void;
}

const AppContext = createContext({ toggleColorMode: () => {} });

export default AppContext;
