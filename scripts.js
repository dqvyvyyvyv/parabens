document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('vsl-video');
    const playOverlay = document.getElementById('play-overlay');
    const pauseOverlay = document.getElementById('pause-overlay');
    const progressBar = document.getElementById('video-progress');
    const videoContainer = document.querySelector('.video-container');

    function togglePlay() {
        if (video.paused) {
            video.play();
            playOverlay.classList.remove('active');
            playOverlay.classList.add('inactive');
            pauseOverlay.classList.add('inactive');
            pauseOverlay.classList.remove('active');
        } else {
            video.pause();
            pauseOverlay.classList.remove('inactive');
            pauseOverlay.classList.add('active');
        }
    }

    videoContainer.addEventListener('click', togglePlay);

    video.addEventListener('timeupdate', function() {
        const percentage = (video.currentTime / video.duration) * 100;
        progressBar.style.width = percentage + '%';
    });

    video.addEventListener('ended', function() {
        playOverlay.classList.remove('inactive');
        playOverlay.classList.add('active');
        progressBar.style.width = '0%';
    });
});
