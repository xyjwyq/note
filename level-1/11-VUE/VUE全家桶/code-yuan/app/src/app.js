import Pager from './pager.js';
import MovieList from './movieList.js';

const template = `
    <div>
        <MovieList></MovieList>
        <Pager></Pager>
    </div>
`;

export default {
    template,
    components:{
        Pager,
        MovieList
    }
}