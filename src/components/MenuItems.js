import React from 'react'

const MenuItems = (props) => {
  return (
    <div>
        <div className="container">
        <div className="row">
          {props.item.map((val,index) => {
            const { id, name, image, category, price, description } = val;
            return (
              <div className="col-md-4 my-5" key={index}>
                <div className="card" >
                  <img src={image} className="card-img-top " alt="image" />
                  <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <span>{price}</span>
                    <a href="#" className="btn btn-primary">
                      {category}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default MenuItems
