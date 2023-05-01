import { Modal } from "@material-ui/core";
//@ts-ignore: Am facing this annoying ts issue with react-swipable-view.
import SwipeableViews from 'react-swipeable-views';

import { Paper, Grid, Typography, withStyles, Button } from "@material-ui/core";
import { useState } from "react";

export type PregnancyCardType = {
    setPregnancyStatus:(pregnancyStatus:string)=>void;
    pregnancyStatus: string;
}

enum PregnancyStatus {
    Pregnant="Pregnant",
    Mother="Mother"
}

const ImageCard = () => {
    return (
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
    <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" 
    style={{backgroundImage:"https://as1.ftcdn.net/v2/jpg/03/55/12/10/1000_F_355121089_YGnAXWWQgqVOK67otY6mA9Zjrkfstc9H.jpg"}}></div>

    <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
        <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Nike Revolt</h3>

        <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
            <span className="font-bold text-gray-800 dark:text-gray-200">$129</span>
            <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Add to cart</button>
        </div>
    </div>
</div>
    )
}



const PregnancyCard = ({setPregnancyStatus,pregnancyStatus}:PregnancyCardType)=>{
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
		<div role="button" onClick={()=>{
            setPregnancyStatus(PregnancyStatus.Pregnant);
            }} 
            className={`w-1/2 p-3 mx-4 sm:mx-20 my-4 sm:my-8 rounded-2xl border-2 m ${pregnancyStatus === PregnancyStatus.Pregnant?"border-red-600":"border-white"}`}>
                <ImageCard/>

		</div>
		<div role="button" onClick={()=>{setPregnancyStatus(PregnancyStatus.Mother)}} 
        className={`w-1/2 p-3 mx-4 sm:mx-20 my-4 sm:my-8 rounded-2xl border-2 ${pregnancyStatus=== PregnancyStatus.Mother?"border-red-600":"border-white"}`}>
                <ImageCard/>
		</div>
	</div>
    )
}

const PregnantInfoForm= ()=>{}
const MotherInfoForm=()=>{}

export const OnboardingComponent = () => {
    const [activeStep,setActiveStep] = useState(0);
    const handleChange = (index:number) => () => {
        setActiveStep(index);
      };

    const handlePrev = ()=>{
        if (activeStep>0)
        setActiveStep(activeStep-1);
    }

    const handleNext = ()=>{
        if (activeStep < steps.length -1)
        setActiveStep(activeStep+1);
    }

    const handleSubmit = () =>{
        alert("Submission Called");
    }

    const steps= ["PregnancyStatus","PregnancyDetails"];
    const [pregnancyStatus,setPregnancyStatus] = useState("Pregnant");

    return (
        <Modal open={true} className={"sm:w-2/3"}>
            <>
            <Paper>
                <form>
                <SwipeableViews index={activeStep} onChangeIndex={handleChange}>
                    <PregnancyCard setPregnancyStatus={setPregnancyStatus} pregnancyStatus={pregnancyStatus}></PregnancyCard>
                </SwipeableViews>
                </form>
            </Paper>
            <Grid container direction="row"> 
            <Grid item alignItems="flex-start" justifyContent="flex-start">
            <Button
              disabled={activeStep === 0}
              onClick={handlePrev}
              variant="contained"
              color="default"
            >
              Back
            </Button>
            </Grid>
            <Grid item alignItems="flex-end">
            <Button
              onClick={(activeStep=== steps.length-1)?handleSubmit:handleNext}
              variant="contained"
              color="default"
            >
              {(activeStep=== steps.length-1)?"Submit":"Next"}
            </Button>
            </Grid>
            </Grid>
            </>
        </Modal>
    )
}