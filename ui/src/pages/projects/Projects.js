import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import LaunchIcon from '@mui/icons-material/Launch';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/Auth';
import { TitleContext } from '../../contexts/TitleContext';
import useApi from '../../hooks/useAPI';
import { calculateProjectCost } from '../../utils';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState(null);
  const navigate = useNavigate();
  const { setTitle } = useContext(TitleContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { token } = useAuth();
  const { projects: projectsApi, error } = useApi();

  const fetchProjects = async () => {
    try {
      const response = await projectsApi.list(token);
      setProjects(response.body);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setTitle('Projects');
    fetchProjects();
  }, [fetchProjects, setTitle]);

  useEffect(() => {
    if (error) {
      console.error('API Error:', error);
      // You might want to show an error message to the user here
    }
  }, [error]);

  const handleRowClick = (projectId) => {
    navigate(`/prompt?projectId=${projectId}`);
  };

  const handleCreateProject = () => {
    navigate('/create-project');
  };

  const handleEditProject = (e, projectId) => {
    e.stopPropagation();
    navigate(`/edit-project/${projectId}`);
  };

  const handleDeleteDialogOpen = (e, projectId) => {
    e.stopPropagation();
    setProjectToDelete(projectId);
    setDeleteDialogOpen(true);
  };

  const handleDeleteDialogClose = () => {
    setProjectToDelete(null);
    setDeleteDialogOpen(false);
  };

  const handleDeleteProject = async () => {
    try {
      await projectsApi.delete(projectToDelete, token);
      fetchProjects();
    } catch (error) {
      console.error('Error deleting project:', error);
    } finally {
      setDeleteDialogOpen(false);
    }
  };

  const CardView = () => (
    <Grid container spacing={2}>
      {projects.map((project) => (
        <Grid item xs={12} sm={6} md={4} key={project.id}>
          <Card
            elevation={3}
            onClick={() => handleRowClick(project.id)}
            sx={{
              cursor: 'pointer',
              transition: '0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: 6,
              },
            }}
          >
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom>
                {project.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Provider: {project.provider}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Model: {project.provider_model}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Files: {project.file_count || 0}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Tokens: {project.input_tokens || 0} /{' '}
                {project.output_tokens || 0}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Cost: ${calculateProjectCost(project)}
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton
                onClick={(e) => handleEditProject(e, project.id)}
                color="primary"
                size="small"
              >
                <EditIcon />
              </IconButton>
              <IconButton
                onClick={(e) => handleDeleteDialogOpen(e, project.id)}
                color="secondary"
                size="small"
              >
                <DeleteIcon />
              </IconButton>
              <IconButton
                onClick={() => handleRowClick(project.id)}
                color="default"
                size="small"
              >
                <LaunchIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );

  const TableView = () => (
    <TableContainer component={Paper} elevation={3}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Provider</TableCell>
            <TableCell>Model</TableCell>
            <TableCell>File Count</TableCell>
            <TableCell>Tokens</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((project) => (
            <TableRow
              key={project.id}
              hover
              onClick={() => handleRowClick(project.id)}
              sx={{
                cursor: 'pointer',
                '&:last-child td, &:last-child th': { border: 0 },
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                },
              }}
            >
              <TableCell component="th" scope="row">
                {project.name}
              </TableCell>
              <TableCell>{project.provider}</TableCell>
              <TableCell>{project.provider_model}</TableCell>
              <TableCell>{project.file_count || 0}</TableCell>
              <TableCell>
                {project.input_tokens || 0} / {project.output_tokens || 0}
              </TableCell>
              <TableCell>
                <IconButton
                  onClick={(e) => handleEditProject(e, project.id)}
                  color="primary"
                  size="small"
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  onClick={(e) => handleDeleteDialogOpen(e, project.id)}
                  color="secondary"
                  size="small"
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  if (loading || token == null) {
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: 'calc(100vh - 64px)' }}
      >
        <CircularProgress />
      </Grid>
    );
  }

  return (
    <Grid
      container
      justifyContent="center"
      sx={{ mt: 4, mb: 4, px: isMobile ? 2 : 4 }}
    >
      <Grid item xs={12} md={10}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography variant="h4" component="h1">
            Projects
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCreateProject}
          >
            Create Project
          </Button>
        </Grid>
        {isMobile ? <CardView /> : <TableView />}
      </Grid>

      <Dialog open={deleteDialogOpen} onClose={handleDeleteDialogClose}>
        <DialogTitle>Delete Project</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this project? This action cannot be
            undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteProject} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}

export default Projects;
