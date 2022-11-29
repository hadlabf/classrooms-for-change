import * as React from "react";
import { Box, Button, Stepper as StepperUI, Step, StepLabel, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const StepTimeline = (): JSX.Element => {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = React.useState(0);

  const steps: Steps[] = [
    { title: t("steps.step1.title"), completed: true },
    { title: t("steps.step2.title"), completed: false },
    { title: t("steps.step3.title"), completed: false },
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} steps={steps} setActiveStep={setActiveStep} />
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
              {t("common.previous")}
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button disabled={activeStep === steps.length - 1} onClick={handleNext}>
              {t("common.next")}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};
type Steps = {
  title: string;
  completed: boolean;
};
type StepperProps = {
  activeStep: number;
  steps: Steps[];
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
};
const Stepper = ({ activeStep, steps, setActiveStep }: StepperProps): JSX.Element => {
  return (
    <StepperUI activeStep={activeStep}>
      {steps.map((step, index) => {
        const stepProps: { completed?: boolean } = {};
        const labelProps: {
          optional?: React.ReactNode;
        } = {};

        return (
          <Step key={step.title} {...stepProps}>
            <StepLabel onClick={() => setActiveStep(index)} {...labelProps}>
              {step.title}
            </StepLabel>
          </Step>
        );
      })}
    </StepperUI>
  );
};
