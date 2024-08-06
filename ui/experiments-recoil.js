// src/recoil/projectsState.js
import { atom, selector, selectorFamily } from 'recoil';
import { projectsApi } from '../api';

export const projectsState = atom({
  key: 'projectsState',
  default: [],
});

export const projectsStatusState = atom({
  key: 'projectsStatusState',
  default: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
});

export const projectsErrorState = atom({
  key: 'projectsErrorState',
  default: null,
});

export const fetchProjectsSelector = selector({
  key: 'fetchProjectsSelector',
  get: async ({ get, set }) => {
    set(projectsStatusState, 'loading');
    try {
      const response = await projectsApi.list();
      set(projectsState, response.data);
      set(projectsStatusState, 'succeeded');
    } catch (error) {
      set(projectsErrorState, error.message);
      set(projectsStatusState, 'failed');
    }
  },
});

export const createProjectSelector = selectorFamily({
  key: 'createProjectSelector',
  get: (projectData) => async ({ get, set }) => {
    try {
      const response = await projectsApi.create(projectData);
      set(projectsState, (prevProjects) => [...prevProjects, response.data]);
    } catch (error) {
      set(projectsErrorState, error.message);
    }
  },
});

// src/hooks/useProjects.js
import { useRecoilState, useRecoilValue, useSetRecoilState, useRecoilCallback } from 'recoil';
import { projectsState, projectsStatusState, projectsErrorState, fetchProjectsSelector, createProjectSelector } from '../recoil/projectsState';

export const useProjects = () => {
  const [projects, setProjects] = useRecoilState(projectsState);
  const status = useRecoilValue(projectsStatusState);
  const error = useRecoilValue(projectsErrorState);

  const loadProjects = useRecoilCallback(({ set }) => async () => {
    set(fetchProjectsSelector);
  });

  const addProject = useRecoilCallback(({ set }) => async (projectData) => {
    set(createProjectSelector(projectData));
  });

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

// src/App.js
import React from 'react';
import { RecoilRoot } from 'recoil';
import ProjectList from './components/ProjectList';
import CreateProject from './components/CreateProject';

const App = () => (
  <RecoilRoot>
    <div>
      <ProjectList />
      <CreateProject />
    </div>
  </RecoilRoot>
);

export default App;
