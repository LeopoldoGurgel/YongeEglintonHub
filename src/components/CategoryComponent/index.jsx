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

    return(
        <div className="container-fluid row">
            <div>Main Group</div>
            <div>Side Group</div>
        </div>
    )

};

export default CategoryComponent;