import { elements } from "./base";

export const getInput = () => elements.searchInput.value;

const renderRecipe = receipe => {
  const markup = `<li>
    <a class="results__link  href="#${receipe.receipe_id}">
        <figure class="results__fig">
            <img src="${receipe.image_url}" alt="${receipe.title}">
        </figure>
        <div class="results__data">
            <h4 class="results__name">${receipe.title}</h4>
            <p class="results__author">${receipe.publisher}</p>
        </div>
    </a>
</li>`;

elements.searchResList.innerAdjacentHTML('beforeend',markup);

}



export const renderResults = recipes => {
  recipes.forEach(renderRecipe);
};
