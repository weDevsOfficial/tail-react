import type { Meta, StoryObj } from '@storybook/react';

import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    align: {
      control: { type: 'select' },
      options: ['start', 'center', 'end'],
    },
    buttonStyle: {
      control: { type: 'select' },
      options: ['fill', 'outline', 'link'],
    },
    paginationButtonAs: {
      control: { type: 'select' },
      options: ['a', 'button'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

// Mock pagination data for different scenarios
const createMockData = (currentPage: number, totalPages: number, showEllipsis = false) => {
  const links = [];

  // Previous link
  links.push({
    label: '&laquo; Previous',
    url: currentPage > 1 ? `/page/${currentPage - 1}` : null,
    active: false,
    page: null,
  });

  // Page links
  if (showEllipsis && totalPages > 7) {
    // Complex pagination with ellipsis
    if (currentPage <= 4) {
      for (let i = 1; i <= 5; i++) {
        links.push({
          label: i.toString(),
          url: `/page/${i}`,
          active: i === currentPage,
          page: i,
        });
      }
      links.push({ label: '...', url: null, active: false, page: null });
      links.push({
        label: totalPages.toString(),
        url: `/page/${totalPages}`,
        active: false,
        page: totalPages,
      });
    } else if (currentPage >= totalPages - 3) {
      links.push({
        label: '1',
        url: '/page/1',
        active: false,
        page: 1,
      });
      links.push({ label: '...', url: null, active: false, page: null });
      for (let i = totalPages - 4; i <= totalPages; i++) {
        links.push({
          label: i.toString(),
          url: `/page/${i}`,
          active: i === currentPage,
          page: i,
        });
      }
    } else {
      links.push({
        label: '1',
        url: '/page/1',
        active: false,
        page: 1,
      });
      links.push({ label: '...', url: null, active: false, page: null });
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        links.push({
          label: i.toString(),
          url: `/page/${i}`,
          active: i === currentPage,
          page: i,
        });
      }
      links.push({ label: '...', url: null, active: false, page: null });
      links.push({
        label: totalPages.toString(),
        url: `/page/${totalPages}`,
        active: false,
        page: totalPages,
      });
    }
  } else {
    // Simple pagination without ellipsis
    for (let i = 1; i <= totalPages; i++) {
      links.push({
        label: i.toString(),
        url: `/page/${i}`,
        active: i === currentPage,
        page: i,
      });
    }
  }

  // Next link
  links.push({
    label: 'Next &raquo;',
    url: currentPage < totalPages ? `/page/${currentPage + 1}` : null,
    active: false,
    page: null,
  });

  return {
    data: Array.from({ length: 10 }, (_, i) => ({
      id: (currentPage - 1) * 10 + i + 1,
      name: `Item ${(currentPage - 1) * 10 + i + 1}`,
    })),
    links: links.filter(link => !link.label.includes('&laquo;') && !link.label.includes('&raquo;')),
    current_page: currentPage,
    last_page: totalPages,
    first_page_url: '/page/1',
    last_page_url: `/page/${totalPages}`,
    next_page_url: currentPage < totalPages ? `/page/${currentPage + 1}` : null,
    prev_page_url: currentPage > 1 ? `/page/${currentPage - 1}` : null,
    path: '/page',
    per_page: 10,
    total: totalPages * 10,
    from: (currentPage - 1) * 10 + 1,
    to: Math.min(currentPage * 10, totalPages * 10),
  };
};

export const Basic: Story = {
  args: {
    data: createMockData(1, 5),
    align: 'end',
    showInfo: false,
    donNotRenderIfLessThanThreeLinks: false,
    buttonStyle: 'fill',
    paginationButtonAs: 'a',
  },
};

export const WithInfo: Story = {
  args: {
    data: createMockData(2, 5),
    align: 'end',
    showInfo: true,
    buttonStyle: 'fill',
    paginationButtonAs: 'a',
  },
};

export const Centered: Story = {
  args: {
    data: createMockData(5, 8),
    align: 'center',
    showInfo: false,
    buttonStyle: 'fill',
    paginationButtonAs: 'a',
  },
};

export const OutlineStyle: Story = {
  args: {
    data: createMockData(2, 6),
    align: 'end',
    showInfo: false,
    buttonStyle: 'outline',
    paginationButtonAs: 'a',
  },
};

export const LinkStyle: Story = {
  args: {
    data: createMockData(1, 4),
    align: 'end',
    showInfo: false,
    buttonStyle: 'link',
    paginationButtonAs: 'a',
  },
};

export const FirstPage: Story = {
  args: {
    data: createMockData(1, 5),
    align: 'end',
    showInfo: true,
    buttonStyle: 'fill',
    paginationButtonAs: 'a',
  },
};

export const LastPage: Story = {
  args: {
    data: createMockData(5, 5),
    align: 'end',
    showInfo: true,
    buttonStyle: 'fill',
    paginationButtonAs: 'a',
  },
};

export const MiddlePage: Story = {
  args: {
    data: createMockData(7, 12),
    align: 'end',
    showInfo: false,
    buttonStyle: 'fill',
    paginationButtonAs: 'a',
  },
};

export const AsButtons: Story = {
  args: {
    data: createMockData(3, 7),
    align: 'center',
    showInfo: false,
    buttonStyle: 'outline',
    paginationButtonAs: 'button',
  },
};

export const Minimal: Story = {
  args: {
    data: createMockData(1, 3),
    align: 'start',
    showInfo: false,
    buttonStyle: 'link',
    paginationButtonAs: 'a',
  },
};
