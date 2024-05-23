import CategoryWrapper from "../CategoryWrapper";
import React, {useState} from 'react';
import {Pagination} from 'react-bootstrap';
import CategoryWrapper from "../CategoryWrapper";


const CategoryMainComponent = ({color, articles}) => {

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;

    const paginate = (array, pageNumber) => {
        const startIndex = (pageNumber -1) * pageSize;
        return array.slice(startIndex, startIndex + pageSize)
    }

    const paginatedArticles = paginate(articles, currentPage)

    const totalPages = Math.ceil(articles.length / pageSize)

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return(
        <div className="col-12 col-md-8 col-lg-10 ">
            <div id='advertising'>
                advertising goes here
            </div>
            <div id="articlesdiv" className="container-fluid">
                {paginatedArticles.map((article, index => (
                    <CategoryWrapper 
                        key={index}
                        color={color}
                        title={article.title}
                        link={article.url}
                        imgUrl={article.urlToImg}
                    />
                )))}
            </div>
            <Pagination>
                <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1}/>
                <Pagination.Prev onClick={()=>handlePageChange(currentPage-1)} disabled={currentPage === 1} />
                {Array.from({length: totalPages}, (_, index) => (
                    <Pagination.Item 
                        key={index}
                        active={index + 1 === currentPage}
                        onClick={() => handlePageChange(index+1)}
                    >
                        {index+1}
                    </Pagination.Item>
                ))}
                <Pagination.Next onClick={() => handlePageChange(currentPage +1)} disables={currentPage === totalPages} />
                <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} />
            </Pagination>
        </div>
    );
};

export default CategoryMainComponent;

