import axios from 'axios';

/**
 * example
 * HttpService.get('login').then(res => { console.log(res); });
 */
class HttpService {
  public static getHeader(): any {
    return {
      Authorization: `Bearer ${window.localStorage.getItem('x-token')}`,
    };
  }

  /**
   * GET method
   * @param {string} url
   */
  public static get(url: string) {
    return axios({
      method: 'GET',
      url: `/api/${url}`,
      headers: HttpService.getHeader(),
    }).then((res) => res.data);
  }
}

export default HttpService;
