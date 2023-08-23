import { IAction, RouteNode } from '@wildberries/service-router';
import { ReduxStoreLoader } from '@mihanizm56/redux-core-modules';
import { AppLayout } from '@/_layouts/app-layout';
import { TodoPage } from './page';
import { storeInjectConfig } from './store-inject-config';

const pageNode = 'todos';

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
            {({ route }) =>
                 <TodoPage />
            }
          </RouteNode>
        </ReduxStoreLoader>
      </AppLayout>
    ),
  };
};

export default action;
