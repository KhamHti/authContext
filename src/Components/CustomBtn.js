import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from '@rneui/themed';

const CustomBtn = ({title, onPress}) => {
  return (
    <Button
      title={title}
      size="lg"
      type="solid"
      onPress={onPress}
      containerStyle={{
        width: 280,
        alignSelf: 'center',
        borderRadius: 12,
      }}
    />
  );
};

export default CustomBtn;

// const styles = StyleSheet.create({});

// import {StyleSheet, TouchableOpacity, Text} from 'react-native';
// import React from 'react';

// const CustomBtn = ({title, onPress}) => {
//   return (
//     <TouchableOpacity onPress={onPress}>
//       <Text>{title}</Text>
//     </TouchableOpacity>
//   );
// };

// export default CustomBtn;

// const styles = StyleSheet.create({});
