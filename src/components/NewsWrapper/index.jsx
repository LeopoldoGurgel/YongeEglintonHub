import './newsWrapper.css'

const NewsWrapper = ({imgLink, newsHeader, link}) => {
    return (
        <div className="newsWrapper ps-2 pe-2 pb-2 container-fluid">
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