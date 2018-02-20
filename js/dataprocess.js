function getvalue(){
    var v1 = document.getElementById('domain').value;
    var v2 = document.getElementById('dir').value;
    var v3 = document.getElementById('page').value;
    var n = v3.replace(/[^0-9]/g,'');
    var strs = new Array(v1,v2,v3,n);
    return strs;
}

function geturl() {
    if (document.getElementById('gnext')){
        document.getElementById('gnext').innerHTML='';
    }
    var data = getvalue();
    var url = data[0] + data[1] + "/" +data[2] + "/"  + "1.jpg-mht.middle";
    document.getElementById('box').innerText= url;
    //generate input
    var tag = document.createElement('input');
    tag.setAttribute('type','button');
    tag.setAttribute('value','下一话');
    tag.setAttribute('id','next');
    tag.setAttribute('onclick','next();');
    document.getElementById('gnext').appendChild(tag);
}

function getpictrue() {
    if (document.getElementById('img')){
        document.getElementById('img').innerHTML='';
    }
    var v = document.getElementById('box').innerText;
    //generate img
    for (var i=1;i<=6;i++){
        var im = document.createElement('img');
        im.setAttribute('id',i);

        var s = i + ".jpg-mht.middle";
        var vs = v.split('/');
        vs.splice(7,1,s);
        im.setAttribute('src',vs.join('/'));
        document.getElementById('img').appendChild(im);
    }
}

function next() {
    var v = document.getElementById('box').innerText;
    var pn = v.split('/')[6].replace(/[^0-9]/g, '');
        pn = Number(pn) +1;
    var spn = pn + "话";
    document.getElementById('img').innerHTML = '';

    for (var i = 1; i <= 6; i++) {
        var im = document.createElement('img');
        im.setAttribute('id', i);

        var s = i + ".jpg-mht.middle";
        var vs = v.split('/');
        vs.splice(7, 1, s);
        vs.splice(6, 1, spn);
        im.setAttribute('src', vs.join('/'));
        document.getElementById('img').appendChild(im);
    }
    document.getElementById('box').innerText=vs.join('/');
}