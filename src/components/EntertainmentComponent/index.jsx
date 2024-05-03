import apiResponse from '../../../devFiles/newsdata_response_entertainment.json';
import './entertainment.css';
import NewsWrapper from '../NewsWrapper';


const allArticles = apiResponse.results;

const articlesWithImg = allArticles.filter(i => i.image_url)

const EntertainmentComponent = () => {
    return (
        <div id="entertainmentComponent" className="col-12 col-md-6 ps-3">

            {articlesWithImg.slice(0, 6).map((i) =>
                <a href={i.link} className='link-underline link-underline-opacity-0 text-orange' key={i.link}><NewsWrapper imgLink={i.image_url} newsHeader={i.title}/></a>                         
            )}

        </div>        
    )
}

export default EntertainmentComponent;