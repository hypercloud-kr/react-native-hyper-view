package com.hyperview

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
import com.hypercloud.connect.HyperCloudConnect

class HyperViewModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
  private val reactContext: ReactApplicationContext = reactApplicationContext

  override fun getName(): String {
    return NAME
  }

  // Example method
  // See https://reactnative.dev/docs/native-modules-android
  @ReactMethod
  fun multiply(a: Double, b: Double, promise: Promise) {
    promise.resolve(a * b)
  }

  @ReactMethod
  fun initializeHyperView() {
    HyperCloudConnect.initialize(reactContext)
  }

  @ReactMethod
  fun openARView(id: Int) {
    HyperCloudConnect.openUnityActivity(reactContext, id)
    //        val intent = Intent(reactApplicationContext, TestActivity::class.java)
    //        intent.putExtra("id", id)
    //        intent.flags = Intent.FLAG_ACTIVITY_NEW_TASK
    //        reactApplicationContext.startActivity(intent)
  }

  companion object {
    const val NAME = "HyperView"
  }
}
