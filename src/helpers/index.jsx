

  const validateForm = (formData, setErrors, hasOptionalField = false) => {
    let isValid = true;
    const newErrors = {};

    // Validate title
    if (!formData.title) {
      newErrors.title = "Title is required";
      isValid = false;
    }

    // Validate description
    if (!formData.description) {
      newErrors.description = "Description is required";
      isValid = false;
    }

    if (hasOptionalField && !formData.status) {
      newErrors.status = "Status is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const statusList = {
    0 : 'In Progress', 1: 'Pending', 2: 'Completed'
  };

  const filterDataByType = (data) => {
    let filteredData = {};
    data.forEach( (item) => {
      filteredData[item.status] = filteredData[item.status] || [];
      filteredData[item.status].push({ id: item.id, title: item.title, content: item.content, date: item.date });
    });

    return Object.keys(filteredData).map((key) => [key, filteredData[key]]);
  }

  

export { validateForm, statusList, filterDataByType };