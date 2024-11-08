import CategoryWrapper from "../CategoryWrapper";
import AdvertisingComponent from "../../AdvertisingComponent";
import React, {useState, useEffect} from 'react';
import {Pagination} from 'react-bootstrap';


const CategoryMainComponent = ({color, articles}) => {


    const [currentPage, setCurrentPage] = useState(1);
    const [articlesArray, setArticlesArray] = useState([]);
    const pageSize = 10;


    useEffect(()=> {
        setArticlesArray(articles);
    }, [articles])
    

    if(articlesArray.length === 0) {
        return (
            <div>Loading...</div>
        )
    }

    const paginate = (array, pageNumber) => {
        const startIndex = (pageNumber -1) * pageSize;
        return array.slice(startIndex, startIndex + pageSize)
    }

    const paginatedArticles = paginate(articlesArray, currentPage)

    const totalPages = Math.ceil(articles.length / pageSize)

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return(
        <div className="col-12 col-md-8 col-lg-10 ">

            
            <AdvertisingComponent/>


            <div id="articlesdiv" className="container-fluid d-flex flex-wrap">
                {paginatedArticles.map((article, index) => (
                    <CategoryWrapper 
                        key={index}
                        color={color}
                        title={article.title}
                        link={article.url}
                        imgUrl={article.urlToImg}
                    />
                ))}
            </div>
            <Pagination className="d-flex justify-content-center mt-3">
                <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1}/>
                <Pagination.Prev onClick={()=>handlePageChange(currentPage-1)} disabled={currentPage === 1} />
                
                { window.innerWidth > 851 && (
                    <>
                        {Array.from({length: totalPages}, (_, index) => (
                            <Pagination.Item 
                                key={index}
                                active={index + 1 === currentPage}
                                onClick={() => handlePageChange(index+1)}
                            >
                                {index+1}
                            </Pagination.Item>
                        ))}
                    </>
                )}

                {window.innerWidth < 850 && (
                    <>
                    {currentPage == totalPages && (
                        <Pagination.Item>{currentPage - 2}</Pagination.Item>
                    )}

                    {currentPage > 1 && (
                            <Pagination.Item onClick={() => handlePageChange(currentPage - 1)}>
                                {currentPage - 1}
                            </Pagination.Item>
                        )
                    }

                    <Pagination.Item active>{currentPage}</Pagination.Item>

                    {currentPage < totalPages && (
                        <Pagination.Item onClick={() => handlePageChange(currentPage + 1)}>{currentPage +1}</Pagination.Item>
                    )}

                    {currentPage < 2 && (
                        <Pagination.Item onClick={()=> handlePageChange(currentPage + 2)}>{currentPage +2}</Pagination.Item>
                    )}
                    </>
                )}


                <Pagination.Next onClick={() => handlePageChange(currentPage +1)} disables={currentPage === totalPages} />
                <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} />
            </Pagination>
        </div>
    );
};

export default CategoryMainComponent;

