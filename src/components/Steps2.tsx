import * as React from "react";
import {
  Box,
  Button,
  Stepper as StepperUI,
  Step,
  StepButton as StepButtonUI,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";

type Steps = {
  title: string;
  completed: boolean;
};

export const StepTimeline = (): JSX.Element => {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = React.useState(0);

  const steps: Steps[] = [
    { title: t("steps.step1.title"), completed: true },
    { title: t("steps.step2.title"), completed: false },
    { title: t("steps.step3.title"), completed: false },
  ];
  const totalSteps = () => {
    return steps.length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const handleNext = () => {
    const newActiveStep = isLastStep() ? 0 : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} steps={steps} handleStep={handleStep} />
      <React.Fragment>
        <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
          {t("steps.step")} {activeStep + 1}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Button
            variant="outlined"
            color="secondary"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            {t("common.previous")}
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />
          <Button
            variant="outlined"
            color="secondary"
            disabled={activeStep === totalSteps() - 1}
            onClick={handleNext}
          >
            {t("common.next")}
          </Button>
        </Box>
      </React.Fragment>
    </Box>
  );
};
const StepButton = styled(StepButtonUI)`
  // Icon svg
  .MuiStepIcon-root {
    &.Mui-completed {
      color: #58a506;
    }
  }
`;
type StepperProps = {
  activeStep: number;
  steps: Steps[];
  handleStep: (step: number) => () => void;
};
const Stepper = ({ activeStep, steps, handleStep }: StepperProps): JSX.Element => {
  return (
    <StepperUI nonLinear activeStep={activeStep}>
      {steps.map((step, index) => (
        <Step color="secondary" key={step.title} completed={step.completed}>
          <StepButton color="secondary" onClick={handleStep(index)}>
            {step.title}
          </StepButton>
        </Step>
      ))}
    </StepperUI>
  );
};
