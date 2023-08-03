import { SwitchInput } from './SwitchInput';

const SwitchExample = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Switch Example</h1>

      <div className="mt-4">
        <SwitchInput label="Turn this on" />
      </div>

      <div className="mt-4">
        <SwitchInput label="Turn this on" help="This is a help text?" />
      </div>

      <div className="mt-4">
        <SwitchInput
          label="Turn this on by default"
          initialValue={true}
          help={
            <span>
              This supports HTML.{' '}
              <a href="#" className="text-indigo-600">
                Learn more
              </a>
            </span>
          }
        />
      </div>

      <div className="mt-4">
        <SwitchInput label="I'm disabled" disabled={true} />
      </div>
    </div>
  );
};

export default SwitchExample;
