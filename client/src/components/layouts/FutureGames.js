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
    h1Title = "Your Upcoming Broadcasts";
    noGames = "You do not have any scheduled broadcasts";
    gameType = game.gamesMyScheduled;
  } else if (type == "favorite") {
    h1Title = "Favorite Teams Upcoming Broadcasts";
    noGames = "There are no scheduled broacasts for your favorite teams";
    gameType = game.gamesFavoriteScheduled;
  } else if (type == "defaults") {
    h1Title = "Upcoming Broadcasts in Your Area";
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
        <h1 className="my-3 card-title text-center">{h1Title}</h1>
        {gameType.length > 0 ? (
          <div className="table-responsive-sm card-body">
            <table className="table-sm table-striped f-xs-lg">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Time</th>
                  <th className="d-none d-md-block">Sport</th>
                  <th>Visitor</th>
                  <th>Home</th>
                  <th>View</th>
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
