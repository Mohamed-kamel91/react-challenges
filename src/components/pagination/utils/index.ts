export const calcTotalPages = (
  count: number,
  pageSize: number
) => {
  return Math.ceil(count / pageSize);
};

export const validatePageSize = (
  pageSize: number,
  count: number
) => {
  return Math.min(pageSize, count);
};

export const validateCurrentPage = (
  page: number,
  totalPages: number
) => {
  return Math.min(page, totalPages);
};
