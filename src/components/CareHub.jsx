export default function CareHub() {
    return (
        <div className="care-hub-section">

            <div className="care-hub-title-box">
                <h4 className="care-hub-title">Comprehensive Care Hub</h4>
            </div>

            {/* content */}
            <div className="care-hub-content-box">
                {/* column1 */}
                <div className="care-hub-content-column">
                    <div className="care-hub-image1" />
                {/* row1 title and content */}
                <div className="care-hub-content-column-content">
                    <div className="care-hub-column-title">Emotional Support</div>
                    <div className="care-hub-column-content">
                    We provide a safe and confidential space for individuals to share their experiences, receive empathetic listening, and access emotional support.
                    </div>

                </div>    
                </div>
                

                {/* column2 */}
                <div className="care-hub-content-column">
                    <div className="care-hub-image2" />
                {/* row2 title and content */}
                <div className="care-hub-content-column-content">
                    <div className="care-hub-column-title">Resources and Information</div>
                    <div className="care-hub-column-content">
                    We offer comprehensive resources, educational materials, and information about domestic violence, including safety planning, legal rights, counseling options, and community support services.                   
                    </div>
                </div>       
                </div>
                

                {/* column3 */}
                <div className="care-hub-content-column">
                    <div className="care-hub-image3" />
                {/* row3 title and content */}
                <div className="care-hub-content-column-content">
                    <div className="care-hub-column-title">Advocacy and awareness</div>
                    <div className="care-hub-column-content">
                    We advocate for domestic violence prevention and raise awareness about the issue through campaigns, events, and educational initiatives to promote a culture of respect, equality, and non-violence.                    </div>
                </div>              
                </div>
                
            </div>
            
        </div>
    )
}