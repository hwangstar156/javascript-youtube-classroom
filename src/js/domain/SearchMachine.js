import youtubeSearchAPI from '../api/youtubeSearchapi.js';
import { LOCALSTORAGE_KEY_SAVE } from '../constant/index.js';
import { checkValidSearchInput, checkMaxStorageVolume } from '../util/validator.js';
import { getLocalStorage, setLocalStorage } from './localStorage.js';
import VideoFactory from './VideoFactory.js';

export default class SearchMachine {
  #keyword;

  #pageToken;

  constructor() {
    this.#pageToken = '';
    this.#keyword = '';
  }

  set keyword(value) {
    checkValidSearchInput(value);
    this.#keyword = value;
  }

  async search() {
    const data = await youtubeSearchAPI.searchByPage(this.#keyword, this.#pageToken);
    this.#pageToken = data.nextPageToken;
    const videos = data.items.map((item) => VideoFactory.generate(item));

    return videos;
  }

  initPageToken() {
    this.#pageToken = '';
  }

  saveVideoToLocalStorage(newVideo) {
    checkMaxStorageVolume();
    const savedVideos = getLocalStorage(LOCALSTORAGE_KEY_SAVE);

    setLocalStorage(LOCALSTORAGE_KEY_SAVE, savedVideos.concat(newVideo));
  }
}
