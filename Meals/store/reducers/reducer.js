import {MEALS , CATEGORIES} from '../../data/dummy-data';

const initialState = {
    meals : MEALS,
    filters : MEALS,
    favorite : []
}


export const mealsReducer = (state = initialState , action) =>
{
    switch(action.type)
    {
        case "TOGGLEFAV" : {
            const data = state.meals.filter(ins => ins.id === action.payload);
            console.log(state.favorite.findIndex(once => once.id === action.payload));
            if(state.favorite.indexOf(once => once.id == action.payload) >= 0)
            {
                //when it is already present.
                
                var fav = state.favorite.filter(once => once.id != action.payload);
            }
            else{
                var fav = [...state.favorite , data];
            }

            return {
                ...state,
                favorite : fav
            }
        }

        default : {
            return state;
        }
    }
}