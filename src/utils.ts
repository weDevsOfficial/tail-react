import classNames, { Argument } from 'classnames';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: Argument[]) {
  return twMerge(classNames(inputs));
}
