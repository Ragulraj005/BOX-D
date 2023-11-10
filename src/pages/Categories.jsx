import React, { useState, useEffect, useRef } from 'react';
import './Categories.css';
import filterListData from '../data/filterListData';
import GameCard from '../components/GameCard';

function Categories({ games, reference }) {
  const categoriesRef = useRef(null);
  const [data, setData] = useState(games);
  const [searchQuery, setSearchQuery] = useState('');

  const handleFilterGames = (category) => {
    if (category === 'All') {
      setData(games);
    } else {
      const filteredGames = games.filter((game) => game.category === category);
      setData(filteredGames);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query === '') {
      handleFilterGames('All');
    } else {
      const filteredGames = games.filter((game) =>
        game.title.toLowerCase().includes(query.toLowerCase())
      );
      setData(filteredGames);
    }
  };

  useEffect(() => {
    handleFilterGames('All');
  }, [games]);

  return (
    <section id="categories" className="categories" ref={reference}>
      <div className="container-fluid mt-2">
        <div className="row">
          <div className="col-lg-12 d-flex align-items-center justify-content-start">
            <div className="category-dropdown">
              <label htmlFor="category-select"><h4>Select a Category:</h4></label>
              <select
                id="category-select"
                className="btn btn-dark dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onChange={(e) => handleFilterGames(e.target.value)}
              >
                <option value="All" className='option'>Category</option>
                {filterListData.map((filter) => (
                  <option key={filter._id} value={filter.name}>
                    {filter.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 d-flex align-items-center justify-content-center">
            <div className="search-container">
              <div className="search">
                <i className="bi bi-search"></i>
                <input
                  type="text"
                  name="search"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {data.length > 0 ? (
            data.map((game) => <GameCard key={game._id} game={game} />)
          ) : (
            <div className="no-results">No results found.</div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Categories;
