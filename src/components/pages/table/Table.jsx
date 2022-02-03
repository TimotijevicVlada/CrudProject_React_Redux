import React, { useEffect, useState } from 'react';
import { CustomTablePagination } from './TablePagination';
import { fetchData } from "../../../state/actions/tableActions/TableActions";
import { deleteData } from "../../../state/actions/tableActions/TableActions";
import { useDispatch, useSelector } from "react-redux";
import { Root } from './TablePagination';

export default function Table() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const dispatch = useDispatch();
  const tableData = useSelector(state => state.table);
  const { data, isLoading, error } = tableData;

  useEffect(() => {
    dispatch(fetchData())
  }, [])

  const handleDelete = (id) => {
    dispatch(deleteData(id));
    console.log("DELETE");
  }


  return (
    <div className='table'>
      <h2 className='table_title'>JSON server crud: npm run server</h2>
      <Root style={{ width: "100%" }}>
        <table aria-label="custom pagination table">
          <thead>
            <tr>
              <th style={{ width: "10%" }}>ID</th>
              <th style={{ width: "30%" }}>Title</th>
              <th style={{ width: "40%" }}>Body</th>
              <th style={{ width: "20%" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {(rowsPerPage > 0
              ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : data
            ).map((post) => (
              <tr key={post.id}>
                <td style={{ width: "10%" }}>{post.id}</td>
                <td style={{ width: "30%" }} align="right">
                  {post.title}
                </td>
                <td style={{ width: "40%" }} align="right">
                  {post.body}
                </td>
                <td style={{ width: "20%", textAlign: "center" }}>
                  <i className='fas fa-pen'></i>
                  <i onClick={() => handleDelete(post.id)} className='fas fa-trash'></i>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <CustomTablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={4}
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                componentsProps={{
                  select: {
                    'aria-label': 'rows per page',
                  },
                  actions: {
                    showFirstButton: true,
                    showLastButton: true,
                  },
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </tr>
          </tfoot>
        </table>
      </Root>
    </div>

  );
}