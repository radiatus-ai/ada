// SettingsContainer.js
import { CredentialsApi } from 'ada-client';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { createApi } from '../clients/adaClient';
import { useAuth } from '../contexts/Auth';
import { useTitleContext } from '../contexts/TitleContext';
import SettingsPresentation from './components/Settings';

function SettingsContainer() {
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({});
  const [showApiKeys, setShowApiKeys] = useState({});
  const { token } = useAuth();
  const { setTitle } = useTitleContext();
  const settingsApi = createApi(CredentialsApi, token);

  const [apiKeys, setApiKeys] = useState({
    anthropic_api_key: '',
    cohere_api_key: '',
    google_ai_studio_api_key: '',
    groq_api_key: '',
    voyage_ai_api_key: '',
    open_ai_api_key: '',
    perplexity_ai_api_key: '',
    gh_pat_token: '',
  });

  useEffect(() => {
    setTitle('Settings');
    fetchSettings();
  }, [setTitle]);

  const fetchSettings = async () => {
    try {
      const result = await settingsApi.getSettings();
      setApiKeys(result);
    } catch (error) {
      console.error('Error fetching settings:', error);
      toast.error('Failed to load settings');
    } finally {
      setLoading(false);
    }
  };

  const toggleVisibility = (key) => {
    setShowApiKeys((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const validateForm = () => {
    const validationErrors = {};
    // Add validation logic here if needed
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await settingsApi.updateSettings(apiKeys);
        toast.success('Settings updated successfully');
      } catch (error) {
        console.error('Error updating settings:', error);
        toast.error('Error updating settings');
      }
    }
  };

  const handleChange = (key) => (e) => {
    setApiKeys((prev) => ({ ...prev, [key]: e.target.value }));
  };

  return (
    <SettingsPresentation
      loading={loading}
      apiKeys={apiKeys}
      showApiKeys={showApiKeys}
      errors={errors}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      toggleVisibility={toggleVisibility}
    />
  );
}

export default SettingsContainer;
