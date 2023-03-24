import React from "react";

const ContentFaq = ({ selectedMenuItem }) => {
  return (
    <div className="flex-grow p-8">
      {selectedMenuItem === 1 && <h1 className="text-2xl font-bold mb-4">Menu Item 1</h1>}
      {selectedMenuItem === 2 && <h1 className="text-2xl font-bold mb-4">Menu Item 2</h1>}
      {selectedMenuItem === 3 && <h1 className="text-2xl font-bold mb-4">Menu Item 3</h1>}
    </div>
  );
};

export default ContentFaq;
