import sys
import RPi.GPIO as GPIO

RELAY = int(sys.argv[1])
print(RELAY)

GPIO.setmode(GPIO.BCM)

GPIO.setup(RELAY, GPIO.OUT)
	
GPIO.output(RELAY, GPIO.LOW)
