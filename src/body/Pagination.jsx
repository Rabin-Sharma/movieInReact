import React from "react";

const Pagination = ({ page, totalPages, setPage }) => {
  const generatePageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (page > 3) {
        pages.push("...");
      }

      const start = Math.max(2, page - 1);
      const end = Math.min(totalPages - 1, page + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (page < totalPages - 2) {
        pages.push("...");
      }

      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <nav aria-label="Page navigation" className="d-flex justify-content-center">
      <ul className="pagination justify-content-end">
        <li className={`page-item ${page === 1 && "disabled"}`}>
          <a
            className="page-link"
            href="#"
            aria-label="Previous"
            onClick={(e) => {
              e.preventDefault();
              if (page > 1) setPage(page - 1);
            }}
          >
            &laquo;
          </a>
        </li>

        {generatePageNumbers().map((p, index) => (
          <li
            key={index}
            className={`page-item ${p === page ? "active" : ""} ${
              p === "..." ? "disabled" : ""
            }`}
          >
            <a
              className="page-link"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (p !== "...") setPage(p);
              }}
            >
              {p}
            </a>
          </li>
        ))}

        <li className={`page-item ${page === totalPages && "disabled"}`}>
          <a
            className="page-link"
            href="#"
            aria-label="Next"
            onClick={(e) => {
              e.preventDefault();
              if (page < totalPages) setPage(page + 1);
            }}
          >
            &raquo;
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
