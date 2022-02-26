import { Link } from 'react-router-dom';
import styles from './AuthForm.css';

export default function Confirm() {
  return (
    <div className={`${styles.confirmContainer}`}>
      <h2>A confirmation link has been sent to the provided email address!</h2>
      <Link to="/">Return Home</Link>
    </div>
  );
}
