import React from 'react'
import HomeBanner from './HomeBanner'
import HomeCraft from './HomeCraft'
import HomeColors from './HomeColors'
import HomeBlend from './HomeBlend'
import HomeIdentity from './HomeIdentity'
import HomeAdaptations from './HomeAdaptations'
import HomeConnect from './HomeConnect'
import HomeSubCraft from './HomeSubCraft'
import HomeSubColors from './HomeSubColors'
import HomeSubBlend from './HomeSubBlend'
import HomeSubIdentity from './HomeSubIdentity'
import HomeSubAdaptations from './HomeSubAdaptations'
import HomeFont from './HomeFont'

const Home = () => {
  return (
  <>
      <HomeBanner hideNav /> {/* pass a prop here */}
    <HomeCraft />
    <HomeSubCraft />
    <HomeColors />
    <HomeSubColors />
    <HomeBlend />
    <HomeSubBlend />
    <HomeIdentity />
    <HomeSubIdentity />
    <HomeAdaptations />
    <HomeSubAdaptations />
    <HomeFont />
    <HomeConnect />
  </>
  )
}

export default Home