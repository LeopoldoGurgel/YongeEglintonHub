import { createContext, useContext, useState, useEffect } from "react";
import {useQuery} from '@apollo/client';
import { QUERY_BREAKING, QUERY_ENTERT, QUERY_SPORTS } from "./queries";

const NewsContext = createContext();

export default function useNews() { 
    useContext(NewsContext) 
};

export const NewsProvider = ({children}) => {

    const [breakingArticles, setBreakingArticles] = useState([]);
    const [sportsArticles, setSportsArticles] = useState([]);
    const [entertainmentArticles, setEntertainmentArticles] = useState([]);

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

    // if loading or error, the component will break in the lines above.
    // from now on we will work in a scenario were we have pure JSON objects

    useEffect(()=> {
        if(breakingData){
            setBreakingArticles(breakingData.breaking);
        }
    }, [breakingData])
        
    useEffect(()=> {
        if(sportsData){
            setSportsArticles(sportsData.sports);
        }
    }, [sportsData])

    useEffect(()=> {
        if(entertainmentData){
            setEntertainmentArticles(entertainmentData.entertainment); 
        }
    }, [entertainmentData])     
    


    return(
        <NewsContext.Provider value={{breakingArticles, sportsArticles, entertainmentArticles}}>
            {children}
        </NewsContext.Provider>
    )
}

