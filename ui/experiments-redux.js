// src/store/projectsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { projectsApi } from '../api';

export const fetchProjects = createAsyncThunk(
  'projects/fetchProjects',
  async (_, { rejectWithValue }) => {
    try {
      const response = await projectsApi.list();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createProject = createAsyncThunk(
  'projects/createProject',
  async (projectData, { rejectWithValue }) => {
    try {
      const response = await projectsApi.create(projectData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    projects: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.projects = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(createProject.fulfilled, (state, action) => {
        state.projects.push(action.payload);
      });
  },
});

export default projectsSlice.reducer;

// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './projectsSlice';

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
  },
});

// src/hooks/useProjects.js
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjects, createProject } from '../store/projectsSlice';

export const useProjects = () => {
  const dispatch = useDispatch();
  const { projects, status, error } = useSelector((state) => state.projects);

  const loadProjects = () => {
    dispatch(fetchProjects());
  };

  const addProject = (projectData) => {
    dispatch(createProject(projectData));
  };

  return {
    projects,
    status,
    error,
    loadProjects,
    addProject,
  };
};

// src/components/ProjectList.js
import React, { useEffect } from 'react';
import { useProjects } from '../hooks/useProjects';

const ProjectList = () => {
  const { projects, status, error, loadProjects } = useProjects();

  useEffect(() => {
    if (status === 'idle') {
      loadProjects();
    }
  }, [status, loadProjects]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;

// src/components/CreateProject.js
import React, { useState } from 'react';
import { useProjects } from '../hooks/useProjects';

const CreateProject = () => {
  const [name, setName] = useState('');
  const { addProject } = useProjects();

  const handleSubmit = (e) => {
    e.preventDefault();
    addProject({ name });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Project Name"
      />
      <button type="submit">Create Project</button>
    </form>
  );
};

export default CreateProject;
