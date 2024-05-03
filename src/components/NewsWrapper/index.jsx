import './newsWrapper.css'

const NewsWrapper = ({imgLink, newsHeader}) => {
    return (
        <div className="newsWrapper ps-2 pe-2 pb-2 container-fluid">
            {imgLink ? (
            <div>
                <img src={imgLink} className="wrapperImg"/>
            </div>
            ) : null
            }
            <h2 className="wrapperHeader">{newsHeader}</h2>
        </div>
    )
}

export default NewsWrapper;