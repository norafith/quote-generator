// load css through style- and css-loaders
import css from "./index.css";
import { getQuoteByTheme, getRandomQuote } from "./apiRequests";
import {
  renderQuote,
  buttonAnimationInit,
  generateError,
  buttonListenersInit,
} from "./DOMstuff";
buttonAnimationInit();
buttonListenersInit();
