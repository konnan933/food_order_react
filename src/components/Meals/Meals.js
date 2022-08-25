import { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummery from "./MealsSummary";

const Meals = (props) => {
  return (
    <Fragment>
      <MealsSummery />
      <AvailableMeals />
    </Fragment>
  );
};
export default Meals;
