import React, {useState} from "react"
import './App.css';
import styled, {ThemeProvider} from "styled-components";
import {lightTheme, darkTheme, GlobalStyles} from "./Themes/theme.js"

const StyledApp = styled.div`
	color: ${(props) => props.theme.fontColor}

`;

const Styles = styled.div`
	.card {
		box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
		transition: 0.3s;
		width: 40%;
		background-color: ${(props => props.theme.cardBody)};
		border-radius: 0.3em;
		padding: 3em;

		position: absolute;
		top: calc(32%);
		left: calc(30%);
	}
	
	.card:hover {
		box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
	}

	.heading{
		text-align: center;
	}

	body {
		position: relative;
	}

	.toggleBtn {
		display:inline-block;
		padding:0.35em 1.2em;
		border:0.1em solid #FFFFFF;
		margin:0 0.3em 0.3em 0;
		border-radius:0.12em;
		box-sizing: border-box;
		text-decoration:none;
		font-family:'Roboto',sans-serif;
		font-weight:300;
		color:#000000;
		text-align:center;
		transition: all 0.2s;
		font-size: 0.8 em;
	}

	.toggleBtn: hover {
		color:#000000;
 	   font-size: 1em;
	}
`;

function App() {

	//sets theme to state
	const [theme, setTheme] = useState("light");

	//change themes
	const themeToggle = () => {
		theme === "light" ? setTheme("dark") : setTheme("light");
	}

  return (
	  <ThemeProvider theme = { theme === "light" ? lightTheme : darkTheme} >
			<GlobalStyles/>
			<StyledApp>

				<Styles>
					<div className="card">
						<h1 className="heading">Press to Toggle Theme</h1>
						<div style={{textAlign:"center"}}>
							<button className="toggleBtn" onClick={() => themeToggle()}>
								{ theme === "light" ? "Dark Theme" : "Light Theme"}
							</button>
						</div>
						
					</div>
				</Styles>
				

			</StyledApp>
	  </ThemeProvider>
    
  );
}

export default App;
