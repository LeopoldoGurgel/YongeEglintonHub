import { QUERY_SPORTS, QUERY_BREAKING, QUERY_ENTERT } from "../../../ultils/queries";
import CategoryMainComponent from "./mainGroup";
import React, {useState} from "react";
import { useQuery } from "@apollo/client";



const CategoryComponent = ({category}) => {

    let color, query;

    switch(category){
        case 'breaking':
            color = 'text-danger';
            query = 'QUERY_BREAKING';
            break;
        case 'sports':
            color = 'text-success';
            query= 'QUERY_SPORTS';
            break;
        case 'entertainment':
            color='text-orange';
            query='QUERY_ENTERT';
            break;
        default:
            color='';
            query='';
            break;
    }

    const {loading, error, data} = useQuery(query);
 
    if(loading){
        return(
            <div>Loading...</div>
        )
    }

    if(error) {
        return(
            <div>Error: {error.message}</div>
        )
    }

    // create main group and side group components
    // create article search engine. 
    // figure out a way to develop an AI chatbot to discuss about articles.

    return(
        <div className="container-fluid">
            <CategoryMainComponent articles={data[category]} color={color} />            
            <div className="col-md-4 col-lg-2">Side Group</div>
        </div>
    )

};

export default CategoryComponent;