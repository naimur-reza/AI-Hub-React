import { useEffect, useState } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import SingleData from "./SingleData/SingleData";

const Card = (props) => {
  const [showAll, setShowAll] = useState(false);
  const [uniqueId , setUniqueId] = useState(null);
  const [singleData , setSingleData] = useState({});



  // fetch single modal data from api
  useEffect(()=> {
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
    .then(res => res.json())
    .then(data => setSingleData(data.data))
  },[uniqueId])
  const handleSHowAll = () => {
    setShowAll(true);
  };
  return (
    <>

      <div className="grid grid-cols-1 mt-6 md:grid-cols-3 px-20 justify-items-center  gap-10 ">
        {props.data.slice(0, showAll ? 12 : 6).map((singleData) => (
          <SingleData data={singleData} key={singleData.id} setUniqueId={setUniqueId}></SingleData>
        ))}
      </div>
      {!showAll && (
        <span onClick={handleSHowAll}>
          <Button>See More</Button>
        </span>
      )}
      <Modal singleData = {singleData}></Modal>
    </>
  );
};

export default Card;
