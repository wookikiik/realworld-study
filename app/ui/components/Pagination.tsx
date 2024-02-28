export default function Pagination({
  total,
  perPage = 5,
  current = 1,
}: PaginationProps) {
  const totalPage = Math.ceil(total / perPage);

  return (
    <ul className="pagination">
      {Array.from({ length: totalPage }).map((_, index) => {
        const value = index + 1;
        return (
          <li
            key={value}
            className={`page-item ${value === current ? "active" : ""}`}
          >
            <a className="page-link" href="">
              {value}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

type PaginationProps = {
  total: number;
  perPage?: number;
  current?: number;
};
