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

// АПИ ИЗБРАННЫХ
export async function getFetchTracksFavorite() {
  try {
    const tokenArray = JSON.parse(localStorage.getItem('User'));
    const token = tokenArray.access;
    
    const response = await fetch(trackFavorite, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
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

// АПИ КАТЕГОРИЙ
export async function getFetchCategoryTracks(id) {
  try {
    const tokenArray = JSON.parse(localStorage.getItem('User'));
    const token = tokenArray.access;
    const response = await fetch(`https://skypro-music-api.skyeng.tech/catalog/selection/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
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
  const data = await response.json();
  localStorage.setItem('UserData', JSON.stringify(data)); 
  
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

// Функция для отправки запроса на лайк трека
export const likeTrack = async (id, navigate) => {
    const tokenArray = JSON.parse(localStorage.getItem('User'));
    const token = tokenArray.access;
  try {
    const response = await fetch(`https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 401) {
      navigate('/login');
    }

    if (!response.ok) {
      throw new Error('Ошибка при отправке запроса на лайк трека');
    }
    
    return response.json(); 
  } catch (error) {
    throw new Error(`Ошибка при лайке трека: ${error.message}`);
  }
};

// Функция для отправки запроса на дизлайк трека
export const dislikeTrack = async (id, navigate) => {
  const tokenArray = JSON.parse(localStorage.getItem('User'));
  const token = tokenArray.access;
  try {
    const response = await fetch(`https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`, {
      method: 'DELETE', 
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 401) {
      navigate('/login');
    }

    if (!response.ok) {
      throw new Error('Ошибка при отправке запроса на дизлайк трека');
    }

    return response.json();
  } catch (error) {
    throw new Error(`Ошибка при дизлайке трека: ${error.message}`);
  }
};