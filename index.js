/**
 * 设置LayaNative屏幕方向，可设置以下值
 * landscape           横屏
 * portrait            竖屏
 * sensor_landscape    横屏(双方向)
 * sensor_portrait     竖屏(双方向)
 */
window.screenOrientation = "portrait";

//-----libs-begin-----
loadLib("libs/min/laya.core.min.js")
loadLib("libs/min/laya.ani.min.js")
loadLib("libs/min/laya.ui.min.js")
loadLib("libs/min/laya.d3.min.js")
loadLib("libs/min/laya.physics3D.min.js")
//-----libs-end-------
//-----lw-------------
// loadLib("libs/min/lwsdk.min.min.js");
//-----lw-------------
//-----syyx-----------
// loadLib("3rd/syyxh5frameworksdk.js");
// loadLib("3rd/tpfsdk/3rd/md5.js");
// loadLib("3rd/tpfsdk/communication/httputils.js");
// loadLib("3rd/tpfsdk/sdk/tpfclientsdk.js");
// loadLib("3rd/tpfsdk/sdk/tpfconfig.js");
// loadLib("3rd/tpfsdk/sdk/tpfstat.js");
//-----syyx-----------
loadLib("js/bundle.js");
