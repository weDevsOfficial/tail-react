import DropdownExample from '@/Components/Dropdown/Example';
import TableExample from '@/Components/Table/Example';
import TextExample from '@/Components/TextField/Example';
import ContextulExample from './Components/ContextualHelp/Example';
import ModalExample from './Components/Modal/Example';
import SwitchExample from './Components/SwitchInput/Example';
import SelectExample from './Components/SelectInput/Example';
import RadioExample from './Components/RadioGroup/Example';

const App = () => {
  return (
    <div className="bg-gray-100 p-6">
      {/* 2x2 grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-6 border">
          <TextExample />
        </div>
        <div className="bg-white p-6 border">
          <DropdownExample />
        </div>
        <div className="bg-white p-6 border">
          <TableExample />
        </div>

        <div className="bg-white p-6 border">
          <ModalExample />
        </div>
        <div className="bg-white p-6 border">
          <ContextulExample />
        </div>
        <div className="bg-white p-6 border">
          <SwitchExample />
        </div>

        <div className="bg-white p-6 border">
          <SelectExample />
        </div>

        <div className="bg-white p-6 border">
          <RadioExample />
        </div>
      </div>
    </div>
  );
};

export default App;
