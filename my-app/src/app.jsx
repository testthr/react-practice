import React, { useState } from "react";
import Header from "./components/Header";
import './App.css'
import TeachingSection from "./components/TeachingSection.jsx";
import DiffrencesSections from "./components/DiffrencesSections.jsx";
import IntroSection from "./components/IntroSection.jsx";
import TabsSection from "./components/TabsSection.jsx";
import FeedbackSection from "./components/FeedbackSection.jsx";
export default function App(){

    const [tab,setTab]=useState('feedback')
    return(
        <>
            <Header/>
            <main>
                <IntroSection/>
                <TabsSection active={tab} onChange={(element)=> setTab(element)}/>
                {tab === 'main' && (
                    <>
                        <TeachingSection/>
                        <DiffrencesSections/>
                    </>
                )}
                {tab === 'feedback' && <FeedbackSection/>}
            </main>
        </>
    )
}