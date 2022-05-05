export const addSearch = (data) => {
    return {
      type: 'search/add',
      payload: data,
    };
  };
export const addFavourite = (dataFavor) => {
    return {
      type: 'favourite/addFavourite',
      payload: dataFavor,
    };
  };

export const removeFavourite = (removeData) => {
    return {
      type: 'favourite/removeFavourite',
      payload: removeData,
    };
  };

