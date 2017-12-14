import React from 'react';

const SearchBar = () => (
  <form className="py-1 py-md-2 mx-0 sticky-top bg-dark">
    {/* search-input */}
    <div className="input-group container">
       <input type="text" className="form-control" placeholder="Search a sign" aria-label="Search a sign" />
       {/* search-button */}
        <span className="input-group-btn">
          <button className="btn btn-secondary" type="button"><i className="fa fa-search" aria-label="Search" aria-hidden="true"></i></button>
        </span>
     </div>
  </form>
);

export default SearchBar;
