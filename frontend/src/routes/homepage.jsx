import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate from react-router-dom
import "../stylesheets/Homepage.css";
import HomepageListItems from "../components/homepageItemsList";
import { UserContext } from "../utils/UserContext";
import { fetchTopFound, fetchTopLost } from "../Api/Data";

function Homepage() {
  const [, , , setPageNumber] = React.useContext(UserContext);
  const [topTenFound, setTopTenFound] = useState([]);
  const [topTenLost, setTopTenLost] = useState([]);
  const [lostCount, setLostCount] = useState(0);
  const [foundCount, setFoundCount] = useState(0);
  
  const navigate = useNavigate();  // Use navigate hook for navigation

  const getItems = async () => {
    const promises = [
      fetchTopLost(setTopTenLost, setLostCount),
      fetchTopFound(setTopTenFound, setFoundCount),
    ];
    await Promise.all(promises);
  };

  useEffect(() => {
    setPageNumber(0);
    getItems();
  }, []);

  const navigateToReport = () => {
    navigate("/report/form");  // Navigate to the "Report New Item" page
  };

  return (
    <>
      <section className="BannerBox">
        <div className="banner">
          <h1>
            Lost <span> & </span> Found
          </h1>
          <h3>We help everyone to get their lost things !</h3>
          <button className="reportBtn" onClick={navigateToReport}>
          Report New Item
        </button>
          <img
            src={
              "https://www.247software.com/hubfs/lost-and-found-software.png"
            }
            alt="banner"
          />
        </div>
        <div className="itemTags">
          <div className="tag">
            <h3>LOST ITEMS : {lostCount}</h3>
          </div>
          <div className="tag">
            <h3>FOUND ITEMS : {foundCount}</h3>
          </div>
        </div>
        {/* Add the button to navigate to the Report New Item page */}
      </section>

      <section className="ListBox">
        <div className="listContainer">
          {topTenLost.map((item, index) => (
            <HomepageListItems
              image={item.image}
              date={item.dateTime}
              title={item.title}
              type={1}
              key={index}
            />
          ))}
        </div>
        <div className="listContainer">
          {topTenFound.map((item, index) => (
            <HomepageListItems
              image={item.image}
              date={item.dateTime}
              title={item.title}
              type={0}
              key={index}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Homepage;
