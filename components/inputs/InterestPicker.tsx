import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

const InterestPicker = () => {
  const [selectedCount, setSelectedCount] = useState(0);
  const [selectedInterests, setSelectedInterests] = useState({
    Reading: false,
    Photography: false,
    Gaming: false,
    Music: false,
    Travel: false,
    Painting: false,
    Sports: false,
    Politics: false,
    Charity: false,
    Cooking: false,
    Pets: false,
    Fashion: false,
  });

  const toggleInterest = (interest) => {
    if (selectedInterests[interest]) {
      setSelectedInterests((prev) => ({
        ...prev,
        [interest]: false,
      }));
      setSelectedCount(selectedCount - 1);
    } else if (selectedCount < 3) {
      setSelectedInterests((prev) => ({
        ...prev,
        [interest]: true,
      }));
      setSelectedCount(selectedCount + 1);
    }
  };

  const interestButtons = [
    { name: 'Reading', icon: 'book', IconComponent: FontAwesome },
    { name: 'Photography', icon: 'camera', IconComponent: FontAwesome },
    { name: 'Gaming', icon: 'gamepad', IconComponent: FontAwesome },
    { name: 'Music', icon: 'music', IconComponent: FontAwesome },
    { name: 'Travel', icon: 'plane', IconComponent: FontAwesome },
    { name: 'Painting', icon: 'palette', IconComponent: FontAwesome5 },
    { name: 'Sports', icon: 'baseball-ball', IconComponent: FontAwesome5 },
    { name: 'Politics', icon: 'landmark', IconComponent: FontAwesome5 },
    { name: 'Charity', icon: 'hand-holding-heart', IconComponent: FontAwesome5 },
    { name: 'Cooking', icon: 'utensils', IconComponent: FontAwesome5 },
    { name: 'Pets', icon: 'paw', IconComponent: FontAwesome },
    { name: 'Fashion', icon: 'tshirt', IconComponent: FontAwesome5 },
  ];

  return (
    <View className="my-7 flex-col space-y-6">
      <View className="flex flex-row items-center space-x-4 w-3/5 mx-auto">
        {interestButtons.slice(0, 2).map((interest, index) => (
          <View
            key={index}
            className={`p-2 rounded-full ${selectedInterests[interest.name] ? 'bg-[#FF5069]' : 'bg-white'}`}
          >
            <TouchableOpacity
              className="flex flex-row items-center space-x-2"
              onPress={() => toggleInterest(interest.name)}
            >
              <interest.IconComponent
                name={interest.icon}
                size={15}
                color={selectedInterests[interest.name] ? 'white' : '#FF5069'}
              />
              <Text className="text-sm" style={{ color: selectedInterests[interest.name] ? 'white' : 'black' }}>
                {interest.name}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <View className="flex flex-row items-center space-x-4 w-4/5 mx-auto">
        {interestButtons.slice(2, 5).map((interest, index) => (
          <View
            key={index}
            className={`p-2 rounded-full ${selectedInterests[interest.name] ? 'bg-[#FF5069]' : 'bg-white'}`}
          >
            <TouchableOpacity
              className="flex flex-row items-center space-x-2"
              onPress={() => toggleInterest(interest.name)}
            >
              <interest.IconComponent
                name={interest.icon}
                size={18}
                color={selectedInterests[interest.name] ? 'white' : '#FF5069'}
              />
              <Text className="text-sm" style={{ color: selectedInterests[interest.name] ? 'white' : 'black' }}>
                {interest.name}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <View className="flex flex-row items-center justify-between w-3/5 mx-auto">
        {interestButtons.slice(5, 7).map((interest, index) => (
          <View
            key={index}
            className={`p-2 rounded-full ${selectedInterests[interest.name] ? 'bg-[#FF5069]' : 'bg-white'}`}
          >
            <TouchableOpacity
              className="flex flex-row items-center space-x-2"
              onPress={() => toggleInterest(interest.name)}
            >
              <interest.IconComponent
                name={interest.icon}
                size={16}
                color={selectedInterests[interest.name] ? 'white' : '#FF5069'}
              />
              <Text className="text-sm" style={{ color: selectedInterests[interest.name] ? 'white' : 'black' }}>
                {interest.name}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <View className="flex flex-row items-center space-x-4 w-4/5 mx-auto">
        {interestButtons.slice(7, 10).map((interest, index) => (
          <View
            key={index}
            className={`p-2 rounded-full ${selectedInterests[interest.name] ? 'bg-[#FF5069]' : 'bg-white'}`}
          >
            <TouchableOpacity
              className="flex flex-row items-center space-x-2"
              onPress={() => toggleInterest(interest.name)}
            >
              <interest.IconComponent
                name={interest.icon}
                size={18}
                color={selectedInterests[interest.name] ? 'white' : '#FF5069'}
              />
              <Text className="text-sm" style={{ color: selectedInterests[interest.name] ? 'white' : 'black' }}>
                {interest.name}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <View className="flex flex-row items-center justify-between w-3/5 mx-auto">
        {interestButtons.slice(10, 12).map((interest, index) => (
          <View
            key={index}
            className={`p-2 rounded-full ${selectedInterests[interest.name] ? 'bg-[#FF5069]' : 'bg-white'}`}
          >
            <TouchableOpacity
              className="flex flex-row items-center space-x-2"
              onPress={() => toggleInterest(interest.name)}
            >
              <interest.IconComponent
                name={interest.icon}
                size={16}
                color={selectedInterests[interest.name] ? 'white' : '#FF5069'}
              />
              <Text className="text-sm" style={{ color: selectedInterests[interest.name] ? 'white' : 'black' }}>
                {interest.name}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <Text className="text-center text-lg mt-4">
        {`You can select ${3 - selectedCount} more interest${3 - selectedCount !== 1 ? 's' : ''}.`}
      </Text>
    </View>
  );
};

export default InterestPicker;
