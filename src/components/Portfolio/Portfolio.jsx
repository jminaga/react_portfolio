import "./portfolio.scss"

export default function Portfolio() {
    return (
        <div className='portfolio' id='portfolio'>
            
            <h1>Portfolio</h1>
            {/* <ul>
                <li className='active'>Featured</li>
                <li>Featured</li>
                <li>Featured</li>
            </ul> */}
            <div className="container">
                <a href="https://jminaga.github.io/petharmony/index.html">
                <div className="item">
                    <img src="assets/petharmony.png" alt="" />
                    <h3>Pet Finder</h3>
                </div>
                </a>
                <a href="https://agarthan-adventures.herokuapp.com/">
                <div className="item">
                    <img src="assets/agarthan.png" alt="" />
                    <h3>Agarthan Adventures</h3>
                </div>
                </a>
                <div className="item">
                    <img src="assets/project3.png" alt="" />
                    <h3>Project 3</h3>
                </div>
                <div className="item">
                    <img src="assets/phaser.png" alt="" />
                    <h3>Tentative phaser.js Project</h3>
                </div>
                <div className="item">
                    <img src="assets/brawlstars.jpg" alt="" />
                    <h3>Tentative Brawl Stars API</h3>
                </div>
                <div className="item">
                    <img src="assets/nature.jpeg" alt="" />
                    <h3>TBD</h3>
                </div>
                <div className="item">
                    <img src="assets/cello.png" alt="" />
                    <h3>TBD</h3>
                </div>
                <div className="item">
                    <img src="assets/sushi.png" alt="" />
                    <h3>TBD</h3>
                </div>
                <div className="item">
                    <img src="assets/science.png" alt="" />
                    <h3>TBD</h3>
                </div>
            </div>
        </div>
    )
}
