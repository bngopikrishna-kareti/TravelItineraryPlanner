import React from "react";
import { useLocation } from "react-router-dom";
import dateFormat from "dateformat";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const TravelItinerary = () => {
    const {travelItinerary} = useLocation().state;
    const {touristAttractions} = useLocation().state;
    const {dates} = useLocation().state;
    let date = new Date();
    const downloadPdf = () =>{
        const capture = document.querySelector('.travelItinerary');
        capture.parentNode.style.overflow = 'visible';
        html2canvas(capture,{scrollY: 0}).then(canvas =>{
            const dataUrl = canvas.toDataURL();
            const doc = new jsPDF('p', 'mm', 'a4');
            const imgProps = doc.getImageProperties(dataUrl);
            const componentWidth = doc.internal.pageSize.getWidth();
            const componentHeight = (imgProps.height * componentWidth)/imgProps.width;      
            doc.addImage(dataUrl, 'PNG', 0, 0 , componentWidth, componentHeight);
            doc.save('travelItinerary.pdf');
        })

    }
    return (
        <div>
            <div className="travelItinerary">
            <h2>Start Date:{dateFormat(dates[0],'dd-mm-yyyy')}</h2>
            <h2>End Date:{dateFormat(dates[1],'dd-mm-yyyy')}</h2>
            {
                Object.keys(travelItinerary.current).map(key => (
                    <div className="dayWise">
                        <div className="date">
                            <h3>Day {key}</h3>
                            <h3 className="currentDate">{dateFormat(date.setDate(dates[0].getDate() + (key -1)),'dd-mm-yyyy')}</h3>
                        </div>
                        <ol>
                            {travelItinerary.current[key].map(cid => (
                                <div>
                                    {touristAttractions.tourist_attractions.map(touristAttraction => (
                                        <div>
                                            {touristAttraction.cid === cid ? <li><h4>{touristAttraction.title}</h4></li> : null}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </ol>
                    </div>
                ))
            }
            </div>
            <div className="savePdfButton">
                <button onClick={downloadPdf}>
                    Save
                </button>
                
            </div>
        </div> 
        
     );
}
 
export default TravelItinerary;