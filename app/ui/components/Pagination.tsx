export default function Pagination({ totalPage, page }: PaginationProps) {
  return (
    <ul className="pagination">
      {Array.from({ length: totalPage }, (_, i) => (
        <li className={`page-item ${i + 1 === page ? "active" : ""}`} key={i}>
          <a className="page-link" href="#">
            {i + 1}
          </a>
        </li>
      ))}
    </ul>
  );
}

type PaginationProps = {
  totalPage: number;
  page?: number;
};
