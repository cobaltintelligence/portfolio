// components/Styles.js
// Yuan Wang

import { 
  Black, Blue, Red, Slate,
  BackgroundColor,
  PrimaryColor,
  SecondaryColor, } from '../helpers/Colors.js'

export const __STYLES__ = {
  centerText: {
    textAlign: 'center'
  },
  textBox: {
    backgroundColor: BackgroundColor(0.8),
    padding: 20,
    margin: 30,
    maxWidth: 600,
    borderRadius: 0,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
    display: 'flex',
  },
  textBoxShadow: {
    boxShadow: "0px 5px 20px grey",
  },
  col: {
    padding: 30
  },
  a: {
    textDecoration: "none"
  },
  h1: {
    color: PrimaryColor(1),
    fontSize: 40,
    fontWeight: 300,
    lineHeight: 1,

  },
  h2: {
  	color: PrimaryColor(1),
  	fontSize: 32,
    fontWeight: 300,
    lineHeight: 1,
    
  },
  h3: {
    color: PrimaryColor(1),
    fontSize: 24,
    fontWeight: 300,
    lineHeight: 1,  
  },
  h4: {
    color: PrimaryColor(1),
    fontSize: 18,
    fontWeight: 300,
    lineHeight: 1,
  },
  p: {
    color: PrimaryColor(1),
    fontSize: 14
  },
  subtitle: {
    color: PrimaryColor(1),
    fontSize: 18
  },
  paragraph: {
    color: PrimaryColor(1),
    fontSize: 18
  },
  PrimaryColorText: {
  	color: PrimaryColor(1),
  },
  slateText: {
  	color: Slate(1)
  },
  header: {
  	color: PrimaryColor(0.8),
  	fontSize: 18,
  	fontWeight: '600'
  },
  shadow: {
    shadowOffset: {  
      width: 3,  
      height: 3
    },
    shadowColor: 'black',
    shadowOpacity: 0.5,
	},
	shadowUp: {
    shadowOffset: {  
      width: 0,  
      height: -5
    },
    shadowColor: 'black',
    shadowOpacity: 0.5,
	},
	smallShadow: {
    shadowOffset: {   
      width: 4,  
      height: 4
    },
    zIndex: 2,
    shadowColor: 'black',
    shadowOpacity: 0.5,
	},
	smallShadowUp: {
    shadowOffset: {   
      width: 0,  
      height: -1
    },
    zIndex: 1,
    shadowColor: 'black',
    shadowOpacity: 0.5,
	}
}