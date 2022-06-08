import React, { useEffect, useState } from 'react';
import './Card.css'
import axios from 'axios';



const Card = () => {


  const [data, setdata] = useState([]);
  const [search, setSearch] = useState('')

  useEffect(() => {
    // fetch("")
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));

    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => {
        setdata(res.data.meals);
        console.log(res.data.meals);
      });
  }, [search]);


  const handaleChange = (e) => {
    setSearch(e.target.value)
  }



    return (
      <div className="body">
        {/* Navbar  */}

        <div className="navMain">
          <div className="searchSection">
            <input
              type={"text"}
              className="searchBox"
              placeholder="Search Item.."
              onChange={handaleChange}
            />
            <button className="searchBtn">Search</button>
          </div>
        </div>

        {/* Navbar end */}

        <div className="cardSection">
          {data.map((item) => (
            // <a href="{Index}" key={item.idMeal}>
            <div className="mainCardBox2" key={item.idMeal}>
              <div className="cardBox">
                <div className="card">
                  <img
                    src={item.strMealThumb}
                    alt="mealImage"
                    style={{ maxWidth: "18rem" }}
                  />
                  <h1>{item.strMeal}</h1>
                </div>
              </div>
            </div>
            // </a>
          ))}
        </div>
      </div>
    );
};

export default Card;