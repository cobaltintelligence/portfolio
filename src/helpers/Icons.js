// helpers/Icons.js
// Yuan Wang

import { Icon } from 'react-icons-kit'
import { ic_home } from 'react-icons-kit/md/ic_home'
import { water } from 'react-icons-kit/entypo/water'
import { ic_pets}  from 'react-icons-kit/md/ic_pets'
import { ic_local_hotel } from 'react-icons-kit/md/ic_local_hotel'
import { ic_restaurant_menu } from 'react-icons-kit/md/ic_restaurant_menu'
import { ic_directions_bike } from 'react-icons-kit/md/ic_directions_bike'
import {
	ic_airline_seat_individual_suite
} from 'react-icons-kit/md/ic_airline_seat_individual_suite'
import { ic_kitchen } from 'react-icons-kit/md/ic_kitchen'
import { ic_pool } from 'react-icons-kit/md/ic_pool'
import { ic_fitness_center } from 'react-icons-kit/md/ic_fitness_center'
import { ic_group } from 'react-icons-kit/md/ic_group'
import { ic_local_library } from 'react-icons-kit/md/ic_local_library'
import { ic_local_movies } from 'react-icons-kit/md/ic_local_movies'
import { ic_filter_vintage } from 'react-icons-kit/md/ic_filter_vintage'
import { ic_place } from 'react-icons-kit/md/ic_place'
import { ic_star } from 'react-icons-kit/md/ic_star'
import { ic_local_laundry_service } from 'react-icons-kit/md/ic_local_laundry_service'
import { ic_directions_car } from 'react-icons-kit/md/ic_directions_car'

export const getIconName = (name) => {

	switch(name) {
		case 'home':
			return ic_home

		case 'living': 		
			return ic_group

		case 'gym': 		
			return ic_fitness_center
		case 'library': 		
			return ic_local_library

		case 'movie': 		
			return ic_local_movies

		case 'garden': 		
			return ic_filter_vintage

		case 'special': 		
			return ic_star
			
		default: 
			return ic_place
	}

}

