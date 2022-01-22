// import PropTypes from 'prop-types';
import s from '../App/App.module.css';

const OneContact = ({ name, number }) => {
  return (
    <li className={s.oneContact}>
      {name}: {number}
    </li>
  );
};

export default OneContact;

// OneContact.propTypes = {
//   avatar: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   isOnline: PropTypes.bool,
// };
