import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service'

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();

    setUser(null);
  }

  return (
    <nav>
      <Link to='/travelinspiration'>Travel Inspiration</Link>
      &nbsp; | &nbsp;
      <Link to='/createtravelpost'>Create New Travel Blog Post</Link>
      &nbsp; | &nbsp;
      <Link to='/viewall'>View All Travel Blog Posts</Link>
      &nbsp; | &nbsp; <span>Welcome, {user.name}</span>
      &nbsp;&nbsp;
      <Link to='' onClick={handleLogOut}>
        Log Out
      </Link>
    </nav>
  );
}
