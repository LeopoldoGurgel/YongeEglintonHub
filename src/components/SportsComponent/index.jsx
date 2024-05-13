import NewsWrapper from '../NewsWrapper';
import {useQuery} from '@apollo/client'
import { QUERY_SPORTS } from "../../../ultils/queries";



const SportsComponent = () => {

    const {loading, error, data} = useQuery(QUERY_SPORTS); 

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

    const sportsArticles = data.sports.filter((i)=> i.urlToImg).slice(0,6)

    return (
        <div id="sportsComponent" className="col-12 col-md-6 ps-3 link-underline link-underline-opacity-0 link-success">

            {sportsArticles.map((i) =>
                <NewsWrapper key={i.url} link={i.url} imgLink={i.urlToImg} newsHeader={i.title}/>                       
            )}

        </div>
    )
}

export default SportsComponent;