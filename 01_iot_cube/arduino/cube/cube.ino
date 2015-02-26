void setup() {
  Serial.begin(9600);
}

void loop() {
  int knob1 = analogRead(A0);
  int knob2 = analogRead(A1);
  int knob3 = analogRead(A2);

  String output = (String)knob1 + "#" + (String)knob2 + "#" + (String)knob3;
  
  Serial.println(output);
}
