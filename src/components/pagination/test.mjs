const DEFAULT_PAGE = 1;
const DEFAULT_SIZE = 5;

function calc(count, page = DEFAULT_PAGE, size = DEFAULT_SIZE) {
  const limit = size > count ? DEFAULT_SIZE : size;
  const totalPages = Math.ceil(count / limit);
  const activePage = page > totalPages ? totalPages : page;

  const skip = (activePage - 1) * limit; // 2 - 1 * 5  = 5
  const currentCount = activePage * limit;

  const start = skip + 1; // 5 + 1 = 6
  const end = currentCount < count ? currentCount : count; // 2 * 5 = 10

  const text = `${start} - ${end} of ${count}`; // 6 - 10 of 50

  return text;
}

