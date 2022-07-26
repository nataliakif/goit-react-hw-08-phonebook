import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/authorization/auth-operations';
const styles = {
  title: {
    textAlign: 'center',
  },
  form: {
    width: 320,
    marginLeft: 'auto',
    marginRight: 'auto',
    border: '1px solid  #000',
    padding: 30,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
  button: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 150,
    height: 40,
    fontSize: 16,
    fontWeight: 700,
    backgroundColor: 'rgb(144, 92, 194)',
    color: '#fff',
    borderRadius: 5,
    ':hover': {
      backgroundColor: 'rgb(62, 39, 83)',
    },
  },
};
export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1 style={styles.title}>Login Page</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Email
          <input
            style={styles.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          Password
          <input
            style={styles.input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button style={styles.button} type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
}
