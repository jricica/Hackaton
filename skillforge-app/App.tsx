import { StatusBar } from 'expo-status-bar';
import React from 'react';
import HomeScreen from './pages';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <HomeScreen />
    </>
  );
}
