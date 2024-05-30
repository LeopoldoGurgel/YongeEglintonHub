import DestaqueComponent from "../DestaqueComponent"
import SideGroupComponent from "../SideGroupComponent";
import { QUERY_BREAKING, QUERY_ENTERT, QUERY_SPORTS } from "../../../ultils/queries.js";
import { UPDATE_ENTERTAINMENT, UPDATE_BREAKING, UPDATE_SPORTS } from "../../../ultils/actions.js";
import useNews from "../../../ultils/newsContext.jsx";


const ContainerComponent = () => {

    const [state, dispatch] = useNews();
    
    const {
        loading: breakingLoading, 
        error: breakingError, 
        data: breakingData} = useQuery(QUERY_BREAKING);
    const {
        loading: sportsLoading, 
        error: sportsError, 
        data: sportsData} = useQuery(QUERY_SPORTS);
    const {
        loading: entertainmentLoading, 
        error: entertainmentError, 
        data: entertainmentData} = useQuery(QUERY_ENTERT);
  
  
        
    if(breakingLoading || sportsLoading || entertainmentLoading) {
        return (
            <div>Loading...</div>
        )
    }
    

    if(breakingError) {
        return (
            <div>{breakingError.message}</div>
        )
    } 
    if(sportsError){
        return(
            <div>{sportsError.message}</div>
        )
    }
    if(entertainmentError){
        return(
            <div>{entertainmentError.message}</div>
        )
    }

    useEffect(() => {
        if(breakingData){
            dispatch({
                type: UPDATE_BREAKING,
                payload: breakingData.breaking
            })
        }
    }, [breakingData])

    useEffect(() => {
        if(sportsData){
            dispatch({
                type: UPDATE_SPORTS,
                payload: sportsData.sports
            })
        }
    }, [sportsData])

    useEffect(() => {
        if(entertainmentData){
            dispatch({
                type: UPDATE_ENTERTAINMENT,
                payload: entertainmentData.entertainment
            })
        }
    }, [entertainmentData])


    
    return (
        <div className="container-fluid row">
            <DestaqueComponent />
            <SideGroupComponent />
        </div>
    )
}

export default ContainerComponent;