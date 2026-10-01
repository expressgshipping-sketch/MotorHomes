interface PaginationProps {
  page: number;
  pageCount: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ page, pageCount, totalItems, pageSize, onPageChange }: PaginationProps) {
  if (pageCount <= 1) return null;

  const firstItem = (page - 1) * pageSize + 1;
  const lastItem = Math.min(page * pageSize, totalItems);

  return (
    <nav aria-label="Catalogue pages" className="mt-8 flex flex-wrap items-center justify-between gap-4">
      <p className="text-sm text-gray-600">Showing {firstItem}–{lastItem} of {totalItems}</p>
      <div className="flex items-center gap-3">
        <button type="button" onClick={() => onPageChange(page - 1)} disabled={page <= 1} className="rounded border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50">Previous</button>
        <span aria-live="polite" className="text-sm text-gray-700">Page {page} of {pageCount}</span>
        <button type="button" onClick={() => onPageChange(page + 1)} disabled={page >= pageCount} className="rounded border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50">Next</button>
      </div>
    </nav>
  );
}
