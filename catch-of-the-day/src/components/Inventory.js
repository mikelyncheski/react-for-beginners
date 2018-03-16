import React from "react";
import AddFishForm from "./AddFishForm";

/* eslint-disable react/prop-types */
class Inventory extends React.Component {
	render() {
		return (
			<div className="Inventory">
				Inventory!!
				<AddFishForm x={this.props.age} addFish={this.props.addFish} />
				<button onClick={this.props.loadSampleFishes}>
					Load Samples Fishes
				</button>
			</div>
		);
	}
}

export default Inventory;
