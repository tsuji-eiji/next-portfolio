import Link from "next/link";
import { getCategories } from "../../lib/microcms";

export default async function CategoryLinks() {
  const categories = await getCategories();
  
  return (
    <div className="area-border">
      <h2 className="menu-header">Category</h2>
      <ul className="px-4">
        {categories.map((category, index) => {
          if (index === 0 || category.ganre[0] !== categories[index-1].ganre[0]) {
            return (
              <li key={category.id}>
                <p>{category.ganre[0]}</p>
                <Link className="ml-4" href={`/category/${category.id}`}>{category.name}</Link>
              </li>
            );
          } else {
            return (
              <li key={category.id}>
                <Link className="ml-4" href={`/category/${category.id}`}>{category.name}</Link>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}