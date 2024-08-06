import { Button, Grid, Paper, Typography } from '@mui/material';
import { ProjectsApi } from 'ada-client';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../../components/common/FormInput';
import { useAuth } from '../../contexts/Auth';
import { providerModelOptions, providerOptions } from '../../utils/config';

function ProjectCreate() {
  const [name, setName] = useState('');
  const [provider, setProvider] = useState('openai');
  const [selectedDropdownOption, setSelectedDropdownOption] =
    useState('gpt-4o');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { apiClient, token } = useAuth();
  let projectsApi = new ProjectsApi(apiClient);

  const validateForm = () => {
    const validationErrors = {};

    if (!name.trim()) {
      validationErrors.name = 'Name is required';
    }
    if (!provider) {
      validationErrors.provider = 'Provider is required';
    }
    if (!selectedDropdownOption) {
      validationErrors.providerModel = 'Provider model is required';
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await projectsApi.createAdaV1ProjectsPost({
          name,
          organization_id: 1,
          // path,
          // provider,
          // provider_model: selectedDropdownOption,
        });
        enqueueSnackbar('Project created successfully!', {
          variant: 'success',
        });
        navigate('/projcets/' + response.body.id);
      } catch (error) {
        console.error('Error creating project:', error);
        enqueueSnackbar('Error creating project. Please try again.', {
          variant: 'error',
        });
      }
    } else {
      enqueueSnackbar('Please fill out all required fields.', {
        variant: 'warning',
      });
    }
  };

  return (
    <Grid container justifyContent="center" sx={{ marginTop: '40px' }}>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} sx={{ padding: '2rem' }}>
          <Typography variant="h4" align="center" gutterBottom>
            Create Project
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormInput
                  type="text"
                  label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  error={errors.name}
                  helperText={errors.name}
                />
              </Grid>
              <Grid item xs={12}>
                <FormInput
                  type="select"
                  label="Select Provider"
                  value={provider}
                  onChange={(e) => setProvider(e.target.value)}
                  options={providerOptions}
                  error={errors.provider}
                  helperText={errors.provider}
                />
              </Grid>
              <Grid item xs={12}>
                <FormInput
                  type="select"
                  label="Select Provider Model"
                  value={selectedDropdownOption}
                  onChange={(e) => setSelectedDropdownOption(e.target.value)}
                  options={provider ? providerModelOptions[provider] : []}
                  error={errors.providerModel}
                  helperText={errors.providerModel}
                  disabled={!provider}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Create
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default ProjectCreate;
