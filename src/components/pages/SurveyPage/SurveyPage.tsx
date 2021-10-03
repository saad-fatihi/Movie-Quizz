import React from "react";

import { useSurvey } from "../../../hooks/useSurvey";
import { Survey } from "../../organisms/Survey";

const SurveyPage = () => {
  const survey = useSurvey();
  if (survey.loading) return <div>Loading ...</div>;
  if (survey.error) return <div>Error ...</div>;
  return <Survey {...survey} />;
};

export default SurveyPage;
