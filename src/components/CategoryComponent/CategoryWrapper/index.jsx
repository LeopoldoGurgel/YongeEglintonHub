import './CategoryWrapper.css'

const CategoryWrapper = ({color, imgUrl, title, link}) => {
    return (
        <div className="categoryWrapper">
            <a href={link}><img src={imgUrl} className='cwImg'/></a>
            <a href={link}><h3 className={`${color} cwHeader`}>{title}</h3></a>
        </div>
    )
}

export default CategoryWrapper;