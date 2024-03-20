import React from 'react'
import PropTypes from 'prop-types'

import Content from 'components/Content'

const Author = ({ language, fullText }) => {
  return (
    <Content>
      <div itemScope itemType="http://schema.org/Person">
        {language === 'ar' ? (
          <>
            <h1>Hi there 👋</h1>
            <p>this page is under construction</p>

            {fullText && (
              <>

              </>
            )}
          </>
        ) : (
            <>
            <h1>Hi there 👋 I&#39;m <span itemProp="name">Mohammed S. Beayou </span> </h1>
            <p>Freshly graduated with a degree in Electrical and Electronics Engineering, I&#39;m all about diving deep into the world of <span itemProp="jobTitle">backend development</span>, embedded systems, and control and automation systems. You'll often find me tinkering with .NET, Django, and an array of other tools, all geared towards solving real-world challenges and crafting impactful solutions.</p>

            <p><strong>what's keeping me busy these days:</strong></p>
            <ul>
              <li>On the lookout for exciting opportunities to put my skills to good use and lend a hand to innovative projects.</li>
              <li>Forever in learning mode, currently "exploring" the realms of machine learning and PLC automation.</li>
            </ul>
            <a href="https://mbeayou.github.io/about/">See more...</a> 


              {fullText && (
                <>
                  <p><strong>Some highlights from my journey so far:</strong></p>
                  <ul>
                    <li>Developed desktop applications using the .NET framework, including a sales system and various other tools, all powered by good old VB.NET</li>
                    <li>Designed and Deployed out web applications and CRUD systems using both of Django, HTML, CSS, JS, and PostgreSQL, alongside with .NET Core, SQL Server, and C#</li>
                    <li>Wrote a collection of some <a href="https://m-beayou.netlify.app/posts/the-knight-and-the-sword-of-time">general articles</a> that went viral (+10000 visits, somehow!) and received some positive reviews</li>
                    <li>Built and analyzed a ball and plate balancing system using Arduino, Matlab and PID controller and tried to apply other types of controllers (lead lag, MPC, LQR)</li>
                    <li>Extensive experience in control systems, networking principles, and IoT development during my studies at college and projects.</li>
                    <li>Created and designed a bunch of <a href="https://www.behance.net/medobaayou">graphics</a> for diffrent companies and individuals using tools like illustrator and adobe photoshop </li>
                  </ul>
                  <p><strong>Skills:</strong></p>
                  <ul>
                    <li>💻 Programming prowess: Python, C#, C++</li>
                    <li>🌐 Web dev: Django, .NET, Vue.js</li>
                    <li>🧠 World of Machine Learning, with a grasp on TensorFlow (basic understanding)</li>
                    <li>🛠 Hardware handling: Arduino, ESP32</li>
                    <li>🔒 Security: Pwntool, Python, GHIDRA, Wireshark (still learning!)</li>
                    <li>🗄 Database: MongoDB, SQL Server, Redis, PostgreSQL</li>
                    <li>🎨 Design: Adobe Photoshop, Adobe Illustrator, Canva</li>
                    <li>✍️ Wordsmithing: LaTeX, Docs, and various text processing programs</li>
                  </ul>
                  <p><strong>Connect with me:</strong></p>
                  <ul>
                    <li><a href="https://www.linkedin.com/in/mohammed-s-baayou/">Linkedin</a></li>
                    <li><a href="https://m-beayou.netlify.app/">General and arabic long-form Blog</a></li>
                    <li><a href="https://mbeayou.github.io/">Porfolio and technical blog</a></li>
                    <li>Email: msdbgx@gmail.com</li>
                  </ul>
                  <p><strong>Open to:</strong></p>
                  <ul>
                    <li>Job opportunities</li>
                    <li>intrenships</li>
                    <li>Collaboration on interesting projects</li>
                  </ul>
                </>
              )}
            </>
          )}

        {fullText && (
          <p><em>I&#39;m always eager to learn and collaborate, so feel free to reach out!</em></p>
        )}
      </div>
    </Content >
  )
}

Author.propTypes = {
  language: PropTypes.string,
  fullText: PropTypes.bool
}

export default Author
