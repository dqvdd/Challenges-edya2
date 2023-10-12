import { useFetch } from './hooks/useFetch';

const MyComponent = () => {
  const { data, isLoading, hasError } = useFetch('https://jsonplaceholder.typicode.com/todos/3');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return <div>Error: {hasError.message}</div>;
  }

  return (
    <>
      <h1>Title: {data.title}</h1>
      <p>Completed: {data.completed ? 'Yes' : 'No'}</p>
    </>
  );
};

export default MyComponent;