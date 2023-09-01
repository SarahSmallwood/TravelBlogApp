import { checkToken } from '../../utilities/users-service';

export default function TravelInspiration() {
  const handleCheckToken = async () => {
    const expDate = await checkToken();
    console.log(expDate);
  };
  return (
    <>
      <h1>Travel Inspiration</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  );
}