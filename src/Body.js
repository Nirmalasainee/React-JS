import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resObj from "../utils/mockData"


const Body = ()=>{
    const [restaurantList, setRestaurantList] = useState(resObj);
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={
                    ()=>{
                        const filteredList = restaurantList.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setRestaurantList(filteredList);
                    }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
            {restaurantList.map((item) => (
                <RestaurantCard key={item.info.id} resData={item.info} />
            ))}
            </div>
        </div>
    )
}

export default Body;