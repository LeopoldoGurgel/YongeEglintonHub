import DestaqueComponent from "../DestaqueComponent"
import SideGroupComponent from "../SideGroupComponent";


const ContainerComponent = () => {


    return (
        <div className="container-fluid row">
            <DestaqueComponent />
            <SideGroupComponent />
        </div>
    )
}

export default ContainerComponent;