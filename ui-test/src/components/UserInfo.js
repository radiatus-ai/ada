// src/components/UserInfoComponent.js
const UserInfoComponent = ({ user, meData }) => (
  <div>
    <h2>Welcome, {user.email}!</h2>
    <h3>User Information:</h3>
    <ul>
      <li>Email: {user.email}</li>
      <li>Google ID: {user.google_id}</li>
      {user.organization && <li>Organization: {user.organization.name}</li>}
    </ul>
    {meData && (
      <div>
        <h3>Data from /me endpoint:</h3>
        <pre>{JSON.stringify(meData, null, 2)}</pre>
      </div>
    )}
  </div>
);

export default UserInfoComponent;
