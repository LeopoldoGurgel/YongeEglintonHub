import './destaque.css'
import apiResponse from '../../../devFiles/mediaStackToronto_response.json';
import BreakingCarousel from '../BreakingCarousel';
import NewsWrapper from '../NewsWrapper';

const allArticles = apiResponse.data;
const uniqueTitles = [];
const unrepeatedArticles = [];
const articlesFilter = allArticles.filter(article => {
    if(!uniqueTitles.includes(article.title)) {
        uniqueTitles.push(article.title)
        unrepeatedArticles.push(article)
    }
})

console.log(unrepeatedArticles.length)


const articlesWithImg = unrepeatedArticles.filter(i => i.image)
const carouselArticles = articlesWithImg.slice(0, 10);


const DestaqueComponent = () => {
    return (
        <div id="destaque" className="col-lg-7 col-12 container-fluid">
           
            {/* main carousel */}

            <BreakingCarousel carouselArticles={carouselArticles}/>

            {/* smaller breaking news under the carousel */}
            
            <div id="destaqueInferior" className='p-3'>
                {articlesWithImg.slice(10, 28).map((i) =>
                    <a href={i.url} className='link-underline link-underline-opacity-0 text-danger'  key={i.url}><NewsWrapper imgLink={i.image} newsHeader={i.title}/></a>                         
                )} 
            </div>
            
            
        </div>
    )
}

export default DestaqueComponent;
