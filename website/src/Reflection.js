import { Link } from 'react-router-dom'
import React from 'react';
import './Home.css';
import reflectionIMG from './reflection.png'


function Reflection() {
  return (
    <div className="divBG">
      <div id="header">
        Reflection
      </div>
      <div className="textBG">

        <div className="text">
<p>Something I learned from this project is always to keep an open mind and never assume things when listening to interviewees. There was a time in my team's project when I entered an interview where I was already assuming many aspects of the business being interviewed. For example, when my team interviewed Tropical Smoothie Cafe, a generally large business in the heart of urban Bethesda, I had already assumed things such as the manager must be really experienced, there must be a lot of competition, and they must focus very little on community. First, when trying to set up the interview, I approached a young worker and asked if I could interview her manager, to which she replied that she was the manager. I had assumed that no young person taking orders at the front would be running a shop like this one. After she responded, I was a bit embarrassed and the general mood of the situation became quite awkward, yet it was during our conversation that I learned all of my assumptions were wrong. Not only did I learn that she had only been working there for a few months, but they also had no competition and were largely focused on community. I was astonished and tried asking questions that at first seemed rather obvious, but had different answers than I expected. Being in the heart of Bethesda didn’t provide them with more competitors, but rather more collaborators. She explained that all the shops nearby tended to share ingredients, utilities, and even advice on how she could manage the shop better. After this, she started explaining to me that, while it is true many of their customers are businessmen who come in for something to drink in the morning and leave, they focused a lot on the community based on who they hired. Over time, this smoothie shop became a destination for many young Latina women working together. Overall, these facts all disproved many preconceived notions that I had developed before our interview, and what had brought me to ask these questions was the original surprise of asking for her manager. After I left that interview, I couldn’t stop asking myself what else I had falsely assumed, which prevented me from asking further questions. 
</p>
<p>For a designer, this means always keeping an open mind and always being ready to take in new information. To understand the full picture, sometimes it means erasing parts of it that you have filled in yourself. This is why I made the picture above. It is of a painter who sees a horse with a saddle and assumes that there should be a rider on top, yet the true image is one without a rider. When coming into an interview, this is especially important, as it could be your only chance to uncover the whole story. For future students, this means always being willing to ask questions and accept different perspectives. To produce a complete product, you must first have a complete understanding of what you are making. That is why a preconceived judgment can be very dangerous in an interview situation. New designers should always take into account the possibility of being wrong. 
</p>
<p>Knowing what I know now, I wish that I could have gone back to my interviews and asked more questions that I had first thought had an obvious answer. As for other topics, the general philosophy of wanting to produce as large of an understanding as possible is transferable, yet in some cases, it is important to assume things. That is why this process cannot be extended to all topics. But in all cases in which assumptions could prevent you from the truth, it is important that we recognize it, and work to combat it.</p>
<img src={reflectionIMG}></img>

        </div>
      </div>
    </div>
  );
}

export default Reflection;
