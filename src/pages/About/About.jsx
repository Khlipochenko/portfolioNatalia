import  "./About.scss";
export const About=()=>{
    return(
        < div className='about'>
            <h2>About</h2>
            <p>I am a junior web developer. I love coding and technology and am excited to build my skills in web development. My training includes modern programming languages and tools that help me create easy-to-use websites. I look forward to improving my skills and taking on new challenges in the future.</p>
        
        <h3>Education</h3>
        <div className="education-card">
        <span>12/2023 - 07/2025</span>
        <p> Web Development Course, DCI (Digital Career Institute), Online</p></div>

        <div className="education-card">
        <span>09/2009 - 06/2011</span>
        <p>Master's in Business Administration (MA), University of Space Engineering, Saint Petersburg</p></div>
        <div className="education-card">
        <span>09/2005 - 06/2009</span>
        <p> Bachelor's in Business Administration (BA), Immanuel Kant University, Kaliningrad</p></div>


        </div>
    )
}