import "./style/EventList.css";
import EventCard from  "./EventCard.js"
import { eventList } from "./database/EventDatabase.js";

const EventList = () => {
    const renderEventCards = () => {
      return eventList.map(({ id, date, heading, location, img }) => {
        return (
          <EventCard
            key={id}
            id={id}
            date={date}
            heading={heading}
            location={location}
            img={img}
          />
        );
      });
    };
    return (
      <div>
        <div className="event-list-wrapper">
          <div className="event-list">
            {eventList.length > 0 ? (
              renderEventCards()
            ) : (
              <p>No events available</p>
            )}
          </div>
        </div>
      </div>
    );
  };
  export default EventList;
  