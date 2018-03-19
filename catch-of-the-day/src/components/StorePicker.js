import React from "react";
import PropTypes from "prop-types";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
	static propTypes = {
		history: PropTypes.object
	};

	// handleClick() {
	// 	alert("doh");
	// }

	// constructor() {
	// 	super();
	// 	// This is the non ES6 way.
	// 	// Enable ability to reeference this inside of goToStore()
	// 	this.goToStore = this.goToStore.bind(this);
	// }

	// eslint-disable-next-line

	// goToStore(event) {
	// 	// Stop the form from submitting
	// 	event.preventDefault();
	// 	// Get the text from the input using refs (later use state)
	// 	console.log(this);
	// }

	// Added 	"parser": "babel-eslint", to eslint config to fix error message
	myInput = React.createRef();

	goToStore = event => {
		// Stop the form from submitting
		event.preventDefault();
		// Get the text from the input using refs (later use state)
		const storeName = this.myInput.value.value; // "this" works here because goToStore is a property just like myInput
		// Change the page to /store/whatever-they-entered; We can use this methodology
		// to access the push functions because StorePicker is a child of Router.
		this.props.history.push(`/store/${storeName}`);
	};

	// componentDidMount() {		// After page is drawn
	// 	console.log("MOUNTED");
	// 	console.log(this);		// this is the StorePicker here because the React builtin methods are in
	// 	// the parent component.  The methods we add here that extends that are not bound by
	// 	// default.  Makes it hard to reference the component inside of the method.
	// }

	render() {
		return (
			// Parens needed if you want this formatted like this
			<form className="store-selector" onSubmit={this.goToStore}>
				<h2>Please Enter a store</h2>
				{/* With parens the function runs on page load! */}
				{/* <button onClick={this.handleClick}>Click it good</button> */}
				<input
					type="text"
					required
					placeholder="Store Name"
					defaultValue={getFunName()}
					ref={this.myInput}
				/>
				<button type="submit">Visit Store &rarr;</button>
			</form>
		);
	}
}

// <Fragment>
//     { /* comment */ }
//     <form className='store-selector'>
//         <p>Please enter axxx store ...</p>
//     </form>
// </Fragment>

export default StorePicker;
