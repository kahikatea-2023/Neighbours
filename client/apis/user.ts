import axios from 'axios';
import { UserData } from '../../models/user';



export const fetchUserData = async (): Promise<UserData> => {
  const response = await axios.get<UserData>('/api/v1'); // Replace with your backend endpoint
  return response.data;
};

export const updateUserData = async (userData: UserData): Promise<void> => {
  await axios.post('/api/v1', userData); // Replace with your backend endpoint
};
