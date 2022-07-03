import { useEffect, useRef, useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
import * as Location from 'expo-location'
import { TextBubble } from 'app/components/text-bubble'

export function HomeScreen() {
  const [currentPosition, setCurrentPosition] =
    useState<Location.LocationObject>()

  const mapRef = useRef<MapView>(null)

  const [locationPermission] = Location.useForegroundPermissions({
    request: true,
  })

  useEffect(() => {
    if (locationPermission?.granted) {
      Location.getCurrentPositionAsync().then(setCurrentPosition)
    }
  }, [locationPermission])

  useEffect(() => {
    if (currentPosition) {
      mapRef.current?.animateCamera({
        center: currentPosition.coords,
        zoom: 16,
      })
    }
  }, [currentPosition])

  return (
    <MapView
      ref={mapRef}
      provider="google"
      onPress={(e) => console.log(e.nativeEvent)}
      style={{ flex: 1 }}
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
    >
      {currentPosition && (
        <Marker anchor={{ x: 0.5, y: 1 }} coordinate={currentPosition.coords}>
          <TextBubble>You are here</TextBubble>
        </Marker>
      )}
    </MapView>
  )
}
