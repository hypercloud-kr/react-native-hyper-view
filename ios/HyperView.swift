import HyperXRConnect

@objc(HyperView)
class HyperView: NSObject {
  override init() {
    super.init()
    HyperCloudConnect.shared.initialize()
  }
  @objc(openARView:)
  func openARView(withNodeId nodeId:Int){
    DispatchQueue.main.async {
      HyperCloudConnect.shared.showUnityView(nodeId: nodeId)
    }
  }
  
  @objc(closeARView)
  func closeARView(){
    DispatchQueue.main.async {
      HyperCloudConnect.shared.closeUnityView()
    }
  }
  
  @objc(multiply:withB:withResolver:withRejecter:)
  func multiply(a: Float, b: Float, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
    resolve(a*b)
  }
}
