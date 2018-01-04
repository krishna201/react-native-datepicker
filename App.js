/**
 * @Author: H krishna
 * @Date:   2018-01-04T14:39:56+05:30
 * @Email:  krishnahare201@gmail.com
 * @Filename: App.js
 * @Last modified by:   H krishna
 * @Last modified time: 2018-01-04T16:36:03+05:30
 */


import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import DatePicker from 'react-native-datepicker';

export default class App extends Component<{}> {

  constructor(props){
      super(props)
      this.state = {date:""}
    }

  render() {
    return (
      <View style={styles.container}>
      <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        // minDate="2016-05-01"
        // maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        // duration='300'
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
