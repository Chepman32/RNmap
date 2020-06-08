import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import styled from "styled-components";
import { MaterialIcons } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps'
class BigPreview extends React.Component {
  state = {
    reports: []
  }
  componentDidMount() {
    fetch('https://enigmatic-reaches-55405.herokuapp.com/reports')
      .then(res => res.json())
      .then(data => {
        this.setState({ reports: data.reports });
        console.log(this.state.reports);
      })
      .catch(console.error)
  }
  mapMarkers = () => {
    return this.state.reports.map((report) => <Marker
      key={report.id}
      coordinate={{ latitude: report.lat, longitude: report.lon }}
      title={report.location}
      description={report.comments}>
    </Marker >)
  }
  render() {
    return (
      <MapView
        style={{ ...StyleSheet.absoluteFillObject }}
        initialRegion={{
          latitude: 37.1,
          longitude: -95.7,
          latitudeDelta: 10,
          longitudeDelta: 45
        }} >
        {this.mapMarkers()}
      </MapView>
    )
  }
}
export default BigPreview;
