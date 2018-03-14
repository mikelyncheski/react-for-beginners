import React from "react";

// ES6 destructuring of the props parameter
const Header = ({ tagline }) => (
	<header className="top">
		<h1>Catch
		<span className="ofThe">
			<span className="of">Of</span>
			<span className="the">The</span>
		</span>Day</h1>
		<h3 className="tagline">
			<span>{tagline}</span>
		</h3>
	</header >
);

export default Header;


// const Header = (props) => (
// 	<header className="top">
// 		<h1>Catch
// 		<span className="ofThe">
// 				<span className="of">Of</span>
// 				<span className="the">The</span>
// 			</span>Day</h1>
// 		<h3 className="tagline">
// 			<span>{props.tagline} - V2</span>
// 			{/* Note that this is not used */}
// 		</h3>
// 	</header >
// );




// class Header extends React.Component {
// 	render() {
// 		return (
// 			<header className="top">
// 				<h1>Catch
// 				<span className="ofThe">
// 					<span className="of">Of</span>
// 					<span className="the">The</span>
// 				</span>Day</h1>
// 				<h3 className="tagline">
// 					<span>{this.props.tagline}</span>
// 				</h3>
// 			</header >
// 		);
// 	}
// }
