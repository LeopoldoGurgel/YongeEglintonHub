import './breaking.css'
import Carousel from 'react-bootstrap/Carousel';


const BreakingCarousel = ({carouselArticles}) => {
    return (
        <Carousel className='p-3 p-md-4' >

            {carouselArticles.map((i) =>
                        
            <Carousel.Item className='rounded' key={i.url}>
                <a href={i.url}>
                    <img src={i.urlToImg} className="d-block w-100 rounded carouselimg" />
                </a>                 
                <Carousel.Caption className='noticiacaption text-light rounded-bottom'>
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