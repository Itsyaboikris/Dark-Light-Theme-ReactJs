import {createGlobalStyle} from "styled-components";

/**
 * create light and dark themes
 */
export const lightTheme = {
	body: "#fff",
	fontColor: "#fff",
	cardBody: "#000"
}

export const darkTheme = {
	body: "#000",
	fontColor: "#000",
	cardBody: "#fff"
}

/**
 * Create Global Styles
 */

export const GlobalStyles = createGlobalStyle `
	body {
		background-color: ${props => props.theme.body}
	}
`;
