import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import styles from './NavBar.modules.css';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();

    setUser(null);
  }

  return (
    <nav className="nav">
      <Link to='/createtravelpost' className="link">Create New Travel Blog Post</Link>
      &nbsp; | &nbsp;
      <Link to='/viewall' className="link">View All Travel Blog Posts</Link>
    
      &nbsp; | &nbsp; <span>Welcome, {user.name}</span>
      &nbsp;&nbsp;
      <Link to='' onClick={handleLogOut} className="link">
        Log Out
      </Link>
    </nav>
  );
}
