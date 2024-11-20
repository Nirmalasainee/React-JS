import resObj from "../utils/mockData"
import RestaurantCard from "./RestaurantCard";


const Body = ()=>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
            {resObj.map((item, index) => (
                <RestaurantCard key={item.info.id} resData={item.info} />
            ))}
            </div>
        </div>
    )
}

export default Body;