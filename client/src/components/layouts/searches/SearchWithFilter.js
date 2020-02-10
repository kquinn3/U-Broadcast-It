import React, { Fragment, useState } from "react";

const SearchWithFilter = ({
  onSubmit,
  onChange,
  onSport,
  miles,
  zipcode,
  team
}) => {
  return (
    <Fragment>
      <div className="card card-body bg-light mb-4">
        <h4 className="mb-1">
          <i className="fas fa-search mr-3"></i>By Location
        </h4>
        <p className="mb-3 text-danger text-center">
          (Enter large search area to see games)
        </p>
        <form onSubmit={onSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="miles"
                  value={miles}
                  required
                  placeholder="Miles From"
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="zipcode"
                  value={zipcode}
                  placeholder="Enter Zipcode"
                  required
                  onChange={onChange}
                />
              </div>
            </div>
          </div>

          <h4 className="mb-3">
            <i className="fas fa-filter mr-3"></i>Filter
          </h4>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="team"
              value={team}
              placeholder="team name"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <select
              name="sport"
              className="mb-2 form-control"
              onChange={onSport}
            >
              <option value="all">All Sports</option>
              <option value="hockey">Hockey</option>
              <option value="basketball">Basketball -Not implemented</option>
            </select>
          </div>

          <input
            type="submit"
            value="Find Games"
            className="btn btn-primary btn-block"
          />
        </form>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  game: state.game
});

export default SearchWithFilter;
