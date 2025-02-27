let player;
let videoId;
let startTime;
let endTime;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
event.target.playVideo();
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        player.seekTo(startTime);
        player.playVideo();
    }
}

const decision = document.getElementById("decision");
decision.onclick = function() {
    const origin = document.getElementById("text").value;
    if(origin.indexOf("youtu.be") !== -1) {
        const text = origin.split("youtu.be/")[1];
        videoId = text.split("?")[0];
    }else {
        const text = origin.split("v=")[1];
        videoId = text.split("&")[0];
    }
    startTime = document.getElementById("start").value;
    endTime = document.getElementById("end").value;

    player.cueVideoById({
        videoId: videoId,
        startSeconds: startTime ,
        endSeconds: endTime,
    })
};

const add = document.getElementById("add");
add.onclick = function(event) {
  // 複製したい要素を取得する
  const element = document.getElementsByClassName('set')[0];

  // イベントがキャンセル可能かどうかを確認する
  if (event.cancelable) {
    // 複製された要素を別の場所に挿入する
    const clone = element.cloneNode(true);
    const parent = document.getElementById('app');
    parent.appendChild(clone);
  } else {
    // イベントがキャンセルできない場合は処理しない
  }
};