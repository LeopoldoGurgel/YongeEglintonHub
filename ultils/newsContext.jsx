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

    const {
        loading: breakingLoading, 
        error: breakingError, 
        data: breakingData} = useQuery(QUERY_BREAKING);
    const {
        loading: sportsLoading, 
        error: sportsError, 
        data: sportsData} = useQuery(QUERY_SPORTS);
    const {
        loading: entertainmentLoading, 
        error: entertainmentError, 
        data: entertainmentData} = useQuery(QUERY_ENTERT);

    
    if(breakingLoading || sportsLoading || entertainmentLoading) {
        return (
            <div>Loading...</div>
        )
    }
    

    if(breakingError) {
        return (
            <div>{breakingError.message}</div>
        )
    } 
    if(sportsError){
        return(
            <div>{sportsError.message}</div>
        )
    }
    if(entertainmentError){
        return(
            <div>{entertainmentError.message}</div>
        )
    }

    useEffect(() => {
        if(breakingData){
            dispatch({
                type: UPDATE_BREAKING,
                payload: breakingData.breaking
            })
        }
    }, [breakingData])

    useEffect(() => {
        if(sportsData){
            dispatch({
                type: UPDATE_SPORTS,
                payload: sportsData.sports
            })
        }
    }, [sportsData])

    useEffect(() => {
        if(entertainmentData){
            dispatch({
                type: UPDATE_ENTERTAINMENT,
                payload: entertainmentData.entertainment
            })
        }
    }, [entertainmentData])


    return(
        <NewsContext.Provider value={[state, dispatch]}>
            {children}
        </NewsContext.Provider>
    )
}

