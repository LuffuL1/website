import { Link } from 'react-router-dom'
import React from 'react';
import './Home.css';
import Insight from './Insight';


function Home() {
  return (
    <div className="divBack">
      <div id="header">
        Food Retail
      </div>
      <div className="textBack">
        <div className="text">
        <h1>Our Mission:</h1>
          <p>My team's mission is to ultimately find a way in which we can help contribute to the ever expanding industry of food retail. Whether that is through a breakthrough innovation, or a smaller conveinence related solution, as long as we can contribute our insights in a constructive and educational mannor, my team's goals will have been met!  
          </p>
        <h1>Significance:</h1>
          <p>The food retail industry is constantly evolving and facing new challenges, such as changing consumer preferences and increasing competition from new market entrants. Improving the industry can help retailers and manufacturers stay ahead of these challenges and adapt to changing market conditions.
          </p>
          <p>Additionally, improving the food retail industry can have a positive impact on food safety and quality. By implementing better safety and quality control measures, retailers and manufacturers can help ensure that the food products sold to consumers are safe to eat and of high quality. This can help reduce the risk of foodborne illnesses and improve consumer trust in the industry.
          </p>
          <p>Thirdly, improving the food retail industry can help promote sustainable food practices and reduce the industry's environmental impact. This can include initiatives such as reducing food waste, promoting sustainable packaging, and supporting local and organic food producers.
          </p>
          <p>Finally, improving the food retail industry can have significant economic benefits. By improving efficiency, reducing costs, and increasing productivity, retailers and manufacturers can create new job opportunities and contribute to economic growth and development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
