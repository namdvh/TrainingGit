// alert('Hi Js basic!')
// var fullName;
// fullName='hoài nam',age=20,
// workat= 'KMS software';
// var newname=fullName;
// alert(fullName);
// alert(newname);
// console.log('quynh trang yeu hoai nam rat nhieu');
// //console.log in ra man hinh console
// var hn='quynh trang yeu hoai nam rat nhieu';
// console.error(hn);
// confirm('quynh trang yeu hoai nam');
// prompt(hn);
// // setInterval(function() {
// //     alert('quynh trang yeu hoai nam rat nhieu')
// // },1000);

var myString ='Hoc JS tai F8 JS    ';
console.log(myString.length);
//Find index
console.log(myString.lastIndexOf('JS',6));
console.log(myString.search('JS')) //tim kiem theo bieu thuc chinh quy 
//2.cut string
// console.log(myString.slice(4,7))
console.log(myString.slice(4))
// console.log(myString.slice(-6,-1))
//3.Replace
console.log(myString.replace(/JS/g,'Hoai Nam'))
// /JS/g biểu thức chính quy
console.log(myString.toUpperCase());
var languages='Javascript, PHP, Ruby';
console.log(languages.split(', '));
//get character by index
const myStr2='Hoai nam';
console.log(myStr2.charAt(0))
console.log(typeof myStr2[0])
myStr2.toUpperCase