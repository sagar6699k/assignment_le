import React, { useState } from 'react'

const IntroductionForm = () => {

    const [introduction, setintroduction] = useState({
        Stage_of_Business : String,
        Age_of_Establishment: String,
        Primary_Products: String,
        Offered_to: String,
        Secondary_Product: String,
        processed_products: String,
        experience: String,
        Skill_Training: String,
    })

    const handleChange = (e) => {
        
        const { name, value } = e.target
        setintroduction({
            ...introduction,
            [name] : value
        })

    }





    return (
        <>
        <h2>Introduction Form:</h2>
        <div className='container'>
            
            <form>
               
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Stage of Business</label>
                    <select name="Stage_of_Business"  value={introduction.Stage_of_Business} onChange={handleChange} class="form-control" id="exampleFormControlSelect1">
                        <option selected disabled></option>
                        <option>Start-up</option>
                        <option>Scale-up</option>
                       
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="exampleFormControlInput1">Age of Establishment</label>
                    <input type="number" name="Age_of_Establishment"  value={introduction.Age_of_Establishment} onChange={handleChange} in="1" max="100" class="form-control" id="exampleFormControlInput1" placeholder="Enter Number between 1 to 100" />
                </div>

                <div className="display_d">
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Primary Products/Services Offered</label>
                        <textarea name="Primary_Products"  value={introduction.Primary_Products} onChange={handleChange} class="form-control" id="exampleFormControlTextarea1" rows="5" cols='80'></textarea>
                    </div>
                </div>
                
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Offered to</label>
                    <select name="Offered_to"  value={introduction.Offered_to} onChange={handleChange} class="form-control" id="exampleFormControlSelect1">
                        <option selected disabled></option>
                        <option>End customers</option>
                        <option>Wholesellers</option>
                        <option>Distributers</option>
                        <option>Retailers</option>
                       
                    </select>
                </div>
                
                
                <div className="display_d">
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Secondary Products/Services Offered</label>
                        <textarea name="Secondary_Product"  value={introduction.Secondary_Product} onChange={handleChange} class="form-control" id="exampleFormControlTextarea1" rows="5" cols='80'></textarea>
                    </div>
                </div>
                <div className="display_d">
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Processed products (Products you produce from the raw materials)</label>
                        <textarea name="processed_products"  value={introduction.processed_products} onChange={handleChange} class="form-control" id="exampleFormControlTextarea1" rows="5" cols='80'></textarea>
                    </div>
                </div>

                <div class="form-group">
                    <label for="exampleFormControlInput1">Years of relevent experience in this field</label>
                    <input type="number" name="experience"  value={introduction.experience} onChange={handleChange} in="1" max="100" class="form-control" id="exampleFormControlInput1" placeholder="Enter Number " />
                </div>
               
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Skill Training</label>
                    <select name="Skill_Training"  value={introduction.Skill_Training} onChange={handleChange} class="form-control" id="exampleFormControlSelect1">
                        <option selected disabled></option>
                        <option>No Skill Training</option>
                        <option>Has formal Skill Training</option>
                        <option>Certificate</option>
                    </select>
            </div>
            </form>

            <div className="display_div">
                    <p><span>Sagar</span> is looking to <span>{introduction.Stage_of_Business }</span> their business of <span>business_idea</span>.</p>
            <p>This enterprise has been operational since <span>{introduction.Age_of_Establishment }</span> years and has been serving its customers since then.</p>
            <p>This establishment offers products/services like- <span>{introduction.Primary_Products }</span> to <span>{introduction.Offered_to }</span>.
            </p>
            <p>In addition, the enterprise shall also be involved in-<span>{introduction.Secondary_Product }</span></p>
            <p>Other products of the enterprise shall include- <span>{introduction.processed_products }</span></p>
            <p><span>Sagar</span> has relevant experience of <span>{introduction.experience }</span> years in this field. </p>
            <p>The entrepreneur <span>{introduction.Skill_Training }</span> in this field of work.</p>
            <p>The enterprise is uniquely positioned because of its - </p>
            
            </div>
        </div>
        </>
    )
}

export default IntroductionForm