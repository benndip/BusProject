import React, { useState } from 'react'

import { Splash, Onboarding } from '../../screens'

const SplashToDash = () => {
    
    const [currentScreen, setCurrentScreen] = useState('Splash')
    
    setTimeout(()=>{
        setCurrentScreen('Onboarding')
    },8000)
    let showSreen = currentScreen === 'Splash' ? <Splash /> : <Onboarding />
    return showSreen
}

export default SplashToDash
