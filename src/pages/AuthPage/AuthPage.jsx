import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import { useState } from 'react';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <main>
      <div>
        <h1>Welcome Explorers!</h1>
        <h2>Login In or Sign Up to View the World</h2>
        <button
          onClick={() => {
            setShowLogin(!showLogin);
          }}
        >
          {showLogin ? 'Sign Up' : 'Login'}
        </button>
      </div>
      {showLogin ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
    </main>
  );
}
