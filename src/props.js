import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "waffle",
    image:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 2,
    name: "burger",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    rating: 4.2
  },
  {
    id: 3,
    name: "pizza",
    image:
      "https://images.unsplash.com/photo-1573821663912-569905455b1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    rating: 3.2
  },
  {
    id: 4,
    name: "salad",
    image:
      "https://images.unsplash.com/photo-1570197571499-166b36435e9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    rating: 4.7
  }
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I love {name}.</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

// function renderFood(dish) {
//   return <Food name={dish.name} picture={dish.image} />;
// }

// function App() {
//   return (
//     <div>
//       {console.log(foodILike.map(renderFood))}
//       {foodILike.map(renderFood)}
//     </div>
//   );
// }

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

function App() {
  //dish는 함수명 foodILike.map(funtction (dish){})
  return (
    <div>
      {foodILike.map(dish => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
