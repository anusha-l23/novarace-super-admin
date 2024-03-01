
import React, {useState} from 'react'
import BibHeader from "./BibHeader";

const BibGeneration = () => {
    const [showModal, setShowModal] = useState(true);

    const handleCloseModal = () => setShowModal(false);
    
    return (
        <>
            <div className='header-margin'></div>
         
<BibHeader />
<div className='container d-flex justify-content-center align-items-center vh-100'>
<div className="p-4 border rounded-3">
  <form>
    <div className="">
    <div className="mb-3 text-center">
      <label className="form-label">Enter the Bib serial number</label>
      <input type="text" className="form-control" style={{ width: '300px' }}/>
    </div>

    </div>
    <div className='text-center'>
    <button type="submit" className='btn border px-4'>Generate</button>
    </div>
  </form>
</div>
</div>

        </>
    )
}

export default BibGeneration;