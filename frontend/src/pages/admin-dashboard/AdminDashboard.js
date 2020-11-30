import React from "react";
import { Switch, Route } from "react-router-dom";
import CardsIndex from './cards-section/CardIndex';
import UsersIndex from './users-section/UsersIndex';
import { DecksIndex as DeckSection } from './decks-section/DecksIndex';
import { AnnouncmentsIndex as AnnouncmentSection } from './announcments-section/AnnouncmentsIndex';
import { ScoreboardIndex as ScoreboardSection } from './scoreboard-section/ScoreboardIndex';
import Tab from '../../components/admin-dashboard/tab';
import { useRouteMatch } from 'react-router-dom'; 


const AdminDashboard= ({ props }) => {
  const { url, path } = useRouteMatch();

    const arr = ["cards", "users", "announcments", "leaderboard"] 
   console.log(useRouteMatch())
    
    return (
      <div
        style={{ background: "rgba(45, 45, 45, 0.85)" }}
        className="ui center aligned container rounded-corners"
      >
        <div className="ui grid" style={{marginTop: '0rem'}}>
          <div class="four wide column">
            <div class="ui vertical fluid tabular menu">
            <Tab items={arr} />
            </div>
          </div>
          <div class="twelve wide stretched column">
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
            </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
export default AdminDashboard;