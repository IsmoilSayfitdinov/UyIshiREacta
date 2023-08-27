import React from 'react'
import "./Feture.scss"

const Fetures = () => {
  return (
    <div className="Main_text">
         <div className="Text_feture">
             <h2>Projects built with grants</h2>
             <p className='Feture_P1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla risus, consectetur ut bibendum non, gravida non libero.</p>
             <p className='Feture_P2'> View all funded projects</p>
         </div>
         <div className="bloks_theer">
           <div className="bloks">
               <p className='block_p1'>Crowdfund</p>
               <h3 className='block_h3'>Funding rates page</h3>
               <p className='block_p2'>Funding amount: <span> $5,000 - $6,000</span></p>
               <p className='block_p3'>Grant will be used to build a dedicated web app to give traders a view of all dYdX asset funding rates across multiple timeframes. The page will be interactive to include deep diving across different assets and historical analysis of changing rates. It will also include API functionalities to allow developer access.</p>
           </div>
           <div className="bloks">
               <p className='block_p1'>Edition</p>
               <h3 className='block_h3'>Tradingview integration</h3>
               <p className='block_p2'>Funding amount: <span> $5,000 - $6,000</span></p>
               <p className='block_p3'>The grant will be used to build a web application that integrates Tradingview strategies into a dYdX Trading account to execute trades directly through a strategy. Users will be able to tap into Tradingview resources and test out different ...</p>
           </div>
           <div className="bloks">
               <p className='block_p1'>Entry</p>
               <h3 className='block_h3'>Rewards optimization research and paper</h3>
               <p className='block_p2'>Funding amount: <span> $5,000 - $6,000</span></p>
               <p className='block_p3'>The Grant will be used to write a full research report and code samples that will determine optimal trading strategies for rewards maximization. The paper will be marketed across several platforms and shared among trading circles to help readership.</p>
           </div>
         </div>
    </div>
  )
}

export default Fetures