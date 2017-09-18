/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@interface AppDelegate()

@property(nonatomic, strong) RCTRootView *rootView;

@end

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
  NSURL *jsCodeLocation;

  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];

  NSDictionary *props = @{@"statusBarHeight": [self currentStatusBarHeight]};
                           
  self.rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"fodo"
                                               initialProperties:props
                                                   launchOptions:launchOptions];
  self.rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = self.rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  return YES;
}
                           
- (void)application:(UIApplication *)application didChangeStatusBarFrame:(CGRect)oldStatusBarFrame {
  self.rootView.appProperties = @{@"statusBarHeight": [self currentStatusBarHeight]};
}

- (NSNumber *)currentStatusBarHeight {
  CGFloat statusBarHeight = [UIApplication sharedApplication].statusBarFrame.size.height;
  return [NSNumber numberWithFloat:statusBarHeight];
}

@end
