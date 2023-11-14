/**
 * Random Data Button
 * 
 * Fill the form with random data. Only for tests purposes.
 * This component is intended to be removed in production.
 */

import { faker } from "@faker-js/faker";
import { Button } from "../shadcn-ui/button";

import { departments } from "@/data/departments";
import { states } from "@/data/states";

export default function RandomDataButton({ form }: any) {
  const generateRandomData = () => {
    return {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      birthDate: faker.date.past(),
      startDate: faker.date.past(),
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      state: states[Math.floor(Math.random() * states.length)].name,
      zipCode: faker.location.zipCode("#####"),
      department: departments[Math.floor(Math.random() * departments.length)],
    };
  };

  const fillFormWithRandomData = () => {
    const randomData = generateRandomData();

    console.log(randomData.department, randomData.state);
    form.setValue("firstName", randomData.firstName);
    form.setValue("lastName", randomData.lastName);
    form.setValue("birthDate", randomData.birthDate);
    form.setValue("startDate", randomData.startDate);
    form.setValue("street", randomData.street);
    form.setValue("city", randomData.city);
    form.setValue("state", randomData.state);
    form.setValue("zipCode", randomData.zipCode);
    form.setValue("department", randomData.department);
  };

  return (
    <Button onClick={fillFormWithRandomData} className='mt-3 w-full'>
      Fill with random data (Test)
    </Button>
  );
}
