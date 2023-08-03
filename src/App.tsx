import ButtonExample from '@/Components/Button/Example';
import TableExample from '@/Components/Table/Example';
import DropdownExample from '@/Components/Dropdown/Example';
import TextExample from '@/Components/TextField/Example';
import ModalExample from './Components/Modal/Example';
import ContextulExample from './Components/ContextualHelp/Example';

const App = () => {
  return (
    <div className="container mx-auto p-12">
      <TextExample />
      {/* <DropdownExample /> */}
      {/* <TableExample /> */}
      {/* <ButtonExample /> */}
      {/* <ModalExample /> */}
      <ContextulExample />
    </div>
  );
};

export default App;
