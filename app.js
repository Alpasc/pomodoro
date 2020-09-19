const affichageTravail = document.querySelector(".affichageT");
const affichagePause = document.querySelector(".affichageP");
const btnGo = document.querySelector(".b1");
const btnPause = document.querySelector(".b2");
const btnReset = document.querySelector(".b3");
const cycles = document.querySelector("h2");

let checkInterval = false;
let tempsInitial = 5;
let tempsDeRepos = 3;
let pause = false;
let nbDeCycles = 0;
cycles.innerText = `Nombre de cycles : ${nbDeCycles}`;

affichageTravail.innerText = `${Math.trunc(tempsInitial / 60)} : ${
  tempsInitial % 60 < 10 ? `0${tempsInitial % 60}` : tempsInitial % 60
}`;
affichagePause.innerText = `${Math.trunc(tempsDeRepos / 60)} : ${
  tempsDeRepos % 60 < 10 ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60
}`;

btnGo.addEventListener("click", () => {
  if (checkInterval === false) {
    checkInterval = true;

    tempsInitial--;
    affichageTravail.innerText = `${Math.trunc(tempsInitial / 60)} : ${
      tempsInitial % 60 < 10 ? `0${tempsInitial % 60}` : tempsInitial % 60
    }`;

    let timer = setInterval(() => {
      if (pause === false && tempsInitial > 0) {
        tempsInitial--;
        affichageTravail.innerText = `${Math.trunc(tempsInitial / 60)} : ${
          tempsInitial % 60 < 10 ? `0${tempsInitial % 60}` : tempsInitial % 60
        }`;
      } else if (pause === false && tempsInitial === 0 && tempsDeRepos > 0) {
        tempsDeRepos--;
        affichagePause.innerText = `${Math.trunc(tempsDeRepos / 60)} : ${
          tempsDeRepos % 60 < 10 ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60
        }`;
      } else if (pause === false && tempsDeRepos === 0 && tempsInitial === 0) {
        tempsInitial = 5;
        tempsDeRepos = 3;
        nbDeCycles++;
        cycles.innerText = `Nombre de cycles : ${nbDeCycles}`;
        affichageTravail.innerText = `${Math.trunc(tempsInitial / 60)} : ${
          tempsInitial % 60 < 10 ? `0${tempsInitial % 60}` : tempsInitial % 60
        }`;
        affichagePause.innerText = `${Math.trunc(tempsDeRepos / 60)} : ${
          tempsDeRepos % 60 < 10 ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60
        }`;
        tempsInitial--;
        affichageTravail.innerText = `${Math.trunc(tempsInitial / 60)} : ${
          tempsInitial % 60 < 10 ? `0${tempsInitial % 60}` : tempsInitial % 60
        }`;
      }
    }, 1000);

    //réinitialisation

    btnReset.addEventListener("click", () => {
      clearInterval(timer);
      checkInterval = false;
      if(pause === true){
        pause = !pause;
        btnPause.innerText = "Pause";
      }
      tempsInitial = 5;
      tempsDeRepos = 3;
      affichageTravail.innerText = `${Math.trunc(tempsInitial / 60)} : ${
        tempsInitial % 60 < 10 ? `0${tempsInitial % 60}` : tempsInitial % 60
      }`;
      affichagePause.innerText = `${Math.trunc(tempsDeRepos / 60)} : ${
        tempsDeRepos % 60 < 10 ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60
      }`;
    });

  } else {
    return;
  }

});

btnPause.addEventListener("click", () => {
  if (pause === false) {
    btnPause.innerText = "Redémarrer";
  } else {
    btnPause.innerText = "Pause";
  }
  pause = !pause;
});
