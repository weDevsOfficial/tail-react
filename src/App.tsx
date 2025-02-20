import { Button } from './Components';

const App = () => {
  return (
    <div className="p-6 space-y-4">
      <div className="h-20 w-20 bg-amber-400 dark:bg-white/10">Hello</div>

      <Button variant="secondary" onClick={() => console.log('Button clicked')}>
        Click me
      </Button>
    </div>
  );
};

export default App;
