// components/PortfolioTechnologyPane.js
// Yuan Wang

import React, { Component } from 'react';
import '../App.css';
// REDUX
import { connect, Provider } from "react-redux";
import store from "../store/index";
import { 
  setFocusedZone, 
  setWindowDimensions 
} from '../actions/index.js'
import BackgroundImage from './BackgroundImage.js'
import { Black, White } from '../helpers/Colors.js'
import { __STYLES__ } from '../helpers/Styles.js'
const data = require('../data/datasingle.json')

const mapDispatchToProps = dispatch => {
  return {
    setWindowDimensions: dimensions => dispatch(setWindowDimensions(dimensions)),
    setFocusedZone: zoneid => dispatch(setFocusedZone(zoneid)),
  }
}

const mapStateToProps = state => {
  return { 
    focusedZone: state.focusedZone,
    dimensions: state.dimensions
  };
};

const BACKGROUND_IMAGE_URL = 'url(https://pro2-bar-s3-cdn-cf4.myportfolio.com/5b5175f74a4fc524766c459e64b820a7/5398e2a3-8750-4b99-b3eb-ad31f43c530a_rw_1920.jpg?h=2dbdff50aa5e507f2dd95c3ba970b67b)'

class ConnectedPortfolioTechnologyPane extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div 
				id={"hello"}
				className={"still"}
				style={styles.bgContainer}>

				<div 
					className="pan8"
          style={{
            display: 'absolute',
            flex: 0,
            backgroundImage: BACKGROUND_IMAGE_URL,
          }}
        />

				<div style={styles.container}>
					<div style={styles.sidebarPane}>
						{data.technologies.map(
							(item, index) => 
								<a 
									style={__STYLES__.a} 
									href='#'>
									<p key={item.key} style={__STYLES__.h3}>
										{item.title}
									</p>
								</a>
							)
						}
					</div>
					<div style={styles.mainPane}>
						<IntroductionPane/>
					</div>
				</div>
			</div>
		)
	}
}

const IntroductionPane = () => (
	<div style={styles.pane}>
		<p style={__STYLES__.h1}>
			Hello World
		</p>
	</div>
)


const styles = {
	container: {
		flex: 1,
		display: 'flex',
		backgroundColor: Black(0.5),
		flexDirection: 'row',
	},
	bgContainer: {
		flex: 1,
		display: 'flex'
	},
	sidebarPane: {
		backgroundColor: White(0.4),
		flex: 1,
		margin: 20,
		display: 'flex',
		padding: 20,
		flexDirection: 'column'
	},
	mainPane: {
		display: 'flex',
		flex: 4,
	},
	pane: {
		margin: 20,
		padding: 20,
		flex: 4,
		display: 'flex',
		borderRadius: 8,
		backgroundColor: White(0.4)
	}
}
	

const PortfolioTechnologyPane = connect(mapStateToProps, mapDispatchToProps)(ConnectedPortfolioTechnologyPane)

export default PortfolioTechnologyPane