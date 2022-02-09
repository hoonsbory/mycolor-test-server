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
                          testWrapper.insertBefore(canvas, testWrapper.firstChild); // const centerX = canvas.width / 2;
                          // const centerY = canvas.height / 2;

                          alert(123);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL1N0cmVhbUNhbnZhcy50cyJdLCJuYW1lcyI6WyJTdHJlYW1DYW52YXMiLCJmYWNlQm9hcmQiLCJyZW5kZXJQcmVkaWN0aW9uIiwibWFpbiIsInByb2dyZXNzIiwiYWRkIiwiTWF0aCIsInJhbmRvbSIsInByb2dyZXNzQ250IiwicHJvZ3Jlc3NDb250YWluZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJwcm9ncmVzc0JhciIsIndpZHRoIiwidG9GaXhlZCIsInBlcmNlbnQiLCJpbm5lclRleHQiLCJjaGVjayIsIm1vZGVsIiwiZmFjZUxhbmRtYXJrc0RldGVjdGlvbiIsIm1heEZhY2VzIiwiaGVhZGVyV3JhcHBlciIsIm9wYWNpdHkiLCJ0ZXN0V3JhcHBlciIsInZpZGVvIiwicGxheSIsInZpZGVvV2lkdGgiLCJjbGllbnRXaWR0aCIsImNhbnZhcyIsInR5cGVBcnIiLCJ2aWRlb0hlaWdodCIsImhlaWdodCIsImNsaWVudEhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJmaWxsU3R5bGUiLCJHUkVFTiIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsImFsZXJ0IiwiZmFjZUJnRHJhdyIsImRyYXdGYWNlQkciLCJmYWNlRG90RHJhdyIsImRyYXdGYWNlTGluZSIsInNyY09iaiIsInNyY09iamVjdCIsImFjdGl2ZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiYW5pSWQiLCJlc3RpbWF0ZUZhY2VzIiwiaW5wdXQiLCJyZXR1cm5UZW5zb3JzIiwiZmxpcEhvcml6b250YWwiLCJwcmVkaWN0SXJpc2VzIiwicHJlZGljdGlvbnMiLCJzZXRUaW1lb3V0IiwiY2xlYXJSZWN0IiwiaXNEZXRlY3RlZCIsIk1MX0xvYWRpbmciLCJsZW5ndGgiLCJrZXlwb2ludHMiLCJzY2FsZWRNZXNoIiwidmlkZW9XaWR0aENhbGMiLCJ2aWRlb0hlaWdodENhbGMiLCJwb3NpdGlvbnMiLCJtYXAiLCJpIiwieCIsInkiLCJ0ZXN0RXhwbGFpbiIsImlubmVySFRNTCIsImRyYXciLCJzdG9yZSIsIkNvbG9yUmVkdWNlciIsInNlbGZDb2xvcnMiLCJzZWxmUmVzdWx0IiwiY29sb3JSZ2IiLCJkcmF3TG9vcCIsIm1haW5Db2xvciIsIm1hc2tDb2xvciIsIm1haW5NYXNrQ29sb3IiLCJsZWZ0TWFzayIsInJpZ2h0TWFzayIsIk1hc2tEcmF3IiwiZXJyb3IiLCJ0cmFja3MiLCJzdG9wIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidGYiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3RyZWFtIiwiZ2V0VHJhY2tzIiwiZ2V0RGV2aWNlVHlwZSIsImljb24iLCJJbWFnZSIsInNyYyIsInByb2Nlc3MiLCJpY29uMiIsImJlaWdlX2xlZnQiLCJiZWlnZV9yaWdodCIsIm1pbnRfbGVmdCIsIm1pbnRfcmlnaHQiLCJibGFja19sZWZ0IiwiYmxhY2tfcmlnaHQiLCJ3aGl0ZV9sZWZ0Iiwid2hpdGVfcmlnaHQiLCJwdXJwbGVfbGVmdCIsInB1cnBsZV9yaWdodCIsInBpbmtfbGVmdCIsInBpbmtfcmlnaHQiLCJ3aGl0ZSIsImJsYWNrIiwicGluayIsInB1cnBsZSIsImJlaWdlIiwibWludCIsIm9ubG9hZCIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsImFjdGlvbkNyZWF0b3JzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FB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QUxHO0FBTVZnQixvQkFBSSxFQUFFLENBQUNmLFNBQUQsRUFBWUMsVUFBWjtBQU5JLGVBQVo7O0FBU0F2Qix1QkFBUyxDQUFDUCxvREFBQSxHQUFpQkMsWUFBakIsQ0FBOEJPLGFBQS9CLENBQVQsQ0FBd0QsQ0FBeEQsRUFBMkRxQyxNQUEzRCxHQUFvRTtBQUFBLHVCQUNsRXBILElBQUksRUFEOEQ7QUFBQSxlQUFwRTtBQUVELGFBckNELE1BcUNPLElBQUlGLFNBQVMsSUFBSSxXQUFqQixFQUE4QjtBQUNuQ3VILDRCQUFjLENBQUNDLE9BQWYsQ0FBdUIsYUFBdkIsRUFBc0MsR0FBdEM7QUFDQS9DLGtFQUFBLENBQWVnRCwwRUFBQSxDQUE0QixJQUE1QixDQUFmO0FBQ0F2SCxrQkFBSTtBQUNMLGFBSk0sTUFJQUEsSUFBSSxHQTFHRSxDQTRHYjtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBdEhhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7S0FBZUgsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bc2Vhc29uXS42OTczY2RjYjZjZjM2NGYxNTMwNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgdGhyb3R0bGluZyB9IGZyb20gJy4uLy4uL3V0aWxzL3Rocm90dGxpbmcnO1xyXG4vLyAvLyBpbXBvcnQgKiBhcyBmYWNlYXBpIGZyb20gJy4uLy4uL3V0aWxzL2ZhY2UtYXBpJ1xyXG4vLyBpbXBvcnQgRmFjZUJvYXJkIGZyb20gJy4vRmFjZUJvYXJkJztcclxuLy8gaW1wb3J0IGdldENvbG9yRGF0YSBmcm9tICcuL2dldENvbG9yRGF0YSc7XHJcbi8vIGltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbi8vIGltcG9ydCBjb2xvckF2ZyBmcm9tICcuL2NvbG9yQXZnJztcclxuLy8gaW1wb3J0IHN0b3JlIGZyb20gJy4uLy4uL3N0b3JlJztcclxuXHJcbi8vIC8vIGNvbnN0IHRocm90dGxlciA9IHRocm90dGxpbmcoKVxyXG4vLyAvLyBleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBTdHJlYW1DYW52YXMoZmFjZUJvYXJkKSB7XHJcbi8vIC8vICAgICBsZXQgY2FudmFzO1xyXG4vLyAvLyAgICAgbGV0IHZpZGVvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZGVvJylcclxuLy8gLy8gICAgIGlmICghdmlkZW98fCh2aWRlby5wcmV2aW91c1NpYmxpbmcmJnZpZGVvLnByZXZpb3VzU2libGluZy5ub2RlTmFtZT09XCJDQU5WQVNcIikpIHJldHVyblxyXG4vLyAvLyAgICAgbGV0IGxvYWRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRpbmdcIilcclxuLy8gLy8gICAgIGxldCBwcm9ncmVzc0JhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZ3Jlc3NCYXJcIilcclxuLy8gLy8gICAgIGxldCBwZXJjZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9ncmVzc1BlcmNlbnRcIilcclxuLy8gLy8gICAgIGxldCBwcm9ncmVzc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZ3Jlc3NDb250YWluZXJcIilcclxuLy8gLy8gICAgIGxldCB0ZXN0RXhwbGFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVzdEV4cGxhaW5cIilcclxuLy8gLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyV3JhcHBlclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcclxuLy8gLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVzdFdyYXBwZXJcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxyXG4vLyAvLyAgICAgdmlkZW8uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxyXG4vLyAvLyAgICAgbG9hZGluZy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG4vLyAvLyAgICAgdmlkZW8ucGxheSgpXHJcbi8vIC8vICAgICBsZXQgaW50ZXJ2YWw7XHJcbi8vIC8vICAgICB0cnkge1xyXG4vLyAvLyAgICAgICAgIGNhbnZhcyA9IGZhY2VhcGkuY3JlYXRlQ2FudmFzRnJvbU1lZGlhKHZpZGVvKVxyXG5cclxuLy8gLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vIC8vICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbi8vIC8vICAgICAgICAgICAgIFN0cmVhbUNhbnZhcyhmYWNlQm9hcmQpXHJcbi8vIC8vICAgICAgICAgfSwgNTAwKTtcclxuLy8gLy8gICAgICAgICByZXR1cm5cclxuLy8gLy8gICAgIH1cclxuLy8gLy8gICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkaW5nJykuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuLy8gLy8gICAgIGNhbnZhcy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIlxyXG4vLyAvLyAgICAgY2FudmFzLnN0eWxlLnpJbmRleCA9IFwiOTk4XCJcclxuLy8gLy8gICAgIGNhbnZhcy5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKC0xLDEpXCJcclxuLy8gLy8gICAgIGNhbnZhcy5jbGFzc05hbWUgPSBcImZhY2VDYW52YXNcIlxyXG4vLyAvLyAgICAgdmlkZW8ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY2FudmFzLCB2aWRlbylcclxuLy8gLy8gICAgIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbi8vIC8vICAgICBsZXQgY2FtQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKVxyXG4vLyAvLyAgICAgY2FtQ2FudmFzLmNsYXNzTmFtZSA9IFwiZmFjZUNhbnZhc1wiXHJcbi8vIC8vICAgICBjYW1DYW52YXMud2lkdGggPSB2aWRlby5jbGllbnRXaWR0aFxyXG4vLyAvLyAgICAgY2FtQ2FudmFzLmhlaWdodCA9IHZpZGVvLmNsaWVudEhlaWdodFxyXG4vLyAvLyAgICAgY2FtQ2FudmFzLnN0eWxlLnpJbmRleCA9IFwiOTk4XCJcclxuLy8gLy8gICAgIGNhbUNhbnZhcy5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKC0xLDEpXCJcclxuLy8gLy8gICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkNhbVwiKS5hcHBlbmRDaGlsZChjYW1DYW52YXMpXHJcbi8vIC8vICAgICBsZXQgY29udGV4dCA9IGNhbUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4vLyAvLyAgICAgY29uc3QgZGlzcGxheVNpemUgPSB7IHdpZHRoOiB2aWRlby5jbGllbnRXaWR0aCwgaGVpZ2h0OiB2aWRlby5jbGllbnRIZWlnaHQgfVxyXG4vLyAvLyAgICAgZmFjZWFwaS5tYXRjaERpbWVuc2lvbnMoY2FudmFzLCBkaXNwbGF5U2l6ZSlcclxuLy8gLy8gICAgIGxldCBjbnQgPSAwO1xyXG4vLyAvLyAgICAgbGV0IGNvbG9yU3VtID0ge31cclxuLy8gLy8gICAgIGxldCBleWVDb2xvciA9IFtdXHJcbi8vIC8vICAgICBsZXQgY2hlZWtDb2xvciA9IFtdXHJcbi8vIC8vICAgICBsZXQgamF3Q29sb3IgPSBbXVxyXG4vLyAvLyAgICAgbGV0IGFuaTtcclxuLy8gLy8gICAgIGFuaSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0ZXN0KVxyXG4vLyAvLyAgICAgbGV0IGxlZnRNYXNrID0gbmV3IEltYWdlKClcclxuLy8gLy8gICAgIGxlZnRNYXNrLnNyYyA9IGAke3Byb2Nlc3MuZW52LlBBVEh9L2ltYWdlcy9sZWZ0TWFzay5wbmdgXHJcbi8vIC8vICAgICBsZXQgcmlnaHRNYXNrID0gbmV3IEltYWdlKClcclxuLy8gLy8gICAgIHJpZ2h0TWFzay5zcmMgPSBgJHtwcm9jZXNzLmVudi5QQVRIfS9pbWFnZXMvcmlnaHRNYXNrLnBuZ2BcclxuLy8gLy8gICAgIGFzeW5jIGZ1bmN0aW9uIHRlc3QoKSB7XHJcbi8vIC8vICAgICAgICAgY29uc3QgZGV0ZWN0aW9ucyA9IGF3YWl0IGZhY2VhcGkuZGV0ZWN0U2luZ2xlRmFjZSh2aWRlbywgbmV3IGZhY2VhcGkuVGlueUZhY2VEZXRlY3Rvck9wdGlvbnMoKSkud2l0aEZhY2VMYW5kbWFya3ModHJ1ZSkgLy92aWRlbyDsuqHss5Drs7gg7Ja86rW07J247IudIOygleuztCAg7IKs7J207KaI66W8IOunnuy2lOq4sCDsoITsnbTquLDrlYzrrLjsl5Ag7KKM7ZGc6rCS7J20IOuLpOultOuLpFxyXG4vLyAvLyAgICAgICAgIGxldCByZXNpemVkRGV0ZWN0aW9uc1xyXG4vLyAvLyAgICAgICAgIGxvYWRpbmcuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4vLyAvLyAgICAgICAgIGlmIChkZXRlY3Rpb25zKSB7XHJcblxyXG4vLyAvLyAgICAgICAgICAgICBjbnQrK1xyXG5cclxuLy8gLy8gICAgICAgICAgICAgLy8gaWYgKGNudCA9PSAzMSAmJiAhZmFjZUJvYXJkKSB7XHJcbi8vIC8vICAgICAgICAgICAgIC8vICAgICBjbGVhckludGVydmFsKGludGVydmFsKVxyXG4vLyAvLyAgICAgICAgICAgICAvLyAgICAgY2FudmFzLnJlbW92ZSgpXHJcbi8vIC8vICAgICAgICAgICAgIC8vICAgICBjb2xvclN1bS5leWUgPSBleWVDb2xvci5yZWR1Y2UoKGEsIGIpID0+IHtcclxuLy8gLy8gICAgICAgICAgICAgLy8gICAgICAgICByZXR1cm4gW2FbMF0gKyBiWzBdLCBhWzFdICsgYlsxXSwgYVsyXSArIGJbMl1dXHJcbi8vIC8vICAgICAgICAgICAgIC8vICAgICB9KVxyXG4vLyAvLyAgICAgICAgICAgICAvLyAgICAgY29sb3JTdW0uY2hlZWsgPSBjaGVla0NvbG9yLnJlZHVjZSgoYSwgYikgPT4ge1xyXG4vLyAvLyAgICAgICAgICAgICAvLyAgICAgICAgIHJldHVybiBbYVswXSArIGJbMF0sIGFbMV0gKyBiWzFdLCBhWzJdICsgYlsyXV1cclxuLy8gLy8gICAgICAgICAgICAgLy8gICAgIH0pXHJcbi8vIC8vICAgICAgICAgICAgIC8vICAgICBjb2xvclN1bS5qYXcgPSBqYXdDb2xvci5yZWR1Y2UoKGEsIGIpID0+IHtcclxuLy8gLy8gICAgICAgICAgICAgLy8gICAgICAgICByZXR1cm4gW2FbMF0gKyBiWzBdLCBhWzFdICsgYlsxXSwgYVsyXSArIGJbMl1dXHJcbi8vIC8vICAgICAgICAgICAgIC8vICAgICB9KVxyXG4vLyAvLyAgICAgICAgICAgICAvLyAgICAgZm9yIChsZXQga2V5IGluIGNvbG9yU3VtKSB7XHJcbi8vIC8vICAgICAgICAgICAgIC8vICAgICAgICAgY29sb3JTdW1ba2V5XSA9IGNvbG9yU3VtW2tleV0ubWFwKGkgPT4gaSAvIDMwKVxyXG4vLyAvLyAgICAgICAgICAgICAvLyAgICAgfVxyXG4vLyAvLyAgICAgICAgICAgICAvLyAgICAgdGhyb3R0bGVyLnRocm90dGxlKCgpID0+IHtcclxuLy8gLy8gICAgICAgICAgICAgLy8gICAgICAgICBheGlvcy5wb3N0KCdodHRwczovL3RlbnNvci1zZXJ2ZXIuaGVyb2t1YXBwLmNvbS9nZXRTZWFzb24nLCBjb2xvclN1bSlcclxuLy8gLy8gICAgICAgICAgICAgLy8gICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4vLyAvLyAgICAgICAgICAgICAvLyAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyZXMuZGF0YSkuY2xpY2soKVxyXG4vLyAvLyAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjb25zdCBzdHJlYW0gPSB2aWRlby5zcmNPYmplY3Q7IC8v67mE65SU7JikIOyKpO2KuOumvFxyXG4vLyAvLyAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjb25zdCB0cmFja3MgPSBzdHJlYW0uZ2V0VHJhY2tzKCk7IC8v7Yq4656ZXHJcbi8vIC8vICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRyYWNrc1swXS5zdG9wKCkgLy/siqTtirjrprwg7KSR64uoXHJcbi8vIC8vICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH0pXHJcbi8vIC8vICAgICAgICAgICAgIC8vICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4vLyAvLyAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4vLyAvLyAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9KVxyXG4vLyAvLyAgICAgICAgICAgICAvLyAgICAgfSwgNTAwKVxyXG4vLyAvLyAgICAgICAgICAgICAvLyAgICAgcmV0dXJuXHJcbi8vIC8vICAgICAgICAgICAgIC8vIH1cclxuLy8gLy8gICAgICAgICAgICAgLy8gaWYgKGNudCA+IDMxICYmICFmYWNlQm9hcmQpIHJldHVyblxyXG5cclxuLy8gLy8gICAgICAgICAgICAgcmVzaXplZERldGVjdGlvbnMgPSBhd2FpdCBmYWNlYXBpLnJlc2l6ZVJlc3VsdHMoZGV0ZWN0aW9ucywgZGlzcGxheVNpemUpIC8vZGV0ZWN0aW9uc+ulvCBkaXNwbGF5c2l6ZeyXkCDrp57stpgg6rKw6rO86rCSXHJcbi8vIC8vICAgICAgICAgICAgIC8vIGF3YWl0IGZhY2VhcGkuZHJhdy5kcmF3RGV0ZWN0aW9ucyhjYW52YXMsIHJlc2l6ZWREZXRlY3Rpb25zKSAvL+yWvOq1tOyduOyLnSDsgqzqsIHtmJUg67CV7IqkIOuTnOuhnOyeiVxyXG5cclxuLy8gLy8gICAgICAgICAgICAgLy8gY29uc3QgbGFuZG1hcmsgPSBhd2FpdCBmYWNlYXBpLmRldGVjdEZhY2VMYW5kbWFya3NUaW55KGNhbnZhcykgLy/tjpjsnbTsiqTrnpzrk5zrp4jtgawg7KKM7ZGcXHJcbi8vIC8vICAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IGF3YWl0IHJlc2l6ZWREZXRlY3Rpb25zLmxhbmRtYXJrcy5wb3NpdGlvbnNcclxuXHJcbi8vIC8vICAgICAgICAgICAgIGlmICghZmFjZUJvYXJkKSB7XHJcbi8vIC8vICAgICAgICAgICAgICAgICB0ZXN0RXhwbGFpbi5pbm5lckhUTUwgPSBg7ZS867aA7IOJ7J2EIOy2lOy2nCDspJEg7J6F64uI64ukLjxicj4gPHNwYW4gc3R5bGU9XCJjb2xvciA6IHllbGxvdztcIj5UaXAgOiDstZzrjIDtlZwg67mb7J2YIOyYge2WpeydhCDrsJvsp4Ag7JWK64qUIOqzs+yXkOyEnCDsuKHsoJXtlbTrs7TshLjsmpQhPC9zcGFuPmBcclxuLy8gLy8gICAgICAgICAgICAgICAgIGF3YWl0IGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KSAvL+y6lOuyhOyKpCDstIjquLDtmZRcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGF3YWl0IGZhY2VhcGkuZHJhdy5kcmF3RmFjZUxhbmRtYXJrcyhjYW52YXMsIHJlc2l6ZWREZXRlY3Rpb25zKSAvL+yWvOq1tOyduOyLnSDrnpzrk5zrp4jtgawg65Oc66Gc7J6JXHJcbi8vIC8vICAgICAgICAgICAgICAgICBjb25zdCBsZWZ0Tm9zZSA9IHBvc2l0aW9uc1szMV1cclxuLy8gLy8gICAgICAgICAgICAgICAgIGNvbnN0IGxlZnRDaGluID0gcG9zaXRpb25zWzJdXHJcbi8vIC8vICAgICAgICAgICAgICAgICBjb25zdCBsZWZ0Q2hlZWsgPSB7IHg6IChsZWZ0Tm9zZS54ICsgbGVmdENoaW4ueCkgLyAyLCB5OiAobGVmdE5vc2UueSArIGxlZnRDaGluLnkpIC8gMiB9XHJcblxyXG4vLyAvLyAgICAgICAgICAgICAgICAgY29uc3QgcmlnaHROb3NlID0gcG9zaXRpb25zWzM1XVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgY29uc3QgcmlnaHRDaGluID0gcG9zaXRpb25zWzE0XVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgY29uc3QgcmlnaHRDaGVlayA9IHsgeDogKHJpZ2h0Tm9zZS54ICsgcmlnaHRDaGluLngpIC8gMiwgeTogKHJpZ2h0Tm9zZS55ICsgcmlnaHRDaGluLnkpIC8gMiB9XHJcblxyXG4vLyAvLyAgICAgICAgICAgICAgICAgY29uc3QgZXllTGVuZ3RoID0gKHBvc2l0aW9uc1s0MV0ueSAtIHBvc2l0aW9uc1szN10ueSlcclxuLy8gLy8gICAgICAgICAgICAgICAgIGNvbnN0IGV5ZU1pZGRsZVggPSAocG9zaXRpb25zWzQwXS54ICsgcG9zaXRpb25zWzQxXS54KSAvIDJcclxuLy8gLy8gICAgICAgICAgICAgICAgIGNvbnN0IGxlZnRVbmRlckV5ZSA9IHsgeDogZXllTWlkZGxlWCwgeTogcG9zaXRpb25zWzQxXS55ICsgZXllTGVuZ3RoIH1cclxuXHJcbi8vIC8vICAgICAgICAgICAgICAgICBjb25zdCByaWdodEV5ZU1pZGRsZVggPSAocG9zaXRpb25zWzQ2XS54ICsgcG9zaXRpb25zWzQ3XS54KSAvIDJcclxuLy8gLy8gICAgICAgICAgICAgICAgIGNvbnN0IHJpZ2h0VW5kZXJFeWUgPSB7IHg6IHJpZ2h0RXllTWlkZGxlWCwgeTogcG9zaXRpb25zWzQ2XS55ICsgZXllTGVuZ3RoIH1cclxuXHJcbi8vIC8vICAgICAgICAgICAgICAgICBjb25zdCBqYXcgPSB7IHg6IHBvc2l0aW9uc1s4XS54LCB5OiAocG9zaXRpb25zWzhdLnkgKyBwb3NpdGlvbnNbNTddLnkpIC8gMiB9XHJcbi8vIC8vICAgICAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh2aWRlbywgMCwgMCwgY2FtQ2FudmFzLndpZHRoLCBjYW1DYW52YXMuaGVpZ2h0KTtcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGxldCBleWVBdmdDb2xvciA9IGNvbnRleHQuZ2V0SW1hZ2VEYXRhKGNlbnRlclB1cGlsLngsIGNlbnRlclB1cGlsLnksIDEsIDEpLmRhdGFcclxuLy8gLy8gICAgICAgICAgICAgICAgIGxldCBjaGVla0F2Z0NvbG9yID0gY29udGV4dC5nZXRJbWFnZURhdGEobGVmdENoZWVrLngsIGxlZnRDaGVlay55LCAxLCAxKS5kYXRhXHJcblxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtleWVBdmdDb2xvclswXX0sJHtleWVBdmdDb2xvclsxXX0sJHtleWVBdmdDb2xvclsyXX0pYFxyXG5cclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGN0eC5maWxsUmVjdCgwLCAwLCAxMDAsIDEwMClcclxuXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBjdHguZmlsbFN0eWxlID0gYHJnYigke2NoZWVrQXZnQ29sb3JbMF19LCR7Y2hlZWtBdmdDb2xvclsxXX0sJHtjaGVla0F2Z0NvbG9yWzJdfSlgXHJcblxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gY3R4LmZpbGxSZWN0KDAsIDE1MCwgMTAwLCAxMDApXHJcblxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gY3R4LmZvbnQgPSBcIjIwcHggc2VyaWZcIlxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gY3R4LnN0cm9rZVRleHQoXCJoZWxsbyB3b3JsZFwiLCAwLDIwKVxyXG5cclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGxldCBleWVUZXh0Q2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gZXllVGV4dENhbnZhcy53aWR0aCA9IDEwMFxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gZXllVGV4dENhbnZhcy5oZWlnaHQgPSAyNVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gbGV0IGV5ZVRleHRDb250ZXh0ID0gZXllVGV4dENhbnZhcy5nZXRDb250ZXh0KFwiMmRcIilcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGV5ZVRleHRDb250ZXh0LnNjYWxlKC0xLCAxKVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gZXllVGV4dENvbnRleHQuZm9udCA9IFwiMTVweFwiXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBleWVUZXh0Q29udGV4dC5maWxsVGV4dChcIuyYpOuluOyqvSDtmY3ssYTsg4lcIiwgLTcwLCAyMClcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGV5ZVRleHRDb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGN0eC5wdXRJbWFnZURhdGEoZXllVGV4dENvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIGV5ZVRleHRDYW52YXMud2lkdGgsIGV5ZVRleHRDYW52YXMuaGVpZ2h0KSwgMCwgMClcclxuXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBsZXQgY2hlZWtUZXh0Q2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gY2hlZWtUZXh0Q2FudmFzLndpZHRoID0gNzBcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGNoZWVrVGV4dENhbnZhcy5oZWlnaHQgPSAyNVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gbGV0IGNoZWVrVGV4dENvbnRleHQgPSBjaGVla1RleHRDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBjaGVla1RleHRDb250ZXh0LnNjYWxlKC0xLCAxKVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gY2hlZWtUZXh0Q29udGV4dC5mb250ID0gXCIxNXB4XCJcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGNoZWVrVGV4dENvbnRleHQuZmlsbFRleHQoXCLsmKTrpbjsqr0g67O8IOyDiVwiLCAtNjAsIDIwKVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gY2hlZWtUZXh0Q29udGV4dC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBjdHgucHV0SW1hZ2VEYXRhKGNoZWVrVGV4dENvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIGNoZWVrVGV4dENhbnZhcy53aWR0aCwgY2hlZWtUZXh0Q2FudmFzLmhlaWdodCksIDEwMCwgMTUwKVxyXG5cclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGxldCBleWVQb2ludEFyYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIilcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGxldCBleWVQb2ludEFyY0N0eCA9IGV5ZVBvaW50QXJjLmdldENvbnRleHQoJzJkJylcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGV5ZVBvaW50QXJjLndpZHRoID0gM1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gZXllUG9pbnRBcmMuaGVpZ2h0ID0gM1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gZXllUG9pbnRBcmNDdHguYmVnaW5QYXRoKCk7XHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBleWVQb2ludEFyY0N0eC5hcmMoMS41LCAxLjUsIDEuNSwgMCwgMiAqIE1hdGguUEkpO1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gZXllUG9pbnRBcmNDdHguZmlsbFN0eWxlID0gJ3JnYigyNTUsMCwwKSdcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGV5ZVBvaW50QXJjQ3R4LmZpbGwoKTtcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGN0eC5wdXRJbWFnZURhdGEoZXllUG9pbnRBcmNDdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIGV5ZVBvaW50QXJjLndpZHRoLCBleWVQb2ludEFyYy5oZWlnaHQpLCBjZW50ZXJQdXBpbC54LCBjZW50ZXJQdXBpbC55KVxyXG5cclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGxldCBleWVQb2ludEFyYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIilcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGxldCBleWVQb2ludEFyY0N0eCA9IGV5ZVBvaW50QXJjLmdldENvbnRleHQoJzJkJylcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGV5ZVBvaW50QXJjLndpZHRoID0gM1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gZXllUG9pbnRBcmMuaGVpZ2h0ID0gM1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gZXllUG9pbnRBcmNDdHguYmVnaW5QYXRoKCk7XHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBleWVQb2ludEFyY0N0eC5hcmMoMS41LCAxLjUsIDEuNSwgMCwgMiAqIE1hdGguUEkpO1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gZXllUG9pbnRBcmNDdHguZmlsbFN0eWxlID0gJ3JnYigyNTUsMCwwKSdcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGV5ZVBvaW50QXJjQ3R4LmZpbGwoKTtcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGF3YWl0IGN0eC5wdXRJbWFnZURhdGEoZXllUG9pbnRBcmNDdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIGV5ZVBvaW50QXJjLndpZHRoLCBleWVQb2ludEFyYy5oZWlnaHQpLCBsZWZ0VW5kZXJFeWUueCwgbGVmdFVuZGVyRXllLnkpXHJcblxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gbGV0IHJpZ2h0RXllUG9pbnRBcmMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBsZXQgcmlnaHRFeWVQb2ludEFyY0N0eCA9IHJpZ2h0RXllUG9pbnRBcmMuZ2V0Q29udGV4dCgnMmQnKVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gcmlnaHRFeWVQb2ludEFyYy53aWR0aCA9IDNcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIHJpZ2h0RXllUG9pbnRBcmMuaGVpZ2h0ID0gM1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gcmlnaHRFeWVQb2ludEFyY0N0eC5iZWdpblBhdGgoKTtcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIHJpZ2h0RXllUG9pbnRBcmNDdHguYXJjKDEuNSwgMS41LCAxLjUsIDAsIDIgKiBNYXRoLlBJKTtcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIHJpZ2h0RXllUG9pbnRBcmNDdHguZmlsbFN0eWxlID0gJ3JnYigyNTUsMCwwKSdcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIHJpZ2h0RXllUG9pbnRBcmNDdHguZmlsbCgpO1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gYXdhaXQgY3R4LnB1dEltYWdlRGF0YShyaWdodEV5ZVBvaW50QXJjQ3R4LmdldEltYWdlRGF0YSgwLCAwLCByaWdodEV5ZVBvaW50QXJjLndpZHRoLCByaWdodEV5ZVBvaW50QXJjLmhlaWdodCksIHJpZ2h0VW5kZXJFeWUueCwgcmlnaHRVbmRlckV5ZS55KVxyXG5cclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGxldCBjaGVla1BvaW50QXJjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gY2hlZWtQb2ludEFyYy53aWR0aCA9IDNcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGNoZWVrUG9pbnRBcmMuaGVpZ2h0ID0gM1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gbGV0IGNoZWVrUG9pbnRBcmNDdHggPSBjaGVla1BvaW50QXJjLmdldENvbnRleHQoJzJkJylcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGNoZWVrUG9pbnRBcmNDdHguYmVnaW5QYXRoKCk7XHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBjaGVla1BvaW50QXJjQ3R4LmFyYygxLjUsIDEuNSwgMS41LCAwLCBNYXRoLlBJICogMik7XHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBjaGVla1BvaW50QXJjQ3R4LmZpbGxTdHlsZSA9ICdyZ2IoMjU1LDAsMCknXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBjaGVla1BvaW50QXJjQ3R4LmZpbGwoKTtcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGF3YWl0IGN0eC5wdXRJbWFnZURhdGEoY2hlZWtQb2ludEFyY0N0eC5nZXRJbWFnZURhdGEoMCwgMCwgY2hlZWtQb2ludEFyYy53aWR0aCwgY2hlZWtQb2ludEFyYy5oZWlnaHQpLCBsZWZ0Q2hlZWsueCwgbGVmdENoZWVrLnkpXHJcblxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gbGV0IHJpZ2h0Q2hlZWtQb2ludEFyYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIilcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIHJpZ2h0Q2hlZWtQb2ludEFyYy53aWR0aCA9IDNcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIHJpZ2h0Q2hlZWtQb2ludEFyYy5oZWlnaHQgPSAzXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBsZXQgcmlnaHRDaGVla1BvaW50QXJjQ3R4ID0gcmlnaHRDaGVla1BvaW50QXJjLmdldENvbnRleHQoJzJkJylcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIHJpZ2h0Q2hlZWtQb2ludEFyY0N0eC5iZWdpblBhdGgoKTtcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIHJpZ2h0Q2hlZWtQb2ludEFyY0N0eC5hcmMoMS41LCAxLjUsIDEuNSwgMCwgTWF0aC5QSSAqIDIpO1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gcmlnaHRDaGVla1BvaW50QXJjQ3R4LmZpbGxTdHlsZSA9ICdyZ2IoMjU1LDAsMCknXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyByaWdodENoZWVrUG9pbnRBcmNDdHguZmlsbCgpO1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gYXdhaXQgY3R4LnB1dEltYWdlRGF0YShyaWdodENoZWVrUG9pbnRBcmNDdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHJpZ2h0Q2hlZWtQb2ludEFyYy53aWR0aCwgcmlnaHRDaGVla1BvaW50QXJjLmhlaWdodCksIHJpZ2h0Q2hlZWsueCwgcmlnaHRDaGVlay55KVxyXG5cclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGxldCBqYXdQb2ludEFyYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIilcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGphd1BvaW50QXJjLndpZHRoID0gM1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gamF3UG9pbnRBcmMuaGVpZ2h0ID0gM1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gbGV0IGphZVBvaW50QXJjQ3R4ID0gamF3UG9pbnRBcmMuZ2V0Q29udGV4dCgnMmQnKVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gamFlUG9pbnRBcmNDdHguYmVnaW5QYXRoKCk7XHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBqYWVQb2ludEFyY0N0eC5hcmMoMS41LCAxLjUsIDEuNSwgMCwgTWF0aC5QSSAqIDIpO1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gamFlUG9pbnRBcmNDdHguZmlsbFN0eWxlID0gJ3JnYigyNTUsMCwwKSdcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGphZVBvaW50QXJjQ3R4LmZpbGwoKTtcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGF3YWl0IGN0eC5wdXRJbWFnZURhdGEoamFlUG9pbnRBcmNDdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIGphd1BvaW50QXJjLndpZHRoLCBqYXdQb2ludEFyYy5oZWlnaHQpLCBqYXcueCwgamF3LnkpXHJcblxyXG4vLyAvLyAgICAgICAgICAgICAgICAgbGV0IGxlZnRFeWVTdW0gPSBuZXcgZ2V0Q29sb3JEYXRhKGxlZnRVbmRlckV5ZSwgZXllTGVuZ3RoLCBjb250ZXh0KVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgbGV0IHJpZ2h0RXllU3VtID0gbmV3IGdldENvbG9yRGF0YShyaWdodFVuZGVyRXllLCBleWVMZW5ndGgsIGNvbnRleHQpXHJcblxyXG4vLyAvLyAgICAgICAgICAgICAgICAgbGV0IGxlZnRDaGVla1N1bSA9IG5ldyBnZXRDb2xvckRhdGEobGVmdENoZWVrLCBleWVMZW5ndGgsIGNvbnRleHQpXHJcbi8vIC8vICAgICAgICAgICAgICAgICBsZXQgcmlnaHRDaGVla1N1bSA9IG5ldyBnZXRDb2xvckRhdGEocmlnaHRDaGVlaywgZXllTGVuZ3RoLCBjb250ZXh0KVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgbGV0IGphd1N1bSA9IG5ldyBnZXRDb2xvckRhdGEoamF3LCBleWVMZW5ndGgsIGNvbnRleHQpXHJcblxyXG4vLyAvLyAgICAgICAgICAgICAgICAgbGV0IGV5ZVJlc3VsdCA9IGF3YWl0IGxlZnRFeWVTdW0ubWFwKChpLCBpZHgpID0+IHtcclxuLy8gLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGkgKyByaWdodEV5ZVN1bVtpZHhdKSAvIDJcclxuLy8gLy8gICAgICAgICAgICAgICAgIH0pXHJcblxyXG4vLyAvLyAgICAgICAgICAgICAgICAgbGV0IGNoZWVrUmVzdWx0ID0gYXdhaXQgbGVmdENoZWVrU3VtLm1hcCgoaSwgaWR4KSA9PiB7XHJcbi8vIC8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChpICsgcmlnaHRDaGVla1N1bVtpZHhdKSAvIDJcclxuLy8gLy8gICAgICAgICAgICAgICAgIH0pXHJcbi8vIC8vICAgICAgICAgICAgICAgICBleWVDb2xvci5wdXNoKGV5ZVJlc3VsdClcclxuLy8gLy8gICAgICAgICAgICAgICAgIGNoZWVrQ29sb3IucHVzaChjaGVla1Jlc3VsdClcclxuLy8gLy8gICAgICAgICAgICAgICAgIGphd0NvbG9yLnB1c2goamF3U3VtKVxyXG5cclxuLy8gLy8gICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7KGV5ZVJlc3VsdFswXSArIGNoZWVrUmVzdWx0WzBdICsgamF3U3VtWzBdKSAvIDN9LCR7KGV5ZVJlc3VsdFsxXSArIGNoZWVrUmVzdWx0WzFdICsgamF3U3VtWzFdKSAvIDN9LCR7KGV5ZVJlc3VsdFsyXSArIGNoZWVrUmVzdWx0WzJdICsgamF3U3VtWzJdKSAvIDN9KWBcclxuXHJcbi8vIC8vICAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoIC8gNCwgY2FudmFzLndpZHRoIC8gNClcclxuXHJcbi8vIC8vICAgICAgICAgICAgICAgICBsZXQgZmFjZUNlbnRlclBvcyA9IHBvc2l0aW9uc1syOV1cclxuXHJcbi8vIC8vICAgICAgICAgICAgICAgICBsZXQgbGVmdEZhY2VXaWR0aCA9IHBvc2l0aW9uc1sxXS54IC0gZmFjZUNlbnRlclBvcy54ICAvL+yZvOyqvSDrs7wg64ST7J20XHJcbi8vIC8vICAgICAgICAgICAgICAgICBsZXQgcmlnaHRGYWNlV2lkdGggPSAgZmFjZUNlbnRlclBvcy54ICAtIHBvc2l0aW9uc1sxNV0ueFxyXG4vLyAvLyAgICAgICAgICAgICAgICAgbGV0IG5vc2VUb0JvdHRvbSA9IChwb3NpdGlvbnNbOF0ueSAtIGZhY2VDZW50ZXJQb3MueSkgKiAxLjEgLy/svZTrtoDthLAg7YSx64GdIOq4uOydtFxyXG4vLyAvLyAgICAgICAgICAgICAgICAgbGV0IG8xID0gTWF0aC5hdGFuKChwb3NpdGlvbnNbMTVdLnktKHBvc2l0aW9uc1sxNV0ueStwb3NpdGlvbnNbMV0ueSkvMikvKHBvc2l0aW9uc1sxNV0ueC1wb3NpdGlvbnNbMV0ueCkpIC8vIOqwgeuPhCDqs4TsgrBcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGxldCBkZWdyZWUgPSBNYXRoLmFicyhvMSAqIDE4MC9NYXRoLlBJKVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy/rp4jsiqTtgawg65Oc66Gc7J6JXHJcbi8vIC8vICAgICAgICAgICAgICAgICBhd2FpdCBjdHguc2F2ZSgpO1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgYXdhaXQgY3R4LnRyYW5zbGF0ZShmYWNlQ2VudGVyUG9zLngsIGZhY2VDZW50ZXJQb3MueSkgLy/quLDspIDsoJAg7J6h6riwLiDrk5zroZzsmrDqsIAg7Iuc7J6R65CY64qUIOyijO2RnOulvCDquLDspIDsoJDsnLzroZwg7J6h7JWE7JW8IOq3uOugpOyngOuKlCDrtoDrtoTrp4wg7ZqM7KCE7J20IOqwgOuKpVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgYXdhaXQgY3R4LnJvdGF0ZShvMSlcclxuLy8gLy8gICAgICAgICAgICAgICAgIGF3YWl0IGN0eC50cmFuc2xhdGUoLWZhY2VDZW50ZXJQb3MueCwgLWZhY2VDZW50ZXJQb3MueSkgLy/snbTtm4Tsl5Ag7J2066+47KeA66W8IOybkO2VmOuKlCDsnITsuZjsl5Ag6re466as6riwIOychO2VtCDri6Tsi5wg7LSI6riw7ZmU7ZW07KSMXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBjdHguc2NhbGUoLTEsMSlcclxuLy8gLy8gICAgICAgICAgICAgICAgIGF3YWl0IGN0eC5kcmF3SW1hZ2UocmlnaHRNYXNrLCBmYWNlQ2VudGVyUG9zLngsIGZhY2VDZW50ZXJQb3MueSwgLXJpZ2h0RmFjZVdpZHRoLCBub3NlVG9Cb3R0b20pXHJcbi8vIC8vICAgICAgICAgICAgICAgICBhd2FpdCBjdHguZHJhd0ltYWdlKGxlZnRNYXNrLCBmYWNlQ2VudGVyUG9zLngrMSwgZmFjZUNlbnRlclBvcy55LCBsZWZ0RmFjZVdpZHRoLCBub3NlVG9Cb3R0b20pXHJcbi8vIC8vICAgICAgICAgICAgICAgICBhd2FpdCBjdHgucmVzdG9yZSgpXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBhd2FpdCBjdHguZHJhd0ltYWdlKGxlZnRNYXNrLCBmYWNlQ2VudGVyUG9zLngsIGZhY2VDZW50ZXJQb3MueSwgbGVmdEZhY2VXaWR0aCwgbm9zZVRvQm90dG9tKVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gYXdhaXQgY3R4LmRyYXdJbWFnZShyaWdodE1hc2ssIGZhY2VDZW50ZXJQb3MueCwgZmFjZUNlbnRlclBvcy55LCAtcmlnaHRGYWNlV2lkdGgsIG5vc2VUb0JvdHRvbSlcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGNvbG9yU3VtLmV5ZSA9IGF3YWl0IGZpbmFsUmVzdWx0WzBdLm1hcCgoaSwgaWR4KSA9PiB7XHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyAgICAgaWYoY29sb3JTdW0uZXllKSByZXR1cm4gIGNvbG9yU3VtLmV5ZVtpZHhdICsgaVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gICAgIGVsc2UgcmV0dXJuICBpXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyAgICAgLy8gcmV0dXJuIChjb2xvclN1bS5leWUgPyBjb2xvclN1bS5leWVbaWR4XSA6IDApICsgaVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gfSlcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGNvbG9yU3VtLmNoZWVrID0gYXdhaXQgZmluYWxSZXN1bHRbMV0ubWFwKChpLCBpZHgpID0+IHtcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vICAgICBpZihjb2xvclN1bS5jaGVlaykgcmV0dXJuICBjb2xvclN1bS5jaGVla1tpZHhdICsgaVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gICAgIGVsc2UgcmV0dXJuICBpXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyB9KVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gY29sb3JTdW0uamF3ID0gYXdhaXQgZmluYWxSZXN1bHRbMl0ubWFwKChpLCBpZHgpID0+IHtcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gKGNvbG9yU3VtLmphdyA/IGNvbG9yU3VtLmV5ZVtpZHhdIDogMCkgKyBpXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyB9KVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gbGV0IGNoZWVrUG9pbnRBcmMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBjaGVla1BvaW50QXJjLndpZHRoID0gM1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gY2hlZWtQb2ludEFyYy5oZWlnaHQgPSAzXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBsZXQgY2hlZWtQb2ludEFyY0N0eCA9IGNoZWVrUG9pbnRBcmMuZ2V0Q29udGV4dCgnMmQnKVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gY2hlZWtQb2ludEFyY0N0eC5iZWdpblBhdGgoKTtcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGNoZWVrUG9pbnRBcmNDdHguYXJjKDEuNSwgMS41LCAxLjUsIDAsIE1hdGguUEkgKiAyKTtcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGNoZWVrUG9pbnRBcmNDdHguZmlsbFN0eWxlID0gJ3JnYigyNTUsMCwwKSdcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGNoZWVrUG9pbnRBcmNDdHguZmlsbCgpO1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gY3R4LnB1dEltYWdlRGF0YShjaGVla1BvaW50QXJjQ3R4LmdldEltYWdlRGF0YSgwLCAwLCBjaGVla1BvaW50QXJjLndpZHRoLCBjaGVla1BvaW50QXJjLmhlaWdodCksIGxlZnRDaGVlay54LCBsZWZ0Q2hlZWsueSlcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGNvbG9yU3VtLmZvckVhY2goKGksIGlkeCkgPT4ge1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gICAgIGNvbG9yU3VtW2lkeF0gKz0gY2hlZWtBdmdDb2xvcltpZHhdXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyB9KVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgaWYgKGNudCA8IDMxKSB7XHJcbi8vIC8vICAgICAgICAgICAgICAgICAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9ncmVzc0JhclwiKS5zdHlsZS53aWR0aCA9IGNudCoyICsgXCIlXCJcclxuLy8gLy8gICAgICAgICAgICAgICAgICAgICAvLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9ncmVzc3BlcmNlbnRcIikuaW5uZXJUZXh0ID0gY250KjIgKyBcIiVcIlxyXG4vLyAvLyAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1mbGV4XCJcclxuLy8gLy8gICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMzsgaSA+PSAwOyBpLS0pIHtcclxuLy8gLy8gICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGNudCAqIDMuM1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvZ3Jlc3NVbml0ID0gcmVzdWx0LnRvRml4ZWQoMSkgLSBpXHJcbi8vIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gcHJvZ3Jlc3NVbml0ICsgXCIlXCJcclxuLy8gLy8gICAgICAgICAgICAgICAgICAgICAgICAgcGVyY2VudC5pbm5lclRleHQgPSBwcm9ncmVzc1VuaXQgKyBcIiVcIlxyXG4vLyAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY250ID09PSAzMCkge1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSBcIjEwMCVcIlxyXG4vLyAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyY2VudC5pbm5lclRleHQgPSBcIjEwMCVcIlxyXG4vLyAvLyAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vIC8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAvLyAgICAgICAgICAgICB9XHJcbi8vIC8vICAgICAgICAgICAgIGVsc2Uge1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgaWYgKHRlc3RFeHBsYWluKVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgICAgIHRlc3RFeHBsYWluLmlubmVyVGV4dCA9IFwi6rCA7J6lIOyWvOq1tOydtCDtmZTsgqztlbTsp4DripQg7ZWE7YSw66W8IO2ZleyduCDtm4Qg6rKw6rO8IO2ZleyduCDrsoTtirzsnYQg64iM65+s7KO87IS47JqUXCJcclxuLy8gLy8gICAgICAgICAgICAgICAgIGxldCBjb2xvclJnYiA9IHN0b3JlLmdldFN0YXRlKCkuQ29sb3JSZWR1Y2VyLm1haW5GYWNlQm9hcmRDb2xvclxyXG4vLyAvLyAgICAgICAgICAgICAgICAgbmV3IEZhY2VCb2FyZChwb3NpdGlvbnMsIGNvbG9yUmdiLCBjYW52YXMpXHJcbi8vIC8vICAgICAgICAgICAgIH1cclxuXHJcbi8vIC8vICAgICAgICAgfSBlbHNlIHtcclxuLy8gLy8gICAgICAgICAgICAgYXdhaXQgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXHJcbi8vIC8vICAgICAgICAgICAgIGlmICh0ZXN0RXhwbGFpbilcclxuLy8gLy8gICAgICAgICAgICAgICAgIHRlc3RFeHBsYWluLmlubmVySFRNTCA9IGDslrzqtbTsnYQg7J247Iud7ZWgIOyImCDsnojrj4TroZ0g7Lm066mU652866W8IOuwlOudvOu0kOyjvOyEuOyalC48YnI+IDxzcGFuIHN0eWxlPVwiY29sb3IgOiB5ZWxsb3c7XCI+VGlwIDog7LWc64yA7ZWcIOu5m+ydmCDsmIHtlqXsnYQg67Cb7KeAIOyViuuKlCDqs7Psl5DshJwg7Lih7KCV7ZW067O07IS47JqUITwvc3Bhbj5gXHJcbi8vIC8vICAgICAgICAgfVxyXG4vLyAvLyAgICAgICAgIGFuaSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0ZXN0KVxyXG4vLyAvLyAgICAgfVxyXG5cclxuLy8gLy8gICAgIC8vIGludGVydmFsID0gc2V0SW50ZXJ2YWwoYXN5bmMgKCkgPT4ge1xyXG5cclxuLy8gLy8gICAgIC8vICAgICBjb25zdCBkZXRlY3Rpb25zID0gYXdhaXQgZmFjZWFwaS5kZXRlY3RTaW5nbGVGYWNlKHZpZGVvLCBuZXcgZmFjZWFwaS5UaW55RmFjZURldGVjdG9yT3B0aW9ucygpKS53aXRoRmFjZUxhbmRtYXJrcyh0cnVlKSAvL3ZpZGVvIOy6oeyzkOuzuCDslrzqtbTsnbjsi50g7KCV67O0ICDsgqzsnbTspojrpbwg66ee7LaU6riwIOyghOydtOq4sOuVjOusuOyXkCDsooztkZzqsJLsnbQg64uk66W064ukXHJcbi8vIC8vICAgICAvLyAgICAgbGV0IHJlc2l6ZWREZXRlY3Rpb25zXHJcbi8vIC8vICAgICAvLyAgICAgbG9hZGluZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbi8vIC8vICAgICAvLyAgICAgaWYgKGRldGVjdGlvbnMpIHtcclxuXHJcbi8vIC8vICAgICAvLyAgICAgICAgIGNudCsrXHJcblxyXG4vLyAvLyAgICAgLy8gICAgICAgICBpZiAoY250ID09IDMxICYmICFmYWNlQm9hcmQpIHtcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICBjYW52YXMucmVtb3ZlKClcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIGNvbG9yU3VtLmV5ZSA9IGV5ZUNvbG9yLnJlZHVjZSgoYSxiKT0+e1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiBbYVswXStiWzBdLCBhWzFdK2JbMV0sIGFbMl0rYlsyXV1cclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIH0pXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICBjb2xvclN1bS5jaGVlayA9IGNoZWVrQ29sb3IucmVkdWNlKChhLGIpPT57XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuIFthWzBdK2JbMF0sIGFbMV0rYlsxXSwgYVsyXStiWzJdXVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgfSlcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIGNvbG9yU3VtLmphdyA9IGphd0NvbG9yLnJlZHVjZSgoYSxiKT0+e1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiBbYVswXStiWzBdLCBhWzFdK2JbMV0sIGFbMl0rYlsyXV1cclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIH0pXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICBmb3IobGV0IGtleSBpbiBjb2xvclN1bSl7XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAgICAgY29sb3JTdW1ba2V5XSA9IGNvbG9yU3VtW2tleV0ubWFwKGk9PmkvMzApXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICB9XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICB0aHJvdHRsZXIudGhyb3R0bGUoKCkgPT4ge1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgICAgIHZpZGVvLnBhdXNlKClcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgICAgICBheGlvcy5wb3N0KCdodHRwczovL3RlbnNvci1zZXJ2ZXIuaGVyb2t1YXBwLmNvbS9nZXRTZWFzb24nLCBjb2xvclN1bSlcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgICAgICAudGhlbihyZXM9PntcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocmVzLmRhdGEpLmNsaWNrKClcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgICAgICB9KVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgICAgIC5jYXRjaChlcnI9PntcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgICAgIH0pXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICB9LCA1MDApXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICByZXR1cm5cclxuLy8gLy8gICAgIC8vICAgICAgICAgfVxyXG4vLyAvLyAgICAgLy8gICAgICAgICBpZihjbnQgPjMxICYmICFmYWNlQm9hcmQpIHJldHVyblxyXG5cclxuLy8gLy8gICAgIC8vICAgICAgICAgcmVzaXplZERldGVjdGlvbnMgPSBhd2FpdCBmYWNlYXBpLnJlc2l6ZVJlc3VsdHMoZGV0ZWN0aW9ucywgZGlzcGxheVNpemUpIC8vZGV0ZWN0aW9uc+ulvCBkaXNwbGF5c2l6ZeyXkCDrp57stpgg6rKw6rO86rCSXHJcbi8vIC8vICAgICAvLyAgICAgICAgIC8vIGF3YWl0IGZhY2VhcGkuZHJhdy5kcmF3RGV0ZWN0aW9ucyhjYW52YXMsIHJlc2l6ZWREZXRlY3Rpb25zKSAvL+yWvOq1tOyduOyLnSDsgqzqsIHtmJUg67CV7IqkIOuTnOuhnOyeiVxyXG5cclxuLy8gLy8gICAgIC8vICAgICAgICAgLy8gY29uc3QgbGFuZG1hcmsgPSBhd2FpdCBmYWNlYXBpLmRldGVjdEZhY2VMYW5kbWFya3NUaW55KGNhbnZhcykgLy/tjpjsnbTsiqTrnpzrk5zrp4jtgawg7KKM7ZGcXHJcbi8vIC8vICAgICAvLyAgICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IGF3YWl0IHJlc2l6ZWREZXRlY3Rpb25zLmxhbmRtYXJrcy5wb3NpdGlvbnNcclxuXHJcbi8vIC8vICAgICAvLyAgICAgICAgIGlmICghZmFjZUJvYXJkKSB7XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlc3RFeHBsYWluXCIpLmlubmVySFRNTCA9IGDtlLzrtoDsg4nsnYQg7LaU7LacIOykkSDsnoXri4jri6QuPGJyPiA8c3BhbiBzdHlsZT1cImNvbG9yIDogeWVsbG93O1wiPlRpcCA6IOy1nOuMgO2VnCDruZvsnZgg7JiB7Zal7J2EIOuwm+yngCDslYrripQg6rOz7JeQ7IScIOy4oeygle2VtOuztOyEuOyalCE8L3NwYW4+YFxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgYXdhaXQgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpIC8v7LqU67KE7IqkIOy0iOq4sO2ZlFxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgYXdhaXQgZmFjZWFwaS5kcmF3LmRyYXdGYWNlTGFuZG1hcmtzKGNhbnZhcywgcmVzaXplZERldGVjdGlvbnMpIC8v7Ja86rW07J247IudIOuenOuTnOuniO2BrCDrk5zroZzsnolcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIGNvbnN0IGxlZnROb3NlID0gcG9zaXRpb25zWzMxXVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgY29uc3QgbGVmdENoaW4gPSBwb3NpdGlvbnNbMl1cclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIGNvbnN0IGxlZnRDaGVlayA9IHsgeDogKGxlZnROb3NlLnggKyBsZWZ0Q2hpbi54KSAvIDIsIHk6IChsZWZ0Tm9zZS55ICsgbGVmdENoaW4ueSkgLyAyIH1cclxuXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICBjb25zdCByaWdodE5vc2UgPSBwb3NpdGlvbnNbMzVdXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICBjb25zdCByaWdodENoaW4gPSBwb3NpdGlvbnNbMTRdXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICBjb25zdCByaWdodENoZWVrID0geyB4OiAocmlnaHROb3NlLnggKyByaWdodENoaW4ueCkgLyAyLCB5OiAocmlnaHROb3NlLnkgKyByaWdodENoaW4ueSkgLyAyIH1cclxuXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICBjb25zdCBleWVMZW5ndGggPSAocG9zaXRpb25zWzQxXS55IC0gcG9zaXRpb25zWzM3XS55KVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgY29uc3QgZXllTWlkZGxlWCA9IChwb3NpdGlvbnNbNDBdLnggKyBwb3NpdGlvbnNbNDFdLngpIC8gMlxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgY29uc3QgbGVmdFVuZGVyRXllID0geyB4OiBleWVNaWRkbGVYLCB5OiBwb3NpdGlvbnNbNDFdLnkgKyBleWVMZW5ndGggfVxyXG5cclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIGNvbnN0IHJpZ2h0RXllTWlkZGxlWCA9IChwb3NpdGlvbnNbNDZdLnggKyBwb3NpdGlvbnNbNDddLngpIC8gMlxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgY29uc3QgcmlnaHRVbmRlckV5ZSA9IHsgeDogcmlnaHRFeWVNaWRkbGVYLCB5OiBwb3NpdGlvbnNbNDZdLnkgKyBleWVMZW5ndGggfVxyXG5cclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIGNvbnN0IGphdyA9IHsgeDogcG9zaXRpb25zWzhdLngsIHk6IChwb3NpdGlvbnNbOF0ueSArIHBvc2l0aW9uc1s1N10ueSkgLyAyIH1cclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHZpZGVvLCAwLCAwLCBjYW1DYW52YXMud2lkdGgsIGNhbUNhbnZhcy5oZWlnaHQpO1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gbGV0IGV5ZUF2Z0NvbG9yID0gY29udGV4dC5nZXRJbWFnZURhdGEoY2VudGVyUHVwaWwueCwgY2VudGVyUHVwaWwueSwgMSwgMSkuZGF0YVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgbGV0IGNoZWVrQXZnQ29sb3IgPSBjb250ZXh0LmdldEltYWdlRGF0YShsZWZ0Q2hlZWsueCwgbGVmdENoZWVrLnksIDEsIDEpLmRhdGFcclxuXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBjdHguZmlsbFN0eWxlID0gYHJnYigke2V5ZUF2Z0NvbG9yWzBdfSwke2V5ZUF2Z0NvbG9yWzFdfSwke2V5ZUF2Z0NvbG9yWzJdfSlgXHJcblxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gY3R4LmZpbGxSZWN0KDAsIDAsIDEwMCwgMTAwKVxyXG5cclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7Y2hlZWtBdmdDb2xvclswXX0sJHtjaGVla0F2Z0NvbG9yWzFdfSwke2NoZWVrQXZnQ29sb3JbMl19KWBcclxuXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBjdHguZmlsbFJlY3QoMCwgMTUwLCAxMDAsIDEwMClcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7Y2hlZWtBdmdDb2xvclswXX0sJHtjaGVla0F2Z0NvbG9yWzFdfSwke2NoZWVrQXZnQ29sb3JbMl19KWBcclxuXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoIC8gNCwgY2FudmFzLndpZHRoIC8gNClcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGN0eC5mb250ID0gXCIyMHB4IHNlcmlmXCJcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGN0eC5zdHJva2VUZXh0KFwiaGVsbG8gd29ybGRcIiwgMCwyMClcclxuXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBsZXQgZXllVGV4dENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIilcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGV5ZVRleHRDYW52YXMud2lkdGggPSAxMDBcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGV5ZVRleHRDYW52YXMuaGVpZ2h0ID0gMjVcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGxldCBleWVUZXh0Q29udGV4dCA9IGV5ZVRleHRDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBleWVUZXh0Q29udGV4dC5zY2FsZSgtMSwgMSlcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGV5ZVRleHRDb250ZXh0LmZvbnQgPSBcIjE1cHhcIlxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gZXllVGV4dENvbnRleHQuZmlsbFRleHQoXCLsmKTrpbjsqr0g7ZmN7LGE7IOJXCIsIC03MCwgMjApXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBleWVUZXh0Q29udGV4dC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBjdHgucHV0SW1hZ2VEYXRhKGV5ZVRleHRDb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBleWVUZXh0Q2FudmFzLndpZHRoLCBleWVUZXh0Q2FudmFzLmhlaWdodCksIDAsIDApXHJcblxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gbGV0IGNoZWVrVGV4dENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIilcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGNoZWVrVGV4dENhbnZhcy53aWR0aCA9IDcwXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBjaGVla1RleHRDYW52YXMuaGVpZ2h0ID0gMjVcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGxldCBjaGVla1RleHRDb250ZXh0ID0gY2hlZWtUZXh0Q2FudmFzLmdldENvbnRleHQoXCIyZFwiKVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gY2hlZWtUZXh0Q29udGV4dC5zY2FsZSgtMSwgMSlcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGNoZWVrVGV4dENvbnRleHQuZm9udCA9IFwiMTVweFwiXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBjaGVla1RleHRDb250ZXh0LmZpbGxUZXh0KFwi7Jik66W47Kq9IOuzvCDsg4lcIiwgLTYwLCAyMClcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGNoZWVrVGV4dENvbnRleHQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gY3R4LnB1dEltYWdlRGF0YShjaGVla1RleHRDb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBjaGVla1RleHRDYW52YXMud2lkdGgsIGNoZWVrVGV4dENhbnZhcy5oZWlnaHQpLCAxMDAsIDE1MClcclxuXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBsZXQgZXllUG9pbnRBcmMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBsZXQgZXllUG9pbnRBcmNDdHggPSBleWVQb2ludEFyYy5nZXRDb250ZXh0KCcyZCcpXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBleWVQb2ludEFyYy53aWR0aCA9IDNcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGV5ZVBvaW50QXJjLmhlaWdodCA9IDNcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGV5ZVBvaW50QXJjQ3R4LmJlZ2luUGF0aCgpO1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gZXllUG9pbnRBcmNDdHguYXJjKDEuNSwgMS41LCAxLjUsIDAsIDIgKiBNYXRoLlBJKTtcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGV5ZVBvaW50QXJjQ3R4LmZpbGxTdHlsZSA9ICdyZ2IoMjU1LDAsMCknXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBleWVQb2ludEFyY0N0eC5maWxsKCk7XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBjdHgucHV0SW1hZ2VEYXRhKGV5ZVBvaW50QXJjQ3R4LmdldEltYWdlRGF0YSgwLCAwLCBleWVQb2ludEFyYy53aWR0aCwgZXllUG9pbnRBcmMuaGVpZ2h0KSwgY2VudGVyUHVwaWwueCwgY2VudGVyUHVwaWwueSlcclxuXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBsZXQgZXllUG9pbnRBcmMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBsZXQgZXllUG9pbnRBcmNDdHggPSBleWVQb2ludEFyYy5nZXRDb250ZXh0KCcyZCcpXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBleWVQb2ludEFyYy53aWR0aCA9IDNcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGV5ZVBvaW50QXJjLmhlaWdodCA9IDNcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGV5ZVBvaW50QXJjQ3R4LmJlZ2luUGF0aCgpO1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gZXllUG9pbnRBcmNDdHguYXJjKDEuNSwgMS41LCAxLjUsIDAsIDIgKiBNYXRoLlBJKTtcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGV5ZVBvaW50QXJjQ3R4LmZpbGxTdHlsZSA9ICdyZ2IoMjU1LDAsMCknXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBleWVQb2ludEFyY0N0eC5maWxsKCk7XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBhd2FpdCBjdHgucHV0SW1hZ2VEYXRhKGV5ZVBvaW50QXJjQ3R4LmdldEltYWdlRGF0YSgwLCAwLCBleWVQb2ludEFyYy53aWR0aCwgZXllUG9pbnRBcmMuaGVpZ2h0KSwgbGVmdFVuZGVyRXllLngsIGxlZnRVbmRlckV5ZS55KVxyXG5cclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGxldCByaWdodEV5ZVBvaW50QXJjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gbGV0IHJpZ2h0RXllUG9pbnRBcmNDdHggPSByaWdodEV5ZVBvaW50QXJjLmdldENvbnRleHQoJzJkJylcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIHJpZ2h0RXllUG9pbnRBcmMud2lkdGggPSAzXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyByaWdodEV5ZVBvaW50QXJjLmhlaWdodCA9IDNcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIHJpZ2h0RXllUG9pbnRBcmNDdHguYmVnaW5QYXRoKCk7XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyByaWdodEV5ZVBvaW50QXJjQ3R4LmFyYygxLjUsIDEuNSwgMS41LCAwLCAyICogTWF0aC5QSSk7XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyByaWdodEV5ZVBvaW50QXJjQ3R4LmZpbGxTdHlsZSA9ICdyZ2IoMjU1LDAsMCknXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyByaWdodEV5ZVBvaW50QXJjQ3R4LmZpbGwoKTtcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGF3YWl0IGN0eC5wdXRJbWFnZURhdGEocmlnaHRFeWVQb2ludEFyY0N0eC5nZXRJbWFnZURhdGEoMCwgMCwgcmlnaHRFeWVQb2ludEFyYy53aWR0aCwgcmlnaHRFeWVQb2ludEFyYy5oZWlnaHQpLCByaWdodFVuZGVyRXllLngsIHJpZ2h0VW5kZXJFeWUueSlcclxuXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBsZXQgY2hlZWtQb2ludEFyYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIilcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGNoZWVrUG9pbnRBcmMud2lkdGggPSAzXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBjaGVla1BvaW50QXJjLmhlaWdodCA9IDNcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGxldCBjaGVla1BvaW50QXJjQ3R4ID0gY2hlZWtQb2ludEFyYy5nZXRDb250ZXh0KCcyZCcpXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBjaGVla1BvaW50QXJjQ3R4LmJlZ2luUGF0aCgpO1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gY2hlZWtQb2ludEFyY0N0eC5hcmMoMS41LCAxLjUsIDEuNSwgMCwgTWF0aC5QSSAqIDIpO1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gY2hlZWtQb2ludEFyY0N0eC5maWxsU3R5bGUgPSAncmdiKDI1NSwwLDApJ1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gY2hlZWtQb2ludEFyY0N0eC5maWxsKCk7XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBhd2FpdCBjdHgucHV0SW1hZ2VEYXRhKGNoZWVrUG9pbnRBcmNDdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIGNoZWVrUG9pbnRBcmMud2lkdGgsIGNoZWVrUG9pbnRBcmMuaGVpZ2h0KSwgbGVmdENoZWVrLngsIGxlZnRDaGVlay55KVxyXG5cclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGxldCByaWdodENoZWVrUG9pbnRBcmMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyByaWdodENoZWVrUG9pbnRBcmMud2lkdGggPSAzXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyByaWdodENoZWVrUG9pbnRBcmMuaGVpZ2h0ID0gM1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gbGV0IHJpZ2h0Q2hlZWtQb2ludEFyY0N0eCA9IHJpZ2h0Q2hlZWtQb2ludEFyYy5nZXRDb250ZXh0KCcyZCcpXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyByaWdodENoZWVrUG9pbnRBcmNDdHguYmVnaW5QYXRoKCk7XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyByaWdodENoZWVrUG9pbnRBcmNDdHguYXJjKDEuNSwgMS41LCAxLjUsIDAsIE1hdGguUEkgKiAyKTtcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIHJpZ2h0Q2hlZWtQb2ludEFyY0N0eC5maWxsU3R5bGUgPSAncmdiKDI1NSwwLDApJ1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gcmlnaHRDaGVla1BvaW50QXJjQ3R4LmZpbGwoKTtcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGF3YWl0IGN0eC5wdXRJbWFnZURhdGEocmlnaHRDaGVla1BvaW50QXJjQ3R4LmdldEltYWdlRGF0YSgwLCAwLCByaWdodENoZWVrUG9pbnRBcmMud2lkdGgsIHJpZ2h0Q2hlZWtQb2ludEFyYy5oZWlnaHQpLCByaWdodENoZWVrLngsIHJpZ2h0Q2hlZWsueSlcclxuXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBsZXQgamF3UG9pbnRBcmMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBqYXdQb2ludEFyYy53aWR0aCA9IDNcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGphd1BvaW50QXJjLmhlaWdodCA9IDNcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGxldCBqYWVQb2ludEFyY0N0eCA9IGphd1BvaW50QXJjLmdldENvbnRleHQoJzJkJylcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGphZVBvaW50QXJjQ3R4LmJlZ2luUGF0aCgpO1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gamFlUG9pbnRBcmNDdHguYXJjKDEuNSwgMS41LCAxLjUsIDAsIE1hdGguUEkgKiAyKTtcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGphZVBvaW50QXJjQ3R4LmZpbGxTdHlsZSA9ICdyZ2IoMjU1LDAsMCknXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBqYWVQb2ludEFyY0N0eC5maWxsKCk7XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBhd2FpdCBjdHgucHV0SW1hZ2VEYXRhKGphZVBvaW50QXJjQ3R4LmdldEltYWdlRGF0YSgwLCAwLCBqYXdQb2ludEFyYy53aWR0aCwgamF3UG9pbnRBcmMuaGVpZ2h0KSwgamF3LngsIGphdy55KVxyXG5cclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIGxldCBsZWZ0RXllU3VtID0gbmV3IGdldENvbG9yRGF0YShsZWZ0VW5kZXJFeWUsIGV5ZUxlbmd0aCwgY29udGV4dClcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIGxldCByaWdodEV5ZVN1bSA9IG5ldyBnZXRDb2xvckRhdGEocmlnaHRVbmRlckV5ZSwgZXllTGVuZ3RoLCBjb250ZXh0KVxyXG5cclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIGxldCBsZWZ0Q2hlZWtTdW0gPSBuZXcgZ2V0Q29sb3JEYXRhKGxlZnRDaGVlaywgZXllTGVuZ3RoLCBjb250ZXh0KVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgbGV0IHJpZ2h0Q2hlZWtTdW0gPSBuZXcgZ2V0Q29sb3JEYXRhKHJpZ2h0Q2hlZWssIGV5ZUxlbmd0aCwgY29udGV4dClcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIGxldCBqYXdTdW0gPSBuZXcgZ2V0Q29sb3JEYXRhKGphdywgZXllTGVuZ3RoLCBjb250ZXh0KVxyXG5cclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIGxldCBleWVSZXN1bHQgPSBhd2FpdCBsZWZ0RXllU3VtLm1hcCgoaSwgaWR4KSA9PiB7XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuIGkgKyByaWdodEV5ZVN1bVtpZHhdXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICB9KVxyXG5cclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIGxldCBjaGVla1Jlc3VsdCA9IGF3YWl0IGxlZnRDaGVla1N1bS5tYXAoKGksIGlkeCkgPT4ge1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiBpICsgcmlnaHRDaGVla1N1bVtpZHhdXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICB9KVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgZXllQ29sb3IucHVzaChleWVSZXN1bHQubWFwKGkgPT4gaSAvPSAyKSlcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIGNoZWVrQ29sb3IucHVzaChjaGVla1Jlc3VsdC5tYXAoaSA9PiBpIC89IDIpKVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgamF3Q29sb3IucHVzaChqYXdTdW0pXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBjb2xvclN1bS5leWUgPSBhd2FpdCBmaW5hbFJlc3VsdFswXS5tYXAoKGksIGlkeCkgPT4ge1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gICAgIGlmKGNvbG9yU3VtLmV5ZSkgcmV0dXJuICBjb2xvclN1bS5leWVbaWR4XSArIGlcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vICAgICBlbHNlIHJldHVybiAgaVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gICAgIC8vIHJldHVybiAoY29sb3JTdW0uZXllID8gY29sb3JTdW0uZXllW2lkeF0gOiAwKSArIGlcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIH0pXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBjb2xvclN1bS5jaGVlayA9IGF3YWl0IGZpbmFsUmVzdWx0WzFdLm1hcCgoaSwgaWR4KSA9PiB7XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyAgICAgaWYoY29sb3JTdW0uY2hlZWspIHJldHVybiAgY29sb3JTdW0uY2hlZWtbaWR4XSArIGlcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vICAgICBlbHNlIHJldHVybiAgaVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gfSlcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGNvbG9yU3VtLmphdyA9IGF3YWl0IGZpbmFsUmVzdWx0WzJdLm1hcCgoaSwgaWR4KSA9PiB7XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIChjb2xvclN1bS5qYXcgPyBjb2xvclN1bS5leWVbaWR4XSA6IDApICsgaVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gfSlcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGxldCBjaGVla1BvaW50QXJjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gY2hlZWtQb2ludEFyYy53aWR0aCA9IDNcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGNoZWVrUG9pbnRBcmMuaGVpZ2h0ID0gM1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gbGV0IGNoZWVrUG9pbnRBcmNDdHggPSBjaGVla1BvaW50QXJjLmdldENvbnRleHQoJzJkJylcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGNoZWVrUG9pbnRBcmNDdHguYmVnaW5QYXRoKCk7XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBjaGVla1BvaW50QXJjQ3R4LmFyYygxLjUsIDEuNSwgMS41LCAwLCBNYXRoLlBJICogMik7XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBjaGVla1BvaW50QXJjQ3R4LmZpbGxTdHlsZSA9ICdyZ2IoMjU1LDAsMCknXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBjaGVla1BvaW50QXJjQ3R4LmZpbGwoKTtcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGN0eC5wdXRJbWFnZURhdGEoY2hlZWtQb2ludEFyY0N0eC5nZXRJbWFnZURhdGEoMCwgMCwgY2hlZWtQb2ludEFyYy53aWR0aCwgY2hlZWtQb2ludEFyYy5oZWlnaHQpLCBsZWZ0Q2hlZWsueCwgbGVmdENoZWVrLnkpXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBjb2xvclN1bS5mb3JFYWNoKChpLCBpZHgpID0+IHtcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vICAgICBjb2xvclN1bVtpZHhdICs9IGNoZWVrQXZnQ29sb3JbaWR4XVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gfSlcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIGlmIChjbnQgPCAzMSkge1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZ3Jlc3NCYXJcIikuc3R5bGUud2lkdGggPSBjbnQqMiArIFwiJVwiXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAgICAgLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZ3Jlc3NwZXJjZW50XCIpLmlubmVyVGV4dCA9IGNudCoyICsgXCIlXCJcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgICAgICBwcm9ncmVzc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtZmxleFwiXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDM7IGkgPj0gMDsgaS0tKSB7XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBjbnQgKiAzLjNcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgICAgICAgICAgbGV0IHByb2dyZXNzVW5pdCA9IHJlc3VsdC50b0ZpeGVkKDEpIC1pXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gcHJvZ3Jlc3NVbml0ICsgXCIlXCJcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgICAgICAgICAgcGVyY2VudC5pbm5lclRleHQgPSBwcm9ncmVzc1VuaXQgKyBcIiVcIlxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgICAgICAgICBpZiAoY250ID09PSAzMCkge1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSBcIjEwMCVcIlxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgcGVyY2VudC5pbm5lclRleHQgPSBcIjEwMCVcIlxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgfVxyXG4vLyAvLyAgICAgLy8gICAgICAgICB9XHJcbi8vIC8vICAgICAvLyAgICAgICAgIGVsc2Uge1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXN0RXhwbGFpblwiKS5pbm5lclRleHQgPSBcIuqwgOyepSDslrzqtbTsnbQg7ZmU7IKs7ZW07KeA64qUIO2VhO2EsOulvCDtmZXsnbgg7ZuEIOqysOqzvCDtmZXsnbgg67KE7Yq87J2EIOuIjOufrOyjvOyEuOyalFwiXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICBsZXQgY29sb3JSZ2IgPSBzdG9yZS5nZXRTdGF0ZSgpLkNvbG9yUmVkdWNlci5tYWluRmFjZUJvYXJkQ29sb3JcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIG5ldyBGYWNlQm9hcmQocG9zaXRpb25zLCBjb2xvclJnYiwgY2FudmFzKVxyXG4vLyAvLyAgICAgLy8gICAgICAgICB9XHJcblxyXG4vLyAvLyAgICAgLy8gICAgIH0gZWxzZSB7XHJcbi8vIC8vICAgICAvLyAgICAgICAgIGF3YWl0IGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxyXG4vLyAvLyAgICAgLy8gICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlc3RFeHBsYWluXCIpLmlubmVySFRNTCA9IGDslrzqtbTsnYQg7J247Iud7ZWgIOyImCDsnojrj4TroZ0g7Lm066mU652866W8IOuwlOudvOu0kOyjvOyEuOyalC48YnI+IDxzcGFuIHN0eWxlPVwiY29sb3IgOiB5ZWxsb3c7XCI+VGlwIDog7LWc64yA7ZWcIOu5m+ydmCDsmIHtlqXsnYQg67Cb7KeAIOyViuuKlCDqs7Psl5DshJwg7Lih7KCV7ZW067O07IS47JqUITwvc3Bhbj5gXHJcbi8vIC8vICAgICAvLyAgICAgfVxyXG5cclxuLy8gLy8gICAgIC8vIH0sIDEwMClcclxuLy8gLy8gfVxyXG5cclxuLy8gaW1wb3J0ICogYXMgZmFjZUxhbmRtYXJrc0RldGVjdGlvbiBmcm9tICdAdGVuc29yZmxvdy1tb2RlbHMvZmFjZS1sYW5kbWFya3MtZGV0ZWN0aW9uJztcclxuLy8gaW1wb3J0ICogYXMgdGYgZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlJztcclxuLy8gaW1wb3J0ICdAdGVuc29yZmxvdy90ZmpzLWJhY2tlbmQtd2ViZ2wnO1xyXG4vLyBpbXBvcnQgeyBtb2RlbCB9IGZyb20gJy4uLy4uL3BhZ2VzL19hcHAnO1xyXG4vLyBpbXBvcnQgTWFza0RyYXcgZnJvbSAnLi9NYXNrRHJhdyc7XHJcbi8vIGltcG9ydCB7IGFjdGlvbkNyZWF0b3JzIH0gZnJvbSAnLi4vLi4vc3RvcmUvY29sb3JTdG9yZSc7XHJcbi8vIGltcG9ydCBnZXREZXZpY2VUeXBlIGZyb20gJy4vZ2V0RGV2aWNlVHlwZSc7XHJcbi8vIC8vIGltcG9ydCB7IGNhbnZhc1RvSW1nIH0gZnJvbSAnLi9jYW52YXNUb0ltZydcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIFN0cmVhbUNhbnZhcyhmYWNlQm9hcmQpIHtcclxuLy8gICBsZXQgY3R4LCB2aWRlb1dpZHRoLCB2aWRlb0hlaWdodCwgdmlkZW8sIHJhZklEO1xyXG4vLyAgIHZpZGVvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZGVvJyk7XHJcbi8vICAgbGV0IG1hc2tDb2xvcjtcclxuLy8gICBpZiAoXHJcbi8vICAgICB2aWRlbyAmJlxyXG4vLyAgICAgdmlkZW8ucHJldmlvdXNTaWJsaW5nICYmXHJcbi8vICAgICB2aWRlby5wcmV2aW91c1NpYmxpbmcubm9kZU5hbWUgPT0gJ0NBTlZBUydcclxuLy8gICApXHJcbi8vICAgICByZXR1cm47XHJcbi8vICAgY29uc3QgbG9hZGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkaW5nJyk7XHJcbi8vICAgY29uc3QgTUxfTG9hZGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdNTF9Mb2FkaW5nJyk7XHJcbi8vICAgTUxfTG9hZGluZy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbi8vICAgY29uc3Qgc3RhdGUgPSB7XHJcbi8vICAgICBiYWNrZW5kOiAnd2ViZ2wnLFxyXG4vLyAgICAgbWF4RmFjZXM6IDEsXHJcbi8vICAgICB0cmlhbmd1bGF0ZU1lc2g6IHRydWUsXHJcbi8vICAgICBwcmVkaWN0SXJpc2VzOiBmYWxzZSxcclxuLy8gICB9O1xyXG5cclxuLy8gICBjb25zdCBOVU1fS0VZUE9JTlRTID0gNDY4O1xyXG4vLyAgIGNvbnN0IE5VTV9JUklTX0tFWVBPSU5UUyA9IDU7XHJcbi8vICAgY29uc3QgR1JFRU4gPSAnIzMyRUVEQic7XHJcbi8vICAgY29uc3QgUkVEID0gJyNGRjJDMzUnO1xyXG4vLyAgIGNvbnN0IEJMVUUgPSAnIzE1N0FCMyc7XHJcbi8vICAgbGV0IHRlc3RXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rlc3RXcmFwcGVyJyk7XHJcbi8vICAgbGV0IGhlYWRlcldyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyV3JhcHBlcicpO1xyXG5cclxuLy8gICBjb25zdCB0aHJvdHRsZXIgPSB0aHJvdHRsaW5nKCk7XHJcbi8vICAgY29uc3QgcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZ3Jlc3NCYXInKTtcclxuLy8gICBjb25zdCBwZXJjZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2dyZXNzUGVyY2VudCcpO1xyXG4vLyAgIGNvbnN0IHByb2dyZXNzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2dyZXNzQ29udGFpbmVyJyk7XHJcbi8vICAgY29uc3QgdGVzdEV4cGxhaW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVzdEV4cGxhaW4nKTtcclxuLy8gICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbi8vICAgbGV0IGNhbUNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4vLyAgIGxldCBjb250ZXh0ID0gY2FtQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbi8vICAgbGV0IGNudCA9IDA7XHJcbi8vICAgbGV0IGNvbG9yU3VtID0ge307XHJcbi8vICAgbGV0IGV5ZUNvbG9yID0gW107XHJcbi8vICAgbGV0IGNoZWVrQ29sb3IgPSBbXTtcclxuLy8gICBsZXQgamF3Q29sb3IgPSBbXTtcclxuLy8gICBsZXQgdHlwZUFyciA9IGdldERldmljZVR5cGUoKTtcclxuXHJcbi8vICAgaWYgKGZhY2VCb2FyZCA9PSAnbWFzaycpIHtcclxuLy8gICAgIGxldCBiZWlnZV9sZWZ0ID0gbmV3IEltYWdlKCk7XHJcbi8vICAgICBiZWlnZV9sZWZ0LnNyYyA9IGAke3Byb2Nlc3MuZW52LlBBVEh9L2ltYWdlcy9iZWlnZS1sZWZ0LnBuZ2A7XHJcbi8vICAgICBsZXQgYmVpZ2VfcmlnaHQgPSBuZXcgSW1hZ2UoKTtcclxuLy8gICAgIGJlaWdlX3JpZ2h0LnNyYyA9IGAke3Byb2Nlc3MuZW52LlBBVEh9L2ltYWdlcy9iZWlnZS1yaWdodC5wbmdgO1xyXG4vLyAgICAgbGV0IG1pbnRfbGVmdCA9IG5ldyBJbWFnZSgpO1xyXG4vLyAgICAgbWludF9sZWZ0LnNyYyA9IGAke3Byb2Nlc3MuZW52LlBBVEh9L2ltYWdlcy9taW50LWxlZnQucG5nYDtcclxuLy8gICAgIGxldCBtaW50X3JpZ2h0ID0gbmV3IEltYWdlKCk7XHJcbi8vICAgICBtaW50X3JpZ2h0LnNyYyA9IGAke3Byb2Nlc3MuZW52LlBBVEh9L2ltYWdlcy9taW50LXJpZ2h0LnBuZ2A7XHJcbi8vICAgICBsZXQgYmxhY2tfbGVmdCA9IG5ldyBJbWFnZSgpO1xyXG4vLyAgICAgYmxhY2tfbGVmdC5zcmMgPSBgJHtwcm9jZXNzLmVudi5QQVRIfS9pbWFnZXMvYmxhY2stbGVmdC5wbmdgO1xyXG4vLyAgICAgbGV0IGJsYWNrX3JpZ2h0ID0gbmV3IEltYWdlKCk7XHJcbi8vICAgICBibGFja19yaWdodC5zcmMgPSBgJHtwcm9jZXNzLmVudi5QQVRIfS9pbWFnZXMvYmxhY2stcmlnaHQucG5nYDtcclxuLy8gICAgIGxldCB3aGl0ZV9sZWZ0ID0gbmV3IEltYWdlKCk7XHJcbi8vICAgICB3aGl0ZV9sZWZ0LnNyYyA9IGAke3Byb2Nlc3MuZW52LlBBVEh9L2ltYWdlcy93aGl0ZS1sZWZ0LnBuZ2A7XHJcbi8vICAgICBsZXQgd2hpdGVfcmlnaHQgPSBuZXcgSW1hZ2UoKTtcclxuLy8gICAgIHdoaXRlX3JpZ2h0LnNyYyA9IGAke3Byb2Nlc3MuZW52LlBBVEh9L2ltYWdlcy93aGl0ZS1yaWdodC5wbmdgO1xyXG4vLyAgICAgbGV0IHB1cnBsZV9sZWZ0ID0gbmV3IEltYWdlKCk7XHJcbi8vICAgICBwdXJwbGVfbGVmdC5zcmMgPSBgJHtwcm9jZXNzLmVudi5QQVRIfS9pbWFnZXMvcHVycGxlLWxlZnQucG5nYDtcclxuLy8gICAgIGxldCBwdXJwbGVfcmlnaHQgPSBuZXcgSW1hZ2UoKTtcclxuLy8gICAgIHB1cnBsZV9yaWdodC5zcmMgPSBgJHtwcm9jZXNzLmVudi5QQVRIfS9pbWFnZXMvcHVycGxlLXJpZ2h0LnBuZ2A7XHJcbi8vICAgICBsZXQgcGlua19sZWZ0ID0gbmV3IEltYWdlKCk7XHJcbi8vICAgICBwaW5rX2xlZnQuc3JjID0gYCR7cHJvY2Vzcy5lbnYuUEFUSH0vaW1hZ2VzL3BpbmstbGVmdC5wbmdgO1xyXG4vLyAgICAgbGV0IHBpbmtfcmlnaHQgPSBuZXcgSW1hZ2UoKTtcclxuLy8gICAgIHBpbmtfcmlnaHQuc3JjID0gYCR7cHJvY2Vzcy5lbnYuUEFUSH0vaW1hZ2VzL3BpbmstcmlnaHQucG5nYDtcclxuXHJcbi8vICAgICBtYXNrQ29sb3IgPSB7XHJcbi8vICAgICAgIHdoaXRlOiBbd2hpdGVfbGVmdCwgd2hpdGVfcmlnaHRdLFxyXG4vLyAgICAgICBibGFjazogW2JsYWNrX2xlZnQsIGJsYWNrX3JpZ2h0XSxcclxuLy8gICAgICAgcGluazogW3BpbmtfbGVmdCwgcGlua19yaWdodF0sXHJcbi8vICAgICAgIHB1cnBsZTogW3B1cnBsZV9sZWZ0LCBwdXJwbGVfcmlnaHRdLFxyXG4vLyAgICAgICBiZWlnZTogW2JlaWdlX2xlZnQsIGJlaWdlX3JpZ2h0XSxcclxuLy8gICAgICAgbWludDogW21pbnRfbGVmdCwgbWludF9yaWdodF0sXHJcbi8vICAgICB9O1xyXG4vLyAgICAgbWFza0NvbG9yW3N0b3JlLmdldFN0YXRlKCkuQ29sb3JSZWR1Y2VyLm1haW5NYXNrQ29sb3JdWzFdLm9ubG9hZCA9ICgpID0+XHJcbi8vICAgICAgIG1haW4oKTtcclxuLy8gICB9IGVsc2UgaWYgKGZhY2VCb2FyZCA9PSAnc2NhbicpIHtcclxuLy8gICAgIHN0b3JlLmRpc3BhdGNoKGFjdGlvbkNyZWF0b3JzLnNldFNjYW5UcmlnZ2VyKHRydWUpKTtcclxuLy8gICAgIGxldCBiZWZvcmVQb3B1cCA9IHN0b3JlLmdldFN0YXRlKCkuQ29sb3JSZWR1Y2VyLnNjYW5UcmlnZ2VyO1xyXG4vLyAgICAgc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcclxuLy8gICAgICAgY29uc3QgYWZ0ZXJQb3B1cCA9IHN0b3JlLmdldFN0YXRlKCkuQ29sb3JSZWR1Y2VyLnNjYW5UcmlnZ2VyO1xyXG4vLyAgICAgICBpZiAoYmVmb3JlUG9wdXAgIT0gYWZ0ZXJQb3B1cCkge1xyXG4vLyAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4vLyAgICAgICAgICAgbWFpbigpO1xyXG4vLyAgICAgICAgIH0sIDEwMCk7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH0pO1xyXG4vLyAgIH0gZWxzZSBtYWluKCk7XHJcblxyXG4vLyAgIC8vIGlmIChyZW5kZXJQb2ludGNsb3VkKSB7XHJcbi8vICAgLy8gICBzdGF0ZS5yZW5kZXJQb2ludGNsb3VkID0gdHJ1ZTtcclxuLy8gICAvLyB9XHJcblxyXG4vLyAgIGFzeW5jIGZ1bmN0aW9uIHNldHVwQ2FtZXJhKCkge1xyXG4vLyAgICAgdmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlkZW8nKTtcclxuLy8gICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuLy8gICAgICAgdmlkZW8ub25sb2FkZWRtZXRhZGF0YSA9ICgpID0+IHtcclxuLy8gICAgICAgICByZXNvbHZlKHZpZGVvKTtcclxuLy8gICAgICAgfTtcclxuLy8gICAgIH0pO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgYXN5bmMgZnVuY3Rpb24gcmVuZGVyUHJlZGljdGlvbigpIHtcclxuLy8gICAgIG1vZGVsLnRoZW4oYXN5bmMgZGF0YSA9PiB7XHJcbi8vICAgICAgIGxldCBwcmVkaWN0aW9ucztcclxuLy8gICAgICAgdHJ5IHtcclxuLy8gICAgICAgICBwcmVkaWN0aW9ucyA9IGF3YWl0IGRhdGEuZXN0aW1hdGVGYWNlcyh7XHJcbi8vICAgICAgICAgICBpbnB1dDogdmlkZW8sXHJcbi8vICAgICAgICAgICByZXR1cm5UZW5zb3JzOiBmYWxzZSxcclxuLy8gICAgICAgICAgIGZsaXBIb3Jpem9udGFsOiBmYWxzZSxcclxuLy8gICAgICAgICAgIHByZWRpY3RJcmlzZXM6IHN0YXRlLnByZWRpY3RJcmlzZXMsXHJcbi8vICAgICAgICAgfSk7XHJcbi8vICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbi8vICAgICAgICAgICByZW5kZXJQcmVkaWN0aW9uKCk7XHJcbi8vICAgICAgICAgfSwgMzAwKTtcclxuLy8gICAgICAgICByZXR1cm47XHJcbi8vICAgICAgIH1cclxuXHJcbi8vICAgICAgIGF3YWl0IGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuLy8gICAgICAgYXdhaXQgY29udGV4dC5kcmF3SW1hZ2UodmlkZW8sIDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbi8vICAgICAgIGlmIChwcmVkaWN0aW9ucy5sZW5ndGggPiAwKSB7XHJcbi8vICAgICAgICAgTUxfTG9hZGluZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4vLyAgICAgICAgIGNvbnN0IGtleXBvaW50cyA9IHByZWRpY3Rpb25zWzBdLnNjYWxlZE1lc2g7XHJcbi8vICAgICAgICAgY29uc3QgYm94UG9zID0gcHJlZGljdGlvbnNbMF0uYm91bmRpbmdCb3g7XHJcbi8vICAgICAgICAgY29uc3QgcG9zaXRpb25zID0gYXdhaXQga2V5cG9pbnRzLm1hcChpID0+IHtcclxuLy8gICAgICAgICAgIC8vZmFjZW1lc2jripQg67mE65SU7Jik7J2YIGNsaWVudOyCrOydtOymiOqwgOyVhOuLjCB2aWRlb+yCrOydtOymiOulvCDquLDspIDsnLzroZwg7Y+s7KeA7IWY7J2EIOumrO2EtO2VnOuLpC5cclxuLy8gICAgICAgICAgIC8v6re4656Y7IScIOq4sOq4sOyXkCDrp57qsowg66ee7Law7KeEIOy6lOuyhOyKpOyXkOuKlCDrp57sp4Ag7JWK6riwIOuVjOusuOyXkCDtlbTri7kg67mE7Jyo66GcIOyghO2ZmO2VtOyjvOuKlCDsnpHsl4XsnYQg6rGw7LOQ7JW8IO2VnOuLpC5cclxuLy8gICAgICAgICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgICAgIHg6IGlbMF0gLyAodmlkZW8udmlkZW9XaWR0aCAvIHZpZGVvV2lkdGgpLFxyXG4vLyAgICAgICAgICAgICB5OiBpWzFdIC8gKHZpZGVvLnZpZGVvSGVpZ2h0IC8gdmlkZW9IZWlnaHQpLFxyXG4vLyAgICAgICAgICAgfTtcclxuLy8gICAgICAgICB9KTtcclxuXHJcbi8vICAgICAgICAgaWYgKGZhY2VCb2FyZCA9PSAnc2NhbicpIHtcclxuLy8gICAgICAgICAgIHRlc3RFeHBsYWluLmlubmVySFRNTCA9IGDtlLzrtoDsg4nsnYQg7LaU7LacIOykkSDsnoXri4jri6QuPGJyPiA8c3BhbiBzdHlsZT1cImNvbG9yIDogIzliODVkMDtcIj5UaXAgOiDstZzrjIDtlZwg67mb7J2YIOyYge2WpeydhCDrsJvsp4Ag7JWK64qUIOqzs+yXkOyEnCDsuKHsoJXtlbTrs7TshLjsmpQhPC9zcGFuPmA7XHJcbi8vICAgICAgICAgICBjbnQrKztcclxuLy8gICAgICAgICAgIGlmIChjbnQgPT0gNjEpIHtcclxuLy8gICAgICAgICAgICAgbG9hZGluZy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuLy8gICAgICAgICAgICAgY29sb3JTdW0uZXllID0gZXllQ29sb3IucmVkdWNlKChhLCBiKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgcmV0dXJuIFthWzBdICsgYlswXSwgYVsxXSArIGJbMV0sIGFbMl0gKyBiWzJdXTtcclxuLy8gICAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgICAgIGNvbG9yU3VtLmNoZWVrID0gY2hlZWtDb2xvci5yZWR1Y2UoKGEsIGIpID0+IHtcclxuLy8gICAgICAgICAgICAgICByZXR1cm4gW2FbMF0gKyBiWzBdLCBhWzFdICsgYlsxXSwgYVsyXSArIGJbMl1dO1xyXG4vLyAgICAgICAgICAgICB9KTtcclxuLy8gICAgICAgICAgICAgY29sb3JTdW0uamF3ID0gamF3Q29sb3IucmVkdWNlKChhLCBiKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgcmV0dXJuIFthWzBdICsgYlswXSwgYVsxXSArIGJbMV0sIGFbMl0gKyBiWzJdXTtcclxuLy8gICAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBjb2xvclN1bSkge1xyXG4vLyAgICAgICAgICAgICAgIGNvbG9yU3VtW2tleV0gPSBjb2xvclN1bVtrZXldLm1hcChpID0+IGkgLyA2MCk7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgdGhyb3R0bGVyLnRocm90dGxlKCgpID0+IHtcclxuLy8gICAgICAgICAgICAgICAvLyBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKClcclxuLy8gICAgICAgICAgICAgICAvLyBmb3JtLmFwcGVuZChcImZpbGVcIiwgY2FudmFzVG9JbWcoY2FtQ2FudmFzKSlcclxuLy8gICAgICAgICAgICAgICAvLyBheGlvcy5wb3N0KCcvc2VuZEltZycsIGZvcm0pXHJcbi8vICAgICAgICAgICAgICAgYXhpb3NcclxuLy8gICAgICAgICAgICAgICAgIC5wb3N0KCcvZ2V0U2Vhc29uJywgY29sb3JTdW0pXHJcbi8vICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgICBjb2xvckF2Zyhjb2xvclN1bSwgcmVzLmRhdGEpO1xyXG4vLyAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyZXMuZGF0YSkuY2xpY2soKTtcclxuLy8gICAgICAgICAgICAgICAgICAgY29uc3Qgc3RyZWFtID0gdmlkZW8uc3JjT2JqZWN0OyAvL+u5hOuUlOyYpCDsiqTtirjrprxcclxuLy8gICAgICAgICAgICAgICAgICAgY29uc3QgdHJhY2tzID0gc3RyZWFtLmdldFRyYWNrcygpOyAvL+2KuOuemVxyXG4vLyAgICAgICAgICAgICAgICAgICB0cmFja3NbMF0uc3RvcCgpOyAvL+yKpO2KuOumvCDspJHri6hcclxuLy8gICAgICAgICAgICAgICAgIH0pXHJcbi8vICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuLy8gICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuLy8gICAgICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgICAgICB9LCA1MDApO1xyXG4vLyAgICAgICAgICAgICByZXR1cm47XHJcbi8vICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICBpZiAoY250ID4gNjEgJiYgZmFjZUJvYXJkID09ICdzY2FuJykgcmV0dXJuO1xyXG5cclxuLy8gICAgICAgICAgIGF3YWl0IGN0eC5iZWdpblBhdGgoKTtcclxuLy8gICAgICAgICAgIC8vIGF3YWl0IGN0eC5tb3ZlVG8oYm94UG9zLnRvcExlZnRbMF0gLyAodmlkZW8udmlkZW9XaWR0aCAvIHZpZGVvV2lkdGgpLCAoYm94UG9zLnRvcExlZnRbMV0gLyAodmlkZW8udmlkZW9XaWR0aCAvIHZpZGVvV2lkdGgpKSAqIDIpXHJcbi8vICAgICAgICAgICAvLyBhd2FpdCBjdHgubGluZVRvKGJveFBvcy5ib3R0b21SaWdodFswXSAvICh2aWRlby52aWRlb1dpZHRoIC8gdmlkZW9XaWR0aCksIChib3hQb3MudG9wTGVmdFsxXSAvICh2aWRlby52aWRlb1dpZHRoIC8gdmlkZW9XaWR0aCkpICogMilcclxuLy8gICAgICAgICAgIC8vIGF3YWl0IGN0eC5saW5lVG8oYm94UG9zLmJvdHRvbVJpZ2h0WzBdIC8gKHZpZGVvLnZpZGVvV2lkdGggLyB2aWRlb1dpZHRoKSwgKGJveFBvcy5ib3R0b21SaWdodFsxXSAvICh2aWRlby52aWRlb1dpZHRoIC8gdmlkZW9XaWR0aCkpICogMS4zNSlcclxuLy8gICAgICAgICAgIC8vIGF3YWl0IGN0eC5saW5lVG8oYm94UG9zLnRvcExlZnRbMF0gLyAodmlkZW8udmlkZW9XaWR0aCAvIHZpZGVvV2lkdGgpLCAoYm94UG9zLmJvdHRvbVJpZ2h0WzFdIC8gKHZpZGVvLnZpZGVvV2lkdGggLyB2aWRlb1dpZHRoKSkgKiAxLjM1KVxyXG4vLyAgICAgICAgICAgYXdhaXQgY3R4Lm1vdmVUbyhcclxuLy8gICAgICAgICAgICAgcG9zaXRpb25zWzIzNF0ueCArIHBvc2l0aW9uc1syMzRdLnggKiAtMC4wNSxcclxuLy8gICAgICAgICAgICAgcG9zaXRpb25zWzEwXS55LFxyXG4vLyAgICAgICAgICAgKTtcclxuLy8gICAgICAgICAgIGF3YWl0IGN0eC5saW5lVG8oXHJcbi8vICAgICAgICAgICAgIHBvc2l0aW9uc1s0NTRdLnggKyBwb3NpdGlvbnNbNDU0XS54ICogMC4wNSxcclxuLy8gICAgICAgICAgICAgcG9zaXRpb25zWzEwXS55LFxyXG4vLyAgICAgICAgICAgKTtcclxuLy8gICAgICAgICAgIGF3YWl0IGN0eC5saW5lVG8oXHJcbi8vICAgICAgICAgICAgIHBvc2l0aW9uc1s0NTRdLnggKyBwb3NpdGlvbnNbNDU0XS54ICogMC4wNSxcclxuLy8gICAgICAgICAgICAgcG9zaXRpb25zWzE1Ml0ueSxcclxuLy8gICAgICAgICAgICk7XHJcbi8vICAgICAgICAgICBhd2FpdCBjdHgubGluZVRvKFxyXG4vLyAgICAgICAgICAgICBwb3NpdGlvbnNbMjM0XS54ICsgcG9zaXRpb25zWzIzNF0ueCAqIC0wLjA1LFxyXG4vLyAgICAgICAgICAgICBwb3NpdGlvbnNbMTUyXS55LFxyXG4vLyAgICAgICAgICAgKTtcclxuLy8gICAgICAgICAgIGF3YWl0IGN0eC5jbG9zZVBhdGgoKTtcclxuLy8gICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAzO1xyXG4vLyAgICAgICAgICAgYXdhaXQgY3R4LnN0cm9rZSgpO1xyXG5cclxuLy8gICAgICAgICAgIGNvbnN0IGV5ZUxlbmd0aCA9IE1hdGguYWJzKHBvc2l0aW9uc1s0XS55IC0gcG9zaXRpb25zWzFdLnkpO1xyXG4vLyAgICAgICAgICAgY29uc3QgcmlnaHRDaGVlayA9IHBvc2l0aW9uc1s0MjVdO1xyXG4vLyAgICAgICAgICAgY29uc3QgbGVmdENoZWVrID0ge1xyXG4vLyAgICAgICAgICAgICB4OiBwb3NpdGlvbnNbMjA1XS54IC0gZXllTGVuZ3RoLFxyXG4vLyAgICAgICAgICAgICB5OiBwb3NpdGlvbnNbMjA1XS55LFxyXG4vLyAgICAgICAgICAgfTtcclxuLy8gICAgICAgICAgIGNvbnN0IGxlZnRVbmRlckV5ZSA9IHBvc2l0aW9uc1sxMTBdO1xyXG5cclxuLy8gICAgICAgICAgIGNvbnN0IHJpZ2h0VW5kZXJFeWUgPSBwb3NpdGlvbnNbMjUyXTtcclxuXHJcbi8vICAgICAgICAgICBjb25zdCBqYXcgPSBwb3NpdGlvbnNbMjAxXTtcclxuXHJcbi8vICAgICAgICAgICAvLyBhd2FpdCBjdHguZmlsbFJlY3QobGVmdENoZWVrLngsbGVmdENoZWVrLnksLWV5ZUxlbmd0aCwgZXllTGVuZ3RoLzIpXHJcbi8vICAgICAgICAgICAvLyBhd2FpdCBjdHguZmlsbFJlY3QocmlnaHRDaGVlay54LHJpZ2h0Q2hlZWsueSxleWVMZW5ndGgsIGV5ZUxlbmd0aC8yKVxyXG4vLyAgICAgICAgICAgLy8gYXdhaXQgY3R4LmZpbGxSZWN0KGxlZnRVbmRlckV5ZS54LGxlZnRVbmRlckV5ZS55LGV5ZUxlbmd0aCwgZXllTGVuZ3RoLzIpXHJcbi8vICAgICAgICAgICAvLyBhd2FpdCBjdHguZmlsbFJlY3QocmlnaHRVbmRlckV5ZS54LHJpZ2h0VW5kZXJFeWUueSxleWVMZW5ndGgsIGV5ZUxlbmd0aC8yKVxyXG4vLyAgICAgICAgICAgLy8gYXdhaXQgY3R4LmZpbGxSZWN0KGphdy54LGphdy55LGV5ZUxlbmd0aCwgZXllTGVuZ3RoLzIpXHJcblxyXG4vLyAgICAgICAgICAgbGV0IGxlZnRFeWVTdW0gPSBuZXcgZ2V0Q29sb3JEYXRhKGxlZnRVbmRlckV5ZSwgZXllTGVuZ3RoLCBjb250ZXh0KTtcclxuLy8gICAgICAgICAgIGxldCByaWdodEV5ZVN1bSA9IG5ldyBnZXRDb2xvckRhdGEocmlnaHRVbmRlckV5ZSwgZXllTGVuZ3RoLCBjb250ZXh0KTtcclxuXHJcbi8vICAgICAgICAgICBsZXQgbGVmdENoZWVrU3VtID0gbmV3IGdldENvbG9yRGF0YShsZWZ0Q2hlZWssIGV5ZUxlbmd0aCwgY29udGV4dCk7XHJcbi8vICAgICAgICAgICBsZXQgcmlnaHRDaGVla1N1bSA9IG5ldyBnZXRDb2xvckRhdGEocmlnaHRDaGVlaywgZXllTGVuZ3RoLCBjb250ZXh0KTtcclxuLy8gICAgICAgICAgIGxldCBqYXdTdW0gPSBuZXcgZ2V0Q29sb3JEYXRhKGphdywgZXllTGVuZ3RoLCBjb250ZXh0KTtcclxuXHJcbi8vICAgICAgICAgICBsZXQgZXllUmVzdWx0ID0gYXdhaXQgbGVmdEV5ZVN1bS5tYXAoKGksIGlkeCkgPT4ge1xyXG4vLyAgICAgICAgICAgICByZXR1cm4gKGkgKyByaWdodEV5ZVN1bVtpZHhdKSAvIDI7XHJcbi8vICAgICAgICAgICB9KTtcclxuXHJcbi8vICAgICAgICAgICBsZXQgY2hlZWtSZXN1bHQgPSBhd2FpdCBsZWZ0Q2hlZWtTdW0ubWFwKChpLCBpZHgpID0+IHtcclxuLy8gICAgICAgICAgICAgcmV0dXJuIChpICsgcmlnaHRDaGVla1N1bVtpZHhdKSAvIDI7XHJcbi8vICAgICAgICAgICB9KTtcclxuLy8gICAgICAgICAgIGV5ZUNvbG9yLnB1c2goZXllUmVzdWx0KTtcclxuLy8gICAgICAgICAgIGNoZWVrQ29sb3IucHVzaChjaGVla1Jlc3VsdCk7XHJcbi8vICAgICAgICAgICBqYXdDb2xvci5wdXNoKGphd1N1bSk7XHJcblxyXG4vLyAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtcclxuLy8gICAgICAgICAgICAgKGV5ZVJlc3VsdFswXSArIGNoZWVrUmVzdWx0WzBdICsgamF3U3VtWzBdKSAvIDNcclxuLy8gICAgICAgICAgIH0sJHsoZXllUmVzdWx0WzFdICsgY2hlZWtSZXN1bHRbMV0gKyBqYXdTdW1bMV0pIC8gM30sJHtcclxuLy8gICAgICAgICAgICAgKGV5ZVJlc3VsdFsyXSArIGNoZWVrUmVzdWx0WzJdICsgamF3U3VtWzJdKSAvIDNcclxuLy8gICAgICAgICAgIH0pYDtcclxuXHJcbi8vICAgICAgICAgICBjb25zdCByZ2JCb3ggPSAoY2FudmFzLmhlaWdodCArIGNhbnZhcy53aWR0aCkgLyAyIC8gNDtcclxuLy8gICAgICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCByZ2JCb3gsIHJnYkJveCk7XHJcblxyXG4vLyAgICAgICAgICAgaWYgKGNudCA8IDYxKSB7XHJcbi8vICAgICAgICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZ3Jlc3NCYXJcIikuc3R5bGUud2lkdGggPSBjbnQqMiArIFwiJVwiXHJcbi8vICAgICAgICAgICAgIC8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2dyZXNzcGVyY2VudFwiKS5pbm5lclRleHQgPSBjbnQqMiArIFwiJVwiXHJcbi8vICAgICAgICAgICAgIHByb2dyZXNzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWZsZXgnO1xyXG4vLyAgICAgICAgICAgICBmb3IgKGxldCBpID0gMzsgaSA+PSAwOyBpLS0pIHtcclxuLy8gICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gY250ICogMS42NTtcclxuLy8gICAgICAgICAgICAgICBsZXQgcHJvZ3Jlc3NVbml0ID0gcmVzdWx0LnRvRml4ZWQoMSkgLSBpO1xyXG4vLyAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gcHJvZ3Jlc3NVbml0ICsgJyUnO1xyXG4vLyAgICAgICAgICAgICAgIHBlcmNlbnQuaW5uZXJUZXh0ID0gcHJvZ3Jlc3NVbml0ICsgJyUnO1xyXG4vLyAgICAgICAgICAgICAgIGlmIChjbnQgPT09IDYwKSB7XHJcbi8vICAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9ICcxMDAlJztcclxuLy8gICAgICAgICAgICAgICAgIHBlcmNlbnQuaW5uZXJUZXh0ID0gJzEwMCUnO1xyXG4vLyAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH0gZWxzZSBpZiAoZmFjZUJvYXJkID09ICdmYWNlYm9hcmQnKSB7XHJcbi8vICAgICAgICAgICB0ZXN0RXhwbGFpbi5pbm5lclRleHQgPVxyXG4vLyAgICAgICAgICAgICAn6rCA7J6lIOyWvOq1tOydtCDtmZTsgqztlbTsp4DripQg7ZWE7YSw66W8IO2ZleyduCDtm4Qg6rKw6rO8IO2ZleyduCDrsoTtirzsnYQg64iM65+s7KO87IS47JqUJztcclxuLy8gICAgICAgICAgIGxldCBjb2xvclJnYiA9IHN0b3JlLmdldFN0YXRlKCkuQ29sb3JSZWR1Y2VyLm1haW5GYWNlQm9hcmRDb2xvcjtcclxuLy8gICAgICAgICAgIG5ldyBGYWNlQm9hcmQocG9zaXRpb25zLCBjb2xvclJnYiwgY2FudmFzKTtcclxuLy8gICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgdGVzdEV4cGxhaW4uaW5uZXJUZXh0ID1cclxuLy8gICAgICAgICAgICAgJ+2VmOuLqOydmCDrp4jsiqTtgazrpbwg7ISg7YOd7ZWY7JesIO2VhO2EsOulvCDsoIHsmqntlbTrs7TshLjsmpQnO1xyXG4vLyAgICAgICAgICAgbGV0IG1haW5Db2xvciA9XHJcbi8vICAgICAgICAgICAgIG1hc2tDb2xvcltzdG9yZS5nZXRTdGF0ZSgpLkNvbG9yUmVkdWNlci5tYWluTWFza0NvbG9yXTtcclxuLy8gICAgICAgICAgIGxldCBsZWZ0TWFzayA9IG1haW5Db2xvclswXTtcclxuLy8gICAgICAgICAgIGxldCByaWdodE1hc2sgPSBtYWluQ29sb3JbMV07XHJcbi8vICAgICAgICAgICBuZXcgTWFza0RyYXcoXHJcbi8vICAgICAgICAgICAgIGNhbnZhcyxcclxuLy8gICAgICAgICAgICAgbGVmdE1hc2ssXHJcbi8vICAgICAgICAgICAgIHJpZ2h0TWFzayxcclxuLy8gICAgICAgICAgICAgcG9zaXRpb25zLFxyXG4vLyAgICAgICAgICAgICB0eXBlQXJyWzBdLFxyXG4vLyAgICAgICAgICAgICB0eXBlQXJyWzFdLFxyXG4vLyAgICAgICAgICAgICB0eXBlQXJyWzJdLFxyXG4vLyAgICAgICAgICAgKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgIH0gZWxzZVxyXG4vLyAgICAgICAgIHRlc3RFeHBsYWluLmlubmVySFRNTCA9IGDslrzqtbTsnYQg7J247Iud7ZWgIOyImCDsnojrj4TroZ0g7Lm066mU652866W8IOuwlOudvOu0kOyjvOyEuOyalC48YnI+IDxzcGFuIHN0eWxlPVwiY29sb3IgOiAjOWI4NWQwO1wiPlRpcCA6IOy1nOuMgO2VnCDruZvsnZgg7JiB7Zal7J2EIOuwm+yngCDslYrripQg6rOz7JeQ7IScIOy4oeygle2VtOuztOyEuOyalCE8L3NwYW4+YDtcclxuXHJcbi8vICAgICAgIHJhZklEID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlclByZWRpY3Rpb24pO1xyXG4vLyAgICAgfSk7XHJcblxyXG4vLyAgICAgLy8gICBzdGF0cy5lbmQoKTtcclxuLy8gICB9XHJcblxyXG4vLyAgIGFzeW5jIGZ1bmN0aW9uIG1haW4oKSB7XHJcbi8vICAgICBpZiAoZmFjZUJvYXJkICE9ICdtYXNrJykge1xyXG4vLyAgICAgICBoZWFkZXJXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbi8vICAgICAgIGhlYWRlcldyYXBwZXIuc3R5bGUub3BhY2l0eSA9IDA7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgYXdhaXQgdGYuc2V0QmFja2VuZChzdGF0ZS5iYWNrZW5kKTtcclxuLy8gICAgIC8vICAgc3RhdHMuc2hvd1BhbmVsKDApOyAgLy8gMDogZnBzLCAxOiBtcywgMjogbWIsIDMrOiBjdXN0b21cclxuLy8gICAgIC8vICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdGF0cy5kb20pO1xyXG5cclxuLy8gICAgIHRlc3RXcmFwcGVyLnN0eWxlLm9wYWNpdHkgPSAxO1xyXG5cclxuLy8gICAgIHZpZGVvLnBsYXkoKTtcclxuLy8gICAgIHZpZGVvLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4vLyAgICAgY2FudmFzLmNsYXNzTmFtZSA9ICdmYWNlQ2FudmFzJztcclxuLy8gICAgIHZpZGVvV2lkdGggPSB2aWRlby5jbGllbnRXaWR0aDtcclxuLy8gICAgIGNhbnZhcy53aWR0aCA9IHZpZGVvV2lkdGg7XHJcbi8vICAgICBjYW52YXMuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4vLyAgICAgY2FudmFzLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgtMSwxKSc7XHJcbi8vICAgICBjYW52YXMuc3R5bGUuekluZGV4ID0gJyA5OTgnO1xyXG4vLyAgICAgY2FudmFzLnN0eWxlLmxlZnQgPSAnMCc7XHJcbi8vICAgICBjYW1DYW52YXMuY2xhc3NOYW1lID0gJ2ZhY2VDYW52YXMnO1xyXG4vLyAgICAgY2FtQ2FudmFzLmlkID0gJ2NhbUNhbnZhcyc7XHJcbi8vICAgICBjYW1DYW52YXMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbi8vICAgICBjYW1DYW52YXMud2lkdGggPSB2aWRlb1dpZHRoO1xyXG4vLyAgICAgaWYgKHR5cGVBcnJbMl0pIHtcclxuLy8gICAgICAgdmlkZW9IZWlnaHQgPSAzMzg7XHJcbi8vICAgICAgIGNhbnZhcy5oZWlnaHQgPSAzMzg7XHJcbi8vICAgICAgIGNhbUNhbnZhcy5oZWlnaHQgPSAzMzg7XHJcbi8vICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICB2aWRlb0hlaWdodCA9IHZpZGVvLmNsaWVudEhlaWdodDtcclxuLy8gICAgICAgY2FudmFzLmhlaWdodCA9IHZpZGVvLmNsaWVudEhlaWdodDtcclxuLy8gICAgICAgY2FtQ2FudmFzLmhlaWdodCA9IHZpZGVvLmNsaWVudEhlaWdodDtcclxuLy8gICAgIH1cclxuLy8gICAgIGNhbUNhbnZhcy5zdHlsZS56SW5kZXggPSAnOTk4JztcclxuLy8gICAgIGNhbUNhbnZhcy5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoLTEsMSknO1xyXG5cclxuLy8gICAgIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4vLyAgICAgY3R4LmZpbGxTdHlsZSA9IEdSRUVOO1xyXG4vLyAgICAgY3R4LnN0cm9rZVN0eWxlID0gR1JFRU47XHJcbi8vICAgICBjdHgubGluZVdpZHRoID0gMC41O1xyXG4vLyAgICAgdGVzdFdyYXBwZXIuaW5zZXJ0QmVmb3JlKGNhbUNhbnZhcywgdGVzdFdyYXBwZXIuZmlyc3RDaGlsZCk7XHJcbi8vICAgICB0ZXN0V3JhcHBlci5pbnNlcnRCZWZvcmUoY2FudmFzLCB0ZXN0V3JhcHBlci5maXJzdENoaWxkKTtcclxuLy8gICAgIC8vIG1vZGVsID0gYXdhaXQgZmFjZUxhbmRtYXJrc0RldGVjdGlvbi5sb2FkKFxyXG4vLyAgICAgLy8gICAgIGZhY2VMYW5kbWFya3NEZXRlY3Rpb24uU3VwcG9ydGVkUGFja2FnZXMubWVkaWFwaXBlRmFjZW1lc2gsXHJcbi8vICAgICAvLyAgICAgeyBtYXhGYWNlczogc3RhdGUubWF4RmFjZXMgfSk7XHJcbi8vICAgICByZW5kZXJQcmVkaWN0aW9uKCk7XHJcbi8vICAgICAvLyAgIGFuaSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShtYWluKTtcclxuLy8gICB9XHJcbi8vICAgLy8gbGV0IGFuaSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShtYWluKTtcclxuLy8gfVxyXG4vLyBpbXBvcnQgeyB0aHJvdHRsaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMvdGhyb3R0bGluZyc7XHJcbi8vIGltcG9ydCBGYWNlQm9hcmQgZnJvbSAnLi9GYWNlQm9hcmQnO1xyXG5pbXBvcnQgTWFza0RyYXcgZnJvbSAnLi9NYXNrRHJhdyc7XHJcbmltcG9ydCBzdG9yZSBmcm9tICcuLi8uLi9zdG9yZSc7XHJcbmltcG9ydCB7IGFjdGlvbkNyZWF0b3JzIH0gZnJvbSAnLi4vLi4vc3RvcmUvY29sb3JTdG9yZSc7XHJcbmltcG9ydCAnQHRlbnNvcmZsb3cvdGZqcy1iYWNrZW5kLXdlYmdsJztcclxuLy8gaW1wb3J0IEltYWdlVXBsb2FkIGZyb20gJy4vSW1hZ2VVcGxvYWQnO1xyXG5pbXBvcnQgKiBhcyBmYWNlTGFuZG1hcmtzRGV0ZWN0aW9uIGZyb20gJ0B0ZW5zb3JmbG93LW1vZGVscy9mYWNlLWxhbmRtYXJrcy1kZXRlY3Rpb24nO1xyXG5pbXBvcnQgZ2V0RGV2aWNlVHlwZSBmcm9tICcuL2dldERldmljZVR5cGUnO1xyXG4vLyBpbXBvcnQgY2FudmFzVG9JbWcgZnJvbSAnLi9jYW52YXNUb0ltZyc7XHJcbi8vIGltcG9ydCBnZXRGYWNlSW1hZ2VEYXRhIGZyb20gJy4vZ2V0RmFjZUltYWdlRGF0YSc7XHJcbmltcG9ydCB7IGRyYXdGYWNlTGluZSB9IGZyb20gJy4vZHJhd0ZhY2VMaW5lJztcclxuaW1wb3J0IGRyYXdGYWNlQkcgZnJvbSAnLi9kcmF3RmFjZUJHJztcclxuaW1wb3J0ICogYXMgdGYgZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlJztcclxuLy8gaW1wb3J0IHsgVFJJQU5HVUxBVElPTiB9IGZyb20gJy4vdHJpYW5ndWxhdGlvbnMnO1xyXG5cclxuaW50ZXJmYWNlIGNvbG9yVHlwZSB7XHJcbiAgW2tleTogc3RyaW5nXTogSFRNTEltYWdlRWxlbWVudFtdOyAvL+2DgOyeheyKpO2BrOumve2KuOydmCBpbmRleCBzaWduYXR1cmXrsKnsi51cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gU3RyZWFtQ2FudmFzKGZhY2VCb2FyZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgdGYuc2V0QmFja2VuZCgnd2ViZ2wnKTtcclxuICBsZXQgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgbGV0IHZpZGVvV2lkdGg6IG51bWJlcjtcclxuICBsZXQgdmlkZW9IZWlnaHQ6IG51bWJlcjtcclxuICBjb25zdCB2aWRlbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWRlbycpIGFzIEhUTUxWaWRlb0VsZW1lbnQ7XHJcbiAgY29uc3Qgc3RyZWFtID0gdmlkZW8hLnNyY09iamVjdCBhcyBNZWRpYVN0cmVhbTsgLy/ruYTrlJTsmKQg7Iqk7Yq466a8XHJcbiAgY29uc3QgdHJhY2tzID0gc3RyZWFtIS5nZXRUcmFja3MoKTsgLy/tirjrnplcclxuICAvLyBjb25zdCBiZ1Bvc0FyciA9IFtcclxuICAvLyAgIDExNywgMzQ2LCAxOTUsIDIzNCwgNDU0LCAxMDksIDMzOCwgMzMyLCAyNTEsIDM4OSwgMzU2LCAzMjMsIDI4OCwgMzY1LCA0MDAsXHJcbiAgLy8gICAxNzYsIDEzNiwgNTgsIDkzLCAxMjcsIDE2MiwgMjEsIDEwMywgNjcsIDEwLCAyOTcsIDI4NCwgMzYxLCAzNzgsIDM3OSwgMTUyLFxyXG4gIC8vICAgMTUwLCAxNDksIDE3MiwgMTMyLFxyXG4gIC8vIF07XHJcbiAgbGV0IGZhY2VEb3REcmF3OiBkcmF3RmFjZUxpbmU7XHJcbiAgbGV0IGZhY2VCZ0RyYXc6IGRyYXdGYWNlQkc7XHJcbiAgbGV0IG1hc2tDb2xvcjogY29sb3JUeXBlO1xyXG4gIGxldCBtb2RlbDogZmFjZUxhbmRtYXJrc0RldGVjdGlvbi5GYWNlTGFuZG1hcmtzUGFja2FnZTtcclxuICAvLyBpZiAoXHJcbiAgLy8gICB2aWRlbyAmJlxyXG4gIC8vICAgdmlkZW8ucHJldmlvdXNTaWJsaW5nICYmXHJcbiAgLy8gICB2aWRlby5wcmV2aW91c1NpYmxpbmcubm9kZU5hbWUgPT0gJ0NBTlZBUydcclxuICAvLyApXHJcbiAgLy8gICByZXR1cm47XHJcbiAgLy8gY29uc3QgbG9hZGluZyA9IGRvY3VtZW50LmdldEUgbGVtZW50QnlJZCgnbG9hZGluZycpO1xyXG4gIGNvbnN0IE1MX0xvYWRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTUxfTG9hZGluZycpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIE1MX0xvYWRpbmcuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG4gIC8vIHN0b3JlLmRpc3BhdGNoKGFjdGlvbkNyZWF0b3JzLnNldEFuaVN0b3AoZmFsc2UpKTtcclxuICAvLyBjb25zdCBzdGF0ZSA9IHtcclxuICAvLyAgIGJhY2tlbmQ6ICd3ZWJnbCcsXHJcbiAgLy8gICBtYXhGYWNlczogMSxcclxuICAvLyAgIHRyaWFuZ3VsYXRlTWVzaDogdHJ1ZSxcclxuICAvLyAgIHByZWRpY3RJcmlzZXM6IGZhbHNlLFxyXG4gIC8vIH07XHJcblxyXG4gIC8vIGNvbnN0IE5VTV9LRVlQT0lOVFMgPSA0Njg7XHJcbiAgLy8gY29uc3QgTlVNX0lSSVNfS0VZUE9JTlRTID0gNTtcclxuICAvLyBjb25zdCBSRUQgPSAnI0ZGMkMzNSc7XHJcbiAgLy8gY29uc3QgQkxVRSA9ICcjMTU3QUIzJztcclxuICBjb25zdCBwcm9ncmVzc0JhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9ncmVzc0JhcicpIGFzIEhUTUxFbGVtZW50O1xyXG4gIGNvbnN0IHBlcmNlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZ3Jlc3NQZXJjZW50JykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgY29uc3QgcHJvZ3Jlc3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICdwcm9ncmVzc0NvbnRhaW5lcicsXHJcbiAgKSBhcyBIVE1MRWxlbWVudDtcclxuICBjb25zdCBHUkVFTiA9ICcjMzJFRURCJztcclxuICBjb25zdCB0ZXN0V3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXN0V3JhcHBlcicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIGNvbnN0IGhlYWRlcldyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICdoZWFkZXJXcmFwcGVyJyxcclxuICApIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICAvLyBjb25zdCB0aHJvdHRsZXIgPSB0aHJvdHRsaW5nKCk7XHJcbiAgY29uc3QgdGVzdEV4cGxhaW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVzdEV4cGxhaW4nKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJhd2luZ0NhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIC8vIGNvbnN0IGNvbG9yU3VtID0ge307XHJcbiAgLy8gY29uc3QgZXllQ29sb3IgPSBbXTtcclxuICAvLyBjb25zdCBjaGVla0NvbG9yID0gW107XHJcbiAgLy8gY29uc3QgamF3Q29sb3IgPSBbXTtcclxuICBsZXQgYW5pSWQ6IG51bWJlcjtcclxuICBsZXQgcHJvZ3Jlc3NDbnQgPSAwO1xyXG4gIGxldCBpc0RldGVjdGVkID0gZmFsc2U7XHJcbiAgY29uc3QgdHlwZUFyciA9IGdldERldmljZVR5cGUoKTtcclxuICBjb25zdCBpY29uID0gbmV3IEltYWdlKCk7XHJcbiAgaWNvbi5zcmMgPSBgJHtwcm9jZXNzLmVudi5QQVRIfS9pbWFnZXMvYmVmb3JlQ2FudmFzVGl0bGUucG5nYDtcclxuICBjb25zdCBpY29uMiA9IG5ldyBJbWFnZSgpO1xyXG4gIGljb24yLnNyYyA9IGAke3Byb2Nlc3MuZW52LlBBVEh9L2ltYWdlcy9hZnRlckNhbnZhc1RpdGxlLnBuZ2A7XHJcbiAgaWYgKGZhY2VCb2FyZCA9PSAnbWFzaycpIHtcclxuICAgIGNvbnN0IGJlaWdlX2xlZnQgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGJlaWdlX2xlZnQuc3JjID0gYCR7cHJvY2Vzcy5lbnYuUEFUSH0vaW1hZ2VzL2JlaWdlLWxlZnQucG5nYDtcclxuICAgIGNvbnN0IGJlaWdlX3JpZ2h0ID0gbmV3IEltYWdlKCk7XHJcbiAgICBiZWlnZV9yaWdodC5zcmMgPSBgJHtwcm9jZXNzLmVudi5QQVRIfS9pbWFnZXMvYmVpZ2UtcmlnaHQucG5nYDtcclxuICAgIGNvbnN0IG1pbnRfbGVmdCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgbWludF9sZWZ0LnNyYyA9IGAke3Byb2Nlc3MuZW52LlBBVEh9L2ltYWdlcy9taW50LWxlZnQucG5nYDtcclxuICAgIGNvbnN0IG1pbnRfcmlnaHQgPSBuZXcgSW1hZ2UoKTtcclxuICAgIG1pbnRfcmlnaHQuc3JjID0gYCR7cHJvY2Vzcy5lbnYuUEFUSH0vaW1hZ2VzL21pbnQtcmlnaHQucG5nYDtcclxuICAgIGNvbnN0IGJsYWNrX2xlZnQgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGJsYWNrX2xlZnQuc3JjID0gYCR7cHJvY2Vzcy5lbnYuUEFUSH0vaW1hZ2VzL2JsYWNrLWxlZnQucG5nYDtcclxuICAgIGNvbnN0IGJsYWNrX3JpZ2h0ID0gbmV3IEltYWdlKCk7XHJcbiAgICBibGFja19yaWdodC5zcmMgPSBgJHtwcm9jZXNzLmVudi5QQVRIfS9pbWFnZXMvYmxhY2stcmlnaHQucG5nYDtcclxuICAgIGNvbnN0IHdoaXRlX2xlZnQgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHdoaXRlX2xlZnQuc3JjID0gYCR7cHJvY2Vzcy5lbnYuUEFUSH0vaW1hZ2VzL3doaXRlLWxlZnQucG5nYDtcclxuICAgIGNvbnN0IHdoaXRlX3JpZ2h0ID0gbmV3IEltYWdlKCk7XHJcbiAgICB3aGl0ZV9yaWdodC5zcmMgPSBgJHtwcm9jZXNzLmVudi5QQVRIfS9pbWFnZXMvd2hpdGUtcmlnaHQucG5nYDtcclxuICAgIGNvbnN0IHB1cnBsZV9sZWZ0ID0gbmV3IEltYWdlKCk7XHJcbiAgICBwdXJwbGVfbGVmdC5zcmMgPSBgJHtwcm9jZXNzLmVudi5QQVRIfS9pbWFnZXMvcHVycGxlLWxlZnQucG5nYDtcclxuICAgIGNvbnN0IHB1cnBsZV9yaWdodCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgcHVycGxlX3JpZ2h0LnNyYyA9IGAke3Byb2Nlc3MuZW52LlBBVEh9L2ltYWdlcy9wdXJwbGUtcmlnaHQucG5nYDtcclxuICAgIGNvbnN0IHBpbmtfbGVmdCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgcGlua19sZWZ0LnNyYyA9IGAke3Byb2Nlc3MuZW52LlBBVEh9L2ltYWdlcy9waW5rLWxlZnQucG5nYDtcclxuICAgIGNvbnN0IHBpbmtfcmlnaHQgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHBpbmtfcmlnaHQuc3JjID0gYCR7cHJvY2Vzcy5lbnYuUEFUSH0vaW1hZ2VzL3BpbmstcmlnaHQucG5nYDtcclxuXHJcbiAgICBtYXNrQ29sb3IgPSB7XHJcbiAgICAgIHdoaXRlOiBbd2hpdGVfbGVmdCwgd2hpdGVfcmlnaHRdLFxyXG4gICAgICBibGFjazogW2JsYWNrX2xlZnQsIGJsYWNrX3JpZ2h0XSxcclxuICAgICAgcGluazogW3BpbmtfbGVmdCwgcGlua19yaWdodF0sXHJcbiAgICAgIHB1cnBsZTogW3B1cnBsZV9sZWZ0LCBwdXJwbGVfcmlnaHRdLFxyXG4gICAgICBiZWlnZTogW2JlaWdlX2xlZnQsIGJlaWdlX3JpZ2h0XSxcclxuICAgICAgbWludDogW21pbnRfbGVmdCwgbWludF9yaWdodF0sXHJcbiAgICB9O1xyXG5cclxuICAgIG1hc2tDb2xvcltzdG9yZS5nZXRTdGF0ZSgpLkNvbG9yUmVkdWNlci5tYWluTWFza0NvbG9yIV1bMV0ub25sb2FkID0gKCkgPT5cclxuICAgICAgbWFpbigpO1xyXG4gIH0gZWxzZSBpZiAoZmFjZUJvYXJkID09ICdmYWNlYm9hcmQnKSB7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdjb2xvclNlbGVjdCcsICcwJyk7XHJcbiAgICBzdG9yZS5kaXNwYXRjaChhY3Rpb25DcmVhdG9ycy5zZXRTY2FuU3RhcnQodHJ1ZSkpO1xyXG4gICAgbWFpbigpO1xyXG4gIH0gZWxzZSBtYWluKCk7XHJcblxyXG4gIC8vIGlmIChyZW5kZXJQb2ludGNsb3VkKSB7XHJcbiAgLy8gICBzdGF0ZS5yZW5kZXJQb2ludGNsb3VkID0gdHJ1ZTtcclxuICAvLyB9XHJcblxyXG4gIC8vIGFzeW5jIGZ1bmN0aW9uIHNldHVwQ2FtZXJhKCk6IFByb21pc2U8SFRNTFZpZGVvRWxlbWVudD4ge1xyXG4gIC8vICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gIC8vICAgICB2aWRlby5vbmxvYWRlZG1ldGFkYXRhID0gKCkgPT4ge1xyXG4gIC8vICAgICAgIHJlc29sdmUodmlkZW8pO1xyXG4gIC8vICAgICB9O1xyXG4gIC8vICAgfSk7XHJcbiAgLy8gfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiByZW5kZXJQcmVkaWN0aW9uKCkge1xyXG4gICAgY29uc3Qgc3JjT2JqOiBhbnkgPSB2aWRlbyEuc3JjT2JqZWN0O1xyXG4gICAgaWYgKCFzcmNPYmouYWN0aXZlKSB7XHJcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaUlkKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IHByZWRpY3Rpb25zOiBhbnk7XHJcbiAgICB0cnkge1xyXG4gICAgICBwcmVkaWN0aW9ucyA9IGF3YWl0IG1vZGVsLmVzdGltYXRlRmFjZXMoe1xyXG4gICAgICAgIGlucHV0OiB2aWRlbyxcclxuICAgICAgICByZXR1cm5UZW5zb3JzOiBmYWxzZSxcclxuICAgICAgICBmbGlwSG9yaXpvbnRhbDogZmFsc2UsXHJcbiAgICAgICAgcHJlZGljdElyaXNlczogZmFsc2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgcmVuZGVyUHJlZGljdGlvbigpO1xyXG4gICAgICB9LCAzMDApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICAvLyBhd2FpdCBjb250ZXh0LmRyYXdJbWFnZSh2aWRlbywgMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxyXG4gICAgaWYgKGlzRGV0ZWN0ZWQpIHByb2dyZXNzKCk7XHJcbiAgICBlbHNlIE1MX0xvYWRpbmcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGlmIChwcmVkaWN0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IGtleXBvaW50cyA9IHByZWRpY3Rpb25zWzBdLnNjYWxlZE1lc2g7XHJcbiAgICAgIC8vIGNvbnN0IGJveFBvcyA9IHByZWRpY3Rpb25zWzBdLmJvdW5kaW5nQm94O1xyXG4gICAgICBjb25zdCB2aWRlb1dpZHRoQ2FsYyA9IHZpZGVvLnZpZGVvV2lkdGggLyB2aWRlb1dpZHRoO1xyXG4gICAgICBjb25zdCB2aWRlb0hlaWdodENhbGMgPSB2aWRlby52aWRlb0hlaWdodCAvIHZpZGVvSGVpZ2h0O1xyXG5cclxuICAgICAgLy8gcG9zaXRpb25zLmZvckVhY2goKGksaWR4KT0+e1xyXG4gICAgICAvLyAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiKDAsMCwyNTUpXCJcclxuICAgICAgLy8gICAgIGN0eC5maWxsUmVjdChpLngsaS55LDEsMSlcclxuICAgICAgLy8gfSlcclxuICAgICAgY29uc3QgcG9zaXRpb25zID0ga2V5cG9pbnRzLm1hcCgoaTogbnVtYmVyW10pID0+IHtcclxuICAgICAgICAvL2ZhY2VtZXNo64qUIOu5hOuUlOyYpOydmCBjbGllbnTsgqzsnbTspojqsIDslYTri4wgdmlkZW/sgqzsnbTspojrpbwg6riw7KSA7Jy866GcIO2PrOyngOyFmOydhCDrpqzthLTtlZzri6QuXHJcbiAgICAgICAgLy/qt7jrnpjshJwg6riw6riw7JeQIOunnuqyjCDrp57strDsp4Qg7LqU67KE7Iqk7JeQ64qUIOunnuyngCDslYrquLAg65WM66y47JeQIO2VtOuLuSDruYTsnKjroZwg7KCE7ZmY7ZW07KO864qUIOyekeyXheydhCDqsbDss5Dslbwg7ZWc64ukLlxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB4OiBpWzBdIC8gdmlkZW9XaWR0aENhbGMsXHJcbiAgICAgICAgICB5OiBpWzFdIC8gdmlkZW9IZWlnaHRDYWxjLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoZmFjZUJvYXJkID09ICdzY2FuJykge1xyXG4gICAgICAgIGlmICghaXNEZXRlY3RlZCkge1xyXG4gICAgICAgICAgcHJvZ3Jlc3MoKTtcclxuICAgICAgICAgIHRlc3RFeHBsYWluLmlubmVySFRNTCA9IGDtjbzsiqTrhJDsu6zrn6wg7Lih7KCV7J2EIOychO2VtCDslrzqtbTsnYQg7LaU7LacIOykkeyeheuLiOuLpC48YnI+IDxzcGFuIHN0eWxlPVwiY29sb3IgOiAjOWI4NWQwO1wiPlRpcCA6IOy1nOuMgO2VnCDruZvsnZgg7JiB7Zal7J2EIOuwm+yngCDslYrripQg6rOz7JeQ7IScIOy4oeygle2VtOuztOyEuOyalCE8L3NwYW4+YDtcclxuICAgICAgICAgIGlmIChmYWNlRG90RHJhdy5kcmF3KHBvc2l0aW9ucykpIGlzRGV0ZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZiAoXHJcbiAgICAgICAgLy8gICBwb3NpdGlvbnNbMzBdLnggPCBjYW52YXMud2lkdGggLyAyICYmXHJcbiAgICAgICAgLy8gICBwb3NpdGlvbnNbMzBdLnggPiBjYW52YXMud2lkdGggLyAyIC0gNTAgJiZcclxuICAgICAgICAvLyAgIHBvc2l0aW9uc1s1XS55IDwgY2FudmFzLmhlaWdodCAvIDIgKyAxMDAgJiZcclxuICAgICAgICAvLyAgIHBvc2l0aW9uc1s1XS55ID4gY2FudmFzLmhlaWdodCAvIDIgLSAxMDBcclxuICAgICAgICAvLyApIHtcclxuICAgICAgICAvLyAgIHRlc3RFeHBsYWluLmlubmVySFRNTCA9IGDtlLzrtoDsg4nsnYQg7LaU7LacIOykkSDsnoXri4jri6QuPGJyPiA8c3BhbiBzdHlsZT1cImNvbG9yIDogIzliODVkMDtcIj5UaXAgOiDstZzrjIDtlZwg67mb7J2YIOyYge2WpeydhCDrsJvsp4Ag7JWK64qUIOqzs+yXkOyEnCDsuKHsoJXtlbTrs7TshLjsmpQhPC9zcGFuPmA7XHJcbiAgICAgICAgLy8gICBmYWNlRG90RHJhdy5kcmF3KHBvc2l0aW9ucywgdHJ1ZSk7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgIHRlc3RFeHBsYWluLmlubmVySFRNTCA9IGDslrzqtbTsnYQg7KCV7KSR7JWZ7JeQIOychOy5mOyLnOy8nOyjvOyEuOyalC48YnI+IDxzcGFuIHN0eWxlPVwiY29sb3IgOiAjOWI4NWQwO1wiPlRpcCA6IOy1nOuMgO2VnCDruZvsnZgg7JiB7Zal7J2EIOuwm+yngCDslYrripQg6rOz7JeQ7IScIOy4oeygle2VtOuztOyEuOyalCE8L3NwYW4+YDtcclxuICAgICAgICAvLyAgIGZhY2VEb3REcmF3LmRyYXcocG9zaXRpb25zKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIGNvbnN0IGV5ZUxlbmd0aCA9IE1hdGguYWJzKHBvc2l0aW9uc1s0XS55IC0gcG9zaXRpb25zWzFdLnkpXHJcbiAgICAgICAgLy8gY29uc3QgcmlnaHRDaGVlayA9IHBvc2l0aW9uc1s0MjVdXHJcbiAgICAgICAgLy8gY29uc3QgbGVmdENoZWVrID0geyB4OiBwb3NpdGlvbnNbMjA1XS54IC0gZXllTGVuZ3RoLCB5OiBwb3NpdGlvbnNbMjA1XS55IH1cclxuICAgICAgICAvLyBjb25zdCBsZWZ0VW5kZXJFeWUgPSBwb3NpdGlvbnNbMTEwXVxyXG5cclxuICAgICAgICAvLyBjb25zdCByaWdodFVuZGVyRXllID0gcG9zaXRpb25zWzI1Ml1cclxuXHJcbiAgICAgICAgLy8gY29uc3QgamF3ID0gcG9zaXRpb25zWzIwMV1cclxuXHJcbiAgICAgICAgLy8gLy8gYXdhaXQgY3R4LmZpbGxSZWN0KGxlZnRDaGVlay54LGxlZnRDaGVlay55LC1leWVMZW5ndGgsIGV5ZUxlbmd0aC8yKVxyXG4gICAgICAgIC8vIC8vIGF3YWl0IGN0eC5maWxsUmVjdChyaWdodENoZWVrLngscmlnaHRDaGVlay55LGV5ZUxlbmd0aCwgZXllTGVuZ3RoLzIpXHJcbiAgICAgICAgLy8gLy8gYXdhaXQgY3R4LmZpbGxSZWN0KGxlZnRVbmRlckV5ZS54LGxlZnRVbmRlckV5ZS55LGV5ZUxlbmd0aCwgZXllTGVuZ3RoLzIpXHJcbiAgICAgICAgLy8gLy8gYXdhaXQgY3R4LmZpbGxSZWN0KHJpZ2h0VW5kZXJFeWUueCxyaWdodFVuZGVyRXllLnksZXllTGVuZ3RoLCBleWVMZW5ndGgvMilcclxuICAgICAgICAvLyAvLyBhd2FpdCBjdHguZmlsbFJlY3QoamF3LngsamF3LnksZXllTGVuZ3RoLCBleWVMZW5ndGgvMilcclxuXHJcbiAgICAgICAgLy8gbGV0IGxlZnRFeWVTdW0gPSBuZXcgZ2V0Q29sb3JEYXRhKGxlZnRVbmRlckV5ZSwgZXllTGVuZ3RoLCBjb250ZXh0KVxyXG4gICAgICAgIC8vIGxldCByaWdodEV5ZVN1bSA9IG5ldyBnZXRDb2xvckRhdGEocmlnaHRVbmRlckV5ZSwgZXllTGVuZ3RoLCBjb250ZXh0KVxyXG5cclxuICAgICAgICAvLyBsZXQgbGVmdENoZWVrU3VtID0gbmV3IGdldENvbG9yRGF0YShsZWZ0Q2hlZWssIGV5ZUxlbmd0aCwgY29udGV4dClcclxuICAgICAgICAvLyBsZXQgcmlnaHRDaGVla1N1bSA9IG5ldyBnZXRDb2xvckRhdGEocmlnaHRDaGVlaywgZXllTGVuZ3RoLCBjb250ZXh0KVxyXG4gICAgICAgIC8vIGxldCBqYXdTdW0gPSBuZXcgZ2V0Q29sb3JEYXRhKGphdywgZXllTGVuZ3RoLCBjb250ZXh0KVxyXG5cclxuICAgICAgICAvLyBsZXQgZXllUmVzdWx0ID0gYXdhaXQgbGVmdEV5ZVN1bS5tYXAoKGksIGlkeCkgPT4ge1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gKGkgKyByaWdodEV5ZVN1bVtpZHhdKSAvIDJcclxuICAgICAgICAvLyB9KVxyXG5cclxuICAgICAgICAvLyBsZXQgY2hlZWtSZXN1bHQgPSBhd2FpdCBsZWZ0Q2hlZWtTdW0ubWFwKChpLCBpZHgpID0+IHtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIChpICsgcmlnaHRDaGVla1N1bVtpZHhdKSAvIDJcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIC8vIGV5ZUNvbG9yLnB1c2goZXllUmVzdWx0KVxyXG4gICAgICAgIC8vIGNoZWVrQ29sb3IucHVzaChjaGVla1Jlc3VsdClcclxuICAgICAgICAvLyBqYXdDb2xvci5wdXNoKGphd1N1bSlcclxuXHJcbiAgICAgICAgLy8gY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHsoZXllUmVzdWx0WzBdICsgY2hlZWtSZXN1bHRbMF0gKyBqYXdTdW1bMF0pIC8gM30sJHsoZXllUmVzdWx0WzFdICsgY2hlZWtSZXN1bHRbMV0gKyBqYXdTdW1bMV0pIC8gM30sJHsoZXllUmVzdWx0WzJdICsgY2hlZWtSZXN1bHRbMl0gKyBqYXdTdW1bMl0pIC8gM30pYFxyXG5cclxuICAgICAgICAvLyBjb25zdCByZ2JCb3ggPSAoY2FudmFzLmhlaWdodCArIGNhbnZhcy53aWR0aCkgLyAyIC8gNFxyXG4gICAgICAgIC8vIGN0eC5maWxsUmVjdCgwLCAwLCByZ2JCb3gsIHJnYkJveClcclxuICAgICAgfSBlbHNlIGlmIChmYWNlQm9hcmQgPT0gJ2ZhY2Vib2FyZCcpIHtcclxuICAgICAgICB0ZXN0RXhwbGFpbi5pbm5lclRleHQgPVxyXG4gICAgICAgICAgJ+2UvOu2gO2GpOydtCDsoJXrj4jrkJjrqbAg7J2066qp6rWs67mE6rCAIOuYkOugt+2VtOuztOydtOuKlCDsg4nsnYQg7ISg7YOdIO2VtOyjvOyEuOyalC4nO1xyXG4gICAgICAgIC8vIGNvbnN0IGNvbG9yUmdiID0gc3RvcmUuZ2V0U3RhdGUoKS5Db2xvclJlZHVjZXIubWFpbkZhY2VCb2FyZENvbG9yO1xyXG4gICAgICAgIGNvbnN0IHsgc2VsZkNvbG9ycywgc2VsZlJlc3VsdCB9ID0gc3RvcmUuZ2V0U3RhdGUoKS5Db2xvclJlZHVjZXI7XHJcbiAgICAgICAgY29uc3QgY29sb3JSZ2IgPSBzZWxmQ29sb3JzW3NlbGZSZXN1bHQubGVuZ3RoXTtcclxuICAgICAgICBpZiAoY29sb3JSZ2IpIGZhY2VCZ0RyYXcuZHJhd0xvb3AocG9zaXRpb25zLCBjb2xvclJnYik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoJzEzJyk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIHRlc3RFeHBsYWluLmlubmVyVGV4dCA9XHJcbiAgICAgICAgICAgICftlZjri6jsnZgg66eI7Iqk7YGs66W8IOyEoO2Dne2VmOyXrCDtlYTthLDrpbwg7KCB7Jqp7ZW067O07IS47JqUJztcclxuICAgICAgICAgIGNvbnN0IG1haW5Db2xvciA9XHJcbiAgICAgICAgICAgIG1hc2tDb2xvcltzdG9yZS5nZXRTdGF0ZSgpLkNvbG9yUmVkdWNlci5tYWluTWFza0NvbG9yIV07XHJcbiAgICAgICAgICBjb25zdCBsZWZ0TWFzayA9IG1haW5Db2xvclswXTtcclxuICAgICAgICAgIGNvbnN0IHJpZ2h0TWFzayA9IG1haW5Db2xvclsxXTtcclxuICAgICAgICAgIG5ldyBNYXNrRHJhdyhcclxuICAgICAgICAgICAgY2FudmFzLFxyXG4gICAgICAgICAgICBsZWZ0TWFzayxcclxuICAgICAgICAgICAgcmlnaHRNYXNrLFxyXG4gICAgICAgICAgICBwb3NpdGlvbnMsXHJcbiAgICAgICAgICAgIHR5cGVBcnJbMF0sXHJcbiAgICAgICAgICAgIHR5cGVBcnJbMV0sXHJcbiAgICAgICAgICAgIHR5cGVBcnJbMl0sXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICB0cmFja3NbMF0uc3RvcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBhbmlJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXJQcmVkaWN0aW9uKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFuaUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlclByZWRpY3Rpb24pO1xyXG4gICAgICB0ZXN0RXhwbGFpbi5pbm5lckhUTUwgPSBg7Ja86rW07J2EIOyduOyLne2VoCDsiJgg7J6I64+E66GdIOy5tOuplOudvOulvCDrsJTrnbzrtJDso7zshLjsmpQuPGJyPiA8c3BhbiBzdHlsZT1cImNvbG9yIDogIzliODVkMDtcIj5UaXAgOiDstZzrjIDtlZwg67mb7J2YIOyYge2WpeydhCDrsJvsp4Ag7JWK64qUIOqzs+yXkOyEnCDsuKHsoJXtlbTrs7TshLjsmpQhPC9zcGFuPmA7XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyhhbmlJZCk7XHJcbiAgICAvLyAgIHN0YXRzLmVuZCgpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gbWFpbigpIHtcclxuICAgIGNvbnN0IGNoZWNrID0gdHJ1ZTtcclxuICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgLy8gICBpZiAoIW1vZGVsKSB7XHJcbiAgICAvLyAgICAgY2hlY2sgPSBmYWxzZTtcclxuICAgIC8vICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmlJZCk7XHJcbiAgICAvLyAgICAgaWYgKFxyXG4gICAgLy8gICAgICAgY29uZmlybShcclxuICAgIC8vICAgICAgICAgJ+q4sOq4sOydmCDsgqzslpHsnbQg64Ku7JWEIOybkO2ZnO2VnCDsuKHsoJXsnbQg7Z6Y65Ot64uI64ukLiDtmZXsnbjsnYQg64iE66W07Iuc66m0IOydtOuvuOyngCDsuKHsoJUg67Cp7Iud7Jy866GcIOyghO2ZmO2VqeuLiOuLpC4g7Leo7IaM66W8IOuIhOultOyLnOuptCDqt7jrjIDroZwg7KeE7ZaJ7ZWp64uI64ukLicsXHJcbiAgICAvLyAgICAgICApXHJcbiAgICAvLyAgICAgKSB7XHJcbiAgICAvLyAgICAgICBjaGVjayA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lzU2NhblBvc3NpYmxlJywgJ2ZhbHNlJyk7XHJcbiAgICAvLyAgICAgICBoZWFkZXJXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAvLyAgICAgICBoZWFkZXJXcmFwcGVyLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAvLyAgICAgICB0ZXN0V3JhcHBlci5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgLy8gICAgICAgdHJhY2tzWzBdLnN0b3AoKTtcclxuICAgIC8vICAgICAgIGNhbnZhcy5yZW1vdmUoKTtcclxuICAgIC8vICAgICAgIHZpZGVvLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAvLyAgICAgICBNTF9Mb2FkaW5nLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAvLyAgICAgICBJbWFnZVVwbG9hZChmYWNlQm9hcmQpO1xyXG4gICAgLy8gICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgIH0gZWxzZSBjaGVjayA9IHRydWU7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH0sIDE1MDAwMCk7XHJcblxyXG4gICAgaWYgKCFtb2RlbCkge1xyXG4gICAgICBtb2RlbCA9IGF3YWl0IGZhY2VMYW5kbWFya3NEZXRlY3Rpb24ubG9hZChcclxuICAgICAgICBmYWNlTGFuZG1hcmtzRGV0ZWN0aW9uLlN1cHBvcnRlZFBhY2thZ2VzLm1lZGlhcGlwZUZhY2VtZXNoLFxyXG4gICAgICAgIHsgbWF4RmFjZXM6IDEgfSxcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGlmIChjaGVjaykge1xyXG4gICAgICBpZiAoZmFjZUJvYXJkICE9ICdtYXNrJykge1xyXG4gICAgICAgIGhlYWRlcldyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBoZWFkZXJXcmFwcGVyLnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGF3YWl0IHRmLnNldEJhY2tlbmQoc3RhdGUuYmFja2VuZCk7XHJcbiAgICAgIC8vICAgc3RhdHMuc2hvd1BhbmVsKDApOyAgLy8gMDogZnBzLCAxOiBtcywgMjogbWIsIDMrOiBjdXN0b21cclxuICAgICAgLy8gICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN0YXRzLmRvbSk7XHJcblxyXG4gICAgICB0ZXN0V3JhcHBlci5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG5cclxuICAgICAgdmlkZW8ucGxheSgpO1xyXG4gICAgICB2aWRlby5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgdmlkZW9XaWR0aCA9IHZpZGVvLmNsaWVudFdpZHRoO1xyXG4gICAgICBjYW52YXMud2lkdGggPSB2aWRlb1dpZHRoO1xyXG5cclxuICAgICAgaWYgKHR5cGVBcnJbMl0pIHtcclxuICAgICAgICB2aWRlb0hlaWdodCA9IDMzODtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gMzM4O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZpZGVvSGVpZ2h0ID0gdmlkZW8uY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB2aWRlby5jbGllbnRIZWlnaHQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpITtcclxuICAgICAgY3R4LmZpbGxTdHlsZSA9IEdSRUVOO1xyXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBHUkVFTjtcclxuICAgICAgY3R4LmxpbmVXaWR0aCA9IDAuNTtcclxuICAgICAgdGVzdFdyYXBwZXIuaW5zZXJ0QmVmb3JlKGNhbnZhcywgdGVzdFdyYXBwZXIuZmlyc3RDaGlsZCk7XHJcblxyXG4gICAgICAvLyBjb25zdCBjZW50ZXJYID0gY2FudmFzLndpZHRoIC8gMjtcclxuICAgICAgLy8gY29uc3QgY2VudGVyWSA9IGNhbnZhcy5oZWlnaHQgLyAyO1xyXG4gICAgICBhbGVydCgxMjMpO1xyXG4gICAgICBpZiAoZmFjZUJvYXJkID09PSAnZmFjZWJvYXJkJykgZmFjZUJnRHJhdyA9IG5ldyBkcmF3RmFjZUJHKGNhbnZhcywgdmlkZW8pO1xyXG4gICAgICBmYWNlRG90RHJhdyA9IG5ldyBkcmF3RmFjZUxpbmUoY2FudmFzKTtcclxuICAgICAgcmVuZGVyUHJlZGljdGlvbigpO1xyXG4gICAgfVxyXG4gICAgLy8gICBsZXQgY2hlY2sgPSB0cnVlO1xyXG4gICAgLy8gICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIC8vICAgICBpZiAoIW1vZGVsKSB7XHJcbiAgICAvLyAgICAgICBjaGVjayA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pSWQpO1xyXG4gICAgLy8gICAgICAgaWYgKFxyXG4gICAgLy8gICAgICAgICBjb25maXJtKFxyXG4gICAgLy8gICAgICAgICAgICfquLDquLDsnZgg7IKs7JaR7J20IOuCruyVhCDsm5DtmZztlZwg7Lih7KCV7J20IO2emOuTreuLiOuLpC4g7ZmV7J247J2EIOuIhOultOyLnOuptCDsnbTrr7jsp4Ag7Lih7KCVIOuwqeyLneycvOuhnCDsoITtmZjtlanri4jri6QuIOy3qOyGjOulvCDriITrpbTsi5zrqbQg6re464yA66GcIOynhO2Wie2VqeuLiOuLpC4nLFxyXG4gICAgLy8gICAgICAgICApXHJcbiAgICAvLyAgICAgICApIHtcclxuICAgIC8vICAgICAgICAgY2hlY2sgPSBmYWxzZTtcclxuICAgIC8vICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lzU2NhblBvc3NpYmxlJywgJ2ZhbHNlJyk7XHJcbiAgICAvLyAgICAgICAgIGhlYWRlcldyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIC8vICAgICAgICAgaGVhZGVyV3JhcHBlci5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgLy8gICAgICAgICB0ZXN0V3JhcHBlci5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgLy8gICAgICAgICB0cmFja3NbMF0uc3RvcCgpO1xyXG4gICAgLy8gICAgICAgICBjYW52YXMucmVtb3ZlKCk7XHJcbiAgICAvLyAgICAgICAgIHZpZGVvLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAvLyAgICAgICAgIE1MX0xvYWRpbmcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIC8vICAgICAgICAgSW1hZ2VVcGxvYWQoZmFjZUJvYXJkKTtcclxuICAgIC8vICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgICAgfSBlbHNlIGNoZWNrID0gdHJ1ZTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgIH0sIDE1MDAwKTtcclxuXHJcbiAgICAvLyAgIGlmICghbW9kZWwpIHtcclxuICAgIC8vICAgICBmYWNlTGFuZG1hcmtzRGV0ZWN0aW9uXHJcbiAgICAvLyAgICAgICAubG9hZChmYWNlTGFuZG1hcmtzRGV0ZWN0aW9uLlN1cHBvcnRlZFBhY2thZ2VzLm1lZGlhcGlwZUZhY2VtZXNoLCB7XHJcbiAgICAvLyAgICAgICAgIG1heEZhY2VzOiAxLFxyXG4gICAgLy8gICAgICAgfSlcclxuICAgIC8vICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgLy8gICAgICAgICBpZiAoY2hlY2spIHtcclxuICAgIC8vICAgICAgICAgICBtb2RlbCA9IGRhdGE7XHJcbiAgICAvLyAgICAgICAgICAgaWYgKGZhY2VCb2FyZCAhPSAnbWFzaycpIHtcclxuICAgIC8vICAgICAgICAgICAgIGhlYWRlcldyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIC8vICAgICAgICAgICAgIGhlYWRlcldyYXBwZXIuc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICAgIC8vICAgICAgICAgICAgIGZhY2VEb3REcmF3ID0gbmV3IGRyYXdGYWNlTGluZShjYW52YXMpO1xyXG4gICAgLy8gICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICB0ZXN0V3JhcHBlci5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgLy8gICAgICAgICAgIHZpZGVvLnBsYXkoKTtcclxuICAgIC8vICAgICAgICAgICB2aWRlby5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIC8vICAgICAgICAgICBjYW52YXMuY2xhc3NOYW1lID0gJ2ZhY2VDYW52YXMnO1xyXG4gICAgLy8gICAgICAgICAgIHZpZGVvV2lkdGggPSB2aWRlby5jbGllbnRXaWR0aDtcclxuICAgIC8vICAgICAgICAgICBjYW52YXMud2lkdGggPSB2aWRlb1dpZHRoO1xyXG4gICAgLy8gICAgICAgICAgIGNhbnZhcy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAvLyAgICAgICAgICAgY2FudmFzLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgtMSwxKSc7XHJcbiAgICAvLyAgICAgICAgICAgY2FudmFzLnN0eWxlLnpJbmRleCA9ICcgOTk3JztcclxuICAgIC8vICAgICAgICAgICBjYW52YXMuc3R5bGUubGVmdCA9ICcwJztcclxuXHJcbiAgICAvLyAgICAgICAgICAgaWYgKHR5cGVBcnJbMl0pIHtcclxuICAgIC8vICAgICAgICAgICAgIHZpZGVvSGVpZ2h0ID0gMzM4O1xyXG4gICAgLy8gICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IDMzODtcclxuICAgIC8vICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICAgdmlkZW9IZWlnaHQgPSB2aWRlby5jbGllbnRIZWlnaHQ7XHJcbiAgICAvLyAgICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gdmlkZW8uY2xpZW50SGVpZ2h0O1xyXG4gICAgLy8gICAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICAgICAgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJykhO1xyXG4gICAgLy8gICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBHUkVFTjtcclxuICAgIC8vICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBHUkVFTjtcclxuICAgIC8vICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMC41O1xyXG4gICAgLy8gICAgICAgICAgIHRlc3RXcmFwcGVyLmluc2VydEJlZm9yZShjYW52YXMsIHRlc3RXcmFwcGVyLmZpcnN0Q2hpbGQpO1xyXG4gICAgLy8gICAgICAgICAgIGFuaUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlclByZWRpY3Rpb24pO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICB9KTtcclxuICAgIC8vICAgfVxyXG5cclxuICAgIC8vICAgLy8gYXdhaXQgdGYuc2V0QmFja2VuZChzdGF0ZS5iYWNrZW5kKTtcclxuICAgIC8vICAgLy8gICBzdGF0cy5zaG93UGFuZWwoMCk7ICAvLyAwOiBmcHMsIDE6IG1zLCAyOiBtYiwgMys6IGN1c3RvbVxyXG4gICAgLy8gICAvLyAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3RhdHMuZG9tKTtcclxuXHJcbiAgICAvLyAgIC8vIGNvbnN0IGNlbnRlclggPSBjYW52YXMud2lkdGggLyAyO1xyXG4gICAgLy8gICAvLyBjb25zdCBjZW50ZXJZID0gY2FudmFzLmhlaWdodCAvIDI7XHJcblxyXG4gICAgLy8gICByZXR1cm47XHJcbiAgICAvLyB9XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHByb2dyZXNzKCkge1xyXG4gICAgY29uc3QgYWRkID0gTWF0aC5yYW5kb20oKSAqIDM7XHJcbiAgICBwcm9ncmVzc0NudCArPSBhZGQ7XHJcbiAgICBpZiAocHJvZ3Jlc3NDbnQgPiAxMDApIHByb2dyZXNzQ250ID0gMTAwO1xyXG4gICAgcHJvZ3Jlc3NDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtZmxleCc7XHJcbiAgICBwcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9IHByb2dyZXNzQ250LnRvRml4ZWQoMikgKyAnJSc7XHJcbiAgICBwZXJjZW50LmlubmVyVGV4dCA9IHByb2dyZXNzQ250LnRvRml4ZWQoMikgKyAnJSc7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBpbml0aWFsaXplIHRoZSB0aW1lciB2YXJpYWJsZXMgYW5kIHN0YXJ0IHRoZSBhbmltYXRpb25cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==