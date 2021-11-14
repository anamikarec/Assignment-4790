import React from "react";

const CreateCard = ()=>{
    return <div className="container">
        <div>
            <img src="https://thumbs.dreamstime.com/b/chowmein-plate-sauce-18927775.jpg" className="imgCont"/>
        </div>
        <div className="dFlex">
            <div><h1>Tortellini</h1></div>
            <div id="firstLogo"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm6gOZCj4Sl3xYt3tMExg7Lqe_WFs6yOldExmqgz7INUprOusNDMaT4Oos43YUTe4VfRQ&usqp=CAU" className="minilogo" /></div>
            <div id="secLogo"><img src="https://p.kindpng.com/picc/s/144-1440893_fire-png-red-transparent-red-flames-png-download.png" className="minilogo" /></div>
            <div id="thirdLogo"><img src="https://image.shutterstock.com/image-photo/yellow-maple-leaf-autumn-symbol-260nw-117295018.jpg" className="minilogo" /></div>
      
        </div>
        <div className="p">
            <p>Pasta stuffed with beef and pork topped with your choice of cream sauce with bacon, bolognese or marinara sauce.</p>
        </div>

    <div className="dFlex">
        <div><p>270 Cal</p></div>
        <div><p>P/F/C: 18/4/41</p></div>
        <div><p>42.4 °C</p></div>
    </div>

    <div className="dFlex">
        <div id="color1"><p>$17.90</p></div>
        <div id="color2"><p>$22.90</p></div>
        <div id="button"><p>ORDER</p></div>
    </div>
    </div>
}

export default CreateCard;