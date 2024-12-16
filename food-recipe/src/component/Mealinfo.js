import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
const Mealinfo = () => {
    const { mealid } = useParams();
    const [info, setInfo] = useState()
    console.log(mealid);
    const getInfo = async () => {
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
        const jsonData = await get.json();
        console.log(jsonData.meals[0]);
        setInfo(jsonData.meals[0]);
    }
    if (info !== "") {
        getInfo()
    }
    return (
        <div>
            {!info ? "Loading..." : <div className='mealInfo'>
                <img src={info.strMealThumb} alt="" />
                <div className='info'>
                    <h1>Recipe Detail</h1>
                    <button>{info.strMeal}</button>
                    <p><strong className="highlight">Category:</strong> {info.strCategory}</p>
                    <p><strong className="highlight">Area:</strong> {info.strArea}</p>
                    <p><strong className="highlight">Instructions:</strong> {info.strInstructions}</p>
                    <p><strong className="highlight">Ingredients:</strong></p>
                    <ul>
                        {Object.keys(info)
                            .filter((key) => key.startsWith('strIngredient') && info[key])
                            .map((key, index) => (
                                <li key={index}>
                                    {info[key]} - {info[`strMeasure${key.slice(13)}`]}
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
            }
        </div>

    )
}

export default Mealinfo;