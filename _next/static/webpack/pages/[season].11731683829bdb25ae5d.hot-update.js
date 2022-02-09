self["webpackHotUpdate_N_E"]("pages/[season]",{

/***/ "./components/home/StreamCanvas.ts":
/*!*****************************************!*\
  !*** ./components/home/StreamCanvas.ts ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ StreamCanvas; }
/* harmony export */ });
/* harmony import */ var C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _MaskDraw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MaskDraw */ "./components/home/MaskDraw.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./store/index.ts");
/* harmony import */ var _store_colorStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/colorStore */ "./store/colorStore.ts");
/* harmony import */ var _tensorflow_tfjs_backend_webgl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tensorflow/tfjs-backend-webgl */ "./node_modules/@tensorflow/tfjs-backend-webgl/dist/index.js");
/* harmony import */ var _tensorflow_models_face_landmarks_detection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tensorflow-models/face-landmarks-detection */ "./node_modules/@tensorflow-models/face-landmarks-detection/dist/face-landmarks-detection.esm.js");
/* harmony import */ var _getDeviceType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getDeviceType */ "./components/home/getDeviceType.ts");
/* harmony import */ var _drawFaceLine__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./drawFaceLine */ "./components/home/drawFaceLine.ts");
/* harmony import */ var _drawFaceBG__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./drawFaceBG */ "./components/home/drawFaceBG.ts");
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


// import { throttling } from '../../utils/throttling';
// // import * as faceapi from '../../utils/face-api'
// import FaceBoard from './FaceBoard';
// import getColorData from './getColorData';
// import axios from 'axios';
// import colorAvg from './colorAvg';
// import store from '../../store';
// // const throttler = throttling()
// // export default async function StreamCanvas(faceBoard) {
// //     let canvas;
// //     let video = document.getElementById('video')
// //     if (!video||(video.previousSibling&&video.previousSibling.nodeName=="CANVAS")) return
// //     let loading = document.getElementById("loading")
// //     let progressBar = document.getElementById("progressBar")
// //     let percent = document.getElementById("progressPercent")
// //     let progressContainer = document.getElementById("progressContainer")
// //     let testExplain = document.getElementById("testExplain")
// //     document.getElementById("headerWrapper").style.display = "none"
// //     document.getElementById("testWrapper").style.display = "block"
// //     video.style.display = "block"
// //     loading.style.display = 'block'
// //     video.play()
// //     let interval;
// //     try {
// //         canvas = faceapi.createCanvasFromMedia(video)
// //     } catch (error) {
// //         setTimeout(() => {
// //             StreamCanvas(faceBoard)
// //         }, 500);
// //         return
// //     }
// //     // document.getElementById('loading').style.display = 'block'
// //     canvas.style.position = "absolute"
// //     canvas.style.zIndex = "998"
// //     canvas.style.transform = "scale(-1,1)"
// //     canvas.className = "faceCanvas"
// //     video.parentNode.insertBefore(canvas, video)
// //     let ctx = canvas.getContext('2d');
// //     let camCanvas = document.createElement("canvas")
// //     camCanvas.className = "faceCanvas"
// //     camCanvas.width = video.clientWidth
// //     camCanvas.height = video.clientHeight
// //     camCanvas.style.zIndex = "998"
// //     camCanvas.style.transform = "scale(-1,1)"
// //     // document.getElementById("mainCam").appendChild(camCanvas)
// //     let context = camCanvas.getContext('2d');
// //     const displaySize = { width: video.clientWidth, height: video.clientHeight }
// //     faceapi.matchDimensions(canvas, displaySize)
// //     let cnt = 0;
// //     let colorSum = {}
// //     let eyeColor = []
// //     let cheekColor = []
// //     let jawColor = []
// //     let ani;
// //     ani = requestAnimationFrame(test)
// //     let leftMask = new Image()
// //     leftMask.src = `${process.env.PATH}/images/leftMask.png`
// //     let rightMask = new Image()
// //     rightMask.src = `${process.env.PATH}/images/rightMask.png`
// //     async function test() {
// //         const detections = await faceapi.detectSingleFace(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks(true) //video 캡쳐본 얼굴인식 정보  사이즈를 맞추기 전이기때문에 좌표값이 다르다
// //         let resizedDetections
// //         loading.style.display = 'none'
// //         if (detections) {
// //             cnt++
// //             // if (cnt == 31 && !faceBoard) {
// //             //     clearInterval(interval)
// //             //     canvas.remove()
// //             //     colorSum.eye = eyeColor.reduce((a, b) => {
// //             //         return [a[0] + b[0], a[1] + b[1], a[2] + b[2]]
// //             //     })
// //             //     colorSum.cheek = cheekColor.reduce((a, b) => {
// //             //         return [a[0] + b[0], a[1] + b[1], a[2] + b[2]]
// //             //     })
// //             //     colorSum.jaw = jawColor.reduce((a, b) => {
// //             //         return [a[0] + b[0], a[1] + b[1], a[2] + b[2]]
// //             //     })
// //             //     for (let key in colorSum) {
// //             //         colorSum[key] = colorSum[key].map(i => i / 30)
// //             //     }
// //             //     throttler.throttle(() => {
// //             //         axios.post('https://tensor-server.herokuapp.com/getSeason', colorSum)
// //             //         .then(res => {
// //             //             document.getElementById(res.data).click()
// //             //             const stream = video.srcObject; //비디오 스트림
// //             //             const tracks = stream.getTracks(); //트랙
// //             //             tracks[0].stop() //스트림 중단
// //             //             })
// //             //             .catch(err => {
// //             //                 console.log(err)
// //             //             })
// //             //     }, 500)
// //             //     return
// //             // }
// //             // if (cnt > 31 && !faceBoard) return
// //             resizedDetections = await faceapi.resizeResults(detections, displaySize) //detections를 displaysize에 맞춘 결과값
// //             // await faceapi.draw.drawDetections(canvas, resizedDetections) //얼굴인식 사각형 박스 드로잉
// //             // const landmark = await faceapi.detectFaceLandmarksTiny(canvas) //페이스랜드마크 좌표
// //             const positions = await resizedDetections.landmarks.positions
// //             if (!faceBoard) {
// //                 testExplain.innerHTML = `피부색을 추출 중 입니다.<br> <span style="color : yellow;">Tip : 최대한 빛의 영향을 받지 않는 곳에서 측정해보세요!</span>`
// //                 await ctx.clearRect(0, 0, canvas.width, canvas.height) //캔버스 초기화
// //                 // await faceapi.draw.drawFaceLandmarks(canvas, resizedDetections) //얼굴인식 랜드마크 드로잉
// //                 const leftNose = positions[31]
// //                 const leftChin = positions[2]
// //                 const leftCheek = { x: (leftNose.x + leftChin.x) / 2, y: (leftNose.y + leftChin.y) / 2 }
// //                 const rightNose = positions[35]
// //                 const rightChin = positions[14]
// //                 const rightCheek = { x: (rightNose.x + rightChin.x) / 2, y: (rightNose.y + rightChin.y) / 2 }
// //                 const eyeLength = (positions[41].y - positions[37].y)
// //                 const eyeMiddleX = (positions[40].x + positions[41].x) / 2
// //                 const leftUnderEye = { x: eyeMiddleX, y: positions[41].y + eyeLength }
// //                 const rightEyeMiddleX = (positions[46].x + positions[47].x) / 2
// //                 const rightUnderEye = { x: rightEyeMiddleX, y: positions[46].y + eyeLength }
// //                 const jaw = { x: positions[8].x, y: (positions[8].y + positions[57].y) / 2 }
// //                 context.drawImage(video, 0, 0, camCanvas.width, camCanvas.height);
// //                 // let eyeAvgColor = context.getImageData(centerPupil.x, centerPupil.y, 1, 1).data
// //                 let cheekAvgColor = context.getImageData(leftCheek.x, leftCheek.y, 1, 1).data
// //                 // ctx.fillStyle = `rgb(${eyeAvgColor[0]},${eyeAvgColor[1]},${eyeAvgColor[2]})`
// //                 // ctx.fillRect(0, 0, 100, 100)
// //                 // ctx.fillStyle = `rgb(${cheekAvgColor[0]},${cheekAvgColor[1]},${cheekAvgColor[2]})`
// //                 // ctx.fillRect(0, 150, 100, 100)
// //                 // ctx.font = "20px serif"
// //                 // ctx.strokeText("hello world", 0,20)
// //                 // let eyeTextCanvas = document.createElement("canvas")
// //                 // eyeTextCanvas.width = 100
// //                 // eyeTextCanvas.height = 25
// //                 // let eyeTextContext = eyeTextCanvas.getContext("2d")
// //                 // eyeTextContext.scale(-1, 1)
// //                 // eyeTextContext.font = "15px"
// //                 // eyeTextContext.fillText("오른쪽 홍채색", -70, 20)
// //                 // eyeTextContext.setTransform(1, 0, 0, 1, 0, 0);
// //                 // ctx.putImageData(eyeTextContext.getImageData(0, 0, eyeTextCanvas.width, eyeTextCanvas.height), 0, 0)
// //                 // let cheekTextCanvas = document.createElement("canvas")
// //                 // cheekTextCanvas.width = 70
// //                 // cheekTextCanvas.height = 25
// //                 // let cheekTextContext = cheekTextCanvas.getContext("2d")
// //                 // cheekTextContext.scale(-1, 1)
// //                 // cheekTextContext.font = "15px"
// //                 // cheekTextContext.fillText("오른쪽 볼 색", -60, 20)
// //                 // cheekTextContext.setTransform(1, 0, 0, 1, 0, 0);
// //                 // ctx.putImageData(cheekTextContext.getImageData(0, 0, cheekTextCanvas.width, cheekTextCanvas.height), 100, 150)
// //                 // let eyePointArc = document.createElement("canvas")
// //                 // let eyePointArcCtx = eyePointArc.getContext('2d')
// //                 // eyePointArc.width = 3
// //                 // eyePointArc.height = 3
// //                 // eyePointArcCtx.beginPath();
// //                 // eyePointArcCtx.arc(1.5, 1.5, 1.5, 0, 2 * Math.PI);
// //                 // eyePointArcCtx.fillStyle = 'rgb(255,0,0)'
// //                 // eyePointArcCtx.fill();
// //                 // ctx.putImageData(eyePointArcCtx.getImageData(0, 0, eyePointArc.width, eyePointArc.height), centerPupil.x, centerPupil.y)
// //                 // let eyePointArc = document.createElement("canvas")
// //                 // let eyePointArcCtx = eyePointArc.getContext('2d')
// //                 // eyePointArc.width = 3
// //                 // eyePointArc.height = 3
// //                 // eyePointArcCtx.beginPath();
// //                 // eyePointArcCtx.arc(1.5, 1.5, 1.5, 0, 2 * Math.PI);
// //                 // eyePointArcCtx.fillStyle = 'rgb(255,0,0)'
// //                 // eyePointArcCtx.fill();
// //                 // await ctx.putImageData(eyePointArcCtx.getImageData(0, 0, eyePointArc.width, eyePointArc.height), leftUnderEye.x, leftUnderEye.y)
// //                 // let rightEyePointArc = document.createElement("canvas")
// //                 // let rightEyePointArcCtx = rightEyePointArc.getContext('2d')
// //                 // rightEyePointArc.width = 3
// //                 // rightEyePointArc.height = 3
// //                 // rightEyePointArcCtx.beginPath();
// //                 // rightEyePointArcCtx.arc(1.5, 1.5, 1.5, 0, 2 * Math.PI);
// //                 // rightEyePointArcCtx.fillStyle = 'rgb(255,0,0)'
// //                 // rightEyePointArcCtx.fill();
// //                 // await ctx.putImageData(rightEyePointArcCtx.getImageData(0, 0, rightEyePointArc.width, rightEyePointArc.height), rightUnderEye.x, rightUnderEye.y)
// //                 // let cheekPointArc = document.createElement("canvas")
// //                 // cheekPointArc.width = 3
// //                 // cheekPointArc.height = 3
// //                 // let cheekPointArcCtx = cheekPointArc.getContext('2d')
// //                 // cheekPointArcCtx.beginPath();
// //                 // cheekPointArcCtx.arc(1.5, 1.5, 1.5, 0, Math.PI * 2);
// //                 // cheekPointArcCtx.fillStyle = 'rgb(255,0,0)'
// //                 // cheekPointArcCtx.fill();
// //                 // await ctx.putImageData(cheekPointArcCtx.getImageData(0, 0, cheekPointArc.width, cheekPointArc.height), leftCheek.x, leftCheek.y)
// //                 // let rightCheekPointArc = document.createElement("canvas")
// //                 // rightCheekPointArc.width = 3
// //                 // rightCheekPointArc.height = 3
// //                 // let rightCheekPointArcCtx = rightCheekPointArc.getContext('2d')
// //                 // rightCheekPointArcCtx.beginPath();
// //                 // rightCheekPointArcCtx.arc(1.5, 1.5, 1.5, 0, Math.PI * 2);
// //                 // rightCheekPointArcCtx.fillStyle = 'rgb(255,0,0)'
// //                 // rightCheekPointArcCtx.fill();
// //                 // await ctx.putImageData(rightCheekPointArcCtx.getImageData(0, 0, rightCheekPointArc.width, rightCheekPointArc.height), rightCheek.x, rightCheek.y)
// //                 // let jawPointArc = document.createElement("canvas")
// //                 // jawPointArc.width = 3
// //                 // jawPointArc.height = 3
// //                 // let jaePointArcCtx = jawPointArc.getContext('2d')
// //                 // jaePointArcCtx.beginPath();
// //                 // jaePointArcCtx.arc(1.5, 1.5, 1.5, 0, Math.PI * 2);
// //                 // jaePointArcCtx.fillStyle = 'rgb(255,0,0)'
// //                 // jaePointArcCtx.fill();
// //                 // await ctx.putImageData(jaePointArcCtx.getImageData(0, 0, jawPointArc.width, jawPointArc.height), jaw.x, jaw.y)
// //                 let leftEyeSum = new getColorData(leftUnderEye, eyeLength, context)
// //                 let rightEyeSum = new getColorData(rightUnderEye, eyeLength, context)
// //                 let leftCheekSum = new getColorData(leftCheek, eyeLength, context)
// //                 let rightCheekSum = new getColorData(rightCheek, eyeLength, context)
// //                 let jawSum = new getColorData(jaw, eyeLength, context)
// //                 let eyeResult = await leftEyeSum.map((i, idx) => {
// //                     return (i + rightEyeSum[idx]) / 2
// //                 })
// //                 let cheekResult = await leftCheekSum.map((i, idx) => {
// //                     return (i + rightCheekSum[idx]) / 2
// //                 })
// //                 eyeColor.push(eyeResult)
// //                 cheekColor.push(cheekResult)
// //                 jawColor.push(jawSum)
// //                 ctx.fillStyle = `rgb(${(eyeResult[0] + cheekResult[0] + jawSum[0]) / 3},${(eyeResult[1] + cheekResult[1] + jawSum[1]) / 3},${(eyeResult[2] + cheekResult[2] + jawSum[2]) / 3})`
// //                 ctx.fillRect(0, 0, canvas.width / 4, canvas.width / 4)
// //                 let faceCenterPos = positions[29]
// //                 let leftFaceWidth = positions[1].x - faceCenterPos.x  //왼쪽 볼 넓이
// //                 let rightFaceWidth =  faceCenterPos.x  - positions[15].x
// //                 let noseToBottom = (positions[8].y - faceCenterPos.y) * 1.1 //코부터 턱끝 길이
// //                 let o1 = Math.atan((positions[15].y-(positions[15].y+positions[1].y)/2)/(positions[15].x-positions[1].x)) // 각도 계산
// //                 // let degree = Math.abs(o1 * 180/Math.PI)
// //                 //마스크 드로잉
// //                 await ctx.save();
// //                 await ctx.translate(faceCenterPos.x, faceCenterPos.y) //기준점 잡기. 드로우가 시작되는 좌표를 기준점으로 잡아야 그려지는 부분만 회전이 가능
// //                 await ctx.rotate(o1)
// //                 await ctx.translate(-faceCenterPos.x, -faceCenterPos.y) //이후에 이미지를 원하는 위치에 그리기 위해 다시 초기화해줌
// //                 // ctx.scale(-1,1)
// //                 await ctx.drawImage(rightMask, faceCenterPos.x, faceCenterPos.y, -rightFaceWidth, noseToBottom)
// //                 await ctx.drawImage(leftMask, faceCenterPos.x+1, faceCenterPos.y, leftFaceWidth, noseToBottom)
// //                 await ctx.restore()
// //                 // await ctx.drawImage(leftMask, faceCenterPos.x, faceCenterPos.y, leftFaceWidth, noseToBottom)
// //                 // await ctx.drawImage(rightMask, faceCenterPos.x, faceCenterPos.y, -rightFaceWidth, noseToBottom)
// //                 // colorSum.eye = await finalResult[0].map((i, idx) => {
// //                 //     if(colorSum.eye) return  colorSum.eye[idx] + i
// //                 //     else return  i
// //                 //     // return (colorSum.eye ? colorSum.eye[idx] : 0) + i
// //                 // })
// //                 // colorSum.cheek = await finalResult[1].map((i, idx) => {
// //                 //     if(colorSum.cheek) return  colorSum.cheek[idx] + i
// //                 //     else return  i
// //                 // })
// //                 // colorSum.jaw = await finalResult[2].map((i, idx) => {
// //                 //     return (colorSum.jaw ? colorSum.eye[idx] : 0) + i
// //                 // })
// //                 // let cheekPointArc = document.createElement("canvas")
// //                 // cheekPointArc.width = 3
// //                 // cheekPointArc.height = 3
// //                 // let cheekPointArcCtx = cheekPointArc.getContext('2d')
// //                 // cheekPointArcCtx.beginPath();
// //                 // cheekPointArcCtx.arc(1.5, 1.5, 1.5, 0, Math.PI * 2);
// //                 // cheekPointArcCtx.fillStyle = 'rgb(255,0,0)'
// //                 // cheekPointArcCtx.fill();
// //                 // ctx.putImageData(cheekPointArcCtx.getImageData(0, 0, cheekPointArc.width, cheekPointArc.height), leftCheek.x, leftCheek.y)
// //                 // colorSum.forEach((i, idx) => {
// //                 //     colorSum[idx] += cheekAvgColor[idx]
// //                 // })
// //                 if (cnt < 31) {
// //                     // document.getElementById("progressBar").style.width = cnt*2 + "%"
// //                     //     document.getElementById("progresspercent").innerText = cnt*2 + "%"
// //                     progressContainer.style.display = "inline-flex"
// //                     for (let i = 3; i >= 0; i--) {
// //                         let result = cnt * 3.3
// //                         let progressUnit = result.toFixed(1) - i
// //                         progressBar.style.width = progressUnit + "%"
// //                         percent.innerText = progressUnit + "%"
// //                         if (cnt === 30) {
// //                             progressBar.style.width = "100%"
// //                             percent.innerText = "100%"
// //                         }
// //                     }
// //                 }
// //             }
// //             else {
// //                 if (testExplain)
// //                     testExplain.innerText = "가장 얼굴이 화사해지는 필터를 확인 후 결과 확인 버튼을 눌러주세요"
// //                 let colorRgb = store.getState().ColorReducer.mainFaceBoardColor
// //                 new FaceBoard(positions, colorRgb, canvas)
// //             }
// //         } else {
// //             await ctx.clearRect(0, 0, canvas.width, canvas.height)
// //             if (testExplain)
// //                 testExplain.innerHTML = `얼굴을 인식할 수 있도록 카메라를 바라봐주세요.<br> <span style="color : yellow;">Tip : 최대한 빛의 영향을 받지 않는 곳에서 측정해보세요!</span>`
// //         }
// //         ani = requestAnimationFrame(test)
// //     }
// //     // interval = setInterval(async () => {
// //     //     const detections = await faceapi.detectSingleFace(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks(true) //video 캡쳐본 얼굴인식 정보  사이즈를 맞추기 전이기때문에 좌표값이 다르다
// //     //     let resizedDetections
// //     //     loading.style.display = 'none'
// //     //     if (detections) {
// //     //         cnt++
// //     //         if (cnt == 31 && !faceBoard) {
// //     //             clearInterval(interval)
// //     //             canvas.remove()
// //     //             colorSum.eye = eyeColor.reduce((a,b)=>{
// //     //                 return [a[0]+b[0], a[1]+b[1], a[2]+b[2]]
// //     //             })
// //     //             colorSum.cheek = cheekColor.reduce((a,b)=>{
// //     //                 return [a[0]+b[0], a[1]+b[1], a[2]+b[2]]
// //     //             })
// //     //             colorSum.jaw = jawColor.reduce((a,b)=>{
// //     //                 return [a[0]+b[0], a[1]+b[1], a[2]+b[2]]
// //     //             })
// //     //             for(let key in colorSum){
// //     //                 colorSum[key] = colorSum[key].map(i=>i/30)
// //     //             }
// //     //             throttler.throttle(() => {
// //     //                 video.pause()
// //     //                 axios.post('https://tensor-server.herokuapp.com/getSeason', colorSum)
// //     //                 .then(res=>{
// //     //                     document.getElementById(res.data).click()
// //     //                 })
// //     //                 .catch(err=>{
// //     //                     console.log(err)
// //     //                 })
// //     //             }, 500)
// //     //             return
// //     //         }
// //     //         if(cnt >31 && !faceBoard) return
// //     //         resizedDetections = await faceapi.resizeResults(detections, displaySize) //detections를 displaysize에 맞춘 결과값
// //     //         // await faceapi.draw.drawDetections(canvas, resizedDetections) //얼굴인식 사각형 박스 드로잉
// //     //         // const landmark = await faceapi.detectFaceLandmarksTiny(canvas) //페이스랜드마크 좌표
// //     //         const positions = await resizedDetections.landmarks.positions
// //     //         if (!faceBoard) {
// //     //             document.getElementById("testExplain").innerHTML = `피부색을 추출 중 입니다.<br> <span style="color : yellow;">Tip : 최대한 빛의 영향을 받지 않는 곳에서 측정해보세요!</span>`
// //     //             await ctx.clearRect(0, 0, canvas.width, canvas.height) //캔버스 초기화
// //     //             await faceapi.draw.drawFaceLandmarks(canvas, resizedDetections) //얼굴인식 랜드마크 드로잉
// //     //             const leftNose = positions[31]
// //     //             const leftChin = positions[2]
// //     //             const leftCheek = { x: (leftNose.x + leftChin.x) / 2, y: (leftNose.y + leftChin.y) / 2 }
// //     //             const rightNose = positions[35]
// //     //             const rightChin = positions[14]
// //     //             const rightCheek = { x: (rightNose.x + rightChin.x) / 2, y: (rightNose.y + rightChin.y) / 2 }
// //     //             const eyeLength = (positions[41].y - positions[37].y)
// //     //             const eyeMiddleX = (positions[40].x + positions[41].x) / 2
// //     //             const leftUnderEye = { x: eyeMiddleX, y: positions[41].y + eyeLength }
// //     //             const rightEyeMiddleX = (positions[46].x + positions[47].x) / 2
// //     //             const rightUnderEye = { x: rightEyeMiddleX, y: positions[46].y + eyeLength }
// //     //             const jaw = { x: positions[8].x, y: (positions[8].y + positions[57].y) / 2 }
// //     //             context.drawImage(video, 0, 0, camCanvas.width, camCanvas.height);
// //     //             // let eyeAvgColor = context.getImageData(centerPupil.x, centerPupil.y, 1, 1).data
// //     //             let cheekAvgColor = context.getImageData(leftCheek.x, leftCheek.y, 1, 1).data
// //     //             // ctx.fillStyle = `rgb(${eyeAvgColor[0]},${eyeAvgColor[1]},${eyeAvgColor[2]})`
// //     //             // ctx.fillRect(0, 0, 100, 100)
// //     //             // ctx.fillStyle = `rgb(${cheekAvgColor[0]},${cheekAvgColor[1]},${cheekAvgColor[2]})`
// //     //             // ctx.fillRect(0, 150, 100, 100)
// //     //             ctx.fillStyle = `rgb(${cheekAvgColor[0]},${cheekAvgColor[1]},${cheekAvgColor[2]})`
// //     //             ctx.fillRect(0, 0, canvas.width / 4, canvas.width / 4)
// //     //             // ctx.font = "20px serif"
// //     //             // ctx.strokeText("hello world", 0,20)
// //     //             // let eyeTextCanvas = document.createElement("canvas")
// //     //             // eyeTextCanvas.width = 100
// //     //             // eyeTextCanvas.height = 25
// //     //             // let eyeTextContext = eyeTextCanvas.getContext("2d")
// //     //             // eyeTextContext.scale(-1, 1)
// //     //             // eyeTextContext.font = "15px"
// //     //             // eyeTextContext.fillText("오른쪽 홍채색", -70, 20)
// //     //             // eyeTextContext.setTransform(1, 0, 0, 1, 0, 0);
// //     //             // ctx.putImageData(eyeTextContext.getImageData(0, 0, eyeTextCanvas.width, eyeTextCanvas.height), 0, 0)
// //     //             // let cheekTextCanvas = document.createElement("canvas")
// //     //             // cheekTextCanvas.width = 70
// //     //             // cheekTextCanvas.height = 25
// //     //             // let cheekTextContext = cheekTextCanvas.getContext("2d")
// //     //             // cheekTextContext.scale(-1, 1)
// //     //             // cheekTextContext.font = "15px"
// //     //             // cheekTextContext.fillText("오른쪽 볼 색", -60, 20)
// //     //             // cheekTextContext.setTransform(1, 0, 0, 1, 0, 0);
// //     //             // ctx.putImageData(cheekTextContext.getImageData(0, 0, cheekTextCanvas.width, cheekTextCanvas.height), 100, 150)
// //     //             // let eyePointArc = document.createElement("canvas")
// //     //             // let eyePointArcCtx = eyePointArc.getContext('2d')
// //     //             // eyePointArc.width = 3
// //     //             // eyePointArc.height = 3
// //     //             // eyePointArcCtx.beginPath();
// //     //             // eyePointArcCtx.arc(1.5, 1.5, 1.5, 0, 2 * Math.PI);
// //     //             // eyePointArcCtx.fillStyle = 'rgb(255,0,0)'
// //     //             // eyePointArcCtx.fill();
// //     //             // ctx.putImageData(eyePointArcCtx.getImageData(0, 0, eyePointArc.width, eyePointArc.height), centerPupil.x, centerPupil.y)
// //     //             // let eyePointArc = document.createElement("canvas")
// //     //             // let eyePointArcCtx = eyePointArc.getContext('2d')
// //     //             // eyePointArc.width = 3
// //     //             // eyePointArc.height = 3
// //     //             // eyePointArcCtx.beginPath();
// //     //             // eyePointArcCtx.arc(1.5, 1.5, 1.5, 0, 2 * Math.PI);
// //     //             // eyePointArcCtx.fillStyle = 'rgb(255,0,0)'
// //     //             // eyePointArcCtx.fill();
// //     //             // await ctx.putImageData(eyePointArcCtx.getImageData(0, 0, eyePointArc.width, eyePointArc.height), leftUnderEye.x, leftUnderEye.y)
// //     //             // let rightEyePointArc = document.createElement("canvas")
// //     //             // let rightEyePointArcCtx = rightEyePointArc.getContext('2d')
// //     //             // rightEyePointArc.width = 3
// //     //             // rightEyePointArc.height = 3
// //     //             // rightEyePointArcCtx.beginPath();
// //     //             // rightEyePointArcCtx.arc(1.5, 1.5, 1.5, 0, 2 * Math.PI);
// //     //             // rightEyePointArcCtx.fillStyle = 'rgb(255,0,0)'
// //     //             // rightEyePointArcCtx.fill();
// //     //             // await ctx.putImageData(rightEyePointArcCtx.getImageData(0, 0, rightEyePointArc.width, rightEyePointArc.height), rightUnderEye.x, rightUnderEye.y)
// //     //             // let cheekPointArc = document.createElement("canvas")
// //     //             // cheekPointArc.width = 3
// //     //             // cheekPointArc.height = 3
// //     //             // let cheekPointArcCtx = cheekPointArc.getContext('2d')
// //     //             // cheekPointArcCtx.beginPath();
// //     //             // cheekPointArcCtx.arc(1.5, 1.5, 1.5, 0, Math.PI * 2);
// //     //             // cheekPointArcCtx.fillStyle = 'rgb(255,0,0)'
// //     //             // cheekPointArcCtx.fill();
// //     //             // await ctx.putImageData(cheekPointArcCtx.getImageData(0, 0, cheekPointArc.width, cheekPointArc.height), leftCheek.x, leftCheek.y)
// //     //             // let rightCheekPointArc = document.createElement("canvas")
// //     //             // rightCheekPointArc.width = 3
// //     //             // rightCheekPointArc.height = 3
// //     //             // let rightCheekPointArcCtx = rightCheekPointArc.getContext('2d')
// //     //             // rightCheekPointArcCtx.beginPath();
// //     //             // rightCheekPointArcCtx.arc(1.5, 1.5, 1.5, 0, Math.PI * 2);
// //     //             // rightCheekPointArcCtx.fillStyle = 'rgb(255,0,0)'
// //     //             // rightCheekPointArcCtx.fill();
// //     //             // await ctx.putImageData(rightCheekPointArcCtx.getImageData(0, 0, rightCheekPointArc.width, rightCheekPointArc.height), rightCheek.x, rightCheek.y)
// //     //             // let jawPointArc = document.createElement("canvas")
// //     //             // jawPointArc.width = 3
// //     //             // jawPointArc.height = 3
// //     //             // let jaePointArcCtx = jawPointArc.getContext('2d')
// //     //             // jaePointArcCtx.beginPath();
// //     //             // jaePointArcCtx.arc(1.5, 1.5, 1.5, 0, Math.PI * 2);
// //     //             // jaePointArcCtx.fillStyle = 'rgb(255,0,0)'
// //     //             // jaePointArcCtx.fill();
// //     //             // await ctx.putImageData(jaePointArcCtx.getImageData(0, 0, jawPointArc.width, jawPointArc.height), jaw.x, jaw.y)
// //     //             let leftEyeSum = new getColorData(leftUnderEye, eyeLength, context)
// //     //             let rightEyeSum = new getColorData(rightUnderEye, eyeLength, context)
// //     //             let leftCheekSum = new getColorData(leftCheek, eyeLength, context)
// //     //             let rightCheekSum = new getColorData(rightCheek, eyeLength, context)
// //     //             let jawSum = new getColorData(jaw, eyeLength, context)
// //     //             let eyeResult = await leftEyeSum.map((i, idx) => {
// //     //                 return i + rightEyeSum[idx]
// //     //             })
// //     //             let cheekResult = await leftCheekSum.map((i, idx) => {
// //     //                 return i + rightCheekSum[idx]
// //     //             })
// //     //             eyeColor.push(eyeResult.map(i => i /= 2))
// //     //             cheekColor.push(cheekResult.map(i => i /= 2))
// //     //             jawColor.push(jawSum)
// //     //             // colorSum.eye = await finalResult[0].map((i, idx) => {
// //     //             //     if(colorSum.eye) return  colorSum.eye[idx] + i
// //     //             //     else return  i
// //     //             //     // return (colorSum.eye ? colorSum.eye[idx] : 0) + i
// //     //             // })
// //     //             // colorSum.cheek = await finalResult[1].map((i, idx) => {
// //     //             //     if(colorSum.cheek) return  colorSum.cheek[idx] + i
// //     //             //     else return  i
// //     //             // })
// //     //             // colorSum.jaw = await finalResult[2].map((i, idx) => {
// //     //             //     return (colorSum.jaw ? colorSum.eye[idx] : 0) + i
// //     //             // })
// //     //             // let cheekPointArc = document.createElement("canvas")
// //     //             // cheekPointArc.width = 3
// //     //             // cheekPointArc.height = 3
// //     //             // let cheekPointArcCtx = cheekPointArc.getContext('2d')
// //     //             // cheekPointArcCtx.beginPath();
// //     //             // cheekPointArcCtx.arc(1.5, 1.5, 1.5, 0, Math.PI * 2);
// //     //             // cheekPointArcCtx.fillStyle = 'rgb(255,0,0)'
// //     //             // cheekPointArcCtx.fill();
// //     //             // ctx.putImageData(cheekPointArcCtx.getImageData(0, 0, cheekPointArc.width, cheekPointArc.height), leftCheek.x, leftCheek.y)
// //     //             // colorSum.forEach((i, idx) => {
// //     //             //     colorSum[idx] += cheekAvgColor[idx]
// //     //             // })
// //     //             if (cnt < 31) {
// //     //                 // document.getElementById("progressBar").style.width = cnt*2 + "%"
// //     //                 //     document.getElementById("progresspercent").innerText = cnt*2 + "%"
// //     //                 progressContainer.style.display = "inline-flex"
// //     //                 for (let i = 3; i >= 0; i--) {
// //     //                     let result = cnt * 3.3
// //     //                     let progressUnit = result.toFixed(1) -i
// //     //                     progressBar.style.width = progressUnit + "%"
// //     //                     percent.innerText = progressUnit + "%"
// //     //                     if (cnt === 30) {
// //     //                         progressBar.style.width = "100%"
// //     //                         percent.innerText = "100%"
// //     //                     }
// //     //                 }
// //     //             }
// //     //         }
// //     //         else {
// //     //             document.getElementById("testExplain").innerText = "가장 얼굴이 화사해지는 필터를 확인 후 결과 확인 버튼을 눌러주세요"
// //     //             let colorRgb = store.getState().ColorReducer.mainFaceBoardColor
// //     //             new FaceBoard(positions, colorRgb, canvas)
// //     //         }
// //     //     } else {
// //     //         await ctx.clearRect(0, 0, canvas.width, canvas.height)
// //     //         document.getElementById("testExplain").innerHTML = `얼굴을 인식할 수 있도록 카메라를 바라봐주세요.<br> <span style="color : yellow;">Tip : 최대한 빛의 영향을 받지 않는 곳에서 측정해보세요!</span>`
// //     //     }
// //     // }, 100)
// // }
// import * as faceLandmarksDetection from '@tensorflow-models/face-landmarks-detection';
// import * as tf from '@tensorflow/tfjs-core';
// import '@tensorflow/tfjs-backend-webgl';
// import { model } from '../../pages/_app';
// import MaskDraw from './MaskDraw';
// import { actionCreators } from '../../store/colorStore';
// import getDeviceType from './getDeviceType';
// // import { canvasToImg } from './canvasToImg'
// export default async function StreamCanvas(faceBoard) {
//   let ctx, videoWidth, videoHeight, video, rafID;
//   video = document.getElementById('video');
//   let maskColor;
//   if (
//     video &&
//     video.previousSibling &&
//     video.previousSibling.nodeName == 'CANVAS'
//   )
//     return;
//   const loading = document.getElementById('loading');
//   const ML_Loading = document.getElementById('ML_Loading');
//   ML_Loading.style.display = 'block';
//   const state = {
//     backend: 'webgl',
//     maxFaces: 1,
//     triangulateMesh: true,
//     predictIrises: false,
//   };
//   const NUM_KEYPOINTS = 468;
//   const NUM_IRIS_KEYPOINTS = 5;
//   const GREEN = '#32EEDB';
//   const RED = '#FF2C35';
//   const BLUE = '#157AB3';
//   let testWrapper = document.getElementById('testWrapper');
//   let headerWrapper = document.getElementById('headerWrapper');
//   const throttler = throttling();
//   const progressBar = document.getElementById('progressBar');
//   const percent = document.getElementById('progressPercent');
//   const progressContainer = document.getElementById('progressContainer');
//   const testExplain = document.getElementById('testExplain');
//   let canvas = document.createElement('canvas');
//   let camCanvas = document.createElement('canvas');
//   let context = camCanvas.getContext('2d');
//   let cnt = 0;
//   let colorSum = {};
//   let eyeColor = [];
//   let cheekColor = [];
//   let jawColor = [];
//   let typeArr = getDeviceType();
//   if (faceBoard == 'mask') {
//     let beige_left = new Image();
//     beige_left.src = `${process.env.PATH}/images/beige-left.png`;
//     let beige_right = new Image();
//     beige_right.src = `${process.env.PATH}/images/beige-right.png`;
//     let mint_left = new Image();
//     mint_left.src = `${process.env.PATH}/images/mint-left.png`;
//     let mint_right = new Image();
//     mint_right.src = `${process.env.PATH}/images/mint-right.png`;
//     let black_left = new Image();
//     black_left.src = `${process.env.PATH}/images/black-left.png`;
//     let black_right = new Image();
//     black_right.src = `${process.env.PATH}/images/black-right.png`;
//     let white_left = new Image();
//     white_left.src = `${process.env.PATH}/images/white-left.png`;
//     let white_right = new Image();
//     white_right.src = `${process.env.PATH}/images/white-right.png`;
//     let purple_left = new Image();
//     purple_left.src = `${process.env.PATH}/images/purple-left.png`;
//     let purple_right = new Image();
//     purple_right.src = `${process.env.PATH}/images/purple-right.png`;
//     let pink_left = new Image();
//     pink_left.src = `${process.env.PATH}/images/pink-left.png`;
//     let pink_right = new Image();
//     pink_right.src = `${process.env.PATH}/images/pink-right.png`;
//     maskColor = {
//       white: [white_left, white_right],
//       black: [black_left, black_right],
//       pink: [pink_left, pink_right],
//       purple: [purple_left, purple_right],
//       beige: [beige_left, beige_right],
//       mint: [mint_left, mint_right],
//     };
//     maskColor[store.getState().ColorReducer.mainMaskColor][1].onload = () =>
//       main();
//   } else if (faceBoard == 'scan') {
//     store.dispatch(actionCreators.setScanTrigger(true));
//     let beforePopup = store.getState().ColorReducer.scanTrigger;
//     store.subscribe(() => {
//       const afterPopup = store.getState().ColorReducer.scanTrigger;
//       if (beforePopup != afterPopup) {
//         setTimeout(() => {
//           main();
//         }, 100);
//       }
//     });
//   } else main();
//   // if (renderPointcloud) {
//   //   state.renderPointcloud = true;
//   // }
//   async function setupCamera() {
//     video = document.getElementById('video');
//     return new Promise(resolve => {
//       video.onloadedmetadata = () => {
//         resolve(video);
//       };
//     });
//   }
//   async function renderPrediction() {
//     model.then(async data => {
//       let predictions;
//       try {
//         predictions = await data.estimateFaces({
//           input: video,
//           returnTensors: false,
//           flipHorizontal: false,
//           predictIrises: state.predictIrises,
//         });
//       } catch (error) {
//         setTimeout(() => {
//           renderPrediction();
//         }, 300);
//         return;
//       }
//       await ctx.clearRect(0, 0, canvas.width, canvas.height);
//       await context.drawImage(video, 0, 0, canvas.width, canvas.height);
//       if (predictions.length > 0) {
//         ML_Loading.style.display = 'none';
//         const keypoints = predictions[0].scaledMesh;
//         const boxPos = predictions[0].boundingBox;
//         const positions = await keypoints.map(i => {
//           //facemesh는 비디오의 client사이즈가아닌 video사이즈를 기준으로 포지션을 리턴한다.
//           //그래서 기기에 맞게 맞춰진 캔버스에는 맞지 않기 때문에 해당 비율로 전환해주는 작업을 거쳐야 한다.
//           return {
//             x: i[0] / (video.videoWidth / videoWidth),
//             y: i[1] / (video.videoHeight / videoHeight),
//           };
//         });
//         if (faceBoard == 'scan') {
//           testExplain.innerHTML = `피부색을 추출 중 입니다.<br> <span style="color : #9b85d0;">Tip : 최대한 빛의 영향을 받지 않는 곳에서 측정해보세요!</span>`;
//           cnt++;
//           if (cnt == 61) {
//             loading.style.display = 'block';
//             colorSum.eye = eyeColor.reduce((a, b) => {
//               return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
//             });
//             colorSum.cheek = cheekColor.reduce((a, b) => {
//               return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
//             });
//             colorSum.jaw = jawColor.reduce((a, b) => {
//               return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
//             });
//             for (let key in colorSum) {
//               colorSum[key] = colorSum[key].map(i => i / 60);
//             }
//             throttler.throttle(() => {
//               // const form = new FormData()
//               // form.append("file", canvasToImg(camCanvas))
//               // axios.post('/sendImg', form)
//               axios
//                 .post('/getSeason', colorSum)
//                 .then(res => {
//                   colorAvg(colorSum, res.data);
//                   document.getElementById(res.data).click();
//                   const stream = video.srcObject; //비디오 스트림
//                   const tracks = stream.getTracks(); //트랙
//                   tracks[0].stop(); //스트림 중단
//                 })
//                 .catch(err => {
//                   console.log(err);
//                 });
//             }, 500);
//             return;
//           }
//           if (cnt > 61 && faceBoard == 'scan') return;
//           await ctx.beginPath();
//           // await ctx.moveTo(boxPos.topLeft[0] / (video.videoWidth / videoWidth), (boxPos.topLeft[1] / (video.videoWidth / videoWidth)) * 2)
//           // await ctx.lineTo(boxPos.bottomRight[0] / (video.videoWidth / videoWidth), (boxPos.topLeft[1] / (video.videoWidth / videoWidth)) * 2)
//           // await ctx.lineTo(boxPos.bottomRight[0] / (video.videoWidth / videoWidth), (boxPos.bottomRight[1] / (video.videoWidth / videoWidth)) * 1.35)
//           // await ctx.lineTo(boxPos.topLeft[0] / (video.videoWidth / videoWidth), (boxPos.bottomRight[1] / (video.videoWidth / videoWidth)) * 1.35)
//           await ctx.moveTo(
//             positions[234].x + positions[234].x * -0.05,
//             positions[10].y,
//           );
//           await ctx.lineTo(
//             positions[454].x + positions[454].x * 0.05,
//             positions[10].y,
//           );
//           await ctx.lineTo(
//             positions[454].x + positions[454].x * 0.05,
//             positions[152].y,
//           );
//           await ctx.lineTo(
//             positions[234].x + positions[234].x * -0.05,
//             positions[152].y,
//           );
//           await ctx.closePath();
//           ctx.lineWidth = 3;
//           await ctx.stroke();
//           const eyeLength = Math.abs(positions[4].y - positions[1].y);
//           const rightCheek = positions[425];
//           const leftCheek = {
//             x: positions[205].x - eyeLength,
//             y: positions[205].y,
//           };
//           const leftUnderEye = positions[110];
//           const rightUnderEye = positions[252];
//           const jaw = positions[201];
//           // await ctx.fillRect(leftCheek.x,leftCheek.y,-eyeLength, eyeLength/2)
//           // await ctx.fillRect(rightCheek.x,rightCheek.y,eyeLength, eyeLength/2)
//           // await ctx.fillRect(leftUnderEye.x,leftUnderEye.y,eyeLength, eyeLength/2)
//           // await ctx.fillRect(rightUnderEye.x,rightUnderEye.y,eyeLength, eyeLength/2)
//           // await ctx.fillRect(jaw.x,jaw.y,eyeLength, eyeLength/2)
//           let leftEyeSum = new getColorData(leftUnderEye, eyeLength, context);
//           let rightEyeSum = new getColorData(rightUnderEye, eyeLength, context);
//           let leftCheekSum = new getColorData(leftCheek, eyeLength, context);
//           let rightCheekSum = new getColorData(rightCheek, eyeLength, context);
//           let jawSum = new getColorData(jaw, eyeLength, context);
//           let eyeResult = await leftEyeSum.map((i, idx) => {
//             return (i + rightEyeSum[idx]) / 2;
//           });
//           let cheekResult = await leftCheekSum.map((i, idx) => {
//             return (i + rightCheekSum[idx]) / 2;
//           });
//           eyeColor.push(eyeResult);
//           cheekColor.push(cheekResult);
//           jawColor.push(jawSum);
//           ctx.fillStyle = `rgb(${
//             (eyeResult[0] + cheekResult[0] + jawSum[0]) / 3
//           },${(eyeResult[1] + cheekResult[1] + jawSum[1]) / 3},${
//             (eyeResult[2] + cheekResult[2] + jawSum[2]) / 3
//           })`;
//           const rgbBox = (canvas.height + canvas.width) / 2 / 4;
//           ctx.fillRect(0, 0, rgbBox, rgbBox);
//           if (cnt < 61) {
//             // document.getElementById("progressBar").style.width = cnt*2 + "%"
//             //     document.getElementById("progresspercent").innerText = cnt*2 + "%"
//             progressContainer.style.display = 'inline-flex';
//             for (let i = 3; i >= 0; i--) {
//               let result = cnt * 1.65;
//               let progressUnit = result.toFixed(1) - i;
//               progressBar.style.width = progressUnit + '%';
//               percent.innerText = progressUnit + '%';
//               if (cnt === 60) {
//                 progressBar.style.width = '100%';
//                 percent.innerText = '100%';
//               }
//             }
//           }
//         } else if (faceBoard == 'faceboard') {
//           testExplain.innerText =
//             '가장 얼굴이 화사해지는 필터를 확인 후 결과 확인 버튼을 눌러주세요';
//           let colorRgb = store.getState().ColorReducer.mainFaceBoardColor;
//           new FaceBoard(positions, colorRgb, canvas);
//         } else {
//           testExplain.innerText =
//             '하단의 마스크를 선택하여 필터를 적용해보세요';
//           let mainColor =
//             maskColor[store.getState().ColorReducer.mainMaskColor];
//           let leftMask = mainColor[0];
//           let rightMask = mainColor[1];
//           new MaskDraw(
//             canvas,
//             leftMask,
//             rightMask,
//             positions,
//             typeArr[0],
//             typeArr[1],
//             typeArr[2],
//           );
//         }
//       } else
//         testExplain.innerHTML = `얼굴을 인식할 수 있도록 카메라를 바라봐주세요.<br> <span style="color : #9b85d0;">Tip : 최대한 빛의 영향을 받지 않는 곳에서 측정해보세요!</span>`;
//       rafID = requestAnimationFrame(renderPrediction);
//     });
//     //   stats.end();
//   }
//   async function main() {
//     if (faceBoard != 'mask') {
//       headerWrapper.style.display = 'none';
//       headerWrapper.style.opacity = 0;
//     }
//     await tf.setBackend(state.backend);
//     //   stats.showPanel(0);  // 0: fps, 1: ms, 2: mb, 3+: custom
//     //   document.body.appendChild(stats.dom);
//     testWrapper.style.opacity = 1;
//     video.play();
//     video.style.display = 'block';
//     canvas.className = 'faceCanvas';
//     videoWidth = video.clientWidth;
//     canvas.width = videoWidth;
//     canvas.style.position = 'absolute';
//     canvas.style.transform = 'scale(-1,1)';
//     canvas.style.zIndex = ' 998';
//     canvas.style.left = '0';
//     camCanvas.className = 'faceCanvas';
//     camCanvas.id = 'camCanvas';
//     camCanvas.style.display = 'none';
//     camCanvas.width = videoWidth;
//     if (typeArr[2]) {
//       videoHeight = 338;
//       canvas.height = 338;
//       camCanvas.height = 338;
//     } else {
//       videoHeight = video.clientHeight;
//       canvas.height = video.clientHeight;
//       camCanvas.height = video.clientHeight;
//     }
//     camCanvas.style.zIndex = '998';
//     camCanvas.style.transform = 'scale(-1,1)';
//     ctx = canvas.getContext('2d');
//     ctx.fillStyle = GREEN;
//     ctx.strokeStyle = GREEN;
//     ctx.lineWidth = 0.5;
//     testWrapper.insertBefore(camCanvas, testWrapper.firstChild);
//     testWrapper.insertBefore(canvas, testWrapper.firstChild);
//     // model = await faceLandmarksDetection.load(
//     //     faceLandmarksDetection.SupportedPackages.mediapipeFacemesh,
//     //     { maxFaces: state.maxFaces });
//     renderPrediction();
//     //   ani = requestAnimationFrame(main);
//   }
//   // let ani = requestAnimationFrame(main);
// }
// import { throttling } from '../../utils/throttling';
// import FaceBoard from './FaceBoard';



 // import ImageUpload from './ImageUpload';


 // import canvasToImg from './canvasToImg';
