// import React, { useState } from 'react'

// export const AddProduct = () => {
//      const [name, setName] = useState("")
//      const [type, setType] = useState("layers POL")
//      const [quantity, setQuantity] = useState("")
//      const [price, setPrice] = useState("")
//      const [age, setAge] = useState("")
//      const [weight, setWeight] = useState("")
//      const [source, setSource] = useState("")
//      const [info, setInfo] = useState("")
//      const [image, setImage] = useState(null)

// const submitForm = (e) => {
//     e.preventDefault()
//     const data = {name, info, type,quantity,price,age,weight,source}
//     // let form_data = new FormData()
//     // form_data.append("name", name)
//     // form_data.append("type", type)
//     // form_data.append("quantity", quantity)
//     // form_data.append("price", price)
//     // form_data.append("age", age)
//     // form_data.append("weight", weight)
//     // form_data.append("source", source)
//     // form_data.append("info", info)
//     // if (image){
//     //     form_data.append("image", image)
//     // }
//     // form_data.append("source", source)

//     // fetch('http://localhost:8001/bird', {
//     //         method: 'POST',
//     //         headers: {"Content-Type": "multipart/form-data; ; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW"},
//     //         body: data
//     //     })
//     //     .then((res) => {
//     //         return res.json()
//     //     })
//     //     .then((data) => {
//     //         console.log(data)
//     //     })
//     // console.log(data)


//     // var myHeaders = new Headers();
// // myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc4NjUyNDQ0LCJpYXQiOjE2Nzg2NDg4NDQsImp0aSI6Ijc5ZjhiM2MxNjg2ODQ2MmY5Mjk5NGU0YmYxZjQ0MTVjIiwidXNlcl9pZCI6MX0.i_QAEZsvrC5G194K5iilRjPLaAphikYs8_YHywnXQ2U");

// var formdata = new FormData();
// // formdata.append("image", fileInput.files[0], "/C:/Users/USER/Pictures/1_wCpwHS7BWBe6JnHfIMSWrQ.png");
// formdata.append("name", name);
// formdata.append("type", type);
// formdata.append("quantity", quantity);
// formdata.append("price", "2");
// formdata.append("age", "4 weeks");
// formdata.append("weight", "23g");
// formdata.append("source", "sa");
// formdata.append("info", "somwthng");
// if (image){
//     formdata.append("image", image);
// }

// var requestOptions = {
//   method: 'POST',
// //   headers: myHeaders,
//   body: formdata,
//   redirect: 'follow'
// };

// fetch("http://127.0.0.1:8000/bird", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));



// }
//   return (
//     <div>
//         add bird
//         <form onSubmit={submitForm} encType='multipart/form-data'>
//             <input
//             type="text"
//             placeholder='name'
//             required
//             value={name}
//             onChange = {(e) => {
//                 setName(e.target.value)
//             }}
//             ></input> <br/><br/>
//             <select
//             value={type}
//             required
//             onChange = {(e) => setType(e.target.value)}
//             >
//                 <option value="layers POL">layers POL</option>
//                 <option value="layers Table size">layers Table size</option>
//                 <option value="Broiler Table Size">Broiler Table Size</option>
//             </select><br/><br/>
//             <input
//             type="number"
//             placeholder='quantity'
//             required
//             value={quantity}
//             onChange = {(e) => {
//                 setQuantity(e.target.value)
//             }}
//             ></input> <br/><br/>
//             <input
//             type="number"
//             placeholder='price'
//             required
//             value={price}
//             onChange = {(e) => {
//                 setPrice(e.target.value)
//             }}
//             ></input> <br/><br/>
//             <input
//             type="text"
//             placeholder='age'
//             required
//             value={age}
//             onChange = {(e) => {
//                 setAge(e.target.value)
//             }}
//             ></input> <br/><br/>
//             <input
//             type="text"
//             placeholder='weight'
//             required
//             value={weight}
//             onChange = {(e) => {
//                 setWeight(e.target.value)
//             }}
//             ></input> <br/><br/>
//             <input
//             type="text"
//             placeholder='source'
//             required
//             value={source}
//             onChange = {(e) => {
//                 setSource(e.target.value)
//             }}
//             ></input> <br/><br/>
//             <input
//             type="text"
//             placeholder='info'
//             required
//             value={info}
//             onChange = {(e) => {
//                 setInfo(e.target.value)
//             }}
//             ></input> <br/><br/>
//             <input
//             name="image"
//             type="file"
//             onChange = {(e) => {
//                 setImage(e.target.files[0])
//             }}
//             >
//             </input>
//             <button>Post</button>
//         </form>

//     </div>
//   )
// }
