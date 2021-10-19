import React, { useState } from 'react'

export default function FeildOfInterest(props) {

    // initial style of the tags
    const [style, setstyle] = useState({
        backgroundColor: '#c4c4c4'
    })

    // state for element is selected or not??
    const [selectedOrNot, setselectedOrNot] = useState(false);

    // function for event when user clicks on the category tag
    const selectCategory = () => {
        if(selectedOrNot === false){
            // for increment categories count
            props.setcount(props.count + 1)
            // for setting, category is selected
            setselectedOrNot(true)
            // for highlighting the selected cateogory
            setstyle({
                backgroundColor: '#00438B'
            });
            // for adding this category to storing array
            addThisCategory();
        }
        else{
            props.setcount(props.count - 1)
            setselectedOrNot(false)
            setstyle({
                backgroundColor: '#c4c4c4'
            })
            deleteThisCategory();
        }
    }

    const addThisCategory = () =>{
            props.setcategories([...props.categories, {
                id: props.id,
                name: props.name
            }])
        };

    const deleteThisCategory = () =>{
        const n = props.categories.filter(a => a.id !== props.id);
        props.setcategories(n);
    }

    return (
        <div className="feildOfInt" style={style} onClick={selectCategory}>
            {props.name}
        </div>
    )
}
