import { SafeAreaProvider } from 'react-native-safe-area-context'
import React from 'react'
import Navigation from './src/navigation'
import ContextProvider from './src/store/ContextProvider'

export default function App () {
  return (
    <ContextProvider>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </ContextProvider>
  )
}
