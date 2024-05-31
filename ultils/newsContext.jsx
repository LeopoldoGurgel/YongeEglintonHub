import { createContext, useContext, useReducer } from "react";
import reducer from "./reducers";
import { QUERY_BREAKING, QUERY_ENTERT, QUERY_SPORTS } from "./queries.js";
import { useQuery } from "@apollo/client";


const NewsContext = createContext();

export default function useNews() { 
    return useContext(NewsContext) 
};

export const NewsProvider = ({children}) => {

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

    const breakingArticles = breakingData.breaking;
    const sportsArticles = sportsData.sports;
    const entertainmentArticles = entertainmentData.entertainment;

    

    


    // const [state, dispatch] = useReducer(reducer, initialState)

    
    return(
        <NewsContext.Provider value={{breakingArticles, sportsArticles, entertainmentArticles}}>
            {children}
        </NewsContext.Provider>
    )
}