// import getFaceImageData from './getFaceImageData';



 // import { TRIANGULATION } from './triangulations';

function StreamCanvas(_x) {
  return _StreamCanvas.apply(this, arguments);
} // initialize the timer variables and start the animation

_c2 = StreamCanvas;

function _StreamCanvas() {
  _StreamCanvas = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(faceBoard) {
    var ctx, videoWidth, videoHeight, video, stream, tracks, faceDotDraw, faceBgDraw, maskColor, model, ML_Loading, progressBar, percent, progressContainer, GREEN, testWrapper, headerWrapper, testExplain, canvas, aniId, progressCnt, isDetected, typeArr, icon, icon2, beige_left, beige_right, mint_left, mint_right, black_left, black_right, white_left, white_right, purple_left, purple_right, pink_left, pink_right, renderPrediction, _renderPrediction, main, _main, progress;

    return C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            progress = function _progress() {
              var add = Math.random() * 3;
              progressCnt += add;
              if (progressCnt > 100) progressCnt = 100;
              progressContainer.style.display = 'inline-flex';
              progressBar.style.width = progressCnt.toFixed(2) + '%';
              percent.innerText = progressCnt.toFixed(2) + '%';
            };

            _main = function _main3() {
              _main = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
                var check;
                return C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        check = true; // setTimeout(() => {
                        //   if (!model) {
                        //     check = false;
                        //     cancelAnimationFrame(aniId);
                        //     if (
                        //       confirm(
                        //         '기기의 사양이 낮아 원활한 측정이 힘듭니다. 확인을 누르시면 이미지 측정 방식으로 전환합니다. 취소를 누르시면 그대로 진행합니다.',
                        //       )
                        //     ) {
                        //       check = false;
                        //       localStorage.setItem('isScanPossible', 'false');
                        //       headerWrapper.style.display = 'flex';
                        //       headerWrapper.style.opacity = '1';
                        //       testWrapper.style.opacity = '0';
                        //       tracks[0].stop();
                        //       canvas.remove();
                        //       video.style.display = 'none';
                        //       ML_Loading.style.display = 'none';
                        //       ImageUpload(faceBoard);
                        //       return;
                        //     } else check = true;
                        //   }
                        // }, 150000);

                        if (model) {
                          _context2.next = 5;
                          break;
                        }

                        _context2.next = 4;
                        return _tensorflow_models_face_landmarks_detection__WEBPACK_IMPORTED_MODULE_6__.load(_tensorflow_models_face_landmarks_detection__WEBPACK_IMPORTED_MODULE_6__.SupportedPackages.mediapipeFacemesh, {
                          maxFaces: 1
                        });

                      case 4:
                        model = _context2.sent;

                      case 5:
                        if (check) {
                          if (faceBoard != 'mask') {
                            headerWrapper.style.display = 'none';
                            headerWrapper.style.opacity = '0';
                          } // await tf.setBackend(state.backend);
                          //   stats.showPanel(0);  // 0: fps, 1: ms, 2: mb, 3+: custom
                          //   document.body.appendChild(stats.dom);


                          try {
                            testWrapper.style.opacity = '1';
                            video.play();
                            video.style.display = 'block';
                            videoWidth = video.clientWidth;
                            canvas.width = videoWidth;

                            if (typeArr[2]) {
                              videoHeight = 338;
                              canvas.height = 338;
                            } else {
                              videoHeight = video.clientHeight;
                              canvas.height = video.clientHeight;
                            }

                            ctx = canvas.getContext('2d');
                            ctx.fillStyle = GREEN;
                            ctx.strokeStyle = GREEN;
                            ctx.lineWidth = 0.5;
                            testWrapper.insertBefore(canvas, testWrapper.firstChild);
                          } catch (error) {
                            console.log(error);
                          } // const centerX = canvas.width / 2;
                          // const centerY = canvas.height / 2;


                          if (faceBoard === 'faceboard') faceBgDraw = new _drawFaceBG__WEBPACK_IMPORTED_MODULE_9__.default(canvas, video);
                          faceDotDraw = new _drawFaceLine__WEBPACK_IMPORTED_MODULE_8__.drawFaceLine(canvas);
                          renderPrediction();
                        } //   let check = true;
                        //   setTimeout(() => {
                        //     if (!model) {
                        //       check = false;
                        //       cancelAnimationFrame(aniId);
                        //       if (
                        //         confirm(
                        //           '기기의 사양이 낮아 원활한 측정이 힘듭니다. 확인을 누르시면 이미지 측정 방식으로 전환합니다. 취소를 누르시면 그대로 진행합니다.',
                        //         )
                        //       ) {
                        //         check = false;
                        //         localStorage.setItem('isScanPossible', 'false');
                        //         headerWrapper.style.display = 'flex';
                        //         headerWrapper.style.opacity = '1';
                        //         testWrapper.style.opacity = '0';
                        //         tracks[0].stop();
                        //         canvas.remove();
                        //         video.style.display = 'none';
                        //         ML_Loading.style.display = 'none';
                        //         ImageUpload(faceBoard);
                        //         return;
                        //       } else check = true;
                        //     }
                        //   }, 15000);
                        //   if (!model) {
                        //     faceLandmarksDetection
                        //       .load(faceLandmarksDetection.SupportedPackages.mediapipeFacemesh, {
                        //         maxFaces: 1,
                        //       })
                        //       .then(data => {
                        //         if (check) {
                        //           model = data;
                        //           if (faceBoard != 'mask') {
                        //             headerWrapper.style.display = 'none';
                        //             headerWrapper.style.opacity = '0';
                        //             faceDotDraw = new drawFaceLine(canvas);
                        //           }
                        //           testWrapper.style.opacity = '1';
                        //           video.play();
                        //           video.style.display = 'block';
                        //           canvas.className = 'faceCanvas';
                        //           videoWidth = video.clientWidth;
                        //           canvas.width = videoWidth;
                        //           canvas.style.position = 'absolute';
                        //           canvas.style.transform = 'scale(-1,1)';
                        //           canvas.style.zIndex = ' 997';
                        //           canvas.style.left = '0';
                        //           if (typeArr[2]) {
                        //             videoHeight = 338;
                        //             canvas.height = 338;
                        //           } else {
                        //             videoHeight = video.clientHeight;
                        //             canvas.height = video.clientHeight;
                        //           }
                        //           ctx = canvas.getContext('2d')!;
                        //           ctx.fillStyle = GREEN;
                        //           ctx.strokeStyle = GREEN;
                        //           ctx.lineWidth = 0.5;
                        //           testWrapper.insertBefore(canvas, testWrapper.firstChild);
                        //           aniId = requestAnimationFrame(renderPrediction);
                        //         }
                        //       });
                        //   }
                        //   // await tf.setBackend(state.backend);
                        //   //   stats.showPanel(0);  // 0: fps, 1: ms, 2: mb, 3+: custom
                        //   //   document.body.appendChild(stats.dom);
                        //   // const centerX = canvas.width / 2;
                        //   // const centerY = canvas.height / 2;
                        //   return;
                        // }


                        return _context2.abrupt("return");

                      case 7:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));
              return _main.apply(this, arguments);
            };

            main = function _main2() {
              return _main.apply(this, arguments);
            };

            _renderPrediction = function _renderPrediction3() {
              _renderPrediction = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
                var srcObj, predictions, keypoints, videoWidthCalc, videoHeightCalc, positions, _store$getState$Color, selfColors, selfResult, colorRgb, mainColor, leftMask, rightMask;

                return C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        srcObj = video.srcObject;

                        if (srcObj.active) {
                          _context.next = 4;
                          break;
                        }

                        cancelAnimationFrame(aniId);
                        return _context.abrupt("return");

                      case 4:
                        _context.prev = 4;
                        _context.next = 7;
                        return model.estimateFaces({
                          input: video,
                          returnTensors: false,
                          flipHorizontal: false,
                          predictIrises: false
                        });

                      case 7:
                        predictions = _context.sent;
                        _context.next = 14;
                        break;

                      case 10:
                        _context.prev = 10;
                        _context.t0 = _context["catch"](4);
                        setTimeout(function () {
                          renderPrediction();
                        }, 300);
                        return _context.abrupt("return");

                      case 14:
                        ctx.clearRect(0, 0, canvas.width, canvas.height); // await context.drawImage(video, 0, 0, canvas.width, canvas.height)

                        if (isDetected) progress();else ML_Loading.style.display = 'none';

                        if (predictions.length > 0) {
                          keypoints = predictions[0].scaledMesh; // const boxPos = predictions[0].boundingBox;

                          videoWidthCalc = video.videoWidth / videoWidth;
                          videoHeightCalc = video.videoHeight / videoHeight; // positions.forEach((i,idx)=>{
                          //     ctx.fillStyle = "rgb(0,0,255)"
                          //     ctx.fillRect(i.x,i.y,1,1)
                          // })

                          positions = keypoints.map(function (i) {
                            //facemesh는 비디오의 client사이즈가아닌 video사이즈를 기준으로 포지션을 리턴한다.
                            //그래서 기기에 맞게 맞춰진 캔버스에는 맞지 않기 때문에 해당 비율로 전환해주는 작업을 거쳐야 한다.
                            return {
                              x: i[0] / videoWidthCalc,
                              y: i[1] / videoHeightCalc
                            };
                          });

                          if (faceBoard == 'scan') {
                            if (!isDetected) {
                              progress();
                              testExplain.innerHTML = "\uD37C\uC2A4\uB110\uCEEC\uB7EC \uCE21\uC815\uC744 \uC704\uD574 \uC5BC\uAD74\uC744 \uCD94\uCD9C \uC911\uC785\uB2C8\uB2E4.<br> <span style=\"color : #9b85d0;\">Tip : \uCD5C\uB300\uD55C \uBE5B\uC758 \uC601\uD5A5\uC744 \uBC1B\uC9C0 \uC54A\uB294 \uACF3\uC5D0\uC11C \uCE21\uC815\uD574\uBCF4\uC138\uC694!</span>";
                              if (faceDotDraw.draw(positions)) isDetected = true;
                            } // if (
                            //   positions[30].x < canvas.width / 2 &&
                            //   positions[30].x > canvas.width / 2 - 50 &&
                            //   positions[5].y < canvas.height / 2 + 100 &&
                            //   positions[5].y > canvas.height / 2 - 100
                            // ) {
                            //   testExplain.innerHTML = `피부색을 추출 중 입니다.<br> <span style="color : #9b85d0;">Tip : 최대한 빛의 영향을 받지 않는 곳에서 측정해보세요!</span>`;
                            //   faceDotDraw.draw(positions, true);
                            // } else {
                            //   testExplain.innerHTML = `얼굴을 정중앙에 위치시켜주세요.<br> <span style="color : #9b85d0;">Tip : 최대한 빛의 영향을 받지 않는 곳에서 측정해보세요!</span>`;
                            //   faceDotDraw.draw(positions);
                            // }
                            // const eyeLength = Math.abs(positions[4].y - positions[1].y)
                            // const rightCheek = positions[425]
                            // const leftCheek = { x: positions[205].x - eyeLength, y: positions[205].y }
                            // const leftUnderEye = positions[110]
                            // const rightUnderEye = positions[252]
                            // const jaw = positions[201]
                            // // await ctx.fillRect(leftCheek.x,leftCheek.y,-eyeLength, eyeLength/2)
                            // // await ctx.fillRect(rightCheek.x,rightCheek.y,eyeLength, eyeLength/2)
                            // // await ctx.fillRect(leftUnderEye.x,leftUnderEye.y,eyeLength, eyeLength/2)
                            // // await ctx.fillRect(rightUnderEye.x,rightUnderEye.y,eyeLength, eyeLength/2)
                            // // await ctx.fillRect(jaw.x,jaw.y,eyeLength, eyeLength/2)
                            // let leftEyeSum = new getColorData(leftUnderEye, eyeLength, context)
                            // let rightEyeSum = new getColorData(rightUnderEye, eyeLength, context)
                            // let leftCheekSum = new getColorData(leftCheek, eyeLength, context)
                            // let rightCheekSum = new getColorData(rightCheek, eyeLength, context)
                            // let jawSum = new getColorData(jaw, eyeLength, context)
                            // let eyeResult = await leftEyeSum.map((i, idx) => {
                            //     return (i + rightEyeSum[idx]) / 2
                            // })
                            // let cheekResult = await leftCheekSum.map((i, idx) => {
                            //     return (i + rightCheekSum[idx]) / 2
                            // })
                            // eyeColor.push(eyeResult)
                            // cheekColor.push(cheekResult)
                            // jawColor.push(jawSum)
                            // ctx.fillStyle = `rgb(${(eyeResult[0] + cheekResult[0] + jawSum[0]) / 3},${(eyeResult[1] + cheekResult[1] + jawSum[1]) / 3},${(eyeResult[2] + cheekResult[2] + jawSum[2]) / 3})`
                            // const rgbBox = (canvas.height + canvas.width) / 2 / 4
                            // ctx.fillRect(0, 0, rgbBox, rgbBox)

                          } else if (faceBoard == 'faceboard') {
                            testExplain.innerText = '피부톤이 정돈되며 이목구비가 또렷해보이는 색을 선택 해주세요.'; // const colorRgb = store.getState().ColorReducer.mainFaceBoardColor;

                            _store$getState$Color = _store__WEBPACK_IMPORTED_MODULE_3__.default.getState().ColorReducer, selfColors = _store$getState$Color.selfColors, selfResult = _store$getState$Color.selfResult;
                            colorRgb = selfColors[selfResult.length];
                            if (colorRgb) faceBgDraw.drawLoop(positions, colorRgb);
                          } else {
                            alert('13');

                            try {
                              testExplain.innerText = '하단의 마스크를 선택하여 필터를 적용해보세요';
                              mainColor = maskColor[_store__WEBPACK_IMPORTED_MODULE_3__.default.getState().ColorReducer.mainMaskColor];
                              leftMask = mainColor[0];
                              rightMask = mainColor[1];
                              new _MaskDraw__WEBPACK_IMPORTED_MODULE_2__.default(canvas, leftMask, rightMask, positions, typeArr[0], typeArr[1], typeArr[2]);
                            } catch (error) {
                              tracks[0].stop();
                            }
                          }

                          aniId = requestAnimationFrame(renderPrediction);
                        } else {
                          aniId = requestAnimationFrame(renderPrediction);
                          testExplain.innerHTML = "\uC5BC\uAD74\uC744 \uC778\uC2DD\uD560 \uC218 \uC788\uB3C4\uB85D \uCE74\uBA54\uB77C\uB97C \uBC14\uB77C\uBD10\uC8FC\uC138\uC694.<br> <span style=\"color : #9b85d0;\">Tip : \uCD5C\uB300\uD55C \uBE5B\uC758 \uC601\uD5A5\uC744 \uBC1B\uC9C0 \uC54A\uB294 \uACF3\uC5D0\uC11C \uCE21\uC815\uD574\uBCF4\uC138\uC694!</span>";
                        } // console.log(aniId);
                        //   stats.end();


                      case 17:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, null, [[4, 10]]);
              }));
              return _renderPrediction.apply(this, arguments);
            };

            renderPrediction = function _renderPrediction2() {
              return _renderPrediction.apply(this, arguments);
            };

            _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_10__.setBackend('webgl');
            video = document.getElementById('video');
            stream = video.srcObject; //비디오 스트림

            tracks = stream.getTracks(); //트랙
            // const bgPosArr = [
            //   117, 346, 195, 234, 454, 109, 338, 332, 251, 389, 356, 323, 288, 365, 400,
            //   176, 136, 58, 93, 127, 162, 21, 103, 67, 10, 297, 284, 361, 378, 379, 152,
            //   150, 149, 172, 132,
            // ];

            // if (
            //   video &&
            //   video.previousSibling &&
            //   video.previousSibling.nodeName == 'CANVAS'
            // )
            //   return;
            // const loading = document.getE lementById('loading');
            ML_Loading = document.getElementById('ML_Loading');
            ML_Loading.style.display = 'block'; // store.dispatch(actionCreators.setAniStop(false));
            // const state = {
            //   backend: 'webgl',
            //   maxFaces: 1,
            //   triangulateMesh: true,
            //   predictIrises: false,
            // };
            // const NUM_KEYPOINTS = 468;
            // const NUM_IRIS_KEYPOINTS = 5;
            // const RED = '#FF2C35';
            // const BLUE = '#157AB3';

            progressBar = document.getElementById('progressBar');
            percent = document.getElementById('progressPercent');
            progressContainer = document.getElementById('progressContainer');
            GREEN = '#32EEDB';
            testWrapper = document.getElementById('testWrapper');
            headerWrapper = document.getElementById('headerWrapper'); // const throttler = throttling();

            testExplain = document.getElementById('testExplain');
            canvas = document.getElementById('drawingCanvas'); // const colorSum = {};
            // const eyeColor = [];
            // const cheekColor = [];
            // const jawColor = [];

            progressCnt = 0;
            isDetected = false;
            typeArr = (0,_getDeviceType__WEBPACK_IMPORTED_MODULE_7__.default)();
            icon = new Image();
            icon.src = "".concat("", "/images/beforeCanvasTitle.png");
            icon2 = new Image();
            icon2.src = "".concat("", "/images/afterCanvasTitle.png");

            if (faceBoard == 'mask') {
              beige_left = new Image();
              beige_left.src = "".concat("", "/images/beige-left.png");
              beige_right = new Image();
              beige_right.src = "".concat("", "/images/beige-right.png");
              mint_left = new Image();
              mint_left.src = "".concat("", "/images/mint-left.png");
              mint_right = new Image();
              mint_right.src = "".concat("", "/images/mint-right.png");
              black_left = new Image();
              black_left.src = "".concat("", "/images/black-left.png");
              black_right = new Image();
              black_right.src = "".concat("", "/images/black-right.png");
              white_left = new Image();
              white_left.src = "".concat("", "/images/white-left.png");
              white_right = new Image();
              white_right.src = "".concat("", "/images/white-right.png");
              purple_left = new Image();
              purple_left.src = "".concat("", "/images/purple-left.png");
              purple_right = new Image();
              purple_right.src = "".concat("", "/images/purple-right.png");
              pink_left = new Image();
              pink_left.src = "".concat("", "/images/pink-left.png");
              pink_right = new Image();
              pink_right.src = "".concat("", "/images/pink-right.png");
              maskColor = {
                white: [white_left, white_right],
                black: [black_left, black_right],
                pink: [pink_left, pink_right],
                purple: [purple_left, purple_right],
                beige: [beige_left, beige_right],
                mint: [mint_left, mint_right]
              };

              maskColor[_store__WEBPACK_IMPORTED_MODULE_3__.default.getState().ColorReducer.mainMaskColor][1].onload = function () {
                return main();
              };
            } else if (faceBoard == 'faceboard') {
              sessionStorage.setItem('colorSelect', '0');
              _store__WEBPACK_IMPORTED_MODULE_3__.default.dispatch(_store_colorStore__WEBPACK_IMPORTED_MODULE_4__.actionCreators.setScanStart(true));
              main();
            } else main(); // if (renderPointcloud) {
            //   state.renderPointcloud = true;
            // }
            // async function setupCamera(): Promise<HTMLVideoElement> {
            //   return new Promise(resolve => {
            //     video.onloadedmetadata = () => {
            //       resolve(video);
            //     };
            //   });
            // }


          case 27:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _StreamCanvas.apply(this, arguments);
}

