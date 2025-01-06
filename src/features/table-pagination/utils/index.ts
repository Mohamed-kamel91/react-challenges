type GetData<T> = {
  data: readonly T[];
  page: number;
  limit: number;
};

export function getData<T>({
  data,
  page,
  limit,
}: GetData<T>): T[] {
  const fromRow = (page - 1) * limit;
  const toRow = page * limit;
  return data.slice(fromRow, toRow);
}
