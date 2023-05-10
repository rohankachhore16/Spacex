export const SERVICE_ROUTE = {
  ALL_LUNCHES: "/launches",
  UPCOMING_LUNCH: "/launches/upcoming",
  PAST_LUNCH: "/launches/past",
  MODAL_LUNCH: "/launches/:id",
  LATEST_LUNCH: "/launches/latest",
  NEXT_LUNCH: "/launches/next",
  GET_DETAIL_BY_ID: "/launches/:id",
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
