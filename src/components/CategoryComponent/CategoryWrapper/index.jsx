import './CategoryWrapper.css'

const CategoryWrapper = ({color, imgUrl, title, link}) => {
    return (
        <div className="categoryWrapper">
            <a href={link}><img src={imgUrl} /></a>
            <a href={link}><h3 className={color}>{title}</h3></a>
        </div>
    )
}

export default CategoryWrapper;