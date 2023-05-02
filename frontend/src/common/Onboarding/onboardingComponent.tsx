import React from 'react'

<<<<<<< HEAD
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
=======
const onboardingComponent = () => {
    return (
        <div className="flex justify-center items-center h-screen mt-64 mb-60 sm:mb-0  sm:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                <div className="max-w-sm sm:bg-gray-400 cursor-pointer sm:filter sm:grayscale hover:filter-none  border-gray-200 rounded-lg shadow transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 hover:bg-inherit duration-300">
                    <a href="1">
                        <img className="rounded-t-lg " src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div className="p-5">
                        <a href="1">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Noteworthy technology acquisitions 2021</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="1" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  ">
                            Read more
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
                <div className="max-w-sm  cursor-pointer sm:bg-gray-400 sm:filter sm:grayscale hover:filter-none  border-gray-200 rounded-lg shadow transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 hover:bg-inherit duration-300">
                    <a href="1" className="group relative block">
                        <img
                            alt="Developer"
                            src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                            className="absolute inset-0 h-full w-full object-cover rounded"
                        />

                        <div className="relative p-4 sm:p-6 lg:p-8">
                            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                                Developer
                            </p>

                            <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

                            <div className="mt-32 sm:mt-48 lg:mt-64">
                                <div
                                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                >
                                    <p className="text-sm text-white">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                                        perferendis hic asperiores quibusdam quidem voluptates doloremque
                                        reiciendis nostrum harum. Repudiandae?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>

                </div>
            </div>
            
        </div>

    )
}

export default onboardingComponent
>>>>>>> 4207fbf744fcc3a9708ec859f1b96a92843c69e7
