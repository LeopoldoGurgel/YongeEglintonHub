import NewsWrapper from '../NewsWrapper';
import useNews from '../../../ultils/newsContext';


const SportsComponent = () => {

    let {sportsArticles} = useNews();

    sportsArticles = sportsArticles.filter((i)=> i.urlToImg).slice(0,6)

    return (
        <div className='col-12 col-md-6 ps-3 '>
            <div id="sportsComponent" className="link-underline link-underline-opacity-0 link-success">

                {sportsArticles.map((i) =>
                    <NewsWrapper key={i.url} link={i.url} imgLink={i.urlToImg} newsHeader={i.title} category={'sports'}/>                       
                )}

            </div>
        </div>
        
    )
}

export default SportsComponent;