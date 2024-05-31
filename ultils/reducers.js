import { UPDATE_ENTERTAINMENT, UPDATE_BREAKING, UPDATE_SPORTS } from "./actions";


const initialState = {
    breakingArticles: [],
    sportsArticles: [],
    entertainmentArticles: []
};

export default function reducer(state = initialState, action){
    switch (action.type) {
        case UPDATE_BREAKING:
            return {
                ...state,
                breakingArticles: [...state.breakingArticles, ...action.payload]
            };
        case UPDATE_ENTERTAINMENT:
            return {
                ...state, 
                entertainmentArticles: [...state.entertainmentArticles, ...action.payload]
            };
        case UPDATE_SPORTS:
            return {
                ...state,
                sportsArticles: [...state.sportsArticles, ...action.payload]
            };
        default:
            return state;
    }
}