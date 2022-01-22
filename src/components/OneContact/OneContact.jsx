import PropTypes from 'prop-types';
import s from '../App/App.module.css';
import Button from '../Button';

const OneContact = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={s.oneContactWrap}>
      <p className={s.oneContact}>
        {name}: {number}
      </p>
      <Button
        label="Delete"
        type="submit"
        onClick={() => onDeleteContact(id)}
      />
    </li>
  );
};

export default OneContact;

OneContact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
