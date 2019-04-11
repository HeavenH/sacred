import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import  main from './pages/main'

const Routes = createAppContainer(
    createSwitchNavigator({
        main
    })
);

export default Routes;