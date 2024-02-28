export default function Pagination({ total, current = 1 }: PaginationProps) {
  return (
    <ul className="pagination">
      {Array.from({ length: total }).map((_, index) => {
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
  current: number;
};
