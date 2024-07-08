#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(HyperView, NSObject)
RCT_EXTERN_METHOD(openARView:(NSInteger)nodeId)
RCT_EXTERN_METHOD(closeARView)
RCT_EXTERN_METHOD(multiply:(float)a withB:(float)b
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
