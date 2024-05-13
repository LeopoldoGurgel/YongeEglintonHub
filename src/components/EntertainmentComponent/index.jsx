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

    const articles = data.entertainment.filter((i)=> i.urlToImg).slice(0,6)

    return (
        <div id="entertainmentComponent" className="col-12 col-md-6 ps-3 link-underline link-underline-opacity-0 text-orange">

            {articles.map((i) =>
                 <NewsWrapper key={i.url} link={i.url} imgLink={i.urlToImg} newsHeader={i.title} category={'entertainment'}/>                        
            )}

        </div>        
    )
}

export default EntertainmentComponent;