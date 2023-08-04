import ButtonExample from '@/Components/Button/Example';
import DropdownExample from '@/Components/Dropdown/Example';
import TableExample from '@/Components/Table/Example';
import TextExample from '@/Components/TextField/Example';
import ContextulExample from './Components/ContextualHelp/Example';
import ModalExample from './Components/Modal/Example';
import SwitchExample from './Components/SwitchInput/Example';

const App = () => {
  return (
    <div className="container mx-auto p-12">
      <TextExample />
      <DropdownExample />
      <TableExample />
      <ButtonExample />
      <ModalExample />
      <ContextulExample />
      <SwitchExample />
    </div>
  );
};

export default App;
