import React from "react";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";

/* eslint-disable react/prop-types */
class Inventory extends React.Component {
	render() {
		return (
			<div className="Inventory">
				<h2>Inventory!!</h2>
				{Object.keys(this.props.fishes).map(fishKey => (
					<EditFishForm
						key={fishKey}
						fishKey={fishKey}
						fish={this.props.fishes[fishKey]}
						updateFish={this.props.updateFish}
						deleteFish={this.props.deleteFish}
					/>
				))}
				<AddFishForm x={this.props.age} addFish={this.props.addFish} />
				<button onClick={this.props.loadSampleFishes}>Load Samples Fishes</button>
			</div>
		);
	}
}

export default Inventory;
