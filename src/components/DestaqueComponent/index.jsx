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

    const uniqueBreakingArticles = data.breaking.reduce((acc, article) => {
        if (!acc.find(item => item.title === article.title)) {
            acc.push(article);
        }
        return acc;
    }, []);

    const breakingArticles = uniqueBreakingArticles.slice(0, 10);
    const inferiorArticles = uniqueBreakingArticles.slice(10, 28);

    return (
        <div id="destaque" className="col-lg-7 col-12 container-fluid">
           
           <BreakingCarousel carouselArticles={breakingArticles}/>

            {/* smaller breaking news under the carousel */}

            <div id="destaqueInferior" className='p-3'>
                {inferiorArticles.map((i) =>
                    <NewsWrapper key={i._id} imgLink={i.urlToImg} newsHeader={i.title} link={i.url}/>                         
                )} 
            </div>
            
        </div>
    )
}

export default DestaqueComponent;


