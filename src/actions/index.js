// src/js/actions/index.js

import { 
	SET_FOCUSED_ZONE,
	SET_WINDOW_DIMENSIONS,
	SET_FOCUSED_MEDIA
} from "../constants/action-types";

export const setFocusedZone = zone => ({ 
	type: SET_FOCUSED_ZONE, 
	payload: zone 
}); 

export const setFocusedMedia = media => ({ 
	type: SET_FOCUSED_MEDIA, 
	payload: media 
}); 

export const setWindowDimensions = dimensions => ({
	type: SET_WINDOW_DIMENSIONS,
	payload: dimensions
})