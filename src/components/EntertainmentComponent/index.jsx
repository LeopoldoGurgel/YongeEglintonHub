import './entertainment.css';
import NewsWrapper from '../NewsWrapper';
import useNews from '../../../ultils/newsContext';


const EntertainmentComponent = () => {

    const {entertainmentArticles} = useNews();

    const articles = entertainmentArticles.filter((i)=> i.urlToImg).slice(0,6)

    return (
        <div className='col-12 col-md-6 ps-3 '>
            <div id="entertainmentComponent" className="link-underline link-underline-opacity-0 text-orange">

            {articles.map((i) =>
                <NewsWrapper key={i.url} link={i.url} imgLink={i.urlToImg} newsHeader={i.title} category={'entertainment'}/>                        
            )}

            </div>
        </div>
                
    )
}

export default EntertainmentComponent;