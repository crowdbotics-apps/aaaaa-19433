import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps88376Navigator from '../features/Maps88376/navigator';
import Add-Item88375Navigator from '../features/Add-Item88375/navigator';
import Maps88371Navigator from '../features/Maps88371/navigator';
import UserProfile88367Navigator from '../features/UserProfile88367/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps88376: { screen: Maps88376Navigator },
Add-Item88375: { screen: Add-Item88375Navigator },
Maps88371: { screen: Maps88371Navigator },
UserProfile88367: { screen: UserProfile88367Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
