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
        <div id="sportsComponent" className="col-12 col-md-6 ps-3">

            {sportsArticles.map((i) =>
                <a href={i.link} className='link-underline link-underline-opacity-0 text-success'  key={i.link}><NewsWrapper imgLink={i.urlToImg} newsHeader={i.title}/></a>                         
            )}

        </div>
    )
}

export default SportsComponent;