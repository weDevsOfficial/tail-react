import ButtonExample from '@/Components/Button/Example';
import TableExample from '@/Components/Table/Example';
import DropdownExample from '@/Components/Dropdown/Example';

const App = () => {
  return (
    <div className="container mx-auto p-12">
      <DropdownExample />
      <TableExample />
      <ButtonExample />
    </div>
  );
};

export default App;
