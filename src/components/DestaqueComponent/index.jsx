import './destaque.css'
import BreakingCarousel from '../BreakingCarousel';
import NewsWrapper from '../NewsWrapper';
import useNews from '../../../ultils/newsContext';

const DestaqueComponent = () => {

    const {breakingArticles} = useNews();
    
    const carouselArticles = breakingArticles.slice(0, 10);
    const inferiorArticles = breakingArticles.slice(10, 28);

    return (
        <div id="destaque" className="col-lg-7 col-12 container-fluid">
           
           <BreakingCarousel carouselArticles={carouselArticles}/>

            {/* smaller breaking news under the carousel */}

            <div id="destaqueInferior" className='p-3'>
                {inferiorArticles.map((i) =>
                    <NewsWrapper key={i.url} imgLink={i.urlToImg} newsHeader={i.title} link={i.url} category={'breaking'}/>                         
                )} 
            </div>
            
        </div>
    )
}

export default DestaqueComponent;


