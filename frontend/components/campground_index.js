import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { RingLoader } from 'react-spinners';

import PaginationBar from './pagination_bar';

class ThingsIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: "",
            loading: true,
            rowsPerPage: 10,
            currentPage: 1,
        };

        ThingsIndex.propTypes = {
            campgrounds: PropTypes.shape({
                name: PropTypes.string,
            }),
            requestAllCampgrounds: PropTypes.func.isRequired,
        }

        this.onChangePage = this.onChangePage.bind(this);
        this.onChange = this.onChange.bind(this);
        this.selectCampground = this.selectCampground.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        this.props.requestAllCampgrounds().then(() =>
            this.setState({
                loading: false,
            })
        );
    }

    // onChangePage needs to retrieve currentPage from Pagination Component
    onChangePage(currentPage) {
        // fyi, setState() can run asynchronously and has access to prevState
        this.setState((prevState) => {
            return {
              currentPage: currentPage,
            }
        });
    }

    onChange(e) {
        this.setState({
            searchQuery: e.target.value,
            currentPage: 1,
        });
    }

    onSubmit(e) {
        e.preventDefault();
        if (e.target.textContent.length === 0) {
            return;
        }
    };

    selectCampground(e) {
        this.setState({
            searchQuery: e.target.textContent,
        });
    };

    findMatches() {
        const campgroundsArr = [];
        const { campgrounds } = this.props;
        const allIDs = Object.keys(campgrounds);

        // return array of campground names
        allIDs.forEach(id => (
            campgroundsArr.push(campgrounds[id].name)
        ))

        if (this.state.searchQuery.length === 0) {
            return campgroundsArr;
        }

        const matches = campgroundsArr.filter(
            campground => campground.toLowerCase()
                .includes(this.state.searchQuery.toLowerCase())
        )

        if (matches.length === 0) {
            return ["none"];
        }

        return matches;
    }

    // calculate startPage and endPage based on totalPages. The following code modifies number of pages to render when traversing PaginationBar.
    findStartAndEndPage(totalPages) {
        let startPage, endPage;
        const { currentPage } = this.state;

        if (totalPages <= 3) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= 2) {
                startPage = 1;
                endPage = currentPage + 1;
            }
            else if (currentPage + 1 >= totalPages) {
            // consider currentPage is close to exceeding totalPages
            startPage = totalPages - 1;
            endPage = totalPages;
            }
            else {
            // otherwise, currentPage will always be between startPage and endPage
            startPage = currentPage - 1;
            endPage = currentPage + 1;
            }
        }

        return [startPage, endPage];
    }

    render() {
        const { campgrounds } = this.props;
        const { rowsPerPage, currentPage } = this.state;

        const searchResults = this.findMatches().sort((a, b) => {
            a = a.toLowerCase();
            b = b.toLowerCase();
            if (a === b) return 0;
            if (a > b) return 1; // meaning, b comes before a. convert character to ASCII and then makes comparison. So if ("z" > "d"), which is true, return 1, meaning "a" comes before "z".
            return -1;
        });

        const uniqSearchResults = Array.from(new Set(searchResults));

        // need prevPage in order to determine initial index of slice(). if currentPage is 1 (default), then prevPage is 0, which equates to an idx of 0
        const prevPage = currentPage - 1;
        const firstIndex = prevPage * rowsPerPage;

        // when setState executes, render is invoked with updated currentPage value. round up due to zero index to calculate totalPages.
        const lastIndex = currentPage * rowsPerPage;
        const totalPages = Math.ceil(uniqSearchResults.length / rowsPerPage);

        let startPage = this.findStartAndEndPage(totalPages)[0];
        let endPage = this.findStartAndEndPage(totalPages)[1];

        let slicedData;

        // when user selects a single campground on pages other than the first page, selected campground will render beneath search bar.
        if (uniqSearchResults.length === 1 && uniqSearchResults[0] !== "none") {
        slicedData = [uniqSearchResults[0]];
        }
        else {
        slicedData = uniqSearchResults.slice(firstIndex, lastIndex);
        }

        return (
            <div>

                {/* Render header and search form */}
                <header>
                     <div className="text-and-form">
                         <p>Explore. Find your next campground. Begin your search today.</p>
                         <form onSubmit={ this.onSubmit }>
                             <input
                                 type="text"
                                 name="search-query"
                                 placeholder="Discover your next campground..."
                                 onChange={ this.onChange }
                                 value={ this.state.searchQuery }
                                 />
                             <button
                                 type="submit"
                                 name="search"
                                 value="submit"
                                 >
                                    <i className="fas fa-search"></i>
                             </button>
                         </form>
                     </div>
                </header>

                {/* Render loading spinner */}
                <div className="loading-div">
                    <RingLoader
                        className="sweet-loading"
                        color={'#000'}
                        loading={ this.state.loading }
                    >
                    </RingLoader>
                    { this.state.loading ?
                        <p>getting coffee, one sec...</p>
                        :
                        <h1 className="search-results">
                            { uniqSearchResults.length === 1 && uniqSearchResults[0] !== "none" ?
                                `${uniqSearchResults.length} Search Result`
                                :
                                uniqSearchResults[0] === "none" ?
                                    "0 Search Results"
                                    :
                                    `${uniqSearchResults.length} Search Results`
                            }
                        </h1>
                    }
                </div>

                {/* Render list of campgrounds */}
                <div className="main">
                    <ul>
                        <ReactCSSTransitionGroup
                            transitionName="auto"
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={500}
                            >
                            { uniqSearchResults[0] === "none" ?
                                <div className="no-matches-div">
                                    <p>Sorry there were no matches...</p>
                                    <p>Try another search, or head over to <a href="https://www.nps.gov/subjects/camping/campground.htm#3/42.55/-107.75">NPS</a> for more info.
                                    </p>
                                </div>
                                :
                                 slicedData.map((campground, idx) => (
                                    <li
                                        key={idx}
                                        onClick={ this.selectCampground }
                                    >

                                        <p>{ campground }</p>


                                    </li>
                                ))
                            }
                        </ReactCSSTransitionGroup>
                    </ul>
                </div>

                {/* Don't render PaginationBar if uniqSearchResults length <= rowsPerPage */}
                <div className="pagination-container">
                    { uniqSearchResults.length > rowsPerPage ?
                        <PaginationBar
                            data={ uniqSearchResults }
                            currentPage={ currentPage }
                            rowsPerPage={ rowsPerPage }
                            totalPages={ totalPages }
                            startPage={ startPage }
                            endPage={ endPage }
                            onChangePage={ this.onChangePage }
                        />
                        :
                        " "
                    }
                </div>

            </div>
        )
    }
}

export default ThingsIndex;
