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

const PregnancyCard = ({setPregnancyStatus,pregnancyStatus}:PregnancyCardType)=>{
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
		<div role="button" onClick={()=>{
            setPregnancyStatus(PregnancyStatus.Pregnant);
            }} className={`w-48 p-6 rounded-2xl ${pregnancyStatus=== PregnancyStatus.Pregnant?"border-red-600":"border-black"}`}>
			<div className="flex items-center cursor-pointer">
				<span className="flex items-center justify-center w-6 h-6 rounded-full bg-pink-100">
					<svg className="w-4 h-4 stroke-current text-pink-600"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
				</span>
				<span className="ml-2 text-sm font-medium text-gray-500">Followers</span>
			</div>
			<span className="block text-4xl font-semibold mt-4">1,320</span>
			<div className="flex text-xs mt-3 font-medium">
				<span className="text-green-500">+8%</span>
				<span className="ml-1 text-gray-500">last 14 days</span>
			</div>
		</div>
		<div role="button" onClick={()=>{setPregnancyStatus(PregnancyStatus.Mother)}} className={`w-48 bg-white shadow-2xl p-6 rounded-2xl ${pregnancyStatus=== PregnancyStatus.Mother?"border-red-600":"border-black"}`}>
			<div className="flex items-center cursor-pointer">
				<span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-100">
					<svg className="w-4 h-4 stroke-current text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
					</svg>
				</span>
				<span className="ml-2 text-sm font-medium text-gray-500">Likes</span>
			</div>
			<span className="block text-4xl font-semibold mt-4">3,814</span>
			<div className="flex text-xs mt-3 font-medium">
				<span className="text-green-500">+12%</span>
				<span className="ml-1 text-gray-500">last 14 days</span>
			</div>
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
        <Modal open={true}>
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