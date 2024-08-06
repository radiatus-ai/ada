// ProjectsContainer.js
import { ProjectsApi } from 'ada-client';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createApi } from '../clients/adaClient';
import { useAuth } from '../contexts/Auth';
import { useTitleContext } from '../contexts/TitleContext';
import ProjectsPresentation from './components/Projects';

function ProjectsContainer() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState(null);
  const navigate = useNavigate();
  const { setTitle } = useTitleContext();
  const { token } = useAuth();
  const projectsApi = createApi(ProjectsApi, token);

  useEffect(() => {
    setTitle('Projects');
    fetchProjects();
  }, [setTitle]);

  const fetchProjects = async () => {
    try {
      const response = await projectsApi.listProjectsAdaV1ProjectsGet();
      setProjects(response.body);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

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
      await projectsApi.deleteProject(projectToDelete);
      fetchProjects();
    } catch (error) {
      console.error('Error deleting project:', error);
    } finally {
      setDeleteDialogOpen(false);
    }
  };

  return (
    <ProjectsPresentation
      projects={projects}
      loading={loading}
      deleteDialogOpen={deleteDialogOpen}
      handleRowClick={handleRowClick}
      handleCreateProject={handleCreateProject}
      handleEditProject={handleEditProject}
      handleDeleteDialogOpen={handleDeleteDialogOpen}
      handleDeleteDialogClose={handleDeleteDialogClose}
      handleDeleteProject={handleDeleteProject}
    />
  );
}

export default ProjectsContainer;
