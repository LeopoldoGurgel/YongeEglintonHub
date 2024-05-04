import './breaking.css'
import Carousel from 'react-bootstrap/Carousel';


const BreakingCarousel = ({carouselArticles}) => {
    return (
        <Carousel className='p-1 p-md-4' >

            {carouselArticles.map((i) =>
                        
            <Carousel.Item key={i.url}>
                <a href={i.url}>
                    <img src={i.urlToImg} className="d-block w-100 rounded carouselimg" />
                </a>                 
                <Carousel.Caption className='noticiacaption text-light'>
                    <a href={i.url} className='link-underline-opacity-0 link-underline link-light' >
                        <h3 className='justify-content-start'>{i.title}</h3> 
                    </a>       
                </Carousel.Caption>
            </Carousel.Item>
            )}

        </Carousel>
    )
}

export default BreakingCarousel;