import "../assets/scss/aboutSection.scss"

export default function AboutSection() {
    return (
        <div className="aboutSection">
            <div className="aboutSection_grid">
                <div className="aboutSection_left">
                    <p>Hello! I&apos;m Ashfatul Islam, a Frontend Developer from Bangladesh, specializing in HTML, CSS, JavaScript, and React. Currently, I work at Spondon IT, where I help build innovative and user-friendly web interfaces.</p>

                    <p>
                        I am also pursuing a Bachelor of Science in Computer Science and Engineering at Bangladesh University. This academic background enhances my practical skills and keeps me updated with the latest in tech.
                    </p>

                    <p>
                        Passionate about continuous learning and innovation, I am always eager to tackle new challenges in frontend development. Explore my portfolio to see my work and let&apos;s connect!
                    </p>

                    <a href="#" className="aboutSection_btn">Download Resume</a>
                </div>

                <div className="aboutSection_right">
                    <img src="/public/img/grephics/about.svg" alt="about graphics" />
                </div>
            </div>
        </div>
    )
}
