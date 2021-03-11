import { PALLET } from "../utils/constants.js";
import {
  hideElement,
  showElement,
  removeBackgroundColor,
  addBackgroundColor,
} from "../utils/dom.js";
import elements from "../utils/elements.js";

export default class WatchView {
  markWatchLaterButton() {
    this.removeAllButtonColor();
    addBackgroundColor(elements.$watchLaterButton, PALLET.CYAN_100);
  }

  markWatchedButton() {
    this.removeAllButtonColor();
    addBackgroundColor(elements.$watchedButton, PALLET.CYAN_100);
  }

  showNotSavedImg() {
    this.hideAllSection();
    showElement(elements.$notSaved);
  }

  showNotWatchedImg() {
    this.hideAllSection();
    showElement(elements.$notWatched);
  }

  showWatchLaterVideos() {
    this.hideAllSection();
    showElement(elements.$watchLaterVideos);
  }

  showWatchedVideos() {
    this.hideAllSection();
    showElement(elements.$watchedVideos);
  }

  removeAllButtonColor() {
    removeBackgroundColor(elements.$watchLaterButton, PALLET.CYAN_100);
    removeBackgroundColor(elements.$watchedButton, PALLET.CYAN_100);
  }

  hideAllSection() {
    hideElement(elements.$notSaved);
    hideElement(elements.$notWatched);
    hideElement(elements.$watchLaterVideos);
    hideElement(elements.$watchedVideos);
  }
}
