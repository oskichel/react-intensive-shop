import React from "react";
import st from './About.module.css'
import aboutpic from '../Pics/about.jpg'

function About() {
    return (
        <div>
            <h1>О магазине</h1>
            <img src={aboutpic} className={st.pic} alt={'beers'}></img>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan ipsum nec erat dapibus, ut condimentum eros tincidunt. Phasellus pharetra accumsan eleifend. Nulla sed consequat orci. Pellentesque mauris velit, gravida eleifend pharetra volutpat, posuere vitae mauris. Etiam nulla justo, porta venenatis auctor in, cursus a massa. Quisque nec nulla diam. Nunc vel arcu eget ex molestie sagittis. Aliquam erat volutpat. Duis ornare, neque id fermentum viverra, ipsum mi tempor quam, ac rhoncus lectus lectus et enim. Sed eleifend, lectus vitae scelerisque accumsan, sem ex sagittis risus, non accumsan sapien purus in augue. Nullam enim ipsum, cursus eget felis a, blandit semper ipsum. Praesent vestibulum elit vel sem auctor, in dignissim ligula efficitur. Nulla pharetra luctus mattis. Nam viverra imperdiet risus sed auctor. Integer at velit rhoncus, egestas risus eu, venenatis turpis. Curabitur eu arcu aliquam, molestie nibh quis, dapibus nisl.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan ipsum nec erat dapibus, ut condimentum eros tincidunt. Phasellus pharetra accumsan eleifend. Nulla sed consequat orci. Pellentesque mauris velit, gravida eleifend pharetra volutpat, posuere vitae mauris. Etiam nulla justo, porta venenatis auctor in, cursus a massa. Quisque nec nulla diam. Nunc vel arcu eget ex molestie sagittis. Aliquam erat volutpat. Duis ornare, neque id fermentum viverra, ipsum mi tempor quam, ac rhoncus lectus lectus et enim. Sed eleifend, lectus vitae scelerisque accumsan, sem ex sagittis risus, non accumsan sapien purus in augue. Nullam enim ipsum, cursus eget felis a, blandit semper ipsum. Praesent vestibulum elit vel sem auctor, in dignissim ligula efficitur. Nulla pharetra luctus mattis. Nam viverra imperdiet risus sed auctor. Integer at velit rhoncus, egestas risus eu, venenatis turpis. Curabitur eu arcu aliquam, molestie nibh quis, dapibus nisl.
            </p>
        </div>
    )
}

export default About;