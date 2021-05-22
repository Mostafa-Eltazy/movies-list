import React from 'react'
import _ from 'lodash'
import propTypes from 'prop-types'

const Pagination = ({onPagePagination, pageSize, moviesNumber,currentPage}) => {

    const pageCount = Math.ceil(moviesNumber / pageSize)
    if(pageCount === 1)  return null
    const pages =_.range(1,pageCount+1)
    
    
    return (
        <div>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {pages.map(page => (
                        <li key={page} className={page === currentPage ? "page-item active" : "page-item"}>
                            <a className="page-link" onClick={()=>onPagePagination(page)} >{page} </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
Pagination.propTypes = {
     
    onPagePagination : propTypes.func.isRequired,
    pageSize : propTypes.number.isRequired,
    moviesNumber : propTypes.number.isRequired,
    currentPage : propTypes.number.isRequired
}
export default Pagination
