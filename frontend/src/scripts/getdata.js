const getData = () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Access-Control-Request-Headers", "*");
  myHeaders.append(
    "api-key",
    "QC4Z2hYLXTHhSVifFSZqatSRRA1wZ9eI8c7JTEhURj5cAhioW9OycbYVcZvQFlfv"
  );
  myHeaders.append("Accept", "application/json");

  var raw = JSON.stringify({
    dataSource: "Cluster0",
    database: "forum",
    collection: "posts",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "https://justcors.com/tl_bfb4fa6/https://data.mongodb-api.com/app/data-gcxtx/endpoint/data/v1/action/find",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {return result})
    .catch((error) => console.log("error", error));
};

export default getData;
