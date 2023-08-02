function SwapDiv(div1,div2){
    d1=document.getElementById(div1);d2=document.getElementById(div2)
    if(d2.style.display=="none"){d1.style.display="none";d2.style.display=""}
    else{d1.style.display="";d2.style.display="none"}
}
function TimeMch(t){
    if(t==0){document.getElementById('olne').style.backgroundImage="url(../../ast/hksk/bg/lever-old.png)";
    document.getElementById('lnkold').style.backgroundImage="url(../../ast/hksk/bg/tuner-on.png)";
    document.getElementById('lnknew').style.backgroundImage="url(../../ast/hksk/bg/tuner-off.png)";
    document.getElementById('old').style.display='block';document.getElementById('new').style.display='none'}
    if(t==1){document.getElementById('olne').style.backgroundImage="url(../../ast/hksk/bg/lever-new.png)";
    document.getElementById('lnkold').style.backgroundImage="url(../../ast/hksk/bg/tuner-off.png)";
    document.getElementById('lnknew').style.backgroundImage="url(../../ast/hksk/bg/tuner-on.png)";
    document.getElementById('old').style.display='none';document.getElementById('new').style.display='block'}
}
function ShoHiC(id,cls,cola='rgb(var(--midd))',coli='rgb(var(--fore))',type='block'){
    d=document.getElementById(id);b=document.getElementById(id+'_b')
    var d_ele=document.getElementsByClassName(cls);for(var i=0;i<d_ele.length;++i){d_ele[i].style.display='none'}
    var b_ele=document.getElementsByClassName(cls+'_b')
    for(var i=0;i<b_ele.length;++i){b_ele[i].style.background=coli}
    d.style.display=type
    b.style.background=cola
}
function ShoHid(id,cls,type='block'){
    d=document.getElementById(id);b=document.getElementById(id+'_b');c=document.getElementById(cls+'_c')
    var d_ele=document.getElementsByClassName(cls);
    for(var i=0;i<d_ele.length;++i){d_ele[i].style.display='none'}
    d.style.display=type
    var style;if(window.getComputedStyle){style=window.getComputedStyle(b).backgroundColor}else{style=b.currentStyle.backgroundColor}
    document.getElementById(cls+'_c').style.background=style
    document.getElementById(cls+'_c').style.borderColor=style
}
function ToggleDiv(cl){
    var els=document.getElementsByClassName(cl);
    for(var i=0;i<els.length;i++){var s=els[i].style;s.display=s.display==='none'?'':'none'}
}
function SpoilDiv(id){
    dc=document.getElementById(id)
    if(dc.style.display=="none"){dc.style.display=''}else{dc.style.display="none"}
}
function openNav(){
    document.getElementById("sidenav").style.left = "0";
    document.getElementById("openbtn").style.left = "-100%";
    if (window.matchMedia("(orientation: landscape)").matches) {
        document.getElementById("wrap").style.left = "16%";
        document.getElementById("wrap").style.width = "84%";
    }
}
function closeNav(){
    document.getElementById("sidenav").style.left = "-100%";
    document.getElementById("openbtn").style.left = "1vh";
    if (window.matchMedia("(orientation: landscape)").matches) {
        document.getElementById("wrap").style.left = "0";
        document.getElementById("wrap").style.width = "100%";
    }
    else {
        document.getElementById("sidenav").style.width = "50%";
    }
}
function ScrollToPage() {
  var input, p;
  input = document.getElementById('selpage');
  if (event.key === "Enter") {
    document.getElementById('page' + input.value).scrollIntoView();
  }
}
function Toggle(cl){
  var button=document.getElementById(cl);
  var els=document.getElementsByClassName(cl);
  if(button.style.opacity=='1'){
    button.style.opacity='.17';
    for(var i=0;i<els.length;i++){
      els[i].style.opacity='.17'
    }
  }else{
    button.style.opacity='1';
    for(var i=0;i<els.length;i++){
      els[i].style.opacity='1'
    }
  }
}
function FilterItems() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('filterinput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("filterlist");
  li = ul.getElementsByTagName('a');
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("div")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
function ToggleCode(){
    var els=document.getElementsByTagName('code');
    for(var i=0;i<els.length;i++){
        var s=els[i].style;s.display=s.display==='unset'?'none':'unset'
    }
}
var rowDivs = document.getElementsByClassName('row');
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
function ScrollAll(referenceRow) {
    var scrollLeft = referenceRow.scrollLeft;
    for (var i = 1; i < globalThis.rowDivs.length -1; i++) {
        if (isInViewport(globalThis.rowDivs[i])) {
            globalThis.rowDivs[i-1].scrollLeft = scrollLeft;
            if (globalThis.rowDivs[i] != referenceRow) {
                globalThis.rowDivs[i].scrollLeft = scrollLeft;
            }
            globalThis.rowDivs[i+1].scrollLeft = scrollLeft;
        }
    }
}
const root = document.documentElement;
var fleurstart = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' viewBox='0 0 5000 5000'%3E%3Cstyle%3E*%7B--fore:"
var fleurmoves = getComputedStyle(root).getPropertyValue('--midd');
var fleurend = "%7D%3C/style%3E%3Cg%3E%3Cpath fill='rgb(var(--fore))' d='m821.13 160.13q-.21 1.68.79.32 6.18-8.46 12.62-16.6c18.52-23.46 43.08-36.11 72.35-39.83q33.53-4.27 67.85 3.05c33.81 7.21 64.68 17.97 93.12 36.54q35.27 23.04 70.7 45.84 13.37 8.61 22.85 13.8c29.9 16.36 62.05 24.47 96.09 24.35q40.58-.15 79.85-10.94c17.46-4.79 36.88-13.82 47.48-28.45 15.39-21.22 22.75-46.76 18.95-72.8-1.66-11.4-5.36-19.22-17.51-20.2q-1.01-.09-.45.76c6.59 9.91 3.38 26.82-2.38 35.97-8.67 13.77-22.12 21.41-38.45 20.37-22.49-1.44-46.4-9.44-53.38-33.78q-6.93-24.19 3.09-48.07c6.88-16.38 17.81-26.22 34.33-32.62 40-15.5 85.98-.52 109.36 35.67 14.4 22.29 23.67 49.77 23.14 76.55-.62 30.57-8.88 63.27-28.68 87.32-24.27 29.5-58.4 45.78-96.35 50.72q-41.04 5.35-85 1.64c-45.55-3.84-86.61-15.68-123.87-41.89q-16.21-11.41-30.67-21.67-2.56-1.81-2.17 1.3 2.85 23-6.89 42.17c-12.6 24.77-31.42 40.44-56.36 51.51-42.24 18.74-94.48 18.61-131.46-11.9-20.17-16.64-29.24-37.56-25.34-64.52 2.99-20.68 13.54-33.39 31.23-43.31 20.35-11.42 43.29-15.65 65.77-9.67 16.05 4.26 33.18 16.07 39.72 31.79 3.48 8.38 1.09 17.18-3.2 24.76a.89.88 30.6 00.31 1.19c6.98 4.3 15.89 1.08 22.75-2.08 9.35-4.3 12.87-11.56 12.92-21.73q.17-31.7-27.73-47.97c-21.7-12.66-49.42-21.16-74.76-21.79-46.76-1.17-87.57 15.51-113.99 55.34q-3.56 5.37-9.81 17.42c-15.11 29.17-28.89 56.19-58.64 74.28-25.52 15.51-54.56 25.08-84.56 28.54-42.66 4.91-83.84 3.24-119.93-21.56-22.11-15.19-42.7-37.2-54.15-61.88q-1.16-2.5-6.38-14.87c-11.54-27.35-34.94-52.51-66.44-53.73-11.42-.44-25.35 2.37-36.92 3.19-10.68.75-26.68.3-22.94-15.68 8.5-36.29 41.12-60.06 77.75-61.64 41.83-1.8 80.78 13.49 114.6 37.06q14.63 10.2 25.26 24.51 3.43 4.62 11.95 21.54 10.8 21.47 21.61 42.94c13.81 27.45 35.22 40.75 65.85 42.51 19.18 1.1 37.84-4.45 55.03-13.38 17.49-9.09 25.9-22.95 29.73-41.73 6.55-32.04-11.3-62.5-37.57-79.25-6.3-4.01-19.21-8.64-26.12-17.36-9.43-11.93-3.31-26.64 8.12-34.24 13.31-8.85 30.25-15.89 46.08-16.4 28.52-.92 55.45 18.79 61.15 47.13 2.47 12.27 1.36 28.16-.3 41.46zm-566.57-54.94c32.84 3.45 62.01 15.17 82.5 41.28 8.38 10.67 13.12 21.88 15.7 35.03 2.9 14.79 2.14 30.84-15.52 34.98-2.68.63-7.65-.97-10.3-2.56-12.69-7.61-14.67-20.35-21.34-32.25-14.95-26.67-36.72-41.34-68-40.61q-45.74 1.07-79.1 32.92c-10.03 9.58-22.62 24.53-37.25 32.2q-14.06 7.38-24.49-3.17c-9.73-9.84-7-27.88-2.14-39.49 7.2-17.2 23.78-28.77 39.83-36.81 22.84-11.46 47.24-21.22 72.76-22.8q22.08-1.38 47.35 1.28zm-16.29 832.06a.92.92 78.3 00-.79 1.21c2.98 8.74 6.62 18.45 8.35 26.63q4.56 21.55-.59 42.66c-13.47 55.18-53.26 93.84-109.75 103.18-35.74 5.92-67.42-10.08-89.13-37.81-18.17-23.19-18.97-51.62-7.46-78.02 9.63-22.09 27.77-31.15 51.16-32.9q21.79-1.62 36.13 14.37c10.86 12.11 16.87 30.47 15.46 46.44-1.53 17.28-18.12 37.31-35.47 41.41q-1.19.28-.22 1.02c10.69 8.19 27.17 6.8 39.51 3.48 24.86-6.68 35.25-24.03 40.38-47.96q8.73-40.7-3.38-82.21c-5.75-19.72-13.13-34.12-24.78-50.88-14.4-20.74-27.77-42.81-35.79-66.79-6.83-20.43-6.57-44.85-2.27-66.16q3.48-17.27 13.11-31.99 15.84-24.21 32.04-48.2.86-1.28-.59-.77-15.53 5.52-31.97 5.39c-20.49-.15-36.23-3.98-46.9-23.12-10.75-19.28-15.58-45.46-2.14-64.55 8.13-11.55 20.93-22.67 35.25-24.05 20.92-2.02 42.29 8.63 44.86 31.38 1.3 11.45-.66 22.22-9.59 29.94q-.52.45.15.58c27.07 5.38 41.37-13.09 41.58-37.97.36-42.82-30.06-80.91-55.7-112.79q-23.53-29.25-37.38-60.85c-11.5-26.24-12.91-57.24-9.81-86.74 4.81-45.74 21.09-81.26 53.86-113.63 22.27-22 48.64-41.68 80.09-45.58 20.64-2.56 43.39-2.95 60.34 8.45 11.24 7.56 7.78 18.59-2.06 24.62q-20.09 12.29-40.21 24.53-10.9 6.62-16.59 11.12c-25.84 20.41-45.62 51.35-49.72 84.6-3.85 31.26-.71 65.49 7.57 96.19 4.03 14.92 9.34 26.45 17.61 41.21 12.87 22.97 24.07 46.39 31.63 71.67 8.19 27.4 8.23 57.35 2.01 85.09-2.75 12.27-7.72 23.64-13.68 34.65q-17.53 32.39-35.02 64.8c-16.37 30.31-23.31 64.27-8.84 97.09 14.22 32.25 33.24 59.12 63.96 77.44 15.76 9.39 35.04 14.5 52.89 8.81 9.37-2.98 10.68-8.21 13.11-16.76a1.23 1.23 12.2 00-1-1.55c-6.82-1.01-14.29-3.01-19.07-8.55-7.55-8.76-9.22-23.96-5.16-34.64 4.84-12.72 20.45-23.02 33.86-23.98 20.79-1.49 38.54 13.36 44.48 32.32 7.53 24.09-.18 49.43-14.66 69.13-24.25 32.99-74.36 33.22-108.53 19.39q-.9-.37-1.14-.35zm370.81-361.45c-63.07-9.26-117.28-50.83-156.24-99.98-32.48-40.98-63.56-87.03-81.63-136.84-11.15-30.73-19.49-93.26 20.92-109.32 23.05-9.17 44-2.81 57.52 17.93 14.84 22.78 22.05 50.39 30.46 75.95 20.35 61.95 45.78 125.6 84.68 177.66 20.15 26.96 48.48 44.39 82.41 47.08 11.45.91 21.23-.65 31.94-4.46 3.8-1.36 21.24-9.45 21.37-.54.06 4.29-5.23 8.36-7.86 11.17-22.82 24.36-52.41 25.93-83.57 21.35zm137.36-109.74q-.67-1.48-1.02-.13c-3.04 11.81-12.29 20.47-22.64 26.06-12.88 6.95-29.03 8.14-43.36 5.08-30.19-6.44-48.97-43.54-43.61-72.16 8.63-45.95 60.76-63.69 101.01-46.67 22.33 9.44 39.26 31.94 47.48 54.46 14.53 39.82 19.28 83.74-.57 122.75-9.23 18.13-21.06 35.78-35.36 50.27-27.46 27.82-60.07 43.75-97.83 53.18-56.57 14.13-113.19 16.65-171.06 10.04-49.43-5.64-96.67-26.98-136.4-57.52-22.4-17.21-42.22-35.27-59.51-58.98-12.36-16.95-22.74-38.26-31.72-58.77q-26.17-59.83-32.27-125.22c-3.5-37.59.97-69.97 24.53-100.35 9.54-12.3 20.66-24.31 33.82-32.36q16.36-10.01 31.5.08c14.66 9.76 19.4 24.24 20.72 41.04 1.97 24.94 5.62 47.25 10.75 71.88 11.17 53.53 36.64 107.52 68.3 152.56q34.39 48.94 83.69 82.24c18.15 12.26 39.08 21.59 60.1 25.74 15.73 3.11 34.41 5.52 51.59 4.52 25.99-1.5 51.79-7.39 75.57-17.81 22.34-9.79 42.53-27.46 56.78-46.79 14.37-19.49 17.92-48.24 13.22-71.64q-1.2-5.93-3.71-11.5z' /%3E%3Ccircle fill='rgb(var(--fore))' cx='309.89' cy='714.82' r='75.80'/%3E%3Cline x1='140' y1='1200' x2='140' y2='3800' style='stroke:rgb(var(--fore));stroke-width:50;stroke-linecap:round' /%3E%3Cline x1='200' y1='1250' x2='200' y2='3750' style='stroke:rgb(var(--fore));stroke-width:20;stroke-linecap:round' /%3E%3C/g%3E%3Cg transform='translate(5000,0) scale(-1,1)'%3E%3Cpath fill='rgb(var(--fore))' d='m821.13 160.13q-.21 1.68.79.32 6.18-8.46 12.62-16.6c18.52-23.46 43.08-36.11 72.35-39.83q33.53-4.27 67.85 3.05c33.81 7.21 64.68 17.97 93.12 36.54q35.27 23.04 70.7 45.84 13.37 8.61 22.85 13.8c29.9 16.36 62.05 24.47 96.09 24.35q40.58-.15 79.85-10.94c17.46-4.79 36.88-13.82 47.48-28.45 15.39-21.22 22.75-46.76 18.95-72.8-1.66-11.4-5.36-19.22-17.51-20.2q-1.01-.09-.45.76c6.59 9.91 3.38 26.82-2.38 35.97-8.67 13.77-22.12 21.41-38.45 20.37-22.49-1.44-46.4-9.44-53.38-33.78q-6.93-24.19 3.09-48.07c6.88-16.38 17.81-26.22 34.33-32.62 40-15.5 85.98-.52 109.36 35.67 14.4 22.29 23.67 49.77 23.14 76.55-.62 30.57-8.88 63.27-28.68 87.32-24.27 29.5-58.4 45.78-96.35 50.72q-41.04 5.35-85 1.64c-45.55-3.84-86.61-15.68-123.87-41.89q-16.21-11.41-30.67-21.67-2.56-1.81-2.17 1.3 2.85 23-6.89 42.17c-12.6 24.77-31.42 40.44-56.36 51.51-42.24 18.74-94.48 18.61-131.46-11.9-20.17-16.64-29.24-37.56-25.34-64.52 2.99-20.68 13.54-33.39 31.23-43.31 20.35-11.42 43.29-15.65 65.77-9.67 16.05 4.26 33.18 16.07 39.72 31.79 3.48 8.38 1.09 17.18-3.2 24.76a.89.88 30.6 00.31 1.19c6.98 4.3 15.89 1.08 22.75-2.08 9.35-4.3 12.87-11.56 12.92-21.73q.17-31.7-27.73-47.97c-21.7-12.66-49.42-21.16-74.76-21.79-46.76-1.17-87.57 15.51-113.99 55.34q-3.56 5.37-9.81 17.42c-15.11 29.17-28.89 56.19-58.64 74.28-25.52 15.51-54.56 25.08-84.56 28.54-42.66 4.91-83.84 3.24-119.93-21.56-22.11-15.19-42.7-37.2-54.15-61.88q-1.16-2.5-6.38-14.87c-11.54-27.35-34.94-52.51-66.44-53.73-11.42-.44-25.35 2.37-36.92 3.19-10.68.75-26.68.3-22.94-15.68 8.5-36.29 41.12-60.06 77.75-61.64 41.83-1.8 80.78 13.49 114.6 37.06q14.63 10.2 25.26 24.51 3.43 4.62 11.95 21.54 10.8 21.47 21.61 42.94c13.81 27.45 35.22 40.75 65.85 42.51 19.18 1.1 37.84-4.45 55.03-13.38 17.49-9.09 25.9-22.95 29.73-41.73 6.55-32.04-11.3-62.5-37.57-79.25-6.3-4.01-19.21-8.64-26.12-17.36-9.43-11.93-3.31-26.64 8.12-34.24 13.31-8.85 30.25-15.89 46.08-16.4 28.52-.92 55.45 18.79 61.15 47.13 2.47 12.27 1.36 28.16-.3 41.46zm-566.57-54.94c32.84 3.45 62.01 15.17 82.5 41.28 8.38 10.67 13.12 21.88 15.7 35.03 2.9 14.79 2.14 30.84-15.52 34.98-2.68.63-7.65-.97-10.3-2.56-12.69-7.61-14.67-20.35-21.34-32.25-14.95-26.67-36.72-41.34-68-40.61q-45.74 1.07-79.1 32.92c-10.03 9.58-22.62 24.53-37.25 32.2q-14.06 7.38-24.49-3.17c-9.73-9.84-7-27.88-2.14-39.49 7.2-17.2 23.78-28.77 39.83-36.81 22.84-11.46 47.24-21.22 72.76-22.8q22.08-1.38 47.35 1.28zm-16.29 832.06a.92.92 78.3 00-.79 1.21c2.98 8.74 6.62 18.45 8.35 26.63q4.56 21.55-.59 42.66c-13.47 55.18-53.26 93.84-109.75 103.18-35.74 5.92-67.42-10.08-89.13-37.81-18.17-23.19-18.97-51.62-7.46-78.02 9.63-22.09 27.77-31.15 51.16-32.9q21.79-1.62 36.13 14.37c10.86 12.11 16.87 30.47 15.46 46.44-1.53 17.28-18.12 37.31-35.47 41.41q-1.19.28-.22 1.02c10.69 8.19 27.17 6.8 39.51 3.48 24.86-6.68 35.25-24.03 40.38-47.96q8.73-40.7-3.38-82.21c-5.75-19.72-13.13-34.12-24.78-50.88-14.4-20.74-27.77-42.81-35.79-66.79-6.83-20.43-6.57-44.85-2.27-66.16q3.48-17.27 13.11-31.99 15.84-24.21 32.04-48.2.86-1.28-.59-.77-15.53 5.52-31.97 5.39c-20.49-.15-36.23-3.98-46.9-23.12-10.75-19.28-15.58-45.46-2.14-64.55 8.13-11.55 20.93-22.67 35.25-24.05 20.92-2.02 42.29 8.63 44.86 31.38 1.3 11.45-.66 22.22-9.59 29.94q-.52.45.15.58c27.07 5.38 41.37-13.09 41.58-37.97.36-42.82-30.06-80.91-55.7-112.79q-23.53-29.25-37.38-60.85c-11.5-26.24-12.91-57.24-9.81-86.74 4.81-45.74 21.09-81.26 53.86-113.63 22.27-22 48.64-41.68 80.09-45.58 20.64-2.56 43.39-2.95 60.34 8.45 11.24 7.56 7.78 18.59-2.06 24.62q-20.09 12.29-40.21 24.53-10.9 6.62-16.59 11.12c-25.84 20.41-45.62 51.35-49.72 84.6-3.85 31.26-.71 65.49 7.57 96.19 4.03 14.92 9.34 26.45 17.61 41.21 12.87 22.97 24.07 46.39 31.63 71.67 8.19 27.4 8.23 57.35 2.01 85.09-2.75 12.27-7.72 23.64-13.68 34.65q-17.53 32.39-35.02 64.8c-16.37 30.31-23.31 64.27-8.84 97.09 14.22 32.25 33.24 59.12 63.96 77.44 15.76 9.39 35.04 14.5 52.89 8.81 9.37-2.98 10.68-8.21 13.11-16.76a1.23 1.23 12.2 00-1-1.55c-6.82-1.01-14.29-3.01-19.07-8.55-7.55-8.76-9.22-23.96-5.16-34.64 4.84-12.72 20.45-23.02 33.86-23.98 20.79-1.49 38.54 13.36 44.48 32.32 7.53 24.09-.18 49.43-14.66 69.13-24.25 32.99-74.36 33.22-108.53 19.39q-.9-.37-1.14-.35zm370.81-361.45c-63.07-9.26-117.28-50.83-156.24-99.98-32.48-40.98-63.56-87.03-81.63-136.84-11.15-30.73-19.49-93.26 20.92-109.32 23.05-9.17 44-2.81 57.52 17.93 14.84 22.78 22.05 50.39 30.46 75.95 20.35 61.95 45.78 125.6 84.68 177.66 20.15 26.96 48.48 44.39 82.41 47.08 11.45.91 21.23-.65 31.94-4.46 3.8-1.36 21.24-9.45 21.37-.54.06 4.29-5.23 8.36-7.86 11.17-22.82 24.36-52.41 25.93-83.57 21.35zm137.36-109.74q-.67-1.48-1.02-.13c-3.04 11.81-12.29 20.47-22.64 26.06-12.88 6.95-29.03 8.14-43.36 5.08-30.19-6.44-48.97-43.54-43.61-72.16 8.63-45.95 60.76-63.69 101.01-46.67 22.33 9.44 39.26 31.94 47.48 54.46 14.53 39.82 19.28 83.74-.57 122.75-9.23 18.13-21.06 35.78-35.36 50.27-27.46 27.82-60.07 43.75-97.83 53.18-56.57 14.13-113.19 16.65-171.06 10.04-49.43-5.64-96.67-26.98-136.4-57.52-22.4-17.21-42.22-35.27-59.51-58.98-12.36-16.95-22.74-38.26-31.72-58.77q-26.17-59.83-32.27-125.22c-3.5-37.59.97-69.97 24.53-100.35 9.54-12.3 20.66-24.31 33.82-32.36q16.36-10.01 31.5.08c14.66 9.76 19.4 24.24 20.72 41.04 1.97 24.94 5.62 47.25 10.75 71.88 11.17 53.53 36.64 107.52 68.3 152.56q34.39 48.94 83.69 82.24c18.15 12.26 39.08 21.59 60.1 25.74 15.73 3.11 34.41 5.52 51.59 4.52 25.99-1.5 51.79-7.39 75.57-17.81 22.34-9.79 42.53-27.46 56.78-46.79 14.37-19.49 17.92-48.24 13.22-71.64q-1.2-5.93-3.71-11.5z' /%3E%3Ccircle fill='rgb(var(--fore))' cx='309.89' cy='714.82' r='75.80'/%3E%3Cline x1='1550' y1='140' x2='3450' y2='140' style='stroke:rgb(var(--fore));stroke-width:50;stroke-linecap:round' /%3E%3Cline x1='1600' y1='200' x2='3400' y2='200' style='stroke:rgb(var(--fore));stroke-width:20;stroke-linecap:round' /%3E%3C/g%3E%3Cg transform='translate(0,5000) scale(1,-1)'%3E%3Cpath fill='rgb(var(--fore))' d='m821.13 160.13q-.21 1.68.79.32 6.18-8.46 12.62-16.6c18.52-23.46 43.08-36.11 72.35-39.83q33.53-4.27 67.85 3.05c33.81 7.21 64.68 17.97 93.12 36.54q35.27 23.04 70.7 45.84 13.37 8.61 22.85 13.8c29.9 16.36 62.05 24.47 96.09 24.35q40.58-.15 79.85-10.94c17.46-4.79 36.88-13.82 47.48-28.45 15.39-21.22 22.75-46.76 18.95-72.8-1.66-11.4-5.36-19.22-17.51-20.2q-1.01-.09-.45.76c6.59 9.91 3.38 26.82-2.38 35.97-8.67 13.77-22.12 21.41-38.45 20.37-22.49-1.44-46.4-9.44-53.38-33.78q-6.93-24.19 3.09-48.07c6.88-16.38 17.81-26.22 34.33-32.62 40-15.5 85.98-.52 109.36 35.67 14.4 22.29 23.67 49.77 23.14 76.55-.62 30.57-8.88 63.27-28.68 87.32-24.27 29.5-58.4 45.78-96.35 50.72q-41.04 5.35-85 1.64c-45.55-3.84-86.61-15.68-123.87-41.89q-16.21-11.41-30.67-21.67-2.56-1.81-2.17 1.3 2.85 23-6.89 42.17c-12.6 24.77-31.42 40.44-56.36 51.51-42.24 18.74-94.48 18.61-131.46-11.9-20.17-16.64-29.24-37.56-25.34-64.52 2.99-20.68 13.54-33.39 31.23-43.31 20.35-11.42 43.29-15.65 65.77-9.67 16.05 4.26 33.18 16.07 39.72 31.79 3.48 8.38 1.09 17.18-3.2 24.76a.89.88 30.6 00.31 1.19c6.98 4.3 15.89 1.08 22.75-2.08 9.35-4.3 12.87-11.56 12.92-21.73q.17-31.7-27.73-47.97c-21.7-12.66-49.42-21.16-74.76-21.79-46.76-1.17-87.57 15.51-113.99 55.34q-3.56 5.37-9.81 17.42c-15.11 29.17-28.89 56.19-58.64 74.28-25.52 15.51-54.56 25.08-84.56 28.54-42.66 4.91-83.84 3.24-119.93-21.56-22.11-15.19-42.7-37.2-54.15-61.88q-1.16-2.5-6.38-14.87c-11.54-27.35-34.94-52.51-66.44-53.73-11.42-.44-25.35 2.37-36.92 3.19-10.68.75-26.68.3-22.94-15.68 8.5-36.29 41.12-60.06 77.75-61.64 41.83-1.8 80.78 13.49 114.6 37.06q14.63 10.2 25.26 24.51 3.43 4.62 11.95 21.54 10.8 21.47 21.61 42.94c13.81 27.45 35.22 40.75 65.85 42.51 19.18 1.1 37.84-4.45 55.03-13.38 17.49-9.09 25.9-22.95 29.73-41.73 6.55-32.04-11.3-62.5-37.57-79.25-6.3-4.01-19.21-8.64-26.12-17.36-9.43-11.93-3.31-26.64 8.12-34.24 13.31-8.85 30.25-15.89 46.08-16.4 28.52-.92 55.45 18.79 61.15 47.13 2.47 12.27 1.36 28.16-.3 41.46zm-566.57-54.94c32.84 3.45 62.01 15.17 82.5 41.28 8.38 10.67 13.12 21.88 15.7 35.03 2.9 14.79 2.14 30.84-15.52 34.98-2.68.63-7.65-.97-10.3-2.56-12.69-7.61-14.67-20.35-21.34-32.25-14.95-26.67-36.72-41.34-68-40.61q-45.74 1.07-79.1 32.92c-10.03 9.58-22.62 24.53-37.25 32.2q-14.06 7.38-24.49-3.17c-9.73-9.84-7-27.88-2.14-39.49 7.2-17.2 23.78-28.77 39.83-36.81 22.84-11.46 47.24-21.22 72.76-22.8q22.08-1.38 47.35 1.28zm-16.29 832.06a.92.92 78.3 00-.79 1.21c2.98 8.74 6.62 18.45 8.35 26.63q4.56 21.55-.59 42.66c-13.47 55.18-53.26 93.84-109.75 103.18-35.74 5.92-67.42-10.08-89.13-37.81-18.17-23.19-18.97-51.62-7.46-78.02 9.63-22.09 27.77-31.15 51.16-32.9q21.79-1.62 36.13 14.37c10.86 12.11 16.87 30.47 15.46 46.44-1.53 17.28-18.12 37.31-35.47 41.41q-1.19.28-.22 1.02c10.69 8.19 27.17 6.8 39.51 3.48 24.86-6.68 35.25-24.03 40.38-47.96q8.73-40.7-3.38-82.21c-5.75-19.72-13.13-34.12-24.78-50.88-14.4-20.74-27.77-42.81-35.79-66.79-6.83-20.43-6.57-44.85-2.27-66.16q3.48-17.27 13.11-31.99 15.84-24.21 32.04-48.2.86-1.28-.59-.77-15.53 5.52-31.97 5.39c-20.49-.15-36.23-3.98-46.9-23.12-10.75-19.28-15.58-45.46-2.14-64.55 8.13-11.55 20.93-22.67 35.25-24.05 20.92-2.02 42.29 8.63 44.86 31.38 1.3 11.45-.66 22.22-9.59 29.94q-.52.45.15.58c27.07 5.38 41.37-13.09 41.58-37.97.36-42.82-30.06-80.91-55.7-112.79q-23.53-29.25-37.38-60.85c-11.5-26.24-12.91-57.24-9.81-86.74 4.81-45.74 21.09-81.26 53.86-113.63 22.27-22 48.64-41.68 80.09-45.58 20.64-2.56 43.39-2.95 60.34 8.45 11.24 7.56 7.78 18.59-2.06 24.62q-20.09 12.29-40.21 24.53-10.9 6.62-16.59 11.12c-25.84 20.41-45.62 51.35-49.72 84.6-3.85 31.26-.71 65.49 7.57 96.19 4.03 14.92 9.34 26.45 17.61 41.21 12.87 22.97 24.07 46.39 31.63 71.67 8.19 27.4 8.23 57.35 2.01 85.09-2.75 12.27-7.72 23.64-13.68 34.65q-17.53 32.39-35.02 64.8c-16.37 30.31-23.31 64.27-8.84 97.09 14.22 32.25 33.24 59.12 63.96 77.44 15.76 9.39 35.04 14.5 52.89 8.81 9.37-2.98 10.68-8.21 13.11-16.76a1.23 1.23 12.2 00-1-1.55c-6.82-1.01-14.29-3.01-19.07-8.55-7.55-8.76-9.22-23.96-5.16-34.64 4.84-12.72 20.45-23.02 33.86-23.98 20.79-1.49 38.54 13.36 44.48 32.32 7.53 24.09-.18 49.43-14.66 69.13-24.25 32.99-74.36 33.22-108.53 19.39q-.9-.37-1.14-.35zm370.81-361.45c-63.07-9.26-117.28-50.83-156.24-99.98-32.48-40.98-63.56-87.03-81.63-136.84-11.15-30.73-19.49-93.26 20.92-109.32 23.05-9.17 44-2.81 57.52 17.93 14.84 22.78 22.05 50.39 30.46 75.95 20.35 61.95 45.78 125.6 84.68 177.66 20.15 26.96 48.48 44.39 82.41 47.08 11.45.91 21.23-.65 31.94-4.46 3.8-1.36 21.24-9.45 21.37-.54.06 4.29-5.23 8.36-7.86 11.17-22.82 24.36-52.41 25.93-83.57 21.35zm137.36-109.74q-.67-1.48-1.02-.13c-3.04 11.81-12.29 20.47-22.64 26.06-12.88 6.95-29.03 8.14-43.36 5.08-30.19-6.44-48.97-43.54-43.61-72.16 8.63-45.95 60.76-63.69 101.01-46.67 22.33 9.44 39.26 31.94 47.48 54.46 14.53 39.82 19.28 83.74-.57 122.75-9.23 18.13-21.06 35.78-35.36 50.27-27.46 27.82-60.07 43.75-97.83 53.18-56.57 14.13-113.19 16.65-171.06 10.04-49.43-5.64-96.67-26.98-136.4-57.52-22.4-17.21-42.22-35.27-59.51-58.98-12.36-16.95-22.74-38.26-31.72-58.77q-26.17-59.83-32.27-125.22c-3.5-37.59.97-69.97 24.53-100.35 9.54-12.3 20.66-24.31 33.82-32.36q16.36-10.01 31.5.08c14.66 9.76 19.4 24.24 20.72 41.04 1.97 24.94 5.62 47.25 10.75 71.88 11.17 53.53 36.64 107.52 68.3 152.56q34.39 48.94 83.69 82.24c18.15 12.26 39.08 21.59 60.1 25.74 15.73 3.11 34.41 5.52 51.59 4.52 25.99-1.5 51.79-7.39 75.57-17.81 22.34-9.79 42.53-27.46 56.78-46.79 14.37-19.49 17.92-48.24 13.22-71.64q-1.2-5.93-3.71-11.5z' /%3E%3Ccircle fill='rgb(var(--fore))' cx='309.89' cy='714.82' r='75.80'/%3E%3Cline x1='1550' y1='140' x2='3450' y2='140' style='stroke:rgb(var(--fore));stroke-width:50;stroke-linecap:round' /%3E%3Cline x1='1600' y1='200' x2='3400' y2='200' style='stroke:rgb(var(--fore));stroke-width:20;stroke-linecap:round' /%3E%3C/g%3E%3Cg transform='translate(5000,5000) scale(-1,-1)'%3E%3Cpath fill='rgb(var(--fore))' d='m821.13 160.13q-.21 1.68.79.32 6.18-8.46 12.62-16.6c18.52-23.46 43.08-36.11 72.35-39.83q33.53-4.27 67.85 3.05c33.81 7.21 64.68 17.97 93.12 36.54q35.27 23.04 70.7 45.84 13.37 8.61 22.85 13.8c29.9 16.36 62.05 24.47 96.09 24.35q40.58-.15 79.85-10.94c17.46-4.79 36.88-13.82 47.48-28.45 15.39-21.22 22.75-46.76 18.95-72.8-1.66-11.4-5.36-19.22-17.51-20.2q-1.01-.09-.45.76c6.59 9.91 3.38 26.82-2.38 35.97-8.67 13.77-22.12 21.41-38.45 20.37-22.49-1.44-46.4-9.44-53.38-33.78q-6.93-24.19 3.09-48.07c6.88-16.38 17.81-26.22 34.33-32.62 40-15.5 85.98-.52 109.36 35.67 14.4 22.29 23.67 49.77 23.14 76.55-.62 30.57-8.88 63.27-28.68 87.32-24.27 29.5-58.4 45.78-96.35 50.72q-41.04 5.35-85 1.64c-45.55-3.84-86.61-15.68-123.87-41.89q-16.21-11.41-30.67-21.67-2.56-1.81-2.17 1.3 2.85 23-6.89 42.17c-12.6 24.77-31.42 40.44-56.36 51.51-42.24 18.74-94.48 18.61-131.46-11.9-20.17-16.64-29.24-37.56-25.34-64.52 2.99-20.68 13.54-33.39 31.23-43.31 20.35-11.42 43.29-15.65 65.77-9.67 16.05 4.26 33.18 16.07 39.72 31.79 3.48 8.38 1.09 17.18-3.2 24.76a.89.88 30.6 00.31 1.19c6.98 4.3 15.89 1.08 22.75-2.08 9.35-4.3 12.87-11.56 12.92-21.73q.17-31.7-27.73-47.97c-21.7-12.66-49.42-21.16-74.76-21.79-46.76-1.17-87.57 15.51-113.99 55.34q-3.56 5.37-9.81 17.42c-15.11 29.17-28.89 56.19-58.64 74.28-25.52 15.51-54.56 25.08-84.56 28.54-42.66 4.91-83.84 3.24-119.93-21.56-22.11-15.19-42.7-37.2-54.15-61.88q-1.16-2.5-6.38-14.87c-11.54-27.35-34.94-52.51-66.44-53.73-11.42-.44-25.35 2.37-36.92 3.19-10.68.75-26.68.3-22.94-15.68 8.5-36.29 41.12-60.06 77.75-61.64 41.83-1.8 80.78 13.49 114.6 37.06q14.63 10.2 25.26 24.51 3.43 4.62 11.95 21.54 10.8 21.47 21.61 42.94c13.81 27.45 35.22 40.75 65.85 42.51 19.18 1.1 37.84-4.45 55.03-13.38 17.49-9.09 25.9-22.95 29.73-41.73 6.55-32.04-11.3-62.5-37.57-79.25-6.3-4.01-19.21-8.64-26.12-17.36-9.43-11.93-3.31-26.64 8.12-34.24 13.31-8.85 30.25-15.89 46.08-16.4 28.52-.92 55.45 18.79 61.15 47.13 2.47 12.27 1.36 28.16-.3 41.46zm-566.57-54.94c32.84 3.45 62.01 15.17 82.5 41.28 8.38 10.67 13.12 21.88 15.7 35.03 2.9 14.79 2.14 30.84-15.52 34.98-2.68.63-7.65-.97-10.3-2.56-12.69-7.61-14.67-20.35-21.34-32.25-14.95-26.67-36.72-41.34-68-40.61q-45.74 1.07-79.1 32.92c-10.03 9.58-22.62 24.53-37.25 32.2q-14.06 7.38-24.49-3.17c-9.73-9.84-7-27.88-2.14-39.49 7.2-17.2 23.78-28.77 39.83-36.81 22.84-11.46 47.24-21.22 72.76-22.8q22.08-1.38 47.35 1.28zm-16.29 832.06a.92.92 78.3 00-.79 1.21c2.98 8.74 6.62 18.45 8.35 26.63q4.56 21.55-.59 42.66c-13.47 55.18-53.26 93.84-109.75 103.18-35.74 5.92-67.42-10.08-89.13-37.81-18.17-23.19-18.97-51.62-7.46-78.02 9.63-22.09 27.77-31.15 51.16-32.9q21.79-1.62 36.13 14.37c10.86 12.11 16.87 30.47 15.46 46.44-1.53 17.28-18.12 37.31-35.47 41.41q-1.19.28-.22 1.02c10.69 8.19 27.17 6.8 39.51 3.48 24.86-6.68 35.25-24.03 40.38-47.96q8.73-40.7-3.38-82.21c-5.75-19.72-13.13-34.12-24.78-50.88-14.4-20.74-27.77-42.81-35.79-66.79-6.83-20.43-6.57-44.85-2.27-66.16q3.48-17.27 13.11-31.99 15.84-24.21 32.04-48.2.86-1.28-.59-.77-15.53 5.52-31.97 5.39c-20.49-.15-36.23-3.98-46.9-23.12-10.75-19.28-15.58-45.46-2.14-64.55 8.13-11.55 20.93-22.67 35.25-24.05 20.92-2.02 42.29 8.63 44.86 31.38 1.3 11.45-.66 22.22-9.59 29.94q-.52.45.15.58c27.07 5.38 41.37-13.09 41.58-37.97.36-42.82-30.06-80.91-55.7-112.79q-23.53-29.25-37.38-60.85c-11.5-26.24-12.91-57.24-9.81-86.74 4.81-45.74 21.09-81.26 53.86-113.63 22.27-22 48.64-41.68 80.09-45.58 20.64-2.56 43.39-2.95 60.34 8.45 11.24 7.56 7.78 18.59-2.06 24.62q-20.09 12.29-40.21 24.53-10.9 6.62-16.59 11.12c-25.84 20.41-45.62 51.35-49.72 84.6-3.85 31.26-.71 65.49 7.57 96.19 4.03 14.92 9.34 26.45 17.61 41.21 12.87 22.97 24.07 46.39 31.63 71.67 8.19 27.4 8.23 57.35 2.01 85.09-2.75 12.27-7.72 23.64-13.68 34.65q-17.53 32.39-35.02 64.8c-16.37 30.31-23.31 64.27-8.84 97.09 14.22 32.25 33.24 59.12 63.96 77.44 15.76 9.39 35.04 14.5 52.89 8.81 9.37-2.98 10.68-8.21 13.11-16.76a1.23 1.23 12.2 00-1-1.55c-6.82-1.01-14.29-3.01-19.07-8.55-7.55-8.76-9.22-23.96-5.16-34.64 4.84-12.72 20.45-23.02 33.86-23.98 20.79-1.49 38.54 13.36 44.48 32.32 7.53 24.09-.18 49.43-14.66 69.13-24.25 32.99-74.36 33.22-108.53 19.39q-.9-.37-1.14-.35zm370.81-361.45c-63.07-9.26-117.28-50.83-156.24-99.98-32.48-40.98-63.56-87.03-81.63-136.84-11.15-30.73-19.49-93.26 20.92-109.32 23.05-9.17 44-2.81 57.52 17.93 14.84 22.78 22.05 50.39 30.46 75.95 20.35 61.95 45.78 125.6 84.68 177.66 20.15 26.96 48.48 44.39 82.41 47.08 11.45.91 21.23-.65 31.94-4.46 3.8-1.36 21.24-9.45 21.37-.54.06 4.29-5.23 8.36-7.86 11.17-22.82 24.36-52.41 25.93-83.57 21.35zm137.36-109.74q-.67-1.48-1.02-.13c-3.04 11.81-12.29 20.47-22.64 26.06-12.88 6.95-29.03 8.14-43.36 5.08-30.19-6.44-48.97-43.54-43.61-72.16 8.63-45.95 60.76-63.69 101.01-46.67 22.33 9.44 39.26 31.94 47.48 54.46 14.53 39.82 19.28 83.74-.57 122.75-9.23 18.13-21.06 35.78-35.36 50.27-27.46 27.82-60.07 43.75-97.83 53.18-56.57 14.13-113.19 16.65-171.06 10.04-49.43-5.64-96.67-26.98-136.4-57.52-22.4-17.21-42.22-35.27-59.51-58.98-12.36-16.95-22.74-38.26-31.72-58.77q-26.17-59.83-32.27-125.22c-3.5-37.59.97-69.97 24.53-100.35 9.54-12.3 20.66-24.31 33.82-32.36q16.36-10.01 31.5.08c14.66 9.76 19.4 24.24 20.72 41.04 1.97 24.94 5.62 47.25 10.75 71.88 11.17 53.53 36.64 107.52 68.3 152.56q34.39 48.94 83.69 82.24c18.15 12.26 39.08 21.59 60.1 25.74 15.73 3.11 34.41 5.52 51.59 4.52 25.99-1.5 51.79-7.39 75.57-17.81 22.34-9.79 42.53-27.46 56.78-46.79 14.37-19.49 17.92-48.24 13.22-71.64q-1.2-5.93-3.71-11.5z' /%3E%3Ccircle fill='rgb(var(--fore))' cx='309.89' cy='714.82' r='75.80'/%3E%3Cline x1='140' y1='1200' x2='140' y2='3800' style='stroke:rgb(var(--fore));stroke-width:50;stroke-linecap:round' /%3E%3Cline x1='200' y1='1250' x2='200' y2='3750' style='stroke:rgb(var(--fore));stroke-width:20;stroke-linecap:round' /%3E%3C/g%3E%3C/svg%3E%0A"
const fleurtot = fleurstart + fleurmoves + fleurend
window.onload = function() {
    chcolall = document.getElementsByClassName('chcol')
    for(var i=0;i<chcolall.length;++i){
        chcolall[i].style.borderImage="url(\"" + fleurtot + "\")"
        chcolall[i].style.borderImageSlice="34% 34%"
    }
};
