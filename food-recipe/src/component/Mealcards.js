import React from 'react';
import { NavLink } from 'react-router-dom';
const Mealcards = ({ detail }) => {
    console.log(detail);
    return (

        <div className='meals'>
            {!detail ? <span style={{ color: 'white', fontWeight: 'bold' }}>"No meals found." </span>: detail.map((curItem) => {
                return (
                    <div className='mealImg'>
                        <img src={curItem.strMealThumb} alt="profile" />
                        <p>{curItem.strMeal}</p>
                        <NavLink to={`/${curItem.idMeal}`}>
                            <button >Recipe</button>
                        </NavLink>
                    </div>

                )
            })

            }
        </div>
    )
}

export default Mealcards;