import React from 'react';
import { ScrollView, View, Text, Picker } from 'react-native';
import { TextInput, Button } from '../components';
import { Colors } from '../utils/Colors';

export default class CreditCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cardNumber: "", name: "", month: null, year: null, secCode: null }
  }

  render() {
    let months = [];
    for (let i = 1; i <= 12; i++) {
      let month = ((i < 10) ? "0" + i : "" + i);
      months.push(<Picker.Item label={month} value={month}/>);
    }
    let years = [];
    let currentYear = new Date().getFullYear();
    let currentYearPlus20 = currentYear + 20;
    for (; currentYear <= currentYearPlus20; currentYear++) {
      let year = "" + currentYear;
      years.push(<Picker.Item label={year} value={year}/>)
    }
    return (
      <View>
        <TextInput
          label="Número"
          placeholder="XXXX XXXX XXXX XXXX"
          keyboardType="numeric"
          text={this.state.cardNumber}
          onChangeText={(cardNumber) => this.setState({cardNumber})}/>

        <TextInput
          label="Nome (como impresso no cartão)"
          placeholder="O nome impresso no cartão"
          text={this.state.name}
          onChangeText={(nome) => this.setState({nome})}/>

        <View style={styles.validthru.container}>
          <View style={styles.validthru.month}>
            <Text>Mês</Text>
            <Picker
              style={styles.validthru.monthPicker}
              selectedValue={this.state.month}
              onValueChange={(month) => this.setState({month})}>
              {months}
            </Picker>
          </View>
          <View style={styles.validthru.year}>
            <Text>Ano</Text>
            <Picker
              style={styles.validthru.yearPicker}
              selectedValue={this.state.year}
              onValueChange={(year) => this.setState({year: year})}>
              {years}
            </Picker>
          </View>
          <TextInput
            style={{ flex: 0.3 }}
            label="CVC"
            keyboardType="numeric"
            placeholder="XXX"
            onChangeText={(secCode) => this.setState({secCode})}
            text={this.state.secCode}/>
        </View>
      </View>
    );
  }
}

const styles = {
  validthru: {
    container: {
      flexDirection: 'row'
    },
    month: {
      flex: 1,
      paddingTop: 16
    },
    monthPicker: {
      height: 48,
      marginBottom: 0,
      paddingBottom: 0
    },
    year: {
      flex: 1,
      paddingTop: 16
    },
    yearPicker: {
      height: 48
    }
  }
}
