import React from 'react';
import { StyleSheet, View } from 'react-native';

import MemoListScreen from './src/screens/MemoListScreen';
import MemoListDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoCreateScreen from './src/screens/MemoCreatScreen';


export default function App() {
  return (
    //<MemoListScreen  />
    //<MemoListDetailScreen  />
    //<MemoEditScreen />
    <MemoCreateScreen />
  );
}
