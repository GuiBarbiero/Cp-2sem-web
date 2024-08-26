
import PropTypes from 'prop-types';

const ServiceCard = ({ number, title, description }) => {
  return (
    <div className="service">
      <h2>{number}</h2>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

ServiceCard.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServiceCard;
