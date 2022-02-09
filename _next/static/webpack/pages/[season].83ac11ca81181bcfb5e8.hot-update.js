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
                            console.log(video.clientWidth);
                            console.log(video);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL1N0cmVhbUNhbnZhcy50cyJdLCJuYW1lcyI6WyJTdHJlYW1DYW52YXMiLCJmYWNlQm9hcmQiLCJyZW5kZXJQcmVkaWN0aW9uIiwibWFpbiIsInByb2dyZXNzIiwiYWRkIiwiTWF0aCIsInJhbmRvbSIsInByb2dyZXNzQ250IiwicHJvZ3Jlc3NDb250YWluZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJwcm9ncmVzc0JhciIsIndpZHRoIiwidG9GaXhlZCIsInBlcmNlbnQiLCJpbm5lclRleHQiLCJjaGVjayIsIm1vZGVsIiwiZmFjZUxhbmRtYXJrc0RldGVjdGlvbiIsIm1heEZhY2VzIiwiaGVhZGVyV3JhcHBlciIsIm9wYWNpdHkiLCJ0ZXN0V3JhcHBlciIsInZpZGVvIiwicGxheSIsInZpZGVvV2lkdGgiLCJjbGllbnRXaWR0aCIsImNvbnNvbGUiLCJsb2ciLCJjYW52YXMiLCJ0eXBlQXJyIiwidmlkZW9IZWlnaHQiLCJoZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZmlsbFN0eWxlIiwiR1JFRU4iLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJlcnJvciIsImZhY2VCZ0RyYXciLCJkcmF3RmFjZUJHIiwiZmFjZURvdERyYXciLCJkcmF3RmFjZUxpbmUiLCJzcmNPYmoiLCJzcmNPYmplY3QiLCJhY3RpdmUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImFuaUlkIiwiZXN0aW1hdGVGYWNlcyIsImlucHV0IiwicmV0dXJuVGVuc29ycyIsImZsaXBIb3Jpem9udGFsIiwicHJlZGljdElyaXNlcyIsInByZWRpY3Rpb25zIiwic2V0VGltZW91dCIsImNsZWFyUmVjdCIsImlzRGV0ZWN0ZWQiLCJNTF9Mb2FkaW5nIiwibGVuZ3RoIiwia2V5cG9pbnRzIiwic2NhbGVkTWVzaCIsInZpZGVvV2lkdGhDYWxjIiwidmlkZW9IZWlnaHRDYWxjIiwicG9zaXRpb25zIiwibWFwIiwiaSIsIngiLCJ5IiwidGVzdEV4cGxhaW4iLCJpbm5lckhUTUwiLCJkcmF3Iiwic3RvcmUiLCJDb2xvclJlZHVjZXIiLCJzZWxmQ29sb3JzIiwic2VsZlJlc3VsdCIsImNvbG9yUmdiIiwiZHJhd0xvb3AiLCJhbGVydCIsIm1haW5Db2xvciIsIm1hc2tDb2xvciIsIm1haW5NYXNrQ29sb3IiLCJsZWZ0TWFzayIsInJpZ2h0TWFzayIsIk1hc2tEcmF3IiwidHJhY2tzIiwic3RvcCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInRmIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0cmVhbSIsImdldFRyYWNrcyIsImdldERldmljZVR5cGUiLCJpY29uIiwiSW1hZ2UiLCJzcmMiLCJwcm9jZXNzIiwiaWNvbjIiLCJiZWlnZV9sZWZ0IiwiYmVpZ2VfcmlnaHQiLCJtaW50X2xlZnQiLCJtaW50X3JpZ2h0IiwiYmxhY2tfbGVmdCIsImJsYWNrX3JpZ2h0Iiwid2hpdGVfbGVmdCIsIndoaXRlX3JpZ2h0IiwicHVycGxlX2xlZnQiLCJwdXJwbGVfcmlnaHQiLCJwaW5rX2xlZnQiLCJwaW5rX3JpZ2h0Iiwid2hpdGUiLCJibGFjayIsInBpbmsiLCJwdXJwbGUiLCJiZWlnZSIsIm1pbnQiLCJvbmxvYWQiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJhY3Rpb25DcmVhdG9ycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtB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LENBQUNULFVBQUQsRUFBYUMsV0FBYixDQUZHO0FBR1ZTLG9CQUFJLEVBQUUsQ0FBQ0osU0FBRCxFQUFZQyxVQUFaLENBSEk7QUFJVkksc0JBQU0sRUFBRSxDQUFDUCxXQUFELEVBQWNDLFlBQWQsQ0FKRTtBQUtWTyxxQkFBSyxFQUFFLENBQUNoQixVQUFELEVBQWFDLFdBQWIsQ0FMRztBQU1WZ0Isb0JBQUksRUFBRSxDQUFDZixTQUFELEVBQVlDLFVBQVo7QUFOSSxlQUFaOztBQVNBdEIsdUJBQVMsQ0FBQ1Isb0RBQUEsR0FBaUJDLFlBQWpCLENBQThCUSxhQUEvQixDQUFULENBQXdELENBQXhELEVBQTJEb0MsTUFBM0QsR0FBb0U7QUFBQSx1QkFDbEV0SCxJQUFJLEVBRDhEO0FBQUEsZUFBcEU7QUFFRCxhQXJDRCxNQXFDTyxJQUFJRixTQUFTLElBQUksV0FBakIsRUFBOEI7QUFDbkN5SCw0QkFBYyxDQUFDQyxPQUFmLENBQXVCLGFBQXZCLEVBQXNDLEdBQXRDO0FBQ0EvQyxrRUFBQSxDQUFlZ0QsMEVBQUEsQ0FBNEIsSUFBNUIsQ0FBZjtBQUNBekgsa0JBQUk7QUFDTCxhQUpNLE1BSUFBLElBQUksR0ExR0UsQ0E0R2I7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQXRIYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0tBQWVILFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW3NlYXNvbl0uODNhYzExY2E4MTE4MWJjZmI1ZTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IHRocm90dGxpbmcgfSBmcm9tICcuLi8uLi91dGlscy90aHJvdHRsaW5nJztcclxuLy8gLy8gaW1wb3J0ICogYXMgZmFjZWFwaSBmcm9tICcuLi8uLi91dGlscy9mYWNlLWFwaSdcclxuLy8gaW1wb3J0IEZhY2VCb2FyZCBmcm9tICcuL0ZhY2VCb2FyZCc7XHJcbi8vIGltcG9ydCBnZXRDb2xvckRhdGEgZnJvbSAnLi9nZXRDb2xvckRhdGEnO1xyXG4vLyBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG4vLyBpbXBvcnQgY29sb3JBdmcgZnJvbSAnLi9jb2xvckF2Zyc7XHJcbi8vIGltcG9ydCBzdG9yZSBmcm9tICcuLi8uLi9zdG9yZSc7XHJcblxyXG4vLyAvLyBjb25zdCB0aHJvdHRsZXIgPSB0aHJvdHRsaW5nKClcclxuLy8gLy8gZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gU3RyZWFtQ2FudmFzKGZhY2VCb2FyZCkge1xyXG4vLyAvLyAgICAgbGV0IGNhbnZhcztcclxuLy8gLy8gICAgIGxldCB2aWRlbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWRlbycpXHJcbi8vIC8vICAgICBpZiAoIXZpZGVvfHwodmlkZW8ucHJldmlvdXNTaWJsaW5nJiZ2aWRlby5wcmV2aW91c1NpYmxpbmcubm9kZU5hbWU9PVwiQ0FOVkFTXCIpKSByZXR1cm5cclxuLy8gLy8gICAgIGxldCBsb2FkaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkaW5nXCIpXHJcbi8vIC8vICAgICBsZXQgcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2dyZXNzQmFyXCIpXHJcbi8vIC8vICAgICBsZXQgcGVyY2VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZ3Jlc3NQZXJjZW50XCIpXHJcbi8vIC8vICAgICBsZXQgcHJvZ3Jlc3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2dyZXNzQ29udGFpbmVyXCIpXHJcbi8vIC8vICAgICBsZXQgdGVzdEV4cGxhaW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlc3RFeHBsYWluXCIpXHJcbi8vIC8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlcldyYXBwZXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbi8vIC8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlc3RXcmFwcGVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuLy8gLy8gICAgIHZpZGVvLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuLy8gLy8gICAgIGxvYWRpbmcuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuLy8gLy8gICAgIHZpZGVvLnBsYXkoKVxyXG4vLyAvLyAgICAgbGV0IGludGVydmFsO1xyXG4vLyAvLyAgICAgdHJ5IHtcclxuLy8gLy8gICAgICAgICBjYW52YXMgPSBmYWNlYXBpLmNyZWF0ZUNhbnZhc0Zyb21NZWRpYSh2aWRlbylcclxuXHJcbi8vIC8vICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAvLyAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4vLyAvLyAgICAgICAgICAgICBTdHJlYW1DYW52YXMoZmFjZUJvYXJkKVxyXG4vLyAvLyAgICAgICAgIH0sIDUwMCk7XHJcbi8vIC8vICAgICAgICAgcmV0dXJuXHJcbi8vIC8vICAgICB9XHJcbi8vIC8vICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGluZycpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbi8vIC8vICAgICBjYW52YXMuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCJcclxuLy8gLy8gICAgIGNhbnZhcy5zdHlsZS56SW5kZXggPSBcIjk5OFwiXHJcbi8vIC8vICAgICBjYW52YXMuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgtMSwxKVwiXHJcbi8vIC8vICAgICBjYW52YXMuY2xhc3NOYW1lID0gXCJmYWNlQ2FudmFzXCJcclxuLy8gLy8gICAgIHZpZGVvLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNhbnZhcywgdmlkZW8pXHJcbi8vIC8vICAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4vLyAvLyAgICAgbGV0IGNhbUNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIilcclxuLy8gLy8gICAgIGNhbUNhbnZhcy5jbGFzc05hbWUgPSBcImZhY2VDYW52YXNcIlxyXG4vLyAvLyAgICAgY2FtQ2FudmFzLndpZHRoID0gdmlkZW8uY2xpZW50V2lkdGhcclxuLy8gLy8gICAgIGNhbUNhbnZhcy5oZWlnaHQgPSB2aWRlby5jbGllbnRIZWlnaHRcclxuLy8gLy8gICAgIGNhbUNhbnZhcy5zdHlsZS56SW5kZXggPSBcIjk5OFwiXHJcbi8vIC8vICAgICBjYW1DYW52YXMuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgtMSwxKVwiXHJcbi8vIC8vICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5DYW1cIikuYXBwZW5kQ2hpbGQoY2FtQ2FudmFzKVxyXG4vLyAvLyAgICAgbGV0IGNvbnRleHQgPSBjYW1DYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuLy8gLy8gICAgIGNvbnN0IGRpc3BsYXlTaXplID0geyB3aWR0aDogdmlkZW8uY2xpZW50V2lkdGgsIGhlaWdodDogdmlkZW8uY2xpZW50SGVpZ2h0IH1cclxuLy8gLy8gICAgIGZhY2VhcGkubWF0Y2hEaW1lbnNpb25zKGNhbnZhcywgZGlzcGxheVNpemUpXHJcbi8vIC8vICAgICBsZXQgY250ID0gMDtcclxuLy8gLy8gICAgIGxldCBjb2xvclN1bSA9IHt9XHJcbi8vIC8vICAgICBsZXQgZXllQ29sb3IgPSBbXVxyXG4vLyAvLyAgICAgbGV0IGNoZWVrQ29sb3IgPSBbXVxyXG4vLyAvLyAgICAgbGV0IGphd0NvbG9yID0gW11cclxuLy8gLy8gICAgIGxldCBhbmk7XHJcbi8vIC8vICAgICBhbmkgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGVzdClcclxuLy8gLy8gICAgIGxldCBsZWZ0TWFzayA9IG5ldyBJbWFnZSgpXHJcbi8vIC8vICAgICBsZWZ0TWFzay5zcmMgPSBgJHtwcm9jZXNzLmVudi5QQVRIfS9pbWFnZXMvbGVmdE1hc2sucG5nYFxyXG4vLyAvLyAgICAgbGV0IHJpZ2h0TWFzayA9IG5ldyBJbWFnZSgpXHJcbi8vIC8vICAgICByaWdodE1hc2suc3JjID0gYCR7cHJvY2Vzcy5lbnYuUEFUSH0vaW1hZ2VzL3JpZ2h0TWFzay5wbmdgXHJcbi8vIC8vICAgICBhc3luYyBmdW5jdGlvbiB0ZXN0KCkge1xyXG4vLyAvLyAgICAgICAgIGNvbnN0IGRldGVjdGlvbnMgPSBhd2FpdCBmYWNlYXBpLmRldGVjdFNpbmdsZUZhY2UodmlkZW8sIG5ldyBmYWNlYXBpLlRpbnlGYWNlRGV0ZWN0b3JPcHRpb25zKCkpLndpdGhGYWNlTGFuZG1hcmtzKHRydWUpIC8vdmlkZW8g7Lqh7LOQ67O4IOyWvOq1tOyduOyLnSDsoJXrs7QgIOyCrOydtOymiOulvCDrp57stpTquLAg7KCE7J206riw65WM66y47JeQIOyijO2RnOqwkuydtCDri6TrpbTri6RcclxuLy8gLy8gICAgICAgICBsZXQgcmVzaXplZERldGVjdGlvbnNcclxuLy8gLy8gICAgICAgICBsb2FkaW5nLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuLy8gLy8gICAgICAgICBpZiAoZGV0ZWN0aW9ucykge1xyXG5cclxuLy8gLy8gICAgICAgICAgICAgY250KytcclxuXHJcbi8vIC8vICAgICAgICAgICAgIC8vIGlmIChjbnQgPT0gMzEgJiYgIWZhY2VCb2FyZCkge1xyXG4vLyAvLyAgICAgICAgICAgICAvLyAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcclxuLy8gLy8gICAgICAgICAgICAgLy8gICAgIGNhbnZhcy5yZW1vdmUoKVxyXG4vLyAvLyAgICAgICAgICAgICAvLyAgICAgY29sb3JTdW0uZXllID0gZXllQ29sb3IucmVkdWNlKChhLCBiKSA9PiB7XHJcbi8vIC8vICAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuIFthWzBdICsgYlswXSwgYVsxXSArIGJbMV0sIGFbMl0gKyBiWzJdXVxyXG4vLyAvLyAgICAgICAgICAgICAvLyAgICAgfSlcclxuLy8gLy8gICAgICAgICAgICAgLy8gICAgIGNvbG9yU3VtLmNoZWVrID0gY2hlZWtDb2xvci5yZWR1Y2UoKGEsIGIpID0+IHtcclxuLy8gLy8gICAgICAgICAgICAgLy8gICAgICAgICByZXR1cm4gW2FbMF0gKyBiWzBdLCBhWzFdICsgYlsxXSwgYVsyXSArIGJbMl1dXHJcbi8vIC8vICAgICAgICAgICAgIC8vICAgICB9KVxyXG4vLyAvLyAgICAgICAgICAgICAvLyAgICAgY29sb3JTdW0uamF3ID0gamF3Q29sb3IucmVkdWNlKChhLCBiKSA9PiB7XHJcbi8vIC8vICAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuIFthWzBdICsgYlswXSwgYVsxXSArIGJbMV0sIGFbMl0gKyBiWzJdXVxyXG4vLyAvLyAgICAgICAgICAgICAvLyAgICAgfSlcclxuLy8gLy8gICAgICAgICAgICAgLy8gICAgIGZvciAobGV0IGtleSBpbiBjb2xvclN1bSkge1xyXG4vLyAvLyAgICAgICAgICAgICAvLyAgICAgICAgIGNvbG9yU3VtW2tleV0gPSBjb2xvclN1bVtrZXldLm1hcChpID0+IGkgLyAzMClcclxuLy8gLy8gICAgICAgICAgICAgLy8gICAgIH1cclxuLy8gLy8gICAgICAgICAgICAgLy8gICAgIHRocm90dGxlci50aHJvdHRsZSgoKSA9PiB7XHJcbi8vIC8vICAgICAgICAgICAgIC8vICAgICAgICAgYXhpb3MucG9zdCgnaHR0cHM6Ly90ZW5zb3Itc2VydmVyLmhlcm9rdWFwcC5jb20vZ2V0U2Vhc29uJywgY29sb3JTdW0pXHJcbi8vIC8vICAgICAgICAgICAgIC8vICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuLy8gLy8gICAgICAgICAgICAgLy8gICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocmVzLmRhdGEpLmNsaWNrKClcclxuLy8gLy8gICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29uc3Qgc3RyZWFtID0gdmlkZW8uc3JjT2JqZWN0OyAvL+u5hOuUlOyYpCDsiqTtirjrprxcclxuLy8gLy8gICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29uc3QgdHJhY2tzID0gc3RyZWFtLmdldFRyYWNrcygpOyAvL+2KuOuemVxyXG4vLyAvLyAgICAgICAgICAgICAvLyAgICAgICAgICAgICB0cmFja3NbMF0uc3RvcCgpIC8v7Iqk7Yq466a8IOykkeuLqFxyXG4vLyAvLyAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9KVxyXG4vLyAvLyAgICAgICAgICAgICAvLyAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuLy8gLy8gICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuLy8gLy8gICAgICAgICAgICAgLy8gICAgICAgICAgICAgfSlcclxuLy8gLy8gICAgICAgICAgICAgLy8gICAgIH0sIDUwMClcclxuLy8gLy8gICAgICAgICAgICAgLy8gICAgIHJldHVyblxyXG4vLyAvLyAgICAgICAgICAgICAvLyB9XHJcbi8vIC8vICAgICAgICAgICAgIC8vIGlmIChjbnQgPiAzMSAmJiAhZmFjZUJvYXJkKSByZXR1cm5cclxuXHJcbi8vIC8vICAgICAgICAgICAgIHJlc2l6ZWREZXRlY3Rpb25zID0gYXdhaXQgZmFjZWFwaS5yZXNpemVSZXN1bHRzKGRldGVjdGlvbnMsIGRpc3BsYXlTaXplKSAvL2RldGVjdGlvbnPrpbwgZGlzcGxheXNpemXsl5Ag66ee7LaYIOqysOqzvOqwklxyXG4vLyAvLyAgICAgICAgICAgICAvLyBhd2FpdCBmYWNlYXBpLmRyYXcuZHJhd0RldGVjdGlvbnMoY2FudmFzLCByZXNpemVkRGV0ZWN0aW9ucykgLy/slrzqtbTsnbjsi50g7IKs6rCB7ZiVIOuwleyKpCDrk5zroZzsnolcclxuXHJcbi8vIC8vICAgICAgICAgICAgIC8vIGNvbnN0IGxhbmRtYXJrID0gYXdhaXQgZmFjZWFwaS5kZXRlY3RGYWNlTGFuZG1hcmtzVGlueShjYW52YXMpIC8v7Y6Y7J207Iqk656c65Oc66eI7YGsIOyijO2RnFxyXG4vLyAvLyAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbnMgPSBhd2FpdCByZXNpemVkRGV0ZWN0aW9ucy5sYW5kbWFya3MucG9zaXRpb25zXHJcblxyXG4vLyAvLyAgICAgICAgICAgICBpZiAoIWZhY2VCb2FyZCkge1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgdGVzdEV4cGxhaW4uaW5uZXJIVE1MID0gYO2UvOu2gOyDieydhCDstpTstpwg7KSRIOyeheuLiOuLpC48YnI+IDxzcGFuIHN0eWxlPVwiY29sb3IgOiB5ZWxsb3c7XCI+VGlwIDog7LWc64yA7ZWcIOu5m+ydmCDsmIHtlqXsnYQg67Cb7KeAIOyViuuKlCDqs7Psl5DshJwg7Lih7KCV7ZW067O07IS47JqUITwvc3Bhbj5gXHJcbi8vIC8vICAgICAgICAgICAgICAgICBhd2FpdCBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCkgLy/supTrsoTsiqQg7LSI6riw7ZmUXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBhd2FpdCBmYWNlYXBpLmRyYXcuZHJhd0ZhY2VMYW5kbWFya3MoY2FudmFzLCByZXNpemVkRGV0ZWN0aW9ucykgLy/slrzqtbTsnbjsi50g656c65Oc66eI7YGsIOuTnOuhnOyeiVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgY29uc3QgbGVmdE5vc2UgPSBwb3NpdGlvbnNbMzFdXHJcbi8vIC8vICAgICAgICAgICAgICAgICBjb25zdCBsZWZ0Q2hpbiA9IHBvc2l0aW9uc1syXVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgY29uc3QgbGVmdENoZWVrID0geyB4OiAobGVmdE5vc2UueCArIGxlZnRDaGluLngpIC8gMiwgeTogKGxlZnROb3NlLnkgKyBsZWZ0Q2hpbi55KSAvIDIgfVxyXG5cclxuLy8gLy8gICAgICAgICAgICAgICAgIGNvbnN0IHJpZ2h0Tm9zZSA9IHBvc2l0aW9uc1szNV1cclxuLy8gLy8gICAgICAgICAgICAgICAgIGNvbnN0IHJpZ2h0Q2hpbiA9IHBvc2l0aW9uc1sxNF1cclxuLy8gLy8gICAgICAgICAgICAgICAgIGNvbnN0IHJpZ2h0Q2hlZWsgPSB7IHg6IChyaWdodE5vc2UueCArIHJpZ2h0Q2hpbi54KSAvIDIsIHk6IChyaWdodE5vc2UueSArIHJpZ2h0Q2hpbi55KSAvIDIgfVxyXG5cclxuLy8gLy8gICAgICAgICAgICAgICAgIGNvbnN0IGV5ZUxlbmd0aCA9IChwb3NpdGlvbnNbNDFdLnkgLSBwb3NpdGlvbnNbMzddLnkpXHJcbi8vIC8vICAgICAgICAgICAgICAgICBjb25zdCBleWVNaWRkbGVYID0gKHBvc2l0aW9uc1s0MF0ueCArIHBvc2l0aW9uc1s0MV0ueCkgLyAyXHJcbi8vIC8vICAgICAgICAgICAgICAgICBjb25zdCBsZWZ0VW5kZXJFeWUgPSB7IHg6IGV5ZU1pZGRsZVgsIHk6IHBvc2l0aW9uc1s0MV0ueSArIGV5ZUxlbmd0aCB9XHJcblxyXG4vLyAvLyAgICAgICAgICAgICAgICAgY29uc3QgcmlnaHRFeWVNaWRkbGVYID0gKHBvc2l0aW9uc1s0Nl0ueCArIHBvc2l0aW9uc1s0N10ueCkgLyAyXHJcbi8vIC8vICAgICAgICAgICAgICAgICBjb25zdCByaWdodFVuZGVyRXllID0geyB4OiByaWdodEV5ZU1pZGRsZVgsIHk6IHBvc2l0aW9uc1s0Nl0ueSArIGV5ZUxlbmd0aCB9XHJcblxyXG4vLyAvLyAgICAgICAgICAgICAgICAgY29uc3QgamF3ID0geyB4OiBwb3NpdGlvbnNbOF0ueCwgeTogKHBvc2l0aW9uc1s4XS55ICsgcG9zaXRpb25zWzU3XS55KSAvIDIgfVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UodmlkZW8sIDAsIDAsIGNhbUNhbnZhcy53aWR0aCwgY2FtQ2FudmFzLmhlaWdodCk7XHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBsZXQgZXllQXZnQ29sb3IgPSBjb250ZXh0LmdldEltYWdlRGF0YShjZW50ZXJQdXBpbC54LCBjZW50ZXJQdXBpbC55LCAxLCAxKS5kYXRhXHJcbi8vIC8vICAgICAgICAgICAgICAgICBsZXQgY2hlZWtBdmdDb2xvciA9IGNvbnRleHQuZ2V0SW1hZ2VEYXRhKGxlZnRDaGVlay54LCBsZWZ0Q2hlZWsueSwgMSwgMSkuZGF0YVxyXG5cclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7ZXllQXZnQ29sb3JbMF19LCR7ZXllQXZnQ29sb3JbMV19LCR7ZXllQXZnQ29sb3JbMl19KWBcclxuXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBjdHguZmlsbFJlY3QoMCwgMCwgMTAwLCAxMDApXHJcblxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtjaGVla0F2Z0NvbG9yWzBdfSwke2NoZWVrQXZnQ29sb3JbMV19LCR7Y2hlZWtBdmdDb2xvclsyXX0pYFxyXG5cclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGN0eC5maWxsUmVjdCgwLCAxNTAsIDEwMCwgMTAwKVxyXG5cclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGN0eC5mb250ID0gXCIyMHB4IHNlcmlmXCJcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGN0eC5zdHJva2VUZXh0KFwiaGVsbG8gd29ybGRcIiwgMCwyMClcclxuXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBsZXQgZXllVGV4dENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIilcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGV5ZVRleHRDYW52YXMud2lkdGggPSAxMDBcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGV5ZVRleHRDYW52YXMuaGVpZ2h0ID0gMjVcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGxldCBleWVUZXh0Q29udGV4dCA9IGV5ZVRleHRDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBleWVUZXh0Q29udGV4dC5zY2FsZSgtMSwgMSlcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGV5ZVRleHRDb250ZXh0LmZvbnQgPSBcIjE1cHhcIlxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gZXllVGV4dENvbnRleHQuZmlsbFRleHQoXCLsmKTrpbjsqr0g7ZmN7LGE7IOJXCIsIC03MCwgMjApXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBleWVUZXh0Q29udGV4dC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBjdHgucHV0SW1hZ2VEYXRhKGV5ZVRleHRDb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBleWVUZXh0Q2FudmFzLndpZHRoLCBleWVUZXh0Q2FudmFzLmhlaWdodCksIDAsIDApXHJcblxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gbGV0IGNoZWVrVGV4dENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIilcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGNoZWVrVGV4dENhbnZhcy53aWR0aCA9IDcwXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBjaGVla1RleHRDYW52YXMuaGVpZ2h0ID0gMjVcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGxldCBjaGVla1RleHRDb250ZXh0ID0gY2hlZWtUZXh0Q2FudmFzLmdldENvbnRleHQoXCIyZFwiKVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gY2hlZWtUZXh0Q29udGV4dC5zY2FsZSgtMSwgMSlcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGNoZWVrVGV4dENvbnRleHQuZm9udCA9IFwiMTVweFwiXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBjaGVla1RleHRDb250ZXh0LmZpbGxUZXh0KFwi7Jik66W47Kq9IOuzvCDsg4lcIiwgLTYwLCAyMClcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGNoZWVrVGV4dENvbnRleHQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gY3R4LnB1dEltYWdlRGF0YShjaGVla1RleHRDb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBjaGVla1RleHRDYW52YXMud2lkdGgsIGNoZWVrVGV4dENhbnZhcy5oZWlnaHQpLCAxMDAsIDE1MClcclxuXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBsZXQgZXllUG9pbnRBcmMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBsZXQgZXllUG9pbnRBcmNDdHggPSBleWVQb2ludEFyYy5nZXRDb250ZXh0KCcyZCcpXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBleWVQb2ludEFyYy53aWR0aCA9IDNcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGV5ZVBvaW50QXJjLmhlaWdodCA9IDNcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGV5ZVBvaW50QXJjQ3R4LmJlZ2luUGF0aCgpO1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gZXllUG9pbnRBcmNDdHguYXJjKDEuNSwgMS41LCAxLjUsIDAsIDIgKiBNYXRoLlBJKTtcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGV5ZVBvaW50QXJjQ3R4LmZpbGxTdHlsZSA9ICdyZ2IoMjU1LDAsMCknXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBleWVQb2ludEFyY0N0eC5maWxsKCk7XHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBjdHgucHV0SW1hZ2VEYXRhKGV5ZVBvaW50QXJjQ3R4LmdldEltYWdlRGF0YSgwLCAwLCBleWVQb2ludEFyYy53aWR0aCwgZXllUG9pbnRBcmMuaGVpZ2h0KSwgY2VudGVyUHVwaWwueCwgY2VudGVyUHVwaWwueSlcclxuXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBsZXQgZXllUG9pbnRBcmMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBsZXQgZXllUG9pbnRBcmNDdHggPSBleWVQb2ludEFyYy5nZXRDb250ZXh0KCcyZCcpXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBleWVQb2ludEFyYy53aWR0aCA9IDNcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGV5ZVBvaW50QXJjLmhlaWdodCA9IDNcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGV5ZVBvaW50QXJjQ3R4LmJlZ2luUGF0aCgpO1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gZXllUG9pbnRBcmNDdHguYXJjKDEuNSwgMS41LCAxLjUsIDAsIDIgKiBNYXRoLlBJKTtcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGV5ZVBvaW50QXJjQ3R4LmZpbGxTdHlsZSA9ICdyZ2IoMjU1LDAsMCknXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBleWVQb2ludEFyY0N0eC5maWxsKCk7XHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBhd2FpdCBjdHgucHV0SW1hZ2VEYXRhKGV5ZVBvaW50QXJjQ3R4LmdldEltYWdlRGF0YSgwLCAwLCBleWVQb2ludEFyYy53aWR0aCwgZXllUG9pbnRBcmMuaGVpZ2h0KSwgbGVmdFVuZGVyRXllLngsIGxlZnRVbmRlckV5ZS55KVxyXG5cclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGxldCByaWdodEV5ZVBvaW50QXJjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gbGV0IHJpZ2h0RXllUG9pbnRBcmNDdHggPSByaWdodEV5ZVBvaW50QXJjLmdldENvbnRleHQoJzJkJylcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIHJpZ2h0RXllUG9pbnRBcmMud2lkdGggPSAzXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyByaWdodEV5ZVBvaW50QXJjLmhlaWdodCA9IDNcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIHJpZ2h0RXllUG9pbnRBcmNDdHguYmVnaW5QYXRoKCk7XHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyByaWdodEV5ZVBvaW50QXJjQ3R4LmFyYygxLjUsIDEuNSwgMS41LCAwLCAyICogTWF0aC5QSSk7XHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyByaWdodEV5ZVBvaW50QXJjQ3R4LmZpbGxTdHlsZSA9ICdyZ2IoMjU1LDAsMCknXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyByaWdodEV5ZVBvaW50QXJjQ3R4LmZpbGwoKTtcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGF3YWl0IGN0eC5wdXRJbWFnZURhdGEocmlnaHRFeWVQb2ludEFyY0N0eC5nZXRJbWFnZURhdGEoMCwgMCwgcmlnaHRFeWVQb2ludEFyYy53aWR0aCwgcmlnaHRFeWVQb2ludEFyYy5oZWlnaHQpLCByaWdodFVuZGVyRXllLngsIHJpZ2h0VW5kZXJFeWUueSlcclxuXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBsZXQgY2hlZWtQb2ludEFyYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIilcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGNoZWVrUG9pbnRBcmMud2lkdGggPSAzXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBjaGVla1BvaW50QXJjLmhlaWdodCA9IDNcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGxldCBjaGVla1BvaW50QXJjQ3R4ID0gY2hlZWtQb2ludEFyYy5nZXRDb250ZXh0KCcyZCcpXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBjaGVla1BvaW50QXJjQ3R4LmJlZ2luUGF0aCgpO1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gY2hlZWtQb2ludEFyY0N0eC5hcmMoMS41LCAxLjUsIDEuNSwgMCwgTWF0aC5QSSAqIDIpO1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gY2hlZWtQb2ludEFyY0N0eC5maWxsU3R5bGUgPSAncmdiKDI1NSwwLDApJ1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gY2hlZWtQb2ludEFyY0N0eC5maWxsKCk7XHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBhd2FpdCBjdHgucHV0SW1hZ2VEYXRhKGNoZWVrUG9pbnRBcmNDdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIGNoZWVrUG9pbnRBcmMud2lkdGgsIGNoZWVrUG9pbnRBcmMuaGVpZ2h0KSwgbGVmdENoZWVrLngsIGxlZnRDaGVlay55KVxyXG5cclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGxldCByaWdodENoZWVrUG9pbnRBcmMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyByaWdodENoZWVrUG9pbnRBcmMud2lkdGggPSAzXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyByaWdodENoZWVrUG9pbnRBcmMuaGVpZ2h0ID0gM1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gbGV0IHJpZ2h0Q2hlZWtQb2ludEFyY0N0eCA9IHJpZ2h0Q2hlZWtQb2ludEFyYy5nZXRDb250ZXh0KCcyZCcpXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyByaWdodENoZWVrUG9pbnRBcmNDdHguYmVnaW5QYXRoKCk7XHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyByaWdodENoZWVrUG9pbnRBcmNDdHguYXJjKDEuNSwgMS41LCAxLjUsIDAsIE1hdGguUEkgKiAyKTtcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIHJpZ2h0Q2hlZWtQb2ludEFyY0N0eC5maWxsU3R5bGUgPSAncmdiKDI1NSwwLDApJ1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gcmlnaHRDaGVla1BvaW50QXJjQ3R4LmZpbGwoKTtcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGF3YWl0IGN0eC5wdXRJbWFnZURhdGEocmlnaHRDaGVla1BvaW50QXJjQ3R4LmdldEltYWdlRGF0YSgwLCAwLCByaWdodENoZWVrUG9pbnRBcmMud2lkdGgsIHJpZ2h0Q2hlZWtQb2ludEFyYy5oZWlnaHQpLCByaWdodENoZWVrLngsIHJpZ2h0Q2hlZWsueSlcclxuXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBsZXQgamF3UG9pbnRBcmMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBqYXdQb2ludEFyYy53aWR0aCA9IDNcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGphd1BvaW50QXJjLmhlaWdodCA9IDNcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGxldCBqYWVQb2ludEFyY0N0eCA9IGphd1BvaW50QXJjLmdldENvbnRleHQoJzJkJylcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGphZVBvaW50QXJjQ3R4LmJlZ2luUGF0aCgpO1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gamFlUG9pbnRBcmNDdHguYXJjKDEuNSwgMS41LCAxLjUsIDAsIE1hdGguUEkgKiAyKTtcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGphZVBvaW50QXJjQ3R4LmZpbGxTdHlsZSA9ICdyZ2IoMjU1LDAsMCknXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBqYWVQb2ludEFyY0N0eC5maWxsKCk7XHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBhd2FpdCBjdHgucHV0SW1hZ2VEYXRhKGphZVBvaW50QXJjQ3R4LmdldEltYWdlRGF0YSgwLCAwLCBqYXdQb2ludEFyYy53aWR0aCwgamF3UG9pbnRBcmMuaGVpZ2h0KSwgamF3LngsIGphdy55KVxyXG5cclxuLy8gLy8gICAgICAgICAgICAgICAgIGxldCBsZWZ0RXllU3VtID0gbmV3IGdldENvbG9yRGF0YShsZWZ0VW5kZXJFeWUsIGV5ZUxlbmd0aCwgY29udGV4dClcclxuLy8gLy8gICAgICAgICAgICAgICAgIGxldCByaWdodEV5ZVN1bSA9IG5ldyBnZXRDb2xvckRhdGEocmlnaHRVbmRlckV5ZSwgZXllTGVuZ3RoLCBjb250ZXh0KVxyXG5cclxuLy8gLy8gICAgICAgICAgICAgICAgIGxldCBsZWZ0Q2hlZWtTdW0gPSBuZXcgZ2V0Q29sb3JEYXRhKGxlZnRDaGVlaywgZXllTGVuZ3RoLCBjb250ZXh0KVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgbGV0IHJpZ2h0Q2hlZWtTdW0gPSBuZXcgZ2V0Q29sb3JEYXRhKHJpZ2h0Q2hlZWssIGV5ZUxlbmd0aCwgY29udGV4dClcclxuLy8gLy8gICAgICAgICAgICAgICAgIGxldCBqYXdTdW0gPSBuZXcgZ2V0Q29sb3JEYXRhKGphdywgZXllTGVuZ3RoLCBjb250ZXh0KVxyXG5cclxuLy8gLy8gICAgICAgICAgICAgICAgIGxldCBleWVSZXN1bHQgPSBhd2FpdCBsZWZ0RXllU3VtLm1hcCgoaSwgaWR4KSA9PiB7XHJcbi8vIC8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChpICsgcmlnaHRFeWVTdW1baWR4XSkgLyAyXHJcbi8vIC8vICAgICAgICAgICAgICAgICB9KVxyXG5cclxuLy8gLy8gICAgICAgICAgICAgICAgIGxldCBjaGVla1Jlc3VsdCA9IGF3YWl0IGxlZnRDaGVla1N1bS5tYXAoKGksIGlkeCkgPT4ge1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoaSArIHJpZ2h0Q2hlZWtTdW1baWR4XSkgLyAyXHJcbi8vIC8vICAgICAgICAgICAgICAgICB9KVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgZXllQ29sb3IucHVzaChleWVSZXN1bHQpXHJcbi8vIC8vICAgICAgICAgICAgICAgICBjaGVla0NvbG9yLnB1c2goY2hlZWtSZXN1bHQpXHJcbi8vIC8vICAgICAgICAgICAgICAgICBqYXdDb2xvci5wdXNoKGphd1N1bSlcclxuXHJcbi8vIC8vICAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYigkeyhleWVSZXN1bHRbMF0gKyBjaGVla1Jlc3VsdFswXSArIGphd1N1bVswXSkgLyAzfSwkeyhleWVSZXN1bHRbMV0gKyBjaGVla1Jlc3VsdFsxXSArIGphd1N1bVsxXSkgLyAzfSwkeyhleWVSZXN1bHRbMl0gKyBjaGVla1Jlc3VsdFsyXSArIGphd1N1bVsyXSkgLyAzfSlgXHJcblxyXG4vLyAvLyAgICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCAvIDQsIGNhbnZhcy53aWR0aCAvIDQpXHJcblxyXG4vLyAvLyAgICAgICAgICAgICAgICAgbGV0IGZhY2VDZW50ZXJQb3MgPSBwb3NpdGlvbnNbMjldXHJcblxyXG4vLyAvLyAgICAgICAgICAgICAgICAgbGV0IGxlZnRGYWNlV2lkdGggPSBwb3NpdGlvbnNbMV0ueCAtIGZhY2VDZW50ZXJQb3MueCAgLy/smbzsqr0g67O8IOuEk+ydtFxyXG4vLyAvLyAgICAgICAgICAgICAgICAgbGV0IHJpZ2h0RmFjZVdpZHRoID0gIGZhY2VDZW50ZXJQb3MueCAgLSBwb3NpdGlvbnNbMTVdLnhcclxuLy8gLy8gICAgICAgICAgICAgICAgIGxldCBub3NlVG9Cb3R0b20gPSAocG9zaXRpb25zWzhdLnkgLSBmYWNlQ2VudGVyUG9zLnkpICogMS4xIC8v7L2U67aA7YSwIO2EseuBnSDquLjsnbRcclxuLy8gLy8gICAgICAgICAgICAgICAgIGxldCBvMSA9IE1hdGguYXRhbigocG9zaXRpb25zWzE1XS55LShwb3NpdGlvbnNbMTVdLnkrcG9zaXRpb25zWzFdLnkpLzIpLyhwb3NpdGlvbnNbMTVdLngtcG9zaXRpb25zWzFdLngpKSAvLyDqsIHrj4Qg6rOE7IKwXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBsZXQgZGVncmVlID0gTWF0aC5hYnMobzEgKiAxODAvTWF0aC5QSSlcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8v66eI7Iqk7YGsIOuTnOuhnOyeiVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgYXdhaXQgY3R4LnNhdmUoKTtcclxuLy8gLy8gICAgICAgICAgICAgICAgIGF3YWl0IGN0eC50cmFuc2xhdGUoZmFjZUNlbnRlclBvcy54LCBmYWNlQ2VudGVyUG9zLnkpIC8v6riw7KSA7KCQIOyeoeq4sC4g65Oc66Gc7Jqw6rCAIOyLnOyekeuQmOuKlCDsooztkZzrpbwg6riw7KSA7KCQ7Jy866GcIOyeoeyVhOyVvCDqt7jroKTsp4DripQg67aA67aE66eMIO2ajOyghOydtCDqsIDriqVcclxuLy8gLy8gICAgICAgICAgICAgICAgIGF3YWl0IGN0eC5yb3RhdGUobzEpXHJcbi8vIC8vICAgICAgICAgICAgICAgICBhd2FpdCBjdHgudHJhbnNsYXRlKC1mYWNlQ2VudGVyUG9zLngsIC1mYWNlQ2VudGVyUG9zLnkpIC8v7J207ZuE7JeQIOydtOuvuOyngOulvCDsm5DtlZjripQg7JyE7LmY7JeQIOq3uOumrOq4sCDsnITtlbQg64uk7IucIOy0iOq4sO2ZlO2VtOykjFxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gY3R4LnNjYWxlKC0xLDEpXHJcbi8vIC8vICAgICAgICAgICAgICAgICBhd2FpdCBjdHguZHJhd0ltYWdlKHJpZ2h0TWFzaywgZmFjZUNlbnRlclBvcy54LCBmYWNlQ2VudGVyUG9zLnksIC1yaWdodEZhY2VXaWR0aCwgbm9zZVRvQm90dG9tKVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgYXdhaXQgY3R4LmRyYXdJbWFnZShsZWZ0TWFzaywgZmFjZUNlbnRlclBvcy54KzEsIGZhY2VDZW50ZXJQb3MueSwgbGVmdEZhY2VXaWR0aCwgbm9zZVRvQm90dG9tKVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgYXdhaXQgY3R4LnJlc3RvcmUoKVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gYXdhaXQgY3R4LmRyYXdJbWFnZShsZWZ0TWFzaywgZmFjZUNlbnRlclBvcy54LCBmYWNlQ2VudGVyUG9zLnksIGxlZnRGYWNlV2lkdGgsIG5vc2VUb0JvdHRvbSlcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGF3YWl0IGN0eC5kcmF3SW1hZ2UocmlnaHRNYXNrLCBmYWNlQ2VudGVyUG9zLngsIGZhY2VDZW50ZXJQb3MueSwgLXJpZ2h0RmFjZVdpZHRoLCBub3NlVG9Cb3R0b20pXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBjb2xvclN1bS5leWUgPSBhd2FpdCBmaW5hbFJlc3VsdFswXS5tYXAoKGksIGlkeCkgPT4ge1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gICAgIGlmKGNvbG9yU3VtLmV5ZSkgcmV0dXJuICBjb2xvclN1bS5leWVbaWR4XSArIGlcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vICAgICBlbHNlIHJldHVybiAgaVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gICAgIC8vIHJldHVybiAoY29sb3JTdW0uZXllID8gY29sb3JTdW0uZXllW2lkeF0gOiAwKSArIGlcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIH0pXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBjb2xvclN1bS5jaGVlayA9IGF3YWl0IGZpbmFsUmVzdWx0WzFdLm1hcCgoaSwgaWR4KSA9PiB7XHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyAgICAgaWYoY29sb3JTdW0uY2hlZWspIHJldHVybiAgY29sb3JTdW0uY2hlZWtbaWR4XSArIGlcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vICAgICBlbHNlIHJldHVybiAgaVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gfSlcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGNvbG9yU3VtLmphdyA9IGF3YWl0IGZpbmFsUmVzdWx0WzJdLm1hcCgoaSwgaWR4KSA9PiB7XHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIChjb2xvclN1bS5qYXcgPyBjb2xvclN1bS5leWVbaWR4XSA6IDApICsgaVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gfSlcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGxldCBjaGVla1BvaW50QXJjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gY2hlZWtQb2ludEFyYy53aWR0aCA9IDNcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGNoZWVrUG9pbnRBcmMuaGVpZ2h0ID0gM1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gbGV0IGNoZWVrUG9pbnRBcmNDdHggPSBjaGVla1BvaW50QXJjLmdldENvbnRleHQoJzJkJylcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGNoZWVrUG9pbnRBcmNDdHguYmVnaW5QYXRoKCk7XHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBjaGVla1BvaW50QXJjQ3R4LmFyYygxLjUsIDEuNSwgMS41LCAwLCBNYXRoLlBJICogMik7XHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBjaGVla1BvaW50QXJjQ3R4LmZpbGxTdHlsZSA9ICdyZ2IoMjU1LDAsMCknXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBjaGVla1BvaW50QXJjQ3R4LmZpbGwoKTtcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vIGN0eC5wdXRJbWFnZURhdGEoY2hlZWtQb2ludEFyY0N0eC5nZXRJbWFnZURhdGEoMCwgMCwgY2hlZWtQb2ludEFyYy53aWR0aCwgY2hlZWtQb2ludEFyYy5oZWlnaHQpLCBsZWZ0Q2hlZWsueCwgbGVmdENoZWVrLnkpXHJcbi8vIC8vICAgICAgICAgICAgICAgICAvLyBjb2xvclN1bS5mb3JFYWNoKChpLCBpZHgpID0+IHtcclxuLy8gLy8gICAgICAgICAgICAgICAgIC8vICAgICBjb2xvclN1bVtpZHhdICs9IGNoZWVrQXZnQ29sb3JbaWR4XVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgLy8gfSlcclxuLy8gLy8gICAgICAgICAgICAgICAgIGlmIChjbnQgPCAzMSkge1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZ3Jlc3NCYXJcIikuc3R5bGUud2lkdGggPSBjbnQqMiArIFwiJVwiXHJcbi8vIC8vICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZ3Jlc3NwZXJjZW50XCIpLmlubmVyVGV4dCA9IGNudCoyICsgXCIlXCJcclxuLy8gLy8gICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtZmxleFwiXHJcbi8vIC8vICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDM7IGkgPj0gMDsgaS0tKSB7XHJcbi8vIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBjbnQgKiAzLjNcclxuLy8gLy8gICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByb2dyZXNzVW5pdCA9IHJlc3VsdC50b0ZpeGVkKDEpIC0gaVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9IHByb2dyZXNzVW5pdCArIFwiJVwiXHJcbi8vIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHBlcmNlbnQuaW5uZXJUZXh0ID0gcHJvZ3Jlc3NVbml0ICsgXCIlXCJcclxuLy8gLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNudCA9PT0gMzApIHtcclxuLy8gLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gXCIxMDAlXCJcclxuLy8gLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcmNlbnQuaW5uZXJUZXh0ID0gXCIxMDAlXCJcclxuLy8gLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gLy8gICAgICAgICAgICAgfVxyXG4vLyAvLyAgICAgICAgICAgICBlbHNlIHtcclxuLy8gLy8gICAgICAgICAgICAgICAgIGlmICh0ZXN0RXhwbGFpbilcclxuLy8gLy8gICAgICAgICAgICAgICAgICAgICB0ZXN0RXhwbGFpbi5pbm5lclRleHQgPSBcIuqwgOyepSDslrzqtbTsnbQg7ZmU7IKs7ZW07KeA64qUIO2VhO2EsOulvCDtmZXsnbgg7ZuEIOqysOqzvCDtmZXsnbgg67KE7Yq87J2EIOuIjOufrOyjvOyEuOyalFwiXHJcbi8vIC8vICAgICAgICAgICAgICAgICBsZXQgY29sb3JSZ2IgPSBzdG9yZS5nZXRTdGF0ZSgpLkNvbG9yUmVkdWNlci5tYWluRmFjZUJvYXJkQ29sb3JcclxuLy8gLy8gICAgICAgICAgICAgICAgIG5ldyBGYWNlQm9hcmQocG9zaXRpb25zLCBjb2xvclJnYiwgY2FudmFzKVxyXG4vLyAvLyAgICAgICAgICAgICB9XHJcblxyXG4vLyAvLyAgICAgICAgIH0gZWxzZSB7XHJcbi8vIC8vICAgICAgICAgICAgIGF3YWl0IGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxyXG4vLyAvLyAgICAgICAgICAgICBpZiAodGVzdEV4cGxhaW4pXHJcbi8vIC8vICAgICAgICAgICAgICAgICB0ZXN0RXhwbGFpbi5pbm5lckhUTUwgPSBg7Ja86rW07J2EIOyduOyLne2VoCDsiJgg7J6I64+E66GdIOy5tOuplOudvOulvCDrsJTrnbzrtJDso7zshLjsmpQuPGJyPiA8c3BhbiBzdHlsZT1cImNvbG9yIDogeWVsbG93O1wiPlRpcCA6IOy1nOuMgO2VnCDruZvsnZgg7JiB7Zal7J2EIOuwm+yngCDslYrripQg6rOz7JeQ7IScIOy4oeygle2VtOuztOyEuOyalCE8L3NwYW4+YFxyXG4vLyAvLyAgICAgICAgIH1cclxuLy8gLy8gICAgICAgICBhbmkgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGVzdClcclxuLy8gLy8gICAgIH1cclxuXHJcbi8vIC8vICAgICAvLyBpbnRlcnZhbCA9IHNldEludGVydmFsKGFzeW5jICgpID0+IHtcclxuXHJcbi8vIC8vICAgICAvLyAgICAgY29uc3QgZGV0ZWN0aW9ucyA9IGF3YWl0IGZhY2VhcGkuZGV0ZWN0U2luZ2xlRmFjZSh2aWRlbywgbmV3IGZhY2VhcGkuVGlueUZhY2VEZXRlY3Rvck9wdGlvbnMoKSkud2l0aEZhY2VMYW5kbWFya3ModHJ1ZSkgLy92aWRlbyDsuqHss5Drs7gg7Ja86rW07J247IudIOygleuztCAg7IKs7J207KaI66W8IOunnuy2lOq4sCDsoITsnbTquLDrlYzrrLjsl5Ag7KKM7ZGc6rCS7J20IOuLpOultOuLpFxyXG4vLyAvLyAgICAgLy8gICAgIGxldCByZXNpemVkRGV0ZWN0aW9uc1xyXG4vLyAvLyAgICAgLy8gICAgIGxvYWRpbmcuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4vLyAvLyAgICAgLy8gICAgIGlmIChkZXRlY3Rpb25zKSB7XHJcblxyXG4vLyAvLyAgICAgLy8gICAgICAgICBjbnQrK1xyXG5cclxuLy8gLy8gICAgIC8vICAgICAgICAgaWYgKGNudCA9PSAzMSAmJiAhZmFjZUJvYXJkKSB7XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgY2FudmFzLnJlbW92ZSgpXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICBjb2xvclN1bS5leWUgPSBleWVDb2xvci5yZWR1Y2UoKGEsYik9PntcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4gW2FbMF0rYlswXSwgYVsxXStiWzFdLCBhWzJdK2JbMl1dXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICB9KVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgY29sb3JTdW0uY2hlZWsgPSBjaGVla0NvbG9yLnJlZHVjZSgoYSxiKT0+e1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiBbYVswXStiWzBdLCBhWzFdK2JbMV0sIGFbMl0rYlsyXV1cclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIH0pXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICBjb2xvclN1bS5qYXcgPSBqYXdDb2xvci5yZWR1Y2UoKGEsYik9PntcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4gW2FbMF0rYlswXSwgYVsxXStiWzFdLCBhWzJdK2JbMl1dXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICB9KVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgZm9yKGxldCBrZXkgaW4gY29sb3JTdW0pe1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgICAgIGNvbG9yU3VtW2tleV0gPSBjb2xvclN1bVtrZXldLm1hcChpPT5pLzMwKVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgfVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgdGhyb3R0bGVyLnRocm90dGxlKCgpID0+IHtcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgICAgICB2aWRlby5wYXVzZSgpXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAgICAgYXhpb3MucG9zdCgnaHR0cHM6Ly90ZW5zb3Itc2VydmVyLmhlcm9rdWFwcC5jb20vZ2V0U2Vhc29uJywgY29sb3JTdW0pXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAgICAgLnRoZW4ocmVzPT57XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJlcy5kYXRhKS5jbGljaygpXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAgICAgfSlcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyPT57XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgICAgICB9KVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgfSwgNTAwKVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgcmV0dXJuXHJcbi8vIC8vICAgICAvLyAgICAgICAgIH1cclxuLy8gLy8gICAgIC8vICAgICAgICAgaWYoY250ID4zMSAmJiAhZmFjZUJvYXJkKSByZXR1cm5cclxuXHJcbi8vIC8vICAgICAvLyAgICAgICAgIHJlc2l6ZWREZXRlY3Rpb25zID0gYXdhaXQgZmFjZWFwaS5yZXNpemVSZXN1bHRzKGRldGVjdGlvbnMsIGRpc3BsYXlTaXplKSAvL2RldGVjdGlvbnPrpbwgZGlzcGxheXNpemXsl5Ag66ee7LaYIOqysOqzvOqwklxyXG4vLyAvLyAgICAgLy8gICAgICAgICAvLyBhd2FpdCBmYWNlYXBpLmRyYXcuZHJhd0RldGVjdGlvbnMoY2FudmFzLCByZXNpemVkRGV0ZWN0aW9ucykgLy/slrzqtbTsnbjsi50g7IKs6rCB7ZiVIOuwleyKpCDrk5zroZzsnolcclxuXHJcbi8vIC8vICAgICAvLyAgICAgICAgIC8vIGNvbnN0IGxhbmRtYXJrID0gYXdhaXQgZmFjZWFwaS5kZXRlY3RGYWNlTGFuZG1hcmtzVGlueShjYW52YXMpIC8v7Y6Y7J207Iqk656c65Oc66eI7YGsIOyijO2RnFxyXG4vLyAvLyAgICAgLy8gICAgICAgICBjb25zdCBwb3NpdGlvbnMgPSBhd2FpdCByZXNpemVkRGV0ZWN0aW9ucy5sYW5kbWFya3MucG9zaXRpb25zXHJcblxyXG4vLyAvLyAgICAgLy8gICAgICAgICBpZiAoIWZhY2VCb2FyZCkge1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXN0RXhwbGFpblwiKS5pbm5lckhUTUwgPSBg7ZS867aA7IOJ7J2EIOy2lOy2nCDspJEg7J6F64uI64ukLjxicj4gPHNwYW4gc3R5bGU9XCJjb2xvciA6IHllbGxvdztcIj5UaXAgOiDstZzrjIDtlZwg67mb7J2YIOyYge2WpeydhCDrsJvsp4Ag7JWK64qUIOqzs+yXkOyEnCDsuKHsoJXtlbTrs7TshLjsmpQhPC9zcGFuPmBcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIGF3YWl0IGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KSAvL+y6lOuyhOyKpCDstIjquLDtmZRcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIGF3YWl0IGZhY2VhcGkuZHJhdy5kcmF3RmFjZUxhbmRtYXJrcyhjYW52YXMsIHJlc2l6ZWREZXRlY3Rpb25zKSAvL+yWvOq1tOyduOyLnSDrnpzrk5zrp4jtgawg65Oc66Gc7J6JXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICBjb25zdCBsZWZ0Tm9zZSA9IHBvc2l0aW9uc1szMV1cclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIGNvbnN0IGxlZnRDaGluID0gcG9zaXRpb25zWzJdXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICBjb25zdCBsZWZ0Q2hlZWsgPSB7IHg6IChsZWZ0Tm9zZS54ICsgbGVmdENoaW4ueCkgLyAyLCB5OiAobGVmdE5vc2UueSArIGxlZnRDaGluLnkpIC8gMiB9XHJcblxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgY29uc3QgcmlnaHROb3NlID0gcG9zaXRpb25zWzM1XVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgY29uc3QgcmlnaHRDaGluID0gcG9zaXRpb25zWzE0XVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgY29uc3QgcmlnaHRDaGVlayA9IHsgeDogKHJpZ2h0Tm9zZS54ICsgcmlnaHRDaGluLngpIC8gMiwgeTogKHJpZ2h0Tm9zZS55ICsgcmlnaHRDaGluLnkpIC8gMiB9XHJcblxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgY29uc3QgZXllTGVuZ3RoID0gKHBvc2l0aW9uc1s0MV0ueSAtIHBvc2l0aW9uc1szN10ueSlcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIGNvbnN0IGV5ZU1pZGRsZVggPSAocG9zaXRpb25zWzQwXS54ICsgcG9zaXRpb25zWzQxXS54KSAvIDJcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIGNvbnN0IGxlZnRVbmRlckV5ZSA9IHsgeDogZXllTWlkZGxlWCwgeTogcG9zaXRpb25zWzQxXS55ICsgZXllTGVuZ3RoIH1cclxuXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICBjb25zdCByaWdodEV5ZU1pZGRsZVggPSAocG9zaXRpb25zWzQ2XS54ICsgcG9zaXRpb25zWzQ3XS54KSAvIDJcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIGNvbnN0IHJpZ2h0VW5kZXJFeWUgPSB7IHg6IHJpZ2h0RXllTWlkZGxlWCwgeTogcG9zaXRpb25zWzQ2XS55ICsgZXllTGVuZ3RoIH1cclxuXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICBjb25zdCBqYXcgPSB7IHg6IHBvc2l0aW9uc1s4XS54LCB5OiAocG9zaXRpb25zWzhdLnkgKyBwb3NpdGlvbnNbNTddLnkpIC8gMiB9XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh2aWRlbywgMCwgMCwgY2FtQ2FudmFzLndpZHRoLCBjYW1DYW52YXMuaGVpZ2h0KTtcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGxldCBleWVBdmdDb2xvciA9IGNvbnRleHQuZ2V0SW1hZ2VEYXRhKGNlbnRlclB1cGlsLngsIGNlbnRlclB1cGlsLnksIDEsIDEpLmRhdGFcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIGxldCBjaGVla0F2Z0NvbG9yID0gY29udGV4dC5nZXRJbWFnZURhdGEobGVmdENoZWVrLngsIGxlZnRDaGVlay55LCAxLCAxKS5kYXRhXHJcblxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtleWVBdmdDb2xvclswXX0sJHtleWVBdmdDb2xvclsxXX0sJHtleWVBdmdDb2xvclsyXX0pYFxyXG5cclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGN0eC5maWxsUmVjdCgwLCAwLCAxMDAsIDEwMClcclxuXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBjdHguZmlsbFN0eWxlID0gYHJnYigke2NoZWVrQXZnQ29sb3JbMF19LCR7Y2hlZWtBdmdDb2xvclsxXX0sJHtjaGVla0F2Z0NvbG9yWzJdfSlgXHJcblxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gY3R4LmZpbGxSZWN0KDAsIDE1MCwgMTAwLCAxMDApXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke2NoZWVrQXZnQ29sb3JbMF19LCR7Y2hlZWtBdmdDb2xvclsxXX0sJHtjaGVla0F2Z0NvbG9yWzJdfSlgXHJcblxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCAvIDQsIGNhbnZhcy53aWR0aCAvIDQpXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBjdHguZm9udCA9IFwiMjBweCBzZXJpZlwiXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBjdHguc3Ryb2tlVGV4dChcImhlbGxvIHdvcmxkXCIsIDAsMjApXHJcblxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gbGV0IGV5ZVRleHRDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBleWVUZXh0Q2FudmFzLndpZHRoID0gMTAwXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBleWVUZXh0Q2FudmFzLmhlaWdodCA9IDI1XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBsZXQgZXllVGV4dENvbnRleHQgPSBleWVUZXh0Q2FudmFzLmdldENvbnRleHQoXCIyZFwiKVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gZXllVGV4dENvbnRleHQuc2NhbGUoLTEsIDEpXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBleWVUZXh0Q29udGV4dC5mb250ID0gXCIxNXB4XCJcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGV5ZVRleHRDb250ZXh0LmZpbGxUZXh0KFwi7Jik66W47Kq9IO2ZjeyxhOyDiVwiLCAtNzAsIDIwKVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gZXllVGV4dENvbnRleHQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gY3R4LnB1dEltYWdlRGF0YShleWVUZXh0Q29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgZXllVGV4dENhbnZhcy53aWR0aCwgZXllVGV4dENhbnZhcy5oZWlnaHQpLCAwLCAwKVxyXG5cclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGxldCBjaGVla1RleHRDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBjaGVla1RleHRDYW52YXMud2lkdGggPSA3MFxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gY2hlZWtUZXh0Q2FudmFzLmhlaWdodCA9IDI1XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBsZXQgY2hlZWtUZXh0Q29udGV4dCA9IGNoZWVrVGV4dENhbnZhcy5nZXRDb250ZXh0KFwiMmRcIilcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGNoZWVrVGV4dENvbnRleHQuc2NhbGUoLTEsIDEpXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBjaGVla1RleHRDb250ZXh0LmZvbnQgPSBcIjE1cHhcIlxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gY2hlZWtUZXh0Q29udGV4dC5maWxsVGV4dChcIuyYpOuluOyqvSDrs7wg7IOJXCIsIC02MCwgMjApXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBjaGVla1RleHRDb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGN0eC5wdXRJbWFnZURhdGEoY2hlZWtUZXh0Q29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgY2hlZWtUZXh0Q2FudmFzLndpZHRoLCBjaGVla1RleHRDYW52YXMuaGVpZ2h0KSwgMTAwLCAxNTApXHJcblxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gbGV0IGV5ZVBvaW50QXJjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gbGV0IGV5ZVBvaW50QXJjQ3R4ID0gZXllUG9pbnRBcmMuZ2V0Q29udGV4dCgnMmQnKVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gZXllUG9pbnRBcmMud2lkdGggPSAzXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBleWVQb2ludEFyYy5oZWlnaHQgPSAzXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBleWVQb2ludEFyY0N0eC5iZWdpblBhdGgoKTtcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGV5ZVBvaW50QXJjQ3R4LmFyYygxLjUsIDEuNSwgMS41LCAwLCAyICogTWF0aC5QSSk7XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBleWVQb2ludEFyY0N0eC5maWxsU3R5bGUgPSAncmdiKDI1NSwwLDApJ1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gZXllUG9pbnRBcmNDdHguZmlsbCgpO1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gY3R4LnB1dEltYWdlRGF0YShleWVQb2ludEFyY0N0eC5nZXRJbWFnZURhdGEoMCwgMCwgZXllUG9pbnRBcmMud2lkdGgsIGV5ZVBvaW50QXJjLmhlaWdodCksIGNlbnRlclB1cGlsLngsIGNlbnRlclB1cGlsLnkpXHJcblxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gbGV0IGV5ZVBvaW50QXJjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gbGV0IGV5ZVBvaW50QXJjQ3R4ID0gZXllUG9pbnRBcmMuZ2V0Q29udGV4dCgnMmQnKVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gZXllUG9pbnRBcmMud2lkdGggPSAzXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBleWVQb2ludEFyYy5oZWlnaHQgPSAzXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBleWVQb2ludEFyY0N0eC5iZWdpblBhdGgoKTtcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGV5ZVBvaW50QXJjQ3R4LmFyYygxLjUsIDEuNSwgMS41LCAwLCAyICogTWF0aC5QSSk7XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBleWVQb2ludEFyY0N0eC5maWxsU3R5bGUgPSAncmdiKDI1NSwwLDApJ1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gZXllUG9pbnRBcmNDdHguZmlsbCgpO1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gYXdhaXQgY3R4LnB1dEltYWdlRGF0YShleWVQb2ludEFyY0N0eC5nZXRJbWFnZURhdGEoMCwgMCwgZXllUG9pbnRBcmMud2lkdGgsIGV5ZVBvaW50QXJjLmhlaWdodCksIGxlZnRVbmRlckV5ZS54LCBsZWZ0VW5kZXJFeWUueSlcclxuXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBsZXQgcmlnaHRFeWVQb2ludEFyYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIilcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGxldCByaWdodEV5ZVBvaW50QXJjQ3R4ID0gcmlnaHRFeWVQb2ludEFyYy5nZXRDb250ZXh0KCcyZCcpXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyByaWdodEV5ZVBvaW50QXJjLndpZHRoID0gM1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gcmlnaHRFeWVQb2ludEFyYy5oZWlnaHQgPSAzXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyByaWdodEV5ZVBvaW50QXJjQ3R4LmJlZ2luUGF0aCgpO1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gcmlnaHRFeWVQb2ludEFyY0N0eC5hcmMoMS41LCAxLjUsIDEuNSwgMCwgMiAqIE1hdGguUEkpO1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gcmlnaHRFeWVQb2ludEFyY0N0eC5maWxsU3R5bGUgPSAncmdiKDI1NSwwLDApJ1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gcmlnaHRFeWVQb2ludEFyY0N0eC5maWxsKCk7XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBhd2FpdCBjdHgucHV0SW1hZ2VEYXRhKHJpZ2h0RXllUG9pbnRBcmNDdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHJpZ2h0RXllUG9pbnRBcmMud2lkdGgsIHJpZ2h0RXllUG9pbnRBcmMuaGVpZ2h0KSwgcmlnaHRVbmRlckV5ZS54LCByaWdodFVuZGVyRXllLnkpXHJcblxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gbGV0IGNoZWVrUG9pbnRBcmMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBjaGVla1BvaW50QXJjLndpZHRoID0gM1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gY2hlZWtQb2ludEFyYy5oZWlnaHQgPSAzXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBsZXQgY2hlZWtQb2ludEFyY0N0eCA9IGNoZWVrUG9pbnRBcmMuZ2V0Q29udGV4dCgnMmQnKVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gY2hlZWtQb2ludEFyY0N0eC5iZWdpblBhdGgoKTtcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGNoZWVrUG9pbnRBcmNDdHguYXJjKDEuNSwgMS41LCAxLjUsIDAsIE1hdGguUEkgKiAyKTtcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGNoZWVrUG9pbnRBcmNDdHguZmlsbFN0eWxlID0gJ3JnYigyNTUsMCwwKSdcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGNoZWVrUG9pbnRBcmNDdHguZmlsbCgpO1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gYXdhaXQgY3R4LnB1dEltYWdlRGF0YShjaGVla1BvaW50QXJjQ3R4LmdldEltYWdlRGF0YSgwLCAwLCBjaGVla1BvaW50QXJjLndpZHRoLCBjaGVla1BvaW50QXJjLmhlaWdodCksIGxlZnRDaGVlay54LCBsZWZ0Q2hlZWsueSlcclxuXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBsZXQgcmlnaHRDaGVla1BvaW50QXJjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gcmlnaHRDaGVla1BvaW50QXJjLndpZHRoID0gM1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gcmlnaHRDaGVla1BvaW50QXJjLmhlaWdodCA9IDNcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGxldCByaWdodENoZWVrUG9pbnRBcmNDdHggPSByaWdodENoZWVrUG9pbnRBcmMuZ2V0Q29udGV4dCgnMmQnKVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gcmlnaHRDaGVla1BvaW50QXJjQ3R4LmJlZ2luUGF0aCgpO1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gcmlnaHRDaGVla1BvaW50QXJjQ3R4LmFyYygxLjUsIDEuNSwgMS41LCAwLCBNYXRoLlBJICogMik7XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyByaWdodENoZWVrUG9pbnRBcmNDdHguZmlsbFN0eWxlID0gJ3JnYigyNTUsMCwwKSdcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIHJpZ2h0Q2hlZWtQb2ludEFyY0N0eC5maWxsKCk7XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBhd2FpdCBjdHgucHV0SW1hZ2VEYXRhKHJpZ2h0Q2hlZWtQb2ludEFyY0N0eC5nZXRJbWFnZURhdGEoMCwgMCwgcmlnaHRDaGVla1BvaW50QXJjLndpZHRoLCByaWdodENoZWVrUG9pbnRBcmMuaGVpZ2h0KSwgcmlnaHRDaGVlay54LCByaWdodENoZWVrLnkpXHJcblxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gbGV0IGphd1BvaW50QXJjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gamF3UG9pbnRBcmMud2lkdGggPSAzXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBqYXdQb2ludEFyYy5oZWlnaHQgPSAzXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBsZXQgamFlUG9pbnRBcmNDdHggPSBqYXdQb2ludEFyYy5nZXRDb250ZXh0KCcyZCcpXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBqYWVQb2ludEFyY0N0eC5iZWdpblBhdGgoKTtcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGphZVBvaW50QXJjQ3R4LmFyYygxLjUsIDEuNSwgMS41LCAwLCBNYXRoLlBJICogMik7XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBqYWVQb2ludEFyY0N0eC5maWxsU3R5bGUgPSAncmdiKDI1NSwwLDApJ1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gamFlUG9pbnRBcmNDdHguZmlsbCgpO1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gYXdhaXQgY3R4LnB1dEltYWdlRGF0YShqYWVQb2ludEFyY0N0eC5nZXRJbWFnZURhdGEoMCwgMCwgamF3UG9pbnRBcmMud2lkdGgsIGphd1BvaW50QXJjLmhlaWdodCksIGphdy54LCBqYXcueSlcclxuXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICBsZXQgbGVmdEV5ZVN1bSA9IG5ldyBnZXRDb2xvckRhdGEobGVmdFVuZGVyRXllLCBleWVMZW5ndGgsIGNvbnRleHQpXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICBsZXQgcmlnaHRFeWVTdW0gPSBuZXcgZ2V0Q29sb3JEYXRhKHJpZ2h0VW5kZXJFeWUsIGV5ZUxlbmd0aCwgY29udGV4dClcclxuXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICBsZXQgbGVmdENoZWVrU3VtID0gbmV3IGdldENvbG9yRGF0YShsZWZ0Q2hlZWssIGV5ZUxlbmd0aCwgY29udGV4dClcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIGxldCByaWdodENoZWVrU3VtID0gbmV3IGdldENvbG9yRGF0YShyaWdodENoZWVrLCBleWVMZW5ndGgsIGNvbnRleHQpXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICBsZXQgamF3U3VtID0gbmV3IGdldENvbG9yRGF0YShqYXcsIGV5ZUxlbmd0aCwgY29udGV4dClcclxuXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICBsZXQgZXllUmVzdWx0ID0gYXdhaXQgbGVmdEV5ZVN1bS5tYXAoKGksIGlkeCkgPT4ge1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiBpICsgcmlnaHRFeWVTdW1baWR4XVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgfSlcclxuXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICBsZXQgY2hlZWtSZXN1bHQgPSBhd2FpdCBsZWZ0Q2hlZWtTdW0ubWFwKChpLCBpZHgpID0+IHtcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4gaSArIHJpZ2h0Q2hlZWtTdW1baWR4XVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgfSlcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIGV5ZUNvbG9yLnB1c2goZXllUmVzdWx0Lm1hcChpID0+IGkgLz0gMikpXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICBjaGVla0NvbG9yLnB1c2goY2hlZWtSZXN1bHQubWFwKGkgPT4gaSAvPSAyKSlcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIGphd0NvbG9yLnB1c2goamF3U3VtKVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gY29sb3JTdW0uZXllID0gYXdhaXQgZmluYWxSZXN1bHRbMF0ubWFwKChpLCBpZHgpID0+IHtcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vICAgICBpZihjb2xvclN1bS5leWUpIHJldHVybiAgY29sb3JTdW0uZXllW2lkeF0gKyBpXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyAgICAgZWxzZSByZXR1cm4gIGlcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vICAgICAvLyByZXR1cm4gKGNvbG9yU3VtLmV5ZSA/IGNvbG9yU3VtLmV5ZVtpZHhdIDogMCkgKyBpXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyB9KVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gY29sb3JTdW0uY2hlZWsgPSBhd2FpdCBmaW5hbFJlc3VsdFsxXS5tYXAoKGksIGlkeCkgPT4ge1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gICAgIGlmKGNvbG9yU3VtLmNoZWVrKSByZXR1cm4gIGNvbG9yU3VtLmNoZWVrW2lkeF0gKyBpXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyAgICAgZWxzZSByZXR1cm4gIGlcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIH0pXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBjb2xvclN1bS5qYXcgPSBhd2FpdCBmaW5hbFJlc3VsdFsyXS5tYXAoKGksIGlkeCkgPT4ge1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gICAgIHJldHVybiAoY29sb3JTdW0uamF3ID8gY29sb3JTdW0uZXllW2lkeF0gOiAwKSArIGlcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIH0pXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBsZXQgY2hlZWtQb2ludEFyYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIilcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGNoZWVrUG9pbnRBcmMud2lkdGggPSAzXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBjaGVla1BvaW50QXJjLmhlaWdodCA9IDNcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIGxldCBjaGVla1BvaW50QXJjQ3R4ID0gY2hlZWtQb2ludEFyYy5nZXRDb250ZXh0KCcyZCcpXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBjaGVla1BvaW50QXJjQ3R4LmJlZ2luUGF0aCgpO1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gY2hlZWtQb2ludEFyY0N0eC5hcmMoMS41LCAxLjUsIDEuNSwgMCwgTWF0aC5QSSAqIDIpO1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gY2hlZWtQb2ludEFyY0N0eC5maWxsU3R5bGUgPSAncmdiKDI1NSwwLDApJ1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gY2hlZWtQb2ludEFyY0N0eC5maWxsKCk7XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyBjdHgucHV0SW1hZ2VEYXRhKGNoZWVrUG9pbnRBcmNDdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIGNoZWVrUG9pbnRBcmMud2lkdGgsIGNoZWVrUG9pbnRBcmMuaGVpZ2h0KSwgbGVmdENoZWVrLngsIGxlZnRDaGVlay55KVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgLy8gY29sb3JTdW0uZm9yRWFjaCgoaSwgaWR4KSA9PiB7XHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAvLyAgICAgY29sb3JTdW1baWR4XSArPSBjaGVla0F2Z0NvbG9yW2lkeF1cclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIC8vIH0pXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICBpZiAoY250IDwgMzEpIHtcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2dyZXNzQmFyXCIpLnN0eWxlLndpZHRoID0gY250KjIgKyBcIiVcIlxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgICAgIC8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2dyZXNzcGVyY2VudFwiKS5pbm5lclRleHQgPSBjbnQqMiArIFwiJVwiXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWZsZXhcIlxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAzOyBpID49IDA7IGktLSkge1xyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gY250ICogMy4zXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9ncmVzc1VuaXQgPSByZXN1bHQudG9GaXhlZCgxKSAtaVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9IHByb2dyZXNzVW5pdCArIFwiJVwiXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHBlcmNlbnQuaW5uZXJUZXh0ID0gcHJvZ3Jlc3NVbml0ICsgXCIlXCJcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWYgKGNudCA9PT0gMzApIHtcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gXCIxMDAlXCJcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHBlcmNlbnQuaW5uZXJUZXh0ID0gXCIxMDAlXCJcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIH1cclxuLy8gLy8gICAgIC8vICAgICAgICAgfVxyXG4vLyAvLyAgICAgLy8gICAgICAgICBlbHNlIHtcclxuLy8gLy8gICAgIC8vICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVzdEV4cGxhaW5cIikuaW5uZXJUZXh0ID0gXCLqsIDsnqUg7Ja86rW07J20IO2ZlOyCrO2VtOyngOuKlCDtlYTthLDrpbwg7ZmV7J24IO2bhCDqsrDqs7wg7ZmV7J24IOuyhO2KvOydhCDriIzrn6zso7zshLjsmpRcIlxyXG4vLyAvLyAgICAgLy8gICAgICAgICAgICAgbGV0IGNvbG9yUmdiID0gc3RvcmUuZ2V0U3RhdGUoKS5Db2xvclJlZHVjZXIubWFpbkZhY2VCb2FyZENvbG9yXHJcbi8vIC8vICAgICAvLyAgICAgICAgICAgICBuZXcgRmFjZUJvYXJkKHBvc2l0aW9ucywgY29sb3JSZ2IsIGNhbnZhcylcclxuLy8gLy8gICAgIC8vICAgICAgICAgfVxyXG5cclxuLy8gLy8gICAgIC8vICAgICB9IGVsc2Uge1xyXG4vLyAvLyAgICAgLy8gICAgICAgICBhd2FpdCBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcclxuLy8gLy8gICAgIC8vICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXN0RXhwbGFpblwiKS5pbm5lckhUTUwgPSBg7Ja86rW07J2EIOyduOyLne2VoCDsiJgg7J6I64+E66GdIOy5tOuplOudvOulvCDrsJTrnbzrtJDso7zshLjsmpQuPGJyPiA8c3BhbiBzdHlsZT1cImNvbG9yIDogeWVsbG93O1wiPlRpcCA6IOy1nOuMgO2VnCDruZvsnZgg7JiB7Zal7J2EIOuwm+yngCDslYrripQg6rOz7JeQ7IScIOy4oeygle2VtOuztOyEuOyalCE8L3NwYW4+YFxyXG4vLyAvLyAgICAgLy8gICAgIH1cclxuXHJcbi8vIC8vICAgICAvLyB9LCAxMDApXHJcbi8vIC8vIH1cclxuXHJcbi8vIGltcG9ydCAqIGFzIGZhY2VMYW5kbWFya3NEZXRlY3Rpb24gZnJvbSAnQHRlbnNvcmZsb3ctbW9kZWxzL2ZhY2UtbGFuZG1hcmtzLWRldGVjdGlvbic7XHJcbi8vIGltcG9ydCAqIGFzIHRmIGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZSc7XHJcbi8vIGltcG9ydCAnQHRlbnNvcmZsb3cvdGZqcy1iYWNrZW5kLXdlYmdsJztcclxuLy8gaW1wb3J0IHsgbW9kZWwgfSBmcm9tICcuLi8uLi9wYWdlcy9fYXBwJztcclxuLy8gaW1wb3J0IE1hc2tEcmF3IGZyb20gJy4vTWFza0RyYXcnO1xyXG4vLyBpbXBvcnQgeyBhY3Rpb25DcmVhdG9ycyB9IGZyb20gJy4uLy4uL3N0b3JlL2NvbG9yU3RvcmUnO1xyXG4vLyBpbXBvcnQgZ2V0RGV2aWNlVHlwZSBmcm9tICcuL2dldERldmljZVR5cGUnO1xyXG4vLyAvLyBpbXBvcnQgeyBjYW52YXNUb0ltZyB9IGZyb20gJy4vY2FudmFzVG9JbWcnXHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBTdHJlYW1DYW52YXMoZmFjZUJvYXJkKSB7XHJcbi8vICAgbGV0IGN0eCwgdmlkZW9XaWR0aCwgdmlkZW9IZWlnaHQsIHZpZGVvLCByYWZJRDtcclxuLy8gICB2aWRlbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWRlbycpO1xyXG4vLyAgIGxldCBtYXNrQ29sb3I7XHJcbi8vICAgaWYgKFxyXG4vLyAgICAgdmlkZW8gJiZcclxuLy8gICAgIHZpZGVvLnByZXZpb3VzU2libGluZyAmJlxyXG4vLyAgICAgdmlkZW8ucHJldmlvdXNTaWJsaW5nLm5vZGVOYW1lID09ICdDQU5WQVMnXHJcbi8vICAgKVxyXG4vLyAgICAgcmV0dXJuO1xyXG4vLyAgIGNvbnN0IGxvYWRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGluZycpO1xyXG4vLyAgIGNvbnN0IE1MX0xvYWRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTUxfTG9hZGluZycpO1xyXG4vLyAgIE1MX0xvYWRpbmcuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG4vLyAgIGNvbnN0IHN0YXRlID0ge1xyXG4vLyAgICAgYmFja2VuZDogJ3dlYmdsJyxcclxuLy8gICAgIG1heEZhY2VzOiAxLFxyXG4vLyAgICAgdHJpYW5ndWxhdGVNZXNoOiB0cnVlLFxyXG4vLyAgICAgcHJlZGljdElyaXNlczogZmFsc2UsXHJcbi8vICAgfTtcclxuXHJcbi8vICAgY29uc3QgTlVNX0tFWVBPSU5UUyA9IDQ2ODtcclxuLy8gICBjb25zdCBOVU1fSVJJU19LRVlQT0lOVFMgPSA1O1xyXG4vLyAgIGNvbnN0IEdSRUVOID0gJyMzMkVFREInO1xyXG4vLyAgIGNvbnN0IFJFRCA9ICcjRkYyQzM1JztcclxuLy8gICBjb25zdCBCTFVFID0gJyMxNTdBQjMnO1xyXG4vLyAgIGxldCB0ZXN0V3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXN0V3JhcHBlcicpO1xyXG4vLyAgIGxldCBoZWFkZXJXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcldyYXBwZXInKTtcclxuXHJcbi8vICAgY29uc3QgdGhyb3R0bGVyID0gdGhyb3R0bGluZygpO1xyXG4vLyAgIGNvbnN0IHByb2dyZXNzQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2dyZXNzQmFyJyk7XHJcbi8vICAgY29uc3QgcGVyY2VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9ncmVzc1BlcmNlbnQnKTtcclxuLy8gICBjb25zdCBwcm9ncmVzc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9ncmVzc0NvbnRhaW5lcicpO1xyXG4vLyAgIGNvbnN0IHRlc3RFeHBsYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rlc3RFeHBsYWluJyk7XHJcbi8vICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4vLyAgIGxldCBjYW1DYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuLy8gICBsZXQgY29udGV4dCA9IGNhbUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4vLyAgIGxldCBjbnQgPSAwO1xyXG4vLyAgIGxldCBjb2xvclN1bSA9IHt9O1xyXG4vLyAgIGxldCBleWVDb2xvciA9IFtdO1xyXG4vLyAgIGxldCBjaGVla0NvbG9yID0gW107XHJcbi8vICAgbGV0IGphd0NvbG9yID0gW107XHJcbi8vICAgbGV0IHR5cGVBcnIgPSBnZXREZXZpY2VUeXBlKCk7XHJcblxyXG4vLyAgIGlmIChmYWNlQm9hcmQgPT0gJ21hc2snKSB7XHJcbi8vICAgICBsZXQgYmVpZ2VfbGVmdCA9IG5ldyBJbWFnZSgpO1xyXG4vLyAgICAgYmVpZ2VfbGVmdC5zcmMgPSBgJHtwcm9jZXNzLmVudi5QQVRIfS9pbWFnZXMvYmVpZ2UtbGVmdC5wbmdgO1xyXG4vLyAgICAgbGV0IGJlaWdlX3JpZ2h0ID0gbmV3IEltYWdlKCk7XHJcbi8vICAgICBiZWlnZV9yaWdodC5zcmMgPSBgJHtwcm9jZXNzLmVudi5QQVRIfS9pbWFnZXMvYmVpZ2UtcmlnaHQucG5nYDtcclxuLy8gICAgIGxldCBtaW50X2xlZnQgPSBuZXcgSW1hZ2UoKTtcclxuLy8gICAgIG1pbnRfbGVmdC5zcmMgPSBgJHtwcm9jZXNzLmVudi5QQVRIfS9pbWFnZXMvbWludC1sZWZ0LnBuZ2A7XHJcbi8vICAgICBsZXQgbWludF9yaWdodCA9IG5ldyBJbWFnZSgpO1xyXG4vLyAgICAgbWludF9yaWdodC5zcmMgPSBgJHtwcm9jZXNzLmVudi5QQVRIfS9pbWFnZXMvbWludC1yaWdodC5wbmdgO1xyXG4vLyAgICAgbGV0IGJsYWNrX2xlZnQgPSBuZXcgSW1hZ2UoKTtcclxuLy8gICAgIGJsYWNrX2xlZnQuc3JjID0gYCR7cHJvY2Vzcy5lbnYuUEFUSH0vaW1hZ2VzL2JsYWNrLWxlZnQucG5nYDtcclxuLy8gICAgIGxldCBibGFja19yaWdodCA9IG5ldyBJbWFnZSgpO1xyXG4vLyAgICAgYmxhY2tfcmlnaHQuc3JjID0gYCR7cHJvY2Vzcy5lbnYuUEFUSH0vaW1hZ2VzL2JsYWNrLXJpZ2h0LnBuZ2A7XHJcbi8vICAgICBsZXQgd2hpdGVfbGVmdCA9IG5ldyBJbWFnZSgpO1xyXG4vLyAgICAgd2hpdGVfbGVmdC5zcmMgPSBgJHtwcm9jZXNzLmVudi5QQVRIfS9pbWFnZXMvd2hpdGUtbGVmdC5wbmdgO1xyXG4vLyAgICAgbGV0IHdoaXRlX3JpZ2h0ID0gbmV3IEltYWdlKCk7XHJcbi8vICAgICB3aGl0ZV9yaWdodC5zcmMgPSBgJHtwcm9jZXNzLmVudi5QQVRIfS9pbWFnZXMvd2hpdGUtcmlnaHQucG5nYDtcclxuLy8gICAgIGxldCBwdXJwbGVfbGVmdCA9IG5ldyBJbWFnZSgpO1xyXG4vLyAgICAgcHVycGxlX2xlZnQuc3JjID0gYCR7cHJvY2Vzcy5lbnYuUEFUSH0vaW1hZ2VzL3B1cnBsZS1sZWZ0LnBuZ2A7XHJcbi8vICAgICBsZXQgcHVycGxlX3JpZ2h0ID0gbmV3IEltYWdlKCk7XHJcbi8vICAgICBwdXJwbGVfcmlnaHQuc3JjID0gYCR7cHJvY2Vzcy5lbnYuUEFUSH0vaW1hZ2VzL3B1cnBsZS1yaWdodC5wbmdgO1xyXG4vLyAgICAgbGV0IHBpbmtfbGVmdCA9IG5ldyBJbWFnZSgpO1xyXG4vLyAgICAgcGlua19sZWZ0LnNyYyA9IGAke3Byb2Nlc3MuZW52LlBBVEh9L2ltYWdlcy9waW5rLWxlZnQucG5nYDtcclxuLy8gICAgIGxldCBwaW5rX3JpZ2h0ID0gbmV3IEltYWdlKCk7XHJcbi8vICAgICBwaW5rX3JpZ2h0LnNyYyA9IGAke3Byb2Nlc3MuZW52LlBBVEh9L2ltYWdlcy9waW5rLXJpZ2h0LnBuZ2A7XHJcblxyXG4vLyAgICAgbWFza0NvbG9yID0ge1xyXG4vLyAgICAgICB3aGl0ZTogW3doaXRlX2xlZnQsIHdoaXRlX3JpZ2h0XSxcclxuLy8gICAgICAgYmxhY2s6IFtibGFja19sZWZ0LCBibGFja19yaWdodF0sXHJcbi8vICAgICAgIHBpbms6IFtwaW5rX2xlZnQsIHBpbmtfcmlnaHRdLFxyXG4vLyAgICAgICBwdXJwbGU6IFtwdXJwbGVfbGVmdCwgcHVycGxlX3JpZ2h0XSxcclxuLy8gICAgICAgYmVpZ2U6IFtiZWlnZV9sZWZ0LCBiZWlnZV9yaWdodF0sXHJcbi8vICAgICAgIG1pbnQ6IFttaW50X2xlZnQsIG1pbnRfcmlnaHRdLFxyXG4vLyAgICAgfTtcclxuLy8gICAgIG1hc2tDb2xvcltzdG9yZS5nZXRTdGF0ZSgpLkNvbG9yUmVkdWNlci5tYWluTWFza0NvbG9yXVsxXS5vbmxvYWQgPSAoKSA9PlxyXG4vLyAgICAgICBtYWluKCk7XHJcbi8vICAgfSBlbHNlIGlmIChmYWNlQm9hcmQgPT0gJ3NjYW4nKSB7XHJcbi8vICAgICBzdG9yZS5kaXNwYXRjaChhY3Rpb25DcmVhdG9ycy5zZXRTY2FuVHJpZ2dlcih0cnVlKSk7XHJcbi8vICAgICBsZXQgYmVmb3JlUG9wdXAgPSBzdG9yZS5nZXRTdGF0ZSgpLkNvbG9yUmVkdWNlci5zY2FuVHJpZ2dlcjtcclxuLy8gICAgIHN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XHJcbi8vICAgICAgIGNvbnN0IGFmdGVyUG9wdXAgPSBzdG9yZS5nZXRTdGF0ZSgpLkNvbG9yUmVkdWNlci5zY2FuVHJpZ2dlcjtcclxuLy8gICAgICAgaWYgKGJlZm9yZVBvcHVwICE9IGFmdGVyUG9wdXApIHtcclxuLy8gICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuLy8gICAgICAgICAgIG1haW4oKTtcclxuLy8gICAgICAgICB9LCAxMDApO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9KTtcclxuLy8gICB9IGVsc2UgbWFpbigpO1xyXG5cclxuLy8gICAvLyBpZiAocmVuZGVyUG9pbnRjbG91ZCkge1xyXG4vLyAgIC8vICAgc3RhdGUucmVuZGVyUG9pbnRjbG91ZCA9IHRydWU7XHJcbi8vICAgLy8gfVxyXG5cclxuLy8gICBhc3luYyBmdW5jdGlvbiBzZXR1cENhbWVyYSgpIHtcclxuLy8gICAgIHZpZGVvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZGVvJyk7XHJcbi8vICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbi8vICAgICAgIHZpZGVvLm9ubG9hZGVkbWV0YWRhdGEgPSAoKSA9PiB7XHJcbi8vICAgICAgICAgcmVzb2x2ZSh2aWRlbyk7XHJcbi8vICAgICAgIH07XHJcbi8vICAgICB9KTtcclxuLy8gICB9XHJcblxyXG4vLyAgIGFzeW5jIGZ1bmN0aW9uIHJlbmRlclByZWRpY3Rpb24oKSB7XHJcbi8vICAgICBtb2RlbC50aGVuKGFzeW5jIGRhdGEgPT4ge1xyXG4vLyAgICAgICBsZXQgcHJlZGljdGlvbnM7XHJcbi8vICAgICAgIHRyeSB7XHJcbi8vICAgICAgICAgcHJlZGljdGlvbnMgPSBhd2FpdCBkYXRhLmVzdGltYXRlRmFjZXMoe1xyXG4vLyAgICAgICAgICAgaW5wdXQ6IHZpZGVvLFxyXG4vLyAgICAgICAgICAgcmV0dXJuVGVuc29yczogZmFsc2UsXHJcbi8vICAgICAgICAgICBmbGlwSG9yaXpvbnRhbDogZmFsc2UsXHJcbi8vICAgICAgICAgICBwcmVkaWN0SXJpc2VzOiBzdGF0ZS5wcmVkaWN0SXJpc2VzLFxyXG4vLyAgICAgICAgIH0pO1xyXG4vLyAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4vLyAgICAgICAgICAgcmVuZGVyUHJlZGljdGlvbigpO1xyXG4vLyAgICAgICAgIH0sIDMwMCk7XHJcbi8vICAgICAgICAgcmV0dXJuO1xyXG4vLyAgICAgICB9XHJcblxyXG4vLyAgICAgICBhd2FpdCBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbi8vICAgICAgIGF3YWl0IGNvbnRleHQuZHJhd0ltYWdlKHZpZGVvLCAwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4vLyAgICAgICBpZiAocHJlZGljdGlvbnMubGVuZ3RoID4gMCkge1xyXG4vLyAgICAgICAgIE1MX0xvYWRpbmcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuLy8gICAgICAgICBjb25zdCBrZXlwb2ludHMgPSBwcmVkaWN0aW9uc1swXS5zY2FsZWRNZXNoO1xyXG4vLyAgICAgICAgIGNvbnN0IGJveFBvcyA9IHByZWRpY3Rpb25zWzBdLmJvdW5kaW5nQm94O1xyXG4vLyAgICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IGF3YWl0IGtleXBvaW50cy5tYXAoaSA9PiB7XHJcbi8vICAgICAgICAgICAvL2ZhY2VtZXNo64qUIOu5hOuUlOyYpOydmCBjbGllbnTsgqzsnbTspojqsIDslYTri4wgdmlkZW/sgqzsnbTspojrpbwg6riw7KSA7Jy866GcIO2PrOyngOyFmOydhCDrpqzthLTtlZzri6QuXHJcbi8vICAgICAgICAgICAvL+q3uOuemOyEnCDquLDquLDsl5Ag66ee6rKMIOunnuy2sOynhCDsupTrsoTsiqTsl5DripQg66ee7KeAIOyViuq4sCDrlYzrrLjsl5Ag7ZW064u5IOu5hOycqOuhnCDsoITtmZjtlbTso7zripQg7J6R7JeF7J2EIOqxsOyzkOyVvCDtlZzri6QuXHJcbi8vICAgICAgICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgICAgICB4OiBpWzBdIC8gKHZpZGVvLnZpZGVvV2lkdGggLyB2aWRlb1dpZHRoKSxcclxuLy8gICAgICAgICAgICAgeTogaVsxXSAvICh2aWRlby52aWRlb0hlaWdodCAvIHZpZGVvSGVpZ2h0KSxcclxuLy8gICAgICAgICAgIH07XHJcbi8vICAgICAgICAgfSk7XHJcblxyXG4vLyAgICAgICAgIGlmIChmYWNlQm9hcmQgPT0gJ3NjYW4nKSB7XHJcbi8vICAgICAgICAgICB0ZXN0RXhwbGFpbi5pbm5lckhUTUwgPSBg7ZS867aA7IOJ7J2EIOy2lOy2nCDspJEg7J6F64uI64ukLjxicj4gPHNwYW4gc3R5bGU9XCJjb2xvciA6ICM5Yjg1ZDA7XCI+VGlwIDog7LWc64yA7ZWcIOu5m+ydmCDsmIHtlqXsnYQg67Cb7KeAIOyViuuKlCDqs7Psl5DshJwg7Lih7KCV7ZW067O07IS47JqUITwvc3Bhbj5gO1xyXG4vLyAgICAgICAgICAgY250Kys7XHJcbi8vICAgICAgICAgICBpZiAoY250ID09IDYxKSB7XHJcbi8vICAgICAgICAgICAgIGxvYWRpbmcuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbi8vICAgICAgICAgICAgIGNvbG9yU3VtLmV5ZSA9IGV5ZUNvbG9yLnJlZHVjZSgoYSwgYikgPT4ge1xyXG4vLyAgICAgICAgICAgICAgIHJldHVybiBbYVswXSArIGJbMF0sIGFbMV0gKyBiWzFdLCBhWzJdICsgYlsyXV07XHJcbi8vICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgICAgICBjb2xvclN1bS5jaGVlayA9IGNoZWVrQ29sb3IucmVkdWNlKChhLCBiKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgcmV0dXJuIFthWzBdICsgYlswXSwgYVsxXSArIGJbMV0sIGFbMl0gKyBiWzJdXTtcclxuLy8gICAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgICAgIGNvbG9yU3VtLmphdyA9IGphd0NvbG9yLnJlZHVjZSgoYSwgYikgPT4ge1xyXG4vLyAgICAgICAgICAgICAgIHJldHVybiBbYVswXSArIGJbMF0sIGFbMV0gKyBiWzFdLCBhWzJdICsgYlsyXV07XHJcbi8vICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gY29sb3JTdW0pIHtcclxuLy8gICAgICAgICAgICAgICBjb2xvclN1bVtrZXldID0gY29sb3JTdW1ba2V5XS5tYXAoaSA9PiBpIC8gNjApO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIHRocm90dGxlci50aHJvdHRsZSgoKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgLy8gY29uc3QgZm9ybSA9IG5ldyBGb3JtRGF0YSgpXHJcbi8vICAgICAgICAgICAgICAgLy8gZm9ybS5hcHBlbmQoXCJmaWxlXCIsIGNhbnZhc1RvSW1nKGNhbUNhbnZhcykpXHJcbi8vICAgICAgICAgICAgICAgLy8gYXhpb3MucG9zdCgnL3NlbmRJbWcnLCBmb3JtKVxyXG4vLyAgICAgICAgICAgICAgIGF4aW9zXHJcbi8vICAgICAgICAgICAgICAgICAucG9zdCgnL2dldFNlYXNvbicsIGNvbG9yU3VtKVxyXG4vLyAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuLy8gICAgICAgICAgICAgICAgICAgY29sb3JBdmcoY29sb3JTdW0sIHJlcy5kYXRhKTtcclxuLy8gICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocmVzLmRhdGEpLmNsaWNrKCk7XHJcbi8vICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0cmVhbSA9IHZpZGVvLnNyY09iamVjdDsgLy/ruYTrlJTsmKQg7Iqk7Yq466a8XHJcbi8vICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYWNrcyA9IHN0cmVhbS5nZXRUcmFja3MoKTsgLy/tirjrnplcclxuLy8gICAgICAgICAgICAgICAgICAgdHJhY2tzWzBdLnN0b3AoKTsgLy/siqTtirjrprwg7KSR64uoXHJcbi8vICAgICAgICAgICAgICAgICB9KVxyXG4vLyAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbi8vICAgICAgICAgICAgICAgICB9KTtcclxuLy8gICAgICAgICAgICAgfSwgNTAwKTtcclxuLy8gICAgICAgICAgICAgcmV0dXJuO1xyXG4vLyAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgaWYgKGNudCA+IDYxICYmIGZhY2VCb2FyZCA9PSAnc2NhbicpIHJldHVybjtcclxuXHJcbi8vICAgICAgICAgICBhd2FpdCBjdHguYmVnaW5QYXRoKCk7XHJcbi8vICAgICAgICAgICAvLyBhd2FpdCBjdHgubW92ZVRvKGJveFBvcy50b3BMZWZ0WzBdIC8gKHZpZGVvLnZpZGVvV2lkdGggLyB2aWRlb1dpZHRoKSwgKGJveFBvcy50b3BMZWZ0WzFdIC8gKHZpZGVvLnZpZGVvV2lkdGggLyB2aWRlb1dpZHRoKSkgKiAyKVxyXG4vLyAgICAgICAgICAgLy8gYXdhaXQgY3R4LmxpbmVUbyhib3hQb3MuYm90dG9tUmlnaHRbMF0gLyAodmlkZW8udmlkZW9XaWR0aCAvIHZpZGVvV2lkdGgpLCAoYm94UG9zLnRvcExlZnRbMV0gLyAodmlkZW8udmlkZW9XaWR0aCAvIHZpZGVvV2lkdGgpKSAqIDIpXHJcbi8vICAgICAgICAgICAvLyBhd2FpdCBjdHgubGluZVRvKGJveFBvcy5ib3R0b21SaWdodFswXSAvICh2aWRlby52aWRlb1dpZHRoIC8gdmlkZW9XaWR0aCksIChib3hQb3MuYm90dG9tUmlnaHRbMV0gLyAodmlkZW8udmlkZW9XaWR0aCAvIHZpZGVvV2lkdGgpKSAqIDEuMzUpXHJcbi8vICAgICAgICAgICAvLyBhd2FpdCBjdHgubGluZVRvKGJveFBvcy50b3BMZWZ0WzBdIC8gKHZpZGVvLnZpZGVvV2lkdGggLyB2aWRlb1dpZHRoKSwgKGJveFBvcy5ib3R0b21SaWdodFsxXSAvICh2aWRlby52aWRlb1dpZHRoIC8gdmlkZW9XaWR0aCkpICogMS4zNSlcclxuLy8gICAgICAgICAgIGF3YWl0IGN0eC5tb3ZlVG8oXHJcbi8vICAgICAgICAgICAgIHBvc2l0aW9uc1syMzRdLnggKyBwb3NpdGlvbnNbMjM0XS54ICogLTAuMDUsXHJcbi8vICAgICAgICAgICAgIHBvc2l0aW9uc1sxMF0ueSxcclxuLy8gICAgICAgICAgICk7XHJcbi8vICAgICAgICAgICBhd2FpdCBjdHgubGluZVRvKFxyXG4vLyAgICAgICAgICAgICBwb3NpdGlvbnNbNDU0XS54ICsgcG9zaXRpb25zWzQ1NF0ueCAqIDAuMDUsXHJcbi8vICAgICAgICAgICAgIHBvc2l0aW9uc1sxMF0ueSxcclxuLy8gICAgICAgICAgICk7XHJcbi8vICAgICAgICAgICBhd2FpdCBjdHgubGluZVRvKFxyXG4vLyAgICAgICAgICAgICBwb3NpdGlvbnNbNDU0XS54ICsgcG9zaXRpb25zWzQ1NF0ueCAqIDAuMDUsXHJcbi8vICAgICAgICAgICAgIHBvc2l0aW9uc1sxNTJdLnksXHJcbi8vICAgICAgICAgICApO1xyXG4vLyAgICAgICAgICAgYXdhaXQgY3R4LmxpbmVUbyhcclxuLy8gICAgICAgICAgICAgcG9zaXRpb25zWzIzNF0ueCArIHBvc2l0aW9uc1syMzRdLnggKiAtMC4wNSxcclxuLy8gICAgICAgICAgICAgcG9zaXRpb25zWzE1Ml0ueSxcclxuLy8gICAgICAgICAgICk7XHJcbi8vICAgICAgICAgICBhd2FpdCBjdHguY2xvc2VQYXRoKCk7XHJcbi8vICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMztcclxuLy8gICAgICAgICAgIGF3YWl0IGN0eC5zdHJva2UoKTtcclxuXHJcbi8vICAgICAgICAgICBjb25zdCBleWVMZW5ndGggPSBNYXRoLmFicyhwb3NpdGlvbnNbNF0ueSAtIHBvc2l0aW9uc1sxXS55KTtcclxuLy8gICAgICAgICAgIGNvbnN0IHJpZ2h0Q2hlZWsgPSBwb3NpdGlvbnNbNDI1XTtcclxuLy8gICAgICAgICAgIGNvbnN0IGxlZnRDaGVlayA9IHtcclxuLy8gICAgICAgICAgICAgeDogcG9zaXRpb25zWzIwNV0ueCAtIGV5ZUxlbmd0aCxcclxuLy8gICAgICAgICAgICAgeTogcG9zaXRpb25zWzIwNV0ueSxcclxuLy8gICAgICAgICAgIH07XHJcbi8vICAgICAgICAgICBjb25zdCBsZWZ0VW5kZXJFeWUgPSBwb3NpdGlvbnNbMTEwXTtcclxuXHJcbi8vICAgICAgICAgICBjb25zdCByaWdodFVuZGVyRXllID0gcG9zaXRpb25zWzI1Ml07XHJcblxyXG4vLyAgICAgICAgICAgY29uc3QgamF3ID0gcG9zaXRpb25zWzIwMV07XHJcblxyXG4vLyAgICAgICAgICAgLy8gYXdhaXQgY3R4LmZpbGxSZWN0KGxlZnRDaGVlay54LGxlZnRDaGVlay55LC1leWVMZW5ndGgsIGV5ZUxlbmd0aC8yKVxyXG4vLyAgICAgICAgICAgLy8gYXdhaXQgY3R4LmZpbGxSZWN0KHJpZ2h0Q2hlZWsueCxyaWdodENoZWVrLnksZXllTGVuZ3RoLCBleWVMZW5ndGgvMilcclxuLy8gICAgICAgICAgIC8vIGF3YWl0IGN0eC5maWxsUmVjdChsZWZ0VW5kZXJFeWUueCxsZWZ0VW5kZXJFeWUueSxleWVMZW5ndGgsIGV5ZUxlbmd0aC8yKVxyXG4vLyAgICAgICAgICAgLy8gYXdhaXQgY3R4LmZpbGxSZWN0KHJpZ2h0VW5kZXJFeWUueCxyaWdodFVuZGVyRXllLnksZXllTGVuZ3RoLCBleWVMZW5ndGgvMilcclxuLy8gICAgICAgICAgIC8vIGF3YWl0IGN0eC5maWxsUmVjdChqYXcueCxqYXcueSxleWVMZW5ndGgsIGV5ZUxlbmd0aC8yKVxyXG5cclxuLy8gICAgICAgICAgIGxldCBsZWZ0RXllU3VtID0gbmV3IGdldENvbG9yRGF0YShsZWZ0VW5kZXJFeWUsIGV5ZUxlbmd0aCwgY29udGV4dCk7XHJcbi8vICAgICAgICAgICBsZXQgcmlnaHRFeWVTdW0gPSBuZXcgZ2V0Q29sb3JEYXRhKHJpZ2h0VW5kZXJFeWUsIGV5ZUxlbmd0aCwgY29udGV4dCk7XHJcblxyXG4vLyAgICAgICAgICAgbGV0IGxlZnRDaGVla1N1bSA9IG5ldyBnZXRDb2xvckRhdGEobGVmdENoZWVrLCBleWVMZW5ndGgsIGNvbnRleHQpO1xyXG4vLyAgICAgICAgICAgbGV0IHJpZ2h0Q2hlZWtTdW0gPSBuZXcgZ2V0Q29sb3JEYXRhKHJpZ2h0Q2hlZWssIGV5ZUxlbmd0aCwgY29udGV4dCk7XHJcbi8vICAgICAgICAgICBsZXQgamF3U3VtID0gbmV3IGdldENvbG9yRGF0YShqYXcsIGV5ZUxlbmd0aCwgY29udGV4dCk7XHJcblxyXG4vLyAgICAgICAgICAgbGV0IGV5ZVJlc3VsdCA9IGF3YWl0IGxlZnRFeWVTdW0ubWFwKChpLCBpZHgpID0+IHtcclxuLy8gICAgICAgICAgICAgcmV0dXJuIChpICsgcmlnaHRFeWVTdW1baWR4XSkgLyAyO1xyXG4vLyAgICAgICAgICAgfSk7XHJcblxyXG4vLyAgICAgICAgICAgbGV0IGNoZWVrUmVzdWx0ID0gYXdhaXQgbGVmdENoZWVrU3VtLm1hcCgoaSwgaWR4KSA9PiB7XHJcbi8vICAgICAgICAgICAgIHJldHVybiAoaSArIHJpZ2h0Q2hlZWtTdW1baWR4XSkgLyAyO1xyXG4vLyAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgICBleWVDb2xvci5wdXNoKGV5ZVJlc3VsdCk7XHJcbi8vICAgICAgICAgICBjaGVla0NvbG9yLnB1c2goY2hlZWtSZXN1bHQpO1xyXG4vLyAgICAgICAgICAgamF3Q29sb3IucHVzaChqYXdTdW0pO1xyXG5cclxuLy8gICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7XHJcbi8vICAgICAgICAgICAgIChleWVSZXN1bHRbMF0gKyBjaGVla1Jlc3VsdFswXSArIGphd1N1bVswXSkgLyAzXHJcbi8vICAgICAgICAgICB9LCR7KGV5ZVJlc3VsdFsxXSArIGNoZWVrUmVzdWx0WzFdICsgamF3U3VtWzFdKSAvIDN9LCR7XHJcbi8vICAgICAgICAgICAgIChleWVSZXN1bHRbMl0gKyBjaGVla1Jlc3VsdFsyXSArIGphd1N1bVsyXSkgLyAzXHJcbi8vICAgICAgICAgICB9KWA7XHJcblxyXG4vLyAgICAgICAgICAgY29uc3QgcmdiQm94ID0gKGNhbnZhcy5oZWlnaHQgKyBjYW52YXMud2lkdGgpIC8gMiAvIDQ7XHJcbi8vICAgICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgcmdiQm94LCByZ2JCb3gpO1xyXG5cclxuLy8gICAgICAgICAgIGlmIChjbnQgPCA2MSkge1xyXG4vLyAgICAgICAgICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2dyZXNzQmFyXCIpLnN0eWxlLndpZHRoID0gY250KjIgKyBcIiVcIlxyXG4vLyAgICAgICAgICAgICAvLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9ncmVzc3BlcmNlbnRcIikuaW5uZXJUZXh0ID0gY250KjIgKyBcIiVcIlxyXG4vLyAgICAgICAgICAgICBwcm9ncmVzc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1mbGV4JztcclxuLy8gICAgICAgICAgICAgZm9yIChsZXQgaSA9IDM7IGkgPj0gMDsgaS0tKSB7XHJcbi8vICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGNudCAqIDEuNjU7XHJcbi8vICAgICAgICAgICAgICAgbGV0IHByb2dyZXNzVW5pdCA9IHJlc3VsdC50b0ZpeGVkKDEpIC0gaTtcclxuLy8gICAgICAgICAgICAgICBwcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9IHByb2dyZXNzVW5pdCArICclJztcclxuLy8gICAgICAgICAgICAgICBwZXJjZW50LmlubmVyVGV4dCA9IHByb2dyZXNzVW5pdCArICclJztcclxuLy8gICAgICAgICAgICAgICBpZiAoY250ID09PSA2MCkge1xyXG4vLyAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSAnMTAwJSc7XHJcbi8vICAgICAgICAgICAgICAgICBwZXJjZW50LmlubmVyVGV4dCA9ICcxMDAlJztcclxuLy8gICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgIH1cclxuLy8gICAgICAgICB9IGVsc2UgaWYgKGZhY2VCb2FyZCA9PSAnZmFjZWJvYXJkJykge1xyXG4vLyAgICAgICAgICAgdGVzdEV4cGxhaW4uaW5uZXJUZXh0ID1cclxuLy8gICAgICAgICAgICAgJ+qwgOyepSDslrzqtbTsnbQg7ZmU7IKs7ZW07KeA64qUIO2VhO2EsOulvCDtmZXsnbgg7ZuEIOqysOqzvCDtmZXsnbgg67KE7Yq87J2EIOuIjOufrOyjvOyEuOyalCc7XHJcbi8vICAgICAgICAgICBsZXQgY29sb3JSZ2IgPSBzdG9yZS5nZXRTdGF0ZSgpLkNvbG9yUmVkdWNlci5tYWluRmFjZUJvYXJkQ29sb3I7XHJcbi8vICAgICAgICAgICBuZXcgRmFjZUJvYXJkKHBvc2l0aW9ucywgY29sb3JSZ2IsIGNhbnZhcyk7XHJcbi8vICAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgIHRlc3RFeHBsYWluLmlubmVyVGV4dCA9XHJcbi8vICAgICAgICAgICAgICftlZjri6jsnZgg66eI7Iqk7YGs66W8IOyEoO2Dne2VmOyXrCDtlYTthLDrpbwg7KCB7Jqp7ZW067O07IS47JqUJztcclxuLy8gICAgICAgICAgIGxldCBtYWluQ29sb3IgPVxyXG4vLyAgICAgICAgICAgICBtYXNrQ29sb3Jbc3RvcmUuZ2V0U3RhdGUoKS5Db2xvclJlZHVjZXIubWFpbk1hc2tDb2xvcl07XHJcbi8vICAgICAgICAgICBsZXQgbGVmdE1hc2sgPSBtYWluQ29sb3JbMF07XHJcbi8vICAgICAgICAgICBsZXQgcmlnaHRNYXNrID0gbWFpbkNvbG9yWzFdO1xyXG4vLyAgICAgICAgICAgbmV3IE1hc2tEcmF3KFxyXG4vLyAgICAgICAgICAgICBjYW52YXMsXHJcbi8vICAgICAgICAgICAgIGxlZnRNYXNrLFxyXG4vLyAgICAgICAgICAgICByaWdodE1hc2ssXHJcbi8vICAgICAgICAgICAgIHBvc2l0aW9ucyxcclxuLy8gICAgICAgICAgICAgdHlwZUFyclswXSxcclxuLy8gICAgICAgICAgICAgdHlwZUFyclsxXSxcclxuLy8gICAgICAgICAgICAgdHlwZUFyclsyXSxcclxuLy8gICAgICAgICAgICk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICB9IGVsc2VcclxuLy8gICAgICAgICB0ZXN0RXhwbGFpbi5pbm5lckhUTUwgPSBg7Ja86rW07J2EIOyduOyLne2VoCDsiJgg7J6I64+E66GdIOy5tOuplOudvOulvCDrsJTrnbzrtJDso7zshLjsmpQuPGJyPiA8c3BhbiBzdHlsZT1cImNvbG9yIDogIzliODVkMDtcIj5UaXAgOiDstZzrjIDtlZwg67mb7J2YIOyYge2WpeydhCDrsJvsp4Ag7JWK64qUIOqzs+yXkOyEnCDsuKHsoJXtlbTrs7TshLjsmpQhPC9zcGFuPmA7XHJcblxyXG4vLyAgICAgICByYWZJRCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXJQcmVkaWN0aW9uKTtcclxuLy8gICAgIH0pO1xyXG5cclxuLy8gICAgIC8vICAgc3RhdHMuZW5kKCk7XHJcbi8vICAgfVxyXG5cclxuLy8gICBhc3luYyBmdW5jdGlvbiBtYWluKCkge1xyXG4vLyAgICAgaWYgKGZhY2VCb2FyZCAhPSAnbWFzaycpIHtcclxuLy8gICAgICAgaGVhZGVyV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4vLyAgICAgICBoZWFkZXJXcmFwcGVyLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIGF3YWl0IHRmLnNldEJhY2tlbmQoc3RhdGUuYmFja2VuZCk7XHJcbi8vICAgICAvLyAgIHN0YXRzLnNob3dQYW5lbCgwKTsgIC8vIDA6IGZwcywgMTogbXMsIDI6IG1iLCAzKzogY3VzdG9tXHJcbi8vICAgICAvLyAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3RhdHMuZG9tKTtcclxuXHJcbi8vICAgICB0ZXN0V3JhcHBlci5zdHlsZS5vcGFjaXR5ID0gMTtcclxuXHJcbi8vICAgICB2aWRlby5wbGF5KCk7XHJcbi8vICAgICB2aWRlby5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuLy8gICAgIGNhbnZhcy5jbGFzc05hbWUgPSAnZmFjZUNhbnZhcyc7XHJcbi8vICAgICB2aWRlb1dpZHRoID0gdmlkZW8uY2xpZW50V2lkdGg7XHJcbi8vICAgICBjYW52YXMud2lkdGggPSB2aWRlb1dpZHRoO1xyXG4vLyAgICAgY2FudmFzLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuLy8gICAgIGNhbnZhcy5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoLTEsMSknO1xyXG4vLyAgICAgY2FudmFzLnN0eWxlLnpJbmRleCA9ICcgOTk4JztcclxuLy8gICAgIGNhbnZhcy5zdHlsZS5sZWZ0ID0gJzAnO1xyXG4vLyAgICAgY2FtQ2FudmFzLmNsYXNzTmFtZSA9ICdmYWNlQ2FudmFzJztcclxuLy8gICAgIGNhbUNhbnZhcy5pZCA9ICdjYW1DYW52YXMnO1xyXG4vLyAgICAgY2FtQ2FudmFzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4vLyAgICAgY2FtQ2FudmFzLndpZHRoID0gdmlkZW9XaWR0aDtcclxuLy8gICAgIGlmICh0eXBlQXJyWzJdKSB7XHJcbi8vICAgICAgIHZpZGVvSGVpZ2h0ID0gMzM4O1xyXG4vLyAgICAgICBjYW52YXMuaGVpZ2h0ID0gMzM4O1xyXG4vLyAgICAgICBjYW1DYW52YXMuaGVpZ2h0ID0gMzM4O1xyXG4vLyAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgdmlkZW9IZWlnaHQgPSB2aWRlby5jbGllbnRIZWlnaHQ7XHJcbi8vICAgICAgIGNhbnZhcy5oZWlnaHQgPSB2aWRlby5jbGllbnRIZWlnaHQ7XHJcbi8vICAgICAgIGNhbUNhbnZhcy5oZWlnaHQgPSB2aWRlby5jbGllbnRIZWlnaHQ7XHJcbi8vICAgICB9XHJcbi8vICAgICBjYW1DYW52YXMuc3R5bGUuekluZGV4ID0gJzk5OCc7XHJcbi8vICAgICBjYW1DYW52YXMuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKC0xLDEpJztcclxuXHJcbi8vICAgICBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuLy8gICAgIGN0eC5maWxsU3R5bGUgPSBHUkVFTjtcclxuLy8gICAgIGN0eC5zdHJva2VTdHlsZSA9IEdSRUVOO1xyXG4vLyAgICAgY3R4LmxpbmVXaWR0aCA9IDAuNTtcclxuLy8gICAgIHRlc3RXcmFwcGVyLmluc2VydEJlZm9yZShjYW1DYW52YXMsIHRlc3RXcmFwcGVyLmZpcnN0Q2hpbGQpO1xyXG4vLyAgICAgdGVzdFdyYXBwZXIuaW5zZXJ0QmVmb3JlKGNhbnZhcywgdGVzdFdyYXBwZXIuZmlyc3RDaGlsZCk7XHJcbi8vICAgICAvLyBtb2RlbCA9IGF3YWl0IGZhY2VMYW5kbWFya3NEZXRlY3Rpb24ubG9hZChcclxuLy8gICAgIC8vICAgICBmYWNlTGFuZG1hcmtzRGV0ZWN0aW9uLlN1cHBvcnRlZFBhY2thZ2VzLm1lZGlhcGlwZUZhY2VtZXNoLFxyXG4vLyAgICAgLy8gICAgIHsgbWF4RmFjZXM6IHN0YXRlLm1heEZhY2VzIH0pO1xyXG4vLyAgICAgcmVuZGVyUHJlZGljdGlvbigpO1xyXG4vLyAgICAgLy8gICBhbmkgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobWFpbik7XHJcbi8vICAgfVxyXG4vLyAgIC8vIGxldCBhbmkgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobWFpbik7XHJcbi8vIH1cclxuLy8gaW1wb3J0IHsgdGhyb3R0bGluZyB9IGZyb20gJy4uLy4uL3V0aWxzL3Rocm90dGxpbmcnO1xyXG4vLyBpbXBvcnQgRmFjZUJvYXJkIGZyb20gJy4vRmFjZUJvYXJkJztcclxuaW1wb3J0IE1hc2tEcmF3IGZyb20gJy4vTWFza0RyYXcnO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vLi4vc3RvcmUnO1xyXG5pbXBvcnQgeyBhY3Rpb25DcmVhdG9ycyB9IGZyb20gJy4uLy4uL3N0b3JlL2NvbG9yU3RvcmUnO1xyXG5pbXBvcnQgJ0B0ZW5zb3JmbG93L3RmanMtYmFja2VuZC13ZWJnbCc7XHJcbi8vIGltcG9ydCBJbWFnZVVwbG9hZCBmcm9tICcuL0ltYWdlVXBsb2FkJztcclxuaW1wb3J0ICogYXMgZmFjZUxhbmRtYXJrc0RldGVjdGlvbiBmcm9tICdAdGVuc29yZmxvdy1tb2RlbHMvZmFjZS1sYW5kbWFya3MtZGV0ZWN0aW9uJztcclxuaW1wb3J0IGdldERldmljZVR5cGUgZnJvbSAnLi9nZXREZXZpY2VUeXBlJztcclxuLy8gaW1wb3J0IGNhbnZhc1RvSW1nIGZyb20gJy4vY2FudmFzVG9JbWcnO1xyXG4vLyBpbXBvcnQgZ2V0RmFjZUltYWdlRGF0YSBmcm9tICcuL2dldEZhY2VJbWFnZURhdGEnO1xyXG5pbXBvcnQgeyBkcmF3RmFjZUxpbmUgfSBmcm9tICcuL2RyYXdGYWNlTGluZSc7XHJcbmltcG9ydCBkcmF3RmFjZUJHIGZyb20gJy4vZHJhd0ZhY2VCRyc7XHJcbmltcG9ydCAqIGFzIHRmIGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZSc7XHJcbi8vIGltcG9ydCB7IFRSSUFOR1VMQVRJT04gfSBmcm9tICcuL3RyaWFuZ3VsYXRpb25zJztcclxuXHJcbmludGVyZmFjZSBjb2xvclR5cGUge1xyXG4gIFtrZXk6IHN0cmluZ106IEhUTUxJbWFnZUVsZW1lbnRbXTsgLy/tg4DsnoXsiqTtgazrpr3tirjsnZggaW5kZXggc2lnbmF0dXJl67Cp7IudXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIFN0cmVhbUNhbnZhcyhmYWNlQm9hcmQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gIHRmLnNldEJhY2tlbmQoJ3dlYmdsJyk7XHJcbiAgbGV0IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gIGxldCB2aWRlb1dpZHRoOiBudW1iZXI7XHJcbiAgbGV0IHZpZGVvSGVpZ2h0OiBudW1iZXI7XHJcbiAgY29uc3QgdmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlkZW8nKSBhcyBIVE1MVmlkZW9FbGVtZW50O1xyXG4gIGNvbnN0IHN0cmVhbSA9IHZpZGVvIS5zcmNPYmplY3QgYXMgTWVkaWFTdHJlYW07IC8v67mE65SU7JikIOyKpO2KuOumvFxyXG4gIGNvbnN0IHRyYWNrcyA9IHN0cmVhbSEuZ2V0VHJhY2tzKCk7IC8v7Yq4656ZXHJcbiAgLy8gY29uc3QgYmdQb3NBcnIgPSBbXHJcbiAgLy8gICAxMTcsIDM0NiwgMTk1LCAyMzQsIDQ1NCwgMTA5LCAzMzgsIDMzMiwgMjUxLCAzODksIDM1NiwgMzIzLCAyODgsIDM2NSwgNDAwLFxyXG4gIC8vICAgMTc2LCAxMzYsIDU4LCA5MywgMTI3LCAxNjIsIDIxLCAxMDMsIDY3LCAxMCwgMjk3LCAyODQsIDM2MSwgMzc4LCAzNzksIDE1MixcclxuICAvLyAgIDE1MCwgMTQ5LCAxNzIsIDEzMixcclxuICAvLyBdO1xyXG4gIGxldCBmYWNlRG90RHJhdzogZHJhd0ZhY2VMaW5lO1xyXG4gIGxldCBmYWNlQmdEcmF3OiBkcmF3RmFjZUJHO1xyXG4gIGxldCBtYXNrQ29sb3I6IGNvbG9yVHlwZTtcclxuICBsZXQgbW9kZWw6IGZhY2VMYW5kbWFya3NEZXRlY3Rpb24uRmFjZUxhbmRtYXJrc1BhY2thZ2U7XHJcbiAgLy8gaWYgKFxyXG4gIC8vICAgdmlkZW8gJiZcclxuICAvLyAgIHZpZGVvLnByZXZpb3VzU2libGluZyAmJlxyXG4gIC8vICAgdmlkZW8ucHJldmlvdXNTaWJsaW5nLm5vZGVOYW1lID09ICdDQU5WQVMnXHJcbiAgLy8gKVxyXG4gIC8vICAgcmV0dXJuO1xyXG4gIC8vIGNvbnN0IGxvYWRpbmcgPSBkb2N1bWVudC5nZXRFIGxlbWVudEJ5SWQoJ2xvYWRpbmcnKTtcclxuICBjb25zdCBNTF9Mb2FkaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ01MX0xvYWRpbmcnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICBNTF9Mb2FkaW5nLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuICAvLyBzdG9yZS5kaXNwYXRjaChhY3Rpb25DcmVhdG9ycy5zZXRBbmlTdG9wKGZhbHNlKSk7XHJcbiAgLy8gY29uc3Qgc3RhdGUgPSB7XHJcbiAgLy8gICBiYWNrZW5kOiAnd2ViZ2wnLFxyXG4gIC8vICAgbWF4RmFjZXM6IDEsXHJcbiAgLy8gICB0cmlhbmd1bGF0ZU1lc2g6IHRydWUsXHJcbiAgLy8gICBwcmVkaWN0SXJpc2VzOiBmYWxzZSxcclxuICAvLyB9O1xyXG5cclxuICAvLyBjb25zdCBOVU1fS0VZUE9JTlRTID0gNDY4O1xyXG4gIC8vIGNvbnN0IE5VTV9JUklTX0tFWVBPSU5UUyA9IDU7XHJcbiAgLy8gY29uc3QgUkVEID0gJyNGRjJDMzUnO1xyXG4gIC8vIGNvbnN0IEJMVUUgPSAnIzE1N0FCMyc7XHJcbiAgY29uc3QgcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZ3Jlc3NCYXInKSBhcyBIVE1MRWxlbWVudDtcclxuICBjb25zdCBwZXJjZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2dyZXNzUGVyY2VudCcpIGFzIEhUTUxFbGVtZW50O1xyXG4gIGNvbnN0IHByb2dyZXNzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAncHJvZ3Jlc3NDb250YWluZXInLFxyXG4gICkgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgY29uc3QgR1JFRU4gPSAnIzMyRUVEQic7XHJcbiAgY29uc3QgdGVzdFdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVzdFdyYXBwZXInKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICBjb25zdCBoZWFkZXJXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAnaGVhZGVyV3JhcHBlcicsXHJcbiAgKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgLy8gY29uc3QgdGhyb3R0bGVyID0gdGhyb3R0bGluZygpO1xyXG4gIGNvbnN0IHRlc3RFeHBsYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rlc3RFeHBsYWluJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RyYXdpbmdDYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAvLyBjb25zdCBjb2xvclN1bSA9IHt9O1xyXG4gIC8vIGNvbnN0IGV5ZUNvbG9yID0gW107XHJcbiAgLy8gY29uc3QgY2hlZWtDb2xvciA9IFtdO1xyXG4gIC8vIGNvbnN0IGphd0NvbG9yID0gW107XHJcbiAgbGV0IGFuaUlkOiBudW1iZXI7XHJcbiAgbGV0IHByb2dyZXNzQ250ID0gMDtcclxuICBsZXQgaXNEZXRlY3RlZCA9IGZhbHNlO1xyXG4gIGNvbnN0IHR5cGVBcnIgPSBnZXREZXZpY2VUeXBlKCk7XHJcbiAgY29uc3QgaWNvbiA9IG5ldyBJbWFnZSgpO1xyXG4gIGljb24uc3JjID0gYCR7cHJvY2Vzcy5lbnYuUEFUSH0vaW1hZ2VzL2JlZm9yZUNhbnZhc1RpdGxlLnBuZ2A7XHJcbiAgY29uc3QgaWNvbjIgPSBuZXcgSW1hZ2UoKTtcclxuICBpY29uMi5zcmMgPSBgJHtwcm9jZXNzLmVudi5QQVRIfS9pbWFnZXMvYWZ0ZXJDYW52YXNUaXRsZS5wbmdgO1xyXG4gIGlmIChmYWNlQm9hcmQgPT0gJ21hc2snKSB7XHJcbiAgICBjb25zdCBiZWlnZV9sZWZ0ID0gbmV3IEltYWdlKCk7XHJcbiAgICBiZWlnZV9sZWZ0LnNyYyA9IGAke3Byb2Nlc3MuZW52LlBBVEh9L2ltYWdlcy9iZWlnZS1sZWZ0LnBuZ2A7XHJcbiAgICBjb25zdCBiZWlnZV9yaWdodCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgYmVpZ2VfcmlnaHQuc3JjID0gYCR7cHJvY2Vzcy5lbnYuUEFUSH0vaW1hZ2VzL2JlaWdlLXJpZ2h0LnBuZ2A7XHJcbiAgICBjb25zdCBtaW50X2xlZnQgPSBuZXcgSW1hZ2UoKTtcclxuICAgIG1pbnRfbGVmdC5zcmMgPSBgJHtwcm9jZXNzLmVudi5QQVRIfS9pbWFnZXMvbWludC1sZWZ0LnBuZ2A7XHJcbiAgICBjb25zdCBtaW50X3JpZ2h0ID0gbmV3IEltYWdlKCk7XHJcbiAgICBtaW50X3JpZ2h0LnNyYyA9IGAke3Byb2Nlc3MuZW52LlBBVEh9L2ltYWdlcy9taW50LXJpZ2h0LnBuZ2A7XHJcbiAgICBjb25zdCBibGFja19sZWZ0ID0gbmV3IEltYWdlKCk7XHJcbiAgICBibGFja19sZWZ0LnNyYyA9IGAke3Byb2Nlc3MuZW52LlBBVEh9L2ltYWdlcy9ibGFjay1sZWZ0LnBuZ2A7XHJcbiAgICBjb25zdCBibGFja19yaWdodCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgYmxhY2tfcmlnaHQuc3JjID0gYCR7cHJvY2Vzcy5lbnYuUEFUSH0vaW1hZ2VzL2JsYWNrLXJpZ2h0LnBuZ2A7XHJcbiAgICBjb25zdCB3aGl0ZV9sZWZ0ID0gbmV3IEltYWdlKCk7XHJcbiAgICB3aGl0ZV9sZWZ0LnNyYyA9IGAke3Byb2Nlc3MuZW52LlBBVEh9L2ltYWdlcy93aGl0ZS1sZWZ0LnBuZ2A7XHJcbiAgICBjb25zdCB3aGl0ZV9yaWdodCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgd2hpdGVfcmlnaHQuc3JjID0gYCR7cHJvY2Vzcy5lbnYuUEFUSH0vaW1hZ2VzL3doaXRlLXJpZ2h0LnBuZ2A7XHJcbiAgICBjb25zdCBwdXJwbGVfbGVmdCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgcHVycGxlX2xlZnQuc3JjID0gYCR7cHJvY2Vzcy5lbnYuUEFUSH0vaW1hZ2VzL3B1cnBsZS1sZWZ0LnBuZ2A7XHJcbiAgICBjb25zdCBwdXJwbGVfcmlnaHQgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHB1cnBsZV9yaWdodC5zcmMgPSBgJHtwcm9jZXNzLmVudi5QQVRIfS9pbWFnZXMvcHVycGxlLXJpZ2h0LnBuZ2A7XHJcbiAgICBjb25zdCBwaW5rX2xlZnQgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHBpbmtfbGVmdC5zcmMgPSBgJHtwcm9jZXNzLmVudi5QQVRIfS9pbWFnZXMvcGluay1sZWZ0LnBuZ2A7XHJcbiAgICBjb25zdCBwaW5rX3JpZ2h0ID0gbmV3IEltYWdlKCk7XHJcbiAgICBwaW5rX3JpZ2h0LnNyYyA9IGAke3Byb2Nlc3MuZW52LlBBVEh9L2ltYWdlcy9waW5rLXJpZ2h0LnBuZ2A7XHJcblxyXG4gICAgbWFza0NvbG9yID0ge1xyXG4gICAgICB3aGl0ZTogW3doaXRlX2xlZnQsIHdoaXRlX3JpZ2h0XSxcclxuICAgICAgYmxhY2s6IFtibGFja19sZWZ0LCBibGFja19yaWdodF0sXHJcbiAgICAgIHBpbms6IFtwaW5rX2xlZnQsIHBpbmtfcmlnaHRdLFxyXG4gICAgICBwdXJwbGU6IFtwdXJwbGVfbGVmdCwgcHVycGxlX3JpZ2h0XSxcclxuICAgICAgYmVpZ2U6IFtiZWlnZV9sZWZ0LCBiZWlnZV9yaWdodF0sXHJcbiAgICAgIG1pbnQ6IFttaW50X2xlZnQsIG1pbnRfcmlnaHRdLFxyXG4gICAgfTtcclxuXHJcbiAgICBtYXNrQ29sb3Jbc3RvcmUuZ2V0U3RhdGUoKS5Db2xvclJlZHVjZXIubWFpbk1hc2tDb2xvciFdWzFdLm9ubG9hZCA9ICgpID0+XHJcbiAgICAgIG1haW4oKTtcclxuICB9IGVsc2UgaWYgKGZhY2VCb2FyZCA9PSAnZmFjZWJvYXJkJykge1xyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnY29sb3JTZWxlY3QnLCAnMCcpO1xyXG4gICAgc3RvcmUuZGlzcGF0Y2goYWN0aW9uQ3JlYXRvcnMuc2V0U2NhblN0YXJ0KHRydWUpKTtcclxuICAgIG1haW4oKTtcclxuICB9IGVsc2UgbWFpbigpO1xyXG5cclxuICAvLyBpZiAocmVuZGVyUG9pbnRjbG91ZCkge1xyXG4gIC8vICAgc3RhdGUucmVuZGVyUG9pbnRjbG91ZCA9IHRydWU7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBhc3luYyBmdW5jdGlvbiBzZXR1cENhbWVyYSgpOiBQcm9taXNlPEhUTUxWaWRlb0VsZW1lbnQ+IHtcclxuICAvLyAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAvLyAgICAgdmlkZW8ub25sb2FkZWRtZXRhZGF0YSA9ICgpID0+IHtcclxuICAvLyAgICAgICByZXNvbHZlKHZpZGVvKTtcclxuICAvLyAgICAgfTtcclxuICAvLyAgIH0pO1xyXG4gIC8vIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gcmVuZGVyUHJlZGljdGlvbigpIHtcclxuICAgIGNvbnN0IHNyY09iajogYW55ID0gdmlkZW8hLnNyY09iamVjdDtcclxuICAgIGlmICghc3JjT2JqLmFjdGl2ZSkge1xyXG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmlJZCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBwcmVkaWN0aW9uczogYW55O1xyXG4gICAgdHJ5IHtcclxuICAgICAgcHJlZGljdGlvbnMgPSBhd2FpdCBtb2RlbC5lc3RpbWF0ZUZhY2VzKHtcclxuICAgICAgICBpbnB1dDogdmlkZW8sXHJcbiAgICAgICAgcmV0dXJuVGVuc29yczogZmFsc2UsXHJcbiAgICAgICAgZmxpcEhvcml6b250YWw6IGZhbHNlLFxyXG4gICAgICAgIHByZWRpY3RJcmlzZXM6IGZhbHNlLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHJlbmRlclByZWRpY3Rpb24oKTtcclxuICAgICAgfSwgMzAwKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgLy8gYXdhaXQgY29udGV4dC5kcmF3SW1hZ2UodmlkZW8sIDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcclxuICAgIGlmIChpc0RldGVjdGVkKSBwcm9ncmVzcygpO1xyXG4gICAgZWxzZSBNTF9Mb2FkaW5nLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBpZiAocHJlZGljdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCBrZXlwb2ludHMgPSBwcmVkaWN0aW9uc1swXS5zY2FsZWRNZXNoO1xyXG4gICAgICAvLyBjb25zdCBib3hQb3MgPSBwcmVkaWN0aW9uc1swXS5ib3VuZGluZ0JveDtcclxuICAgICAgY29uc3QgdmlkZW9XaWR0aENhbGMgPSB2aWRlby52aWRlb1dpZHRoIC8gdmlkZW9XaWR0aDtcclxuICAgICAgY29uc3QgdmlkZW9IZWlnaHRDYWxjID0gdmlkZW8udmlkZW9IZWlnaHQgLyB2aWRlb0hlaWdodDtcclxuXHJcbiAgICAgIC8vIHBvc2l0aW9ucy5mb3JFYWNoKChpLGlkeCk9PntcclxuICAgICAgLy8gICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYigwLDAsMjU1KVwiXHJcbiAgICAgIC8vICAgICBjdHguZmlsbFJlY3QoaS54LGkueSwxLDEpXHJcbiAgICAgIC8vIH0pXHJcbiAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IGtleXBvaW50cy5tYXAoKGk6IG51bWJlcltdKSA9PiB7XHJcbiAgICAgICAgLy9mYWNlbWVzaOuKlCDruYTrlJTsmKTsnZggY2xpZW507IKs7J207KaI6rCA7JWE64uMIHZpZGVv7IKs7J207KaI66W8IOq4sOykgOycvOuhnCDtj6zsp4DshZjsnYQg66as7YS07ZWc64ukLlxyXG4gICAgICAgIC8v6re4656Y7IScIOq4sOq4sOyXkCDrp57qsowg66ee7Law7KeEIOy6lOuyhOyKpOyXkOuKlCDrp57sp4Ag7JWK6riwIOuVjOusuOyXkCDtlbTri7kg67mE7Jyo66GcIOyghO2ZmO2VtOyjvOuKlCDsnpHsl4XsnYQg6rGw7LOQ7JW8IO2VnOuLpC5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgeDogaVswXSAvIHZpZGVvV2lkdGhDYWxjLFxyXG4gICAgICAgICAgeTogaVsxXSAvIHZpZGVvSGVpZ2h0Q2FsYyxcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKGZhY2VCb2FyZCA9PSAnc2NhbicpIHtcclxuICAgICAgICBpZiAoIWlzRGV0ZWN0ZWQpIHtcclxuICAgICAgICAgIHByb2dyZXNzKCk7XHJcbiAgICAgICAgICB0ZXN0RXhwbGFpbi5pbm5lckhUTUwgPSBg7Y287Iqk64SQ7Lus65+sIOy4oeygleydhCDsnITtlbQg7Ja86rW07J2EIOy2lOy2nCDspJHsnoXri4jri6QuPGJyPiA8c3BhbiBzdHlsZT1cImNvbG9yIDogIzliODVkMDtcIj5UaXAgOiDstZzrjIDtlZwg67mb7J2YIOyYge2WpeydhCDrsJvsp4Ag7JWK64qUIOqzs+yXkOyEnCDsuKHsoJXtlbTrs7TshLjsmpQhPC9zcGFuPmA7XHJcbiAgICAgICAgICBpZiAoZmFjZURvdERyYXcuZHJhdyhwb3NpdGlvbnMpKSBpc0RldGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYgKFxyXG4gICAgICAgIC8vICAgcG9zaXRpb25zWzMwXS54IDwgY2FudmFzLndpZHRoIC8gMiAmJlxyXG4gICAgICAgIC8vICAgcG9zaXRpb25zWzMwXS54ID4gY2FudmFzLndpZHRoIC8gMiAtIDUwICYmXHJcbiAgICAgICAgLy8gICBwb3NpdGlvbnNbNV0ueSA8IGNhbnZhcy5oZWlnaHQgLyAyICsgMTAwICYmXHJcbiAgICAgICAgLy8gICBwb3NpdGlvbnNbNV0ueSA+IGNhbnZhcy5oZWlnaHQgLyAyIC0gMTAwXHJcbiAgICAgICAgLy8gKSB7XHJcbiAgICAgICAgLy8gICB0ZXN0RXhwbGFpbi5pbm5lckhUTUwgPSBg7ZS867aA7IOJ7J2EIOy2lOy2nCDspJEg7J6F64uI64ukLjxicj4gPHNwYW4gc3R5bGU9XCJjb2xvciA6ICM5Yjg1ZDA7XCI+VGlwIDog7LWc64yA7ZWcIOu5m+ydmCDsmIHtlqXsnYQg67Cb7KeAIOyViuuKlCDqs7Psl5DshJwg7Lih7KCV7ZW067O07IS47JqUITwvc3Bhbj5gO1xyXG4gICAgICAgIC8vICAgZmFjZURvdERyYXcuZHJhdyhwb3NpdGlvbnMsIHRydWUpO1xyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICB0ZXN0RXhwbGFpbi5pbm5lckhUTUwgPSBg7Ja86rW07J2EIOygleykkeyVmeyXkCDsnITsuZjsi5zsvJzso7zshLjsmpQuPGJyPiA8c3BhbiBzdHlsZT1cImNvbG9yIDogIzliODVkMDtcIj5UaXAgOiDstZzrjIDtlZwg67mb7J2YIOyYge2WpeydhCDrsJvsp4Ag7JWK64qUIOqzs+yXkOyEnCDsuKHsoJXtlbTrs7TshLjsmpQhPC9zcGFuPmA7XHJcbiAgICAgICAgLy8gICBmYWNlRG90RHJhdy5kcmF3KHBvc2l0aW9ucyk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyBjb25zdCBleWVMZW5ndGggPSBNYXRoLmFicyhwb3NpdGlvbnNbNF0ueSAtIHBvc2l0aW9uc1sxXS55KVxyXG4gICAgICAgIC8vIGNvbnN0IHJpZ2h0Q2hlZWsgPSBwb3NpdGlvbnNbNDI1XVxyXG4gICAgICAgIC8vIGNvbnN0IGxlZnRDaGVlayA9IHsgeDogcG9zaXRpb25zWzIwNV0ueCAtIGV5ZUxlbmd0aCwgeTogcG9zaXRpb25zWzIwNV0ueSB9XHJcbiAgICAgICAgLy8gY29uc3QgbGVmdFVuZGVyRXllID0gcG9zaXRpb25zWzExMF1cclxuXHJcbiAgICAgICAgLy8gY29uc3QgcmlnaHRVbmRlckV5ZSA9IHBvc2l0aW9uc1syNTJdXHJcblxyXG4gICAgICAgIC8vIGNvbnN0IGphdyA9IHBvc2l0aW9uc1syMDFdXHJcblxyXG4gICAgICAgIC8vIC8vIGF3YWl0IGN0eC5maWxsUmVjdChsZWZ0Q2hlZWsueCxsZWZ0Q2hlZWsueSwtZXllTGVuZ3RoLCBleWVMZW5ndGgvMilcclxuICAgICAgICAvLyAvLyBhd2FpdCBjdHguZmlsbFJlY3QocmlnaHRDaGVlay54LHJpZ2h0Q2hlZWsueSxleWVMZW5ndGgsIGV5ZUxlbmd0aC8yKVxyXG4gICAgICAgIC8vIC8vIGF3YWl0IGN0eC5maWxsUmVjdChsZWZ0VW5kZXJFeWUueCxsZWZ0VW5kZXJFeWUueSxleWVMZW5ndGgsIGV5ZUxlbmd0aC8yKVxyXG4gICAgICAgIC8vIC8vIGF3YWl0IGN0eC5maWxsUmVjdChyaWdodFVuZGVyRXllLngscmlnaHRVbmRlckV5ZS55LGV5ZUxlbmd0aCwgZXllTGVuZ3RoLzIpXHJcbiAgICAgICAgLy8gLy8gYXdhaXQgY3R4LmZpbGxSZWN0KGphdy54LGphdy55LGV5ZUxlbmd0aCwgZXllTGVuZ3RoLzIpXHJcblxyXG4gICAgICAgIC8vIGxldCBsZWZ0RXllU3VtID0gbmV3IGdldENvbG9yRGF0YShsZWZ0VW5kZXJFeWUsIGV5ZUxlbmd0aCwgY29udGV4dClcclxuICAgICAgICAvLyBsZXQgcmlnaHRFeWVTdW0gPSBuZXcgZ2V0Q29sb3JEYXRhKHJpZ2h0VW5kZXJFeWUsIGV5ZUxlbmd0aCwgY29udGV4dClcclxuXHJcbiAgICAgICAgLy8gbGV0IGxlZnRDaGVla1N1bSA9IG5ldyBnZXRDb2xvckRhdGEobGVmdENoZWVrLCBleWVMZW5ndGgsIGNvbnRleHQpXHJcbiAgICAgICAgLy8gbGV0IHJpZ2h0Q2hlZWtTdW0gPSBuZXcgZ2V0Q29sb3JEYXRhKHJpZ2h0Q2hlZWssIGV5ZUxlbmd0aCwgY29udGV4dClcclxuICAgICAgICAvLyBsZXQgamF3U3VtID0gbmV3IGdldENvbG9yRGF0YShqYXcsIGV5ZUxlbmd0aCwgY29udGV4dClcclxuXHJcbiAgICAgICAgLy8gbGV0IGV5ZVJlc3VsdCA9IGF3YWl0IGxlZnRFeWVTdW0ubWFwKChpLCBpZHgpID0+IHtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIChpICsgcmlnaHRFeWVTdW1baWR4XSkgLyAyXHJcbiAgICAgICAgLy8gfSlcclxuXHJcbiAgICAgICAgLy8gbGV0IGNoZWVrUmVzdWx0ID0gYXdhaXQgbGVmdENoZWVrU3VtLm1hcCgoaSwgaWR4KSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiAoaSArIHJpZ2h0Q2hlZWtTdW1baWR4XSkgLyAyXHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICAvLyBleWVDb2xvci5wdXNoKGV5ZVJlc3VsdClcclxuICAgICAgICAvLyBjaGVla0NvbG9yLnB1c2goY2hlZWtSZXN1bHQpXHJcbiAgICAgICAgLy8gamF3Q29sb3IucHVzaChqYXdTdW0pXHJcblxyXG4gICAgICAgIC8vIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7KGV5ZVJlc3VsdFswXSArIGNoZWVrUmVzdWx0WzBdICsgamF3U3VtWzBdKSAvIDN9LCR7KGV5ZVJlc3VsdFsxXSArIGNoZWVrUmVzdWx0WzFdICsgamF3U3VtWzFdKSAvIDN9LCR7KGV5ZVJlc3VsdFsyXSArIGNoZWVrUmVzdWx0WzJdICsgamF3U3VtWzJdKSAvIDN9KWBcclxuXHJcbiAgICAgICAgLy8gY29uc3QgcmdiQm94ID0gKGNhbnZhcy5oZWlnaHQgKyBjYW52YXMud2lkdGgpIC8gMiAvIDRcclxuICAgICAgICAvLyBjdHguZmlsbFJlY3QoMCwgMCwgcmdiQm94LCByZ2JCb3gpXHJcbiAgICAgIH0gZWxzZSBpZiAoZmFjZUJvYXJkID09ICdmYWNlYm9hcmQnKSB7XHJcbiAgICAgICAgdGVzdEV4cGxhaW4uaW5uZXJUZXh0ID1cclxuICAgICAgICAgICftlLzrtoDthqTsnbQg7KCV64+I65CY66mwIOydtOuqqeq1rOu5hOqwgCDrmJDroLftlbTrs7TsnbTripQg7IOJ7J2EIOyEoO2DnSDtlbTso7zshLjsmpQuJztcclxuICAgICAgICAvLyBjb25zdCBjb2xvclJnYiA9IHN0b3JlLmdldFN0YXRlKCkuQ29sb3JSZWR1Y2VyLm1haW5GYWNlQm9hcmRDb2xvcjtcclxuICAgICAgICBjb25zdCB7IHNlbGZDb2xvcnMsIHNlbGZSZXN1bHQgfSA9IHN0b3JlLmdldFN0YXRlKCkuQ29sb3JSZWR1Y2VyO1xyXG4gICAgICAgIGNvbnN0IGNvbG9yUmdiID0gc2VsZkNvbG9yc1tzZWxmUmVzdWx0Lmxlbmd0aF07XHJcbiAgICAgICAgaWYgKGNvbG9yUmdiKSBmYWNlQmdEcmF3LmRyYXdMb29wKHBvc2l0aW9ucywgY29sb3JSZ2IpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFsZXJ0KCcxMycpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICB0ZXN0RXhwbGFpbi5pbm5lclRleHQgPVxyXG4gICAgICAgICAgICAn7ZWY64uo7J2YIOuniOyKpO2BrOulvCDshKDtg53tlZjsl6wg7ZWE7YSw66W8IOyggeyaqe2VtOuztOyEuOyalCc7XHJcbiAgICAgICAgICBjb25zdCBtYWluQ29sb3IgPVxyXG4gICAgICAgICAgICBtYXNrQ29sb3Jbc3RvcmUuZ2V0U3RhdGUoKS5Db2xvclJlZHVjZXIubWFpbk1hc2tDb2xvciFdO1xyXG4gICAgICAgICAgY29uc3QgbGVmdE1hc2sgPSBtYWluQ29sb3JbMF07XHJcbiAgICAgICAgICBjb25zdCByaWdodE1hc2sgPSBtYWluQ29sb3JbMV07XHJcbiAgICAgICAgICBuZXcgTWFza0RyYXcoXHJcbiAgICAgICAgICAgIGNhbnZhcyxcclxuICAgICAgICAgICAgbGVmdE1hc2ssXHJcbiAgICAgICAgICAgIHJpZ2h0TWFzayxcclxuICAgICAgICAgICAgcG9zaXRpb25zLFxyXG4gICAgICAgICAgICB0eXBlQXJyWzBdLFxyXG4gICAgICAgICAgICB0eXBlQXJyWzFdLFxyXG4gICAgICAgICAgICB0eXBlQXJyWzJdLFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgdHJhY2tzWzBdLnN0b3AoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgYW5pSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyUHJlZGljdGlvbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbmlJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXJQcmVkaWN0aW9uKTtcclxuICAgICAgdGVzdEV4cGxhaW4uaW5uZXJIVE1MID0gYOyWvOq1tOydhCDsnbjsi53tlaAg7IiYIOyeiOuPhOuhnSDsubTrqZTrnbzrpbwg67CU652867SQ7KO87IS47JqULjxicj4gPHNwYW4gc3R5bGU9XCJjb2xvciA6ICM5Yjg1ZDA7XCI+VGlwIDog7LWc64yA7ZWcIOu5m+ydmCDsmIHtlqXsnYQg67Cb7KeAIOyViuuKlCDqs7Psl5DshJwg7Lih7KCV7ZW067O07IS47JqUITwvc3Bhbj5gO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2coYW5pSWQpO1xyXG4gICAgLy8gICBzdGF0cy5lbmQoKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIG1haW4oKSB7XHJcbiAgICBjb25zdCBjaGVjayA9IHRydWU7XHJcbiAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIC8vICAgaWYgKCFtb2RlbCkge1xyXG4gICAgLy8gICAgIGNoZWNrID0gZmFsc2U7XHJcbiAgICAvLyAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pSWQpO1xyXG4gICAgLy8gICAgIGlmIChcclxuICAgIC8vICAgICAgIGNvbmZpcm0oXHJcbiAgICAvLyAgICAgICAgICfquLDquLDsnZgg7IKs7JaR7J20IOuCruyVhCDsm5DtmZztlZwg7Lih7KCV7J20IO2emOuTreuLiOuLpC4g7ZmV7J247J2EIOuIhOultOyLnOuptCDsnbTrr7jsp4Ag7Lih7KCVIOuwqeyLneycvOuhnCDsoITtmZjtlanri4jri6QuIOy3qOyGjOulvCDriITrpbTsi5zrqbQg6re464yA66GcIOynhO2Wie2VqeuLiOuLpC4nLFxyXG4gICAgLy8gICAgICAgKVxyXG4gICAgLy8gICAgICkge1xyXG4gICAgLy8gICAgICAgY2hlY2sgPSBmYWxzZTtcclxuICAgIC8vICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpc1NjYW5Qb3NzaWJsZScsICdmYWxzZScpO1xyXG4gICAgLy8gICAgICAgaGVhZGVyV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgLy8gICAgICAgaGVhZGVyV3JhcHBlci5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgLy8gICAgICAgdGVzdFdyYXBwZXIuc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICAgIC8vICAgICAgIHRyYWNrc1swXS5zdG9wKCk7XHJcbiAgICAvLyAgICAgICBjYW52YXMucmVtb3ZlKCk7XHJcbiAgICAvLyAgICAgICB2aWRlby5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgLy8gICAgICAgTUxfTG9hZGluZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgLy8gICAgICAgSW1hZ2VVcGxvYWQoZmFjZUJvYXJkKTtcclxuICAgIC8vICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICB9IGVsc2UgY2hlY2sgPSB0cnVlO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9LCAxNTAwMDApO1xyXG5cclxuICAgIGlmICghbW9kZWwpIHtcclxuICAgICAgbW9kZWwgPSBhd2FpdCBmYWNlTGFuZG1hcmtzRGV0ZWN0aW9uLmxvYWQoXHJcbiAgICAgICAgZmFjZUxhbmRtYXJrc0RldGVjdGlvbi5TdXBwb3J0ZWRQYWNrYWdlcy5tZWRpYXBpcGVGYWNlbWVzaCxcclxuICAgICAgICB7IG1heEZhY2VzOiAxIH0sXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hlY2spIHtcclxuICAgICAgaWYgKGZhY2VCb2FyZCAhPSAnbWFzaycpIHtcclxuICAgICAgICBoZWFkZXJXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgaGVhZGVyV3JhcHBlci5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBhd2FpdCB0Zi5zZXRCYWNrZW5kKHN0YXRlLmJhY2tlbmQpO1xyXG4gICAgICAvLyAgIHN0YXRzLnNob3dQYW5lbCgwKTsgIC8vIDA6IGZwcywgMTogbXMsIDI6IG1iLCAzKzogY3VzdG9tXHJcbiAgICAgIC8vICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdGF0cy5kb20pO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHRlc3RXcmFwcGVyLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcblxyXG4gICAgICAgIHZpZGVvLnBsYXkoKTtcclxuICAgICAgICB2aWRlby5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICB2aWRlb1dpZHRoID0gdmlkZW8uY2xpZW50V2lkdGg7XHJcbiAgICAgICAgY29uc29sZS5sb2codmlkZW8uY2xpZW50V2lkdGgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHZpZGVvKTtcclxuICAgICAgICBjYW52YXMud2lkdGggPSB2aWRlb1dpZHRoO1xyXG5cclxuICAgICAgICBpZiAodHlwZUFyclsyXSkge1xyXG4gICAgICAgICAgdmlkZW9IZWlnaHQgPSAzMzg7XHJcbiAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gMzM4O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB2aWRlb0hlaWdodCA9IHZpZGVvLmNsaWVudEhlaWdodDtcclxuICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSB2aWRlby5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSE7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IEdSRUVOO1xyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IEdSRUVOO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAwLjU7XHJcbiAgICAgICAgdGVzdFdyYXBwZXIuaW5zZXJ0QmVmb3JlKGNhbnZhcywgdGVzdFdyYXBwZXIuZmlyc3RDaGlsZCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGNvbnN0IGNlbnRlclggPSBjYW52YXMud2lkdGggLyAyO1xyXG4gICAgICAvLyBjb25zdCBjZW50ZXJZID0gY2FudmFzLmhlaWdodCAvIDI7XHJcbiAgICAgIGlmIChmYWNlQm9hcmQgPT09ICdmYWNlYm9hcmQnKSBmYWNlQmdEcmF3ID0gbmV3IGRyYXdGYWNlQkcoY2FudmFzLCB2aWRlbyk7XHJcbiAgICAgIGZhY2VEb3REcmF3ID0gbmV3IGRyYXdGYWNlTGluZShjYW52YXMpO1xyXG4gICAgICByZW5kZXJQcmVkaWN0aW9uKCk7XHJcbiAgICB9XHJcbiAgICAvLyAgIGxldCBjaGVjayA9IHRydWU7XHJcbiAgICAvLyAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgLy8gICAgIGlmICghbW9kZWwpIHtcclxuICAgIC8vICAgICAgIGNoZWNrID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmlJZCk7XHJcbiAgICAvLyAgICAgICBpZiAoXHJcbiAgICAvLyAgICAgICAgIGNvbmZpcm0oXHJcbiAgICAvLyAgICAgICAgICAgJ+q4sOq4sOydmCDsgqzslpHsnbQg64Ku7JWEIOybkO2ZnO2VnCDsuKHsoJXsnbQg7Z6Y65Ot64uI64ukLiDtmZXsnbjsnYQg64iE66W07Iuc66m0IOydtOuvuOyngCDsuKHsoJUg67Cp7Iud7Jy866GcIOyghO2ZmO2VqeuLiOuLpC4g7Leo7IaM66W8IOuIhOultOyLnOuptCDqt7jrjIDroZwg7KeE7ZaJ7ZWp64uI64ukLicsXHJcbiAgICAvLyAgICAgICAgIClcclxuICAgIC8vICAgICAgICkge1xyXG4gICAgLy8gICAgICAgICBjaGVjayA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaXNTY2FuUG9zc2libGUnLCAnZmFsc2UnKTtcclxuICAgIC8vICAgICAgICAgaGVhZGVyV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgLy8gICAgICAgICBoZWFkZXJXcmFwcGVyLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAvLyAgICAgICAgIHRlc3RXcmFwcGVyLnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcbiAgICAvLyAgICAgICAgIHRyYWNrc1swXS5zdG9wKCk7XHJcbiAgICAvLyAgICAgICAgIGNhbnZhcy5yZW1vdmUoKTtcclxuICAgIC8vICAgICAgICAgdmlkZW8uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIC8vICAgICAgICAgTUxfTG9hZGluZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgLy8gICAgICAgICBJbWFnZVVwbG9hZChmYWNlQm9hcmQpO1xyXG4gICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgICB9IGVsc2UgY2hlY2sgPSB0cnVlO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgfSwgMTUwMDApO1xyXG5cclxuICAgIC8vICAgaWYgKCFtb2RlbCkge1xyXG4gICAgLy8gICAgIGZhY2VMYW5kbWFya3NEZXRlY3Rpb25cclxuICAgIC8vICAgICAgIC5sb2FkKGZhY2VMYW5kbWFya3NEZXRlY3Rpb24uU3VwcG9ydGVkUGFja2FnZXMubWVkaWFwaXBlRmFjZW1lc2gsIHtcclxuICAgIC8vICAgICAgICAgbWF4RmFjZXM6IDEsXHJcbiAgICAvLyAgICAgICB9KVxyXG4gICAgLy8gICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGlmIChjaGVjaykge1xyXG4gICAgLy8gICAgICAgICAgIG1vZGVsID0gZGF0YTtcclxuICAgIC8vICAgICAgICAgICBpZiAoZmFjZUJvYXJkICE9ICdtYXNrJykge1xyXG4gICAgLy8gICAgICAgICAgICAgaGVhZGVyV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgLy8gICAgICAgICAgICAgaGVhZGVyV3JhcHBlci5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgLy8gICAgICAgICAgICAgZmFjZURvdERyYXcgPSBuZXcgZHJhd0ZhY2VMaW5lKGNhbnZhcyk7XHJcbiAgICAvLyAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgIHRlc3RXcmFwcGVyLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAvLyAgICAgICAgICAgdmlkZW8ucGxheSgpO1xyXG4gICAgLy8gICAgICAgICAgIHZpZGVvLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgLy8gICAgICAgICAgIGNhbnZhcy5jbGFzc05hbWUgPSAnZmFjZUNhbnZhcyc7XHJcbiAgICAvLyAgICAgICAgICAgdmlkZW9XaWR0aCA9IHZpZGVvLmNsaWVudFdpZHRoO1xyXG4gICAgLy8gICAgICAgICAgIGNhbnZhcy53aWR0aCA9IHZpZGVvV2lkdGg7XHJcbiAgICAvLyAgICAgICAgICAgY2FudmFzLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIC8vICAgICAgICAgICBjYW52YXMuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKC0xLDEpJztcclxuICAgIC8vICAgICAgICAgICBjYW52YXMuc3R5bGUuekluZGV4ID0gJyA5OTcnO1xyXG4gICAgLy8gICAgICAgICAgIGNhbnZhcy5zdHlsZS5sZWZ0ID0gJzAnO1xyXG5cclxuICAgIC8vICAgICAgICAgICBpZiAodHlwZUFyclsyXSkge1xyXG4gICAgLy8gICAgICAgICAgICAgdmlkZW9IZWlnaHQgPSAzMzg7XHJcbiAgICAvLyAgICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gMzM4O1xyXG4gICAgLy8gICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICAgICAgICB2aWRlb0hlaWdodCA9IHZpZGVvLmNsaWVudEhlaWdodDtcclxuICAgIC8vICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSB2aWRlby5jbGllbnRIZWlnaHQ7XHJcbiAgICAvLyAgICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgICAgICBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSE7XHJcbiAgICAvLyAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IEdSRUVOO1xyXG4gICAgLy8gICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IEdSRUVOO1xyXG4gICAgLy8gICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAwLjU7XHJcbiAgICAvLyAgICAgICAgICAgdGVzdFdyYXBwZXIuaW5zZXJ0QmVmb3JlKGNhbnZhcywgdGVzdFdyYXBwZXIuZmlyc3RDaGlsZCk7XHJcbiAgICAvLyAgICAgICAgICAgYW5pSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyUHJlZGljdGlvbik7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgIH0pO1xyXG4gICAgLy8gICB9XHJcblxyXG4gICAgLy8gICAvLyBhd2FpdCB0Zi5zZXRCYWNrZW5kKHN0YXRlLmJhY2tlbmQpO1xyXG4gICAgLy8gICAvLyAgIHN0YXRzLnNob3dQYW5lbCgwKTsgIC8vIDA6IGZwcywgMTogbXMsIDI6IG1iLCAzKzogY3VzdG9tXHJcbiAgICAvLyAgIC8vICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdGF0cy5kb20pO1xyXG5cclxuICAgIC8vICAgLy8gY29uc3QgY2VudGVyWCA9IGNhbnZhcy53aWR0aCAvIDI7XHJcbiAgICAvLyAgIC8vIGNvbnN0IGNlbnRlclkgPSBjYW52YXMuaGVpZ2h0IC8gMjtcclxuXHJcbiAgICAvLyAgIHJldHVybjtcclxuICAgIC8vIH1cclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgZnVuY3Rpb24gcHJvZ3Jlc3MoKSB7XHJcbiAgICBjb25zdCBhZGQgPSBNYXRoLnJhbmRvbSgpICogMztcclxuICAgIHByb2dyZXNzQ250ICs9IGFkZDtcclxuICAgIGlmIChwcm9ncmVzc0NudCA+IDEwMCkgcHJvZ3Jlc3NDbnQgPSAxMDA7XHJcbiAgICBwcm9ncmVzc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1mbGV4JztcclxuICAgIHByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gcHJvZ3Jlc3NDbnQudG9GaXhlZCgyKSArICclJztcclxuICAgIHBlcmNlbnQuaW5uZXJUZXh0ID0gcHJvZ3Jlc3NDbnQudG9GaXhlZCgyKSArICclJztcclxuICB9XHJcbn1cclxuXHJcbi8vIGluaXRpYWxpemUgdGhlIHRpbWVyIHZhcmlhYmxlcyBhbmQgc3RhcnQgdGhlIGFuaW1hdGlvblxyXG4iXSwic291cmNlUm9vdCI6IiJ9