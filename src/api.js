const allTracks = 'https://skypro-music-api.skyeng.tech/catalog/track/all/';
const trackFavorite = 'https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/';

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

//   Пока не работает:
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
