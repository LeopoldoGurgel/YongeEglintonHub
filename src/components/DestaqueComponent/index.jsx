import './destaque.css'
import BreakingCarousel from '../BreakingCarousel';
import NewsWrapper from '../NewsWrapper';
import {useState, useEffect} from 'react'
import {useQuery} from '@apollo/client'
import { QUERY_ARTICLES } from "../../../ultils/queries";


const DestaqueComponent = () => {

    const {loading, error, data} = useQuery(QUERY_ARTICLES);    

    
    if(loading){
        return (
            <div>Loading...</div>
        )
    }

    if(error) {
        return (
            <div>{error.message}</div>
        )
    }

    return (
        <div id="destaque" className="col-lg-7 col-12 container-fluid">
           
           <BreakingCarousel carouselArticles={data.articles}/>

            {/* smaller breaking news under the carousel */}

            <div id="destaqueInferior" className='p-3'>
                {data.articles.slice(10, 28).map((i) =>
                    <a href={i.url} className='link-underline link-underline-opacity-0 text-danger'  key={i.url}><NewsWrapper imgLink={i.urlToImg} newsHeader={i.title}/></a>                         
                )} 
            </div>
            
        </div>
    )
}

export default DestaqueComponent;
