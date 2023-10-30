const allTracks = 'https://skypro-music-api.skyeng.tech/catalog/track/all/';
const trackFavorite = 'https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/';
const register = 'https://skypro-music-api.skyeng.tech/user/signup/';
const loginUser = 'https://skypro-music-api.skyeng.tech/user/login/';
const token = 'https://skypro-music-api.skyeng.tech/user/token/';

// АПИ ОБЩИХ ТРЕКОВ
export async function getFetchTracks() {
    try {
      const response = await fetch(allTracks);
      if (!response.ok) {
        throw new Error('Ошибка получения данных');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Ошибка получения данных:', error);
      throw error;
    }
}

// АПИ КАТЕГОРИЙ
  export async function getFetchTracksFavorite() {
    const your_token = '';
    try {
        const response = await fetch(trackFavorite, {
            headers: {
            'Authorization': `Bearer ${your_token}`
            }
        });
        if (!response.ok) {
            throw new Error('Ошибка получения данных');
        }
        const data = await response.json();
        return data;
    } catch (error) {
       console.error('Ошибка получения данных:', error);
       throw error;
    }
}

// АПИ РЕГИСТРАЦИИ
export const registerUser = async ({email, password, username}) => {
  const response = await fetch(register, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
          email: email,
          password: password,
          username: email,
      }),
  });
  localStorage.setItem('UserData', JSON.stringify(data)); 
  const data = await response.json();

  if (!response.ok) {
    const error = new Error('Ошибка авторизации: ' + response.status + ' ' + response.statusText);
    error.statusCode = response.status; // Добавили statusCode в объект ошибки
    throw error;
  }

  return data;
}

// АПИ АВТОРИЗАЦИИ
export const login = async ({email, password}) => {
  const response = await fetch(loginUser, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
          email: email,
          password: password,
      }),
  });

  const data = await response.json();

  if (!response.ok) {
    const error = new Error('Ошибка авторизации: ' + response.status + ' ' + response.statusText);
    error.statusCode = response.status; // Добавили statusCode в объект ошибки
    throw error;
  }
  localStorage.setItem('UserData', JSON.stringify(data)); 
  return data;
}

// АПИ ПОЛУЧЕНИЯ ТОКЕНА
export const getToken = async ({email, password}) => {
  const response = await fetch(token, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
          email: email,
          password: password,
      }),
  });

  const data = await response.json();

  if (!response.ok) {
      throw new Error('Ошибка получения токена: ' + response.status + ' ' + response.statusText);
  }
  localStorage.setItem('User', JSON.stringify(data));
  return data;
}
