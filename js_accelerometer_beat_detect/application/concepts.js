float pastMillis;

if(pAcc[0]<0 && acc[0]>0){  //This condition it's true only when we cross zero from top to bottom
                                //the following instructions, inside the if, will only take place at zero crossings from top to bottom

      float period = millis() - pastMillis;  //Calculates how much time has past since we last crossed zero
                                             //by subtracting the pastMillis value to the current one.

      float BPM = 60/(period/1000);  //Calculates the equivalent BPM to the period that has just been calculated above.

      println("-Zero up crossing: "+counter+//Displays in the log below the number of times we've crossed zero,
      "#  -Period: "+period+                //the length of the period since we last crossed zero
      "ms  -BPM: "+BPM+"BPM");              //and the current BPM based on the period.

      pastMillis = millis();  //Updates the value of the pastMillis to the current millis() value.
      counter++;    //Increments the counter of times when zero is crossed from top to bottom
  }
