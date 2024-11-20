const RestaurantCard = (props)=>{
    const {resData} = props
    return (
        <div className="res-card">
           <img className="res-img" alt="res-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.cloudinaryImageId} />
           <h2>{resData.name}</h2>
           <h2>{resData.cuisines.join(", ")}</h2>
           <h2>{resData.avgRating} star</h2>
           <h2>{resData.deliveryTime} minutes</h2>
           <h2>{resData.costForTwo}</h2>
        </div>
    )
}
export default RestaurantCard;