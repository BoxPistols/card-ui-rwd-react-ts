import React from 'react';

type Props = {
  text: string;
};

export default ({}) => (
  <React.Fragment>
    <li className="cards__item">
      <div className="card">
        <div className="card__image card__image--fence"></div>
        <div className="card__content">
          <div className="card__title">
            Flex This is the shorthand for flex-gro
          </div>
          <p className="card__text">
            flex-shrink and flex-basis combined. The second and third parameters
            (flex-shrink and flex-basis) are optional. Default is 0 1 auto.
          </p>
          <button className="btn btn--block card__btn">Button</button>
        </div>
      </div>
    </li>
  </React.Fragment>
);
