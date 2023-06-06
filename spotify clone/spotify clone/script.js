console.log('my spotify')
let songIndex=0;
let audioelement= new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterplay')
let progress=document.getElementById('progress')
let gif= document.getElementById('gif')
let masterSongName = document.getElementById('masterSongName');
let songitem= Array.from(document.getElementsByClassName('songitem'))
let songs=[
  { songname:" ram siya ram"  , filePath:"songs/1.mp3",coverPath:" covers/1.jpg"},
  { songname:" song 2"  , filePath:"songs/2.mp3",coverPath:" covers/2.jpg"},
  { songname:" song 3"  , filePath:"songs/3.mp3",coverPath:" covers/3.jpg"},
  { songname:" song 4"  , filePath:"songs/4.mp3",coverPath:" covers/4.jpg"},
  { songname:" song 5"  , filePath:"songs/5.mp3",coverPath:" covers/5.jpg"},
  { songname:" song 6"  , filePath:"songs/6.mp3",coverPath:" covers/6.jpg"},
  { songname:" song 7"  , filePath:"songs/7.mp3",coverPath:" covers/7.jpg"},
  { songname:" song 8"  , filePath:"songs/8.mp3",coverPath:" covers/8.jpg"},
  { songname:" song 9"  , filePath:"songs/9.mp3",coverPath:" covers/9.jpg"},
  { songname:" song 10"  , filePath:"songs/10.mp3",coverPath:" covers/10.jpg"},
]

songitem.forEach((element, i)=>{ 
  element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
  element.getElementsByClassName("songname")[0].innerText = songs[i].songname; 
})
masterplay.addEventListener('click',()=>{
    if(audioelement.paused){
        audioelement.play();
        gif.style.opacity=1
        masterplay.classList.remove('fa-play-circle')
        masterplay.classList.add('fa-pause-circle')
    } else{
      audioelement.pause()
      gif.style.opacity=0 

      masterplay.classList.remove('fa-pause-circle')
      masterplay.classList.add('fa-play-circle')
       
    }
    })
    audioelement.addEventListener('timeupdate',()=>{
      slide=(audioelement.currentTime/audioelement.duration)*100
      progress.value=slide; 
    })
    progress.addEventListener('change',()=>{
      audioelement.currentTime=progress.value*audioelement.duration/100; 
    })
    const makeAllPlays = ()=>{
      Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
          element.classList.remove('fa-pause-circle');
          element.classList.add('fa-play-circle');
      })
  }
  
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
      element.addEventListener('click', (e)=>{ 
          makeAllPlays();
          songIndex = parseInt(e.target.id);
          e.target.classList.remove('fa-play-circle');
          e.target.classList.add('fa-pause-circle');
          audioelement.src = `songs/${songIndex+1}.mp3`;
          masterSongName.innerText = songs[songIndex].songname;
          audioelement.currentTime = 0;
          audioelement.play();
          gif.style.opacity = 1;
          masterplay.classList.remove('fa-play-circle');
          masterplay.classList.add('fa-pause-circle');
      })
  })
  
  document.getElementById('next').addEventListener('click', ()=>{
      if(songIndex>=9){
          songIndex = 0
      }
      else{
          songIndex += 1;
      }
      audioelement.src = `songs/${songIndex+1}.mp3`;
      masterSongName.innerText = songs[songIndex].songname;
      audioelement.currentTime = 0;
      audioelement.play();
      masterplay.classList.remove('fa-play-circle');
      masterplay.classList.add('fa-pause-circle');
  
  })
  
  document.getElementById('previous').addEventListener('click', ()=>{
      if(songIndex<=0){
          songIndex = 0
      }
      else{
          songIndex -= 1;
      }
      audioelement.src = `songs/${songIndex+1}.mp3`;
      masterSongName.innerText = songs[songIndex].songname;
      audioelement.currentTime = 0;
      audioelement.play();
      masterplay.classList.remove('fa-play-circle');
      masterplay.classList.add('fa-pause-circle');
  })
 