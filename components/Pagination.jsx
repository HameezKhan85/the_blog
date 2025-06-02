export default function Pagination({ totalPages, currentPage, onPageChange }) {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const handleClick = (e, page) => {
    e.preventDefault();
    onPageChange(page);
  };

  return (
    <div className="container">
      <ul className="flex items-center justify-between gap-[2px] py-5 border-t mt-7.5 flex-wrap">
        <li className="me-auto">
          <button
            onClick={(e) => handleClick(e, currentPage - 1)}
            aria-label="Previous"
            className={`flex items-center gap-2 text-xs ${
              currentPage === 1
                ? "text-gray-400 cursor-not-allowed pointer-events-none"
                : "text-text hover:text-primary"
            }`}
          >
            <img className="dark:brightness-200" src="/images/icons/arrow-left.png" alt="Left_Arrow_Icon" width={20} height={20} />
            <span>Previous</span>
          </button>
        </li>

        {pages.map((page) => (
          <li key={page}>
            <button
              onClick={(e) => handleClick(e, page)}
              aria-current={currentPage === page ? "page" : undefined}
              className={`w-10 h-10 flex items-center justify-center rounded-lg text-xs font-medium transition ${
                currentPage === page
                  ? "bg--purple-lgt text-primary"
                  : "text-text hover:bg--purple-lgt"
              }`}
              aria-label={`Page ${page}`}
            >
              {page}
            </button>
          </li>
        ))}

        <li className="ms-auto">
          <button
            onClick={(e) => handleClick(e, currentPage + 1)}
            aria-label="Next"
            className={`flex items-center gap-2 text-xs ${
              currentPage === totalPages
                ? "text-gray-400 cursor-not-allowed pointer-events-none"
                : "text-text hover:text-primary"
            }`}
          >
            <span>Next</span>
            <img className="dark:brightness-200" src="/images/icons/arrow-right.png" alt="Right_Arrow_Icon" width={20} height={20} />
          </button>
        </li>
      </ul>
    </div>
  );
}
