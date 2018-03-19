import React from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
	static propTypes = {
		fish: PropTypes.shape({
			image: PropTypes.string,
			name: PropTypes.string,
			price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
			desc: PropTypes.string,
			status: PropTypes.string
		}),
		addToOrder: PropTypes.func,
		index: PropTypes.string
	};

	render() {
		// const fish = this.props.fish;
		const { image, name, price, desc, status } = this.props.fish;
		const isAvailble = status === "available";

		return (
			<li className="menu-fish">
				<img src={image} alt={name} />
				<h3 className="fish-name">
					{name}
					<span className="price">{formatPrice(price)}</span>
				</h3>
				<p>{desc}</p>
				<button disabled={!isAvailble} onClick={() => this.props.addToOrder(this.props.index)}>
					{isAvailble ? "Add To Order" : "Sold Out"}
				</button>
			</li>
		);
	}
}

export default Fish;
