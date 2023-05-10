import Axios from "axios";
import {
  METHODS,
  SERVICE_ROUTE,
  replaceUrl,
} from "../constant/serviceConstant";

//all  lanuch
export function getAllLunchService(params) {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTE.ALL_LUNCHES,
      method: METHODS.GET,
      params,
    };
    Axios.request(config)
      .then((res) => {
        return resolve(res);
      })
      .catch((err) => {
        return reject(err);
      });
  });
}
// Modal launch  Service

export function getAllModalLunchService(data) {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTE.PAST_LUNCH,
      method: METHODS.GET,
      data,
    };
    Axios.request(config)
      .then((res) => {
        return resolve(res);
      })
      .catch((err) => {
        return reject(err);
      });
  });
}
// upcomming service

export function getUpcomingLunchService(data) {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTE.UPCOMING_LUNCH,
      method: METHODS.GET,
      data,
    };
    Axios.request(config)
      .then((res) => {
        return resolve(res);
      })
      .catch((err) => {
        return reject(err);
      });
  });
}
//past lanuch

export function getPastLunchService(data) {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTE.PAST_LUNCH,
      method: METHODS.GET,
      data,
    };
    Axios.request(config)
      .then((res) => {
        return resolve(res);
      })
      .catch((err) => {
        return reject(err);
      });
  });
}
//getlaunchdetails by id

export function getLaunchedDetailByIdService(data) {
  const { id } = data;
  return new Promise((resolve, reject) => {
    let config = {
      url: replaceUrl(SERVICE_ROUTE.GET_DETAIL_BY_ID, { id }),
      method: METHODS.GET,
    };
    Axios.request(config)
      .then((res) => {
        return resolve(res);
      })
      .catch((err) => {
        return reject(err);
      });
  });
}

//getLatest Launch 
export function getLatestLaouchService(data) {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTE.LATEST_LUNCH,
      method: METHODS.GET,
      data,
    };
    Axios.request(config)
      .then((res) => {
        return resolve(res);
      })
      .catch((err) => {
        return reject(err);
      });
  });
}
//getNext Launch 

export function getNextLaouchService(data) {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTE.NEXT_LUNCH,
      method: METHODS.GET,
      data,
    };
    Axios.request(config)
      .then((res) => {
        return resolve(res);
      })
      .catch((err) => {
        return reject(err);
      });
  });
}
