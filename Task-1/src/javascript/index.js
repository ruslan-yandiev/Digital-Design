import * as $ from 'jquery';

function importAll(resolve) {
    resolve.keys().forEach(resolve);
}

importAll(require.context('@/', true, /\.js$|\.scss$/));
