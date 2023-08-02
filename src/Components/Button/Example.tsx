import Button from './Button';
import {
  MagnifyingGlassIcon,
  PlusIcon,
  TrashIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

const ButtonExample = () => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4">Primary Buttons</h3>
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 mb-8">
        <Button variant="primary" style="fill" size="small">
          Primary Small
        </Button>

        <Button variant="primary" style="fill" size="medium">
          Primary Medium
        </Button>

        <Button variant="primary" style="fill" size="large">
          Primary Large
        </Button>

        <Button disabled={true} variant="primary" style="fill" size="large">
          Primary Disabled
        </Button>

        <Button variant="primary" style="link" size="large">
          Primary Link
        </Button>
      </div>

      <h3 className="text-lg font-medium mb-4">Secondary Buttons</h3>

      <div className="mx-auto flex max-w-3xl flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 mb-8">
        <Button variant="secondary" style="fill" size="small">
          Secondary Small
        </Button>

        <Button variant="secondary" style="fill" size="medium">
          Secondary Medium
        </Button>

        <Button variant="secondary" style="fill" size="large">
          Secondary Large
        </Button>

        <Button disabled={true} variant="secondary" style="fill" size="large">
          Secondary Large
        </Button>

        <Button variant="secondary" style="link" size="large">
          Secondary Link
        </Button>
      </div>

      <h3 className="text-lg font-medium mb-4">Danger Buttons</h3>

      <div className="mx-auto flex max-w-3xl flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 mb-8">
        <Button variant="danger" style="fill" size="small">
          Danger Small
        </Button>

        <Button variant="danger" style="fill" size="medium">
          Danger Medium
        </Button>

        <Button variant="danger" style="fill" size="large">
          Danger Large
        </Button>

        <Button disabled={true} variant="danger" style="fill" size="large">
          Danger Large
        </Button>

        <Button variant="danger" style="link" size="large">
          Danger Link
        </Button>
      </div>

      <h3 className="text-lg font-medium mb-4">Primary Outline Buttons</h3>
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 mb-8">
        <Button variant="primary" style="outline" size="small">
          Primary Outline Small
        </Button>

        <Button variant="primary" style="outline" size="medium">
          Primary Outline Medium
        </Button>

        <Button variant="primary" style="outline" size="large">
          Primary Outline Large
        </Button>
      </div>

      <h3 className="text-lg font-medium mb-4">Danger Outline Buttons</h3>
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 mb-8">
        <Button variant="danger" style="outline" size="small">
          Danger Outline Small
        </Button>

        <Button variant="danger" style="outline" size="medium">
          Danger Outline Medium
        </Button>

        <Button variant="danger" style="outline" size="large">
          Danger Outline Large
        </Button>
      </div>

      <h3 className="text-lg font-medium mb-4">Icon</h3>
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 mb-8">
        <Button variant="secondary" style="fill" size="medium" className="inline-flex">
          <UserGroupIcon className="h-5 w-5 mr-2" />
          Add People
        </Button>

        <Button variant="primary" style="fill" size="medium" className="inline-flex">
          <PlusIcon className="h-5 w-5 mr-2" />
          Add People
        </Button>

        <Button variant="primary" style="outline" size="medium" className="inline-flex">
          <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
          Search
        </Button>

        <Button variant="danger" style="outline" size="medium" className="inline-flex">
          <TrashIcon className="h-5 w-5 mr-2" />
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ButtonExample;
