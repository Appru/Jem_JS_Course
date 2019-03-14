import Search from './models/Search';

/** Global state of the app:
 *  -Search object
 *  -Current recipe object
 *  -Shopping list object
 *  -Liked recipes
 * 
 */
const state = {

};

const controlSearch = () =>{
    // 1) get the query from the view.

    console.log('aaah lmao</br>');
}

document.querySelector('.search').addEventListener('submit', e =>{
    e.preventDefault();
    controlSearch();


});

const search = new Search('ramen');

console.log(search);

search.getResults();

 