import React, { Component } from 'react';
import { View , Text, ScrollView } from 'react-native-web';



class Car extends Component {
    constructor (props){
        super(props);
        this.Come2Go = this.Come2Go.bind(this);
        this.state={
            merek : "Toyota",
            types : {type :"Matik", model :"Supra MK4"}
        };
    }

    Come2Go(value){
        return (

            <View>
                <Text>Lets go running away from duty</Text>
                <Text>with us only {value} IDR</Text>
            </View>

        )
    }


    render() {
        return (

            <ScrollView>
                  <View>

            <Text> HI I'AM CAR</Text>
            <Text> merek : {this.state.merek}</Text>
            <Text> type : {this.state.types.type}</Text>
            <Text> model : {this.state.types.model}</Text>
            {this.Come2Go(2000000)}
            </View>
            </ScrollView>
          
        );
    }
}

export default Car;




