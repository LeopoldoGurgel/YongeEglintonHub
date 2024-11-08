import CategorySideComponent from './sideGroup'
import CategoryMainComponent from "./mainGroup";
import useNews from "../../../ultils/newsContext";

const CategoryComponent = ({category}) => {

    const {breakingArticles, sportsArticles, entertainmentArticles} = useNews();
    
    let color, articles;

    switch(category){
        case 'breaking':
            color = 'text-danger';
            articles = breakingArticles;
            break;
        case 'sports':
            color = 'text-success';
            articles= sportsArticles;
            break;
        case 'entertainment':
            color='text-orange';
            articles= entertainmentArticles;
            break;
        default:
            color='';
            articles=[];
            break;
    }

    if (!articles || articles.length === 0) {
        return <div>Loading...</div>; // Show loading state
      }


    // create main group and side group components
    // create article search engine. 
    // figure out a way to develop an AI chatbot to discuss about articles.

    // <div id='categorySide' className="col-md-4 col-lg-2">Side Group</div>

    return(
        <div className="container-fluid">
            <CategoryMainComponent articles={articles} color={color} />            
            { /* <CategorySideComponent articles={articles} color={color}/> */}
        </div>
    )

};

export default CategoryComponent;