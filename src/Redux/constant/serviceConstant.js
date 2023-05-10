export const SERVICE_ROUTE = {
  ALL_LUNCHES: "https://api.spacexdata.com/v3/launches",
  UPCOMING_LUNCH: "https://api.spacexdata.com/v3/launches/upcoming",
  PAST_LUNCH: "https://api.spacexdata.com/v3/launches/past",
  MODAL_LUNCH: "https://api.spacexdata.com/v3/launches/:id",
  LATEST_LUNCH: "https://api.spacexdata.com/v3/launches/latest",
  NEXT_LUNCH: "https://api.spacexdata.com/v3/launches/next",
  GET_DETAIL_BY_ID: "https://api.spacexdata.com/v3/launches/:id",
};

export const METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
  PATCH: "PATCH",
};

export const replaceUrl = (url, data) => {
  var regex = new RegExp(":(" + Object.keys(data).join("|") + ")", "g");
  return url?.replace(regex, (m, $1) => data[$1] || m);
};
