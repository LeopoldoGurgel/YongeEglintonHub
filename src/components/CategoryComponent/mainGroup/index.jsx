

const CateogoryMainComponent = ({color, articles}) => {


    return(
        <div className="container-fluid">
            <div id='advertising'>
                advertising goes here
            </div>
            <div id="articlesdiv" className="container-fluid d-flex">
                - For each article, render an article wrapper
                - The article wrapper should have the font-color passed as props
                - Each page should have 20 articles
            </div>
        </div>
    )
}

export default CateogoryMainComponent;