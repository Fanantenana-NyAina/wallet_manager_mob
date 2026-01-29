import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "the_api_key";

export const saveApiKey = async (apiKey: string) => {
  await AsyncStorage.setItem(KEY, apiKey);
};

export const getApiKey = async () => {
  return AsyncStorage.getItem(KEY);
};

export const removeApiKey = async () => {
  await AsyncStorage.removeItem(KEY);
};
