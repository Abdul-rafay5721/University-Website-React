import React from 'react';

const SearchWidget = () => {
  return (
    <aside className="single_sidebar_widget search_widget mb-4 p-4 border border-gray-200 rounded">
    <form action="#">
      <div className="form-group ">
        <div className="input-group flex">
          <input
            type="text"
            className="form-control border-2 border-gray-300 text-sm px-4 py-2"
            placeholder="Search Keyword"
          />
          <div className="input-group-append">
            <button className="bg-[#007A5C] text-white px-4 py-2" type="button">Search</button>
          </div>
        </div>
      </div>
    </form>
  </aside>
  );
};

export default SearchWidget;
