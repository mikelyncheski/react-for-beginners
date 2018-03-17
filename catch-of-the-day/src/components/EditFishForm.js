import React from "react";

/* eslint-disable react/prop-types */
class EditFishForm extends React.Component {
	handleChange = event => {
		const fish = {
			...this.props.fish, // Take a copy of the fish
			[event.currentTarget.name]: event.currentTarget.value // Use ES6 computed property names to see the corresponding property
		};
		//updatedFish.price = parseFloat(updatedFish.price);
		this.props.updateFish(this.props.fishKey, fish);
	};

	// price is a string
	// avail/unavail is funky
	// why is it not nagging me about missing proptypes??
	render() {
		return (
			<div className="fish-edit">
				<input
					name="name"
					onChange={this.handleChange}
					value={this.props.fish.name}
					type="text"
					placeholder="Name"
				/>
				<input
					name="price"
					onChange={this.handleChange}
					value={this.props.fish.price}
					type="text"
					placeholder="Price"
				/>
				<select name="status" onChange={this.handleChange} value={this.props.fish.status}>
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold Out!</option>
				</select>
				<textarea
					name="desc"
					onChange={this.handleChange}
					value={this.props.fish.desc}
					placeholder="Desc"
				/>
				<input
					name="image"
					onChange={this.handleChange}
					value={this.props.fish.image}
					type="text"
					placeholder="Image"
				/>
				<button onClick={() => this.props.deleteFish(this.props.fishKey)}>Remove Fish</button>
			</div>
		);
	}
}

export default EditFishForm;
