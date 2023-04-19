package com.measure.views;

import android.content.Intent;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.measure.MainActivity;
import com.measure.MainActivity2;


public class LoaderModule extends ReactContextBaseJavaModule {
    public LoaderModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "LoaderModule";
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public void launchARSession(){
        Intent intent = new Intent(this.getCurrentActivity(), MainActivity2.class);
        this.getCurrentActivity().startActivity(intent);
    }
}
