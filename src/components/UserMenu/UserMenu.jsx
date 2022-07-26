import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/authorization/auth-selectors';
import authOperations from '../../redux/authorization/auth-operations';
import defaultAvatar from './default_avatar.png';
import styles from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = defaultAvatar;

  return (
    <div className={styles.container}>
      <img src={avatar} alt="" width="32" className={styles.avatar} />
      <span className={styles.name}>Welcome, {name}</span>
      <button
        type="button"
        className={styles.button}
        onClick={() => dispatch(authOperations.logOut())}
      >
        Logout
      </button>
    </div>
  );
}
