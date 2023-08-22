import { IAction, RouteNode } from '@wildberries/service-router';
import { ReduxStoreLoader } from '@mihanizm56/redux-core-modules';
import { AppLayout } from '@/_layouts/app-layout';
import { TodoPage } from './page';
import { storeInjectConfig } from './store-inject-config';

const pageNode = 'todo';

const action: IAction = async ({ fromState, toState }) => {
  return {
    title: 'TodoPage',
    content: (
      <AppLayout>
        <ReduxStoreLoader
          fromState={fromState}
          storeInjectConfig={storeInjectConfig}
          toState={toState}
        >
          <RouteNode nodeName={pageNode}>
            {({ route }) => {
              if (route.name === pageNode) {
                return <TodoPage />;
              }

              return null;
            }}
          </RouteNode>
        </ReduxStoreLoader>
      </AppLayout>
    ),
  };
};

export default action;
