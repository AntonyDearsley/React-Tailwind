function importAll(r) {
    let images = {};
    r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
    return images;
}

export default importAll;
  

// Use this for get file from rute
// const images = importAll(require.context('./rute', false, /\.(png|jpe?g|jpg|svg)$/));