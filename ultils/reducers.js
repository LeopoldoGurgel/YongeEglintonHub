import { UPDATE_ENTERTAINMENT, UPDATE_BREAKING, UPDATE_SPORTS } from "./actions";
import { useReducer } from "react";

export default function reducer(state, action){
    switch (action.type) {
        case UPDATE_BREAKING:
            return {
                ...state,
                breakingArticles: [...breakingArticles, action.payload]
            };
        case UPDATE_ENTERTAINMENT:
            return {
                ...state, 
                entertainmentArticles: [...entertainmentArticles, action.payload]
            };
        case UPDATE_SPORTS:
            return {
                ...state,
                sportsArticles: [...sportsArticles, action.payload]
            };
        default:
            return state;
    }
}