import React from "react";
import { Switch, Route } from "react-router-dom";
import { CardsIndex as CardSection } from './cards-section/CardIndex';
import { UsersIndex as UserSection } from './users-section/UsersIndex';
import { DecksIndex as DeckSection } from './decks-section/DecksIndex';
import { AnnouncmentsIndex as AnnouncmentSection } from './announcments-section/AnnouncmentsIndex';
import { ScoreboardIndex as ScoreboardSection } from './scoreboard-section/ScoreboardIndex';
import { Link } from 'react-router-dom';
import { Tabbar } from '../../components/admin-dashboard/Tabbar'

export default class AdminDashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{ background: "rgba(45, 45, 45, 0.85)" }}
        className="ui center aligned container rounded-corners"
      >
        <div className="ui grid" style={{marginTop: '0rem'}}>
          <div class="four wide column">
            <div class="ui vertical fluid tabular menu">
            <Tabbar base={'/admin/'} classNames={"item nav-link"}tabs={[{name: "Cards", route: "cards"}, {name: "Users", route: "users"},{name: "Announcments", route: "announcments"}, {name: "Scoreboard", route: "scoareboard"}]}  />
            </div>
          </div>
          <div class="twelve wide stretched column">
            <div style={{background: "#666"}} class="ui segment">
            <Switch>
              <Route path="/admin/cards">
                <CardSection />
              </Route>
              <Route path="/admin/users">
                <UserSection />
              </Route>
              <Route path="/admin/decks">
                <DeckSection />
              </Route>
              <Route path="/admin/announcments">
                <AnnouncmentSection />
              </Route>
              <Route path="/admin/scoreboard">
                <ScoreboardSection />
              </Route>
            </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
