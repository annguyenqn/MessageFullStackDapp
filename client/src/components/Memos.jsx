import { useState, useEffect } from "react";
import "./Memos.css"
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
const Memos = ({ state }) => {
    const [memos, setMemos] = useState([]);
    const { contract } = state;
    useEffect(() => {
        const memosMessage = async () => {
            const memos = await contract.getMemos();
            setMemos(memos)
            //console.log(memos)
        }
        contract && memosMessage()
    }, [contract])
    return (
        // <div className="container-fluid">
        //     <h3 style={{ textAlign: "center", marginTop: "20px" }}>Messages</h3>
        //     {memos.map((memo) => {
        //         return (
        //             <>
        //                 <h2>{memo.name}</h2>
        //                 <h2>{memo.message}</h2>
        //                 <h2>{memo.from}</h2>
        //             </>
        //         )
        //     })}
        // </div>
        // <>
        // <Table>
        //     <thead>
        //         <tr>
        //             <th>#</th>
        //             <th>Tên người gửi</th>
        //             <th>Địa chỉ người gửi</th>
        //             <th>Nội dung tin nhắn</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         {memos.map((memo) => {
        //             return (
        //                 <>
        //                     <tr>
        //                         <td>{memo.name}</td>
        //                     </tr>
        //                     <tr>
        //                         <td>{memo.from}</td>
        //                     </tr>
        //                     <tr>
        //                         <td>{memo.message}</td>
        //                     </tr>
        //                 </>
        //             )
        //         })}
        //     </tbody>
        // </Table>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Message</th>
                </tr>
            </thead>
            <tbody>
                {memos.map((memo) => {
                    return (
                        <>
                            <tr>
                                <td>{memo.name}</td>
                                <td>{memo.from}</td>
                                <td>{memo.message}</td>
                            </tr>
                        </>
                    )

                })}

            </tbody>
        </Table>

    );
}
export default Memos;