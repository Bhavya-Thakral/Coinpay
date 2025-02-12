import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import CustomWindow from '../../Customs/CustomWindow';
import {useTheme} from '../../context/ThemeContext';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {SwipeListView} from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/FontAwesome6';

const List = () => {
  const theme = useTheme();
  const rowTranslateAnimatedValues: {[key: string]: Animated.Value} = {};

  const [data, setData] = useState([
    {id: '1', text: 'Item 1'},
    {id: '2', text: 'Item 2'},
    {id: '3', text: 'Item 3'},
  ]);

  data.forEach(item => {
    rowTranslateAnimatedValues[item.id] = new Animated.Value(1);
  });

  const handleDelete = rowKey => {
    Animated.timing(rowTranslateAnimatedValues[rowKey], {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setData(prevData => prevData.filter(item => item.id !== rowKey));
    });
  };

  return (
    <CustomWindow>
      <View style={styles.view}>
        <Text
          style={[
            {
              color: theme.ContentPrimary,
            },
            styles.title,
          ]}>
          Card List
        </Text>
        <Text
          style={[
            {
              color: theme.ContentPrimary,
            },
            styles.head,
          ]}>
          Below are the Cards added
        </Text>
        <View style={{flex: 1}}>
          {/* <View
            style={{
              backgroundColor: theme.ContentDisabled,
              height: responsiveScreenHeight(5),
              borderRadius:5,
              padding:responsiveScreenWidth(2),
            justifyContent:"center"
            }}>
            <Text style={{color: 'white'}}>hello</Text>
          </View> */}
          <SwipeListView
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <Animated.View
                style={[
                  styles.rowFront,
                  {
                    transform: [{scaleY: rowTranslateAnimatedValues[item.id]}],
                  },
                  {
                    backgroundColor: theme.ContentDisabled,
                   
                  },
                ]}>
                <Text>{item.text}</Text>
              </Animated.View>
            )}
            renderHiddenItem={({item}) => (
              <View
                style={[
                  styles.rowBack,
                  {
                    backgroundColor: theme.DividerError,
                  },
                ]}>
                <TouchableOpacity onPress={() => handleDelete(item.id)}>
                  <Icon
                    color={theme.ContentError}
                    name={'trash'}
                    size={20}
                  />
                </TouchableOpacity>
              </View>
            )}
            rightOpenValue={-50} // Slide threshold
          />
        </View>
      </View>
    </CustomWindow>
  );
};

export default List;

const styles = StyleSheet.create({
  view: {
    marginVertical: responsiveScreenWidth(1.5),
    gap: responsiveScreenHeight(0.8),
    height: responsiveScreenHeight(100),
    marginHorizontal: responsiveScreenHeight(2),
  },
  head: {
    fontFamily: 'Poppins',
    fontWeight: '200',
    fontSize: responsiveScreenFontSize(1.5),
  },
  title: {
    fontSize: responsiveScreenHeight(3),
    fontFamily: 'Poppins-SemiBold',
  },
  rowFront: {
    height: responsiveScreenHeight(5),
    borderRadius: 10,
    padding: responsiveScreenWidth(2),
    marginBottom: responsiveScreenWidth(2),
    justifyContent: 'center',
  },
  rowBack: {
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: responsiveScreenHeight(5),
    padding: responsiveScreenWidth(2),
    paddingRight: responsiveScreenWidth(4),

    marginBottom: responsiveScreenWidth(2),
  },
});
