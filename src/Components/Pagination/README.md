# Pagination Component Documentation

The `Pagination` component is a flexible pagination control built using React and Tailwind CSS. It displays page navigation links and provides an intuitive interface for users to navigate through paginated data.

## Usage

To use the `Pagination` component, import it into your React component and pass the required props with pagination data.

### Props

The `Pagination` component accepts the following props:

- `data` (Pagination<T>, required): The pagination data object containing links, current page info, and metadata.

- `align` ('start' | 'center' | 'end', optional, default: 'end'): The alignment of the pagination controls. Options are 'start', 'center', or 'end'.

- `showInfo` (boolean, optional, default: false): If true, displays information about the current page range and total entries.

- `donNotRenderIfLessThanThreeLinks` (boolean, optional, default: false): If true, the component won't render if there are fewer than 3 navigation links (Previous, Next, and at least one page).

- `buttonStyle` ('fill' | 'outline' | 'link', optional, default: 'fill'): The visual style type of the buttons. Options are 'fill' (solid background), 'outline' (border only), or 'link' (minimal styling).

- `paginationButtonAs` ('a' | 'button', optional, default: 'a'): The HTML element type to use for pagination buttons. 'a' for anchor links, 'button' for form submissions.

### Pagination Data Structure

The `data` prop expects an object with the following structure:

```typescript
interface Pagination<T = Record<string, unknown>> {
  data: T[];                    // Array of items for the current page
  links: Link[];               // Array of pagination links
  current_page: number;        // Current page number
  last_page: number;           // Total number of pages
  first_page_url?: string;     // URL for the first page
  last_page_url?: string;      // URL for the last page
  next_page_url?: string | null; // URL for the next page
  prev_page_url?: string | null; // URL for the previous page
  path?: string;               // Base path for pagination URLs
  per_page: number;            // Number of items per page
  total: number;               // Total number of items
  from: number;                // First item number on current page
  to: number;                  // Last item number on current page
}

interface Link {
  label: string;               // Display label for the link
  url: string | null;          // URL for the link (null if disabled)
  active: boolean;             // Whether this is the current page
  page: number | null;         // Page number (null for Previous/Next)
}
```

### Examples

```jsx
import React from 'react';
import { Pagination } from '@wedevs/tail-react';

const MyComponent = () => {
  // Example pagination data (typically from an API)
  const paginationData = {
    data: [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      // ... more items
    ],
    links: [
      { label: '1', url: '/api/items?page=1', active: true, page: 1 },
      { label: '2', url: '/api/items?page=2', active: false, page: 2 },
      { label: '3', url: '/api/items?page=3', active: false, page: 3 },
    ],
    current_page: 1,
    last_page: 3,
    first_page_url: '/api/items?page=1',
    last_page_url: '/api/items?page=3',
    next_page_url: '/api/items?page=2',
    prev_page_url: null,
    path: '/api/items',
    per_page: 10,
    total: 25,
    from: 1,
    to: 10,
  };

  return (
    <div className="space-y-4">
      {/* Basic Pagination */}
      <Pagination data={paginationData} />

      {/* Pagination with Info */}
      <Pagination
        data={paginationData}
        showInfo={true}
      />

      {/* Centered Pagination with Outline Buttons */}
      <Pagination
        data={paginationData}
        align="center"
        buttonStyle="outline"
      />

      {/* Pagination that only renders with multiple pages */}
      <Pagination
        data={paginationData}
        donNotRenderIfLessThanThreeLinks={true}
      />

      {/* Pagination using button elements instead of links */}
      <Pagination
        data={paginationData}
        paginationButtonAs="button"
      />
    </div>
  );
};

export default MyComponent;
```

## Features

### Responsive Design

The pagination component is fully responsive and adapts to different screen sizes:

- On mobile devices, elements stack vertically
- On larger screens, pagination controls are displayed horizontally
- Alignment options work across different breakpoints

### Accessibility

The component follows accessibility best practices:

- Uses semantic `<nav>` element with proper ARIA labels
- Provides `aria-current="page"` for the active page
- Includes descriptive `aria-label` attributes for all buttons
- Maintains proper focus management and keyboard navigation
- Screen reader friendly with live region updates for info text

### Button Integration

The component uses the `Button` component internally, inheriting all its styling capabilities:

- Supports different variants (primary, secondary, danger)
- Multiple button styles (fill, outline, link)
- Consistent disabled states and visual feedback
- Proper focus and hover states

## Common Use Cases

### API-driven Pagination

```jsx
const fetchItems = async (page = 1) => {
  const response = await fetch(`/api/items?page=${page}`);
  const data = await response.json();
  setPaginationData(data);
};

<Pagination
  data={paginationData}
  showInfo={true}
/>
```

### Client-side Pagination

```jsx
const itemsPerPage = 10;
const totalPages = Math.ceil(allItems.length / itemsPerPage);
const currentItems = allItems.slice(
  (currentPage - 1) * itemsPerPage,
  currentPage * itemsPerPage
);

const paginationData = {
  data: currentItems,
  links: Array.from({ length: totalPages }, (_, i) => ({
    label: (i + 1).toString(),
    url: null, // Handle navigation in onClick
    active: i + 1 === currentPage,
    page: i + 1,
  })),
  current_page: currentPage,
  last_page: totalPages,
  next_page_url: currentPage < totalPages ? '#' : null,
  prev_page_url: currentPage > 1 ? '#' : null,
  per_page: itemsPerPage,
  total: allItems.length,
  from: (currentPage - 1) * itemsPerPage + 1,
  to: Math.min(currentPage * itemsPerPage, allItems.length),
};

<Pagination
  data={paginationData}
  paginationButtonAs="button"
/>
```

## Customization

### Styling

You can customize the appearance by:

1. Using the provided `buttonStyle` prop
2. Modifying the Button component styles in your theme
3. Adding custom CSS classes through the Button component's `className` prop

### Alignment Options

- `start`: Aligns pagination to the left
- `center`: Centers the pagination controls
- `end`: Aligns pagination to the right (default)

### Button Styles

- `fill`: Solid background buttons (default)
- `outline`: Border-only buttons
- `link`: Minimal link-style buttons

## Best Practices

1. **Always provide meaningful pagination data**: Ensure your pagination data structure matches the expected interface.

2. **Use appropriate button styles**: Choose button styles that match your application's design system.

3. **Consider mobile users**: Test pagination on mobile devices to ensure proper layout and usability.

4. **Handle loading states**: Consider disabling pagination during data loading to prevent multiple rapid requests.

5. **Use semantic URLs**: When possible, use meaningful URLs for pagination links to improve SEO and user experience.

6. **Provide feedback**: Use the `showInfo` prop to give users context about their current position in the data set.

## Browser Support

The Pagination component works in all modern browsers that support:

- ES6+ JavaScript features
- CSS Grid and Flexbox
- Modern React features (hooks, etc.)

For older browser support, ensure your build process includes appropriate polyfills.
