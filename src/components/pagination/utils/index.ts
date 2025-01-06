/**
 * Calculates the total number of pages based on the count of items and page size.
 * 
 * @param {number} count - The total number of items.
 * @param {number} pageSize - The number of items per page.
 * @returns {number} - The total number of pages.
 * 
 * If the count is zero or negative, returns 0.
 * If the pageSize is zero or negative, returns 1 (all items fit on one page).
 * 
 * @example
 * // With 10 items and a page size of 5, the result is 2 pages
 * calcTotalPages(10, 5); // Returns 2
 *
 * @example
 * // With 0 items and any page size, the result is 0 pages
 * calcTotalPages(0, 5); // Returns 0
 *
 * @example
 * // With 10 items and a non-positive page size, the result is 1 page
 * calcTotalPages(10, 0); // Returns 1
 */
export const calcTotalPages = (
  count: number,
  pageSize: number
) => {
  if (count <= 0) return 0; // No items, no pages
  if (pageSize <= 0) return 1; // Non-positive pageSize means all items fit on one page
  return Math.ceil(count / pageSize); // Calculate total pages normally
};

/**
 * Validates the page size by ensuring it does not exceed the total count of items.
 * 
 * @param {number} pageSize - The requested page size.
 * @param {number} count - The total number of items available.
 * @returns {number} - The validated page size, which is the minimum of the requested size and the total count.
 */
export const validatePageSize = (
  pageSize: number,
  count: number
) => {
  return Math.min(pageSize, count);
};

/**
 * Validates the current page number to ensure it is within the valid range.
 * 
 * @param {number} currentPage - The requested current page.
 * @param {number} totalPages - The total number of available pages.
 * @returns {number} - The validated current page number.
 * 
 * If totalPages is zero or currentPage is less than or equal to zero, returns 0.
 * Otherwise, returns the smaller of the currentPage and totalPages to ensure it's within bounds.
 */
export const validateCurrentPage = (
  currentPage: number,
  totalPages: number
) => {
  if (totalPages <= 0 || currentPage <= 0) return 0;
  return Math.min(currentPage, totalPages);
};
