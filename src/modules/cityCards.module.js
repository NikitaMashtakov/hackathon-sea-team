import { Module } from "../core/module";
import { loadDataFromJSON, renderCityCards } from "../utils";

export class CityCardsModule extends Module {
  #cities = [];
  #isLoaded = false;

  async trigger() {
    if (!this.#isLoaded) {
      this.#cities = await loadDataFromJSON(
        "./data/cityCards.json",
        "cities"
      );
      this.#isLoaded = true;
    }

    const container = document.querySelector("#modules-container");
    renderCityCards(this.#cities, container, 3);
  }
}
