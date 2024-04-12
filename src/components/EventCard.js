import PropTypes from 'prop-types'; // Import PropTypes
import { Link } from "react-router-dom";

const EventCard = ({ id, heading, date, location, img }) => {
  const { year, month } = date;
  return (
     <Link to ={`/events/${id}`}>
      <div className="card">
        <div className="card-content">
          <h3>{heading}</h3>
          <p>
            <span>Year: {year}</span>
            <span>Month: {month}</span>
          </p>
          <p>{location}</p>
        </div>

        <div className="card-img-wrapper">
          <img src={img} alt="image not found" />
        </div>
      </div>
    </Link>
  );
};

// Add prop type validation
EventCard.propTypes = {
  id: PropTypes.number.isRequired,
  heading: PropTypes.string.isRequired,
  date: PropTypes.shape({
    year: PropTypes.number.isRequired,
    month: PropTypes.string.isRequired,
  }).isRequired,
  location: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default EventCard;
