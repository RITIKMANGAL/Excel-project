import React, { useRef, useState } from "react";
import { DownloadTableExcel } from "react-export-table-to-excel";
import { useDownloadExcel } from "react-export-table-to-excel";
import { data } from "../data.js";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const [seacrh, setSearch] = useState("");
  const [yearSearch, setYearSeacrh] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 10;
  const lastIndex = currentPage * dataPerPage;
  const firstIndex = lastIndex - dataPerPage;
  const record = data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data.length / dataPerPage);
  const numberOfPage = [...Array(npage + 1).keys()].slice(1);

  const tableRef = useRef(null);

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Users table",
    sheet: "Users",
  });

  const nextPage = () => {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changePage = (id) => {
    setCurrentPage(id);
  };

  return (
    <>
      <div className={styles.wFull}>
        <div className={`${styles.flex} ${styles.mt3} ${styles.gap5} ${styles.justifyEnd} ${styles.mr14}`}>
          <input
            type="text"
            placeholder="search..."
            className={styles.input}
            onChange={(e) => setSearch(e.target.value)}
          />
          <input
            type="text"
            className={styles.inputYear}
            placeholder="Year"
            onChange={(e) => setYearSeacrh(e.target.value)}
          />
          <button
            onClick={onDownload}
            className={styles.buttonDownload}
          >
            Download Excel
          </button>
        </div>
        <div className={styles.container}>
          <div className={styles.relative}>
            <table
              ref={tableRef}
              className={styles.table}
            >
              <thead className={styles.thead}>
                <tr>
                  <th scope="col" className={styles.th}>
                    title
                  </th>
                  <th scope="col" className={styles.th}>
                    genres
                  </th>
                  <th scope="col" className={styles.th}>
                    year
                  </th>
                  <th scope="col" className={styles.th}>
                    date
                  </th>
                  <th scope="col" className={styles.th}>
                    time
                  </th>
                </tr>
              </thead>
              <tbody>
                {record
                  .filter((item) => {
                    return seacrh.toLowerCase() === ""
                      ? item
                      : item.title.toLowerCase().includes(seacrh);
                  })
                  .filter((item) => {
                    return yearSearch.toLowerCase() === ""
                      ? item
                      : item.year.toString().includes(yearSearch);
                  })
                  .map((item) => (
                    <tr key={item.id} className={styles.tr}>
                      <th scope="row" className={styles.th}>
                        {item.title}
                      </th>
                      <td className={styles.td}>{item.genres}</td>
                      <td className={styles.td}>{item.year}</td>
                      <td className={styles.td}>{item.date}</td>
                      <td className={styles.td}>{item.time}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div>
          <nav>
            <ul className={styles.paginationNav}>
              <li>
                <a
                  href="#"
                  onClick={prevPage}
                  className={styles.paginationLink}
                >
                  prev
                </a>
              </li>
              {numberOfPage.map((n, i) => (
                <li>
                  <a
                    href="#"
                    key={i}
                    onClick={() => changePage(n)}
                    className={`${styles.paginationLink} ${
                      currentPage === n ? styles.paginationLinkActive : ""
                    }`}
                  >
                    {n}
                  </a>
                </li>
              ))}

              <li>
                <a
                  href="#"
                  onClick={nextPage}
                  className={styles.paginationLink}
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
