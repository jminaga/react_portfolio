import "./resume.scss"

export default function Resume() {
    return (
        <div className='resume' id='resume'>
            <div className = 'slider'>
                <div className = 'container'>
                    <div className = 'item'>
                        <div className = 'left'>
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src="assets/kbi.png" alt="" />
                        
                                </div>
                                <h2>Title</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ullam possimus ratione voluptates repudiandae ipsum eius provident soluta? Incidunt corporis, id molestiae nihil quae aliquid aspernatur hic nulla omnis alias.</p>
                                    <span>Hello</span>
                            </div>
                        </div>
                        <div className = 'right'></div>
                    </div>
                </div>
            </div>
            <img src="assets/leftarrow.png" alt="left arrow" className='arrow left' />
            <img src="assets/rightarrow.png" alt="right arrow" className='arrow right'/>
        </div>
    )
}
