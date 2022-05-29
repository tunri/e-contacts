import { useCallback, useState } from "react";
import { DARK, LIGHT, MODE } from "app/@types/mode-theme";

const useMode = (initialValue: MODE = LIGHT) => {
	const [state, setState] = useState<MODE>(initialValue);

	const isLight = state === LIGHT;

	const toggleMode = useCallback(
		() => setState(isLight ? DARK : LIGHT),
		[isLight]
	);

	return {
		isLight,
		toggleMode,
		mode: state,
	};
};

export default useMode;
