import axios from 'axios';

export async function getCart(email, token) {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/admin/userCart/${email}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
}
