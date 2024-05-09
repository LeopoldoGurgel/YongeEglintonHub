import './entertainment.css';
import NewsWrapper from '../NewsWrapper';
import { QUERY_ENTERT } from "../../../ultils/queries";
import {useQuery} from '@apollo/client'


const EntertainmentComponent = () => {

    const {loading, error, data} = useQuery(QUERY_ENTERT); 

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

    const unique = data.entertainment.reduce((acc, article) => {
        if(!acc.find(item => item.title === article.title)) {
            acc.push(article)
        }
        return acc;
    })
    const articles = unique.filter((i)=> i.urlToImg).slice(0,6)

    return (
        <div id="entertainmentComponent" className="col-12 col-md-6 ps-3">

            {articles.map((i) =>
                <NewsWrapper key={i._id} link={i.url} imgLink={i.urlToImg} newsHeader={i.title}/>                       
            )}

        </div>        
    )
}

export default EntertainmentComponent;