import { Notice } from './Components/Notice';

const App = () => {
  return (
    <div className="p-6 space-y-4">
      <Notice label="Order completed" />
      <Notice label="Attention needed" type="warning" />
      <Notice label="There were 2 errors with your submission" type="error" />
      <Notice label="This is a notice" type="info" />
    </div>
  );
};

export default App;
