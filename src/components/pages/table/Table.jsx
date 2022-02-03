import React, { useEffect, useState } from 'react';
import { CustomTablePagination } from './TablePagination';
import { fetchData } from "../../../state/actions/tableActions/TableActions";
import { deleteData } from "../../../state/actions/tableActions/TableActions";
import { useDispatch, useSelector } from "react-redux";
import { Root } from './TablePagination';
import CreateItem from './CreateItem';
import UpdateItem from "./UpdateItem";

export default function Table() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [createVisible, setCreateVisible] = useState(false);
  const [updateVisible, setUpdateVisible] = useState(false);
  const [itemToUpdate, setItemToUpdate] = useState(null);
  const [filteredItem, setFilteredItem] = useState(null);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const dispatch = useDispatch();
  const tableData = useSelector(state => state.table);
  const { data, isLoading } = tableData;

  //Filtered table item by select element
  const display = filteredItem ? filteredItem : data;

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  const handleDelete = (id) => {
    dispatch(deleteData(id));
  }

  const handleUpdate = (item) => {
    setUpdateVisible(true);
    setItemToUpdate(item);
  }

  const filterData = (e) => {
    const filterData = data.filter(item => item.id === parseInt(e.target.value));
    setFilteredItem(filterData);
  }

  return (
    <div className='table'>
      <div className='table_header'>
        <h2 className='table_title'>JSON server crud</h2>
        <h5>You need to install this: npm install -g json-server</h5>
        <h5>You need to start the server: npm run server</h5>
        <div className='header_events'>
          <button onClick={() => setCreateVisible(true)} className='add'>Add new post</button>
          <span style={{marginRight: "5px"}}>Find by ID</span>
          <select onChange={filterData} style={{padding: "5px"}}>
            {data.map(item => (
              <option key={item.id} value={item.id}>{item.id}</option>
            ))}
          </select>
          <button onClick={() => setFilteredItem(null)} className='view_all'>View all</button>
        </div>
      </div>
      {isLoading ? (
        <div className='loading'>Loading...</div>
      ) : (
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
                ? display.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : display
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
                    <i style={{ color: "orange", marginRight: "10px", fontSize: "18px", cursor: "pointer" }} onClick={() => handleUpdate(post)} className='fas fa-pen'></i>
                    <i style={{ color: "red", marginRight: "10px", fontSize: "18px", cursor: "pointer" }} onClick={() => handleDelete(post.id)} className='fas fa-trash'></i>
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
      )}

      {createVisible && <CreateItem setCreateVisible={setCreateVisible} />}
      {updateVisible && <UpdateItem itemToUpdate={itemToUpdate} setUpdateVisible={setUpdateVisible} />}
    </div>

  );
}