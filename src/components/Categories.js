import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories, fetchItems } from '../redux/actions';

const Categories = ({ onCategoryClick }) => {
    const dispatch = useDispatch();
    // Fetching categories from Redux store
    const categories = useSelector(state => state.categories.categories);
    // State to track the currently selected category
    const [selectedCategory, setSelectedCategory] = useState(null);
  
    // Effect to fetch categories on component mount
    useEffect(() => {
      dispatch(fetchCategories());
    }, [dispatch]);
  
    // Handler for category item click
    const handleClick = (category) => {
      // Dispatches action to fetch items for the selected category
      dispatch(fetchItems(category.short_name));
      // Callback to parent component to signal category selection
      onCategoryClick();
      // Update the state with the current selected category
      setSelectedCategory(category.id);
    };
  
    return (
      <div>
        <h2>Categories</h2>
        <ul>
          {categories.map(category => (
            <li key={category.id} 
                onClick={() => handleClick(category)}
                className={category.id === selectedCategory ? 'selected-category' : ''}>
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    );
};
  
export default Categories;
