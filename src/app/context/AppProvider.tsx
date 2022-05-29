import { useMemo, useState } from "react";

import { DARK, LIGHT, MODE } from "app/@types/mode-theme";
import AppContext from "./AppContext";

interface Props {
	children?: React.ReactElement | React.ReactElement[];
}

const AppProvider = ({ children }: Props) => {
	const [mode, setMode] = useState<MODE>(LIGHT);

	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === LIGHT ? DARK : LIGHT));
			},
		}),
		[]
	);

	return (
		<AppContext.Provider value={colorMode}>{children}</AppContext.Provider>
	);
};

export default AppProvider;
