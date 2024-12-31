import React, { useState } from 'react';
// import { CgProfile } from "react-icons/cg";
// import { MdLocalGroceryStore } from "react-icons/md";

const Content = () => {
  const [category, setCategory] = useState('Cardio');
  const [counter, setCounter] = useState(0);

  const categories = ['Cardio', 'Strength', 'Yoga', 'Flexibility'];

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">DietSpotlight</div>
        <ul className="nav-links">
          <li>FITNESS</li>
          <li>SPORTS</li>
          <li>CARE</li>
          <li>MIND</li>
          <li>STORE</li>
        </ul>
        <div className="nav-icons">
          <button className="get-app">Get App</button>
          {/* <span><CgProfile /></span>
          <span><MdLocalGroceryStore /></span> */}
        </div>
      </nav>

      <main className="main-content">
        <div className='con'>
        <h1 className="main-title">DietSpotlight</h1>
        <p className="main-description">A fitness movement that is worth breaking a sweat for is one that combines physical health, mental well-being and a sense of humour.</p>
        <button className="dietspotlight-btn">Learn More</button>
        </div>
      </main>

      <div className="mid">
      <section className="category-section">
        <h2>Select a Workout Category</h2>
        <div className="categories btncal">
          {categories.map((cat) => (
            <button
              key={cat}
              className={category === cat ? 'active' : ''}
              onClick={() => handleCategoryChange(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <p  className='para'>Current Category: <strong>{category}</strong></p>
      </section>

      <section className="counter-section">
        <h2>Repetition Tracker</h2>
        <div className="counter-controls btncal">
          <button onClick={incrementCounter}>Add Rep</button>
          <button onClick={resetCounter}>Reset</button>
        </div>
        <p className='para'>Total Reps: <strong>{counter}</strong></p>
      </section>
      </div>
      <footer className="footer">
        <p>Stay consistent and reach your fitness goals!</p>
      </footer>
    </div>
  );
};

export default Content;