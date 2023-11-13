function createRandomEmployee() {
  const firstNames = ["John", "Jane", "Alice", "Bob", "Eva", "Michael", "Sara", "David", "Emily", "Daniel"];
  const lastNames = ["Smith", "Johnson", "Doe", "Brown", "Davis", "Wilson", "Anderson", "Taylor", "Thomas", "Harris"];
  const birthDates = [
    "01/15/1980",
    "05/20/1995",
    "11/10/1988",
    "07/03/1972",
    "03/25/1990",
    "12/04/1985",
    "09/22/1992",
    "04/18/1981",
    "06/12/1998",
    "02/08/1977",
  ];
  const startDates = [
    "03/02/2010",
    "09/14/2018",
    "06/30/2015",
    "12/05/2012",
    "02/18/2017",
    "08/07/2013",
    "10/11/2019",
    "05/26/2011",
    "01/09/2014",
    "07/15/2016",
  ];
  const streets = [
    "123 Main St",
    "456 Elm St",
    "789 Oak St",
    "567 Pine St",
    "890 Maple St",
    "345 Birch Ave",
    "678 Cedar Rd",
    "901 Spruce Blvd",
    "234 Redwood Ln",
    "567 Sequoia Dr",
  ];
  const cities = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Miami",
    "Seattle",
    "San Francisco",
    "Atlanta",
    "Dallas",
    "Boston",
  ];
  const states = ["NY", "CA", "IL", "TX", "FL", "WA", "CA", "GA", "TX", "MA"];
  const zipCodes = ["10001", "90001", "60601", "77001", "33101", "98101", "94101", "30301", "75201", "02101"];
  const departments = [
    "HR",
    "IT",
    "Sales",
    "Marketing",
    "Finance",
    "Engineering",
    "Customer Service",
    "Operations",
    "Product Development",
    "Quality Assurance",
  ];

  const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const randomBirthDate = birthDates[Math.floor(Math.random() * birthDates.length)];
  const randomStartDate = startDates[Math.floor(Math.random() * startDates.length)];
  const randomStreet = streets[Math.floor(Math.random() * streets.length)];
  const randomCity = cities[Math.floor(Math.random() * cities.length)];
  const randomState = states[Math.floor(Math.random() * states.length)];
  const randomZipCode = zipCodes[Math.floor(Math.random() * zipCodes.length)];
  const randomDepartment = departments[Math.floor(Math.random() * departments.length)];

  let id = 0;

  const randomEmployee = {
    firstName: randomFirstName,
    lastName: randomLastName,
    birthDate: randomBirthDate,
    startDate: randomStartDate,
    street: randomStreet,
    city: randomCity,
    state: randomState,
    zipCode: randomZipCode,
    department: randomDepartment,
  };

  id++;

  return randomEmployee;
}

function addNewEmployee() {
  const newEmployee = createRandomEmployee();
  //setFormData([...formData, newEmployee]);
}

      // <Button className='mt-5 w-fit' onClick={addNewEmployee}>
      //   Add new employee
      // </Button>;