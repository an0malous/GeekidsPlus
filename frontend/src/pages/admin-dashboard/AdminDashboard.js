import React from "react";
import { Switch, Route } from "react-router-dom";
import { CardsIndex as CardSection } from './cards-section/CardIndex';
import { UsersIndex as UserSection } from './users-section/UsersIndex';
import { DecksIndex as DeckSection } from './decks-section/DecksIndex';
import { AnnouncmentsIndex as AnnouncmentSection } from './announcments-section/AnnouncmentsIndex';
import { ScoreboardIndex as ScoreboardSection } from './scoreboard-section/ScoreboardIndex';
import { Link } from 'react-router-dom';

export default class AdminDashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.handleSetOverlay();
  }

  render() {
    return (
      <div
        style={{ background: "rgba(255, 255, 255, 0.85)" }}
        className="ui center aligned container"
      >
        <div className="ui grid" style={{marginTop: '0rem'}}>
          <div class="four wide column">
            <div class="ui vertical fluid tabular menu">
              <Link to="/admin/cards" className="item nav-link active">Cards</Link>
              <Link to="/admin/users" className="item nav-link">Users</Link>
              <Link to="/admin/announcments" className="item nav-link">Announcments</Link>
              <Link to="/admin/scoreboard" className="item nav-link">Scoreboard</Link>
            </div>
          </div>
          <div class="twelve wide stretched column">
            <div class="ui segment">
            <Switch>
              <Route exact path="/admin/cards">
                <CardSection />
              </Route>
              <Route exact path="/admin/users">
                <UserSection />
              </Route>
              <Route exact path="/admin/decks">
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
