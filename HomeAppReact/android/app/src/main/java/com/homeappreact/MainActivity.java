package com.homeappreact;

import android.os.Bundle;

import com.facebook.react.ReactActivity;

import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

//import android.os.Bundle; // here
//import org.devio.rn.splashscreen.SplashScreen; // here

//import org.devio.rn.splashscreen.SplashScreen;
//import org.devio.rn.splashscreen.SplashScreen;
//import org.devio.rn.splashscreen.SplashScreen;
import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {


    @Override
   protected void onCreate(Bundle saveInstanceState){
        SplashScreen.show(this);
        super.onCreate(saveInstanceState);
    }
    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
      ////// New X
   /*  @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this,true);  // here
        super.onCreate(savedInstanceState);
    }*/


    @Override
    protected String getMainComponentName() {
        return "HomeAppReact";
    }

      @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
       return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
  }
}
