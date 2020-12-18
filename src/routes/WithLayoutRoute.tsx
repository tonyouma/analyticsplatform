/* eslint-disable react/prop-types */
import React from 'react';
import { Route } from 'react-router-dom';

interface IProps {
  component: any;
  layout: any;
  path: string;
  exact: boolean;
}

const WithLayoutRoute: React.FC<IProps> = (props) => {
  const { layout: Layout, component: Component, path, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <>
          <Layout>
            <Component {...matchProps} />
          </Layout>
        </>
      )}
    />
  );
};

export default WithLayoutRoute;
