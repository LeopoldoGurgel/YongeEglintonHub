import './destaque.css'
import BreakingCarousel from '../BreakingCarousel';
import NewsWrapper from '../NewsWrapper';
import {useQuery} from '@apollo/client'
import { QUERY_BREAKING } from "../../../ultils/queries";


const DestaqueComponent = () => {

    const {loading, error, data} = useQuery(QUERY_BREAKING);    


    
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

    
    const breakingArticles = data.breaking.slice(0, 10);
    const inferiorArticles = data.breaking.slice(10, 28);

    return (
        <div id="destaque" className="col-lg-7 col-12 container-fluid link-underline link-underline-opacity-0 link-danger">
           
           <BreakingCarousel carouselArticles={breakingArticles}/>

            {/* smaller breaking news under the carousel */}

            <div id="destaqueInferior" className='p-3'>
                {inferiorArticles.map((i) =>
                    <NewsWrapper key={i.url} imgLink={i.urlToImg} newsHeader={i.title} link={i.url}/>                         
                )} 
            </div>
            
        </div>
    )
}

export default DestaqueComponent;


