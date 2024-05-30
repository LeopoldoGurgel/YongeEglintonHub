import { createContext, useContext, useState, useEffect, useReducer } from "react";
import {useQuery} from '@apollo/client';
import reducer from "./reducers";
import { QUERY_BREAKING, QUERY_ENTERT, QUERY_SPORTS } from "./queries";
import { UPDATE_BREAKING, UPDATE_ENTERTAINMENT, UPDATE_SPORTS } from "./actions";

const NewsContext = createContext();

export default function useNews() { 
    useContext(NewsContext) 
};

export const NewsProvider = ({children}) => {

    const breakingArticles = [];
    const sportsArticles = [];
    const entertainmentArticles = [];

    const [state, dispatch] = useReducer(reducer, {
        breakingArticles,
        entertainmentArticles,
        sportsArticles
    })

    
    return(
        <NewsContext.Provider value={[state, dispatch]}>
            {children}
        </NewsContext.Provider>
    )
}

