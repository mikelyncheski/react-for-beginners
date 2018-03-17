import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

/* eslint-disable react/prop-types */

class App extends React.Component {
	state = {
		fishes: {},
		order: {}
	};

	componentDidMount() {
		const { params } = this.props.match;

		const orderFromStorage = localStorage.getItem(params.storeId);
		if (orderFromStorage) {
			this.setState({ order: JSON.parse(orderFromStorage) });
		}

		this.ref = base.syncState(`${params.storeId}/fishes`, {
			context: this,
			state: "fishes"
		});
	}

	componentDidUpdate() {
		// Does not happen the first time
		localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
	}

	componentWillUnmount() {
		base.removeBinding(this.ref);
	}

	addFish = fish => {
		// Take a copy of the existing state using object spread
		const fishes = { ...this.state.fishes };
		// Add our new fish
		fishes[`fish${Date.now()}`] = fish;
		// Update the state
		this.setState({ fishes });
	};

	updateFish = (key, fish) => {
		// Take a copy of the existing state using object spread
		const fishes = { ...this.state.fishes };
		// Update that fish
		fishes[key] = fish;
		// Update the state
		this.setState({ fishes });
	};

	deleteFish = key => {
		// Take a copy of state
		const fishes = { ...this.state.fishes };
		// Need to set it to null so firebase picks up the change
		fishes[key] = null;
		// Update the state
		this.setState({ fishes });
	};

	loadSampleFishes = () => {
		this.setState({ fishes: sampleFishes });
	};

	addToOrder = fishKey => {
		// Take a copy of state
		const order = { ...this.state.order };
		// Either add to the order or update the number in our order.
		order[fishKey] = order[fishKey] + 1 || 1;
		// Update the state
		this.setState({ order });
	};

	deleteFromOrder = fishKey => {
		// Take a copy of state
		const order = { ...this.state.order };
		// Since we are not mirroring this to firebase we can just delete the line item.
		delete order[fishKey];
		// Update the state
		this.setState({ order });
	};

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market" />
					<ul className="fishes">
						{/* Turn into an array so we can map over it */}
						{Object.keys(this.state.fishes).map(key => (
							<Fish
								key={key}
								index={key}
								fish={this.state.fishes[key]}
								addToOrder={this.addToOrder}
							/>
						))}
					</ul>
				</div>
				<Order
					fishes={this.state.fishes}
					order={this.state.order}
					deleteFromOrder={this.deleteFromOrder}
				/>
				<Inventory
					addFish={this.addFish}
					updateFish={this.updateFish}
					deleteFish={this.deleteFish}
					loadSampleFishes={this.loadSampleFishes}
					fishes={this.state.fishes}
				/>
			</div>
		);
	}
}

export default App;
