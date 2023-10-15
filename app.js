console.log("Welcome to Spotify");

let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay=document.getElementById('masterPLay');
let myProgressBar=document.getElementById('myProgressBar');
let songs=[
    {songName :"Salam-e-Ishq",filePath:"song/1.mp3", coverPath:"covers/1.jpg"},
    {songName :"Salam-e-Ishq",filePath:"song/1.mp3", coverPath:"covers/1.jpg"},

    {songName :"Salam-e-Ishq",filePath:"song/1.mp3", coverPath:"covers/1.jpg"},

    {songName :"Salam-e-Ishq",filePath:"song/1.mp3", coverPath:"covers/1.jpg"},

    {songName :"Salam-e-Ishq",filePath:"song/1.mp3", coverPath:"covers/1.jpg"},

    {songName :"Salam-e-Ishq",filePath:"song/1.mp3", coverPath:"covers/1.jpg"},


]


// let audioElement =new Audio('1.mp3');

document.addEventListener('time')