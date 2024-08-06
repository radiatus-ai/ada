import {
  Button,
  CircularProgress,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import { useSnackbar } from 'notistack';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FileTree from '../../components/FileTree.js';
import FormInput from '../../components/common/FormInput';
import { TitleContext } from '../../contexts/TitleContext';
import { providerModelOptions, providerOptions } from '../../utils/config';

const apiService = {};

function ProjectEdit() {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);
  const [files, setFiles] = useState([]);
  const [addingToContext, setAddingToContext] = useState(false);
  const [provider, setProvider] = useState('claude');
  const [selectedDropdownOption, setSelectedDropdownOption] = useState(
    'claude-3-opus-20240229'
  );
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { projectId } = useParams();
  const { setTitle } = useContext(TitleContext);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setTitle('Edit');
    const fetchProject = async () => {
      try {
        const result = await apiService.getProject(projectId);
        setName(result.response.name);
        setFiles(result.response.files || []);
        setProvider(result.response.provider || '');
        setSelectedDropdownOption(result.response.provider_model || '');
      } catch (error) {
        console.error('Error fetching project:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [projectId, setTitle]);

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
        await apiService.updateProject(projectId, {
          name,
          provider,
          provider_model: selectedDropdownOption,
        });
        enqueueSnackbar('Project updated successfully!', {
          variant: 'success',
        });
        navigate('/');
      } catch (error) {
        console.error('Error updating project:', error);
        enqueueSnackbar('Error updating project. Please try again.', {
          variant: 'error',
        });
      }
    } else {
      enqueueSnackbar('Please fill out all required fields.', {
        variant: 'warning',
      });
    }
  };

  const handleAddFile = (filePath) => {
    const file = files.find((file) => file.path === filePath);
    const formData = new FormData();
    formData.append('added_to_context', true);
    setAddingToContext(true);

    apiService
      .updateFileContextStatus(projectId, file.id, true)
      .then((response) => {
        setAddingToContext(false);
        file.added_to_context = true;
        enqueueSnackbar('File added to context successfully!', {
          variant: 'success',
        });
      })
      .catch((error) => {
        setAddingToContext(false);
        console.error('Error adding file:', error);
        enqueueSnackbar('Error adding file to context. Please try again.', {
          variant: 'error',
        });
      });
  };

  const handleRemoveFile = (index) => {
    const file = files[index];
    const formData = new FormData();
    formData.append('added_to_context', false);
    setAddingToContext(false);

    // Handle file removal logic...
  };

  const handleDeleteFile = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Grid container justifyContent="center" sx={{ marginTop: '40px' }}>
      <Grid item xs={12} md={8}>
        <Paper elevation={3} sx={{ padding: '2rem' }}>
          <Typography variant="h4" align="center" gutterBottom>
            Edit Project
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
                <FileTree
                  files={files}
                  onRemoveFromContext={handleRemoveFile}
                  onAddToContext={handleAddFile}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  Update
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default ProjectEdit;
