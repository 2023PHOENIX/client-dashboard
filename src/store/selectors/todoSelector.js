
// Categories
export const getCategories = (state) => state.todo.categories;
export const selectedCategoryIndex = (state) => state.todo.selectedCategory;
export const selectedCategory = (state) => state.todo.categories[state.todo.selectedCategory];

// Projects
export const getProjects = (state) => state.todo.projects;
export const selectedProjectIndex = (state) => state.todo.selectedProject;
export const selectedProject = (state) => state.todo.projects[state.todo.selectedProject];

// Tasks
export const getTasks = (state) => {
    return state.todo.tasks
    
};
export const openedTasks = (state) => state.todo.tasks.filter((task) => task.status);
export const closedTasks = (state) => state.todo.tasks.filter((task) => !task.status);