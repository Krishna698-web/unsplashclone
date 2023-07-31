import React, { useContext } from "react";
import { PicsContext } from "../../Context/PicsContext";
import Button from "../UI/Button";

const KeywordModal = () => {
  const { setQuery } = useContext(PicsContext);

  return (
    <div className="fixed top-12 lg:w-1/2 md:w-4/5 sm:w-10/12 max-sm:w-10/12 drop-shadow-md mt-2 px-3 py-2 rounded-sm bg-white">
      <h1 className="text-2xl font-semibold">Popular search:</h1>
      <div className="flex flex-wrap gap-2 mt-2">
        <Button onClick={() => setQuery("mountains")}>mountains</Button>
        <Button onClick={() => setQuery("animal")}>animal</Button>
        <Button onClick={() => setQuery("book")}>book</Button>
        <Button onClick={() => setQuery("nature")}>nature</Button>
        <Button onClick={() => setQuery("house")}>house</Button>
      </div>
    </div>
  );
};

export default KeywordModal;
