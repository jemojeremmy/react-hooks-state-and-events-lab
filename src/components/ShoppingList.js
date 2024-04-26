

// ShoppingList.js
import React, { useState } from 'react';
import itemsData from '../data/items';
import Item from './Item';

function ShoppingList() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredItems = selectedCategory === 'All' ? itemsData : itemsData.filter(item => item.category === selectedCategory);

  return (
    <div>
      <select onChange={handleCategoryChange} value={selectedCategory}>
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Produce">Produce</option>
        <option value="Dessert">Dessert</option>
      </select>
      <ul className="Items">
        {filteredItems.map((item, index) => (
          <Item key={index} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

