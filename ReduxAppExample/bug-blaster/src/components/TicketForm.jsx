import React, {useState} from "react";

export default function TicketForm() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("1");

    const prioritiesLabels = {
        1: "Low",
        2: "Medium",    
        3: "High"
    }

    const clearForm = () => {
        setTitle("");
        setDescription("");
        setPriority("1");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the form submission, e.g., send data to an API
        console.log("Form submitted with:", { title, description, priority });
        clearForm();
    }


return(

<form className="ticket-form" onSubmit={handleSubmit}>
    <div>
        <label>Title</label>
        <input type="text" value={title} className="form-input"
        onChange={(e) => setTitle(e.target.value)} required />
    </div>
    <div>
        <label>Description</label>
        <textarea type="text" value={description} className="form-input"
        onChange={(e) => setDescription(e.target.value)} required />
    </div>

    <fieldset className="priority-fieldset">
        <legend>Priority</legend>
        {
        
            // for radio buttons, we can use Object.entries to iterate over the prioritiesLabels object
            // and create a label and input for each priority level
            Object.entries(prioritiesLabels).map(([value, label] ) => (
                <label key={value} className="priority-label">
                <input type="radio" value={value} checked={priority === value}
                className="priority-input"
                onChange={(e) => setPriority(e.target.value)}
                ></input>
                     {label}
                </label>  
            ))
        
        }
    
    </fieldset>


        <button type="submit" className="button">Submit</button>
</form>

);

}