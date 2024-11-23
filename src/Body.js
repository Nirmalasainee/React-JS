import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = ()=>{
    const [restaurantList, setRestaurantList] = useState([]);
    useEffect(()=>{
        fetchData()
    },[])    

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    // Conditional rendering
    if (restaurantList.length === 0){
        return <Shimmer />
    }
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