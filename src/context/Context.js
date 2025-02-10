import React, {createContext, useState, useContext, useMemo} from 'react';

const AppContext = createContext();

export const useFinTech = () => {
  return useContext(AppContext);
};

export const AppProvider = ({children}) => {
  const [currentTheme, setCurrentTheme] = useState();
  const [phoneNo, setPhoneNo] = useState('');
  const [userInfo, setUserInfo] = useState();
  const [email, setemail] = useState();
  const [address, setaddress] = useState({
    line: '',
    city: '',
    postcode: '',
  });
  const [country, setcountry] = useState();

  const [userForm, setUserForm] = useState({
    name: '',
    userName: '',
    dob: '',
  });

  const [cardPhoneNo, setCardPhoneNo] = useState();

  const value = useMemo(
    () => ({
      currentTheme,
      setCurrentTheme,
      phoneNo,
      setPhoneNo,
      userInfo,
      setUserInfo,
      userForm,
      setUserForm,
      email,
      setemail,
      address,
      setaddress,
      country,
      setcountry,
      cardPhoneNo,
      setCardPhoneNo,
    }),
    [
      currentTheme,
      phoneNo,
      userInfo,
      userForm,
      email,
      address,
      country,
      cardPhoneNo,
    ],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
