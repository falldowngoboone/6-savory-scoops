import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Location, Router } from '@reach/router';

import './FadeTransitionRouter.scss';

function FadeTransitionRouter(props) {
  return (
    <Location>
      {({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={200}>
            <Router location={location} {...props} />
          </CSSTransition>
        </TransitionGroup>
      )}
    </Location>
  );
}

export default FadeTransitionRouter;
