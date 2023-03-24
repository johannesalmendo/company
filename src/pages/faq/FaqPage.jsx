import React, { useState } from "react";
import "./style.css";
import { FaSearch } from "react-icons/fa";
import CollapseComp from "../../components/CollapseComp";
import SidebarComp from "../../components/SidebarComp";
import ContentFaq from "../../components/ContentFaq";

const FaqPage = () => {
  const [activeItem, setActiveItem] = useState(1);
  const [selectedMenuItem, setSelectedMenuItem] = useState(1);

  const handleItemClick = (item) => {
    setActiveItem(item);
    setSelectedMenuItem(item);
  };

  return (
    <div>
      <header>
        <div className="box-header">
          <span className="text-header-faq_1">Frequently Asked</span>
          <br />
          <span className="text-header-faq_2">Question</span>
        </div>
        {/* <CollapseComp /> */}
      </header>
      <main>
        <div className="relative mx-auto my-20 w-4/5">
          <input
            className="searchbar-text w-full px-4 py-2 border-2 border-purple-900 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-900"
            type="text"
            placeholder="Search your question"
          />
          <button className="absolute right-2 top-1 px-4 py-2 m-auto text-purple-900 rounded-md">
            <FaSearch />
          </button>
        </div>
        <div className="flex mx-auto my-10 w-4/5">
          <SidebarComp activeItem={activeItem} onItemClick={handleItemClick} />
          <ContentFaq selectedMenuItem={selectedMenuItem} />
        </div>
      </main>
    </div>
  );
};

export default FaqPage;
