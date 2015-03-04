import codeanticode.gsvideo.*;
import monclubelec.javacvPro.*;

PImage imgSrc, imgDest;
GSCapture cam1;
OpenCV opencv;

Blob[] blobsArray = null;

// capture size
int widthCapture = 320;
int heightCapture = 240;
int fpsCapture = 20;

void setup() {
  colorMode(RGB, 255,255,255);
  fill(0,0,255);
  stroke(0,0,255);
  rectMode(CORNER);
  ellipseMode(CENTER);
  imageMode(CORNER);
  
  frameRate(30);
  
  size(widthCapture*2, heightCapture*2);
  background(0,0,0);
  
  cam1 = new GSCapture(this, widthCapture, heightCapture, "0");
  cam1.start();
  
  opencv = new OpenCV(this);
  opencv.allocate(widthCapture, heightCapture);
}

void draw() {
  if (cam1.available() == true) { // new frame available
    cam1.read(); // new frame adquisition
    
    // image processing to binary format
    imgSrc = cam1.get();
    opencv.copy(imgSrc);
    //opencv.copy(cam1.get());
    
    opencv.blur();
    
    image(opencv.image(), 0, 0);
    opencv.absDiff();
    image(opencv.getMemory2(), 0, heightCapture);
    
    opencv.threshold(opencv.Memory2, 0.2, "BINARY");
    
    image(opencv.getMemory2(), widthCapture, heightCapture);
    
    // blob detection
    blobsArray = opencv.blobs(opencv.Memory2, opencv.area()/64, opencv.area(), 20, true, 10000, true);
    opencv.drawRectBlobs(blobsArray, opencv.width(), opencv.height(), 1);
    opencv.drawBlobs(blobsArray, opencv.width(), opencv.height(), 1);
    opencv.drawCentroidBlobs(blobsArray, opencv.width(), opencv.height(), 1);
  }
}

void keyPressed() {
  if (key == ' ') {
    opencv.remember();
    image(opencv.getMemory(), widthCapture, 0);
  }
}

public void stop() {
  cam1.delete();
  
  super.stop();
}


