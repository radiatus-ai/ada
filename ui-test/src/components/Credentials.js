// src/components/CredentialsComponent.js
import { useState } from "react";

const CredentialsComponent = ({
  credentials,
  onCreateCredential,
  onFetchCredentials,
}) => {
  const [newCredentialName, setNewCredentialName] = useState("");
  const [newCredentialType, setNewCredentialType] = useState("api_key");
  const [newCredentialData, setNewCredentialData] = useState('{"foo":"bar"}');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateCredential(newCredentialName, newCredentialType, newCredentialData);
    setNewCredentialName("");
    setNewCredentialType("api_key");
    setNewCredentialData("");
  };

  return (
    <div>
      <h3>Credentials</h3>
      <button onClick={onFetchCredentials}>Fetch Credentials</button>
      {credentials.length > 0 && (
        <ul>
          {credentials.map((cred) => (
            <li key={cred.id}>
              {cred.name} - {cred.credential_type}
            </li>
          ))}
        </ul>
      )}
      <h4>Create New Credential</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newCredentialName}
          onChange={(e) => setNewCredentialName(e.target.value)}
          placeholder="Credential Name"
          required
        />
        <select
          value={newCredentialType}
          onChange={(e) => setNewCredentialType(e.target.value)}
          required
        >
          <option value="api_key">API Key</option>
          <option value="github_pat">GitHub PAT</option>
          <option value="gcp_service_account">GCP Service Account</option>
          <option value="other">Other</option>
        </select>
        <textarea
          value={newCredentialData}
          onChange={(e) => setNewCredentialData(e.target.value)}
          placeholder="Credential Data (JSON)"
          required
        />
        <button type="submit">Create Credential</button>
      </form>
    </div>
  );
};

export default CredentialsComponent;
