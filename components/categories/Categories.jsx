import React, { useEffect, useState } from "react";
import { getCategories } from "../../services";
import Link from "next/link";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((result) => {
      setCategories(result);
    });
  }, []);

  // console.log(categories);

  return (
    <div className="categories">
      <h3>Categories</h3>

      {categories.map((category, i) => (
        <div key={i} className="category-wrapper">
          <Link href={`/category/${category.slug}`}>
            <span className="category">{category.name}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Categories;
