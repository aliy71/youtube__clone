import axios from 'axios'

const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/captions',
    params: {
        part: 'snippet',
        videoId: 'M7FIvfx5J10'
    },
    headers: {
        'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const getData = async (videoId) => {
    try {
        const response = await axios.get(`https://youtube-v31.p.rapidapi.com/captions/snippet?${videoId}/API__KEY/youtube-v31.p.rapidapi.com`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}
