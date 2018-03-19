import React from "react";
import PropTypes from "prop-types";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";

class Inventory extends React.Component {
	static propTypes = {
		fishes: PropTypes.object,
		addFish: PropTypes.func,
		updateFish: PropTypes.func,
		deleteFish: PropTypes.func,
		loadSampleFishes: PropTypes.func
	};

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
				<AddFishForm addFish={this.props.addFish} />
				<button onClick={this.props.loadSampleFishes}>Load Samples Fishes</button>
			</div>
		);
	}
}

export default Inventory;
