import "../AdvertisingComponent/AdvertisingComponent.css"


const AdvertisingComponent = () => {

    // Need a custom website for your business?
    // From concept to lauch, I can handle it all!
    // Leo Gurgel - Fullstack Web Developer

return(
    <div>
        <a href="" className="d-flex justify-content-center w-100 p-3" id="advComponent">

            <span className="typing-animation text-adv"></span>

            <div className="logo-banner d-flex justify-content-center">
                <div className="logo-adv">
                    <span className="text-warning">Leo</span> Gurgel. <div>Fullstack Web Developer</div>
                    <div className="fs-6 ">Click to visit my website.</div>
                </div>

                    
            </div>

        </a>

    </div>
)

}

export default AdvertisingComponent;