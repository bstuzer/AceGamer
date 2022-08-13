const BASEURL = '/api';

async function getDetectComponents() {
  // call: GET /api/courses
  const response = await fetch(BASEURL + '/detectComponents');
  const componentsJson = await response.json();
  if (response.ok) {
    return componentsJson
  } else {
    throw componentsJson;  // an object with the error coming from the server
  }
}

async function getAllCpu() {
  // call: GET /api/courses
  const response = await fetch(BASEURL + '/allCpu');
  const cpuJson = await response.json();
  if (response.ok) {
    return cpuJson
  } else {
    throw cpuJson;  // an object with the error coming from the server
  }
}

async function getAllGpu() {
  // call: GET /api/courses
  const response = await fetch(BASEURL + '/allGpu');
  const gpuJson = await response.json();
  if (response.ok) {
    return gpuJson
  } else {
    throw gpuJson;  // an object with the error coming from the server
  }
}

async function getAllHdd() {
  // call: GET /api/courses
  const response = await fetch(BASEURL + '/allHdd');
  const hddJson = await response.json();
  if (response.ok) {
    return hddJson
  } else {
    throw hddJson;  // an object with the error coming from the server
  }
}

async function getAllMb() {
  // call: GET /api/courses
  const response = await fetch(BASEURL + '/allMb');
  const mbJson = await response.json();
  if (response.ok) {
    return mbJson
  } else {
    throw mbJson;  // an object with the error coming from the server
  }
}

async function getAllRam() {
  // call: GET /api/courses
  const response = await fetch(BASEURL + '/allRam');
  const ramJson = await response.json();
  if (response.ok) {
    return ramJson
  } else {
    throw ramJson;  // an object with the error coming from the server
  }
}

async function getAllGameNames() {
  // call: GET /api/courses
  const response = await fetch(BASEURL + '/allGameNames');
  const gamesJson = await response.json();
  if (response.ok) {
    return gamesJson
  } else {
    throw gamesJson;  // an object with the error coming from the server
  }
}

async function getGame(name) {
  //call: GET /api/games/:name

  const response = await fetch(BASEURL + '/games/' + name);
  const gameJson = await response.json();
  if (response.ok) {
    return gameJson
  } else {
    throw gameJson;
  }
};

async function getCpu(build) {
  //call: GET /api/cpu/:id
  const response = await fetch(BASEURL + '/cpu/' + build.cpu);
  const gameJson = await response.json();
  if (response.ok) {
    return gameJson
  } else {
    throw gameJson;
  }
};

async function getGpu(build) {
  //call: GET /api/gpu/:id
  const response = await fetch(BASEURL + '/gpu/' + build.gpu);
  const gameJson = await response.json();
  if (response.ok) {
    return gameJson
  } else {
    throw gameJson;
  }
};

async function getHdd(build) {
  //call: GET /api/hdd/:id
  const response = await fetch(BASEURL + '/hdd/' + build.hdd);
  const gameJson = await response.json();
  if (response.ok) {
    return gameJson
  } else {
    throw gameJson;
  }
};

async function getRam(build) {
  //call: GET /api/ram/:id
  const response = await fetch(BASEURL + '/ram/' + build.ram);
  const gameJson = await response.json();
  if (response.ok) {
    return gameJson
  } else {
    throw gameJson;
  }
};

async function setSummary(build) {
  const response = await fetch(BASEURL + '/summary',
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },

      method: "POST",
      body: build
    });
} 

const API = { getDetectComponents, getAllCpu, getAllGpu, getAllHdd, getAllMb, getAllRam, getAllGameNames, getGame, getCpu, getGpu, getHdd, getRam, setSummary };

export default API;