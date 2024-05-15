import { QUERY_SPORTS, QUERY_BREAKING, QUERY_ENTERT } from "../../../ultils/queries";



const CategoryComponent = ({category}) => {

    let color;

    if(category == 'breaking'){
        color = 'text-danger'
        const {loading, error, data} = useQuery(QUERY_BREAKING);
    } else if (category == 'sports'){
        color = 'text-success'
        const {loading, error, data} = useQuery(QUERY_SPORTS);
    } else if (category == 'entertainment'){
        color = 'text-orange'
        const {loading, error, data} = useQuery(QUERY_ENTERT);
    };

    if(loading){
        return(
            <div>Loading...</div>
        )
    }

    if(error) {
        return(
            <div>Error: {error.message}</div>
        )
    }

    // create main group and side group components
    // create article search engine. 
    // figure out a way to develop an AI chatbot to discuss about articles.

    return(
        <div className="container-fluid">
            <div className="col-12 col-md-8 col-lg-10" articles={
                data.breaking? data.breaking :
                data.sports? data.sports :
                data.entertainment? data.entertainment : undefined
            } color={color}>
                <div>Advertising</div>
                <div>Articles</div>
            </div>
            <div className="col-md-4 col-lg-2" articles={
                data.breaking? data.breaking :
                data.sports? data.sports :
                data.entertainment? data.entertainment : undefined
            }>Side Group</div>
        </div>
    )

};

export default CategoryComponent;