import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PaginationBar extends Component {
    constructor(props) {
        super(props);

        PaginationBar.propTypes = {
            data: PropTypes.array.isRequired,
            currentPage: PropTypes.number.isRequired,
            rowsPerPage: PropTypes.number.isRequired,
            onChangePage: PropTypes.func.isRequired,
            totalPages: PropTypes.number.isRequired,
        };

        PaginationBar.defaultProps = {
            initialPage: 1,
        }
    }

    setPage(currentPage) {
        const totalPages = this.props.totalPages;
        if (currentPage < 1 || currentPage > totalPages) {
            return;
        }

        this.props.onChangePage(currentPage);
    }

    render() {
        const { currentPage, totalPages, startPage, endPage } = this.props;

        // render() will reset pageNumbers to an empty array
        const pageNumbers = [];
        for (let page = startPage; page <= endPage; page++) {
            pageNumbers.push(page); // array of page numbers
        }

        const renderPageNumbers = pageNumbers.map(page => {
            return (
                <li key={page}
                    onClick={ () => this.setPage(page) }
                    className={ currentPage === page ? "active" : "" }>
                    <a className="page-number">
                        { page }
                    </a>
                </li>
            )
        });

        // render left and right arrows, prevPage, currentPage, nextPage in pagination bar
        return (
            <ul className="pagination-bar">
                <li onClick={ () => this.setPage(1) }
                    className={ currentPage === 1 ? "disabled" : "" }>
                    <a>
                        <i className="fa fa-angle-double-left" aria-hidden="true"></i>
                    </a>
                </li>

                <li className={ currentPage === 1 ? "disabled" : "" }
                    onClick={ () => this.setPage(currentPage - 1) }>
                    <a>
                        <i className="fa fa-angle-left" aria-hidden="true"></i>
                    </a>
                </li>

                { renderPageNumbers }

                <li className={ currentPage === totalPages ? "disabled" : "" }
                    onClick={ () => this.setPage(currentPage + 1) }>
                    <a>
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                </li>

                <li className={ currentPage === totalPages ? "disabled" : "" }
                    onClick={ () => this.setPage(totalPages) }>
                    <a>
                        <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                    </a>
                </li>
            </ul>
        );
    }
}

export default PaginationBar;