_c = StreamCanvas;

var _c, _c2;

$RefreshReg$(_c, "StreamCanvas");
$RefreshReg$(_c2, "StreamCanvas");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL1N0cmVhbUNhbnZhcy50cyJdLCJuYW1lcyI6WyJTdHJlYW1DYW52YXMiLCJmYWNlQm9hcmQiLCJyZW5kZXJQcmVkaWN0aW9uIiwibWFpbiIsInByb2dyZXNzIiwiYWRkIiwiTWF0aCIsInJhbmRvbSIsInByb2dyZXNzQ250IiwicHJvZ3Jlc3NDb250YWluZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJwcm9ncmVzc0JhciIsIndpZHRoIiwidG9GaXhlZCIsInBlcmNlbnQiLCJpbm5lclRleHQiLCJjaGVjayIsIm1vZGVsIiwiZmFjZUxhbmRtYXJrc0RldGVjdGlvbiIsIm1heEZhY2VzIiwiaGVhZGVyV3JhcHBlciIsIm9wYWNpdHkiLCJ0ZXN0V3JhcHBlciIsInZpZGVvIiwicGxheSIsInZpZGVvV2lkdGgiLCJjbGllbnRXaWR0aCIsImNhbnZhcyIsInR5cGVBcnIiLCJ2aWRlb0hlaWdodCIsImhlaWdodCIsImNsaWVudEhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJmaWxsU3R5bGUiLCJHUkVFTiIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImZhY2VCZ0RyYXciLCJkcmF3RmFjZUJHIiwiZmFjZURvdERyYXciLCJkcmF3RmFjZUxpbmUiLCJzcmNPYmoiLCJzcmNPYmplY3QiLCJhY3RpdmUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImFuaUlkIiwiZXN0aW1hdGVGYWNlcyIsImlucHV0IiwicmV0dXJuVGVuc29ycyIsImZsaXBIb3Jpem9udGFsIiwicHJlZGljdElyaXNlcyIsInByZWRpY3Rpb25zIiwic2V0VGltZW91dCIsImNsZWFyUmVjdCIsImlzRGV0ZWN0ZWQiLCJNTF9Mb2FkaW5nIiwibGVuZ3RoIiwia2V5cG9pbnRzIiwic2NhbGVkTWVzaCIsInZpZGVvV2lkdGhDYWxjIiwidmlkZW9IZWlnaHRDYWxjIiwicG9zaXRpb25zIiwibWFwIiwiaSIsIngiLCJ5IiwidGVzdEV4cGxhaW4iLCJpbm5lckhUTUwiLCJkcmF3Iiwic3RvcmUiLCJDb2xvclJlZHVjZXIiLCJzZWxmQ29sb3JzIiwic2VsZlJlc3VsdCIsImNvbG9yUmdiIiwiZHJhd0xvb3AiLCJhbGVydCIsIm1haW5Db2xvciIsIm1hc2tDb2xvciIsIm1haW5NYXNrQ29sb3IiLCJsZWZ0TWFzayIsInJpZ2h0TWFzayIsIk1hc2tEcmF3IiwidHJhY2tzIiwic3RvcCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInRmIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0cmVhbSIsImdldFRyYWNrcyIsImdldERldmljZVR5cGUiLCJpY29uIiwiSW1hZ2UiLCJzcmMiLCJwcm9jZXNzIiwiaWNvbjIiLCJiZWlnZV9sZWZ0IiwiYmVpZ2VfcmlnaHQiLCJtaW50X2xlZnQiLCJtaW50X3JpZ2h0IiwiYmxhY2tfbGVmdCIsImJsYWNrX3JpZ2h0Iiwid2hpdGVfbGVmdCIsIndoaXRlX3JpZ2h0IiwicHVycGxlX2xlZnQiLCJwdXJwbGVfcmlnaHQiLCJwaW5rX2xlZnQiLCJwaW5rX3JpZ2h0Iiwid2hpdGUiLCJibGFjayIsInBpbmsiLCJwdXJwbGUiLCJiZWlnZSIsIm1pbnQiLCJvbmxvYWQiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJhY3Rpb25DcmVhdG9ycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7Q0FFQTtBQUNBOztBQUNBO0FBQ0E7Q0FFQTs7QUFNZSxTQUFlQSxZQUE5QjtBQUFBO0FBQUEsQyxDQStaQTs7TUEvWjhCQSxZOzs7c1ZBQWYsa0JBQTRCQyxTQUE1QjtBQUFBLCtaQXdIRUMsZ0JBeEhGLHFCQWdRRUMsSUFoUUYsU0FxWkpDLFFBclpJOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBcVpKQSxvQkFyWkksd0JBcVpPO0FBQ2xCLGtCQUFNQyxHQUFHLEdBQUdDLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixDQUE1QjtBQUNBQyx5QkFBVyxJQUFJSCxHQUFmO0FBQ0Esa0JBQUlHLFdBQVcsR0FBRyxHQUFsQixFQUF1QkEsV0FBVyxHQUFHLEdBQWQ7QUFDdkJDLCtCQUFpQixDQUFDQyxLQUFsQixDQUF3QkMsT0FBeEIsR0FBa0MsYUFBbEM7QUFDQUMseUJBQVcsQ0FBQ0YsS0FBWixDQUFrQkcsS0FBbEIsR0FBMEJMLFdBQVcsQ0FBQ00sT0FBWixDQUFvQixDQUFwQixJQUF5QixHQUFuRDtBQUNBQyxxQkFBTyxDQUFDQyxTQUFSLEdBQW9CUixXQUFXLENBQUNNLE9BQVosQ0FBb0IsQ0FBcEIsSUFBeUIsR0FBN0M7QUFDRCxhQTVaWTs7QUFBQTtBQUFBLDBWQWdRYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUUcsNkJBRFIsR0FDZ0IsSUFEaEIsRUFFRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXhCRiw0QkEwQk9DLEtBMUJQO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsK0JBMkJrQkMsNkVBQUEsQ0FDWkEsNEdBRFksRUFFWjtBQUFFQyxrQ0FBUSxFQUFFO0FBQVoseUJBRlksQ0EzQmxCOztBQUFBO0FBMkJJRiw2QkEzQko7O0FBQUE7QUFnQ0UsNEJBQUlELEtBQUosRUFBVztBQUNULDhCQUFJaEIsU0FBUyxJQUFJLE1BQWpCLEVBQXlCO0FBQ3ZCb0IseUNBQWEsQ0FBQ1gsS0FBZCxDQUFvQkMsT0FBcEIsR0FBOEIsTUFBOUI7QUFDQVUseUNBQWEsQ0FBQ1gsS0FBZCxDQUFvQlksT0FBcEIsR0FBOEIsR0FBOUI7QUFDRCwyQkFKUSxDQU1UO0FBQ0E7QUFDQTs7O0FBQ0EsOEJBQUk7QUFDRkMsdUNBQVcsQ0FBQ2IsS0FBWixDQUFrQlksT0FBbEIsR0FBNEIsR0FBNUI7QUFFQUUsaUNBQUssQ0FBQ0MsSUFBTjtBQUNBRCxpQ0FBSyxDQUFDZCxLQUFOLENBQVlDLE9BQVosR0FBc0IsT0FBdEI7QUFDQWUsc0NBQVUsR0FBR0YsS0FBSyxDQUFDRyxXQUFuQjtBQUNBQyxrQ0FBTSxDQUFDZixLQUFQLEdBQWVhLFVBQWY7O0FBRUEsZ0NBQUlHLE9BQU8sQ0FBQyxDQUFELENBQVgsRUFBZ0I7QUFDZEMseUNBQVcsR0FBRyxHQUFkO0FBQ0FGLG9DQUFNLENBQUNHLE1BQVAsR0FBZ0IsR0FBaEI7QUFDRCw2QkFIRCxNQUdPO0FBQ0xELHlDQUFXLEdBQUdOLEtBQUssQ0FBQ1EsWUFBcEI7QUFDQUosb0NBQU0sQ0FBQ0csTUFBUCxHQUFnQlAsS0FBSyxDQUFDUSxZQUF0QjtBQUNEOztBQUVEQywrQkFBRyxHQUFHTCxNQUFNLENBQUNNLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBTjtBQUNBRCwrQkFBRyxDQUFDRSxTQUFKLEdBQWdCQyxLQUFoQjtBQUNBSCwrQkFBRyxDQUFDSSxXQUFKLEdBQWtCRCxLQUFsQjtBQUNBSCwrQkFBRyxDQUFDSyxTQUFKLEdBQWdCLEdBQWhCO0FBQ0FmLHVDQUFXLENBQUNnQixZQUFaLENBQXlCWCxNQUF6QixFQUFpQ0wsV0FBVyxDQUFDaUIsVUFBN0M7QUFDRCwyQkFyQkQsQ0FxQkUsT0FBT0MsS0FBUCxFQUFjO0FBQ2RDLG1DQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNELDJCQWhDUSxDQWlDVDtBQUNBOzs7QUFDQSw4QkFBSXhDLFNBQVMsS0FBSyxXQUFsQixFQUErQjJDLFVBQVUsR0FBRyxJQUFJQyxnREFBSixDQUFlakIsTUFBZixFQUF1QkosS0FBdkIsQ0FBYjtBQUMvQnNCLHFDQUFXLEdBQUcsSUFBSUMsdURBQUosQ0FBaUJuQixNQUFqQixDQUFkO0FBQ0ExQiwwQ0FBZ0I7QUFDakIseUJBdEVILENBdUVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7QUFsSkY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFoUWE7QUFBQTtBQUFBOztBQWdRRUMsZ0JBaFFGO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHNXQXdIYjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1E2Qyw4QkFEUixHQUNzQnhCLEtBQUssQ0FBRXlCLFNBRDdCOztBQUFBLDRCQUVPRCxNQUFNLENBQUNFLE1BRmQ7QUFBQTtBQUFBO0FBQUE7O0FBR0lDLDRDQUFvQixDQUFDQyxLQUFELENBQXBCO0FBSEo7O0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBUXdCbEMsS0FBSyxDQUFDbUMsYUFBTixDQUFvQjtBQUN0Q0MsK0JBQUssRUFBRTlCLEtBRCtCO0FBRXRDK0IsdUNBQWEsRUFBRSxLQUZ1QjtBQUd0Q0Msd0NBQWMsRUFBRSxLQUhzQjtBQUl0Q0MsdUNBQWEsRUFBRTtBQUp1Qix5QkFBcEIsQ0FSeEI7O0FBQUE7QUFRSUMsbUNBUko7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWVJQyxrQ0FBVSxDQUFDLFlBQU07QUFDZnpELDBDQUFnQjtBQUNqQix5QkFGUyxFQUVQLEdBRk8sQ0FBVjtBQWZKOztBQUFBO0FBb0JFK0IsMkJBQUcsQ0FBQzJCLFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CaEMsTUFBTSxDQUFDZixLQUEzQixFQUFrQ2UsTUFBTSxDQUFDRyxNQUF6QyxFQXBCRixDQXFCRTs7QUFDQSw0QkFBSThCLFVBQUosRUFBZ0J6RCxRQUFRLEdBQXhCLEtBQ0swRCxVQUFVLENBQUNwRCxLQUFYLENBQWlCQyxPQUFqQixHQUEyQixNQUEzQjs7QUFDTCw0QkFBSStDLFdBQVcsQ0FBQ0ssTUFBWixHQUFxQixDQUF6QixFQUE0QjtBQUNwQkMsbUNBRG9CLEdBQ1JOLFdBQVcsQ0FBQyxDQUFELENBQVgsQ0FBZU8sVUFEUCxFQUUxQjs7QUFDTUMsd0NBSG9CLEdBR0gxQyxLQUFLLENBQUNFLFVBQU4sR0FBbUJBLFVBSGhCO0FBSXBCeUMseUNBSm9CLEdBSUYzQyxLQUFLLENBQUNNLFdBQU4sR0FBb0JBLFdBSmxCLEVBTTFCO0FBQ0E7QUFDQTtBQUNBOztBQUNNc0MsbUNBVm9CLEdBVVJKLFNBQVMsQ0FBQ0ssR0FBVixDQUFjLFVBQUNDLENBQUQsRUFBaUI7QUFDL0M7QUFDQTtBQUNBLG1DQUFPO0FBQ0xDLCtCQUFDLEVBQUVELENBQUMsQ0FBQyxDQUFELENBQUQsR0FBT0osY0FETDtBQUVMTSwrQkFBQyxFQUFFRixDQUFDLENBQUMsQ0FBRCxDQUFELEdBQU9IO0FBRkwsNkJBQVA7QUFJRCwyQkFQaUIsQ0FWUTs7QUFrQjFCLDhCQUFJbEUsU0FBUyxJQUFJLE1BQWpCLEVBQXlCO0FBQ3ZCLGdDQUFJLENBQUM0RCxVQUFMLEVBQWlCO0FBQ2Z6RCxzQ0FBUTtBQUNScUUseUNBQVcsQ0FBQ0MsU0FBWjtBQUNBLGtDQUFJNUIsV0FBVyxDQUFDNkIsSUFBWixDQUFpQlAsU0FBakIsQ0FBSixFQUFpQ1AsVUFBVSxHQUFHLElBQWI7QUFDbEMsNkJBTHNCLENBTXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBOztBQUNELDJCQXhERCxNQXdETyxJQUFJNUQsU0FBUyxJQUFJLFdBQWpCLEVBQThCO0FBQ25Dd0UsdUNBQVcsQ0FBQ3pELFNBQVosR0FDRSxvQ0FERixDQURtQyxDQUduQzs7QUFIbUMsb0RBSUE0RCxvREFBQSxHQUFpQkMsWUFKakIsRUFJM0JDLFVBSjJCLHlCQUkzQkEsVUFKMkIsRUFJZkMsVUFKZSx5QkFJZkEsVUFKZTtBQUs3QkMsb0NBTDZCLEdBS2xCRixVQUFVLENBQUNDLFVBQVUsQ0FBQ2hCLE1BQVosQ0FMUTtBQU1uQyxnQ0FBSWlCLFFBQUosRUFBY3BDLFVBQVUsQ0FBQ3FDLFFBQVgsQ0FBb0JiLFNBQXBCLEVBQStCWSxRQUEvQjtBQUNmLDJCQVBNLE1BT0E7QUFDTEUsaUNBQUssQ0FBQyxJQUFELENBQUw7O0FBQ0EsZ0NBQUk7QUFDRlQseUNBQVcsQ0FBQ3pELFNBQVosR0FDRSwwQkFERjtBQUVNbUUsdUNBSEosR0FJQUMsU0FBUyxDQUFDUixvREFBQSxHQUFpQkMsWUFBakIsQ0FBOEJRLGFBQS9CLENBSlQ7QUFLSUMsc0NBTEosR0FLZUgsU0FBUyxDQUFDLENBQUQsQ0FMeEI7QUFNSUksdUNBTkosR0FNZ0JKLFNBQVMsQ0FBQyxDQUFELENBTnpCO0FBT0Ysa0NBQUlLLDhDQUFKLENBQ0U1RCxNQURGLEVBRUUwRCxRQUZGLEVBR0VDLFNBSEYsRUFJRW5CLFNBSkYsRUFLRXZDLE9BQU8sQ0FBQyxDQUFELENBTFQsRUFNRUEsT0FBTyxDQUFDLENBQUQsQ0FOVCxFQU9FQSxPQUFPLENBQUMsQ0FBRCxDQVBUO0FBU0QsNkJBaEJELENBZ0JFLE9BQU9ZLEtBQVAsRUFBYztBQUNkZ0Qsb0NBQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUMsSUFBVjtBQUNEO0FBQ0Y7O0FBQ0R0QywrQkFBSyxHQUFHdUMscUJBQXFCLENBQUN6RixnQkFBRCxDQUE3QjtBQUNELHlCQXhHRCxNQXdHTztBQUNMa0QsK0JBQUssR0FBR3VDLHFCQUFxQixDQUFDekYsZ0JBQUQsQ0FBN0I7QUFDQXVFLHFDQUFXLENBQUNDLFNBQVo7QUFDRCx5QkFuSUgsQ0FvSUU7QUFDQTs7O0FBcklGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBeEhhO0FBQUE7QUFBQTs7QUF3SEV4RSw0QkF4SEY7QUFBQTtBQUFBOztBQUNiMEYsMEVBQUEsQ0FBYyxPQUFkO0FBSU1wRSxpQkFMTyxHQUtDcUUsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLENBTEQ7QUFNUEMsa0JBTk8sR0FNRXZFLEtBQUssQ0FBRXlCLFNBTlQsRUFNbUM7O0FBQzFDd0Msa0JBUE8sR0FPRU0sTUFBTSxDQUFFQyxTQUFSLEVBUEYsRUFPdUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNNbEMsc0JBeEJPLEdBd0JNK0IsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBeEJOO0FBeUJiaEMsc0JBQVUsQ0FBQ3BELEtBQVgsQ0FBaUJDLE9BQWpCLEdBQTJCLE9BQTNCLENBekJhLENBMkJiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ01DLHVCQXZDTyxHQXVDT2lGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixDQXZDUDtBQXdDUC9FLG1CQXhDTyxHQXdDRzhFLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixpQkFBeEIsQ0F4Q0g7QUF5Q1ByRiw2QkF6Q08sR0F5Q2FvRixRQUFRLENBQUNDLGNBQVQsQ0FDeEIsbUJBRHdCLENBekNiO0FBNENQMUQsaUJBNUNPLEdBNENDLFNBNUNEO0FBNkNQYix1QkE3Q08sR0E2Q09zRSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0E3Q1A7QUE4Q1B6RSx5QkE5Q08sR0E4Q1N3RSxRQUFRLENBQUNDLGNBQVQsQ0FDcEIsZUFEb0IsQ0E5Q1QsRUFrRGI7O0FBQ01yQix1QkFuRE8sR0FtRE9vQixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FuRFA7QUFvRFBsRSxrQkFwRE8sR0FvREVpRSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZUFBeEIsQ0FwREYsRUFxRGI7QUFDQTtBQUNBO0FBQ0E7O0FBRUl0Rix1QkExRFMsR0EwREssQ0ExREw7QUEyRFRxRCxzQkEzRFMsR0EyREksS0EzREo7QUE0RFBoQyxtQkE1RE8sR0E0REdvRSx1REFBYSxFQTVEaEI7QUE2RFBDLGdCQTdETyxHQTZEQSxJQUFJQyxLQUFKLEVBN0RBO0FBOERiRCxnQkFBSSxDQUFDRSxHQUFMLGFBQWNDLEVBQWQ7QUFDTUMsaUJBL0RPLEdBK0RDLElBQUlILEtBQUosRUEvREQ7QUFnRWJHLGlCQUFLLENBQUNGLEdBQU4sYUFBZUMsRUFBZjs7QUFDQSxnQkFBSXBHLFNBQVMsSUFBSSxNQUFqQixFQUF5QjtBQUNqQnNHLHdCQURpQixHQUNKLElBQUlKLEtBQUosRUFESTtBQUV2Qkksd0JBQVUsQ0FBQ0gsR0FBWCxhQUFvQkMsRUFBcEI7QUFDTUcseUJBSGlCLEdBR0gsSUFBSUwsS0FBSixFQUhHO0FBSXZCSyx5QkFBVyxDQUFDSixHQUFaLGFBQXFCQyxFQUFyQjtBQUNNSSx1QkFMaUIsR0FLTCxJQUFJTixLQUFKLEVBTEs7QUFNdkJNLHVCQUFTLENBQUNMLEdBQVYsYUFBbUJDLEVBQW5CO0FBQ01LLHdCQVBpQixHQU9KLElBQUlQLEtBQUosRUFQSTtBQVF2Qk8sd0JBQVUsQ0FBQ04sR0FBWCxhQUFvQkMsRUFBcEI7QUFDTU0sd0JBVGlCLEdBU0osSUFBSVIsS0FBSixFQVRJO0FBVXZCUSx3QkFBVSxDQUFDUCxHQUFYLGFBQW9CQyxFQUFwQjtBQUNNTyx5QkFYaUIsR0FXSCxJQUFJVCxLQUFKLEVBWEc7QUFZdkJTLHlCQUFXLENBQUNSLEdBQVosYUFBcUJDLEVBQXJCO0FBQ01RLHdCQWJpQixHQWFKLElBQUlWLEtBQUosRUFiSTtBQWN2QlUsd0JBQVUsQ0FBQ1QsR0FBWCxhQUFvQkMsRUFBcEI7QUFDTVMseUJBZmlCLEdBZUgsSUFBSVgsS0FBSixFQWZHO0FBZ0J2QlcseUJBQVcsQ0FBQ1YsR0FBWixhQUFxQkMsRUFBckI7QUFDTVUseUJBakJpQixHQWlCSCxJQUFJWixLQUFKLEVBakJHO0FBa0J2QlkseUJBQVcsQ0FBQ1gsR0FBWixhQUFxQkMsRUFBckI7QUFDTVcsMEJBbkJpQixHQW1CRixJQUFJYixLQUFKLEVBbkJFO0FBb0J2QmEsMEJBQVksQ0FBQ1osR0FBYixhQUFzQkMsRUFBdEI7QUFDTVksdUJBckJpQixHQXFCTCxJQUFJZCxLQUFKLEVBckJLO0FBc0J2QmMsdUJBQVMsQ0FBQ2IsR0FBVixhQUFtQkMsRUFBbkI7QUFDTWEsd0JBdkJpQixHQXVCSixJQUFJZixLQUFKLEVBdkJJO0FBd0J2QmUsd0JBQVUsQ0FBQ2QsR0FBWCxhQUFvQkMsRUFBcEI7QUFFQWpCLHVCQUFTLEdBQUc7QUFDVitCLHFCQUFLLEVBQUUsQ0FBQ04sVUFBRCxFQUFhQyxXQUFiLENBREc7QUFFVk0scUJBQUssRUFBRSxDQUFDVCxVQUFELEVBQWFDLFdBQWIsQ0FGRztBQUdWUyxvQkFBSSxFQUFFLENBQUNKLFNBQUQsRUFBWUMsVUFBWixDQUhJO0FBSVZJLHNCQUFNLEVBQUUsQ0FBQ1AsV0FBRCxFQUFjQyxZQUFkLENBSkU7QUFLVk8scUJBQUssRUFBRSxDQUFDaEIsVUFBRCxFQUFhQyxXQUFiLENBTEc7QUFNVmdCLG9CQUFJLEVBQUUsQ0FBQ2YsU0FBRCxFQUFZQyxVQUFaO0FBTkksZUFBWjs7QUFTQXRCLHVCQUFTLENBQUNSLG9EQUFBLEdBQWlCQyxZQUFqQixDQUE4QlEsYUFBL0IsQ0FBVCxDQUF3RCxDQUF4RCxFQUEyRG9DLE1BQTNELEdBQW9FO0FBQUEsdUJBQ2xFdEgsSUFBSSxFQUQ4RDtBQUFBLGVBQXBFO0FBRUQsYUFyQ0QsTUFxQ08sSUFBSUYsU0FBUyxJQUFJLFdBQWpCLEVBQThCO0FBQ25DeUgsNEJBQWMsQ0FBQ0MsT0FBZixDQUF1QixhQUF2QixFQUFzQyxHQUF0QztBQUNBL0Msa0VBQUEsQ0FBZWdELDBFQUFBLENBQTRCLElBQTVCLENBQWY7QUFDQXpILGtCQUFJO0FBQ0wsYUFKTSxNQUlBQSxJQUFJLEdBMUdFLENBNEdiO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUF0SGE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztLQUFlSCxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tzZWFzb25dLjExNzMxNjgzODI5YmRiMjVhZTVkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyB0aHJvdHRsaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMvdGhyb3R0bGluZyc7XHJcbi8vIC8vIGltcG9ydCAqIGFzIGZhY2VhcGkgZnJvbSAnLi4vLi4vdXRpbHMvZmFjZS1hcGknXHJcbi8vIGltcG9ydCBGYWNlQm9hcmQgZnJvbSAnLi9GYWNlQm9hcmQnO1xyXG4vLyBpbXBvcnQgZ2V0Q29sb3JEYXRhIGZyb20gJy4vZ2V0Q29sb3JEYXRhJztcclxuLy8gaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuLy8gaW1wb3J0IGNvbG9yQXZnIGZyb20gJy4vY29sb3JBdmcnO1xyXG4vLyBpbXBvcnQgc3RvcmUgZnJvbSAnLi4vLi4vc3RvcmUnO1xyXG5cclxuLy8gLy8gY29uc3QgdGhyb3R0bGVyID0gdGhyb3R0bGluZygpXHJcbi8vIC8vIGV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIFN0cmVhbUNhbnZhcyhmYWNlQm9hcmQpIHtcclxuLy8gLy8gICAgIGxldCBjYW52YXM7XHJcbi8vIC8vICAgICBsZXQgdmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlkZW8nKVxyXG4vLyAvLyAgICAgaWYgKCF2aWRlb3x8KHZpZGVvLnByZXZpb3VzU2libGluZyYmdmlkZW8ucHJldmlvdXNTaWJsaW5nLm5vZGVOYW1lPT1cIkNBTlZBU1wiKSkgcmV0dXJuXHJcbi8vIC8vICAgICBsZXQgbG9hZGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGluZ1wiKVxyXG4vLyAvLyAgICAgbGV0IHByb2dyZXNzQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9ncmVzc0JhclwiKVxyXG4vLyAvLyAgICAgbGV0IHBlcmNlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2dyZXNzUGVyY2VudFwiKVxyXG4vLyAvLyAgICAgbGV0IHByb2dyZXNzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9ncmVzc0NvbnRhaW5lclwiKVxyXG4vLyAvLyAgICAgbGV0IHRlc3RFeHBsYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXN0RXhwbGFpblwiKVxyXG4vLyAvLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJXcmFwcGVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxyXG4vLyAvLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXN0V3JhcHBlclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXHJcbi8vIC8vICAgICB2aWRlby5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXHJcbi8vIC8vICAgICBsb2FkaW5nLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbi8vIC8vICAgICB2aWRlby5wbGF5KClcclxuLy8gLy8gICAgIGxldCBpbnRlcnZhbDtcclxuLy8gLy8gICAgIHRyeSB7XHJcbi8vIC8vICAgICAgICAgY2FudmFzID0gZmFjZWFwaS5jcmVhdGVDYW52YXNGcm9tTWVkaWEodmlkZW8pXHJcblxyXG4vLyAvLyAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gLy8gICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuLy8gLy8gICAgICAgICAgICAgU3RyZWFtQ2FudmFzKGZhY2VCb2FyZClcclxuLy8gLy8gICAgICAgICB9LCA1MDApO1xyXG4vLyAvLyAgICAgICAgIHJldHVyblxyXG4vLyAvLyAgICAgfVxyXG4vLyAvLyAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWRpbmcnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG4vLyAvLyAgICAgY2FudmFzLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiXHJcbi8vIC8vICAgICBjYW52YXMuc3R5bGUuekluZGV4ID0gXCI5OThcIlxyXG4vLyAvLyAgICAgY2FudmFzLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoLTEsMSlcIlxyXG4vLyAvLyAgICAgY2FudmFzLmNsYXNzTmFtZSA9IFwiZmFjZUNhbnZhc1wiXHJcbi8vIC8vICAgICB2aWRlby5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjYW52YXMsIHZpZGVvKVxyXG4vLyAvLyAgICAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuLy8gLy8gICAgIGxldCBjYW1DYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpXHJcbi8vIC8vICAgICBjYW1DYW52YXMuY2xhc3NOYW1lID0gXCJmYWNlQ2FudmFzXCJcclxuLy8gLy8gICAgIGNhbUNhbnZhcy53aWR0aCA9IHZpZGVvLmNsaWVudFdpZHRoXHJcbi8vIC8vICAgICBjYW1DYW52YXMuaGVpZ2h0ID0gdmlkZW8uY2xpZW50SGVpZ2h0XHJcbi8vIC8vICAgICBjYW1DYW52YXMuc3R5bGUuekluZGV4ID0gXCI5OThcIlxyXG4vLyAvLyAgICAgY2FtQ2FudmFzLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoLTEsMSlcIlxyXG4vLyAvLyAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluQ2FtXCIpLmFwcGVuZENoaWxkKGNhbUNhbnZhcylcclxuLy8gLy8gICAgIGxldCBjb250ZXh0ID0gY2FtQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbi8vIC8vICAgICBjb25zdCBkaXNwbGF5U2l6ZSA9IHsgd2lkdGg6IHZpZGVvLmNsaWVudFdpZHRoLCBoZWlnaHQ6IHZpZGVvLmNsaWVudEhlaWdodCB9XHJcbi8vIC8vICAgICBmYWNlYXBpLm1hdGNoRGltZW5zaW9ucyhjYW52YXMsIGRpc3BsYXlTaXplKVxyXG4vLyAvLyAgICAgbGV0IGNudCA9IDA7XHJcbi8vIC8vICAgICBsZXQgY29sb3JTdW0gPSB7fVxyXG4vLyAvLyAgICAgbGV0IGV5ZUNvbG9yID0gW11cclxuLy8gLy8gICAgIGxldCBjaGVla0NvbG9yID0gW11cclxuLy8gLy8gICAgIGxldCBqYXdDb2xvciA9IFtdXHJcbi8vIC8vICAgICBsZXQgYW5pO1xyXG4vLyAvLyAgICAgYW5pID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRlc3QpXHJcbi8vIC8vICAgICBsZXQgbGVmdE1hc2sgPSBuZXcgSW1hZ2UoKVxyXG4vLyAvLyAgICAgbGVmdE1hc2suc3JjID0gYCR7cHJvY2Vzcy5lbnYuUEFUSH0vaW1hZ2VzL2xlZnRNYXNrLnBuZ2BcclxuLy8gLy8gICAgIGxldCByaWdodE1hc2sgPSBuZXcgSW1hZ2UoKVxyXG4vLyAvLyAgICAgcmlnaHRNYXNrLnNyYyA9IGAke3Byb2Nlc3MuZW52LlBBVEh9L2ltYWdlcy9yaWdodE1hc2sucG5nYFxyXG4vLyAvLyAgICAgYXN5bmMgZnVuY3Rpb24gdGVzdCgpIHtcclxuLy8gLy8gICAgICAgICBjb25zdCBkZXRlY3Rpb25zID0gYXdhaXQgZmFjZWFwaS5kZXRlY3RTaW5nbGVGYWNlKHZpZGVvLCBuZXcgZmFjZWFwaS5UaW55RmFjZURldGVjdG9yT3B0aW9ucygpKS53aXRoRmFjZUxhbmRtYXJrcyh0cnVlKSAvL3ZpZGVvIOy6oeyzkOuzuCDslrzqtbTsnbjsi50g7KCV67O0ICDsgqzsnbTspojrpbwg66ee7LaU6riwIOyghOydtOq4sOuVjOusuOyXkCDsooztkZzqsJLsnbQg64uk66W064ukXHJcbi8vIC8vICAgICAgICAgbGV0IHJlc2l6ZWREZXRlY3Rpb25zXHJcbi8vIC8vICAgICAgICAgbG9hZGluZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbi8vIC8vICAgICAgICAgaWYgKGRldGVjdGlvbnMpIHtcclxuXHJcbi8vIC8vICAgICAgICAgICAgIGNudCsrXHJcblxyXG4vLyAvLyAgICAgICAgICAgICAvLyBpZiAoY250ID09IDMxICYmICFmYWNlQm9hcmQpIHtcclxuLy8gLy8gICAgICAgICAgICAgLy8gICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXHJcbi8vIC8vICAgICAgICAgICAgIC8vICAgICBjYW52YXMucmVtb3ZlKClcclxuLy8gLy8gICAgICAgICAgICAgLy8gICAgIGNvbG9yU3VtLmV5ZSA9IGV5ZUNvbG9yLnJlZHVjZSgoYSwgYikgPT4ge1xyXG4vLyAvLyAgICAgICAgICAgICAvLyAgICAgICAgIHJldHVybiBbYVswXSArIGJbMF0sIGFbMV0gKyBiWzFdLCBhWzJdICsgYlsyXV1cclxuLy8gLy8gICAgICAgICAgICAgLy8gICAgIH0pXHJcbi8vIC8vICAgICAgICAgICAgIC8vICAgICBjb2xvclN1bS5jaGVlayA9IGNoZWVrQ29sb3IucmVkdWNlKChhLCBiKSA9PiB7XHJcbi8vIC8vICAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuIFthWzBdICsgYlswXSwgYVsxXSArIGJbMV0sIGFbMl0gKyBiWzJdXVxyXG4vLyAvLyAgICAgICAgICAgICAvLyAgICAgfSlcclxuLy8gLy8gICAgICAgICAgICAgLy8gICAgIGNvbG9yU3VtLmphdyA9IGphd0NvbG9yLnJlZHVjZSgoYSwgYikgPT4ge1xyXG4vLyAvLyAgICAgICAgICAgICAvLyAgICAgICAgIHJldHVybiBbYVswXSArIGJbMF0sIGFbMV0gKyBiWzFdLCBhWzJdICsgYlsyXV1cclxuLy8gLy8gICAgICAgICAgICAgLy8gICAgIH0pXHJcbi8vIC8vICAgICAgICAgICAgIC8vICAgICBmb3IgKGxldCBrZXkgaW4gY29sb3JTdW0pIHtcclxuLy8gLy8gICAgICAgICAgICAgLy8gICAgICAgICBjb2xvclN1bVtrZXldID0gY29sb3JTdW1ba2V5XS5tYXAoaSA9PiBpIC8gMzApXHJcbi8vIC8vICAgICAgICAgICAgIC8vICAgICB9XHJcbi8vIC8vICAgICAgICAgICAgIC8vICAgICB0aHJvdHRsZXIudGhyb3R0bGUoKCkgPT4ge1xyXG4vLyAvLyAgICAgICAgICAgICAvLyAgICAgICAgIGF4aW9zLnBvc3QoJ2h0dHBzOi8vdGVuc29yLXNlcnZlci5oZXJva3VhcHAuY29tL2dldFNlYXNvbicsIGNvbG9yU3VtKVxyXG4vLyAvLyAgICAgICAgICAgICAvLyAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbi8vIC8vICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJlcy5kYXRhKS5jbGljaygpXHJcbi8vIC8vICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbnN0IHN0cmVhbSA9IHZpZGVvLnNyY09iamVjdDsgLy/ruYTrlJTsmKQg7Iqk7Yq466a8XHJcbi8vIC8vICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbnN0IHRyYWNrcyA9IHN0cmVhbS5nZXRUcmFja3MoKTsgLy/tirjrnplcclxuLy8gLy8gICAgICAgICAgICAgLy8gICAgICAgICAgICAgdHJhY2tzWzBdLnN0b3AoKSAvL+yKpO2KuOumvCDspJHri6hcclxuLy8gLy8gICAgICAgICAgICAgLy8gICAgICAgICAgICAgfSlcclxuLy8gLy8gICAgICAgICAgICAgLy8gICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbi8vIC8vICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbi8vIC8vICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH0pXHJcbi8vIC8vICAgICAgICAgICAgIC8vICAgICB9LCA1MDApXHJcbi8vIC8vICAgICAgICAgICAgIC8vICAgICByZXR1cm5cclxuLy8gLy8gICAgICAgICAgICAgLy8gfVxyXG4vLyAvLyAgICAgICAgICAgICAvLyBpZiAoY250ID4gMzEgJiYgIWZhY2VCb2FyZCkgcmV0dXJuXHJcblxyXG4vLyAvLyAgICAgICAgICAgICByZXNpemVkRGV0ZWN0aW9ucyA9IGF3YWl0IGZhY2VhcGkucmVzaXplUmVzdWx0cyhkZXRlY3Rpb25zLCBkaXNwbGF5U2l6ZSkgLy9kZXRlY3Rpb25z66W8IGRpc3BsYXlzaXpl7JeQIOunnuy2mCDqsrDqs7zqsJJcclxuLy8gLy8gICAgICAgICAgICAgLy8gYXdhaXQgZmFjZWFwaS5kcmF3LmRyYXdEZXRlY3Rpb25zKGNhbnZhcywgcmVzaXplZERldGVjdGlvbnMpIC8v7Ja86rW07J247IudIOyCrOqwge2YlSDrsJXsiqQg65Oc66Gc7J6JXHJcblxyXG4vLyAvLyAgICAgICAgICAgICAvLyBjb25zdCBsYW5kbWFyayA9IGF3YWl0IGZhY2VhcGkuZGV0ZWN0RmFjZUxhbmRtYXJrc1RpbnkoY2FudmFzKSAvL+2OmOydtOyKpOuenOuTnOuniO2BrCDsooztkZxcclxuLy8gLy8gICAgICAgICAgICAgY29uc3QgcG9zaXRpb25zID0gYXdhaXQgcmVzaXplZERldGVjdGlvbnMubGFuZG1hcmtzLnBvc2l0aW9uc1xyXG5cclxuLy8gLy8gICAgICAgICAgICAgaWYgKCFmYWNlQm9hcmQpIHtcclxuLy8gLy8gICAgICAgICAgICAgICAgIHRlc3RFeHBsYWluLmlubmVySFRNTCA9IGDtlLzrtoDsg4nsnYQg7LaU7LacIOykkSDsnoXri4jri6QuPGJyPiA8c3BhbiBzdHlsZT1cImNvbG9yIDogeWVsbG93O1wiPlRpcCA6IOy1nOuMgO2VnCDruZvsnZgg7JiB7Zal7J2EIOuwm+yngCDslYrripQg6rOz7JeQ7IScIOy4oeygle2VtOuztOyEuOyalCE8L3NwYW4+YFxyXG4vLyAvLyAgICAgICAgICAgICAgICAgYXdhaXQgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpIC8v7LqU67KE7IqkIOy0iOq4sO2ZlFxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gYXdhaXQgZmFjZWFwaS5kcmF3LmRyYXdGYWNlTGFuZG1hcmtzKGNhbnZhcywgcmVzaXplZERldGVjdGlvbnMpIC8v7Ja86rW07J247IudIOuenOuTnOuniO2BrCDrk5zroZzsnolcclxuLy8gLy8gICAgICAgICAgICAgICAgIGNvbnN0IGxlZnROb3NlID0gcG9zaXRpb25zWzMxXVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgY29uc3QgbGVmdENoaW4gPSBwb3NpdGlvbnNbMl1cclxuLy8gLy8gICAgICAgICAgICAgICAgIGNvbnN0IGxlZnRDaGVlayA9IHsgeDogKGxlZnROb3NlLnggKyBsZWZ0Q2hpbi54KSAvIDIsIHk6IChsZWZ0Tm9zZS55ICsgbGVmdENoaW4ueSkgLyAyIH1cclxuXHJcbi8vIC8vICAgICAgICAgICAgICAgICBjb25zdCByaWdodE5vc2UgPSBwb3NpdGlvbnNbMzVdXHJcbi8vIC8vICAgICAgICAgICAgICAgICBjb25zdCByaWdodENoaW4gPSBwb3NpdGlvbnNbMTRdXHJcbi8vIC8vICAgICAgICAgICAgICAgICBjb25zdCByaWdodENoZWVrID0geyB4OiAocmlnaHROb3NlLnggKyByaWdodENoaW4ueCkgLyAyLCB5OiAocmlnaHROb3NlLnkgKyByaWdodENoaW4ueSkgLyAyIH1cclxuXHJcbi8vIC8vICAgICAgICAgICAgICAgICBjb25zdCBleWVMZW5ndGggPSAocG9zaXRpb25zWzQxXS55IC0gcG9zaXRpb25zWzM3XS55KVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgY29uc3QgZXllTWlkZGxlWCA9IChwb3NpdGlvbnNbNDBdLnggKyBwb3NpdGlvbnNbNDFdLngpIC8gMlxyXG4vLyAvLyAgICAgICAgICAgICAgICAgY29uc3QgbGVmdFVuZGVyRXllID0geyB4OiBleWVNaWRkbGVYLCB5OiBwb3NpdGlvbnNbNDFdLnkgKyBleWVMZW5ndGggfVxyXG5cclxuLy8gLy8gICAgICAgICAgICAgICAgIGNvbnN0IHJpZ2h0RXllTWlkZGxlWCA9IChwb3NpdGlvbnNbNDZdLnggKyBwb3NpdGlvbnNbNDddLngpIC8gMlxyXG4vLyAvLyAgICAgICAgICAgICAgICAgY29uc3QgcmlnaHRVbmRlckV5ZSA9IHsgeDogcmlnaHRFeWVNaWRkbGVYLCB5OiBwb3NpdGlvbnNbNDZdLnkgKyBleWVMZW5ndGggfVxyXG5cclxuLy8gLy8gICAgICAgICAgICAgICAgIGNvbnN0IGphdyA9IHsgeDogcG9zaXRpb25zWzhdLngsIHk6IChwb3NpdGlvbnNbOF0ueSArIHBvc2l0aW9uc1s1N10ueSkgLyAyIH1cclxuLy8gLy8gICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHZpZGVvLCAwLCAwLCBjYW1DYW52YXMud2lkdGgsIGNhbUNhbnZhcy5oZWlnaHQpO1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gbGV0IGV5ZUF2Z0NvbG9yID0gY29udGV4dC5nZXRJbWFnZURhdGEoY2VudGVyUHVwaWwueCwgY2VudGVyUHVwaWwueSwgMSwgMSkuZGF0YVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgbGV0IGNoZWVrQXZnQ29sb3IgPSBjb250ZXh0LmdldEltYWdlRGF0YShsZWZ0Q2hlZWsueCwgbGVmdENoZWVrLnksIDEsIDEpLmRhdGFcclxuXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBjdHguZmlsbFN0eWxlID0gYHJnYigke2V5ZUF2Z0NvbG9yWzBdfSwke2V5ZUF2Z0NvbG9yWzFdfSwke2V5ZUF2Z0NvbG9yWzJdfSlgXHJcblxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gY3R4LmZpbGxSZWN0KDAsIDAsIDEwMCwgMTAwKVxyXG5cclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7Y2hlZWtBdmdDb2xvclswXX0sJHtjaGVla0F2Z0NvbG9yWzFdfSwke2NoZWVrQXZnQ29sb3JbMl19KWBcclxuXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBjdHguZmlsbFJlY3QoMCwgMTUwLCAxMDAsIDEwMClcclxuXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBjdHguZm9udCA9IFwiMjBweCBzZXJpZlwiXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBjdHguc3Ryb2tlVGV4dChcImhlbGxvIHdvcmxkXCIsIDAsMjApXHJcblxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gbGV0IGV5ZVRleHRDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBleWVUZXh0Q2FudmFzLndpZHRoID0gMTAwXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBleWVUZXh0Q2FudmFzLmhlaWdodCA9IDI1XHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBsZXQgZXllVGV4dENvbnRleHQgPSBleWVUZXh0Q2FudmFzLmdldENvbnRleHQoXCIyZFwiKVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gZXllVGV4dENvbnRleHQuc2NhbGUoLTEsIDEpXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBleWVUZXh0Q29udGV4dC5mb250ID0gXCIxNXB4XCJcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGV5ZVRleHRDb250ZXh0LmZpbGxUZXh0KFwi7Jik66W47Kq9IO2ZjeyxhOyDiVwiLCAtNzAsIDIwKVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gZXllVGV4dENvbnRleHQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gY3R4LnB1dEltYWdlRGF0YShleWVUZXh0Q29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgZXllVGV4dENhbnZhcy53aWR0aCwgZXllVGV4dENhbnZhcy5oZWlnaHQpLCAwLCAwKVxyXG5cclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGxldCBjaGVla1RleHRDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBjaGVla1RleHRDYW52YXMud2lkdGggPSA3MFxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gY2hlZWtUZXh0Q2FudmFzLmhlaWdodCA9IDI1XHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBsZXQgY2hlZWtUZXh0Q29udGV4dCA9IGNoZWVrVGV4dENhbnZhcy5nZXRDb250ZXh0KFwiMmRcIilcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGNoZWVrVGV4dENvbnRleHQuc2NhbGUoLTEsIDEpXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBjaGVla1RleHRDb250ZXh0LmZvbnQgPSBcIjE1cHhcIlxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gY2hlZWtUZXh0Q29udGV4dC5maWxsVGV4dChcIuyYpOuluOyqvSDrs7wg7IOJXCIsIC02MCwgMjApXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBjaGVla1RleHRDb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGN0eC5wdXRJbWFnZURhdGEoY2hlZWtUZXh0Q29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgY2hlZWtUZXh0Q2FudmFzLndpZHRoLCBjaGVla1RleHRDYW52YXMuaGVpZ2h0KSwgMTAwLCAxNTApXHJcblxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gbGV0IGV5ZVBvaW50QXJjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gbGV0IGV5ZVBvaW50QXJjQ3R4ID0gZXllUG9pbnRBcmMuZ2V0Q29udGV4dCgnMmQnKVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gZXllUG9pbnRBcmMud2lkdGggPSAzXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBleWVQb2ludEFyYy5oZWlnaHQgPSAzXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBleWVQb2ludEFyY0N0eC5iZWdpblBhdGgoKTtcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGV5ZVBvaW50QXJjQ3R4LmFyYygxLjUsIDEuNSwgMS41LCAwLCAyICogTWF0aC5QSSk7XHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBleWVQb2ludEFyY0N0eC5maWxsU3R5bGUgPSAncmdiKDI1NSwwLDApJ1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gZXllUG9pbnRBcmNDdHguZmlsbCgpO1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gY3R4LnB1dEltYWdlRGF0YShleWVQb2ludEFyY0N0eC5nZXRJbWFnZURhdGEoMCwgMCwgZXllUG9pbnRBcmMud2lkdGgsIGV5ZVBvaW50QXJjLmhlaWdodCksIGNlbnRlclB1cGlsLngsIGNlbnRlclB1cGlsLnkpXHJcblxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gbGV0IGV5ZVBvaW50QXJjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gbGV0IGV5ZVBvaW50QXJjQ3R4ID0gZXllUG9pbnRBcmMuZ2V0Q29udGV4dCgnMmQnKVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gZXllUG9pbnRBcmMud2lkdGggPSAzXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBleWVQb2ludEFyYy5oZWlnaHQgPSAzXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBleWVQb2ludEFyY0N0eC5iZWdpblBhdGgoKTtcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGV5ZVBvaW50QXJjQ3R4LmFyYygxLjUsIDEuNSwgMS41LCAwLCAyICogTWF0aC5QSSk7XHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBleWVQb2ludEFyY0N0eC5maWxsU3R5bGUgPSAncmdiKDI1NSwwLDApJ1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gZXllUG9pbnRBcmNDdHguZmlsbCgpO1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gYXdhaXQgY3R4LnB1dEltYWdlRGF0YShleWVQb2ludEFyY0N0eC5nZXRJbWFnZURhdGEoMCwgMCwgZXllUG9pbnRBcmMud2lkdGgsIGV5ZVBvaW50QXJjLmhlaWdodCksIGxlZnRVbmRlckV5ZS54LCBsZWZ0VW5kZXJFeWUueSlcclxuXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBsZXQgcmlnaHRFeWVQb2ludEFyYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIilcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGxldCByaWdodEV5ZVBvaW50QXJjQ3R4ID0gcmlnaHRFeWVQb2ludEFyYy5nZXRDb250ZXh0KCcyZCcpXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyByaWdodEV5ZVBvaW50QXJjLndpZHRoID0gM1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gcmlnaHRFeWVQb2ludEFyYy5oZWlnaHQgPSAzXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyByaWdodEV5ZVBvaW50QXJjQ3R4LmJlZ2luUGF0aCgpO1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gcmlnaHRFeWVQb2ludEFyY0N0eC5hcmMoMS41LCAxLjUsIDEuNSwgMCwgMiAqIE1hdGguUEkpO1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gcmlnaHRFeWVQb2ludEFyY0N0eC5maWxsU3R5bGUgPSAncmdiKDI1NSwwLDApJ1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gcmlnaHRFeWVQb2ludEFyY0N0eC5maWxsKCk7XHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBhd2FpdCBjdHgucHV0SW1hZ2VEYXRhKHJpZ2h0RXllUG9pbnRBcmNDdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHJpZ2h0RXllUG9pbnRBcmMud2lkdGgsIHJpZ2h0RXllUG9pbnRBcmMuaGVpZ2h0KSwgcmlnaHRVbmRlckV5ZS54LCByaWdodFVuZGVyRXllLnkpXHJcblxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gbGV0IGNoZWVrUG9pbnRBcmMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBjaGVla1BvaW50QXJjLndpZHRoID0gM1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gY2hlZWtQb2ludEFyYy5oZWlnaHQgPSAzXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBsZXQgY2hlZWtQb2ludEFyY0N0eCA9IGNoZWVrUG9pbnRBcmMuZ2V0Q29udGV4dCgnMmQnKVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gY2hlZWtQb2ludEFyY0N0eC5iZWdpblBhdGgoKTtcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGNoZWVrUG9pbnRBcmNDdHguYXJjKDEuNSwgMS41LCAxLjUsIDAsIE1hdGguUEkgKiAyKTtcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGNoZWVrUG9pbnRBcmNDdHguZmlsbFN0eWxlID0gJ3JnYigyNTUsMCwwKSdcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGNoZWVrUG9pbnRBcmNDdHguZmlsbCgpO1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gYXdhaXQgY3R4LnB1dEltYWdlRGF0YShjaGVla1BvaW50QXJjQ3R4LmdldEltYWdlRGF0YSgwLCAwLCBjaGVla1BvaW50QXJjLndpZHRoLCBjaGVla1BvaW50QXJjLmhlaWdodCksIGxlZnRDaGVlay54LCBsZWZ0Q2hlZWsueSlcclxuXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBsZXQgcmlnaHRDaGVla1BvaW50QXJjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gcmlnaHRDaGVla1BvaW50QXJjLndpZHRoID0gM1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gcmlnaHRDaGVla1BvaW50QXJjLmhlaWdodCA9IDNcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGxldCByaWdodENoZWVrUG9pbnRBcmNDdHggPSByaWdodENoZWVrUG9pbnRBcmMuZ2V0Q29udGV4dCgnMmQnKVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gcmlnaHRDaGVla1BvaW50QXJjQ3R4LmJlZ2luUGF0aCgpO1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gcmlnaHRDaGVla1BvaW50QXJjQ3R4LmFyYygxLjUsIDEuNSwgMS41LCAwLCBNYXRoLlBJICogMik7XHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyByaWdodENoZWVrUG9pbnRBcmNDdHguZmlsbFN0eWxlID0gJ3JnYigyNTUsMCwwKSdcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIHJpZ2h0Q2hlZWtQb2ludEFyY0N0eC5maWxsKCk7XHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBhd2FpdCBjdHgucHV0SW1hZ2VEYXRhKHJpZ2h0Q2hlZWtQb2ludEFyY0N0eC5nZXRJbWFnZURhdGEoMCwgMCwgcmlnaHRDaGVla1BvaW50QXJjLndpZHRoLCByaWdodENoZWVrUG9pbnRBcmMuaGVpZ2h0KSwgcmlnaHRDaGVlay54LCByaWdodENoZWVrLnkpXHJcblxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gbGV0IGphd1BvaW50QXJjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gamF3UG9pbnRBcmMud2lkdGggPSAzXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBqYXdQb2ludEFyYy5oZWlnaHQgPSAzXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBsZXQgamFlUG9pbnRBcmNDdHggPSBqYXdQb2ludEFyYy5nZXRDb250ZXh0KCcyZCcpXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBqYWVQb2ludEFyY0N0eC5iZWdpblBhdGgoKTtcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGphZVBvaW50QXJjQ3R4LmFyYygxLjUsIDEuNSwgMS41LCAwLCBNYXRoLlBJICogMik7XHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBqYWVQb2ludEFyY0N0eC5maWxsU3R5bGUgPSAncmdiKDI1NSwwLDApJ1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gamFlUG9pbnRBcmNDdHguZmlsbCgpO1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gYXdhaXQgY3R4LnB1dEltYWdlRGF0YShqYWVQb2ludEFyY0N0eC5nZXRJbWFnZURhdGEoMCwgMCwgamF3UG9pbnRBcmMud2lkdGgsIGphd1BvaW50QXJjLmhlaWdodCksIGphdy54LCBqYXcueSlcclxuXHJcbi8vIC8vICAgICAgICAgICAgICAgICBsZXQgbGVmdEV5ZVN1bSA9IG5ldyBnZXRDb2xvckRhdGEobGVmdFVuZGVyRXllLCBleWVMZW5ndGgsIGNvbnRleHQpXHJcbi8vIC8vICAgICAgICAgICAgICAgICBsZXQgcmlnaHRFeWVTdW0gPSBuZXcgZ2V0Q29sb3JEYXRhKHJpZ2h0VW5kZXJFeWUsIGV5ZUxlbmd0aCwgY29udGV4dClcclxuXHJcbi8vIC8vICAgICAgICAgICAgICAgICBsZXQgbGVmdENoZWVrU3VtID0gbmV3IGdldENvbG9yRGF0YShsZWZ0Q2hlZWssIGV5ZUxlbmd0aCwgY29udGV4dClcclxuLy8gLy8gICAgICAgICAgICAgICAgIGxldCByaWdodENoZWVrU3VtID0gbmV3IGdldENvbG9yRGF0YShyaWdodENoZWVrLCBleWVMZW5ndGgsIGNvbnRleHQpXHJcbi8vIC8vICAgICAgICAgICAgICAgICBsZXQgamF3U3VtID0gbmV3IGdldENvbG9yRGF0YShqYXcsIGV5ZUxlbmd0aCwgY29udGV4dClcclxuXHJcbi8vIC8vICAgICAgICAgICAgICAgICBsZXQgZXllUmVzdWx0ID0gYXdhaXQgbGVmdEV5ZVN1bS5tYXAoKGksIGlkeCkgPT4ge1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoaSArIHJpZ2h0RXllU3VtW2lkeF0pIC8gMlxyXG4vLyAvLyAgICAgICAgICAgICAgICAgfSlcclxuXHJcbi8vIC8vICAgICAgICAgICAgICAgICBsZXQgY2hlZWtSZXN1bHQgPSBhd2FpdCBsZWZ0Q2hlZWtTdW0ubWFwKChpLCBpZHgpID0+IHtcclxuLy8gLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGkgKyByaWdodENoZWVrU3VtW2lkeF0pIC8gMlxyXG4vLyAvLyAgICAgICAgICAgICAgICAgfSlcclxuLy8gLy8gICAgICAgICAgICAgICAgIGV5ZUNvbG9yLnB1c2goZXllUmVzdWx0KVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgY2hlZWtDb2xvci5wdXNoKGNoZWVrUmVzdWx0KVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgamF3Q29sb3IucHVzaChqYXdTdW0pXHJcblxyXG4vLyAvLyAgICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHsoZXllUmVzdWx0WzBdICsgY2hlZWtSZXN1bHRbMF0gKyBqYXdTdW1bMF0pIC8gM30sJHsoZXllUmVzdWx0WzFdICsgY2hlZWtSZXN1bHRbMV0gKyBqYXdTdW1bMV0pIC8gM30sJHsoZXllUmVzdWx0WzJdICsgY2hlZWtSZXN1bHRbMl0gKyBqYXdTdW1bMl0pIC8gM30pYFxyXG5cclxuLy8gLy8gICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGggLyA0LCBjYW52YXMud2lkdGggLyA0KVxyXG5cclxuLy8gLy8gICAgICAgICAgICAgICAgIGxldCBmYWNlQ2VudGVyUG9zID0gcG9zaXRpb25zWzI5XVxyXG5cclxuLy8gLy8gICAgICAgICAgICAgICAgIGxldCBsZWZ0RmFjZVdpZHRoID0gcG9zaXRpb25zWzFdLnggLSBmYWNlQ2VudGVyUG9zLnggIC8v7Jm87Kq9IOuzvCDrhJPsnbRcclxuLy8gLy8gICAgICAgICAgICAgICAgIGxldCByaWdodEZhY2VXaWR0aCA9ICBmYWNlQ2VudGVyUG9zLnggIC0gcG9zaXRpb25zWzE1XS54XHJcbi8vIC8vICAgICAgICAgICAgICAgICBsZXQgbm9zZVRvQm90dG9tID0gKHBvc2l0aW9uc1s4XS55IC0gZmFjZUNlbnRlclBvcy55KSAqIDEuMSAvL+y9lOu2gO2EsCDthLHrgZ0g6ri47J20XHJcbi8vIC8vICAgICAgICAgICAgICAgICBsZXQgbzEgPSBNYXRoLmF0YW4oKHBvc2l0aW9uc1sxNV0ueS0ocG9zaXRpb25zWzE1XS55K3Bvc2l0aW9uc1sxXS55KS8yKS8ocG9zaXRpb25zWzE1XS54LXBvc2l0aW9uc1sxXS54KSkgLy8g6rCB64+EIOqzhOyCsFxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gbGV0IGRlZ3JlZSA9IE1hdGguYWJzKG8xICogMTgwL01hdGguUEkpXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvL+uniOyKpO2BrCDrk5zroZzsnolcclxuLy8gLy8gICAgICAgICAgICAgICAgIGF3YWl0IGN0eC5zYXZlKCk7XHJcbi8vIC8vICAgICAgICAgICAgICAgICBhd2FpdCBjdHgudHJhbnNsYXRlKGZhY2VDZW50ZXJQb3MueCwgZmFjZUNlbnRlclBvcy55KSAvL+q4sOykgOygkCDsnqHquLAuIOuTnOuhnOyasOqwgCDsi5zsnpHrkJjripQg7KKM7ZGc66W8IOq4sOykgOygkOycvOuhnCDsnqHslYTslbwg6re466Ck7KeA64qUIOu2gOu2hOunjCDtmozsoITsnbQg6rCA64qlXHJcbi8vIC8vICAgICAgICAgICAgICAgICBhd2FpdCBjdHgucm90YXRlKG8xKVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgYXdhaXQgY3R4LnRyYW5zbGF0ZSgtZmFjZUNlbnRlclBvcy54LCAtZmFjZUNlbnRlclBvcy55KSAvL+ydtO2bhOyXkCDsnbTrr7jsp4Drpbwg7JuQ7ZWY64qUIOychOy5mOyXkCDqt7jrpqzquLAg7JyE7ZW0IOuLpOyLnCDstIjquLDtmZTtlbTspIxcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGN0eC5zY2FsZSgtMSwxKVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgYXdhaXQgY3R4LmRyYXdJbWFnZShyaWdodE1hc2ssIGZhY2VDZW50ZXJQb3MueCwgZmFjZUNlbnRlclBvcy55LCAtcmlnaHRGYWNlV2lkdGgsIG5vc2VUb0JvdHRvbSlcclxuLy8gLy8gICAgICAgICAgICAgICAgIGF3YWl0IGN0eC5kcmF3SW1hZ2UobGVmdE1hc2ssIGZhY2VDZW50ZXJQb3MueCsxLCBmYWNlQ2VudGVyUG9zLnksIGxlZnRGYWNlV2lkdGgsIG5vc2VUb0JvdHRvbSlcclxuLy8gLy8gICAgICAgICAgICAgICAgIGF3YWl0IGN0eC5yZXN0b3JlKClcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGF3YWl0IGN0eC5kcmF3SW1hZ2UobGVmdE1hc2ssIGZhY2VDZW50ZXJQb3MueCwgZmFjZUNlbnRlclBvcy55LCBsZWZ0RmFjZVdpZHRoLCBub3NlVG9Cb3R0b20pXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBhd2FpdCBjdHguZHJhd0ltYWdlKHJpZ2h0TWFzaywgZmFjZUNlbnRlclBvcy54LCBmYWNlQ2VudGVyUG9zLnksIC1yaWdodEZhY2VXaWR0aCwgbm9zZVRvQm90dG9tKVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gY29sb3JTdW0uZXllID0gYXdhaXQgZmluYWxSZXN1bHRbMF0ubWFwKChpLCBpZHgpID0+IHtcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vICAgICBpZihjb2xvclN1bS5leWUpIHJldHVybiAgY29sb3JTdW0uZXllW2lkeF0gKyBpXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyAgICAgZWxzZSByZXR1cm4gIGlcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vICAgICAvLyByZXR1cm4gKGNvbG9yU3VtLmV5ZSA/IGNvbG9yU3VtLmV5ZVtpZHhdIDogMCkgKyBpXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyB9KVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gY29sb3JTdW0uY2hlZWsgPSBhd2FpdCBmaW5hbFJlc3VsdFsxXS5tYXAoKGksIGlkeCkgPT4ge1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gICAgIGlmKGNvbG9yU3VtLmNoZWVrKSByZXR1cm4gIGNvbG9yU3VtLmNoZWVrW2lkeF0gKyBpXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyAgICAgZWxzZSByZXR1cm4gIGlcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIH0pXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBjb2xvclN1bS5qYXcgPSBhd2FpdCBmaW5hbFJlc3VsdFsyXS5tYXAoKGksIGlkeCkgPT4ge1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiAoY29sb3JTdW0uamF3ID8gY29sb3JTdW0uZXllW2lkeF0gOiAwKSArIGlcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIH0pXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBsZXQgY2hlZWtQb2ludEFyYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIilcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGNoZWVrUG9pbnRBcmMud2lkdGggPSAzXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBjaGVla1BvaW50QXJjLmhlaWdodCA9IDNcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGxldCBjaGVla1BvaW50QXJjQ3R4ID0gY2hlZWtQb2ludEFyYy5nZXRDb250ZXh0KCcyZCcpXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBjaGVla1BvaW50QXJjQ3R4LmJlZ2luUGF0aCgpO1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gY2hlZWtQb2ludEFyY0N0eC5hcmMoMS41LCAxLjUsIDEuNSwgMCwgTWF0aC5QSSAqIDIpO1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gY2hlZWtQb2ludEFyY0N0eC5maWxsU3R5bGUgPSAncmdiKDI1NSwwLDApJ1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gY2hlZWtQb2ludEFyY0N0eC5maWxsKCk7XHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBjdHgucHV0SW1hZ2VEYXRhKGNoZWVrUG9pbnRBcmNDdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIGNoZWVrUG9pbnRBcmMud2lkdGgsIGNoZWVrUG9pbnRBcmMuaGVpZ2h0KSwgbGVmdENoZWVrLngsIGxlZnRDaGVlay55KVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gY29sb3JTdW0uZm9yRWFjaCgoaSwgaWR4KSA9PiB7XHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyAgICAgY29sb3JTdW1baWR4XSArPSBjaGVla0F2Z0NvbG9yW2lkeF1cclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIH0pXHJcbi8vIC8vICAgICAgICAgICAgICAgICBpZiAoY250IDwgMzEpIHtcclxuLy8gLy8gICAgICAgICAgICAgICAgICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2dyZXNzQmFyXCIpLnN0eWxlLndpZHRoID0gY250KjIgKyBcIiVcIlxyXG4vLyAvLyAgICAgICAgICAgICAgICAgICAgIC8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2dyZXNzcGVyY2VudFwiKS5pbm5lclRleHQgPSBjbnQqMiArIFwiJVwiXHJcbi8vIC8vICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWZsZXhcIlxyXG4vLyAvLyAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAzOyBpID49IDA7IGktLSkge1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gY250ICogMy4zXHJcbi8vIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9ncmVzc1VuaXQgPSByZXN1bHQudG9GaXhlZCgxKSAtIGlcclxuLy8gLy8gICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSBwcm9ncmVzc1VuaXQgKyBcIiVcIlxyXG4vLyAvLyAgICAgICAgICAgICAgICAgICAgICAgICBwZXJjZW50LmlubmVyVGV4dCA9IHByb2dyZXNzVW5pdCArIFwiJVwiXHJcbi8vIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjbnQgPT09IDMwKSB7XHJcbi8vIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9IFwiMTAwJVwiXHJcbi8vIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJjZW50LmlubmVyVGV4dCA9IFwiMTAwJVwiXHJcbi8vIC8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbi8vIC8vICAgICAgICAgICAgICAgICB9XHJcbi8vIC8vICAgICAgICAgICAgIH1cclxuLy8gLy8gICAgICAgICAgICAgZWxzZSB7XHJcbi8vIC8vICAgICAgICAgICAgICAgICBpZiAodGVzdEV4cGxhaW4pXHJcbi8vIC8vICAgICAgICAgICAgICAgICAgICAgdGVzdEV4cGxhaW4uaW5uZXJUZXh0ID0gXCLqsIDsnqUg7Ja86rW07J20IO2ZlOyCrO2VtOyngOuKlCDtlYTthLDrpbwg7ZmV7J24IO2bhCDqsrDqs7wg7ZmV7J24IOuyhO2KvOydhCDriIzrn6zso7zshLjsmpRcIlxyXG4vLyAvLyAgICAgICAgICAgICAgICAgbGV0IGNvbG9yUmdiID0gc3RvcmUuZ2V0U3RhdGUoKS5Db2xvclJlZHVjZXIubWFpbkZhY2VCb2FyZENvbG9yXHJcbi8vIC8vICAgICAgICAgICAgICAgICBuZXcgRmFjZUJvYXJkKHBvc2l0aW9ucywgY29sb3JSZ2IsIGNhbnZhcylcclxuLy8gLy8gICAgICAgICAgICAgfVxyXG5cclxuLy8gLy8gICAgICAgICB9IGVsc2Uge1xyXG4vLyAvLyAgICAgICAgICAgICBhd2FpdCBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcclxuLy8gLy8gICAgICAgICAgICAgaWYgKHRlc3RFeHBsYWluKVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgdGVzdEV4cGxhaW4uaW5uZXJIVE1MID0gYOyWvOq1tOydhCDsnbjsi53tlaAg7IiYIOyeiOuPhOuhnSDsubTrqZTrnbzrpbwg67CU652867SQ7KO87IS47JqULjxicj4gPHNwYW4gc3R5bGU9XCJjb2xvciA6IHllbGxvdztcIj5UaXAgOiDstZzrjIDtlZwg67mb7J2YIOyYge2WpeydhCDrsJvsp4Ag7JWK64qUIOqzs+yXkOyEnCDsuKHsoJXtlbTrs7TshLjsmpQhPC9zcGFuPmBcclxuLy8gLy8gICAgICAgICB9XHJcbi8vIC8vICAgICAgICAgYW5pID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRlc3QpXHJcbi8vIC8vICAgICB9XHJcblxyXG4vLyAvLyAgICAgLy8gaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChhc3luYyAoKSA9PiB7XHJcblxyXG4vLyAvLyAgICAgLy8gICAgIGNvbnN0IGRldGVjdGlvbnMgPSBhd2FpdCBmYWNlYXBpLmRldGVjdFNpbmdsZUZhY2UodmlkZW8sIG5ldyBmYWNlYXBpLlRpbnlGYWNlRGV0ZWN0b3JPcHRpb25zKCkpLndpdGhGYWNlTGFuZG1hcmtzKHRydWUpIC8vdmlkZW8g7Lqh7LOQ67O4IOyWvOq1tOyduOyLnSDsoJXrs7QgIOyCrOydtOymiOulvCDrp57stpTquLAg7KCE7J206riw65WM66y47JeQIOyijO2RnOqwkuydtCDri6TrpbTri6RcclxuLy8gLy8gICAgIC8vICAgICBsZXQgcmVzaXplZERldGVjdGlvbnNcclxuLy8gLy8gICAgIC8vICAgICBsb2FkaW5nLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuLy8gLy8gICAgIC8vICAgICBpZiAoZGV0ZWN0aW9ucykge1xyXG5cclxuLy8gLy8gICAgIC8vICAgICAgICAgY250KytcclxuXHJcbi8vIC8vICAgICAvLyAgICAgICAgIGlmIChjbnQgPT0gMzEgJiYgIWZhY2VCb2FyZCkge1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIGNhbnZhcy5yZW1vdmUoKVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgY29sb3JTdW0uZXllID0gZXllQ29sb3IucmVkdWNlKChhLGIpPT57XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuIFthWzBdK2JbMF0sIGFbMV0rYlsxXSwgYVsyXStiWzJdXVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgfSlcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIGNvbG9yU3VtLmNoZWVrID0gY2hlZWtDb2xvci5yZWR1Y2UoKGEsYik9PntcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4gW2FbMF0rYlswXSwgYVsxXStiWzFdLCBhWzJdK2JbMl1dXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICB9KVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgY29sb3JTdW0uamF3ID0gamF3Q29sb3IucmVkdWNlKChhLGIpPT57XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuIFthWzBdK2JbMF0sIGFbMV0rYlsxXSwgYVsyXStiWzJdXVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgfSlcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIGZvcihsZXQga2V5IGluIGNvbG9yU3VtKXtcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgICAgICBjb2xvclN1bVtrZXldID0gY29sb3JTdW1ba2V5XS5tYXAoaT0+aS8zMClcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIH1cclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIHRocm90dGxlci50aHJvdHRsZSgoKSA9PiB7XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAgICAgdmlkZW8ucGF1c2UoKVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoJ2h0dHBzOi8vdGVuc29yLXNlcnZlci5oZXJva3VhcHAuY29tL2dldFNlYXNvbicsIGNvbG9yU3VtKVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgICAgIC50aGVuKHJlcz0+e1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyZXMuZGF0YSkuY2xpY2soKVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgICAgIH0pXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAgICAgLmNhdGNoKGVycj0+e1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAgICAgfSlcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIH0sIDUwMClcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIHJldHVyblxyXG4vLyAvLyAgICAgLy8gICAgICAgICB9XHJcbi8vIC8vICAgICAvLyAgICAgICAgIGlmKGNudCA+MzEgJiYgIWZhY2VCb2FyZCkgcmV0dXJuXHJcblxyXG4vLyAvLyAgICAgLy8gICAgICAgICByZXNpemVkRGV0ZWN0aW9ucyA9IGF3YWl0IGZhY2VhcGkucmVzaXplUmVzdWx0cyhkZXRlY3Rpb25zLCBkaXNwbGF5U2l6ZSkgLy9kZXRlY3Rpb25z66W8IGRpc3BsYXlzaXpl7JeQIOunnuy2mCDqsrDqs7zqsJJcclxuLy8gLy8gICAgIC8vICAgICAgICAgLy8gYXdhaXQgZmFjZWFwaS5kcmF3LmRyYXdEZXRlY3Rpb25zKGNhbnZhcywgcmVzaXplZERldGVjdGlvbnMpIC8v7Ja86rW07J247IudIOyCrOqwge2YlSDrsJXsiqQg65Oc66Gc7J6JXHJcblxyXG4vLyAvLyAgICAgLy8gICAgICAgICAvLyBjb25zdCBsYW5kbWFyayA9IGF3YWl0IGZhY2VhcGkuZGV0ZWN0RmFjZUxhbmRtYXJrc1RpbnkoY2FudmFzKSAvL+2OmOydtOyKpOuenOuTnOuniO2BrCDsooztkZxcclxuLy8gLy8gICAgIC8vICAgICAgICAgY29uc3QgcG9zaXRpb25zID0gYXdhaXQgcmVzaXplZERldGVjdGlvbnMubGFuZG1hcmtzLnBvc2l0aW9uc1xyXG5cclxuLy8gLy8gICAgIC8vICAgICAgICAgaWYgKCFmYWNlQm9hcmQpIHtcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVzdEV4cGxhaW5cIikuaW5uZXJIVE1MID0gYO2UvOu2gOyDieydhCDstpTstpwg7KSRIOyeheuLiOuLpC48YnI+IDxzcGFuIHN0eWxlPVwiY29sb3IgOiB5ZWxsb3c7XCI+VGlwIDog7LWc64yA7ZWcIOu5m+ydmCDsmIHtlqXsnYQg67Cb7KeAIOyViuuKlCDqs7Psl5DshJwg7Lih7KCV7ZW067O07IS47JqUITwvc3Bhbj5gXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICBhd2FpdCBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCkgLy/supTrsoTsiqQg7LSI6riw7ZmUXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICBhd2FpdCBmYWNlYXBpLmRyYXcuZHJhd0ZhY2VMYW5kbWFya3MoY2FudmFzLCByZXNpemVkRGV0ZWN0aW9ucykgLy/slrzqtbTsnbjsi50g656c65Oc66eI7YGsIOuTnOuhnOyeiVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgY29uc3QgbGVmdE5vc2UgPSBwb3NpdGlvbnNbMzFdXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICBjb25zdCBsZWZ0Q2hpbiA9IHBvc2l0aW9uc1syXVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgY29uc3QgbGVmdENoZWVrID0geyB4OiAobGVmdE5vc2UueCArIGxlZnRDaGluLngpIC8gMiwgeTogKGxlZnROb3NlLnkgKyBsZWZ0Q2hpbi55KSAvIDIgfVxyXG5cclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIGNvbnN0IHJpZ2h0Tm9zZSA9IHBvc2l0aW9uc1szNV1cclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIGNvbnN0IHJpZ2h0Q2hpbiA9IHBvc2l0aW9uc1sxNF1cclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIGNvbnN0IHJpZ2h0Q2hlZWsgPSB7IHg6IChyaWdodE5vc2UueCArIHJpZ2h0Q2hpbi54KSAvIDIsIHk6IChyaWdodE5vc2UueSArIHJpZ2h0Q2hpbi55KSAvIDIgfVxyXG5cclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIGNvbnN0IGV5ZUxlbmd0aCA9IChwb3NpdGlvbnNbNDFdLnkgLSBwb3NpdGlvbnNbMzddLnkpXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICBjb25zdCBleWVNaWRkbGVYID0gKHBvc2l0aW9uc1s0MF0ueCArIHBvc2l0aW9uc1s0MV0ueCkgLyAyXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICBjb25zdCBsZWZ0VW5kZXJFeWUgPSB7IHg6IGV5ZU1pZGRsZVgsIHk6IHBvc2l0aW9uc1s0MV0ueSArIGV5ZUxlbmd0aCB9XHJcblxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgY29uc3QgcmlnaHRFeWVNaWRkbGVYID0gKHBvc2l0aW9uc1s0Nl0ueCArIHBvc2l0aW9uc1s0N10ueCkgLyAyXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICBjb25zdCByaWdodFVuZGVyRXllID0geyB4OiByaWdodEV5ZU1pZGRsZVgsIHk6IHBvc2l0aW9uc1s0Nl0ueSArIGV5ZUxlbmd0aCB9XHJcblxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgY29uc3QgamF3ID0geyB4OiBwb3NpdGlvbnNbOF0ueCwgeTogKHBvc2l0aW9uc1s4XS55ICsgcG9zaXRpb25zWzU3XS55KSAvIDIgfVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UodmlkZW8sIDAsIDAsIGNhbUNhbnZhcy53aWR0aCwgY2FtQ2FudmFzLmhlaWdodCk7XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBsZXQgZXllQXZnQ29sb3IgPSBjb250ZXh0LmdldEltYWdlRGF0YShjZW50ZXJQdXBpbC54LCBjZW50ZXJQdXBpbC55LCAxLCAxKS5kYXRhXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICBsZXQgY2hlZWtBdmdDb2xvciA9IGNvbnRleHQuZ2V0SW1hZ2VEYXRhKGxlZnRDaGVlay54LCBsZWZ0Q2hlZWsueSwgMSwgMSkuZGF0YVxyXG5cclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7ZXllQXZnQ29sb3JbMF19LCR7ZXllQXZnQ29sb3JbMV19LCR7ZXllQXZnQ29sb3JbMl19KWBcclxuXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBjdHguZmlsbFJlY3QoMCwgMCwgMTAwLCAxMDApXHJcblxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtjaGVla0F2Z0NvbG9yWzBdfSwke2NoZWVrQXZnQ29sb3JbMV19LCR7Y2hlZWtBdmdDb2xvclsyXX0pYFxyXG5cclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGN0eC5maWxsUmVjdCgwLCAxNTAsIDEwMCwgMTAwKVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtjaGVla0F2Z0NvbG9yWzBdfSwke2NoZWVrQXZnQ29sb3JbMV19LCR7Y2hlZWtBdmdDb2xvclsyXX0pYFxyXG5cclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGggLyA0LCBjYW52YXMud2lkdGggLyA0KVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gY3R4LmZvbnQgPSBcIjIwcHggc2VyaWZcIlxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gY3R4LnN0cm9rZVRleHQoXCJoZWxsbyB3b3JsZFwiLCAwLDIwKVxyXG5cclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGxldCBleWVUZXh0Q2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gZXllVGV4dENhbnZhcy53aWR0aCA9IDEwMFxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gZXllVGV4dENhbnZhcy5oZWlnaHQgPSAyNVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gbGV0IGV5ZVRleHRDb250ZXh0ID0gZXllVGV4dENhbnZhcy5nZXRDb250ZXh0KFwiMmRcIilcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGV5ZVRleHRDb250ZXh0LnNjYWxlKC0xLCAxKVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gZXllVGV4dENvbnRleHQuZm9udCA9IFwiMTVweFwiXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBleWVUZXh0Q29udGV4dC5maWxsVGV4dChcIuyYpOuluOyqvSDtmY3ssYTsg4lcIiwgLTcwLCAyMClcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGV5ZVRleHRDb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGN0eC5wdXRJbWFnZURhdGEoZXllVGV4dENvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIGV5ZVRleHRDYW52YXMud2lkdGgsIGV5ZVRleHRDYW52YXMuaGVpZ2h0KSwgMCwgMClcclxuXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBsZXQgY2hlZWtUZXh0Q2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gY2hlZWtUZXh0Q2FudmFzLndpZHRoID0gNzBcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGNoZWVrVGV4dENhbnZhcy5oZWlnaHQgPSAyNVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gbGV0IGNoZWVrVGV4dENvbnRleHQgPSBjaGVla1RleHRDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBjaGVla1RleHRDb250ZXh0LnNjYWxlKC0xLCAxKVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gY2hlZWtUZXh0Q29udGV4dC5mb250ID0gXCIxNXB4XCJcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGNoZWVrVGV4dENvbnRleHQuZmlsbFRleHQoXCLsmKTrpbjsqr0g67O8IOyDiVwiLCAtNjAsIDIwKVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gY2hlZWtUZXh0Q29udGV4dC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBjdHgucHV0SW1hZ2VEYXRhKGNoZWVrVGV4dENvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIGNoZWVrVGV4dENhbnZhcy53aWR0aCwgY2hlZWtUZXh0Q2FudmFzLmhlaWdodCksIDEwMCwgMTUwKVxyXG5cclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGxldCBleWVQb2ludEFyYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIilcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGxldCBleWVQb2ludEFyY0N0eCA9IGV5ZVBvaW50QXJjLmdldENvbnRleHQoJzJkJylcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGV5ZVBvaW50QXJjLndpZHRoID0gM1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gZXllUG9pbnRBcmMuaGVpZ2h0ID0gM1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gZXllUG9pbnRBcmNDdHguYmVnaW5QYXRoKCk7XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBleWVQb2ludEFyY0N0eC5hcmMoMS41LCAxLjUsIDEuNSwgMCwgMiAqIE1hdGguUEkpO1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gZXllUG9pbnRBcmNDdHguZmlsbFN0eWxlID0gJ3JnYigyNTUsMCwwKSdcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGV5ZVBvaW50QXJjQ3R4LmZpbGwoKTtcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGN0eC5wdXRJbWFnZURhdGEoZXllUG9pbnRBcmNDdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIGV5ZVBvaW50QXJjLndpZHRoLCBleWVQb2ludEFyYy5oZWlnaHQpLCBjZW50ZXJQdXBpbC54LCBjZW50ZXJQdXBpbC55KVxyXG5cclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGxldCBleWVQb2ludEFyYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIilcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGxldCBleWVQb2ludEFyY0N0eCA9IGV5ZVBvaW50QXJjLmdldENvbnRleHQoJzJkJylcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGV5ZVBvaW50QXJjLndpZHRoID0gM1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gZXllUG9pbnRBcmMuaGVpZ2h0ID0gM1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gZXllUG9pbnRBcmNDdHguYmVnaW5QYXRoKCk7XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBleWVQb2ludEFyY0N0eC5hcmMoMS41LCAxLjUsIDEuNSwgMCwgMiAqIE1hdGguUEkpO1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gZXllUG9pbnRBcmNDdHguZmlsbFN0eWxlID0gJ3JnYigyNTUsMCwwKSdcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGV5ZVBvaW50QXJjQ3R4LmZpbGwoKTtcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGF3YWl0IGN0eC5wdXRJbWFnZURhdGEoZXllUG9pbnRBcmNDdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIGV5ZVBvaW50QXJjLndpZHRoLCBleWVQb2ludEFyYy5oZWlnaHQpLCBsZWZ0VW5kZXJFeWUueCwgbGVmdFVuZGVyRXllLnkpXHJcblxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gbGV0IHJpZ2h0RXllUG9pbnRBcmMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBsZXQgcmlnaHRFeWVQb2ludEFyY0N0eCA9IHJpZ2h0RXllUG9pbnRBcmMuZ2V0Q29udGV4dCgnMmQnKVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gcmlnaHRFeWVQb2ludEFyYy53aWR0aCA9IDNcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIHJpZ2h0RXllUG9pbnRBcmMuaGVpZ2h0ID0gM1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gcmlnaHRFeWVQb2ludEFyY0N0eC5iZWdpblBhdGgoKTtcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIHJpZ2h0RXllUG9pbnRBcmNDdHguYXJjKDEuNSwgMS41LCAxLjUsIDAsIDIgKiBNYXRoLlBJKTtcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIHJpZ2h0RXllUG9pbnRBcmNDdHguZmlsbFN0eWxlID0gJ3JnYigyNTUsMCwwKSdcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIHJpZ2h0RXllUG9pbnRBcmNDdHguZmlsbCgpO1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gYXdhaXQgY3R4LnB1dEltYWdlRGF0YShyaWdodEV5ZVBvaW50QXJjQ3R4LmdldEltYWdlRGF0YSgwLCAwLCByaWdodEV5ZVBvaW50QXJjLndpZHRoLCByaWdodEV5ZVBvaW50QXJjLmhlaWdodCksIHJpZ2h0VW5kZXJFeWUueCwgcmlnaHRVbmRlckV5ZS55KVxyXG5cclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGxldCBjaGVla1BvaW50QXJjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gY2hlZWtQb2ludEFyYy53aWR0aCA9IDNcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGNoZWVrUG9pbnRBcmMuaGVpZ2h0ID0gM1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gbGV0IGNoZWVrUG9pbnRBcmNDdHggPSBjaGVla1BvaW50QXJjLmdldENvbnRleHQoJzJkJylcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGNoZWVrUG9pbnRBcmNDdHguYmVnaW5QYXRoKCk7XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBjaGVla1BvaW50QXJjQ3R4LmFyYygxLjUsIDEuNSwgMS41LCAwLCBNYXRoLlBJICogMik7XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBjaGVla1BvaW50QXJjQ3R4LmZpbGxTdHlsZSA9ICdyZ2IoMjU1LDAsMCknXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBjaGVla1BvaW50QXJjQ3R4LmZpbGwoKTtcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGF3YWl0IGN0eC5wdXRJbWFnZURhdGEoY2hlZWtQb2ludEFyY0N0eC5nZXRJbWFnZURhdGEoMCwgMCwgY2hlZWtQb2ludEFyYy53aWR0aCwgY2hlZWtQb2ludEFyYy5oZWlnaHQpLCBsZWZ0Q2hlZWsueCwgbGVmdENoZWVrLnkpXHJcblxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gbGV0IHJpZ2h0Q2hlZWtQb2ludEFyYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIilcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIHJpZ2h0Q2hlZWtQb2ludEFyYy53aWR0aCA9IDNcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIHJpZ2h0Q2hlZWtQb2ludEFyYy5oZWlnaHQgPSAzXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBsZXQgcmlnaHRDaGVla1BvaW50QXJjQ3R4ID0gcmlnaHRDaGVla1BvaW50QXJjLmdldENvbnRleHQoJzJkJylcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIHJpZ2h0Q2hlZWtQb2ludEFyY0N0eC5iZWdpblBhdGgoKTtcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIHJpZ2h0Q2hlZWtQb2ludEFyY0N0eC5hcmMoMS41LCAxLjUsIDEuNSwgMCwgTWF0aC5QSSAqIDIpO1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gcmlnaHRDaGVla1BvaW50QXJjQ3R4LmZpbGxTdHlsZSA9ICdyZ2IoMjU1LDAsMCknXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyByaWdodENoZWVrUG9pbnRBcmNDdHguZmlsbCgpO1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gYXdhaXQgY3R4LnB1dEltYWdlRGF0YShyaWdodENoZWVrUG9pbnRBcmNDdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHJpZ2h0Q2hlZWtQb2ludEFyYy53aWR0aCwgcmlnaHRDaGVla1BvaW50QXJjLmhlaWdodCksIHJpZ2h0Q2hlZWsueCwgcmlnaHRDaGVlay55KVxyXG5cclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGxldCBqYXdQb2ludEFyYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIilcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGphd1BvaW50QXJjLndpZHRoID0gM1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gamF3UG9pbnRBcmMuaGVpZ2h0ID0gM1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gbGV0IGphZVBvaW50QXJjQ3R4ID0gamF3UG9pbnRBcmMuZ2V0Q29udGV4dCgnMmQnKVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gamFlUG9pbnRBcmNDdHguYmVnaW5QYXRoKCk7XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBqYWVQb2ludEFyY0N0eC5hcmMoMS41LCAxLjUsIDEuNSwgMCwgTWF0aC5QSSAqIDIpO1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gamFlUG9pbnRBcmNDdHguZmlsbFN0eWxlID0gJ3JnYigyNTUsMCwwKSdcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGphZVBvaW50QXJjQ3R4LmZpbGwoKTtcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGF3YWl0IGN0eC5wdXRJbWFnZURhdGEoamFlUG9pbnRBcmNDdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIGphd1BvaW50QXJjLndpZHRoLCBqYXdQb2ludEFyYy5oZWlnaHQpLCBqYXcueCwgamF3LnkpXHJcblxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgbGV0IGxlZnRFeWVTdW0gPSBuZXcgZ2V0Q29sb3JEYXRhKGxlZnRVbmRlckV5ZSwgZXllTGVuZ3RoLCBjb250ZXh0KVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgbGV0IHJpZ2h0RXllU3VtID0gbmV3IGdldENvbG9yRGF0YShyaWdodFVuZGVyRXllLCBleWVMZW5ndGgsIGNvbnRleHQpXHJcblxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgbGV0IGxlZnRDaGVla1N1bSA9IG5ldyBnZXRDb2xvckRhdGEobGVmdENoZWVrLCBleWVMZW5ndGgsIGNvbnRleHQpXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICBsZXQgcmlnaHRDaGVla1N1bSA9IG5ldyBnZXRDb2xvckRhdGEocmlnaHRDaGVlaywgZXllTGVuZ3RoLCBjb250ZXh0KVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgbGV0IGphd1N1bSA9IG5ldyBnZXRDb2xvckRhdGEoamF3LCBleWVMZW5ndGgsIGNvbnRleHQpXHJcblxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgbGV0IGV5ZVJlc3VsdCA9IGF3YWl0IGxlZnRFeWVTdW0ubWFwKChpLCBpZHgpID0+IHtcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4gaSArIHJpZ2h0RXllU3VtW2lkeF1cclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIH0pXHJcblxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgbGV0IGNoZWVrUmVzdWx0ID0gYXdhaXQgbGVmdENoZWVrU3VtLm1hcCgoaSwgaWR4KSA9PiB7XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuIGkgKyByaWdodENoZWVrU3VtW2lkeF1cclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIH0pXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICBleWVDb2xvci5wdXNoKGV5ZVJlc3VsdC5tYXAoaSA9PiBpIC89IDIpKVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgY2hlZWtDb2xvci5wdXNoKGNoZWVrUmVzdWx0Lm1hcChpID0+IGkgLz0gMikpXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICBqYXdDb2xvci5wdXNoKGphd1N1bSlcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGNvbG9yU3VtLmV5ZSA9IGF3YWl0IGZpbmFsUmVzdWx0WzBdLm1hcCgoaSwgaWR4KSA9PiB7XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyAgICAgaWYoY29sb3JTdW0uZXllKSByZXR1cm4gIGNvbG9yU3VtLmV5ZVtpZHhdICsgaVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gICAgIGVsc2UgcmV0dXJuICBpXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyAgICAgLy8gcmV0dXJuIChjb2xvclN1bS5leWUgPyBjb2xvclN1bS5leWVbaWR4XSA6IDApICsgaVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gfSlcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGNvbG9yU3VtLmNoZWVrID0gYXdhaXQgZmluYWxSZXN1bHRbMV0ubWFwKChpLCBpZHgpID0+IHtcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vICAgICBpZihjb2xvclN1bS5jaGVlaykgcmV0dXJuICBjb2xvclN1bS5jaGVla1tpZHhdICsgaVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gICAgIGVsc2UgcmV0dXJuICBpXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyB9KVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gY29sb3JTdW0uamF3ID0gYXdhaXQgZmluYWxSZXN1bHRbMl0ubWFwKChpLCBpZHgpID0+IHtcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vICAgICByZXR1cm4gKGNvbG9yU3VtLmphdyA/IGNvbG9yU3VtLmV5ZVtpZHhdIDogMCkgKyBpXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyB9KVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gbGV0IGNoZWVrUG9pbnRBcmMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBjaGVla1BvaW50QXJjLndpZHRoID0gM1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gY2hlZWtQb2ludEFyYy5oZWlnaHQgPSAzXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBsZXQgY2hlZWtQb2ludEFyY0N0eCA9IGNoZWVrUG9pbnRBcmMuZ2V0Q29udGV4dCgnMmQnKVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gY2hlZWtQb2ludEFyY0N0eC5iZWdpblBhdGgoKTtcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGNoZWVrUG9pbnRBcmNDdHguYXJjKDEuNSwgMS41LCAxLjUsIDAsIE1hdGguUEkgKiAyKTtcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGNoZWVrUG9pbnRBcmNDdHguZmlsbFN0eWxlID0gJ3JnYigyNTUsMCwwKSdcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGNoZWVrUG9pbnRBcmNDdHguZmlsbCgpO1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gY3R4LnB1dEltYWdlRGF0YShjaGVla1BvaW50QXJjQ3R4LmdldEltYWdlRGF0YSgwLCAwLCBjaGVla1BvaW50QXJjLndpZHRoLCBjaGVla1BvaW50QXJjLmhlaWdodCksIGxlZnRDaGVlay54LCBsZWZ0Q2hlZWsueSlcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGNvbG9yU3VtLmZvckVhY2goKGksIGlkeCkgPT4ge1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gICAgIGNvbG9yU3VtW2lkeF0gKz0gY2hlZWtBdmdDb2xvcltpZHhdXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyB9KVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgaWYgKGNudCA8IDMxKSB7XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9ncmVzc0JhclwiKS5zdHlsZS53aWR0aCA9IGNudCoyICsgXCIlXCJcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgICAgICAvLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9ncmVzc3BlcmNlbnRcIikuaW5uZXJUZXh0ID0gY250KjIgKyBcIiVcIlxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgICAgIHByb2dyZXNzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1mbGV4XCJcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMzsgaSA+PSAwOyBpLS0pIHtcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGNudCAqIDMuM1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgICAgICAgICBsZXQgcHJvZ3Jlc3NVbml0ID0gcmVzdWx0LnRvRml4ZWQoMSkgLWlcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSBwcm9ncmVzc1VuaXQgKyBcIiVcIlxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgICAgICAgICBwZXJjZW50LmlubmVyVGV4dCA9IHByb2dyZXNzVW5pdCArIFwiJVwiXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlmIChjbnQgPT09IDMwKSB7XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9IFwiMTAwJVwiXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBwZXJjZW50LmlubmVyVGV4dCA9IFwiMTAwJVwiXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICB9XHJcbi8vIC8vICAgICAvLyAgICAgICAgIH1cclxuLy8gLy8gICAgIC8vICAgICAgICAgZWxzZSB7XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlc3RFeHBsYWluXCIpLmlubmVyVGV4dCA9IFwi6rCA7J6lIOyWvOq1tOydtCDtmZTsgqztlbTsp4DripQg7ZWE7YSw66W8IO2ZleyduCDtm4Qg6rKw6rO8IO2ZleyduCDrsoTtirzsnYQg64iM65+s7KO87IS47JqUXCJcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIGxldCBjb2xvclJnYiA9IHN0b3JlLmdldFN0YXRlKCkuQ29sb3JSZWR1Y2VyLm1haW5GYWNlQm9hcmRDb2xvclxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgbmV3IEZhY2VCb2FyZChwb3NpdGlvbnMsIGNvbG9yUmdiLCBjYW52YXMpXHJcbi8vIC8vICAgICAvLyAgICAgICAgIH1cclxuXHJcbi8vIC8vICAgICAvLyAgICAgfSBlbHNlIHtcclxuLy8gLy8gICAgIC8vICAgICAgICAgYXdhaXQgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXHJcbi8vIC8vICAgICAvLyAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVzdEV4cGxhaW5cIikuaW5uZXJIVE1MID0gYOyWvOq1tOydhCDsnbjsi53tlaAg7IiYIOyeiOuPhOuhnSDsubTrqZTrnbzrpbwg67CU652867SQ7KO87IS47JqULjxicj4gPHNwYW4gc3R5bGU9XCJjb2xvciA6IHllbGxvdztcIj5UaXAgOiDstZzrjIDtlZwg67mb7J2YIOyYge2WpeydhCDrsJvsp4Ag7JWK64qUIOqzs+yXkOyEnCDsuKHsoJXtlbTrs7TshLjsmpQhPC9zcGFuPmBcclxuLy8gLy8gICAgIC8vICAgICB9XHJcblxyXG4vLyAvLyAgICAgLy8gfSwgMTAwKVxyXG4vLyAvLyB9XHJcblxyXG4vLyBpbXBvcnQgKiBhcyBmYWNlTGFuZG1hcmtzRGV0ZWN0aW9uIGZyb20gJ0B0ZW5zb3JmbG93LW1vZGVscy9mYWNlLWxhbmRtYXJrcy1kZXRlY3Rpb24nO1xyXG4vLyBpbXBvcnQgKiBhcyB0ZiBmcm9tICdAdGVuc29yZmxvdy90ZmpzLWNvcmUnO1xyXG4vLyBpbXBvcnQgJ0B0ZW5zb3JmbG93L3RmanMtYmFja2VuZC13ZWJnbCc7XHJcbi8vIGltcG9ydCB7IG1vZGVsIH0gZnJvbSAnLi4vLi4vcGFnZXMvX2FwcCc7XHJcbi8vIGltcG9ydCBNYXNrRHJhdyBmcm9tICcuL01hc2tEcmF3JztcclxuLy8gaW1wb3J0IHsgYWN0aW9uQ3JlYXRvcnMgfSBmcm9tICcuLi8uLi9zdG9yZS9jb2xvclN0b3JlJztcclxuLy8gaW1wb3J0IGdldERldmljZVR5cGUgZnJvbSAnLi9nZXREZXZpY2VUeXBlJztcclxuLy8gLy8gaW1wb3J0IHsgY2FudmFzVG9JbWcgfSBmcm9tICcuL2NhbnZhc1RvSW1nJ1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gU3RyZWFtQ2FudmFzKGZhY2VCb2FyZCkge1xyXG4vLyAgIGxldCBjdHgsIHZpZGVvV2lkdGgsIHZpZGVvSGVpZ2h0LCB2aWRlbywgcmFmSUQ7XHJcbi8vICAgdmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlkZW8nKTtcclxuLy8gICBsZXQgbWFza0NvbG9yO1xyXG4vLyAgIGlmIChcclxuLy8gICAgIHZpZGVvICYmXHJcbi8vICAgICB2aWRlby5wcmV2aW91c1NpYmxpbmcgJiZcclxuLy8gICAgIHZpZGVvLnByZXZpb3VzU2libGluZy5ub2RlTmFtZSA9PSAnQ0FOVkFTJ1xyXG4vLyAgIClcclxuLy8gICAgIHJldHVybjtcclxuLy8gICBjb25zdCBsb2FkaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWRpbmcnKTtcclxuLy8gICBjb25zdCBNTF9Mb2FkaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ01MX0xvYWRpbmcnKTtcclxuLy8gICBNTF9Mb2FkaW5nLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuLy8gICBjb25zdCBzdGF0ZSA9IHtcclxuLy8gICAgIGJhY2tlbmQ6ICd3ZWJnbCcsXHJcbi8vICAgICBtYXhGYWNlczogMSxcclxuLy8gICAgIHRyaWFuZ3VsYXRlTWVzaDogdHJ1ZSxcclxuLy8gICAgIHByZWRpY3RJcmlzZXM6IGZhbHNlLFxyXG4vLyAgIH07XHJcblxyXG4vLyAgIGNvbnN0IE5VTV9LRVlQT0lOVFMgPSA0Njg7XHJcbi8vICAgY29uc3QgTlVNX0lSSVNfS0VZUE9JTlRTID0gNTtcclxuLy8gICBjb25zdCBHUkVFTiA9ICcjMzJFRURCJztcclxuLy8gICBjb25zdCBSRUQgPSAnI0ZGMkMzNSc7XHJcbi8vICAgY29uc3QgQkxVRSA9ICcjMTU3QUIzJztcclxuLy8gICBsZXQgdGVzdFdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVzdFdyYXBwZXInKTtcclxuLy8gICBsZXQgaGVhZGVyV3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXJXcmFwcGVyJyk7XHJcblxyXG4vLyAgIGNvbnN0IHRocm90dGxlciA9IHRocm90dGxpbmcoKTtcclxuLy8gICBjb25zdCBwcm9ncmVzc0JhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9ncmVzc0JhcicpO1xyXG4vLyAgIGNvbnN0IHBlcmNlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZ3Jlc3NQZXJjZW50Jyk7XHJcbi8vICAgY29uc3QgcHJvZ3Jlc3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZ3Jlc3NDb250YWluZXInKTtcclxuLy8gICBjb25zdCB0ZXN0RXhwbGFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXN0RXhwbGFpbicpO1xyXG4vLyAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuLy8gICBsZXQgY2FtQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbi8vICAgbGV0IGNvbnRleHQgPSBjYW1DYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuLy8gICBsZXQgY250ID0gMDtcclxuLy8gICBsZXQgY29sb3JTdW0gPSB7fTtcclxuLy8gICBsZXQgZXllQ29sb3IgPSBbXTtcclxuLy8gICBsZXQgY2hlZWtDb2xvciA9IFtdO1xyXG4vLyAgIGxldCBqYXdDb2xvciA9IFtdO1xyXG4vLyAgIGxldCB0eXBlQXJyID0gZ2V0RGV2aWNlVHlwZSgpO1xyXG5cclxuLy8gICBpZiAoZmFjZUJvYXJkID09ICdtYXNrJykge1xyXG4vLyAgICAgbGV0IGJlaWdlX2xlZnQgPSBuZXcgSW1hZ2UoKTtcclxuLy8gICAgIGJlaWdlX2xlZnQuc3JjID0gYCR7cHJvY2Vzcy5lbnYuUEFUSH0vaW1hZ2VzL2JlaWdlLWxlZnQucG5nYDtcclxuLy8gICAgIGxldCBiZWlnZV9yaWdodCA9IG5ldyBJbWFnZSgpO1xyXG4vLyAgICAgYmVpZ2VfcmlnaHQuc3JjID0gYCR7cHJvY2Vzcy5lbnYuUEFUSH0vaW1hZ2VzL2JlaWdlLXJpZ2h0LnBuZ2A7XHJcbi8vICAgICBsZXQgbWludF9sZWZ0ID0gbmV3IEltYWdlKCk7XHJcbi8vICAgICBtaW50X2xlZnQuc3JjID0gYCR7cHJvY2Vzcy5lbnYuUEFUSH0vaW1hZ2VzL21pbnQtbGVmdC5wbmdgO1xyXG4vLyAgICAgbGV0IG1pbnRfcmlnaHQgPSBuZXcgSW1hZ2UoKTtcclxuLy8gICAgIG1pbnRfcmlnaHQuc3JjID0gYCR7cHJvY2Vzcy5lbnYuUEFUSH0vaW1hZ2VzL21pbnQtcmlnaHQucG5nYDtcclxuLy8gICAgIGxldCBibGFja19sZWZ0ID0gbmV3IEltYWdlKCk7XHJcbi8vICAgICBibGFja19sZWZ0LnNyYyA9IGAke3Byb2Nlc3MuZW52LlBBVEh9L2ltYWdlcy9ibGFjay1sZWZ0LnBuZ2A7XHJcbi8vICAgICBsZXQgYmxhY2tfcmlnaHQgPSBuZXcgSW1hZ2UoKTtcclxuLy8gICAgIGJsYWNrX3JpZ2h0LnNyYyA9IGAke3Byb2Nlc3MuZW52LlBBVEh9L2ltYWdlcy9ibGFjay1yaWdodC5wbmdgO1xyXG4vLyAgICAgbGV0IHdoaXRlX2xlZnQgPSBuZXcgSW1hZ2UoKTtcclxuLy8gICAgIHdoaXRlX2xlZnQuc3JjID0gYCR7cHJvY2Vzcy5lbnYuUEFUSH0vaW1hZ2VzL3doaXRlLWxlZnQucG5nYDtcclxuLy8gICAgIGxldCB3aGl0ZV9yaWdodCA9IG5ldyBJbWFnZSgpO1xyXG4vLyAgICAgd2hpdGVfcmlnaHQuc3JjID0gYCR7cHJvY2Vzcy5lbnYuUEFUSH0vaW1hZ2VzL3doaXRlLXJpZ2h0LnBuZ2A7XHJcbi8vICAgICBsZXQgcHVycGxlX2xlZnQgPSBuZXcgSW1hZ2UoKTtcclxuLy8gICAgIHB1cnBsZV9sZWZ0LnNyYyA9IGAke3Byb2Nlc3MuZW52LlBBVEh9L2ltYWdlcy9wdXJwbGUtbGVmdC5wbmdgO1xyXG4vLyAgICAgbGV0IHB1cnBsZV9yaWdodCA9IG5ldyBJbWFnZSgpO1xyXG4vLyAgICAgcHVycGxlX3JpZ2h0LnNyYyA9IGAke3Byb2Nlc3MuZW52LlBBVEh9L2ltYWdlcy9wdXJwbGUtcmlnaHQucG5nYDtcclxuLy8gICAgIGxldCBwaW5rX2xlZnQgPSBuZXcgSW1hZ2UoKTtcclxuLy8gICAgIHBpbmtfbGVmdC5zcmMgPSBgJHtwcm9jZXNzLmVudi5QQVRIfS9pbWFnZXMvcGluay1sZWZ0LnBuZ2A7XHJcbi8vICAgICBsZXQgcGlua19yaWdodCA9IG5ldyBJbWFnZSgpO1xyXG4vLyAgICAgcGlua19yaWdodC5zcmMgPSBgJHtwcm9jZXNzLmVudi5QQVRIfS9pbWFnZXMvcGluay1yaWdodC5wbmdgO1xyXG5cclxuLy8gICAgIG1hc2tDb2xvciA9IHtcclxuLy8gICAgICAgd2hpdGU6IFt3aGl0ZV9sZWZ0LCB3aGl0ZV9yaWdodF0sXHJcbi8vICAgICAgIGJsYWNrOiBbYmxhY2tfbGVmdCwgYmxhY2tfcmlnaHRdLFxyXG4vLyAgICAgICBwaW5rOiBbcGlua19sZWZ0LCBwaW5rX3JpZ2h0XSxcclxuLy8gICAgICAgcHVycGxlOiBbcHVycGxlX2xlZnQsIHB1cnBsZV9yaWdodF0sXHJcbi8vICAgICAgIGJlaWdlOiBbYmVpZ2VfbGVmdCwgYmVpZ2VfcmlnaHRdLFxyXG4vLyAgICAgICBtaW50OiBbbWludF9sZWZ0LCBtaW50X3JpZ2h0XSxcclxuLy8gICAgIH07XHJcbi8vICAgICBtYXNrQ29sb3Jbc3RvcmUuZ2V0U3RhdGUoKS5Db2xvclJlZHVjZXIubWFpbk1hc2tDb2xvcl1bMV0ub25sb2FkID0gKCkgPT5cclxuLy8gICAgICAgbWFpbigpO1xyXG4vLyAgIH0gZWxzZSBpZiAoZmFjZUJvYXJkID09ICdzY2FuJykge1xyXG4vLyAgICAgc3RvcmUuZGlzcGF0Y2goYWN0aW9uQ3JlYXRvcnMuc2V0U2NhblRyaWdnZXIodHJ1ZSkpO1xyXG4vLyAgICAgbGV0IGJlZm9yZVBvcHVwID0gc3RvcmUuZ2V0U3RhdGUoKS5Db2xvclJlZHVjZXIuc2NhblRyaWdnZXI7XHJcbi8vICAgICBzdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4vLyAgICAgICBjb25zdCBhZnRlclBvcHVwID0gc3RvcmUuZ2V0U3RhdGUoKS5Db2xvclJlZHVjZXIuc2NhblRyaWdnZXI7XHJcbi8vICAgICAgIGlmIChiZWZvcmVQb3B1cCAhPSBhZnRlclBvcHVwKSB7XHJcbi8vICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbi8vICAgICAgICAgICBtYWluKCk7XHJcbi8vICAgICAgICAgfSwgMTAwKTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfSk7XHJcbi8vICAgfSBlbHNlIG1haW4oKTtcclxuXHJcbi8vICAgLy8gaWYgKHJlbmRlclBvaW50Y2xvdWQpIHtcclxuLy8gICAvLyAgIHN0YXRlLnJlbmRlclBvaW50Y2xvdWQgPSB0cnVlO1xyXG4vLyAgIC8vIH1cclxuXHJcbi8vICAgYXN5bmMgZnVuY3Rpb24gc2V0dXBDYW1lcmEoKSB7XHJcbi8vICAgICB2aWRlbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWRlbycpO1xyXG4vLyAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4vLyAgICAgICB2aWRlby5vbmxvYWRlZG1ldGFkYXRhID0gKCkgPT4ge1xyXG4vLyAgICAgICAgIHJlc29sdmUodmlkZW8pO1xyXG4vLyAgICAgICB9O1xyXG4vLyAgICAgfSk7XHJcbi8vICAgfVxyXG5cclxuLy8gICBhc3luYyBmdW5jdGlvbiByZW5kZXJQcmVkaWN0aW9uKCkge1xyXG4vLyAgICAgbW9kZWwudGhlbihhc3luYyBkYXRhID0+IHtcclxuLy8gICAgICAgbGV0IHByZWRpY3Rpb25zO1xyXG4vLyAgICAgICB0cnkge1xyXG4vLyAgICAgICAgIHByZWRpY3Rpb25zID0gYXdhaXQgZGF0YS5lc3RpbWF0ZUZhY2VzKHtcclxuLy8gICAgICAgICAgIGlucHV0OiB2aWRlbyxcclxuLy8gICAgICAgICAgIHJldHVyblRlbnNvcnM6IGZhbHNlLFxyXG4vLyAgICAgICAgICAgZmxpcEhvcml6b250YWw6IGZhbHNlLFxyXG4vLyAgICAgICAgICAgcHJlZGljdElyaXNlczogc3RhdGUucHJlZGljdElyaXNlcyxcclxuLy8gICAgICAgICB9KTtcclxuLy8gICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuLy8gICAgICAgICAgIHJlbmRlclByZWRpY3Rpb24oKTtcclxuLy8gICAgICAgICB9LCAzMDApO1xyXG4vLyAgICAgICAgIHJldHVybjtcclxuLy8gICAgICAgfVxyXG5cclxuLy8gICAgICAgYXdhaXQgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4vLyAgICAgICBhd2FpdCBjb250ZXh0LmRyYXdJbWFnZSh2aWRlbywgMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuLy8gICAgICAgaWYgKHByZWRpY3Rpb25zLmxlbmd0aCA+IDApIHtcclxuLy8gICAgICAgICBNTF9Mb2FkaW5nLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbi8vICAgICAgICAgY29uc3Qga2V5cG9pbnRzID0gcHJlZGljdGlvbnNbMF0uc2NhbGVkTWVzaDtcclxuLy8gICAgICAgICBjb25zdCBib3hQb3MgPSBwcmVkaWN0aW9uc1swXS5ib3VuZGluZ0JveDtcclxuLy8gICAgICAgICBjb25zdCBwb3NpdGlvbnMgPSBhd2FpdCBrZXlwb2ludHMubWFwKGkgPT4ge1xyXG4vLyAgICAgICAgICAgLy9mYWNlbWVzaOuKlCDruYTrlJTsmKTsnZggY2xpZW507IKs7J207KaI6rCA7JWE64uMIHZpZGVv7IKs7J207KaI66W8IOq4sOykgOycvOuhnCDtj6zsp4DshZjsnYQg66as7YS07ZWc64ukLlxyXG4vLyAgICAgICAgICAgLy/qt7jrnpjshJwg6riw6riw7JeQIOunnuqyjCDrp57strDsp4Qg7LqU67KE7Iqk7JeQ64qUIOunnuyngCDslYrquLAg65WM66y47JeQIO2VtOuLuSDruYTsnKjroZwg7KCE7ZmY7ZW07KO864qUIOyekeyXheydhCDqsbDss5Dslbwg7ZWc64ukLlxyXG4vLyAgICAgICAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICAgICAgeDogaVswXSAvICh2aWRlby52aWRlb1dpZHRoIC8gdmlkZW9XaWR0aCksXHJcbi8vICAgICAgICAgICAgIHk6IGlbMV0gLyAodmlkZW8udmlkZW9IZWlnaHQgLyB2aWRlb0hlaWdodCksXHJcbi8vICAgICAgICAgICB9O1xyXG4vLyAgICAgICAgIH0pO1xyXG5cclxuLy8gICAgICAgICBpZiAoZmFjZUJvYXJkID09ICdzY2FuJykge1xyXG4vLyAgICAgICAgICAgdGVzdEV4cGxhaW4uaW5uZXJIVE1MID0gYO2UvOu2gOyDieydhCDstpTstpwg7KSRIOyeheuLiOuLpC48YnI+IDxzcGFuIHN0eWxlPVwiY29sb3IgOiAjOWI4NWQwO1wiPlRpcCA6IOy1nOuMgO2VnCDruZvsnZgg7JiB7Zal7J2EIOuwm+yngCDslYrripQg6rOz7JeQ7IScIOy4oeygle2VtOuztOyEuOyalCE8L3NwYW4+YDtcclxuLy8gICAgICAgICAgIGNudCsrO1xyXG4vLyAgICAgICAgICAgaWYgKGNudCA9PSA2MSkge1xyXG4vLyAgICAgICAgICAgICBsb2FkaW5nLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4vLyAgICAgICAgICAgICBjb2xvclN1bS5leWUgPSBleWVDb2xvci5yZWR1Y2UoKGEsIGIpID0+IHtcclxuLy8gICAgICAgICAgICAgICByZXR1cm4gW2FbMF0gKyBiWzBdLCBhWzFdICsgYlsxXSwgYVsyXSArIGJbMl1dO1xyXG4vLyAgICAgICAgICAgICB9KTtcclxuLy8gICAgICAgICAgICAgY29sb3JTdW0uY2hlZWsgPSBjaGVla0NvbG9yLnJlZHVjZSgoYSwgYikgPT4ge1xyXG4vLyAgICAgICAgICAgICAgIHJldHVybiBbYVswXSArIGJbMF0sIGFbMV0gKyBiWzFdLCBhWzJdICsgYlsyXV07XHJcbi8vICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgICAgICBjb2xvclN1bS5qYXcgPSBqYXdDb2xvci5yZWR1Y2UoKGEsIGIpID0+IHtcclxuLy8gICAgICAgICAgICAgICByZXR1cm4gW2FbMF0gKyBiWzBdLCBhWzFdICsgYlsxXSwgYVsyXSArIGJbMl1dO1xyXG4vLyAgICAgICAgICAgICB9KTtcclxuLy8gICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGNvbG9yU3VtKSB7XHJcbi8vICAgICAgICAgICAgICAgY29sb3JTdW1ba2V5XSA9IGNvbG9yU3VtW2tleV0ubWFwKGkgPT4gaSAvIDYwKTtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICB0aHJvdHRsZXIudGhyb3R0bGUoKCkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgIC8vIGNvbnN0IGZvcm0gPSBuZXcgRm9ybURhdGEoKVxyXG4vLyAgICAgICAgICAgICAgIC8vIGZvcm0uYXBwZW5kKFwiZmlsZVwiLCBjYW52YXNUb0ltZyhjYW1DYW52YXMpKVxyXG4vLyAgICAgICAgICAgICAgIC8vIGF4aW9zLnBvc3QoJy9zZW5kSW1nJywgZm9ybSlcclxuLy8gICAgICAgICAgICAgICBheGlvc1xyXG4vLyAgICAgICAgICAgICAgICAgLnBvc3QoJy9nZXRTZWFzb24nLCBjb2xvclN1bSlcclxuLy8gICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICAgIGNvbG9yQXZnKGNvbG9yU3VtLCByZXMuZGF0YSk7XHJcbi8vICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJlcy5kYXRhKS5jbGljaygpO1xyXG4vLyAgICAgICAgICAgICAgICAgICBjb25zdCBzdHJlYW0gPSB2aWRlby5zcmNPYmplY3Q7IC8v67mE65SU7JikIOyKpO2KuOumvFxyXG4vLyAgICAgICAgICAgICAgICAgICBjb25zdCB0cmFja3MgPSBzdHJlYW0uZ2V0VHJhY2tzKCk7IC8v7Yq4656ZXHJcbi8vICAgICAgICAgICAgICAgICAgIHRyYWNrc1swXS5zdG9wKCk7IC8v7Iqk7Yq466a8IOykkeuLqFxyXG4vLyAgICAgICAgICAgICAgICAgfSlcclxuLy8gICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4vLyAgICAgICAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgICAgIH0sIDUwMCk7XHJcbi8vICAgICAgICAgICAgIHJldHVybjtcclxuLy8gICAgICAgICAgIH1cclxuLy8gICAgICAgICAgIGlmIChjbnQgPiA2MSAmJiBmYWNlQm9hcmQgPT0gJ3NjYW4nKSByZXR1cm47XHJcblxyXG4vLyAgICAgICAgICAgYXdhaXQgY3R4LmJlZ2luUGF0aCgpO1xyXG4vLyAgICAgICAgICAgLy8gYXdhaXQgY3R4Lm1vdmVUbyhib3hQb3MudG9wTGVmdFswXSAvICh2aWRlby52aWRlb1dpZHRoIC8gdmlkZW9XaWR0aCksIChib3hQb3MudG9wTGVmdFsxXSAvICh2aWRlby52aWRlb1dpZHRoIC8gdmlkZW9XaWR0aCkpICogMilcclxuLy8gICAgICAgICAgIC8vIGF3YWl0IGN0eC5saW5lVG8oYm94UG9zLmJvdHRvbVJpZ2h0WzBdIC8gKHZpZGVvLnZpZGVvV2lkdGggLyB2aWRlb1dpZHRoKSwgKGJveFBvcy50b3BMZWZ0WzFdIC8gKHZpZGVvLnZpZGVvV2lkdGggLyB2aWRlb1dpZHRoKSkgKiAyKVxyXG4vLyAgICAgICAgICAgLy8gYXdhaXQgY3R4LmxpbmVUbyhib3hQb3MuYm90dG9tUmlnaHRbMF0gLyAodmlkZW8udmlkZW9XaWR0aCAvIHZpZGVvV2lkdGgpLCAoYm94UG9zLmJvdHRvbVJpZ2h0WzFdIC8gKHZpZGVvLnZpZGVvV2lkdGggLyB2aWRlb1dpZHRoKSkgKiAxLjM1KVxyXG4vLyAgICAgICAgICAgLy8gYXdhaXQgY3R4LmxpbmVUbyhib3hQb3MudG9wTGVmdFswXSAvICh2aWRlby52aWRlb1dpZHRoIC8gdmlkZW9XaWR0aCksIChib3hQb3MuYm90dG9tUmlnaHRbMV0gLyAodmlkZW8udmlkZW9XaWR0aCAvIHZpZGVvV2lkdGgpKSAqIDEuMzUpXHJcbi8vICAgICAgICAgICBhd2FpdCBjdHgubW92ZVRvKFxyXG4vLyAgICAgICAgICAgICBwb3NpdGlvbnNbMjM0XS54ICsgcG9zaXRpb25zWzIzNF0ueCAqIC0wLjA1LFxyXG4vLyAgICAgICAgICAgICBwb3NpdGlvbnNbMTBdLnksXHJcbi8vICAgICAgICAgICApO1xyXG4vLyAgICAgICAgICAgYXdhaXQgY3R4LmxpbmVUbyhcclxuLy8gICAgICAgICAgICAgcG9zaXRpb25zWzQ1NF0ueCArIHBvc2l0aW9uc1s0NTRdLnggKiAwLjA1LFxyXG4vLyAgICAgICAgICAgICBwb3NpdGlvbnNbMTBdLnksXHJcbi8vICAgICAgICAgICApO1xyXG4vLyAgICAgICAgICAgYXdhaXQgY3R4LmxpbmVUbyhcclxuLy8gICAgICAgICAgICAgcG9zaXRpb25zWzQ1NF0ueCArIHBvc2l0aW9uc1s0NTRdLnggKiAwLjA1LFxyXG4vLyAgICAgICAgICAgICBwb3NpdGlvbnNbMTUyXS55LFxyXG4vLyAgICAgICAgICAgKTtcclxuLy8gICAgICAgICAgIGF3YWl0IGN0eC5saW5lVG8oXHJcbi8vICAgICAgICAgICAgIHBvc2l0aW9uc1syMzRdLnggKyBwb3NpdGlvbnNbMjM0XS54ICogLTAuMDUsXHJcbi8vICAgICAgICAgICAgIHBvc2l0aW9uc1sxNTJdLnksXHJcbi8vICAgICAgICAgICApO1xyXG4vLyAgICAgICAgICAgYXdhaXQgY3R4LmNsb3NlUGF0aCgpO1xyXG4vLyAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDM7XHJcbi8vICAgICAgICAgICBhd2FpdCBjdHguc3Ryb2tlKCk7XHJcblxyXG4vLyAgICAgICAgICAgY29uc3QgZXllTGVuZ3RoID0gTWF0aC5hYnMocG9zaXRpb25zWzRdLnkgLSBwb3NpdGlvbnNbMV0ueSk7XHJcbi8vICAgICAgICAgICBjb25zdCByaWdodENoZWVrID0gcG9zaXRpb25zWzQyNV07XHJcbi8vICAgICAgICAgICBjb25zdCBsZWZ0Q2hlZWsgPSB7XHJcbi8vICAgICAgICAgICAgIHg6IHBvc2l0aW9uc1syMDVdLnggLSBleWVMZW5ndGgsXHJcbi8vICAgICAgICAgICAgIHk6IHBvc2l0aW9uc1syMDVdLnksXHJcbi8vICAgICAgICAgICB9O1xyXG4vLyAgICAgICAgICAgY29uc3QgbGVmdFVuZGVyRXllID0gcG9zaXRpb25zWzExMF07XHJcblxyXG4vLyAgICAgICAgICAgY29uc3QgcmlnaHRVbmRlckV5ZSA9IHBvc2l0aW9uc1syNTJdO1xyXG5cclxuLy8gICAgICAgICAgIGNvbnN0IGphdyA9IHBvc2l0aW9uc1syMDFdO1xyXG5cclxuLy8gICAgICAgICAgIC8vIGF3YWl0IGN0eC5maWxsUmVjdChsZWZ0Q2hlZWsueCxsZWZ0Q2hlZWsueSwtZXllTGVuZ3RoLCBleWVMZW5ndGgvMilcclxuLy8gICAgICAgICAgIC8vIGF3YWl0IGN0eC5maWxsUmVjdChyaWdodENoZWVrLngscmlnaHRDaGVlay55LGV5ZUxlbmd0aCwgZXllTGVuZ3RoLzIpXHJcbi8vICAgICAgICAgICAvLyBhd2FpdCBjdHguZmlsbFJlY3QobGVmdFVuZGVyRXllLngsbGVmdFVuZGVyRXllLnksZXllTGVuZ3RoLCBleWVMZW5ndGgvMilcclxuLy8gICAgICAgICAgIC8vIGF3YWl0IGN0eC5maWxsUmVjdChyaWdodFVuZGVyRXllLngscmlnaHRVbmRlckV5ZS55LGV5ZUxlbmd0aCwgZXllTGVuZ3RoLzIpXHJcbi8vICAgICAgICAgICAvLyBhd2FpdCBjdHguZmlsbFJlY3QoamF3LngsamF3LnksZXllTGVuZ3RoLCBleWVMZW5ndGgvMilcclxuXHJcbi8vICAgICAgICAgICBsZXQgbGVmdEV5ZVN1bSA9IG5ldyBnZXRDb2xvckRhdGEobGVmdFVuZGVyRXllLCBleWVMZW5ndGgsIGNvbnRleHQpO1xyXG4vLyAgICAgICAgICAgbGV0IHJpZ2h0RXllU3VtID0gbmV3IGdldENvbG9yRGF0YShyaWdodFVuZGVyRXllLCBleWVMZW5ndGgsIGNvbnRleHQpO1xyXG5cclxuLy8gICAgICAgICAgIGxldCBsZWZ0Q2hlZWtTdW0gPSBuZXcgZ2V0Q29sb3JEYXRhKGxlZnRDaGVlaywgZXllTGVuZ3RoLCBjb250ZXh0KTtcclxuLy8gICAgICAgICAgIGxldCByaWdodENoZWVrU3VtID0gbmV3IGdldENvbG9yRGF0YShyaWdodENoZWVrLCBleWVMZW5ndGgsIGNvbnRleHQpO1xyXG4vLyAgICAgICAgICAgbGV0IGphd1N1bSA9IG5ldyBnZXRDb2xvckRhdGEoamF3LCBleWVMZW5ndGgsIGNvbnRleHQpO1xyXG5cclxuLy8gICAgICAgICAgIGxldCBleWVSZXN1bHQgPSBhd2FpdCBsZWZ0RXllU3VtLm1hcCgoaSwgaWR4KSA9PiB7XHJcbi8vICAgICAgICAgICAgIHJldHVybiAoaSArIHJpZ2h0RXllU3VtW2lkeF0pIC8gMjtcclxuLy8gICAgICAgICAgIH0pO1xyXG5cclxuLy8gICAgICAgICAgIGxldCBjaGVla1Jlc3VsdCA9IGF3YWl0IGxlZnRDaGVla1N1bS5tYXAoKGksIGlkeCkgPT4ge1xyXG4vLyAgICAgICAgICAgICByZXR1cm4gKGkgKyByaWdodENoZWVrU3VtW2lkeF0pIC8gMjtcclxuLy8gICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgICAgZXllQ29sb3IucHVzaChleWVSZXN1bHQpO1xyXG4vLyAgICAgICAgICAgY2hlZWtDb2xvci5wdXNoKGNoZWVrUmVzdWx0KTtcclxuLy8gICAgICAgICAgIGphd0NvbG9yLnB1c2goamF3U3VtKTtcclxuXHJcbi8vICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke1xyXG4vLyAgICAgICAgICAgICAoZXllUmVzdWx0WzBdICsgY2hlZWtSZXN1bHRbMF0gKyBqYXdTdW1bMF0pIC8gM1xyXG4vLyAgICAgICAgICAgfSwkeyhleWVSZXN1bHRbMV0gKyBjaGVla1Jlc3VsdFsxXSArIGphd1N1bVsxXSkgLyAzfSwke1xyXG4vLyAgICAgICAgICAgICAoZXllUmVzdWx0WzJdICsgY2hlZWtSZXN1bHRbMl0gKyBqYXdTdW1bMl0pIC8gM1xyXG4vLyAgICAgICAgICAgfSlgO1xyXG5cclxuLy8gICAgICAgICAgIGNvbnN0IHJnYkJveCA9IChjYW52YXMuaGVpZ2h0ICsgY2FudmFzLndpZHRoKSAvIDIgLyA0O1xyXG4vLyAgICAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHJnYkJveCwgcmdiQm94KTtcclxuXHJcbi8vICAgICAgICAgICBpZiAoY250IDwgNjEpIHtcclxuLy8gICAgICAgICAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9ncmVzc0JhclwiKS5zdHlsZS53aWR0aCA9IGNudCoyICsgXCIlXCJcclxuLy8gICAgICAgICAgICAgLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZ3Jlc3NwZXJjZW50XCIpLmlubmVyVGV4dCA9IGNudCoyICsgXCIlXCJcclxuLy8gICAgICAgICAgICAgcHJvZ3Jlc3NDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtZmxleCc7XHJcbi8vICAgICAgICAgICAgIGZvciAobGV0IGkgPSAzOyBpID49IDA7IGktLSkge1xyXG4vLyAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBjbnQgKiAxLjY1O1xyXG4vLyAgICAgICAgICAgICAgIGxldCBwcm9ncmVzc1VuaXQgPSByZXN1bHQudG9GaXhlZCgxKSAtIGk7XHJcbi8vICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSBwcm9ncmVzc1VuaXQgKyAnJSc7XHJcbi8vICAgICAgICAgICAgICAgcGVyY2VudC5pbm5lclRleHQgPSBwcm9ncmVzc1VuaXQgKyAnJSc7XHJcbi8vICAgICAgICAgICAgICAgaWYgKGNudCA9PT0gNjApIHtcclxuLy8gICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG4vLyAgICAgICAgICAgICAgICAgcGVyY2VudC5pbm5lclRleHQgPSAnMTAwJSc7XHJcbi8vICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfSBlbHNlIGlmIChmYWNlQm9hcmQgPT0gJ2ZhY2Vib2FyZCcpIHtcclxuLy8gICAgICAgICAgIHRlc3RFeHBsYWluLmlubmVyVGV4dCA9XHJcbi8vICAgICAgICAgICAgICfqsIDsnqUg7Ja86rW07J20IO2ZlOyCrO2VtOyngOuKlCDtlYTthLDrpbwg7ZmV7J24IO2bhCDqsrDqs7wg7ZmV7J24IOuyhO2KvOydhCDriIzrn6zso7zshLjsmpQnO1xyXG4vLyAgICAgICAgICAgbGV0IGNvbG9yUmdiID0gc3RvcmUuZ2V0U3RhdGUoKS5Db2xvclJlZHVjZXIubWFpbkZhY2VCb2FyZENvbG9yO1xyXG4vLyAgICAgICAgICAgbmV3IEZhY2VCb2FyZChwb3NpdGlvbnMsIGNvbG9yUmdiLCBjYW52YXMpO1xyXG4vLyAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICB0ZXN0RXhwbGFpbi5pbm5lclRleHQgPVxyXG4vLyAgICAgICAgICAgICAn7ZWY64uo7J2YIOuniOyKpO2BrOulvCDshKDtg53tlZjsl6wg7ZWE7YSw66W8IOyggeyaqe2VtOuztOyEuOyalCc7XHJcbi8vICAgICAgICAgICBsZXQgbWFpbkNvbG9yID1cclxuLy8gICAgICAgICAgICAgbWFza0NvbG9yW3N0b3JlLmdldFN0YXRlKCkuQ29sb3JSZWR1Y2VyLm1haW5NYXNrQ29sb3JdO1xyXG4vLyAgICAgICAgICAgbGV0IGxlZnRNYXNrID0gbWFpbkNvbG9yWzBdO1xyXG4vLyAgICAgICAgICAgbGV0IHJpZ2h0TWFzayA9IG1haW5Db2xvclsxXTtcclxuLy8gICAgICAgICAgIG5ldyBNYXNrRHJhdyhcclxuLy8gICAgICAgICAgICAgY2FudmFzLFxyXG4vLyAgICAgICAgICAgICBsZWZ0TWFzayxcclxuLy8gICAgICAgICAgICAgcmlnaHRNYXNrLFxyXG4vLyAgICAgICAgICAgICBwb3NpdGlvbnMsXHJcbi8vICAgICAgICAgICAgIHR5cGVBcnJbMF0sXHJcbi8vICAgICAgICAgICAgIHR5cGVBcnJbMV0sXHJcbi8vICAgICAgICAgICAgIHR5cGVBcnJbMl0sXHJcbi8vICAgICAgICAgICApO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfSBlbHNlXHJcbi8vICAgICAgICAgdGVzdEV4cGxhaW4uaW5uZXJIVE1MID0gYOyWvOq1tOydhCDsnbjsi53tlaAg7IiYIOyeiOuPhOuhnSDsubTrqZTrnbzrpbwg67CU652867SQ7KO87IS47JqULjxicj4gPHNwYW4gc3R5bGU9XCJjb2xvciA6ICM5Yjg1ZDA7XCI+VGlwIDog7LWc64yA7ZWcIOu5m+ydmCDsmIHtlqXsnYQg67Cb7KeAIOyViuuKlCDqs7Psl5DshJwg7Lih7KCV7ZW067O07IS47JqUITwvc3Bhbj5gO1xyXG5cclxuLy8gICAgICAgcmFmSUQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyUHJlZGljdGlvbik7XHJcbi8vICAgICB9KTtcclxuXHJcbi8vICAgICAvLyAgIHN0YXRzLmVuZCgpO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgYXN5bmMgZnVuY3Rpb24gbWFpbigpIHtcclxuLy8gICAgIGlmIChmYWNlQm9hcmQgIT0gJ21hc2snKSB7XHJcbi8vICAgICAgIGhlYWRlcldyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuLy8gICAgICAgaGVhZGVyV3JhcHBlci5zdHlsZS5vcGFjaXR5ID0gMDtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBhd2FpdCB0Zi5zZXRCYWNrZW5kKHN0YXRlLmJhY2tlbmQpO1xyXG4vLyAgICAgLy8gICBzdGF0cy5zaG93UGFuZWwoMCk7ICAvLyAwOiBmcHMsIDE6IG1zLCAyOiBtYiwgMys6IGN1c3RvbVxyXG4vLyAgICAgLy8gICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN0YXRzLmRvbSk7XHJcblxyXG4vLyAgICAgdGVzdFdyYXBwZXIuc3R5bGUub3BhY2l0eSA9IDE7XHJcblxyXG4vLyAgICAgdmlkZW8ucGxheSgpO1xyXG4vLyAgICAgdmlkZW8uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbi8vICAgICBjYW52YXMuY2xhc3NOYW1lID0gJ2ZhY2VDYW52YXMnO1xyXG4vLyAgICAgdmlkZW9XaWR0aCA9IHZpZGVvLmNsaWVudFdpZHRoO1xyXG4vLyAgICAgY2FudmFzLndpZHRoID0gdmlkZW9XaWR0aDtcclxuLy8gICAgIGNhbnZhcy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbi8vICAgICBjYW52YXMuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKC0xLDEpJztcclxuLy8gICAgIGNhbnZhcy5zdHlsZS56SW5kZXggPSAnIDk5OCc7XHJcbi8vICAgICBjYW52YXMuc3R5bGUubGVmdCA9ICcwJztcclxuLy8gICAgIGNhbUNhbnZhcy5jbGFzc05hbWUgPSAnZmFjZUNhbnZhcyc7XHJcbi8vICAgICBjYW1DYW52YXMuaWQgPSAnY2FtQ2FudmFzJztcclxuLy8gICAgIGNhbUNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuLy8gICAgIGNhbUNhbnZhcy53aWR0aCA9IHZpZGVvV2lkdGg7XHJcbi8vICAgICBpZiAodHlwZUFyclsyXSkge1xyXG4vLyAgICAgICB2aWRlb0hlaWdodCA9IDMzODtcclxuLy8gICAgICAgY2FudmFzLmhlaWdodCA9IDMzODtcclxuLy8gICAgICAgY2FtQ2FudmFzLmhlaWdodCA9IDMzODtcclxuLy8gICAgIH0gZWxzZSB7XHJcbi8vICAgICAgIHZpZGVvSGVpZ2h0ID0gdmlkZW8uY2xpZW50SGVpZ2h0O1xyXG4vLyAgICAgICBjYW52YXMuaGVpZ2h0ID0gdmlkZW8uY2xpZW50SGVpZ2h0O1xyXG4vLyAgICAgICBjYW1DYW52YXMuaGVpZ2h0ID0gdmlkZW8uY2xpZW50SGVpZ2h0O1xyXG4vLyAgICAgfVxyXG4vLyAgICAgY2FtQ2FudmFzLnN0eWxlLnpJbmRleCA9ICc5OTgnO1xyXG4vLyAgICAgY2FtQ2FudmFzLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgtMSwxKSc7XHJcblxyXG4vLyAgICAgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbi8vICAgICBjdHguZmlsbFN0eWxlID0gR1JFRU47XHJcbi8vICAgICBjdHguc3Ryb2tlU3R5bGUgPSBHUkVFTjtcclxuLy8gICAgIGN0eC5saW5lV2lkdGggPSAwLjU7XHJcbi8vICAgICB0ZXN0V3JhcHBlci5pbnNlcnRCZWZvcmUoY2FtQ2FudmFzLCB0ZXN0V3JhcHBlci5maXJzdENoaWxkKTtcclxuLy8gICAgIHRlc3RXcmFwcGVyLmluc2VydEJlZm9yZShjYW52YXMsIHRlc3RXcmFwcGVyLmZpcnN0Q2hpbGQpO1xyXG4vLyAgICAgLy8gbW9kZWwgPSBhd2FpdCBmYWNlTGFuZG1hcmtzRGV0ZWN0aW9uLmxvYWQoXHJcbi8vICAgICAvLyAgICAgZmFjZUxhbmRtYXJrc0RldGVjdGlvbi5TdXBwb3J0ZWRQYWNrYWdlcy5tZWRpYXBpcGVGYWNlbWVzaCxcclxuLy8gICAgIC8vICAgICB7IG1heEZhY2VzOiBzdGF0ZS5tYXhGYWNlcyB9KTtcclxuLy8gICAgIHJlbmRlclByZWRpY3Rpb24oKTtcclxuLy8gICAgIC8vICAgYW5pID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKG1haW4pO1xyXG4vLyAgIH1cclxuLy8gICAvLyBsZXQgYW5pID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKG1haW4pO1xyXG4vLyB9XHJcbi8vIGltcG9ydCB7IHRocm90dGxpbmcgfSBmcm9tICcuLi8uLi91dGlscy90aHJvdHRsaW5nJztcclxuLy8gaW1wb3J0IEZhY2VCb2FyZCBmcm9tICcuL0ZhY2VCb2FyZCc7XHJcbmltcG9ydCBNYXNrRHJhdyBmcm9tICcuL01hc2tEcmF3JztcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4uLy4uL3N0b3JlJztcclxuaW1wb3J0IHsgYWN0aW9uQ3JlYXRvcnMgfSBmcm9tICcuLi8uLi9zdG9yZS9jb2xvclN0b3JlJztcclxuaW1wb3J0ICdAdGVuc29yZmxvdy90ZmpzLWJhY2tlbmQtd2ViZ2wnO1xyXG4vLyBpbXBvcnQgSW1hZ2VVcGxvYWQgZnJvbSAnLi9JbWFnZVVwbG9hZCc7XHJcbmltcG9ydCAqIGFzIGZhY2VMYW5kbWFya3NEZXRlY3Rpb24gZnJvbSAnQHRlbnNvcmZsb3ctbW9kZWxzL2ZhY2UtbGFuZG1hcmtzLWRldGVjdGlvbic7XHJcbmltcG9ydCBnZXREZXZpY2VUeXBlIGZyb20gJy4vZ2V0RGV2aWNlVHlwZSc7XHJcbi8vIGltcG9ydCBjYW52YXNUb0ltZyBmcm9tICcuL2NhbnZhc1RvSW1nJztcclxuLy8gaW1wb3J0IGdldEZhY2VJbWFnZURhdGEgZnJvbSAnLi9nZXRGYWNlSW1hZ2VEYXRhJztcclxuaW1wb3J0IHsgZHJhd0ZhY2VMaW5lIH0gZnJvbSAnLi9kcmF3RmFjZUxpbmUnO1xyXG5pbXBvcnQgZHJhd0ZhY2VCRyBmcm9tICcuL2RyYXdGYWNlQkcnO1xyXG5pbXBvcnQgKiBhcyB0ZiBmcm9tICdAdGVuc29yZmxvdy90ZmpzLWNvcmUnO1xyXG4vLyBpbXBvcnQgeyBUUklBTkdVTEFUSU9OIH0gZnJvbSAnLi90cmlhbmd1bGF0aW9ucyc7XHJcblxyXG5pbnRlcmZhY2UgY29sb3JUeXBlIHtcclxuICBba2V5OiBzdHJpbmddOiBIVE1MSW1hZ2VFbGVtZW50W107IC8v7YOA7J6F7Iqk7YGs66a97Yq47J2YIGluZGV4IHNpZ25hdHVyZeuwqeyLnVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBTdHJlYW1DYW52YXMoZmFjZUJvYXJkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICB0Zi5zZXRCYWNrZW5kKCd3ZWJnbCcpO1xyXG4gIGxldCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICBsZXQgdmlkZW9XaWR0aDogbnVtYmVyO1xyXG4gIGxldCB2aWRlb0hlaWdodDogbnVtYmVyO1xyXG4gIGNvbnN0IHZpZGVvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZGVvJykgYXMgSFRNTFZpZGVvRWxlbWVudDtcclxuICBjb25zdCBzdHJlYW0gPSB2aWRlbyEuc3JjT2JqZWN0IGFzIE1lZGlhU3RyZWFtOyAvL+u5hOuUlOyYpCDsiqTtirjrprxcclxuICBjb25zdCB0cmFja3MgPSBzdHJlYW0hLmdldFRyYWNrcygpOyAvL+2KuOuemVxyXG4gIC8vIGNvbnN0IGJnUG9zQXJyID0gW1xyXG4gIC8vICAgMTE3LCAzNDYsIDE5NSwgMjM0LCA0NTQsIDEwOSwgMzM4LCAzMzIsIDI1MSwgMzg5LCAzNTYsIDMyMywgMjg4LCAzNjUsIDQwMCxcclxuICAvLyAgIDE3NiwgMTM2LCA1OCwgOTMsIDEyNywgMTYyLCAyMSwgMTAzLCA2NywgMTAsIDI5NywgMjg0LCAzNjEsIDM3OCwgMzc5LCAxNTIsXHJcbiAgLy8gICAxNTAsIDE0OSwgMTcyLCAxMzIsXHJcbiAgLy8gXTtcclxuICBsZXQgZmFjZURvdERyYXc6IGRyYXdGYWNlTGluZTtcclxuICBsZXQgZmFjZUJnRHJhdzogZHJhd0ZhY2VCRztcclxuICBsZXQgbWFza0NvbG9yOiBjb2xvclR5cGU7XHJcbiAgbGV0IG1vZGVsOiBmYWNlTGFuZG1hcmtzRGV0ZWN0aW9uLkZhY2VMYW5kbWFya3NQYWNrYWdlO1xyXG4gIC8vIGlmIChcclxuICAvLyAgIHZpZGVvICYmXHJcbiAgLy8gICB2aWRlby5wcmV2aW91c1NpYmxpbmcgJiZcclxuICAvLyAgIHZpZGVvLnByZXZpb3VzU2libGluZy5ub2RlTmFtZSA9PSAnQ0FOVkFTJ1xyXG4gIC8vIClcclxuICAvLyAgIHJldHVybjtcclxuICAvLyBjb25zdCBsb2FkaW5nID0gZG9jdW1lbnQuZ2V0RSBsZW1lbnRCeUlkKCdsb2FkaW5nJyk7XHJcbiAgY29uc3QgTUxfTG9hZGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdNTF9Mb2FkaW5nJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgTUxfTG9hZGluZy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgLy8gc3RvcmUuZGlzcGF0Y2goYWN0aW9uQ3JlYXRvcnMuc2V0QW5pU3RvcChmYWxzZSkpO1xyXG4gIC8vIGNvbnN0IHN0YXRlID0ge1xyXG4gIC8vICAgYmFja2VuZDogJ3dlYmdsJyxcclxuICAvLyAgIG1heEZhY2VzOiAxLFxyXG4gIC8vICAgdHJpYW5ndWxhdGVNZXNoOiB0cnVlLFxyXG4gIC8vICAgcHJlZGljdElyaXNlczogZmFsc2UsXHJcbiAgLy8gfTtcclxuXHJcbiAgLy8gY29uc3QgTlVNX0tFWVBPSU5UUyA9IDQ2ODtcclxuICAvLyBjb25zdCBOVU1fSVJJU19LRVlQT0lOVFMgPSA1O1xyXG4gIC8vIGNvbnN0IFJFRCA9ICcjRkYyQzM1JztcclxuICAvLyBjb25zdCBCTFVFID0gJyMxNTdBQjMnO1xyXG4gIGNvbnN0IHByb2dyZXNzQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2dyZXNzQmFyJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgY29uc3QgcGVyY2VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9ncmVzc1BlcmNlbnQnKSBhcyBIVE1MRWxlbWVudDtcclxuICBjb25zdCBwcm9ncmVzc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgJ3Byb2dyZXNzQ29udGFpbmVyJyxcclxuICApIGFzIEhUTUxFbGVtZW50O1xyXG4gIGNvbnN0IEdSRUVOID0gJyMzMkVFREInO1xyXG4gIGNvbnN0IHRlc3RXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rlc3RXcmFwcGVyJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgY29uc3QgaGVhZGVyV3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgJ2hlYWRlcldyYXBwZXInLFxyXG4gICkgYXMgSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gIC8vIGNvbnN0IHRocm90dGxlciA9IHRocm90dGxpbmcoKTtcclxuICBjb25zdCB0ZXN0RXhwbGFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXN0RXhwbGFpbicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcmF3aW5nQ2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgLy8gY29uc3QgY29sb3JTdW0gPSB7fTtcclxuICAvLyBjb25zdCBleWVDb2xvciA9IFtdO1xyXG4gIC8vIGNvbnN0IGNoZWVrQ29sb3IgPSBbXTtcclxuICAvLyBjb25zdCBqYXdDb2xvciA9IFtdO1xyXG4gIGxldCBhbmlJZDogbnVtYmVyO1xyXG4gIGxldCBwcm9ncmVzc0NudCA9IDA7XHJcbiAgbGV0IGlzRGV0ZWN0ZWQgPSBmYWxzZTtcclxuICBjb25zdCB0eXBlQXJyID0gZ2V0RGV2aWNlVHlwZSgpO1xyXG4gIGNvbnN0IGljb24gPSBuZXcgSW1hZ2UoKTtcclxuICBpY29uLnNyYyA9IGAke3Byb2Nlc3MuZW52LlBBVEh9L2ltYWdlcy9iZWZvcmVDYW52YXNUaXRsZS5wbmdgO1xyXG4gIGNvbnN0IGljb24yID0gbmV3IEltYWdlKCk7XHJcbiAgaWNvbjIuc3JjID0gYCR7cHJvY2Vzcy5lbnYuUEFUSH0vaW1hZ2VzL2FmdGVyQ2FudmFzVGl0bGUucG5nYDtcclxuICBpZiAoZmFjZUJvYXJkID09ICdtYXNrJykge1xyXG4gICAgY29uc3QgYmVpZ2VfbGVmdCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgYmVpZ2VfbGVmdC5zcmMgPSBgJHtwcm9jZXNzLmVudi5QQVRIfS9pbWFnZXMvYmVpZ2UtbGVmdC5wbmdgO1xyXG4gICAgY29uc3QgYmVpZ2VfcmlnaHQgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGJlaWdlX3JpZ2h0LnNyYyA9IGAke3Byb2Nlc3MuZW52LlBBVEh9L2ltYWdlcy9iZWlnZS1yaWdodC5wbmdgO1xyXG4gICAgY29uc3QgbWludF9sZWZ0ID0gbmV3IEltYWdlKCk7XHJcbiAgICBtaW50X2xlZnQuc3JjID0gYCR7cHJvY2Vzcy5lbnYuUEFUSH0vaW1hZ2VzL21pbnQtbGVmdC5wbmdgO1xyXG4gICAgY29uc3QgbWludF9yaWdodCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgbWludF9yaWdodC5zcmMgPSBgJHtwcm9jZXNzLmVudi5QQVRIfS9pbWFnZXMvbWludC1yaWdodC5wbmdgO1xyXG4gICAgY29uc3QgYmxhY2tfbGVmdCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgYmxhY2tfbGVmdC5zcmMgPSBgJHtwcm9jZXNzLmVudi5QQVRIfS9pbWFnZXMvYmxhY2stbGVmdC5wbmdgO1xyXG4gICAgY29uc3QgYmxhY2tfcmlnaHQgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGJsYWNrX3JpZ2h0LnNyYyA9IGAke3Byb2Nlc3MuZW52LlBBVEh9L2ltYWdlcy9ibGFjay1yaWdodC5wbmdgO1xyXG4gICAgY29uc3Qgd2hpdGVfbGVmdCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgd2hpdGVfbGVmdC5zcmMgPSBgJHtwcm9jZXNzLmVudi5QQVRIfS9pbWFnZXMvd2hpdGUtbGVmdC5wbmdgO1xyXG4gICAgY29uc3Qgd2hpdGVfcmlnaHQgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHdoaXRlX3JpZ2h0LnNyYyA9IGAke3Byb2Nlc3MuZW52LlBBVEh9L2ltYWdlcy93aGl0ZS1yaWdodC5wbmdgO1xyXG4gICAgY29uc3QgcHVycGxlX2xlZnQgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHB1cnBsZV9sZWZ0LnNyYyA9IGAke3Byb2Nlc3MuZW52LlBBVEh9L2ltYWdlcy9wdXJwbGUtbGVmdC5wbmdgO1xyXG4gICAgY29uc3QgcHVycGxlX3JpZ2h0ID0gbmV3IEltYWdlKCk7XHJcbiAgICBwdXJwbGVfcmlnaHQuc3JjID0gYCR7cHJvY2Vzcy5lbnYuUEFUSH0vaW1hZ2VzL3B1cnBsZS1yaWdodC5wbmdgO1xyXG4gICAgY29uc3QgcGlua19sZWZ0ID0gbmV3IEltYWdlKCk7XHJcbiAgICBwaW5rX2xlZnQuc3JjID0gYCR7cHJvY2Vzcy5lbnYuUEFUSH0vaW1hZ2VzL3BpbmstbGVmdC5wbmdgO1xyXG4gICAgY29uc3QgcGlua19yaWdodCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgcGlua19yaWdodC5zcmMgPSBgJHtwcm9jZXNzLmVudi5QQVRIfS9pbWFnZXMvcGluay1yaWdodC5wbmdgO1xyXG5cclxuICAgIG1hc2tDb2xvciA9IHtcclxuICAgICAgd2hpdGU6IFt3aGl0ZV9sZWZ0LCB3aGl0ZV9yaWdodF0sXHJcbiAgICAgIGJsYWNrOiBbYmxhY2tfbGVmdCwgYmxhY2tfcmlnaHRdLFxyXG4gICAgICBwaW5rOiBbcGlua19sZWZ0LCBwaW5rX3JpZ2h0XSxcclxuICAgICAgcHVycGxlOiBbcHVycGxlX2xlZnQsIHB1cnBsZV9yaWdodF0sXHJcbiAgICAgIGJlaWdlOiBbYmVpZ2VfbGVmdCwgYmVpZ2VfcmlnaHRdLFxyXG4gICAgICBtaW50OiBbbWludF9sZWZ0LCBtaW50X3JpZ2h0XSxcclxuICAgIH07XHJcblxyXG4gICAgbWFza0NvbG9yW3N0b3JlLmdldFN0YXRlKCkuQ29sb3JSZWR1Y2VyLm1haW5NYXNrQ29sb3IhXVsxXS5vbmxvYWQgPSAoKSA9PlxyXG4gICAgICBtYWluKCk7XHJcbiAgfSBlbHNlIGlmIChmYWNlQm9hcmQgPT0gJ2ZhY2Vib2FyZCcpIHtcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2NvbG9yU2VsZWN0JywgJzAnKTtcclxuICAgIHN0b3JlLmRpc3BhdGNoKGFjdGlvbkNyZWF0b3JzLnNldFNjYW5TdGFydCh0cnVlKSk7XHJcbiAgICBtYWluKCk7XHJcbiAgfSBlbHNlIG1haW4oKTtcclxuXHJcbiAgLy8gaWYgKHJlbmRlclBvaW50Y2xvdWQpIHtcclxuICAvLyAgIHN0YXRlLnJlbmRlclBvaW50Y2xvdWQgPSB0cnVlO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gYXN5bmMgZnVuY3Rpb24gc2V0dXBDYW1lcmEoKTogUHJvbWlzZTxIVE1MVmlkZW9FbGVtZW50PiB7XHJcbiAgLy8gICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgLy8gICAgIHZpZGVvLm9ubG9hZGVkbWV0YWRhdGEgPSAoKSA9PiB7XHJcbiAgLy8gICAgICAgcmVzb2x2ZSh2aWRlbyk7XHJcbiAgLy8gICAgIH07XHJcbiAgLy8gICB9KTtcclxuICAvLyB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHJlbmRlclByZWRpY3Rpb24oKSB7XHJcbiAgICBjb25zdCBzcmNPYmo6IGFueSA9IHZpZGVvIS5zcmNPYmplY3Q7XHJcbiAgICBpZiAoIXNyY09iai5hY3RpdmUpIHtcclxuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pSWQpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgcHJlZGljdGlvbnM6IGFueTtcclxuICAgIHRyeSB7XHJcbiAgICAgIHByZWRpY3Rpb25zID0gYXdhaXQgbW9kZWwuZXN0aW1hdGVGYWNlcyh7XHJcbiAgICAgICAgaW5wdXQ6IHZpZGVvLFxyXG4gICAgICAgIHJldHVyblRlbnNvcnM6IGZhbHNlLFxyXG4gICAgICAgIGZsaXBIb3Jpem9udGFsOiBmYWxzZSxcclxuICAgICAgICBwcmVkaWN0SXJpc2VzOiBmYWxzZSxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICByZW5kZXJQcmVkaWN0aW9uKCk7XHJcbiAgICAgIH0sIDMwMCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIC8vIGF3YWl0IGNvbnRleHQuZHJhd0ltYWdlKHZpZGVvLCAwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXHJcbiAgICBpZiAoaXNEZXRlY3RlZCkgcHJvZ3Jlc3MoKTtcclxuICAgIGVsc2UgTUxfTG9hZGluZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgaWYgKHByZWRpY3Rpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3Qga2V5cG9pbnRzID0gcHJlZGljdGlvbnNbMF0uc2NhbGVkTWVzaDtcclxuICAgICAgLy8gY29uc3QgYm94UG9zID0gcHJlZGljdGlvbnNbMF0uYm91bmRpbmdCb3g7XHJcbiAgICAgIGNvbnN0IHZpZGVvV2lkdGhDYWxjID0gdmlkZW8udmlkZW9XaWR0aCAvIHZpZGVvV2lkdGg7XHJcbiAgICAgIGNvbnN0IHZpZGVvSGVpZ2h0Q2FsYyA9IHZpZGVvLnZpZGVvSGVpZ2h0IC8gdmlkZW9IZWlnaHQ7XHJcblxyXG4gICAgICAvLyBwb3NpdGlvbnMuZm9yRWFjaCgoaSxpZHgpPT57XHJcbiAgICAgIC8vICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2IoMCwwLDI1NSlcIlxyXG4gICAgICAvLyAgICAgY3R4LmZpbGxSZWN0KGkueCxpLnksMSwxKVxyXG4gICAgICAvLyB9KVxyXG4gICAgICBjb25zdCBwb3NpdGlvbnMgPSBrZXlwb2ludHMubWFwKChpOiBudW1iZXJbXSkgPT4ge1xyXG4gICAgICAgIC8vZmFjZW1lc2jripQg67mE65SU7Jik7J2YIGNsaWVudOyCrOydtOymiOqwgOyVhOuLjCB2aWRlb+yCrOydtOymiOulvCDquLDspIDsnLzroZwg7Y+s7KeA7IWY7J2EIOumrO2EtO2VnOuLpC5cclxuICAgICAgICAvL+q3uOuemOyEnCDquLDquLDsl5Ag66ee6rKMIOunnuy2sOynhCDsupTrsoTsiqTsl5DripQg66ee7KeAIOyViuq4sCDrlYzrrLjsl5Ag7ZW064u5IOu5hOycqOuhnCDsoITtmZjtlbTso7zripQg7J6R7JeF7J2EIOqxsOyzkOyVvCDtlZzri6QuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHg6IGlbMF0gLyB2aWRlb1dpZHRoQ2FsYyxcclxuICAgICAgICAgIHk6IGlbMV0gLyB2aWRlb0hlaWdodENhbGMsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChmYWNlQm9hcmQgPT0gJ3NjYW4nKSB7XHJcbiAgICAgICAgaWYgKCFpc0RldGVjdGVkKSB7XHJcbiAgICAgICAgICBwcm9ncmVzcygpO1xyXG4gICAgICAgICAgdGVzdEV4cGxhaW4uaW5uZXJIVE1MID0gYO2NvOyKpOuEkOy7rOufrCDsuKHsoJXsnYQg7JyE7ZW0IOyWvOq1tOydhCDstpTstpwg7KSR7J6F64uI64ukLjxicj4gPHNwYW4gc3R5bGU9XCJjb2xvciA6ICM5Yjg1ZDA7XCI+VGlwIDog7LWc64yA7ZWcIOu5m+ydmCDsmIHtlqXsnYQg67Cb7KeAIOyViuuKlCDqs7Psl5DshJwg7Lih7KCV7ZW067O07IS47JqUITwvc3Bhbj5gO1xyXG4gICAgICAgICAgaWYgKGZhY2VEb3REcmF3LmRyYXcocG9zaXRpb25zKSkgaXNEZXRlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlmIChcclxuICAgICAgICAvLyAgIHBvc2l0aW9uc1szMF0ueCA8IGNhbnZhcy53aWR0aCAvIDIgJiZcclxuICAgICAgICAvLyAgIHBvc2l0aW9uc1szMF0ueCA+IGNhbnZhcy53aWR0aCAvIDIgLSA1MCAmJlxyXG4gICAgICAgIC8vICAgcG9zaXRpb25zWzVdLnkgPCBjYW52YXMuaGVpZ2h0IC8gMiArIDEwMCAmJlxyXG4gICAgICAgIC8vICAgcG9zaXRpb25zWzVdLnkgPiBjYW52YXMuaGVpZ2h0IC8gMiAtIDEwMFxyXG4gICAgICAgIC8vICkge1xyXG4gICAgICAgIC8vICAgdGVzdEV4cGxhaW4uaW5uZXJIVE1MID0gYO2UvOu2gOyDieydhCDstpTstpwg7KSRIOyeheuLiOuLpC48YnI+IDxzcGFuIHN0eWxlPVwiY29sb3IgOiAjOWI4NWQwO1wiPlRpcCA6IOy1nOuMgO2VnCDruZvsnZgg7JiB7Zal7J2EIOuwm+yngCDslYrripQg6rOz7JeQ7IScIOy4oeygle2VtOuztOyEuOyalCE8L3NwYW4+YDtcclxuICAgICAgICAvLyAgIGZhY2VEb3REcmF3LmRyYXcocG9zaXRpb25zLCB0cnVlKTtcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgdGVzdEV4cGxhaW4uaW5uZXJIVE1MID0gYOyWvOq1tOydhCDsoJXspJHslZnsl5Ag7JyE7LmY7Iuc7Lyc7KO87IS47JqULjxicj4gPHNwYW4gc3R5bGU9XCJjb2xvciA6ICM5Yjg1ZDA7XCI+VGlwIDog7LWc64yA7ZWcIOu5m+ydmCDsmIHtlqXsnYQg67Cb7KeAIOyViuuKlCDqs7Psl5DshJwg7Lih7KCV7ZW067O07IS47JqUITwvc3Bhbj5gO1xyXG4gICAgICAgIC8vICAgZmFjZURvdERyYXcuZHJhdyhwb3NpdGlvbnMpO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gY29uc3QgZXllTGVuZ3RoID0gTWF0aC5hYnMocG9zaXRpb25zWzRdLnkgLSBwb3NpdGlvbnNbMV0ueSlcclxuICAgICAgICAvLyBjb25zdCByaWdodENoZWVrID0gcG9zaXRpb25zWzQyNV1cclxuICAgICAgICAvLyBjb25zdCBsZWZ0Q2hlZWsgPSB7IHg6IHBvc2l0aW9uc1syMDVdLnggLSBleWVMZW5ndGgsIHk6IHBvc2l0aW9uc1syMDVdLnkgfVxyXG4gICAgICAgIC8vIGNvbnN0IGxlZnRVbmRlckV5ZSA9IHBvc2l0aW9uc1sxMTBdXHJcblxyXG4gICAgICAgIC8vIGNvbnN0IHJpZ2h0VW5kZXJFeWUgPSBwb3NpdGlvbnNbMjUyXVxyXG5cclxuICAgICAgICAvLyBjb25zdCBqYXcgPSBwb3NpdGlvbnNbMjAxXVxyXG5cclxuICAgICAgICAvLyAvLyBhd2FpdCBjdHguZmlsbFJlY3QobGVmdENoZWVrLngsbGVmdENoZWVrLnksLWV5ZUxlbmd0aCwgZXllTGVuZ3RoLzIpXHJcbiAgICAgICAgLy8gLy8gYXdhaXQgY3R4LmZpbGxSZWN0KHJpZ2h0Q2hlZWsueCxyaWdodENoZWVrLnksZXllTGVuZ3RoLCBleWVMZW5ndGgvMilcclxuICAgICAgICAvLyAvLyBhd2FpdCBjdHguZmlsbFJlY3QobGVmdFVuZGVyRXllLngsbGVmdFVuZGVyRXllLnksZXllTGVuZ3RoLCBleWVMZW5ndGgvMilcclxuICAgICAgICAvLyAvLyBhd2FpdCBjdHguZmlsbFJlY3QocmlnaHRVbmRlckV5ZS54LHJpZ2h0VW5kZXJFeWUueSxleWVMZW5ndGgsIGV5ZUxlbmd0aC8yKVxyXG4gICAgICAgIC8vIC8vIGF3YWl0IGN0eC5maWxsUmVjdChqYXcueCxqYXcueSxleWVMZW5ndGgsIGV5ZUxlbmd0aC8yKVxyXG5cclxuICAgICAgICAvLyBsZXQgbGVmdEV5ZVN1bSA9IG5ldyBnZXRDb2xvckRhdGEobGVmdFVuZGVyRXllLCBleWVMZW5ndGgsIGNvbnRleHQpXHJcbiAgICAgICAgLy8gbGV0IHJpZ2h0RXllU3VtID0gbmV3IGdldENvbG9yRGF0YShyaWdodFVuZGVyRXllLCBleWVMZW5ndGgsIGNvbnRleHQpXHJcblxyXG4gICAgICAgIC8vIGxldCBsZWZ0Q2hlZWtTdW0gPSBuZXcgZ2V0Q29sb3JEYXRhKGxlZnRDaGVlaywgZXllTGVuZ3RoLCBjb250ZXh0KVxyXG4gICAgICAgIC8vIGxldCByaWdodENoZWVrU3VtID0gbmV3IGdldENvbG9yRGF0YShyaWdodENoZWVrLCBleWVMZW5ndGgsIGNvbnRleHQpXHJcbiAgICAgICAgLy8gbGV0IGphd1N1bSA9IG5ldyBnZXRDb2xvckRhdGEoamF3LCBleWVMZW5ndGgsIGNvbnRleHQpXHJcblxyXG4gICAgICAgIC8vIGxldCBleWVSZXN1bHQgPSBhd2FpdCBsZWZ0RXllU3VtLm1hcCgoaSwgaWR4KSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiAoaSArIHJpZ2h0RXllU3VtW2lkeF0pIC8gMlxyXG4gICAgICAgIC8vIH0pXHJcblxyXG4gICAgICAgIC8vIGxldCBjaGVla1Jlc3VsdCA9IGF3YWl0IGxlZnRDaGVla1N1bS5tYXAoKGksIGlkeCkgPT4ge1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gKGkgKyByaWdodENoZWVrU3VtW2lkeF0pIC8gMlxyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgLy8gZXllQ29sb3IucHVzaChleWVSZXN1bHQpXHJcbiAgICAgICAgLy8gY2hlZWtDb2xvci5wdXNoKGNoZWVrUmVzdWx0KVxyXG4gICAgICAgIC8vIGphd0NvbG9yLnB1c2goamF3U3VtKVxyXG5cclxuICAgICAgICAvLyBjdHguZmlsbFN0eWxlID0gYHJnYigkeyhleWVSZXN1bHRbMF0gKyBjaGVla1Jlc3VsdFswXSArIGphd1N1bVswXSkgLyAzfSwkeyhleWVSZXN1bHRbMV0gKyBjaGVla1Jlc3VsdFsxXSArIGphd1N1bVsxXSkgLyAzfSwkeyhleWVSZXN1bHRbMl0gKyBjaGVla1Jlc3VsdFsyXSArIGphd1N1bVsyXSkgLyAzfSlgXHJcblxyXG4gICAgICAgIC8vIGNvbnN0IHJnYkJveCA9IChjYW52YXMuaGVpZ2h0ICsgY2FudmFzLndpZHRoKSAvIDIgLyA0XHJcbiAgICAgICAgLy8gY3R4LmZpbGxSZWN0KDAsIDAsIHJnYkJveCwgcmdiQm94KVxyXG4gICAgICB9IGVsc2UgaWYgKGZhY2VCb2FyZCA9PSAnZmFjZWJvYXJkJykge1xyXG4gICAgICAgIHRlc3RFeHBsYWluLmlubmVyVGV4dCA9XHJcbiAgICAgICAgICAn7ZS867aA7Yak7J20IOygleuPiOuQmOupsCDsnbTrqqnqtazruYTqsIAg65iQ66C37ZW067O07J2064qUIOyDieydhCDshKDtg50g7ZW07KO87IS47JqULic7XHJcbiAgICAgICAgLy8gY29uc3QgY29sb3JSZ2IgPSBzdG9yZS5nZXRTdGF0ZSgpLkNvbG9yUmVkdWNlci5tYWluRmFjZUJvYXJkQ29sb3I7XHJcbiAgICAgICAgY29uc3QgeyBzZWxmQ29sb3JzLCBzZWxmUmVzdWx0IH0gPSBzdG9yZS5nZXRTdGF0ZSgpLkNvbG9yUmVkdWNlcjtcclxuICAgICAgICBjb25zdCBjb2xvclJnYiA9IHNlbGZDb2xvcnNbc2VsZlJlc3VsdC5sZW5ndGhdO1xyXG4gICAgICAgIGlmIChjb2xvclJnYikgZmFjZUJnRHJhdy5kcmF3TG9vcChwb3NpdGlvbnMsIGNvbG9yUmdiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhbGVydCgnMTMnKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgdGVzdEV4cGxhaW4uaW5uZXJUZXh0ID1cclxuICAgICAgICAgICAgJ+2VmOuLqOydmCDrp4jsiqTtgazrpbwg7ISg7YOd7ZWY7JesIO2VhO2EsOulvCDsoIHsmqntlbTrs7TshLjsmpQnO1xyXG4gICAgICAgICAgY29uc3QgbWFpbkNvbG9yID1cclxuICAgICAgICAgICAgbWFza0NvbG9yW3N0b3JlLmdldFN0YXRlKCkuQ29sb3JSZWR1Y2VyLm1haW5NYXNrQ29sb3IhXTtcclxuICAgICAgICAgIGNvbnN0IGxlZnRNYXNrID0gbWFpbkNvbG9yWzBdO1xyXG4gICAgICAgICAgY29uc3QgcmlnaHRNYXNrID0gbWFpbkNvbG9yWzFdO1xyXG4gICAgICAgICAgbmV3IE1hc2tEcmF3KFxyXG4gICAgICAgICAgICBjYW52YXMsXHJcbiAgICAgICAgICAgIGxlZnRNYXNrLFxyXG4gICAgICAgICAgICByaWdodE1hc2ssXHJcbiAgICAgICAgICAgIHBvc2l0aW9ucyxcclxuICAgICAgICAgICAgdHlwZUFyclswXSxcclxuICAgICAgICAgICAgdHlwZUFyclsxXSxcclxuICAgICAgICAgICAgdHlwZUFyclsyXSxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIHRyYWNrc1swXS5zdG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGFuaUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlclByZWRpY3Rpb24pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYW5pSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyUHJlZGljdGlvbik7XHJcbiAgICAgIHRlc3RFeHBsYWluLmlubmVySFRNTCA9IGDslrzqtbTsnYQg7J247Iud7ZWgIOyImCDsnojrj4TroZ0g7Lm066mU652866W8IOuwlOudvOu0kOyjvOyEuOyalC48YnI+IDxzcGFuIHN0eWxlPVwiY29sb3IgOiAjOWI4NWQwO1wiPlRpcCA6IOy1nOuMgO2VnCDruZvsnZgg7JiB7Zal7J2EIOuwm+yngCDslYrripQg6rOz7JeQ7IScIOy4oeygle2VtOuztOyEuOyalCE8L3NwYW4+YDtcclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKGFuaUlkKTtcclxuICAgIC8vICAgc3RhdHMuZW5kKCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBtYWluKCkge1xyXG4gICAgY29uc3QgY2hlY2sgPSB0cnVlO1xyXG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAvLyAgIGlmICghbW9kZWwpIHtcclxuICAgIC8vICAgICBjaGVjayA9IGZhbHNlO1xyXG4gICAgLy8gICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaUlkKTtcclxuICAgIC8vICAgICBpZiAoXHJcbiAgICAvLyAgICAgICBjb25maXJtKFxyXG4gICAgLy8gICAgICAgICAn6riw6riw7J2YIOyCrOyWkeydtCDrgq7slYQg7JuQ7Zmc7ZWcIOy4oeygleydtCDtnpjrk63ri4jri6QuIO2ZleyduOydhCDriITrpbTsi5zrqbQg7J2066+47KeAIOy4oeyglSDrsKnsi53snLzroZwg7KCE7ZmY7ZWp64uI64ukLiDst6jshozrpbwg64iE66W07Iuc66m0IOq3uOuMgOuhnCDsp4Ttlontlanri4jri6QuJyxcclxuICAgIC8vICAgICAgIClcclxuICAgIC8vICAgICApIHtcclxuICAgIC8vICAgICAgIGNoZWNrID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaXNTY2FuUG9zc2libGUnLCAnZmFsc2UnKTtcclxuICAgIC8vICAgICAgIGhlYWRlcldyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIC8vICAgICAgIGhlYWRlcldyYXBwZXIuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgIC8vICAgICAgIHRlc3RXcmFwcGVyLnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcbiAgICAvLyAgICAgICB0cmFja3NbMF0uc3RvcCgpO1xyXG4gICAgLy8gICAgICAgY2FudmFzLnJlbW92ZSgpO1xyXG4gICAgLy8gICAgICAgdmlkZW8uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIC8vICAgICAgIE1MX0xvYWRpbmcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIC8vICAgICAgIEltYWdlVXBsb2FkKGZhY2VCb2FyZCk7XHJcbiAgICAvLyAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgfSBlbHNlIGNoZWNrID0gdHJ1ZTtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfSwgMTUwMDAwKTtcclxuXHJcbiAgICBpZiAoIW1vZGVsKSB7XHJcbiAgICAgIG1vZGVsID0gYXdhaXQgZmFjZUxhbmRtYXJrc0RldGVjdGlvbi5sb2FkKFxyXG4gICAgICAgIGZhY2VMYW5kbWFya3NEZXRlY3Rpb24uU3VwcG9ydGVkUGFja2FnZXMubWVkaWFwaXBlRmFjZW1lc2gsXHJcbiAgICAgICAgeyBtYXhGYWNlczogMSB9LFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoZWNrKSB7XHJcbiAgICAgIGlmIChmYWNlQm9hcmQgIT0gJ21hc2snKSB7XHJcbiAgICAgICAgaGVhZGVyV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGhlYWRlcldyYXBwZXIuc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gYXdhaXQgdGYuc2V0QmFja2VuZChzdGF0ZS5iYWNrZW5kKTtcclxuICAgICAgLy8gICBzdGF0cy5zaG93UGFuZWwoMCk7ICAvLyAwOiBmcHMsIDE6IG1zLCAyOiBtYiwgMys6IGN1c3RvbVxyXG4gICAgICAvLyAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3RhdHMuZG9tKTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICB0ZXN0V3JhcHBlci5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG5cclxuICAgICAgICB2aWRlby5wbGF5KCk7XHJcbiAgICAgICAgdmlkZW8uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgdmlkZW9XaWR0aCA9IHZpZGVvLmNsaWVudFdpZHRoO1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHZpZGVvV2lkdGg7XHJcblxyXG4gICAgICAgIGlmICh0eXBlQXJyWzJdKSB7XHJcbiAgICAgICAgICB2aWRlb0hlaWdodCA9IDMzODtcclxuICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSAzMzg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHZpZGVvSGVpZ2h0ID0gdmlkZW8uY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgICAgY2FudmFzLmhlaWdodCA9IHZpZGVvLmNsaWVudEhlaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpITtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gR1JFRU47XHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gR1JFRU47XHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDAuNTtcclxuICAgICAgICB0ZXN0V3JhcHBlci5pbnNlcnRCZWZvcmUoY2FudmFzLCB0ZXN0V3JhcHBlci5maXJzdENoaWxkKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH1cclxuICAgICAgLy8gY29uc3QgY2VudGVyWCA9IGNhbnZhcy53aWR0aCAvIDI7XHJcbiAgICAgIC8vIGNvbnN0IGNlbnRlclkgPSBjYW52YXMuaGVpZ2h0IC8gMjtcclxuICAgICAgaWYgKGZhY2VCb2FyZCA9PT0gJ2ZhY2Vib2FyZCcpIGZhY2VCZ0RyYXcgPSBuZXcgZHJhd0ZhY2VCRyhjYW52YXMsIHZpZGVvKTtcclxuICAgICAgZmFjZURvdERyYXcgPSBuZXcgZHJhd0ZhY2VMaW5lKGNhbnZhcyk7XHJcbiAgICAgIHJlbmRlclByZWRpY3Rpb24oKTtcclxuICAgIH1cclxuICAgIC8vICAgbGV0IGNoZWNrID0gdHJ1ZTtcclxuICAgIC8vICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAvLyAgICAgaWYgKCFtb2RlbCkge1xyXG4gICAgLy8gICAgICAgY2hlY2sgPSBmYWxzZTtcclxuICAgIC8vICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaUlkKTtcclxuICAgIC8vICAgICAgIGlmIChcclxuICAgIC8vICAgICAgICAgY29uZmlybShcclxuICAgIC8vICAgICAgICAgICAn6riw6riw7J2YIOyCrOyWkeydtCDrgq7slYQg7JuQ7Zmc7ZWcIOy4oeygleydtCDtnpjrk63ri4jri6QuIO2ZleyduOydhCDriITrpbTsi5zrqbQg7J2066+47KeAIOy4oeyglSDrsKnsi53snLzroZwg7KCE7ZmY7ZWp64uI64ukLiDst6jshozrpbwg64iE66W07Iuc66m0IOq3uOuMgOuhnCDsp4Ttlontlanri4jri6QuJyxcclxuICAgIC8vICAgICAgICAgKVxyXG4gICAgLy8gICAgICAgKSB7XHJcbiAgICAvLyAgICAgICAgIGNoZWNrID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpc1NjYW5Qb3NzaWJsZScsICdmYWxzZScpO1xyXG4gICAgLy8gICAgICAgICBoZWFkZXJXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAvLyAgICAgICAgIGhlYWRlcldyYXBwZXIuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgIC8vICAgICAgICAgdGVzdFdyYXBwZXIuc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICAgIC8vICAgICAgICAgdHJhY2tzWzBdLnN0b3AoKTtcclxuICAgIC8vICAgICAgICAgY2FudmFzLnJlbW92ZSgpO1xyXG4gICAgLy8gICAgICAgICB2aWRlby5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgLy8gICAgICAgICBNTF9Mb2FkaW5nLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAvLyAgICAgICAgIEltYWdlVXBsb2FkKGZhY2VCb2FyZCk7XHJcbiAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICAgIH0gZWxzZSBjaGVjayA9IHRydWU7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICB9LCAxNTAwMCk7XHJcblxyXG4gICAgLy8gICBpZiAoIW1vZGVsKSB7XHJcbiAgICAvLyAgICAgZmFjZUxhbmRtYXJrc0RldGVjdGlvblxyXG4gICAgLy8gICAgICAgLmxvYWQoZmFjZUxhbmRtYXJrc0RldGVjdGlvbi5TdXBwb3J0ZWRQYWNrYWdlcy5tZWRpYXBpcGVGYWNlbWVzaCwge1xyXG4gICAgLy8gICAgICAgICBtYXhGYWNlczogMSxcclxuICAgIC8vICAgICAgIH0pXHJcbiAgICAvLyAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgIC8vICAgICAgICAgaWYgKGNoZWNrKSB7XHJcbiAgICAvLyAgICAgICAgICAgbW9kZWwgPSBkYXRhO1xyXG4gICAgLy8gICAgICAgICAgIGlmIChmYWNlQm9hcmQgIT0gJ21hc2snKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBoZWFkZXJXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAvLyAgICAgICAgICAgICBoZWFkZXJXcmFwcGVyLnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcbiAgICAvLyAgICAgICAgICAgICBmYWNlRG90RHJhdyA9IG5ldyBkcmF3RmFjZUxpbmUoY2FudmFzKTtcclxuICAgIC8vICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgdGVzdFdyYXBwZXIuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgIC8vICAgICAgICAgICB2aWRlby5wbGF5KCk7XHJcbiAgICAvLyAgICAgICAgICAgdmlkZW8uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAvLyAgICAgICAgICAgY2FudmFzLmNsYXNzTmFtZSA9ICdmYWNlQ2FudmFzJztcclxuICAgIC8vICAgICAgICAgICB2aWRlb1dpZHRoID0gdmlkZW8uY2xpZW50V2lkdGg7XHJcbiAgICAvLyAgICAgICAgICAgY2FudmFzLndpZHRoID0gdmlkZW9XaWR0aDtcclxuICAgIC8vICAgICAgICAgICBjYW52YXMuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgLy8gICAgICAgICAgIGNhbnZhcy5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoLTEsMSknO1xyXG4gICAgLy8gICAgICAgICAgIGNhbnZhcy5zdHlsZS56SW5kZXggPSAnIDk5Nyc7XHJcbiAgICAvLyAgICAgICAgICAgY2FudmFzLnN0eWxlLmxlZnQgPSAnMCc7XHJcblxyXG4gICAgLy8gICAgICAgICAgIGlmICh0eXBlQXJyWzJdKSB7XHJcbiAgICAvLyAgICAgICAgICAgICB2aWRlb0hlaWdodCA9IDMzODtcclxuICAgIC8vICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSAzMzg7XHJcbiAgICAvLyAgICAgICAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgIHZpZGVvSGVpZ2h0ID0gdmlkZW8uY2xpZW50SGVpZ2h0O1xyXG4gICAgLy8gICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IHZpZGVvLmNsaWVudEhlaWdodDtcclxuICAgIC8vICAgICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgICAgIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpITtcclxuICAgIC8vICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gR1JFRU47XHJcbiAgICAvLyAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gR1JFRU47XHJcbiAgICAvLyAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDAuNTtcclxuICAgIC8vICAgICAgICAgICB0ZXN0V3JhcHBlci5pbnNlcnRCZWZvcmUoY2FudmFzLCB0ZXN0V3JhcHBlci5maXJzdENoaWxkKTtcclxuICAgIC8vICAgICAgICAgICBhbmlJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXJQcmVkaWN0aW9uKTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgfSk7XHJcbiAgICAvLyAgIH1cclxuXHJcbiAgICAvLyAgIC8vIGF3YWl0IHRmLnNldEJhY2tlbmQoc3RhdGUuYmFja2VuZCk7XHJcbiAgICAvLyAgIC8vICAgc3RhdHMuc2hvd1BhbmVsKDApOyAgLy8gMDogZnBzLCAxOiBtcywgMjogbWIsIDMrOiBjdXN0b21cclxuICAgIC8vICAgLy8gICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN0YXRzLmRvbSk7XHJcblxyXG4gICAgLy8gICAvLyBjb25zdCBjZW50ZXJYID0gY2FudmFzLndpZHRoIC8gMjtcclxuICAgIC8vICAgLy8gY29uc3QgY2VudGVyWSA9IGNhbnZhcy5oZWlnaHQgLyAyO1xyXG5cclxuICAgIC8vICAgcmV0dXJuO1xyXG4gICAgLy8gfVxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBmdW5jdGlvbiBwcm9ncmVzcygpIHtcclxuICAgIGNvbnN0IGFkZCA9IE1hdGgucmFuZG9tKCkgKiAzO1xyXG4gICAgcHJvZ3Jlc3NDbnQgKz0gYWRkO1xyXG4gICAgaWYgKHByb2dyZXNzQ250ID4gMTAwKSBwcm9ncmVzc0NudCA9IDEwMDtcclxuICAgIHByb2dyZXNzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWZsZXgnO1xyXG4gICAgcHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSBwcm9ncmVzc0NudC50b0ZpeGVkKDIpICsgJyUnO1xyXG4gICAgcGVyY2VudC5pbm5lclRleHQgPSBwcm9ncmVzc0NudC50b0ZpeGVkKDIpICsgJyUnO1xyXG4gIH1cclxufVxyXG5cclxuLy8gaW5pdGlhbGl6ZSB0aGUgdGltZXIgdmFyaWFibGVzIGFuZCBzdGFydCB0aGUgYW5pbWF0aW9uXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=