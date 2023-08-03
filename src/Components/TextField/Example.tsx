import React, { Fragment, useState } from 'react';
import TextField from './TextField';
import { EnvelopeIcon, UserIcon } from '@heroicons/react/24/outline';

const TextExample = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="max-w-md mx-auto mt-4 p-4 border rounded-md">
      <TextField label="Name" value={name} onChange={setName} required />
      <TextField
        label="Email"
        type="email"
        placeholder="you@example.com"
        help="We'll never share your email with anyone else."
        value={email}
        onChange={setEmail}
        required
      />
      <TextField
        label="Password"
        value={password}
        onChange={setPassword}
        type="password"
        required
        contextualHelp={
          <Fragment>
            <h3 className="font-medium text-gray-900 mb-2">Need Help?</h3>
            <p className="text-sm text-gray-500">
              If you're having trouble accessing your account, contact our customer support team for
              help.
            </p>
          </Fragment>
        }
      />

      <h2 className="text-lg font-medium text-gray-900 mt-8 mb-2">Error</h2>
      <TextField
        label="Name"
        value={name}
        onChange={setName}
        placeholder="John Doe"
        help="Please give your full name"
        required
        error="Name is required"
      />

      <h2 className="text-lg font-medium text-gray-900 mt-8 mb-2">Disabled</h2>
      <TextField label="Name" value={'some value'} onChange={setName} disabled />

      <h2 className="text-lg font-medium text-gray-900 mt-8 mb-2">Readonly</h2>
      <TextField label="Name" value={'some value'} onChange={setName} readonly />

      <h2 className="text-lg font-medium text-gray-900 mt-8 mb-2">Addon and Traling Addon</h2>
      <TextField
        label="Company Website"
        value={name}
        onChange={setName}
        className="flex-1 border-0 ring-0 focus:ring-0 bg-transparent"
        addon={
          <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
            http://
          </span>
        }
      />

      <TextField
        label="Price"
        value={name}
        type="number"
        onChange={setName}
        className="flex-1 border-0 ring-0 focus:ring-0 bg-transparent"
        addon={
          <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">$</span>
        }
        trailingAddon={
          <span className="flex select-none items-center pr-3 text-gray-500 sm:text-sm">USD</span>
        }
      />

      <TextField
        label="Price"
        value={name}
        type="number"
        onChange={setName}
        className="flex-1 border-0 ring-0 focus:ring-0 bg-transparent"
        addon={
          <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">$</span>
        }
        trailingAddon={
          <span className="flex select-none items-center pr-2 text-gray-500 sm:text-sm">
            <select className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-2 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
              <option>USD</option>
              <option>EUR</option>
              <option>GBP</option>
            </select>
          </span>
        }
      />

      <TextField
        label="First name"
        value={name}
        onChange={setName}
        className="flex-1 border-0 ring-0 focus:ring-0 bg-transparent"
        addon={
          <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
            <UserIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </span>
        }
      />

      <TextField
        label="Email"
        value={email}
        onChange={setEmail}
        className="flex-1 border-0 ring-0 focus:ring-0 bg-transparent"
        addon={
          <span className="flex select-none items-center pl-3 pr-1 text-gray-500 sm:text-sm">
            <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </span>
        }
        help="We'll never share your email with anyone else."
      />

      <TextField
        label="Quick Search"
        value={email}
        onChange={setEmail}
        className="flex-1 border-0 ring-0 focus:ring-0 bg-transparent"
        trailingAddon={
          <span className="flex select-none items-center pl-3 pr-2 text-gray-500 sm:text-sm">
            <kbd className="inline-flex items-center rounded border border-gray-200 px-1 font-sans text-xs text-gray-400">
              ⌘K
            </kbd>
          </span>
        }
      />
    </div>
  );
};

export default TextExample;
