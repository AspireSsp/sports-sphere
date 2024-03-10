import React from 'react'
import {
    FormControl,
    FormLabel,
    Input
  } from '@chakra-ui/react'
  import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    Stack,
    SliderMark,
  } from '@chakra-ui/react'

const Filter = () => {


    function calculateDistance(lat1, lon1, lat2, lon2) {
        const R = 6371; // Radius of the Earth in kilometers
      
        const dLat = toRadians(lat2 - lat1);
        const dLon = toRadians(lon2 - lon1);
      
        const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
      
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      
        const distance = R * c; // Distance in kilometers
      
        return distance;
    }
      
    function toRadians(degrees) {
        return degrees * (Math.PI / 180);
    }
      
      // Example usage:
    const distance = calculateDistance(23.2599, 77.4126, 22.7196, 75.8577);
    console.log(`Distance: ${distance.toFixed(2)} km`);
      
    return (
        <div>
            <div >
                <h2 className='font-bold text-lg'>Filter</h2>
            </div>
            <div class="mt-2 flex justify-start flex-col">
                <Stack spacing={6}>
                    <FormControl isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input placeholder='name' />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Location</FormLabel>
                        <Input placeholder='name' />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Interest</FormLabel>
                        <Input placeholder='name' />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Distance: In range of 500KM</FormLabel>
                        <Slider aria-label='slider-ex-1' defaultValue={30} max={500} min={0}>
                        <SliderTrack>
                            <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb />
                        </Slider>
                    </FormControl>
                </Stack>
            </div>
        </div>
    )
}

export default Filter