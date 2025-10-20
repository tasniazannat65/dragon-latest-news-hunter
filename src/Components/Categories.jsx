import React, { use } from 'react';
import { NavLink } from 'react-router';


const categoryPromise = fetch('/categories.json')
.then(res=>res.json())

const Categories = () => {
    const categories = use(categoryPromise)
    
    return (
        <div className='grid grid-cols-1 mt-5 gap-3'>
             <h2 className='font-semibold text-xl'>All Categories</h2>
             {
                categories.map(category=> <NavLink to={`/category/${category.id}`} className={({isActive})=> isActive ? 'btn  bg-base-300 text-accent' : 'btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent'} key={category.id}>{category.name}</NavLink>)
             }
            
        </div>
    );
};

export default Categories;