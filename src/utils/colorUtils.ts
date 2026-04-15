import { useTailReactBaseColor } from '../context/TailReactBaseColor';

/**
 * Helper function to get a Tailwind CSS class with the current theme color
 * @param baseClass The base CSS class (e.g., 'bg', 'text', 'border')
 * @param shade The color shade (e.g., '500', '600', '700')
 * @param defaultColor The default color to use if no context is provided
 * @returns The complete Tailwind CSS class with color
 */
export const getColorClass = (
  baseClass: string,
  shade: string | number = '',
  defaultColor: string = 'indigo'
): string => {
  try {
    const { color } = useTailReactBaseColor();
    const actualColor = color || defaultColor;
    return shade ? `${baseClass}-${actualColor}-${shade}` : `${baseClass}-${actualColor}`;
  } catch (error) {
    // If the context is not available, fall back to default color
    return shade ? `${baseClass}-${defaultColor}-${shade}` : `${baseClass}-${defaultColor}`;
  }
};

/**
 * Get multiple color classes for a component with fall back to default color
 * @param colorConfig Object mapping base classes to shade values
 * @param defaultColor The default color to use if no context is provided
 * @returns String of Tailwind CSS classes
 */
export const getColorClasses = (
  colorConfig: Record<string, string | number>,
  defaultColor: string = 'indigo'
): string => {
  try {
    const { color } = useTailReactBaseColor();
    const actualColor = color || defaultColor;

    return Object.entries(colorConfig)
      .map(([baseClass, shade]) => {
        return shade ? `${baseClass}-${actualColor}-${shade}` : `${baseClass}-${actualColor}`;
      })
      .join(' ');
  } catch (error) {
    // If the context is not available, fall back to default color
    return Object.entries(colorConfig)
      .map(([baseClass, shade]) => {
        return shade ? `${baseClass}-${defaultColor}-${shade}` : `${baseClass}-${defaultColor}`;
      })
      .join(' ');
  }
};
