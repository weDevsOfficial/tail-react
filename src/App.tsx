import { Button } from './Components';

const App = () => {
  return (
    <div className="space-y-4 p-6">
      <Button variant="secondary" onClick={() => console.log('Button clicked')}>
        Click me
      </Button>
    </div>
  );
};

export default App;
