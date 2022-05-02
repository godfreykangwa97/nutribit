import React, {useMemo, useState} from 'react';
import {Link} from "react-router-dom";
import recipe from '../Assets/Data.json';

let DataSize = 3
const RecentRecipes = () => {

    const [limitedPage] = useState(1);
    const SlicedData = useMemo(() => {
        const toShow = (limitedPage - 1) * DataSize;
        const fromTotal = toShow + DataSize;
        return recipe.slice(toShow, fromTotal);
    }, [limitedPage]);
   return (
       <div className="recent">
           <div className="heading">
               <h3>Recent recipes</h3>
           </div>
           <div className="most-recent margin-1 flex flex-column gap-2rem">
               {SlicedData.map((item) => (
                   <Link to={item.link} className="recipe flex space-between gap-2rem" key={item.id}>
                       <div className="cover">
                           <img src={item.cover} alt={item.title}/>
                       </div>
                       <div className="body">
                           <h3>{item.title}</h3>
                           {/*<p>{item.body}</p>*/}
                       </div>
                   </Link>
               ))}
           </div>
       </div>
   );
};
export default RecentRecipes;