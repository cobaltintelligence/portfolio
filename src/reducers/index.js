import { 
  SET_FOCUSED_ZONE,
  SET_WINDOW_DIMENSIONS,
  SET_FOCUSED_MEDIA
} from "../constants/action-types";

const initialState = {
  focusedZone:  null, // 'N/A',
  dimensions: {
    height: 800, 
    width: 600
  },
  focusedMedia: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FOCUSED_ZONE:
      // console.log("Payload set:")
      // console.log("FOCUSED Zone:", action.payload)
      // console.log(action.payload)
      return { 
        ...state, 
        focusedZone: action.payload
      }

    case SET_FOCUSED_MEDIA:
      return { 
        ...state, 
        focusedMedia: action.payload
      }

    case SET_WINDOW_DIMENSIONS:
      return {
        ...state,
        dimensions: action.payload
      }

    default:
      return state;
  }
};

export default rootReducer;