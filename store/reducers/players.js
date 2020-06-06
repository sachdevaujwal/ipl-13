import {PLAYERS} from '../../data/dummy-data';
import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/playerss';

const initialState = {
    players: PLAYERS,
    filteredPlayers: PLAYERS,
    favoritePlayers: [],
};

const playersReducer = (state= initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const exisitngIndex = state.favoritePlayers.findIndex(player => player.id === action.playerID);
            if (exisitngIndex>=0) {
                const updatedFavPlayers = [...state.favoritePlayers];
                updatedFavPlayers.splice(exisitngIndex, 1);
                return {...state, favoritePlayers: updatedFavPlayers};
            } else {
                const player = state.players.find(player => player.id === action.playerID)
                return {...state, favoritePlayers: state.favoritePlayers.concat(player) };
            }

        case SET_FILTERS:
            const appliedFilters = action.filters;
            const updatedfilteredPlayers = state.players.filter(player => {
                if (appliedFilters.indian && !player.isIndian) {
                    return false;
                }
                if (appliedFilters.international && !player.isInternational) {
                    return false;
                }
                return true;
            });
            return {...state, filteredPlayers: updatedfilteredPlayers}

        default: 
            return state;    
    }
}

export default playersReducer;