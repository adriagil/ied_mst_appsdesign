import codeanticode.gsvideo.*;
import monclubelec.javacvPro.*;

PImage imgSrc, imgDest;
GSCapture cam;

OpenCV opencv;
Blob[] blobsArray = null;
ConvexityDefect[] cdArray = null;

int widthCapture = 320;
int heightCapture = 240;
int fpsCapture = 20;

long millis0 = 0;

void setup() {
  // ---- graphic parameters
  colorMode(RGB, 255,255,255);
  fill(0,0,255);
  stroke (0,0,255);
  rectMode(CORNER); 
  imageMode(CORNER);
  ellipseMode(CENTER);
        
  frameRate(30);

  // --- main window 
  size(widthCapture*2, heightCapture*2); 
  background(0,0,0);
        
  // --- camera
  cam = new GSCapture(this, widthCapture, heightCapture, "0");
  cam.start();
  
  // --- opencv
  opencv = new OpenCV(this);
  opencv.allocate(widthCapture, heightCapture);
}

void  draw() {
  if (cam.available() == true) {
    cam.read(); 
    
    imgSrc = cam.get();
    opencv.copy(imgSrc);
    
    millis0 = millis();  
    
    opencv.blur();
    image(opencv.image(), 0, 0);
    
    opencv.absDiff();
    image(opencv.getMemory2(), 0, heightCapture); 
    
    opencv.threshold(opencv.Memory2, 0.2, "BINARY");
    image(opencv.getMemory2(), widthCapture, heightCapture);
    
    blobsArray = opencv.blobs(opencv.Memory2, opencv.area()/64, opencv.area(), 20, true, 10000, false);
    
    opencv.drawRectBlobs(blobsArray, opencv.width(), opencv.height(), 1);
    opencv.drawBlobs(blobsArray, opencv.width(), opencv.height(), 1);
    opencv.drawCentroidBlobs(blobsArray, opencv.width(), opencv.height(), 1);

    for (int i = 0; i < blobsArray.length; i++) {
      cdArray = opencv.convexityDefects(blobsArray[i], (float)20, radians(110), false); 
      opencv.drawConvexityDefects(cdArray, opencv.width(),opencv.height(), 1.0, 10, color(0,255,255), 2, false, 0, true, color(0,0,255), 2, 1, false); 
    }
    
    int nDigits = opencv.detectFinger(cdArray, false); 
    
    println("> Number of digits: " + nDigits); 
    
    /*if (nDigits >= 10) {
      println("Thumb opened and " + (nDigits-10) + " fingers opened."); 
    }
    else if (nDigits < 5) {
      println("Thumb closed and " + (nDigits) + " fingers opened"); 
    }
    else if (nDigits == 5) {
      println((nDigits) + " fingers opened"); 
    }*/
    
    println("...image processing time took: " + (millis()-millis0) + "ms."); 
    println("*********");
  } // end if available

} // end draw()

void keyPressed() {
  if(key==' ') { 
    opencv.remember();
    image(opencv.getMemory(), widthCapture,0);
  } 
}

public void stop(){ 
  cam.delete();
  super.stop(); 
}
