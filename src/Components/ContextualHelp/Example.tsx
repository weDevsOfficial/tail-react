import { ContextualHelp } from './ContextualHelp';

const ContextulExample = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold border-b pb-4 mb-8">Contextual Help</h1>

      <div className="mt-4">
        <h2 className="text-xl font-bold">Example</h2>
        <div className="mt-2">
          This is an example of how to use the ContextualHelp component.
          <ContextualHelp>
            <h3 className="font-medium text-gray-900 mb-2">Need Help?</h3>
            <p className="text-sm text-gray-500">
              If you're having trouble accessing your account, contact our customer support team for
              help.
            </p>
          </ContextualHelp>
        </div>
      </div>
    </div>
  );
};

export default ContextulExample;
