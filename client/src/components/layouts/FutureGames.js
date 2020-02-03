import React, { Fragment } from "react";
import FutureGamesItem from "./FutureGamesItem";
// import { getMyGames } from "../../actions/gameActions";
import { connect } from "react-redux";

import PropTypes from "prop-types";

const FutureGames = ({ type, game }) => {
  let h1Title = "";
  let noGames = "";
  let gameType = game.gamesScheduled;
  if (type === "my") {
    h1Title = "Your Broadcasts";
    noGames = "You do not have any scheduled broadcasts";
    gameType = game.gamesMyScheduled;
  } else if (type === "favorite") {
    h1Title = "Favorite Teams Broadcasts";
    noGames = "There are no scheduled broacasts for your favorite teams";
    gameType = game.gamesFavoriteScheduled;
  } else if (type === "defaults") {
    h1Title = "Broadcasts in Your Area";
    noGames = "There are no scheduled broacasts in this area";
    gameType = game.gamesDefaultScheduled;
  } else {
    h1Title = "Upcoming Broadcasts";
    noGames = "There are no games scheduled in your search";
    gameType = game.gamesScheduled;
  }

  return (
    <Fragment>
      <div className=" mb-5 card bg-light">
        <h3 className="my-3 card-title text-center">{h1Title}</h3>
        {gameType.length > 0 ? (
          <div className="table table-small table-responsive-sm">
            <div className="text-center">
              <span className="f-xs table-warning mr-2">Scheduled</span>
              <span className="f-xs table-success mr-2">In Progress</span>
              <span className="f-xs table-danger mr-2">Game Over</span>
            </div>
            <table className="table table-striped f-xs">
              <thead>
                <tr className="d-flex">
                  <th className="col-2">Date</th>
                  <th className="col-2 col-md-1">Time</th>
                  <th className="d-none d-md-block col-md-2">Sport</th>
                  {/* <th className="col-2">Sport</th> */}
                  <th className="col d-md-none text-center">Visitor</th>
                  <th className="col d-md-none text-center">Home</th>
                  <th className="col d-none d-md-block">Visitor</th>
                  <th className="col d-none d-md-block">Home</th>
                  <th className="col-2 col-md-1">View</th>
                </tr>
              </thead>
              <tbody>
                {gameType !== [] &&
                  gameType.map(game => (
                    <FutureGamesItem game={game} key={game.id} />
                  ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="card-body text-center">
            <p>{noGames}</p>
          </div>
        )}
      </div>
    </Fragment>
  );
};

FutureGames.propTypes = {
  game: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  game: state.game
});

export default connect(mapStateToProps, null)(FutureGames);
