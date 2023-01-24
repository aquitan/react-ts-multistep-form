import { ReactComponentElement, ReactElement, useState } from "react";

export const useMultistepForm = (steps: ReactElement[]) => {
    const [currentStepIndex, setCurrentStepIndex] = useState<number>(0)

    const next = () => {
        setCurrentStepIndex(prev => {
            if (prev >= steps.length - 1) return prev

            return prev + 1
        })
    }

    const back = () => {
        setCurrentStepIndex(prev => {
            if (prev <= 0) return prev

            return prev - 1
        })
    }

    const goTo = (index: number) => {
        setCurrentStepIndex(index)
    }

    return {
        currentStepIndex, 
        step: steps[currentStepIndex], 
        steps,
        isFirstStep: currentStepIndex === 0,
        isLastStep: currentStepIndex === steps.length - 1,
        goTo, 
        next, 
        back}
}