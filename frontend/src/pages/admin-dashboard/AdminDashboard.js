import React from "react";
import { Switch, Route } from "react-router-dom";
import CardsIndex from './cards-section/CardIndex';
import UsersIndex from './users-section/UsersIndex';
import { DecksIndex as DeckSection } from './decks-section/DecksIndex';
import { AnnouncmentsIndex as AnnouncmentSection } from './announcments-section/AnnouncmentsIndex';
import { ScoreboardIndex as ScoreboardSection } from './scoreboard-section/ScoreboardIndex';
import Tab from '../../components/admin-dashboard/tab';
import { useRouteMatch } from 'react-router-dom'; 
import { connect } from 'react-redux';
import { Overlay } from '../../app.styles';

const AdminDashboard= ({ props, user: { username } }) => {
  const { url, path } = useRouteMatch();

    return (
      <div
        style={{ background: "rgba(45, 45, 45, 0.85)" }}
        className="ui center aligned container rounded-corners"
      >
      <Overlay />
        <div className="ui grid" style={{marginTop: '0rem'}}>
          <div className="four wide column">
            <div className="ui vertical fluid tabular menu">
            <Tab items={["cards", "users", "announcments", "leaderboard"] } />
            </div>
          </div>
          <div className="twelve wide stretched column">
            <div style={{background: "#666"}} class="ui segment">
            <Switch>
              <Route path={`${path}/cards`}>
                <CardsIndex />
              </Route>
              <Route path={`${path}/users`}>
                <UsersIndex />
              </Route>
              <Route path="/decks">
                <DeckSection />
              </Route>
              <Route path="/announcments">
                <AnnouncmentSection />
              </Route>
              <Route path="/leaderboard">
                <ScoreboardSection />
              </Route>
              <Route path={`${path}`}>
              This is the Admin Page.
              You are {username}
              </Route>
            </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const mapStateToProps = (state) => ({
    user: state.userReducer.currentUser
  });
  
export default connect(mapStateToProps)(AdminDashboard);