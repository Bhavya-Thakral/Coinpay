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
                    height: responsiveScreenHeight(5),
                    borderRadius: 5,
                    padding: responsiveScreenWidth(2),
                    justifyContent: 'center',
                  },
                ]}>
                <Text>{item.text}</Text>
              </Animated.View>
            )}
            renderHiddenItem={({item}) => (
              <View style={styles.rowBack}>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => handleDelete(item.id)}>
                  <Text style={styles.deleteText}>Delete</Text>
                </TouchableOpacity>
              </View>
            )}
            rightOpenValue={-75} // Slide threshold
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
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  rowBack: {
    backgroundColor: 'red',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 15,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 20,
  },
  deleteText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
