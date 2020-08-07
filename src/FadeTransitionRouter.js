import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Location, Router } from '@reach/router';

import './FadeTransitionRouter.scss';

function FadeTransitionRouter(props) {
  return (
    <Location>
      {({ location }) => (
        <TransitionGroup component={null}>
          <CSSTransition key={location.key} classNames="fade" timeout={500}>
            <Router location={location} {...props} />
          </CSSTransition>
        </TransitionGroup>
      )}
    </Location>
  );
}

export default FadeTransitionRouter;
