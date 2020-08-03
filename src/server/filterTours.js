
export const filterTours = (req, tours) => {
  if (req.queryParams.Price) {
    const [min, max] = req.queryParams.Price.split('-');
    const filteredTours = tours.filter((tour) => {
      const price = +tour.price.original.substring(2);
      if (max) {
        return price >= +min && price <= +max;
      }
      return price >= +min;
    });

    return filteredTours;
  }

  return tours;
};
