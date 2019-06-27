const viewHashtag = value =>{
    let a = value.split(' ');
    let a2 = [];
    for( let i = 0; i < a.length; i++) {
      if(a[i].toString().includes('#')){
        let aux = `<a class="text-is-hashtag" href="https://www.instagram.com/explore/tags/${a[i].slice(1)}/" target="_blank">${a[i]}</a>`;
        a2.push(aux);
      }
  
      else{
        a2.push(a[i]);
      }
    }
  
    let finalTex = `${a2.join(' ')}`;
    return finalTex;
}

export default viewHashtag;