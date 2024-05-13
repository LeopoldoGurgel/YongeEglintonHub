import './newsWrapper.css'

const NewsWrapper = ({imgLink, newsHeader, link, category}) => {

    let color;

    if(category == 'sports') {
        color = 'link-success'
    } else if(category == 'entertainment') {
        color = 'text-orange'
    }else{
        color='link-danger'
    }


    return (
        <div className={`newsWrapper ps-2 pe-2 pb-2 container-fluid link-underline link-underline-opacity-0 ${color}`}>
            {imgLink ? (
            <div>
                <a href={link}><img src={imgLink} className="wrapperImg"/></a>                
            </div>
            ) : null
            }
            <a href={link}><h2 className="wrapperHeader">{newsHeader}</h2></a>            
        </div>
    )
}

export default NewsWrapper;
