/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect } from 'react';
import Dashboard from './design/Dashboard';
import PriceComparisonSection from './design/PriceComparisonSection';
import SettingsSection from './design/SettingsSection';
import SettingsDiscountScale from './design/SettingsDiscountScale';
import AppNavigator from './design/AppNavigator';
import RecordSection from './design/SettingsRecordSection';
import SettingsPriceComparison from './design/SettingsPriceComparison';
import SettingsPriceComparisonCompetitor from './design/SettingsPriceComparisonCompetitor';
import Splash from './design/SplashScreen';
import Tab from './design/tab';
import Tab2 from './design/tab2';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    //<Dashboard></Dashboard>
    //<AppNavigator></AppNavigator>
    //<PriceComparisonSection></PriceComparisonSection>
    //<SettingsSection></SettingsSection>
    //<SettingsDiscountScale></SettingsDiscountScale>
    //<RecordSection></RecordSection>
    //<SettingsPriceComparison></SettingsPriceComparison>
    //<SettingsPriceComparisonCompetitor></SettingsPriceComparisonCompetitor>
    //<Splash></Splash>
    //<Tab></Tab>
    <Tab2></Tab2>

  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
