import React from 'react';

import { List } from '@material-ui/core';
import VisitItem from './VisitItem';
import { Link } from 'react-router-dom';

import { visits } from '../../../../../../shared/data/visitInfo';
import { TitleComponent, Wrapper } from '../../../../../../shared/Components';

const Visit: React.FC<{}> = () => {
  return (
    <Wrapper>
      <TitleComponent>Visits</TitleComponent>
      <List style={{ paddingTop: 20 }}>
        {Object.entries(visits).map(([slug, { location, visit_count }]) => (
          <Link
            to={`/analytics/${location}`}
            key={slug}
            style={{ textDecoration: 'none' }}
          >
            <VisitItem location={location} visit_count={visit_count} />
          </Link>
        ))}
      </List>
    </Wrapper>
  );
};

export default Visit;
