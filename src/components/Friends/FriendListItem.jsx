import PropTypes from 'prop-types';
import css from './Friend.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      {isOnline ? (
        <span className={css.onLine}></span>
      ) : (
        <span className={css.offLine}></span>
      )}

    <img className={css.avatar} src={avatar} alt={name} width={48} />
      <p className={css.name}>{name}</p>
    </>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;