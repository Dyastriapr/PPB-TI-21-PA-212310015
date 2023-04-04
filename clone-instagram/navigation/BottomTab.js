import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homescreen from "../screens/Homescreen";
import Searchscreen from "../screens/Searchscreen";



const Tab = createBottomTabNavigator ();

const Tabs = () => {
    return(

        
        <Tab.Navigator   >
            <Tab.Screen  name="Home" component={Homescreen}/>
            <Tab.Screen  name="Search" component={Searchscreen}/>
        </Tab.Navigator>



    );
}

export default Tabs ; 