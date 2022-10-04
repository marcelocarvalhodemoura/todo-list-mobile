import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Todo from './src/screen/todo';

export default function App() {
  return (
    <>
      <StatusBar style="light"/>
      <Todo/>
    </>
    
  );
}

