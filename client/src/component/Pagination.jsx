import React from 'react';

const Pagination = ({ postPerPage, totalPosts }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (event) => {
    event.preventDefault();
    console.log(event.target.innerText);
  };

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((pageNum) => (
          <li key={pageNum} className="page-item">
            <a onClick={handleClick} href="#" className="page-link">
              {pageNum}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
