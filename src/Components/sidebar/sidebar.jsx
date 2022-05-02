import React from "react";
import RecentRecipes from "../recent/recentRecipes";
import Sponsored from "../hiring/hiring";
import Tags from "../tags/tags";

const SideBar = () => {
    return (
        <aside className="sidebar">
            <div className="wrapper">
                <RecentRecipes/>
                <Sponsored/>
                <div className="tags margin-1">
                    <div className="opening text-left">
                        <h4>TAGS</h4>
                    </div>
                    <Tags/>
                </div>
            </div>
        </aside>
    )
}
export default SideBar;