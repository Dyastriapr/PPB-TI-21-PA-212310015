import React, { Component } from 'react';
import { View ,Text , StyleSheet , Image} from 'react-native';


class No4RCC extends Component {

    constructor(props) {
        super(props);
        this.state = { identity:{npm:212310015 ,firstname: "Dyas",middlename:"Tri",lastname:"Apriliansyah",},
                
        educations:[{ id: 1, school: 'SDN Telukpinang 03' },
                    { id: 2, school: 'SMPN 2 Ciawi' },
                    { id: 3, school: 'SMKN 4 Kota Bogor' }],
    
         mobile_phone: '083879631235',
         email: '212310015@student.ibik.ac.id',
         gender: 'M',
         tall_body: 170,
         weight_body: 60
           
        }
    }
    


    render() {
        return (  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ borderWidth: 1, padding: 10, width: 250 }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>MyBio </Text>
            <Text style={{ fontWeight: 'bold' }}>Identity</Text>
            <Text>NPM : {this.state.identity.npm}</Text>
            <Text>First Name : {this.state.identity.firstname}</Text>
            <Text>Middle Name : {this.state.identity.middlename}</Text>
            <Text>Last Name : {this.state.identity.lastname}</Text>
            <Text style={{ fontWeight: 'bold' }}>Educations</Text>
            {this.state.educations.map((education) => {
                return (
                    <Text>{education.id}. {education.school}</Text>
                )
            })}
            <Text style={{ fontWeight: 'bold' }}>Other</Text>
            <Text>Mobile Phone : {this.state.mobile_phone}</Text>
            <Text>Email : {this.state.email}</Text>
            <Text>Gender : {this.state.gender}</Text>
            <Text>Tall Body : {this.state.tall_body}</Text>
            <Text>Weight Body : {this.state.weight_body}</Text>

            <Text style={{ fontStyle: 'italic' , textAlign : 'center' }}>RCC</Text>
        </View>
    </View> );
    }
}

export default No4RCC;
