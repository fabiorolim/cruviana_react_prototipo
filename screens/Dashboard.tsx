import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../components/Themed';


export default function Dashboard() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.grid}>
            <Text style={styles.text}>28ºC</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.grid}>
            <Text style={styles.text}>28ºC</Text>
          </View>
          <View style={styles.grid}>
            <Text style={styles.text}>40ºC</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.grid}>
            <Text style={styles.text}>28ºC</Text>
          </View>
          <View style={styles.grid}>
            <Text style={styles.text}>40ºC</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.grid}>
            <Text style={styles.text}>28ºC</Text>
          </View>
          <View style={styles.grid}>
            <Text style={styles.text}>40ºC</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.grid}>
            <Text style={styles.text}>28ºC</Text>
          </View>
          <View style={styles.grid}>
            <Text style={styles.text}>40ºC</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.grid}>
            <Text style={styles.text}>28ºC</Text>
          </View>
          <View style={styles.grid}>
            <Text style={styles.text}>40ºC</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff'
  },
  row: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignContent: 'center',
    flexDirection: 'row',
  },
  grid: {
    flex: 1,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    margin: 12,
    color: "black",
    borderRadius: 20,
    backgroundColor: "#2af",
    // shadowRadius: 5,
    shadowOpacity: 0.4,
    elevation: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
