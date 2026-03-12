import { Button } from '../Button';

export interface Link {
  label: string;
  url: string | null;
  active: boolean;
  page: number | null;
}

export interface PaginationData<T = Record<string, unknown>> {
  data: T[];
  links: Link[];
  current_page: number;
  last_page: number;
  first_page_url?: string;
  last_page_url?: string;
  next_page_url?: string | null;
  prev_page_url?: string | null;
  path?: string;
  per_page: number;
  total: number;
  from: number | null;
  to: number | null;
}

interface PaginationProps<T = Record<string, unknown>> {
  data: PaginationData<T>;
  align?: 'start' | 'center' | 'end';
  showInfo?: boolean;
  buttonStyle?: 'fill' | 'outline' | 'link';
  paginationButtonAs?: 'a' | 'button';
}

export function Pagination<T = Record<string, unknown>>({
  data,
  align = 'end',
  showInfo = false,
  buttonStyle = 'fill',
  paginationButtonAs = 'a',
}: PaginationProps<T>) {
  if (!data) return null;

  const {
    prev_page_url,
    next_page_url,
    from,
    to,
    total,
    links,
  } = data;

  const hasNav =
    Boolean(prev_page_url || next_page_url) ||
    (Array.isArray(links) && links.length > 0);

  const pageLinks = links.filter(link => /^\d+$/.test(link.label));

  const getAlignStyle = () => {
    if (align === 'end') return 'md:justify-end';
    if (align === 'start') return 'md:justify-start';
    if (align === 'center') return 'md:justify-center';
    return 'md:justify-end';
  };

  const Info = ({ showInfo }: { showInfo: boolean }) => {
    if (!showInfo) return null;

    return (
      <div className="mb-2 w-full text-center text-sm text-gray-600 sm:mb-0 md:text-left" aria-live="polite">
        Showing {from ?? 0} to {to ?? 0} of {total} entries
      </div>
    );
  };

  return (
    <div className="flex w-full flex-col items-center justify-center md:flex-row md:justify-between">
      <Info showInfo={showInfo} />

      {hasNav && (
        <nav
          className={`flex w-full flex-wrap items-center justify-center space-x-2 ${getAlignStyle()}`}
          aria-label="Pagination Navigation"
        >
          <Button
            variant="secondary"
            style={buttonStyle}
            size="medium"
            disabled={!prev_page_url}
            as={paginationButtonAs}
            href={prev_page_url ?? undefined}
            className={!prev_page_url ? 'pointer-events-none' : ''}
            aria-label="Go to previous page"
          >
            Previous
          </Button>

          {pageLinks.map((link) => (
            <Button
              key={link.url ?? `p-${link.label}`}
              variant={link.active ? 'primary' : 'secondary'}
              style={buttonStyle}
              size="medium"
              disabled={!link.url}
              as={link.url ? 'a' : paginationButtonAs}
              href={link.url || '#'}
              className={!link.url ? 'pointer-events-none' : ''}
              aria-label={`Go to page ${link.label}`}
              aria-current={link.active ? 'page' : undefined}
            >
              {link.label}
            </Button>
          ))}

          <Button
            variant="secondary"
            style={buttonStyle}
            size="medium"
            disabled={!next_page_url}
            as={paginationButtonAs}
            href={next_page_url ?? undefined}
            className={!next_page_url ? 'pointer-events-none' : ''}
            aria-label="Go to next page"
          >
            Next
          </Button>
        </nav>
      )}
    </div>
  );
}
