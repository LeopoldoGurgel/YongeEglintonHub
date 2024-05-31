import { createContext, useContext } from "react";
import { QUERY_BREAKING, QUERY_ENTERT, QUERY_SPORTS } from "./queries.js";
import { useQuery } from "@apollo/client";

// creation of context
const NewsContext = createContext();

// context consumer function
export default function useNews() { 
    return useContext(NewsContext) 
};

export const NewsProvider = ({children}) => {

    // query data from apollo server

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
    

    // loading scenario handling
        
    if(breakingLoading || sportsLoading || entertainmentLoading) {
        return (
            <div>Loading...</div>
        )
    }
    
    // error scenario handling

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

    // extracting the articles array from the incoming object
    // that array will be available through the consumer function useNews

    const breakingArticles = breakingData.breaking;
    const sportsArticles = sportsData.sports;
    const entertainmentArticles = entertainmentData.entertainment;
    
    return(
        <NewsContext.Provider value={{breakingArticles, sportsArticles, entertainmentArticles}}>
            {children}
        </NewsContext.Provider>
    )
}

