import React from "react";

const Events = () => {
  const eventsData = [
    {
      id: 1,
      url: "/birthday.jpg",
      title: "MELODIA",
    },
    {
      id: 2,
      url: "/anniversary.jpg",
      title: "AMETHYST",
    },
    {
      id: 3,
      url: "/camping.jpg",
      title: "Daawat-E-Dastoor 3.0",
    },
    {
      id: 4,
      url: "/gamenight.jpg",
      title: "ABLAZE",
    },
    {
      id: 5,
      url: "/party.jpg",
      title: "N'ZEST",
    },
    {
      id: 6,
      url: "/wedding.jpg",
      title: "EMOTIONS",
    },
  ];
  React.useEffect(() => {
    // Your useEffect logic here, if needed
  }, []);
  return (
    <>
      <div className="services container">
        <h2>OUR EVENTS</h2>
        <div className="banner">
          {eventsData.map((element) => {
            return (
              <div className="item" key={element.id}>
                <h3>{element.title}</h3>
                <img src={element.url} alt={element.title} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Events;
