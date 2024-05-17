import axios from "axios";
import React, { useState } from "react";

export default () => {
    const [tittle, setTittle] = useState('')
    const onSubmit=async (event: any)=>{
        event.preventDefault()
        await axios.post('http://posts.com/posts/create',{
            tittle
        })
        setTittle('')

    }
    return <div>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>Tittle</label>
                <input value={tittle} onChange={e => setTittle(e.target.value)} className="form-control" />
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    </div>
}