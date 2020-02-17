const advancedResults = (model, populate) => async (req, res, next) => {
  let query;

  // Copy req.query
  let reqQuery = { ...req.query };

  //Set eventDate time for comparison, if it is in the filter
  if ("eventTime" in reqQuery) {
    for (let key in reqQuery.eventTime)
      reqQuery.eventTime[key] = (function() {
        let date = new Date();
        return date
          .setDate(
            date.getDate() + parseInt(Object.values(reqQuery.eventTime)[0])
          )
          .toString();
      })();
  }
  // Fields to exclude
  const removeFields = ["select", "sort", "page", "limit"];

  // Loop over removeFields and delete them from the query
  removeFields.forEach(param => delete reqQuery[param]);
  console.log(reqQuery);

  let queryStr = JSON.stringify(reqQuery);
  queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);
  query = model.find(JSON.parse(queryStr));

  //Select Fields
  if (req.query.select) {
    const fields = req.query.select.split(",").join(" ");
    query = query.select(fields);
  }
  //Sort
  if (req.query.sort) {
    const sortBy = req.query.sort.split(",").join(" ");
    query = query.sort(sortBy);
  } else {
    query = query.sort("eventTime");
  }

  //Pagination
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 25;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await model.countDocuments();
  query = query.skip(startIndex).limit(limit);

  if (populate) {
    query = query.populate(populate);
  }

  //Execute query
  const results = await query;

  //Pagination result
  const pagination = {};
  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit
    };
  }

  if (startIndex > 0) {
    pagination.prev = {
      page: page - 1,
      limit
    };
  }
  res.advancedResults = {
    success: true,
    count: results.length,
    pagination,
    data: results
  };

  next();
};

module.exports = advancedResults;
