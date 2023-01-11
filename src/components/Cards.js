const Cards = (props) => {
    // Destructuring the props
    const {name,address,cloudinaryImageId} = props;
    return (
        <div className="col-4">
            <div className="card" >
                <img src={"https://res.cloudinary.com/swiggy/image/upload/"+cloudinaryImageId} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{address}</p>
                        <a href="#" className="btn btn-primary">Go AT Aahar</a>
                    </div>
            </div>
        </div>
    );
}
export default Cards;