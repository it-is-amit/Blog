import React, { useEffect, useState } from 'react'
import FeildOfInterest from '../../SmallComponents/FeildOfInterest'

export default function Interest(props) {

    // counting of 'number of categories selected'
    const [count, setcount] = useState(0)

    // array in which selected categories is stored
    const [categories, setcategories] = useState([])

    {/* max 20 categories will fit easily in the container */}
    const feilds = [
        {
        id: "100",
        name: "IIT-JEE"
        },

        {
        id: "101",
        name: "UPSC"
        },

        {
        id: "102",
        name: "Gate"
        },

        {
        id: "103",
        name: "NDA"
        },

        {
        id: "104",
        name: "SSC CGL"
        },

        {
        id: "105",
        name: "SBI PO"
        },

        {
        id: "106",
        name: "CDS"
        },

        {
        id: "107",
        name: "ITUS"
        },
    ]


    useEffect(()=>{
        console.log(categories);
    }, [count])

    const proceedToHomepage = () => {
        props.setswitchPages(4);
    }

    return (
        <>
        <div className="enterDetails-container">
            <div className="greeting">
                <h2>Hello! Gradian</h2>
                <p>Choose your Interests</p>
            </div>

            <div className="interest-container">
                    {feilds.map((key)=>{
                        return <FeildOfInterest
                            key={key.id}
                            name={key.name}
                            id={key.id}
                            count={count}
                            setcount={setcount}
                            setcategories={setcategories}
                            categories={categories}
                        />
                    })}
            </div>

            {
            count === 0 ? <p style={{color:'red',fontSize:'16px'}}>Choose at least one category</p> 
            : <p style={{color:'#00438B',fontSize:'16px'}}>{count} category selected</p>
            }

            <div className="skip-button-container">
                <div className="wrapper">
                    <button className="default-button" onClick={proceedToHomepage}>Proceed</button>
                </div>
            </div>
        </div>
        </>
    )
}
