const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '9c388cc8-6b6d-4685-a997-629e8579dc3f'}
  });
  export default instance;