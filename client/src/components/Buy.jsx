import { ethers } from "ethers"
import "./Buy.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
const Buy = ({ state }) => {


    const buyChai = async (event) => {
        event.preventDefault();
        const { contract } = state;
        const name = document.querySelector("#name").value;
        const message = document.querySelector("#message").value;
        //const amount = document.querySelector("#amount").value;
        const amount = { value: ethers.utils.parseEther("0.001") }
        const transaction = await contract.buyChai(name, message, amount)
        await transaction.wait();
        alert("Transaction is successul");
        window.location.reload();
    }
    return (

        // <div className="center">
        //     <h1>Thanks</h1>
        //     <form onSubmit={buyChai}>

        //         <div className="">
        //             <input type="text" required="required" id="name" />
        //             <span>Name</span>
        //         </div>
        //         <div className="">
        //             <input type="text" required="required" id="message" />
        //             <span>Message</span>
        //         </div>
        //         <div className="">
        //             <input type="submit" value="Pay" disabled={!state.contract} />
        //         </div>
        //     </form>
        // </div>
        <>
            <form onSubmit={buyChai}>
                <Form.Group className="mb-3" controlId="nameForm.ControlInput1" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control id="name" />
                    <Form.Label>Job</Form.Label>
                    <Form.Control id="message" />
                    <input type="submit" value="Add Job" disabled={!state.contract}></input>
                </Form.Group>
            </form>
        </>
    );
}
export default Buy;