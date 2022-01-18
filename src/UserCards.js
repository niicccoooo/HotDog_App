import React, { useState } from 'react'
import './UserCards.css';
import TinderCard from 'react-tinder-card';

function UserCards() {

    const [dogs, setDogs] = useState([
        { 
            id: 1,
            dogName: 'Doggy',
            url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/smartest-dog-breeds-1553287693.jpg?crop=0.673xw:1.00xh;0.167xw,0&resize=640:*', 
        
        },
        { 
            id: 2,
            dogName: 'Dogo',
            url: 'https://cdn.britannica.com/q:60/49/161649-050-3F458ECF/Bernese-mountain-dog-grass.jpg', 
        
        },
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        // setLastDirection(direction)
      }
    
      const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
      }

    return (

        <div className="user-cards">
            <div className="card-container">
            
            {dogs.map((dog) => (
              <TinderCard 
                  className="swipe"
                  key={dog.id}
                  preventSwipe={["up", "down"]}
                  onSwipe={(dir) => swiped(dir, dog.dogName)}
                  onCardLeftScreen={() => outOfFrame(dog.dogName)}>

                <div style={{ backgroundImage: `url(${dog.url})` }} className='card'>
                    <h3>{dogs.name}</h3>
                </div>

              </TinderCard>

            ))}

            </div>
        </div>
    )
}

export default UserCards
