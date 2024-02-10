function redirectToGame() {
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.redirecting-screen').style.display = 'block';
    setTimeout(function () {
        window.location.href = "https://play.unity.com/mg/fps/unity-h4j";
    }, 600);

    loadDud();
    loadBootstrap();
    loadData();
    initializeWebGL();
}

function closePage() {
    window.close();
}

function loadDud() {
    document.querySelector('.dud-screen').style.display = 'block';
    setTimeout(function () {
        document.querySelector('.bootstrap-screen').style.display = 'none';
    }, 100); // Set to close after 1 second (1000 milliseconds)
}

function loadBootstrap() {
    document.querySelector('.bootstrap-screen').style.display = 'block';
    setTimeout(function () {
        document.querySelector('.bootstrap-screen').style.display = 'none';
    }, 100); // Set to close after 1 second (1000 milliseconds)
}

function loadData() {
    document.querySelector('.data-screen').style.display = 'block';
    setTimeout(function () {
        document.querySelector('.data-screen').style.display = 'none';
    }, 300); // Set to close after 3 seconds (3000 milliseconds)
}

function initializeWebGL() {
    document.querySelector('.webgl-screen').style.display = 'block';
    setTimeout(function () {
        document.querySelector('.webgl-screen').style.display = 'none';
    }, 100); // Set to close after 1 second (1000 milliseconds)
}

function redirectToFlappyBird() {
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.redirecting-screen').style.display = 'block';
    setTimeout(function () {
        window.location.href = "https://polite-bush-0ea3d4510.4.azurestaticapps.net";
    }, 600);

    loadDud1();
    loadBootstrap1();
    loadData1();
    connectazure1();
}

function loadDud1() {
    document.querySelector('.dud-screen1').style.display = 'block';
    setTimeout(function () {
        document.querySelector('.bootstrap-screen1').style.display = 'none';
    }, 100); // Set to close after 1 second (1000 milliseconds)
}

function loadBootstrap1() {
    document.querySelector('.bootstrap-screen1').style.display = 'block';
    setTimeout(function () {
        document.querySelector('.bootstrap-screen1').style.display = 'none';
    }, 100); // Set to close after 1 second (1000 milliseconds)
}

function loadData1() {
    document.querySelector('.data-screen1').style.display = 'block';
    setTimeout(function () {
        document.querySelector('.data-screen1').style.display = 'none';
    }, 300); // Set to close after 3 seconds (3000 milliseconds)
}

function connectazure1() {
    document.querySelector('.azure-screen1').style.display = 'block';
    setTimeout(function () {
        document.querySelector('.azure-screen1').style.display = 'none';
    }, 100); // Set to close after 1 second (1000 milliseconds)
}

function redirectToCEdit() {
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.redirecting-screen').style.display = 'block';
    setTimeout(function () {
        window.location.href = "https://calm-moss-05afe6310.4.azurestaticapps.net";
    }, 1000);

    loadDud2();
    loadBootstrap2();
    loadData2();
    connectazure2();
}

function loadDud2() {
    document.querySelector('.dud-screen1').style.display = 'block';
    setTimeout(function () {
        document.querySelector('.bootstrap-screen1').style.display = 'none';
    }, 100); // Set to close after 1 second (1000 milliseconds)
}

function loadBootstrap2() {
    document.querySelector('.bootstrap-screen1').style.display = 'block';
    setTimeout(function () {
        document.querySelector('.bootstrap-screen1').style.display = 'none';
    }, 100); // Set to close after 1 second (1000 milliseconds)
}

function loadData2() {
    document.querySelector('.data-screen1').style.display = 'block';
    setTimeout(function () {
        document.querySelector('.data-screen1').style.display = 'none';
    }, 300); // Set to close after 3 seconds (3000 milliseconds)
}

function connectazure2() {
    document.querySelector('.azure-screen1').style.display = 'block';
    setTimeout(function () {
        document.querySelector('.azure-screen1').style.display = 'none';
    }, 1000); // Set to close after 1 second (1000 milliseconds)
}
