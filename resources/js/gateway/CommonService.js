import fetch from "./FetchIntercepter";
const CommonService = {};

CommonService.createAndUpdate = function (data, request_url) {
  // Check if data is present and has an "id" property
  if (data && (data.hasOwnProperty("id") || (data instanceof FormData && data.get("id")))) {
    // If "id" property is present, it's an update operation
    return fetch({
      url: `${request_url}/${data.id}`,
      method: "put",
      data,
    });
  } else {
    // If "id" property is absent or data is null, it's a create operation
    return fetch({
      url: `${request_url}`,
      method: "post",
      data,
    });
  }
};


CommonService.get = function (request_url, id = null, data = null) {
  if (id !== null) {
    // If an id is provided, it's a request to show one item
    return fetch({
      url: `${request_url}/${id}`,
      method: "get",
    });
  } else {
    // If no id is provided, it's a request to get all items
    return fetch({
      url: `${request_url}`,
      method: "get",
      data: data
    });
  }
};

CommonService.deleteOne = function (id, request_url) {
  return fetch({
    url: `${request_url}/${id}`,
    method: "delete",
  });
};