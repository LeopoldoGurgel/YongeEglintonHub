
import CategoryMainComponent from "./mainGroup";
import React, {useState} from "react";
import useNews from "../../../ultils/newsContext";

const CategoryComponent = ({category}) => {

    const {breakingArticles, sportsArticles, entertainmentArticles} = useNews();
    let color, articles;

    switch(category){
        case 'breaking':
            color = 'text-danger';
            articles = breakingArticles;
            break;
        case 'sports':
            color = 'text-success';
            articles= sportsArticles;
            break;
        case 'entertainment':
            color='text-orange';
            articles= entertainmentArticles;
            break;
        default:
            color='';
            articles=[];
            break;
    }


    // create main group and side group components
    // create article search engine. 
    // figure out a way to develop an AI chatbot to discuss about articles.

    return(
        <div className="container-fluid">
            <CategoryMainComponent articles={articles} color={color} />            
            <div className="col-md-4 col-lg-2">Side Group</div>
        </div>
    )

};

export default CategoryComponent;