import React from 'react'
import logoimgs from ".././assets/Frame (2).png"
import ".././componets/Grand/Grand.scss"

const Gran = () => {
  return (
    <>
       <div className="main_grand">
           <div className="grand">
               <div className="grand_img">
                  <img src={logoimgs} alt="" />
                  <h1>Jane Cooper</h1>
               </div>
               <div className="grand_text">
                 <strong>About</strong>
                 <p>For athletes, high altitude produces two contradictory effects on performance. For explosive events (sprints up to 400 metres, long jump, triple jump) the reduction in atmospheric pressure means there is less resistance from the atmosphere and the athlete's performance will generally be better at high altitude.</p>
               </div>
               <div className="linkas">
                   <p>Links</p>
                     <div className="btn_link">
                           <button>Twitter</button>
                           <button>LinkedIn</button>
                           <button>Github</button>
                           <button>Website</button>
                     </div>
               </div>
           </div>
           <div className="project">
               <div className="project_title">
                   <h2 className="h2a">Projects</h2>
               </div>
           </div>
           <div className="pr_block">
               <div className="projecta">
                   <div className="pr">
                    <strong>Category</strong>
                      <h3>Grant title</h3>
                      <p>So what we learn about the properties of electrons (which we shall use for our examples) will apply also to all “particles,” including ...</p>
                   </div>
                   <div className="pr">
                    <strong>Category</strong>
                      <h3>Grant title</h3>
                      <p>So what we learn about the properties of electrons (which we shall use for our examples) will apply also to all “particles,” including ...</p>
                   </div>
               </div>
           </div>
       </div>
    </>
  )
}

export default Gran