import React, { useContext } from "react";
import { PicsContext } from "../../Context/PicsContext";
import Button from "../UI/Button";

const KeywordModal = () => {
  const { setQuery } = useContext(PicsContext);

  return (
    <div className="fixed top-12 lg:w-1/2 md:w-3/4 sm:w-4/5 max-sm:w-5/6 drop-shadow-md mt-2 px-3 py-2 rounded-sm bg-white transition">
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
